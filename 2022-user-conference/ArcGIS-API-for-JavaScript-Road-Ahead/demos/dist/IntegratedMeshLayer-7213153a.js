import { B as e, C as d, bj as v, cr as r, D as n$1, gD as l$1, e1 as An, pa as t, q4 as Wn, y as y$1, q5 as u, j, z as j$1, h as L, h$ as m$1, l0 as p, l1 as c, l2 as w$1, p2 as t$1, l3 as O, pd as i, j9 as b$1, be as t$2, fw as a$1, gx as U, cj as i$1, bG as w$2, r as r$1, t as t$3, s, jo as o, pg as d$1 } from './_virtual_index-fc1e0009.js';
import { w } from './persistable-192ec3eb.js';
import { N, L as L$1 } from './SceneService-b6bc1b53.js';
import { s as s$1, l as l$2, u as u$1, m as m$2 } from './I3SLayerDefinitions-f679ac5e.js';
import './resourceUtils-780d1af8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var m;let y=m=class extends l$1{constructor(e){super(e),this.geometry=null,this.type="clip";}writeGeometry(e,r,o,s){if(s.layer&&s.layer.spatialReference&&!s.layer.spatialReference.equals(this.geometry.spatialReference)){if(!An(e.spatialReference,s.layer.spatialReference))return void(s&&s.messages&&s.messages.push(new t("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:s.layer.spatialReference,context:s})));const p=new v;Wn(e,p,s.layer.spatialReference),r[o]=p.toJSON(s);}else r[o]=e.toJSON(s);delete r[o].spatialReference;}clone(){return new m({geometry:y$1(this.geometry),type:this.type})}};e([d({type:v}),w()],y.prototype,"geometry",void 0),e([r(["web-scene","portal-item"],"geometry")],y.prototype,"writeGeometry",null),e([d({type:["clip","mask","replace"],nonNullable:!0}),w()],y.prototype,"type",void 0),y=m=e([n$1("esri.layers.support.SceneModification")],y);const f=y;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var a;let n=a=class extends(u(j.ofType(f))){constructor(r){super(r),this.url=null;}clone(){return new a({url:this.url,items:this.items.map((r=>r.clone()))})}toJSON(r){return this.toArray().map((o=>o.toJSON(r))).filter((r=>!!r.geometry))}static fromJSON(r,o){const t=new a;for(const e of r)t.add(f.fromJSON(e,o));return t}static async fromUrl(r,t,e){const c={url:j$1(r),origin:"service"},p=await L(r,{responseType:"json",signal:m$1(e,"signal")}),n=t.toJSON(),l=[];for(const o of p.data)l.push(f.fromJSON({...o,geometry:{...o.geometry,spatialReference:n}},c));return new a({url:r,items:l})}};e([d({type:String})],n.prototype,"url",void 0),n=a=e([n$1("esri.layers.support.SceneModifications")],n);const l=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let b=class extends(N(p(c(w$1(t$1(O(i(b$1)))))))){constructor(...e){super(...e),this._handles=new t$2,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null;}destroy(){this._handles.destroy();}initialize(){this._handles.add(a$1((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),U));}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:i$1(e,r),context:r};}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=m$1(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e);}catch(r){w$2(r);}if(await this._fetchService(t),r$1(this._modificationsSource)){const t=await l.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null;}await this._fetchIndexAndUpdateExtent(this.nodePages,t);}beforeSave(){if(!t$3(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(L$1.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(L$1.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new s("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new s("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return ["IntegratedMeshLayer"]}};e([d({type:String,readOnly:!0})],b.prototype,"geometryType",void 0),e([d({type:["show","hide"]})],b.prototype,"listMode",void 0),e([d({type:["IntegratedMeshLayer"]})],b.prototype,"operationalLayerType",void 0),e([d({json:{read:!1},readOnly:!0})],b.prototype,"type",void 0),e([d({type:s$1,readOnly:!0})],b.prototype,"nodePages",void 0),e([d({type:[l$2],readOnly:!0})],b.prototype,"materialDefinitions",void 0),e([d({type:[u$1],readOnly:!0})],b.prototype,"textureSetDefinitions",void 0),e([d({type:[m$2],readOnly:!0})],b.prototype,"geometryDefinitions",void 0),e([d({readOnly:!0})],b.prototype,"serviceUpdateTimeStamp",void 0),e([d({type:l}),w({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],b.prototype,"modifications",void 0),e([o(["web-scene","portal-item"],"modifications")],b.prototype,"readModifications",null),e([d(d$1)],b.prototype,"elevationInfo",void 0),e([d({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],b.prototype,"path",void 0),b=e([n$1("esri.layers.IntegratedMeshLayer")],b);const A=b;

export { A as default };
