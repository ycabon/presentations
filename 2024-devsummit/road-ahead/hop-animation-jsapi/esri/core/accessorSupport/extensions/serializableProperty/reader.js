// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../Logger ../../../object ../../../Warning ../../metadata ./type".split(" "),function(n,z,A,B,C,D){function u(a){var b=a.ndimArray??0;if(1<b)return E(a);if(1===b)return v(a);if("type"in a&&w(a.type)){b=a.type.prototype?.itemType?.Type;const c=v("function"===typeof b?{type:b}:{types:b});return(e,d,f)=>(e=c(e,d,f))?new a.type(e):e}return p(a)}function p(a){return"type"in a?F(a.type):G(a.types)}function F(a){return a.prototype.read?(b,c,e)=>{if(null==b)return b;c=typeof b;if("object"!==
c)q().error(`Expected JSON value of type 'object' to deserialize type '${a.prototype.declaredClass}', but got '${c}'`);else return c=new a,c.read(b,e),c}:a.fromJSON}function x(a,b,c,e){return 0!==e&&Array.isArray(b)?b.map(d=>x(a,d,c,e-1)):a(b,void 0,c)}function E(a){const b=p(a),c=x.bind(null,b),e=a.ndimArray??0;return(d,f,h)=>{if(null==d)return d;d=c(d,h,e);f=e;for(h=d;0<f&&Array.isArray(h);)f--,h=h[0];if(void 0!==h)for(h=0;h<f;h++)d=[d];return d}}function v(a){const b=p(a);return(c,e,d)=>{if(null==
c)return c;if(Array.isArray(c)){e=[];for(const f of c)c=b(f,void 0,d),void 0!==c&&e.push(c);return e}d=b(c,void 0,d);return void 0!==d?[d]:void 0}}function w(a){return D.isCollection(a)?(a=a.prototype.itemType)&&a.Type?"function"===typeof a.Type?r(a.Type):y(a.Type):!1:!1}function r(a){return Array.isArray(a)?!1:!!a&&a.prototype&&("read"in a.prototype||"fromJSON"in a||w(a))}function y(a){for(const b in a.typeMap)if(!r(a.typeMap[b]))return!1;return!0}function G(a){let b=null;const c=a.errorContext??
"type",e=a.validate;return(d,f,h)=>{if(null==d)return d;f=typeof d;if("object"!==f)q().error(`Expected JSON value of type 'object' to deserialize, but got '${f}'`);else{if(!b){f={};for(var g in a.typeMap){const m=a.typeMap[g];var k=C.getPropertiesMetadata(m.prototype);if("function"===typeof a.key)continue;k=k[a.key];if(!k)continue;k.json?.type&&Array.isArray(k.json.type)&&1===k.json.type.length&&"string"===typeof k.json.type[0]&&(f[k.json.type[0]]=m);k=k.json?.write;if(!k?.writer){f[g]=m;continue}var l=
k.target;l="string"===typeof l?l:a.key;const t={};k.writer(g,t,l);t[l]&&(f[t[l]]=m)}b=f}g=a.key;if("string"===typeof g){if(f=(g=d[g])?b[g]:a.defaultKeyValue?a.typeMap[a.defaultKeyValue]:void 0)return g=new f,g.read(d,h),e?e(g):g;g=`Type '${g||"unknown"}' is not supported`;h?.messages&&d&&h.messages.push(new B(`${c}:unsupported`,g,{definition:d,context:h}));q().error(g)}}}}const q=()=>z.getLogger("esri.core.accessorSupport.extensions.serializableProperty.reader");n.create=function(a,b,c){a&&(c||b.read)&&
!b.read?.reader&&!1!==b.read?.enabled&&(c="types"in a?y(a.types):r(a.type),c&&A.setDeepValue("read.reader",u(a),b))};n.createTypeReader=u;Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});