// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/Error","../../portal/schemas/webScene","./utils"],function(x,p,r,l,m){function y(a,b){if(b.properties){if("layerType"in b.properties)return b.properties.layerType.enum[0];if("type"in b.properties&&b.properties.type.enum)return b.properties.type.enum[0]}switch(a){case "multipoint_geometry_schema.json":return"multipoint";case "point_geometry_schema.json":return"point";case "polyline_geometry_schema.json":return"polyline";case "polygon_geometry_schema.json":return"polygon";
case "extent_schema.json":return"extent"}}function t(a){return"array"===a.type?`${t(a.items)}[]`:a.type}function z(a){const b={count:a.length,refsCount:0,typesCount:0,distinctTypes:[],type:null},c=new Set;for(const d in a){const e=a[d];e.$ref?b.refsCount++:e.type&&(b.typesCount++,c.add(t(e)))}c.forEach(d=>b.distinctTypes.push(d));b.distinctTypes.sort();b.refsCount===b.count?b.type="refs":2===b.count&&0<b.refsCount&&1===b.distinctTypes.length&&"null"===b.distinctTypes[0]?b.type="refsAndNull":b.typesCount===
b.count?(b.type="types",b.distinctTypes=b.distinctTypes):b.type="mix";return b}async function q(a,b,c,d,e){e.schemaStack.push(a);var f=y(a,c);d=d?d.replace("\x3c?TYPE?\x3e",f?`<${f}>`:""):"";if("array"===c.type||!("properties"in c))return(a=e.currentClass?null:{type:a,name:a,id:`${a}--${b}`,typeValue:b,properties:[]})&&e.push(null,a),await k(c,d,e),e.schemaStack.pop(),a;e.hasFilteredProperties?(f=e.filteredPropertiesArray.join("/"),f=`${a}--${b}--${f}`):f=`${a}--${b}`;const g="drawingInfo_schema.json"!==
a&&"layer_schema.json"!==a&&e.seen.get(f);if(g&&d)return e.addProperty({name:d,type:g}),e.schemaStack.pop(),g;a={type:a,name:a,id:f,typeValue:b,properties:[]};d&&e.addProperty({name:d,type:a});e.push(d,a);await k(c,"",e);e.schemaStack.pop();return e.pop()}async function u(a,b,c){a=await c.requestSchema(a.$ref);var d=a.schema;"layerDefinition"===d.title?d=null:(d=d.properties?.type,d=d?.enum?d.enum:null);if(d)for(var e of d){d={...a.schema};d.properties={...d.properties,type:{type:"string",enum:[e]}};
const f=b&&!b.includes("\x3c?TYPE?\x3e")?`${b}<?TYPE?>`:b;await q(a.schemaId,e,d,f,c)}else e="layer_schema.json"===a.schemaId&&c.schemaStack.length?c.schemaStack[c.schemaStack.length-1].replace(/_schema\.json/,""):null,await q(a.schemaId,e,a.schema,b,c)}function A(a,b){if(!n(a))return!1;a=a.stack.map(c=>c.klass.type).join("/");return/.*pointCloudLayer_schema\.json\/layerDefinition_schema\.json\/drawingInfo_schema\.json$/.test(a)&&"renderer"===b}function B(a,b){if(!n(a))return!1;a=a.stack.map(c=>c.klass.type).join("/");
return/.*(imageServiceLayer|tiledImageServiceLayer)_schema\.json\/layerDefinition_schema\.json\/drawingInfo_schema\.json$/.test(a)&&"renderer"===b}function n(a){return a.currentClass?"drawingInfo_schema.json"===a.currentClass.name:!1}function C(a,b,c){if(n(c)){const d=A(c,b),e=B(c,b);return a.filter(f=>{if(/uniqueValueFromStyleRenderer_schema\.json$/.test(f.$ref))return!1;if(e)return D.test(f.$ref)&&!E.test(f.$ref);if(F.test(f.$ref))return!1;f=/pointCloud.*Renderer/.test(f.$ref);return d===f})}a:{switch(c.schemaStack[c.schemaStack.length-
1]){case "operationalLayers_schema.json":case "elevationLayers_schema.json":case "baseMapLayer_schema.json":b=!0;break a}b=!1}if(b){const d=["kmlLayer","rasterDataElevationLayer","rasterDataLayer"];return a.filter(e=>!d.some(f=>e.$ref.replace(/.*\//,"")===`${f}_schema.json`))}return a}async function G(a,b,c){await k(a.items,`${b}[]`,c)}async function H(a,b,c){for(const d in a.properties)if("webscene_schema.json"!==c.currentClass?.name||"mapRangeInfo"!==d&&"widgets"!==d)if("baseMap_schema.json"!==
c.currentClass?.name||"elevationLayers"!==d){if(n(c)){const e=c.stack.map(f=>f.klass.type).join("/");if(/imageServiceLayer|tiledImageServiceLayer/.test(e)&&"transparency"===d)continue}await c.withFilter(d,async()=>{await k(a.properties[d],b?`${b}.${d}`:d,c)})}}function v(a,b="",c=new Set){for(const d of a)if("properties"in d)for(const e in d.properties){a=d.properties[e];const f=b?`${b}.${e}`:e,g=Object.keys(a);if(0===g.length||1===g.length&&"$ref"===g[0])c.add(f);else if(1===g.length&&"allOf"===
g[0])c.add(f),v(a.allOf,f,c);else throw Error(`unexpected allOf filter construct: ${JSON.stringify(a)}`);}return c}async function I(a,b,c){let d=null;for(const e of a.allOf)if("$ref"in e){if(d)throw Error("Cannot process more than 1 ref in an allOf construct");d=e}else if(!("properties"in e))throw Error("allOf construct only allows simple top-level property filters");a=v(a.allOf);await c.addFilter(a,()=>u(d,b,c))}async function J(a,b,c){const d=z(a.oneOf);if("refs"===d.type||"refsAndNull"===d.type){a=
C(a.oneOf,b,c);for(const e of a)"null"!==e.type&&await k(e,`${b||""}`+(1!==a.length?"\x3c?TYPE?\x3e":""),c)}else if("types"===d.type)c.addProperty({name:b,type:m.sorted(d.distinctTypes).join("|")});else for(const e in a.oneOf)await k(a.oneOf[e],`${b}${`.oneOf[${e}]`}`,c)}async function K(a,b,c){await u(a,b,c)}async function L(a,b,c){let d="unknown";a.type&&(d=Array.isArray(a.type)?m.sorted(a.type).join("|"):a.type.replaceAll(" ","").split(",").join("|"));b={name:b,type:d,default:a.default};a.enum&&
(b.enum=m.sorted(a.enum).map(e=>"string"===typeof e?`"${e}"`:`${e}`).join("|"));c.addProperty(b)}async function k(a,b,c){return"array"===a.type?G(a,b,c):"properties"in a?H(a,b,c):"allOf"in a?I(a,b,c):"oneOf"in a?J(a,b,c):"$ref"in a?K(a,b,c):L(a,b,c)}function w(a){return 0===a.indexOf("#/definitions/")?a.slice(14):a}const F=/raster.*Renderer|vectorFieldRenderer/,D=/(uniqueValueRenderer|classBreaksRenderer|raster.*Renderer|vectorFieldRenderer)/,E=/(rasterUniqueValueRenderer|rasterClassBreaksRenderer)/;
class h extends m.ScanContext{constructor(a,b,c){super();this.definitions=a;this.schemaRoot=b;this.requestSchema=c;this._filteredProperties=null;this.schemaStack=[];this.requestSchema.bind(this)}get hasFilteredProperties(){return this._filteredProperties?0<this._filteredProperties.size:!1}get filteredPropertiesArray(){const a=[];this._filteredProperties?.forEach(b=>a.push(b));return a}async withFilter(a,b){if(!this.hasFilteredProperties)return b();if(this._filteredProperties?.has(a)){var c=this._filteredProperties;
this._filteredProperties=null;var d=e=>{this._filteredProperties||(this._filteredProperties=new Set);this._filteredProperties.add(e)};c.forEach(e=>{e=e.split(".",2);1<e.length&&e[0]===a&&d(e[1])});await b();this._filteredProperties=c}}async addFilter(a,b){const c=this._filteredProperties;this._filteredProperties=null;const d=e=>{this._filteredProperties||(this._filteredProperties=new Set);this._filteredProperties.add(e)};c&&c.forEach(d);a&&a.forEach(d);a=await b();this._filteredProperties=c;return a}static async create(a,
b){return b&&b.useRemoteSchema?h.createRemote(a,b?.baseUrl):h.createLocal(a)}static createLocal(a){return new h(l.json.definitions,a&&"webscene"!==a?l.json.definitions[`${a}_schema.json`]:l.json,h._getLocalSchemaRequest())}static async createRemote(a,b){b=await h._getRemoteSchemaRequest(b);const c=new h({},null,b);a=(await c.requestSchema(`${a||"webscene"}_schema.json`)).schema;return new h(c.definitions,a,b)}static _getLocalSchemaRequest(){return function(a){a=w(a);const b=this.definitions[a];return b?
Promise.resolve({schemaId:a,schema:b}):Promise.reject(new r("spec-certification:spec-invalid-local-schema","Schema reference is not a local reference"))}}static async _getRemoteSchemaRequest(a){if(!a)return Promise.reject(new r("spec-certification:spec-missing-base-url","The base url of the remote schema directory must be specified when using a remote schema"));const b=h._getLocalSchemaRequest(),c=(await new Promise((d,e)=>x(["../../request"],f=>d(Object.freeze(Object.defineProperty({__proto__:null,
default:f},Symbol.toStringTag,{value:"Module"}))),e))).default;return function(d){return b.call(this,d).catch(()=>c(`${a}/${d}`,{responseType:"json"}).then(e=>{this.definitions[w(d)]=e.data;return{schemaId:d,schema:e.data}}))}}}const M=Object.keys(l.json.definitions).map(a=>a.replace(/_schema\.json$/,""));p.scan=async function(a,b){b=await h.create(a,b);return q(`${a||"webscene"}_schema.json`,null,b.schemaRoot,null,b)};p.schemaDefinitions=M;Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});