// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../core/tsSupport/extendsHelper ../../core/tsSupport/assignHelper ../../core/tsSupport/makeTemplateObjectHelper ../../core/Error ../../core/promiseUtils ../schema ./utils".split(" "),function(E,t,h,m,F,y,S,z,q,r,v){function G(b,a){if(a.properties){if("layerType"in a.properties)return a.properties.layerType.enum[0];if("type"in a.properties)return a.properties.type.enum[0]}switch(b){case "multipoint_geometry_schema.json":return"multipoint";
case "point_geometry_schema.json":return"point";case "polyline_geometry_schema.json":return"polyline";case "polygon_geometry_schema.json":return"polygon";case "extent_schema.json":return"extent"}}function A(b){return"array"===b.type?A(b.items)+"[]":b.type}function H(b){var a={count:b.length,refsCount:0,typesCount:0,distinctTypes:[],type:null},c=new Set,d;for(d in b){var e=b[d];e.$ref?a.refsCount++:e.type&&(a.typesCount++,c.add(A(e)))}c.forEach(function(b){return a.distinctTypes.push(b)});a.distinctTypes.sort();
a.refsCount===a.count?a.type="refs":2===a.count&&0<a.refsCount&&1===a.distinctTypes.length&&"null"===a.distinctTypes[0]?a.type="refsAndNull":a.typesCount===a.count?(a.type="types",a.distinctTypes=a.distinctTypes):a.type="mix";return a}function w(b,a,c,d,e){return m(this,void 0,void 0,function(){var g,f,k,l,n;return h(this,function(p){switch(p.label){case 0:e.schemaStack.push(b);g=G(b,c);d=d?d.replace("\x3c?TYPE?\x3e",g?"\x3c"+g+"\x3e":""):null;if("array"!==c.type&&"properties"in c)return[3,2];(f=
e.currentClass?null:{type:b,name:b,id:b+"--"+a,typeValue:a,properties:[]})&&e.push(null,f);return[4,u(c,d,e)];case 1:return p.sent(),e.schemaStack.pop(),[2,f];case 2:e.hasFilteredProperties?(p=e.filteredPropertiesArray.join("/"),k=b+"--"+a+"--"+p):k=b+"--"+a;if((l="drawingInfo_schema.json"!==b&&e.seen.get(k))&&d)return e.addProperty({name:d,type:l}),e.schemaStack.pop(),[2,l];n={type:b,name:b,id:k,typeValue:a,properties:[]};d&&e.addProperty({name:d,type:n});e.push(d,n);return[4,u(c,"",e)];case 3:return p.sent(),
e.schemaStack.pop(),[2,e.pop()]}})})}function B(b,a,c){return m(this,void 0,void 0,function(){var d,e,g,f,k,l,n;return h(this,function(p){switch(p.label){case 0:return[4,c.requestSchema(b.$ref)];case 1:d=p.sent();var h=d.schema;e="layerDefinition"===h.title?null:(h=h.properties&&h.properties.type)&&h.enum?h.enum:null;if(!e)return[3,6];g=0;f=e;p.label=2;case 2:if(!(g<f.length))return[3,5];k=f[g];l=y({},d.schema);l.properties=y({},l.properties,{type:{type:"string",enum:[k]}});n=-1===a.indexOf("\x3c?TYPE?\x3e")?
a+"\x3c?TYPE?\x3e":a;return[4,w(d.schemaId,k,l,n,c)];case 3:p.sent(),p.label=4;case 4:return g++,[3,2];case 5:return[2,void 0];case 6:return[4,w(d.schemaId,null,d.schema,a,c)];case 7:return p.sent(),[2]}})})}function I(b,a){if(!x(b))return!1;b=b.stack.map(function(a){return a.klass.type}).join("/");return/.*pointCloudLayer_schema\.json\/layerDefinition_schema\.json\/drawingInfo_schema\.json$/.test(b)&&"renderer"===a}function J(b,a){if(!x(b))return!1;b=b.stack.map(function(a){return a.klass.type}).join("/");
return/.*imageServiceLayer_schema\.json\/layerDefinition_schema\.json\/drawingInfo_schema\.json$/.test(b)&&"renderer"===a}function x(b){return b.currentClass&&"drawingInfo_schema.json"===b.currentClass.name}function K(b,a,c){if(x(c)){var d=I(c,a),e=J(c,a);return b.filter(function(a){if(/uniqueValueFromStyleRenderer_schema\.json$/.test(a.$ref))return!1;var b=/pointCloud.*Renderer/.test(a.$ref);a=/raster.*Renderer/.test(a.$ref);return d===b&&a===e})}a:{switch(c.schemaStack[c.schemaStack.length-1]){case "operationalLayers_schema.json":case "elevationLayers_schema.json":case "baseMapLayer_schema.json":a=
!0;break a}a=!1}if(a){var g=["kmlLayer","rasterDataElevationLayer","rasterDataLayer"];return b.filter(function(a){return!g.some(function(b){return a.$ref===b+"_schema.json"})})}return b}function L(b,a,c){return m(this,void 0,void 0,function(){return h(this,function(d){switch(d.label){case 0:return[4,u(b.items,a+"[]",c)];case 1:return d.sent(),[2]}})})}function M(b,a,c){return m(this,void 0,void 0,function(){var d,e,g,f,k,l=this;return h(this,function(n){switch(n.label){case 0:d=function(d){return h(this,
function(e){switch(e.label){case 0:return[4,c.withFilter(d,function(){return m(l,void 0,void 0,function(){var e;return h(this,function(g){switch(g.label){case 0:return e=a?a+"."+d:d,[4,u(b.properties[d],e,c)];case 1:return g.sent(),[2]}})})})];case 1:return e.sent(),[2]}})};e=[];for(g in b.properties)e.push(g);f=0;n.label=1;case 1:if(!(f<e.length))return[3,4];k=e[f];return[5,d(k)];case 2:n.sent(),n.label=3;case 3:return f++,[3,1];case 4:return[2]}})})}function C(b,a,c){void 0===a&&(a="");void 0===
c&&(c=new Set);for(var d=0;d<b.length;d++){var e=b[d];if("properties"in e)for(var g in e.properties){var f=e.properties[g],k=a?a+"."+g:g,l=Object.keys(f);if(0===l.length||1===l.length&&"$ref"===l[0])c.add(k);else if(1===l.length&&"allOf"===l[0])c.add(k),C(f.allOf,k,c);else throw Error("unexpected allOf filter construct: "+JSON.stringify(f));}}return c}function N(b,a,c){return m(this,void 0,void 0,function(){var d,e,g,f,k;return h(this,function(l){switch(l.label){case 0:d=null;e=0;for(g=b.allOf;e<
g.length;e++)if(f=g[e],"$ref"in f){if(d)throw Error("Cannot process more than 1 ref in an allOf construct");d=f}else if(!("properties"in f))throw Error("allOf construct only allows simple top-level property filters");k=C(b.allOf);return[4,c.addFilter(k,function(){return B(d,a,c)})];case 1:return l.sent(),[2]}})})}function O(b,a,c){return m(this,void 0,void 0,function(){var d,e,g,f,k,l,n,m,q,r,t;return h(this,function(h){switch(h.label){case 0:d=H(b.oneOf);if("refs"!==d.type&&"refsAndNull"!==d.type)return[3,
6];e=K(b.oneOf,a,c);g=0;f=e;h.label=1;case 1:if(!(g<f.length))return[3,5];k=f[g];return"null"!==k.type?[3,2]:[3,4];case 2:return l=""+(a||"")+(1!==e.length?"\x3c?TYPE?\x3e":""),[4,u(k,l,c)];case 3:h.sent(),h.label=4;case 4:return g++,[3,1];case 5:return[2];case 6:if("types"===d.type)return c.addProperty({name:a,type:v.sorted(d.distinctTypes).join("|")}),[2];n=[];for(m in b.oneOf)n.push(m);q=0;h.label=7;case 7:if(!(q<n.length))return[3,10];r=n[q];t=".oneOf["+r+"]";return[4,u(b.oneOf[r],""+a+t,c)];
case 8:h.sent(),h.label=9;case 9:return q++,[3,7];case 10:return[2]}})})}function P(b,a,c){return m(this,void 0,void 0,function(){return h(this,function(d){switch(d.label){case 0:return[4,B(b,a,c)];case 1:return d.sent(),[2]}})})}function Q(b,a,c){return m(this,void 0,void 0,function(){var d,e;return h(this,function(g){d="unknown";b.type&&(d=Array.isArray(b.type)?v.sorted(b.type).join("|"):b.type.replace(/ /g,"").split(",").join("|"));e={name:a,type:d,default:b.default};b.enum&&(e.enum=v.sorted(b.enum).map(function(a){return"string"===
typeof a?'"'+a+'"':""+a}).join("|"));c.addProperty(e);return[2]})})}function u(b,a,c){return m(this,void 0,void 0,function(){return h(this,function(d){return"array"===b.type?[2,L(b,a,c)]:"properties"in b?[2,M(b,a,c)]:"allOf"in b?[2,N(b,a,c)]:"oneOf"in b?[2,O(b,a,c)]:"$ref"in b?[2,P(b,a,c)]:[2,Q(b,a,c)]})})}function D(b){return 0===b.indexOf("#/definitions/")?b.slice(14):b}Object.defineProperty(t,"__esModule",{value:!0});t.scan=function(b,a){return m(this,void 0,void 0,function(){var c;return h(this,
function(d){switch(d.label){case 0:return[4,R.create(b,a)];case 1:return c=d.sent(),[2,w((b||"webScene")+"_schema.json",null,c.schemaRoot,null,c)]}})})};var R=function(b){function a(a,d,e){var c=b.call(this)||this;c.definitions=a;c.schemaRoot=d;c.requestSchema=e;c.filteredProperties=null;c.schemaStack=[];c.requestSchema.bind(c);return c}F(a,b);Object.defineProperty(a.prototype,"hasFilteredProperties",{get:function(){return this.filteredProperties&&0<this.filteredProperties.size},enumerable:!0,configurable:!0});
Object.defineProperty(a.prototype,"filteredPropertiesArray",{get:function(){var a=[];this.filteredProperties.forEach(function(b){return a.push(b)});return a},enumerable:!0,configurable:!0});a.prototype.withFilter=function(a,b){return m(this,void 0,void 0,function(){var c,d,f=this;return h(this,function(e){switch(e.label){case 0:if(!this.hasFilteredProperties)return[2,b()];if(!this.filteredProperties.has(a))return[2];c=this.filteredProperties;this.filteredProperties=null;d=function(a){f.filteredProperties||
(f.filteredProperties=new Set);f.filteredProperties.add(a)};c.forEach(function(b){b=b.split(".",2);1<b.length&&b[0]===a&&d(b[1])});return[4,b()];case 1:return e.sent(),this.filteredProperties=c,[2]}})})};a.prototype.addFilter=function(a,b){return m(this,void 0,void 0,function(){var c,d,f,k=this;return h(this,function(e){switch(e.label){case 0:return c=this.filteredProperties,this.filteredProperties=null,d=function(a){k.filteredProperties||(k.filteredProperties=new Set);k.filteredProperties.add(a)},
c&&c.forEach(d),a&&a.forEach(d),[4,b()];case 1:return f=e.sent(),this.filteredProperties=c,[2,f]}})})};a.create=function(b,d){return m(this,void 0,void 0,function(){return h(this,function(c){return d&&d.useRemoteSchema?[2,a.createRemote(b,d.baseUrl)]:[2,a.createLocal(b)]})})};a.createLocal=function(b){return new a(r.json.definitions,b?r.json.definitions[b+"_schema.json"]:r.json,a.getLocalSchemaRequest())};a.createRemote=function(b,d){return m(this,void 0,void 0,function(){var c,g,f;return h(this,
function(e){switch(e.label){case 0:return[4,a.getRemoteSchemaRequest(d)];case 1:return c=e.sent(),g=new a({},null,c),[4,g.requestSchema((b||"webscene")+"_schema.json")];case 2:return f=e.sent().schema,[2,new a(g.definitions,f,c)]}})})};a.getLocalSchemaRequest=function(){return function(a){a=D(a);var b=this.definitions[a];return b?q.resolve({schemaId:a,schema:b}):q.reject(new z("flatspec-spec:invalid-local-schema","Schema reference is not a local reference"))}};a.getRemoteSchemaRequest=function(b){return m(this,
void 0,void 0,function(){var c,e;return h(this,function(d){switch(d.label){case 0:if(!b)return[2,q.reject(new z("flatspec-spec:missing-base-url","The base url of the remote schema directory must be specified when using a remote schema"))];c=a.getLocalSchemaRequest();return[4,q.create(function(a){return E(["../../request"],a)})];case 1:return e=d.sent(),[2,function(a){var d=this;return c.call(this,a).catch(function(){return e(b+"/"+a,{responseType:"json"}).then(function(b){d.definitions[D(a)]=b.data;
return{schemaId:a,schema:b.data}})})}]}})})};return a}(v.ScanContext);t.schemaDefinitions=Object.keys(r.json.definitions).map(function(b){return b.replace(/_schema\.json$/,"")})});