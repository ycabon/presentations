self.webpackChunkRemoteClient([48],{109:function(e,t,i){"use strict";function a(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function r(e){return null!=e&&!isNaN(e)&&isFinite(e)}function l(e){return e.valueExpression?"expression":e.field&&"string"==typeof e.field?"field":"unknown"}function n(e,t){const i=t||l(e),a=e.valueUnit||"unknown";return"unknown"===i?"constant":e.stops?"stops":null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?"clamped-linear":"unknown"===a?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?"proportional":"additive":"identity":"real-world-size"}i.d(t,"a",(function(){return l})),i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"d",(function(){return r}))},120:function(e,t,i){"use strict";var a,r=i(14),l=(i(4),i(3),i(6)),n=i(16),s=i(60),o=i(58),c=i(20),u=i(57),p=(i(24),i(37),i(38),i(56)),h=i(84),b=i(61),d=i(144),f=i(69),v=(i(64),i(73)),m=i(107),y=i(160);const O=new s.a({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let j=a=class extends p.a{constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.minScale=0,this.maxScale=0,this.size=null,this.spatialReference=null}static create(e={size:256,spatialReference:b.a.WebMercator}){const t=e.resolutionFactor||1,i=e.scales,r=e.size||256,l=e.spatialReference||b.a.WebMercator;if(!Object(h.i)(l)){const e=[];if(i)for(let t=0;t<i.length;t++){const a=i[t];e.push({level:t,scale:a,resolution:a})}else{let t=5e-4;for(let i=23;i>=0;i--)e.unshift({level:i,scale:t,resolution:t}),t*=2}return new a({dpi:96,lods:e,origin:new f.a(0,0,l),size:[r,r],spatialReference:l})}const n=Object(h.d)(l),s=e.origin?new f.a({x:e.origin.x,y:e.origin.y,spatialReference:l}):new f.a(n?{x:n.origin[0],y:n.origin[1],spatialReference:l}:{x:0,y:0,spatialReference:l}),o=1/(39.37*Object(v.c)(l)*96),c=[];if(i)for(let e=0;e<i.length;e++){const t=i[e],a=t*o;c.push({level:e,scale:t,resolution:a})}else{let e=Object(h.f)(l)?512/r*591657527.5917094:256/r*591657527.591555;const i=Math.ceil(24/t);c.push({level:0,scale:e,resolution:e*o});for(let a=1;a<i;a++){const i=e/2**t,r=i*o;c.push({level:a,scale:i,resolution:r}),e=i}}return new a({dpi:96,lods:c,origin:s,size:[r,r],spatialReference:l})}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const i=Object(h.d)(e);return e.isWrappable&&Math.abs(i.origin[0]-t.x)<=i.dx}return!1}readOrigin(e,t){return f.a.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,i=0;const a=[];this._levelToLOD={},e&&(t=-1/0,i=1/0,e.forEach(e=>{a.push(e.scale),t=e.scale>t?e.scale:t,i=e.scale<i?e.scale:i,this._levelToLOD[e.level]=e})),this._set("scales",a),this._set("minScale",t),this._set("maxScale",i),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[0]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length)return t[t.length-1];{const i=Math.round(e-.5),a=Math.round(e);return t[a]+(a-e)*(t[i]-t[a])}}scaleToZoom(e){const t=this.scales,i=t.length-1;let a=0;for(;a<i;a++){const i=t[a],r=t[a+1];if(i<=e)return a;if(r===e)return a+1;if(i>e&&r<e)return a+1-(e-r)/(i-r)}return a}snapScale(e,t=.95){const i=this.scaleToZoom(e);return i%Math.floor(i)>=t?this.zoomToScale(Math.ceil(i)):this.zoomToScale(Math.floor(i))}tileAt(e,t,i,a){const r=this.lodAt(e);if(!r)return null;let l,n;if("number"==typeof t)l=t,n=i;else if(Object(h.c)(t.spatialReference,this.spatialReference))l=t.x,n=t.y,a=i;else{const e=Object(d.d)(t,this.spatialReference);if(!e)return null;l=e.x,n=e.y,a=i}const s=r.resolution*this.size[0],o=r.resolution*this.size[1];return a||(a={id:null,level:0,row:0,col:0,extent:Object(m.d)()}),a.level=e,a.row=Math.floor((this.origin.y-n)/o+.001),a.col=Math.floor((l-this.origin.x)/s+.001),this.updateTileInfo(a),a}updateTileInfo(e,t=0){let i=this.lodAt(e.level);if(!i&&1===t){const t=this.lods[this.lods.length-1];t.level<e.level&&(i=t)}if(!i)return;const a=e.level-i.level,r=i.resolution*this.size[0]/2**a,l=i.resolution*this.size[1]/2**a;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=Object(m.d)()),e.extent[0]=this.origin.x+e.col*r,e.extent[1]=this.origin.y-(e.row+1)*l,e.extent[2]=e.extent[0]+r,e.extent[3]=e.extent[1]+l}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||-1===t.parentLevel||(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),0))}getTileBounds(e,t){const{resolution:i}=this.lodAt(t.level),a=i*this.size[0],r=i*this.size[1];return e[0]=this.origin.x+t.col*a,e[1]=this.origin.y-(t.row+1)*r,e[2]=e[0]+a,e[3]=e[1]+r,e}lodAt(e){return this._levelToLOD&&this._levelToLOD[e]||null}clone(){return a.fromJSON(this.write({}))}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let i=0;i<e.length;i++){const a=e[i];this._upsampleLevels[a.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/a.resolution:0},t=a}}};Object(r.a)([Object(n.b)({type:Number,json:{write:!0}})],j.prototype,"compressionQuality",void 0),Object(r.a)([Object(n.b)({type:Number,json:{write:!0}})],j.prototype,"dpi",void 0),Object(r.a)([Object(n.b)({type:String,json:{read:O.read,write:O.write,origins:{"web-scene":{read:!1,write:!1}}}})],j.prototype,"format",void 0),Object(r.a)([Object(n.b)({readOnly:!0})],j.prototype,"isWrappable",null),Object(r.a)([Object(n.b)({type:f.a,json:{write:!0}})],j.prototype,"origin",void 0),Object(r.a)([Object(o.a)("origin")],j.prototype,"readOrigin",null),Object(r.a)([Object(n.b)({type:[y.a],value:null,json:{write:!0}})],j.prototype,"lods",null),Object(r.a)([Object(n.b)({readOnly:!0})],j.prototype,"minScale",void 0),Object(r.a)([Object(n.b)({readOnly:!0})],j.prototype,"maxScale",void 0),Object(r.a)([Object(n.b)({readOnly:!0})],j.prototype,"scales",void 0),Object(r.a)([Object(n.b)({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],j.prototype,"size",void 0),Object(r.a)([Object(o.a)("size",["rows","cols"])],j.prototype,"readSize",null),Object(r.a)([Object(u.a)("size",{cols:{type:l.a},rows:{type:l.a}})],j.prototype,"writeSize",null),Object(r.a)([Object(n.b)({type:b.a,json:{write:!0}})],j.prototype,"spatialReference",void 0),j=a=Object(r.a)([Object(c.a)("esri.layers.support.TileInfo")],j);var g=j;t.a=g},156:function(e,t,i){"use strict";i.d(t,"a",(function(){return w})),i.d(t,"b",(function(){return d})),i.d(t,"c",(function(){return f})),i.d(t,"d",(function(){return v})),i.d(t,"e",(function(){return m})),i.d(t,"f",(function(){return j})),i.d(t,"g",(function(){return b}));var a=i(89),r=i(0),l=i(3),n=i(63),s=i(77),o=i(76),c=i(109);const u=l.a.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),p=new s.a,h=Math.PI,b=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function d(e,t,i){const a="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(e=>"color"===e.type)[0]:e;if(!a)return;if("esri.renderers.visualVariables.ColorVariable"!==a.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable");const l="number"==typeof t,s=l?null:t,o=s&&s.attributes;let c=l?t:null;const p=a.field,{ipData:h,hasExpression:b}=a.cache;let d=a.cache.compiledFunc;if(!p&&!b){const e=a.stops;return e&&e[0]&&e[0].color}if("number"!=typeof c)if(b){if(!Object(r.h)(i)||!Object(r.h)(i.arcade))return void u.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},t=i.arcade.arcadeUtils,l=t.getViewInfo(e),n=t.createExecContext(s,l);if(!d){const e=t.createSyntaxTree(a.valueExpression);d=t.createFunction(e),a.cache.compiledFunc=d}c=t.executeFunction(d,n)}else o&&(c=o[p]);const f=a.normalizationField,v=o?parseFloat(o[f]):void 0;if(null!=c&&(!f||l||!isNaN(v)&&0!==v)){isNaN(v)||l||(c/=v);const e=g(c,h);if(e){const t=e[0],l=e[1],s=t===l?a.stops[t].color:n.a.blendColors(a.stops[t].color,a.stops[l].color,e[2],Object(r.h)(i)?i.color:void 0);return new n.a(s)}}}function f(e,t,i){const a="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(e=>"opacity"===e.type)[0]:e;if(!a)return;if("esri.renderers.visualVariables.OpacityVariable"!==a.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable");const l="number"==typeof t,n=l?null:t,s=n&&n.attributes;let o=l?t:null;const c=a.field,{ipData:p,hasExpression:h}=a.cache;let b=a.cache.compiledFunc;if(!c&&!h){const e=a.stops;return e&&e[0]&&e[0].opacity}if("number"!=typeof o)if(h){if(Object(r.g)(i)||Object(r.g)(i.arcade))return void u.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},t=i.arcade.arcadeUtils,l=t.getViewInfo(e),s=t.createExecContext(n,l);if(!b){const e=t.createSyntaxTree(a.valueExpression);b=t.createFunction(e),a.cache.compiledFunc=b}o=t.executeFunction(b,s)}else s&&(o=s[c]);const d=a.normalizationField,f=s?parseFloat(s[d]):void 0;if(null!=o&&(!d||l||!isNaN(f)&&0!==f)){isNaN(f)||l||(o/=f);const e=g(o,p);if(e){const t=e[0],i=e[1];if(t===i)return a.stops[t].opacity;{const r=a.stops[t].opacity;return r+(a.stops[i].opacity-r)*e[2]}}}}function v(e,t,i){const a="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(e=>"rotation"===e.type)[0]:e;if(!a)return;if("esri.renderers.visualVariables.RotationVariable"!==a.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable");const l=a.axis||"heading",n="heading"===l&&"arithmetic"===a.rotationType?90:0,s="heading"===l&&"arithmetic"===a.rotationType?-1:1,o="number"==typeof t?null:t,c=o&&o.attributes,p=a.field,{hasExpression:h}=a.cache;let b=a.cache.compiledFunc,d=0;if(!p&&!h)return d;if(h){if(Object(r.g)(i)||Object(r.g)(i.arcade))return void u.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},t=i.arcade.arcadeUtils,l=t.getViewInfo(e),n=t.createExecContext(o,l);if(!b){const e=t.createSyntaxTree(a.valueExpression);b=t.createFunction(e),a.cache.compiledFunc=b}d=t.executeFunction(b,n)}else c&&(d=c[p]||0);return d="number"!=typeof d||isNaN(d)?null:n+s*d,d}function m(e,t,i){const a="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(e=>"size"===e.type)[0]:e;if(!a)return;if("esri.renderers.visualVariables.SizeVariable"!==a.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable");const l=function(e,t,i,a,l){switch(t.transformationType){case"additive":return function(e,t,i,a){return e+(y(t.minSize,i,a)||t.minDataValue)}(e,t,i,a);case"constant":return function(e,t,i){const a=e.stops;let r=a&&a.length&&a[0].size;return null==r&&(r=e.minSize),y(r,t,i)}(t,i,a);case"clamped-linear":return function(e,t,i,a){const l=(e-t.minDataValue)/(t.maxDataValue-t.minDataValue),n=y(t.minSize,i,a),s=y(t.maxSize,i,a),o=Object(r.h)(a)?a.shape:void 0;if(e<=t.minDataValue)return n;if(e>=t.maxDataValue)return s;if("area"===t.scaleBy&&o){const e="circle"===o,t=e?h*(n/2)**2:n*n,i=t+l*((e?h*(s/2)**2:s*s)-t);return e?2*Math.sqrt(i/h):Math.sqrt(i)}return n+l*(s-n)}(e,t,i,a);case"proportional":return function(e,t,i,a){const l=Object(r.h)(a)?a.shape:void 0,n=e/t.minDataValue,s=y(t.minSize,i,a),o=y(t.maxSize,i,a);let c=null;return c="circle"===l?2*Math.sqrt(n*(s/2)**2):"square"===l||"diamond"===l||"image"===l?Math.sqrt(n*s**2):n*s,O(c,s,o)}(e,t,i,a);case"stops":return function(e,t,i,a,r){const[l,n,s]=g(e,r);if(l===n)return y(t.stops[l].size,i,a);{const e=y(t.stops[l].size,i,a);return e+(y(t.stops[n].size,i,a)-e)*s}}(e,t,i,a,l);case"real-world-size":return function(e,t,i,a){const l=(Object(r.h)(a)&&a.resolution?a.resolution:1)*o.a[t.valueUnit],n=y(t.minSize,i,a),s=y(t.maxSize,i,a),{valueRepresentation:c}=t;let u=null;return u="area"===c?2*Math.sqrt(e/h)/l:"radius"===c||"distance"===c?2*e/l:e/l,O(u,n,s)}(e,t,i,a);case"identity":return e;case"unknown":return null}}(function(e,t,i){const a="number"==typeof t,l=a?null:t,n=l&&l.attributes;let s=a?t:null;const{isScaleDriven:o}=e.cache;let p=e.cache.compiledFunc;if(o){const t=Object(r.h)(i)?i.scale:void 0,a=Object(r.h)(i)?i.view:void 0;s=null==t||"3d"===a?function(e){let t=null,i=null;const a=e.stops;return a?(t=a[0].value,i=a[a.length-1].value):(t=e.minDataValue||0,i=e.maxDataValue||0),(t+i)/2}(e):t}else if(!a)switch(e.inputValueType){case"expression":{if(Object(r.g)(i)||Object(r.g)(i.arcade))return void u.error("Use of arcade expressions requires an arcade context");const t={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},a=i.arcade.arcadeUtils,n=a.getViewInfo(t),o=a.createExecContext(l,n);if(!p){const t=a.createSyntaxTree(e.valueExpression);p=a.createFunction(t),e.cache.compiledFunc=p}s=a.executeFunction(p,o);break}case"field":n&&(s=n[e.field]);break;case"unknown":s=null}if(!Object(c.d)(s))return null;if(a||!e.normalizationField)return s;const h=n?parseFloat(n[e.normalizationField]):null;return Object(c.d)(h)&&0!==h?s/h:null}(a,t,i),a,t,i,a.cache.ipData);return null==l||isNaN(l)?0:l}function y(e,t,i){return null==e?null:Object(c.c)(e)?m(e,t,i):Object(c.d)(e)?e:null}function O(e,t,i){return Object(c.d)(i)&&e>i?i:Object(c.d)(t)&&e<t?t:e}function j(e,t,i){const{isScaleDriven:a}=e.cache;if(!(a&&"3d"===i||t))return null;const r={scale:t,view:i};let l=y(e.minSize,p,r),n=y(e.maxSize,p,r);if(null!=l||null!=n){if(l>n){const e=n;n=l,l=e}return{minSize:l,maxSize:n}}}function g(e,t){if(!t)return;let i=0,a=t.length-1;return t.some((t,r)=>e<t?(a=r,!0):(i=r,!1)),[i,a,(e-t[i])/(t[a]-t[i])]}function w(e,t,i){const r=["proportional","proportional","proportional"];for(const l of e){const e=l.useSymbolValue?"symbol-value":m(l,t,i);switch(l.axis){case"width":r[0]=e;break;case"depth":r[1]=e;break;case"height":r[2]=e;break;case"width-and-depth":r[0]=e,r[1]=e;break;case"all":case void 0:case null:r[0]=e,r[1]=e,r[2]=e;break;default:Object(a.a)(l.axis)}}return r}},160:function(e,t,i){"use strict";var a,r=i(14),l=(i(4),i(3),i(6)),n=i(16),s=i(20),o=(i(24),i(37),i(38),i(56));let c=a=class extends o.a{constructor(e){super(e),this.level=0,this.levelValue=null,this.resolution=0,this.scale=0}clone(){return new a({level:this.level,levelValue:this.levelValue,resolution:this.resolution,scale:this.scale})}};Object(r.a)([Object(n.b)({type:l.a,json:{write:!0}})],c.prototype,"level",void 0),Object(r.a)([Object(n.b)({type:String,json:{write:!0}})],c.prototype,"levelValue",void 0),Object(r.a)([Object(n.b)({type:Number,json:{write:!0}})],c.prototype,"resolution",void 0),Object(r.a)([Object(n.b)({type:Number,json:{write:!0}})],c.prototype,"scale",void 0),c=a=Object(r.a)([Object(s.a)("esri.layers.support.LOD")],c);var u=c;t.a=u},238:function(e,t,i){"use strict";i.d(t,"a",(function(){return S}));var a=i(14),r=(i(4),i(3)),l=i(16),n=i(78),s=i(20),o=i(17),c=i(24),u=(i(37),i(38),i(22)),p=i(2),h=i(43),b=i(26),d=i(55),f=i(136),v=i(42),m=i(201),y=i(7),O=i(27);class j{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),a=i%8,r=i>>3,l=this._tileAvailabilityBitSet;return r<0||r>l.length?"unknown":l[r]&1<<a?"available":"unavailable"}_updateFromData(e){const t=this.location.width,i=this.location.height;let a=!0,r=!0;const l=Math.ceil(t*i/8),n=new Uint8Array(l);let s=0;for(let t=0;t<e.length;t++){const i=t%8;e[t]?(r=!1,n[s]|=1<<i):a=!1,7===i&&++s}r?this._allAvailability="unavailable":a?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=n,this.byteSize+=n.length)}static fromDefinition(e,t){const i=e.service.request||d.default,{row:a,col:r,width:l,height:n}=e,s={query:{f:"json"}};return t=t?{...s,...t}:s,i(function(e){let t;if("vector-tile"===e.service.type)t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;else{const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const i=e.service.query;return i&&(t=`${t}?${i}`),t}(e),t).then(e=>e.data).catch(e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:a,left:r,width:l,height:n},valid:!0,data:Object(O.b)(l*n,0)};throw e}).then(e=>{if(e.location&&(e.location.top!==a||e.location.left!==r||e.location.width!==l||e.location.height!==n))throw new o.a("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:a,left:r,width:l,height:n}});return j.fromJSON(e)})}static fromJSON(e){j.validateJSON(e);const t=new j;return t.location=Object.freeze(Object(y.a)(e.location)),t._updateFromData(e.data),Object.freeze(t)}static validateJSON(e){if(!e||!e.location)throw new o.a("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new o.a("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new o.a("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new o.a("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new o.a("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function g(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}var w;const _=r.a.getLogger("esri.layers.support.TilemapCache");let S=w=class extends b.a{constructor(e){super(e),this._handles=new f.a,this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2097152,this.request=d.default,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new m.a(this.cacheByteSize),this._handles.add([this.watch(["layer.parsedUrl","layer.tileServers?"],()=>this._initializeTilemapDefinition()),Object(v.a)(this,"layer.tileInfo.lods",e=>this._initializeAvailableLevels(e),!0)]),this._initializeTilemapDefinition()}destroy(){this._handles&&(this._handles.destroy(),this._handles=null)}castLevels(e){return e<=2?(_.error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,i,a){if(!this._availableLevels[e])return Promise.reject(new o.a("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const r=this._tmpTilemapDefinition,l=this._tilemapFromCache(e,t,i,r);if(l)return Promise.resolve(l);const n=a&&a.signal;return a={...a,signal:null},new Promise((e,t)=>{Object(p.o)(n,()=>t(Object(p.e)()));const i=g(r);let l=this._pendingTilemapRequests[i];if(!l){l=j.fromDefinition(r,a).then(e=>(this._tilemapCache.put(i,e,e.byteSize),e));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=l,l.then(e,e)}l.then(e,t)})}getAvailability(e,t,i){if(!this._availableLevels[e])return"unavailable";const a=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return a?a.getAvailability(t,i):"unknown"}getAvailabilityUpsample(e,t,i,a){a.level=e,a.row=t,a.col=i;const r=this.layer.tileInfo;for(r.updateTileInfo(a);;){const e=this.getAvailability(a.level,a.row,a.col);if("unavailable"!==e)return e;if(!r.upsampleTile(a))return"unavailable"}}fetchAvailability(e,t,i,a){return this._availableLevels[e]?this.fetchTilemap(e,t,i,a).catch(e=>e).then(a=>{if(a instanceof j){const r=a.getAvailability(t,i);return"unavailable"===r?Promise.reject(new o.a("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):r}if(Object(p.l)(a))throw a;return"unknown"}):Promise.reject(new o.a("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,i,a,r){a.level=e,a.row=t,a.col=i;const l=this.layer.tileInfo;l.updateTileInfo(a);const n=this.fetchAvailability(e,t,i,r).catch(e=>{if(Object(p.l)(e))throw e;if(l.upsampleTile(a))return this.fetchAvailabilityUpsample(a.level,a.row,a.col,a);throw e});return this._fetchAvailabilityUpsamplePrefetch(a.id,e,t,i,r,n),n}async _fetchAvailabilityUpsamplePrefetch(e,t,i,a,r,l){if(!this._prefetchingEnabled)return;const n="prefetch-"+e;if(this._handles.has(n))return;const s=Object(p.d)();l.then(()=>s.abort(),()=>s.abort());let o=!1;const c={remove(){o||(o=!0,s.abort())}};if(this._handles.add(c,n),await Object(h.b)(10,s.signal).catch(()=>{}),o||(o=!0,this._handles.remove(n)),Object(p.m)(s))return;const u={id:e,level:t,row:i,col:a},b={...r,signal:s.signal},d=this.layer.tileInfo;for(let e=0;w._prefetches.length<w._maxPrefetch&&d.upsampleTile(u);++e){const e=this.fetchAvailability(u.level,u.row,u.col,b);w._prefetches.push(e);const t=()=>{w._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const e=this.layer.parsedUrl,t=e.query;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:t?Object(c.D)(t):null,tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,a){a.level=e,a.row=t-t%this.size,a.col=i-i%this.size;const r=g(a);return this._tilemapCache.get(r)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach(e=>this._availableLevels[e.level]=!0)}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,a)=>!!e._tilemapFromCache(t,i,a,e._tmpTilemapDefinition)}}};S._maxPrefetch=4,S._prefetches=new u.a({initialSize:w._maxPrefetch}),Object(a.a)([Object(l.b)({constructOnly:!0,type:Number})],S.prototype,"levels",void 0),Object(a.a)([Object(n.a)("levels")],S.prototype,"castLevels",null),Object(a.a)([Object(l.b)({readOnly:!0,type:Number})],S.prototype,"size",null),Object(a.a)([Object(l.b)({constructOnly:!0,type:Number})],S.prototype,"cacheByteSize",void 0),Object(a.a)([Object(l.b)({constructOnly:!0})],S.prototype,"layer",void 0),Object(a.a)([Object(l.b)({constructOnly:!0})],S.prototype,"request",void 0),S=w=Object(a.a)([Object(s.a)("esri.layers.support.TilemapCache")],S)},273:function(e,t,i){"use strict";i.d(t,"a",(function(){return l})),i.d(t,"b",(function(){return r}));var a=i(120);const r={type:a.a,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:l}}}}};function l(e,t,i,r){if(!e)return null;const{minScale:l,maxScale:n,minLOD:s,maxLOD:o}=t;if(null!=s&&null!=o)return r&&r.ignoreMinMaxLOD?a.a.fromJSON(e):a.a.fromJSON({...e,lods:e.lods.filter(({level:e})=>null!=e&&e>=s&&e<=o)});if(0!==l&&0!==n){const t=e=>Math.round(1e4*e)/1e4,i=l?t(l):1/0,r=n?t(n):-1/0;return a.a.fromJSON({...e,lods:e.lods.filter(e=>{const a=t(e.scale);return a<=i&&a>=r})})}return a.a.fromJSON(e)}},348:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var a=i(14),r=(i(4),i(3),i(6),i(16)),l=i(58),n=i(20),s=(i(24),i(37),i(38),i(61)),o=(i(64),i(273)),c=i(238);const u=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t){return t.capabilities&&t.capabilities.indexOf("Tilemap")>-1?new c.a({layer:this}):null}};return Object(a.a)([Object(r.b)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(a.a)([Object(r.b)()],t.prototype,"minScale",void 0),Object(a.a)([Object(l.a)("service","minScale")],t.prototype,"readMinScale",null),Object(a.a)([Object(r.b)()],t.prototype,"maxScale",void 0),Object(a.a)([Object(l.a)("service","maxScale")],t.prototype,"readMaxScale",null),Object(a.a)([Object(r.b)({type:s.a})],t.prototype,"spatialReference",void 0),Object(a.a)([Object(r.b)({readOnly:!0})],t.prototype,"supportsBlankTile",null),Object(a.a)([Object(r.b)(o.b)],t.prototype,"tileInfo",void 0),Object(a.a)([Object(r.b)()],t.prototype,"tilemapCache",void 0),Object(a.a)([Object(l.a)("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),Object(a.a)([Object(r.b)()],t.prototype,"version",void 0),t=Object(a.a)([Object(n.a)("esri.layers.mixins.ArcGISCachedService")],t),t}},406:function(e,t,i){"use strict";i.r(t);var a=i(14),r=(i(4),i(0)),l=(i(3),i(16)),n=i(78),s=i(58),o=i(20),c=i(57),u=i(17),p=i(24),h=(i(37),i(38),i(61)),b=(i(64),i(55)),d=i(88),f=i(85),v=i(152),m=i(74),y=i(101),O=i(167),j=i(125),g=i(207),w=i(97),_=i(151),S=i(110),x=i(159),T=i(348),z=i(480),V=i(398),D=i(481);const R=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let L=class extends(Object(j.a)(Object(D.a)(Object(S.a)(Object(_.a)(Object(y.a)(Object(w.a)(Object(T.a)(Object(z.a)(Object(O.a)(Object(f.a)(Object(x.b)(Object(g.a)(d.a))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=Object(r.h)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).then(()=>this._fetchService(t),()=>this._fetchService(t))),Promise.resolve(this)}get attributionDataUrl(){var e;const t=null==(e=this.parsedUrl)?void 0:e.path.toLowerCase();return t&&this._getDefaultAttribution(this._getMapName(t))}readSpatialReference(e,t){return(e=e||t.tileInfo&&t.tileInfo.spatialReference)&&h.a.fromJSON(e)}writeSublayers(e,t,i,a){if(!this.loaded||!e)return;const r=e.slice().reverse().flatten(({sublayers:e})=>e&&e.toArray().reverse()).toArray(),l=[],n={writeSublayerStructure:!1,...a};r.forEach(e=>{const t=e.write({},n);l.push(t)}),l.some(e=>Object.keys(e).length>1)&&(t.layers=l)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map(e=>Object(p.J)(e).path):null}fetchTile(e,t,i,a={}){const{signal:r,timestamp:l}=a,n=this.getTileUrl(e,t,i),s={responseType:"image",signal:r};return null!=l&&(s.query={_ts:a.timestamp}),Object(b.default)(n,s).then(e=>e.data)}getTileUrl(e,t,i){const a=!this.tilemapCache&&this.supportsBlankTile,r=Object(p.D)({...this.parsedUrl.query,blankTile:!a&&null,...this.customParameters}),l=this.tileServers;return`${l&&l.length?l[t%l.length]:this.parsedUrl.path}/tile/${e}/${t}/${i}${r?"?"+r:""}`}_fetchService(e){return new Promise((t,i)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new u.a("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void t({data:this.sourceJSON})}if(!this.parsedUrl)throw new u.a("tile-layer:undefined-url","layer's url is not defined");const a=Object(v.e)(this.parsedUrl.path);if(Object(r.h)(a)&&"ImageServer"===a.serverType)throw new u.a("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");Object(b.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters},responseType:"json",signal:e}).then(t,i)}).then(t=>{if(t.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!Object(v.c)(this.url))return this._fetchServerVersion(this.url,e).then(e=>{this.read({currentVersion:e})}).catch(()=>{})})}_fetchServerVersion(e,t){if(!Object(v.b)(e))return Promise.reject();const i=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return Object(b.default)(i,{query:{f:"json",...this.customParameters},responseType:"json",signal:t}).then(e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new u.a("tile-layer:version-not-available")})}_getMapName(e){const t=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return t&&t[2]}_getDefaultAttribution(e){if(!e)return;let t;e=e.toLowerCase();for(let i=0,a=R.length;i<a;i++)if(t=R[i],t.toLowerCase().indexOf(e)>-1)return Object(p.z)("//static.arcgis.com/attribution/"+t)}_getDefaultTileServers(e){const t=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),i=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return t||i?[e,e.replace(t?/server\.arcgisonline/i:/services\.arcgisonline/i,t?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};Object(a.a)([Object(l.b)({readOnly:!0})],L.prototype,"attributionDataUrl",null),Object(a.a)([Object(l.b)({type:["show","hide","hide-children"]})],L.prototype,"listMode",void 0),Object(a.a)([Object(l.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],L.prototype,"isReference",void 0),Object(a.a)([Object(l.b)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],L.prototype,"operationalLayerType",void 0),Object(a.a)([Object(l.b)({type:Boolean})],L.prototype,"resampling",void 0),Object(a.a)([Object(l.b)()],L.prototype,"sourceJSON",void 0),Object(a.a)([Object(l.b)({type:h.a})],L.prototype,"spatialReference",void 0),Object(a.a)([Object(s.a)("spatialReference",["spatialReference","tileInfo"])],L.prototype,"readSpatialReference",null),Object(a.a)([Object(l.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],L.prototype,"path",void 0),Object(a.a)([Object(l.b)({readOnly:!0})],L.prototype,"sublayers",void 0),Object(a.a)([Object(c.a)("sublayers",{layers:{type:[V.a]}})],L.prototype,"writeSublayers",null),Object(a.a)([Object(l.b)({json:{read:!1,write:!1}})],L.prototype,"popupEnabled",void 0),Object(a.a)([Object(l.b)()],L.prototype,"tileServers",null),Object(a.a)([Object(n.a)("tileServers")],L.prototype,"castTileServers",null),Object(a.a)([Object(l.b)({readOnly:!0,json:{read:!1}})],L.prototype,"type",void 0),Object(a.a)([Object(l.b)(m.n)],L.prototype,"url",void 0),L=Object(a.a)([Object(o.a)("esri.layers.TileLayer")],L),L.prototype.fetchTile.__isDefault__=!0;var M=L;t.default=M},76:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var a=i(102),r=i(73);const l={inches:Object(r.b)(1,"meters","inches"),feet:Object(r.b)(1,"meters","feet"),"us-feet":Object(r.b)(1,"meters","us-feet"),yards:Object(r.b)(1,"meters","yards"),miles:Object(r.b)(1,"meters","miles"),"nautical-miles":Object(r.b)(1,"meters","nautical-miles"),millimeters:Object(r.b)(1,"meters","millimeters"),centimeters:Object(r.b)(1,"meters","centimeters"),decimeters:Object(r.b)(1,"meters","decimeters"),meters:Object(r.b)(1,"meters","meters"),kilometers:Object(r.b)(1,"meters","kilometers"),"decimal-degrees":1/Object(r.h)(1,"meters",a.a.radius)}},89:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i(4);function a(e){}}});