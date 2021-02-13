import { l as a, aO as r, cT as p$4, Y as i$1, v as p$5, i as i$2, q as e$1, y as y$1, r as i$3, cU as a$1, cu as p$6, cV as c$2, bZ as z, aU as x, cv as E, cW as n$1, a2 as d$1 } from './index.js';
import { r as r$1 } from './Container-a572c1be.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let d=class extends(a(r(p$4(i$1.EventedMixin(p$5))))){constructor(e){super(e),this.layer=null,this.parent=null;}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const r=this.layer&&this.layer.id||"no id",s=this.layer&&this.layer.title||"no title";throw i$2.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${s}', id: '${r}')`,e),e}}));}get fullOpacity(){const e=e=>null==e?1:e;return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}get suspended(){return !this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return !this.suspended&&!0===this.layer.legendEnabled}get updating(){return !!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get visible(){return !0===this.get("layer.visible")}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible");}canResume(){return !this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return !1}};e$1([y$1({dependsOn:["layer.opacity","parent.fullOpacity"]})],d.prototype,"fullOpacity",null),e$1([y$1()],d.prototype,"layer",void 0),e$1([y$1()],d.prototype,"parent",void 0),e$1([y$1({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],d.prototype,"suspended",null),e$1([y$1({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],d.prototype,"suspendInfo",null),e$1([y$1({readOnly:!0,dependsOn:["suspended","layer.legendEnabled?"]})],d.prototype,"legendEnabled",null),e$1([y$1({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],d.prototype,"updating",null),e$1([y$1({dependsOn:["layer.visible"]})],d.prototype,"visible",null),d=e$1([i$3("esri.views.layers.LayerView")],d);var p=d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let e=class extends a$1{};e=e$1([i$3("esri.views.layers.support.ClipArea")],e);var p$1=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var s;let p$2=s=class extends p$1{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null;}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return (this._get("version")||0)+1}};e$1([y$1({type:[Number,String],json:{write:!0}})],p$2.prototype,"left",void 0),e$1([y$1({type:[Number,String],json:{write:!0}})],p$2.prototype,"right",void 0),e$1([y$1({type:[Number,String],json:{write:!0}})],p$2.prototype,"top",void 0),e$1([y$1({type:[Number,String],json:{write:!0}})],p$2.prototype,"bottom",void 0),e$1([y$1({readOnly:!0,dependsOn:["left","right","top","bottom"]})],p$2.prototype,"version",null),p$2=s=e$1([i$3("esri.views.layers.support.ClipRect")],p$2);var i=p$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var n;const y={base:c$2,key:"type",typeMap:{extent:z,polygon:x}};let c=n=class extends p$1{constructor(){super(...arguments),this.type="geometry",this.geometry=null;}get version(){return (this._get("version")||0)+1}clone(){return new n({geometry:this.geometry.clone()})}};e$1([y$1({types:y,json:{read:p$6,write:!0}})],c.prototype,"geometry",void 0),e$1([y$1({readOnly:!0,dependsOn:["geometry"]})],c.prototype,"version",null),c=n=e$1([i$3("esri.views.layers.support.Geometry")],c);var l=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let t=class extends p$1{constructor(){super(...arguments),this.type="path",this.path=[];}get version(){return (this._get("version")||0)+1}};e$1([y$1({type:[[[Number]]],json:{write:!0}})],t.prototype,"path",void 0),e$1([y$1({readOnly:!0,dependsOn:["path"]})],t.prototype,"version",null),t=e$1([i$3("esri.views.layers.support.Path")],t);var p$3=t;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c$1=E.ofType({key:"type",base:p$1,typeMap:{rect:i,path:p$3,geometry:l}}),l$1=i=>{let o=class extends i{constructor(){super(...arguments),this.clips=new c$1,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1;}initialize(){var e;this.container||(this.container=new r$1),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([d$1(this,"suspended",(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate();}),!0),d$1(this,["layer.opacity","container"],(()=>{var e,t;this.container&&(this.container.opacity=null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1);}),!0),d$1(this,["layer.blendMode"],(e=>{this.container&&(this.container.blendMode=e);}),!0),d$1(this,["layer.effect"],(e=>{this.container&&(this.container.effect=e);}),!0),this.clips.on("change",(()=>{this.container.clips=this.clips,this.notifyChange("clips");}))]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0);}),(()=>{})):this.when().then((()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0);}),(()=>{}));}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1;}get updating(){return !this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}isVisibleAtScale(e){let t=!0;const s=this.layer,i=s.minScale,r=s.maxScale;if(null!=i&&null!=r){let s=!i,a=!r;!s&&e<=i&&(s=!0),!a&&e>=r&&(a=!0),t=s&&a;}return t}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate());}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1;}isUpdating(){return !1}isRendering(){return !1}canResume(){return !!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return e$1([y$1({type:c$1,set(e){const t=n$1(e,this._get("clips"),c$1);this._set("clips",t);}})],o.prototype,"clips",void 0),e$1([y$1()],o.prototype,"moving",void 0),e$1([y$1()],o.prototype,"attached",void 0),e$1([y$1()],o.prototype,"container",void 0),e$1([y$1({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],o.prototype,"suspended",void 0),e$1([y$1({readOnly:!0})],o.prototype,"updateParameters",void 0),e$1([y$1()],o.prototype,"updateRequested",void 0),e$1([y$1({dependsOn:["attached","updateRequested","suspended"]})],o.prototype,"updating",null),e$1([y$1()],o.prototype,"view",void 0),o=e$1([i$3("esri.views.2d.layers.LayerView2D")],o),o};

export { l$1 as l, p };
