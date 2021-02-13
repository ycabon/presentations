import { a as u$1, gf as s, fJ as c, gg as i, t, gh as i$1, gi as t$1, gj as Q, gk as n$1, e9 as gt, gl as v$1, gm as F, gn as h, go as h$1, fz as o, e7 as D, e8 as w$1, n as e, y as y$1, aH as x$1, ba as o$1, p as i$2, cn as a, gp as en, fw as t$2, gq as pn, aW as s$1, gr as i$3, b_ as E, dl as U$1, L, dS as p, dT as l$1, dU as d, fm as s$2, dV as l$2, dY as b, af as u$2, gs as C, gt as n$2, h as s$3, dQ as e$1, fC as d$1 } from './index.js';
import { s as s$4, a as a$1, u as u$3, m as m$1 } from './I3SLayerDefinitions-9b772ea6.js';
import { T } from './SceneService-09e2889d.js';
import './resourceUtils-9231a510.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function g(e){const p=u$1(e)&&e.origins?e.origins:[void 0];return (c$1,g)=>{const j=function(e,i$2,p){if(u$1(e)&&"resource"===e.type)return function(e,i$2,p){const c$1=s(i$2,p);return {type:String,read:(t,r,e)=>{const o=c(t,r,e);return c$1.type===String?o:"function"==typeof c$1.type?new c$1.type({url:o}):void 0},write:{writer(o,i$2,m,d){if(!d||!d.resources)return "string"==typeof o?void(i$2[m]=i(o,d)):void(i$2[m]=o.write({},d));const g=function(t$1){if(t(t$1))return null;if("string"==typeof t$1)return t$1;return t$1.url}(o),j=g?i(g,{...d,verifyItemRelativeUrls:d&&d.verifyItemRelativeUrls?{writtenUrls:d.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null}):null,I=c$1.type!==String&&(!i$1(this)||d&&d.origin&&this.originIdOf(p)>t$1(d.origin));d&&d.portalItem&&u$1(j)&&!Q(j)?I?function(t,r,e,o,i,n,s,u){const p=s.portalItem.resourceFromPath(o),c=U(e,o,s),l=n$1(c),m=gt(p.path);if(l!==m)return void v(t,r,e,o,i,n,s,u);w(t,r,p,c,s.resources.toUpdate),i[n]=o;}(this,p,o,j,i$2,m,d,e):function(t,r,e,o){o.resources.toKeep.push({resource:o.portalItem.resourceFromPath(t)}),r[e]=t;}(j,i$2,m,d):d&&d.portalItem&&(t(j)||u$1(v$1(j))||F(j)||I)?v(this,p,o,j,i$2,m,d,e):i$2[m]=j;}}}}(e,i$2,p);switch(u$1(e)&&e.type?e.type:"other"){case"other":return {read:!0,write:!0};case"url":{const{read:t,write:r}=h$1;return {read:t,write:r}}}}(e,c$1,g);for(const t of p){const r=h(c$1,t,g);for(const t in j)r[t]=j[t];}}}function v(t,r,o$1,i,n,s,a,l){const m=o(),y=U(o$1,i,a),h=D(w$1(l,"prefix"),m),d=`${h}.${n$1(y)}`,g=a.portalItem.resourceFromPath(d);F(i)&&a.resources.pendingOperations.push(async function(t){const r=(await import('./index.js').then(function (n) { return n.hO; })).default,{data:e}=await r(t,{responseType:"blob"});return e}(i).then((t=>{g.path=`${h}.${n$1(t)}`,n[s]=g.itemRelativeUrl;})).catch((()=>{}))),w(t,r,g,y,a.resources.toAdd),n[s]=g.itemRelativeUrl;}function w(t,r,e,o,i){i.push({resource:e,content:o,finish:e=>{!function(t,r,e){"string"==typeof t[r]?t[r]=e.url:t[r].url=e.url;}(t,r,e);}});}function U(t,r,e){return "string"==typeof t?{url:r}:new Blob([JSON.stringify(t.toJSON(e))],{type:"application/json"})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var l;let y=l=class extends a{constructor(e){super(e),this.geometry=null,this.type="clip";}writeGeometry(e,r,o,s){if(s.layer&&s.layer.spatialReference&&!s.layer.spatialReference.equals(this.geometry.spatialReference)){if(!en(e.spatialReference,s.layer.spatialReference))return void(s&&s.messages&&s.messages.push(new t$2("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:s.layer.spatialReference,context:s})));const p=new x$1;pn(e,p,s.layer.spatialReference),r[o]=p.toJSON(s);}else r[o]=e.toJSON(s);delete r[o].spatialReference;}clone(){return new l({geometry:s$1(this.geometry),type:this.type})}};e([y$1({type:x$1}),g()],y.prototype,"geometry",void 0),e([o$1(["web-scene","portal-item"],"geometry")],y.prototype,"writeGeometry",null),e([y$1({type:["clip","mask","replace"],nonNullable:!0}),g()],y.prototype,"type",void 0),y=l=e([i$2("esri.layers.support.SceneModification")],y);var f=y;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var m;let n=m=class extends(i$3(E.ofType(f))){constructor(r){super(r),this.url=null;}toJSON(r){return this.toArray().map((o=>o.toJSON(r))).filter((r=>!!r.geometry))}clone(){return new m({url:this.url,items:this.items.map((r=>r.clone()))})}_readModifications(r,o){for(const t of r)this.add(f.fromJSON(t,o));}static fromJSON(r,o){const t=new m;return t._readModifications(r,o),t}static async fromUrl(r,t,e){const i={url:U$1(r),origin:"service"},c=await L(r,{responseType:"json",signal:w$1(e,"signal")}),n=t.toJSON(),u=[];for(const r of c.data)u.push(f.fromJSON({...r,geometry:{...r.geometry,spatialReference:n}},i));return new m({url:r,items:u})}};e([y$1({type:String})],n.prototype,"url",void 0),n=m=e([i$2("esri.layers.support.SceneModifications")],n);var u=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let x=class extends(T(p(l$1(d(s$2(l$2(b))))))){constructor(...e){super(...e),this.handles=new u$2,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null;}destroy(){this.handles.destroy();}initialize(){this.handles.add(C(this,"modifications","after-changes",(()=>this.modifications=this.modifications),null,null,!0));}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}readModifications(e,t,o){this._modificationsSource={url:n$2(e,o),context:o};}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const r=w$1(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e);}catch(e){}if(await this._fetchService(r),u$1(this._modificationsSource)){const t=await u.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null;}await this._verifyRootNodeAndUpdateExtent(this.nodePages,r);}beforeSave(){if(!t(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new s$3("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s$3("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new s$3("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return ["IntegratedMeshLayer"]}};e([y$1({type:String,readOnly:!0})],x.prototype,"geometryType",void 0),e([y$1({type:["show","hide"]})],x.prototype,"listMode",void 0),e([y$1({type:["IntegratedMeshLayer"]})],x.prototype,"operationalLayerType",void 0),e([y$1({json:{read:!1},readOnly:!0})],x.prototype,"type",void 0),e([y$1({type:s$4,readOnly:!0})],x.prototype,"nodePages",void 0),e([y$1({type:[a$1],readOnly:!0})],x.prototype,"materialDefinitions",void 0),e([y$1({type:[u$3],readOnly:!0})],x.prototype,"textureSetDefinitions",void 0),e([y$1({type:[m$1],readOnly:!0})],x.prototype,"geometryDefinitions",void 0),e([y$1({readOnly:!0})],x.prototype,"serviceUpdateTimeStamp",void 0),e([y$1({type:u}),g({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],x.prototype,"modifications",void 0),e([e$1(["web-scene","portal-item"],"modifications")],x.prototype,"readModifications",null),e([y$1(d$1)],x.prototype,"elevationInfo",void 0),e([y$1({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],x.prototype,"path",void 0),x=e([i$2("esri.layers.IntegratedMeshLayer")],x);var O=x;

export default O;
