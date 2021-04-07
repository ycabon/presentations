import { a2 as i, hR as i$1, cI as c, hU as j$1, eK as x, C as u, c6 as z, df as g, cE as E$1, U, y as e, z as y, hV as i$2, d6 as e$1, A as i$3, gD as t, gF as o, gE as s, gH as l, gW as d$1, gI as l$1, gG as b, gX as l$2, a_ as y$1, f4 as st, bv as o$1, g$ as p } from './_virtual:index-325c676c.js';
import { P, S as S$1, g as g$1, d } from './kmlUtils-07614a25.js';
import './aaBoundingBox-c7eff59a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var j;let S=j=class extends(i.EventedMixin(i$1(c))){constructor(){super(...arguments),this._sublayersHandles=null,this.description=null,this.id=null,this.networkLink=null,this.title=null,this.sourceJSON=null,this.fullExtent=null;}initialize(){j$1(this,"networkLink").then((()=>x(this,"visible"))).then((()=>this.load()));}load(e){if(!this.networkLink)return;const s=u(e)?e.signal:null,o=this._fetchService(this._get("networkLink").href,s).then((e=>{const r=P(e.sublayers);this.fullExtent=z.fromJSON(r),this.sourceJSON=e;const s=g(E$1.ofType(j),S$1(j,e));this.sublayers?this.sublayers.addMany(s):this.sublayers=s,this.layer.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers");}));return this.addResolvingPromise(o),U(this)}set sublayers(e){const r=this._get("sublayers");r&&(r.forEach((e=>{e.parent=null,e.layer=null;})),this._sublayersHandles.forEach((e=>e.remove())),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer;})),this._sublayersHandles=[e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer;})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null;}))]),this._set("sublayers",e);}castSublayers(e){return g(E$1.ofType(j),e)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"));}readVisible(e,r){return !!r.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((r=>r.layer=e));}_fetchService(e,r){return g$1(e,this.layer.outSpatialReference,this.layer.refreshInterval,r).then((e=>d(e.data)))}};e([y()],S.prototype,"description",void 0),e([y()],S.prototype,"id",void 0),e([y({readOnly:!0,value:null})],S.prototype,"networkLink",void 0),e([y({json:{write:{allowNull:!0}}})],S.prototype,"parent",void 0),e([y({value:null,json:{write:{allowNull:!0}}})],S.prototype,"sublayers",null),e([i$2("sublayers")],S.prototype,"castSublayers",null),e([y({value:null,json:{read:{source:"name"}}})],S.prototype,"title",void 0),e([y({value:!0})],S.prototype,"visible",null),e([e$1("visible",["visibility"])],S.prototype,"readVisible",null),e([y()],S.prototype,"sourceJSON",void 0),e([y({value:null})],S.prototype,"layer",null),e([y({type:z})],S.prototype,"fullExtent",void 0),S=j=e([i$3("esri.layers.support.KMLSublayer")],S);var _=S;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const E=["kml","xml"];let w=class extends(t(o(s(l(d$1(l$1(b))))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new l$2({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=y$1.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null;}initialize(){this.watch("sublayers",((e,r)=>{r&&r.forEach((e=>{e.parent=null,e.layer=null;})),e&&e.forEach((e=>{e.parent=this,e.layer=this;}));}),!0),this.on("sublayer-update",(()=>this.notifyChange("fullExtent")));}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}readSublayersFromItemOrWebMap(e,r){this._visibleFolders=r.visibleFolders;}readSublayers(e,r,t){return S$1(_,r,t,this._visibleFolders)}writeSublayers(e,r){const t=[],o=e.toArray();for(;o.length;){const e=o[0];e.networkLink||(e.visible&&t.push(e.id),e.sublayers&&o.push(...e.sublayers.toArray())),o.shift();}r.visibleFolders=t;}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?st(this.url,E)||"KML":e||""}set title(e){this._set("title",e);}get visibleSublayers(){const e=this.sublayers,r=[],t=e=>{e.visible&&(r.push(e),e.sublayers&&e.sublayers.forEach(t));};return e&&e.forEach(t),r}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=u(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).then((()=>this._fetchService(t)))),U(this)}async _fetchService(e){const r=await U().then((()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:g$1(this.url,this.outSpatialReference,this.refreshInterval,e))),t=d(r.data);t&&this.read(t,{origin:"service"});}_recomputeFullExtent(){let e=null;this.extent&&(e=this.extent.clone());const r=t=>{if(t.sublayers)for(const o of t.sublayers.items)r(o),o.visible&&o.fullExtent&&(e?e.union(o.fullExtent):e=o.fullExtent.clone());};return r(this),e}};e([y({readOnly:!0})],w.prototype,"allSublayers",void 0),e([y({type:y$1})],w.prototype,"outSpatialReference",void 0),e([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],w.prototype,"path",void 0),e([y({readOnly:!0,json:{read:!1,write:!1}})],w.prototype,"legendEnabled",void 0),e([y({type:["show","hide","hide-children"]})],w.prototype,"listMode",void 0),e([y({type:["KML"]})],w.prototype,"operationalLayerType",void 0),e([y({type:E$1.ofType(_),json:{write:{ignoreOrigin:!0}}})],w.prototype,"sublayers",void 0),e([e$1(["web-map","portal-item"],"sublayers",["visibleFolders"])],w.prototype,"readSublayersFromItemOrWebMap",null),e([e$1("service","sublayers",["sublayers"])],w.prototype,"readSublayers",null),e([o$1("sublayers")],w.prototype,"writeSublayers",null),e([y({readOnly:!0,json:{read:!1}})],w.prototype,"type",void 0),e([y({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}},dependsOn:["url","parsedUrl"]})],w.prototype,"title",null),e([y(p)],w.prototype,"url",void 0),e([y({readOnly:!0,dependsOn:["sublayers"]})],w.prototype,"visibleSublayers",null),e([y({type:z})],w.prototype,"extent",void 0),e([y({dependsOn:["extent"]})],w.prototype,"fullExtent",null),w=e([i$3("esri.layers.KMLLayer")],w);var O=w;

export default O;