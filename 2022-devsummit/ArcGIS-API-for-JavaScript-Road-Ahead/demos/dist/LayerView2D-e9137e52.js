import { d as a, aL as r, d4 as n$1, E as n$2, g as u, n as n$3, j as e$2, y as y$1, k as i$1, c9 as a$1, bU as p$4, d5 as c$2, bz as M, aQ as x, b$ as L, d6 as n$4, N as d$1 } from './_virtual_index-2683c931.js';
import { r as r$1 } from './Container-c9657d6c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let p$3=class extends(a(r(n$1(n$2.EventedMixin(u))))){constructor(e){super(e),this.layer=null,this.parent=null;}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const r=this.layer&&this.layer.id||"no id",s=this.layer&&this.layer.title||"no title";throw n$3.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${s}', id: '${r}')`,e),e}}));}get fullOpacity(){const e=e=>null==e?1:e;return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}get suspended(){return !this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return !this.suspended&&!0===this.layer.legendEnabled}get updating(){return !!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get visible(){return !0===this.get("layer.visible")}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible");}canResume(){return !this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},t=this;return t.view&&t.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return !1}};e$2([y$1()],p$3.prototype,"fullOpacity",null),e$2([y$1()],p$3.prototype,"layer",void 0),e$2([y$1()],p$3.prototype,"parent",void 0),e$2([y$1({readOnly:!0})],p$3.prototype,"suspended",null),e$2([y$1({readOnly:!0})],p$3.prototype,"suspendInfo",null),e$2([y$1({readOnly:!0})],p$3.prototype,"legendEnabled",null),e$2([y$1({type:Boolean,readOnly:!0})],p$3.prototype,"updating",null),e$2([y$1()],p$3.prototype,"visible",null),p$3=e$2([i$1("esri.views.layers.LayerView")],p$3);var d=p$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let e$1=class extends a$1{};e$1=e$2([i$1("esri.views.layers.support.ClipArea")],e$1);var p$2=e$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var s;let i=s=class extends p$2{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null;}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return (this._get("version")||0)+1}};e$2([y$1({type:[Number,String],json:{write:!0}})],i.prototype,"left",void 0),e$2([y$1({type:[Number,String],json:{write:!0}})],i.prototype,"right",void 0),e$2([y$1({type:[Number,String],json:{write:!0}})],i.prototype,"top",void 0),e$2([y$1({type:[Number,String],json:{write:!0}})],i.prototype,"bottom",void 0),e$2([y$1({readOnly:!0})],i.prototype,"version",null),i=s=e$2([i$1("esri.views.layers.support.ClipRect")],i);var p$1=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var y;const c$1={base:c$2,key:"type",typeMap:{extent:M,polygon:x}};let n=y=class extends p$2{constructor(){super(...arguments),this.type="geometry",this.geometry=null;}get version(){return (this._get("version")||0)+1}clone(){return new y({geometry:this.geometry.clone()})}};e$2([y$1({types:c$1,json:{read:p$4,write:!0}})],n.prototype,"geometry",void 0),e$2([y$1({readOnly:!0})],n.prototype,"version",null),n=y=e$2([i$1("esri.views.layers.support.Geometry")],n);var l$1=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let e=class extends p$2{constructor(){super(...arguments),this.type="path",this.path=[];}get version(){return (this._get("version")||0)+1}};e$2([y$1({type:[[[Number]]],json:{write:!0}})],e.prototype,"path",void 0),e$2([y$1({readOnly:!0})],e.prototype,"version",null),e=e$2([i$1("esri.views.layers.support.Path")],e);var p=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const c=L.ofType({key:"type",base:p$2,typeMap:{rect:p$1,path:p,geometry:l$1}}),l=i=>{let a=class extends i{constructor(){super(...arguments),this.clips=new c,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1;}initialize(){var t;this.container||(this.container=new r$1),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([d$1(this,"suspended",(t=>{this.container&&(this.container.visible=!t),this.view&&!t&&this.updateRequested&&this.view.requestUpdate();}),!0),d$1(this,["layer.opacity","container"],(()=>{var t,e;this.container&&(this.container.opacity=null!=(t=null==(e=this.layer)?void 0:e.opacity)?t:1);}),!0),d$1(this,["layer.blendMode"],(t=>{this.container&&(this.container.blendMode=t);}),!0),d$1(this,["layer.effect"],(t=>{this.container&&(this.container.effect=t);}),!0),this.clips.on("change",(()=>{this.container.clips=this.clips,this.notifyChange("clips");}))]),null!=(t=this.view)&&t.whenLayerView?this.view.whenLayerView(this.layer).then((t=>{t!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0);}),(()=>{})):this.when().then((()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0);}),(()=>{}));}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1,super.destroy();}get updating(){return !this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}isVisibleAtScale(t){let e=!0;const s=this.layer,i=s.minScale,r=s.maxScale;if(null!=i&&null!=r){let s=!i,o=!r;!s&&t<=i&&(s=!0),!o&&t>=r&&(o=!0),e=s&&o;}return e}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate());}processUpdate(t){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",t),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(t))):this.updateRequested=!1;}isUpdating(){return !1}isRendering(){return !1}canResume(){return !!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return e$2([y$1({type:c,set(t){const e=n$4(t,this._get("clips"),c);this._set("clips",e);}})],a.prototype,"clips",void 0),e$2([y$1()],a.prototype,"moving",void 0),e$2([y$1()],a.prototype,"attached",void 0),e$2([y$1()],a.prototype,"container",void 0),e$2([y$1()],a.prototype,"suspended",void 0),e$2([y$1({readOnly:!0})],a.prototype,"updateParameters",void 0),e$2([y$1()],a.prototype,"updateRequested",void 0),e$2([y$1()],a.prototype,"updating",null),e$2([y$1()],a.prototype,"view",void 0),a=e$2([i$1("esri.views.2d.layers.LayerView2D")],a),a};

export { d, l };
