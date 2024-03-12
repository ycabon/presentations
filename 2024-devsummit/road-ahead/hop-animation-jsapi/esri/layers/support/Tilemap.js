// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../request ../../core/arrayUtils ../../core/Error ../../core/lang ../../core/typedArrayUtil ../../geometry/support/UintArray".split(" "),function(m,p,q,h,r,t,u){function v(a){if(a.service.tileServers?.length){var b=a.service.tileServers;b=`${b&&b.length?b[a.row%b.length]:a.service.url}/tilemap/${a.level}/${a.row}/${a.col}/${a.width}/${a.height}`}else b=`${a.service.url}/tilemap/${a.level}/${a.row}/${a.col}/${a.width}/${a.height}`;(a=a.service.query)&&(b=`${b}?${a}`);return b}class n{constructor(a){this._validateJSON(a);
const {location:b,data:g}=a;this.location=Object.freeze(r.clone(b));let k=a=!0;const e=u.newUintArray(Math.ceil(this.location.width*this.location.height/32));let f=0;for(let d=0;d<g.length;d++){const l=d%32;g[d]?(k=!1,e[f]|=1<<l):a=!1;31===l&&++f}k?(this._availability="unavailable",this.byteSize=40):a?(this._availability="available",this.byteSize=40):(this._availability=e,this.byteSize=40+t.estimateSize(e))}getAvailability(a,b){if("unavailable"===this._availability||"available"===this._availability)return this._availability;
a=(a-this.location.top)*this.location.width+(b-this.location.left);b=a>>5;const g=this._availability;return 0>b||b>g.length?"unknown":g[b]&1<<a%32?"available":"unavailable"}static fromDefinition(a,b){const g=a.service.request||p,{row:k,col:e,width:f,height:d}=a,l={query:{f:"json"}};b=b?{...l,...b}:l;return g(v(a),b).then(c=>c.data).catch(c=>{if(c&&c.details&&422===c.details.httpStatus)return{location:{top:k,left:e,width:f,height:d},valid:!0,data:q.constant(f*d,0)};throw c;}).then(c=>{if(c.location&&
(c.location.top!==k||c.location.left!==e||c.location.width!==f||c.location.height!==d))throw new h("tilemap:location-mismatch","Tilemap response for different location than requested",{response:c,definition:{top:k,left:e,width:f,height:d}});return n.fromJSON(c)})}static fromJSON(a){return Object.freeze(new n(a))}_validateJSON(a){if(!a?.location)throw new h("tilemap:missing-location","Location missing from tilemap response");if(!1===a.valid)throw new h("tilemap:invalid","Tilemap response was marked as invalid");
if(!a.data)throw new h("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(a.data))throw new h("tilemap:data-mismatch","Data must be an array of numbers");if(a.data.length!==a.location.width*a.location.height)throw new h("tilemap:data-mismatch","Number of data items does not match width/height of tilemap");}}m.Tilemap=n;m.tilemapDefinitionId=function(a){return`${a.level}/${a.row}/${a.col}/${a.width}/${a.height}`};Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});