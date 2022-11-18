import { u as e$1, y as y$2, z as n$1, ju as l, Q as v, pN as p$3, w, bJ as v$1, e9 as j, n9 as n$2, E as s$1, b7 as l$1, eX as w$1, gD as a$1 } from './_virtual_index-1ea2035a.js';
import { i as i$1 } from './utils-94e6680e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let t=class extends l{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};e$1([y$2({readOnly:!0})],t.prototype,"version",null),t=e$1([n$1("esri.views.layers.support.ClipArea")],t);const p$2=t;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var s;let i=s=class extends p$2{constructor(t){super(t),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null;}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom");}};e$1([y$2({type:[Number,String],json:{write:!0}})],i.prototype,"left",void 0),e$1([y$2({type:[Number,String],json:{write:!0}})],i.prototype,"right",void 0),e$1([y$2({type:[Number,String],json:{write:!0}})],i.prototype,"top",void 0),e$1([y$2({type:[Number,String],json:{write:!0}})],i.prototype,"bottom",void 0),i=s=e$1([n$1("esri.views.layers.support.ClipRect")],i);const p$1=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var y$1;const c={base:p$3,key:"type",typeMap:{extent:w,polygon:v$1}};let n=y$1=class extends p$2{constructor(r){super(r),this.type="geometry",this.geometry=null;}clone(){return new y$1({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry");}};e$1([y$2({types:c,json:{read:v,write:!0}})],n.prototype,"geometry",void 0),n=y$1=e$1([n$1("esri.views.layers.support.Geometry")],n);const a=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let e=class extends p$2{constructor(r){super(r),this.type="path",this.path=[];}commitVersionProperties(){this.commitProperty("path");}};e$1([y$2({type:[[[Number]]],json:{write:!0}})],e.prototype,"path",void 0),e=e$1([n$1("esri.views.layers.support.Path")],e);const p=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const u=j.ofType({key:"type",base:null,typeMap:{rect:p$1,path:p,geometry:a}}),y=t=>{let h=class extends t{constructor(){super(...arguments),this.attached=!1,this.clips=new u,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1;}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new s$1("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new i$1),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.handles.add([l$1((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate();}),w$1),l$1((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e);}),w$1),l$1((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e);}),w$1),l$1((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e);}),w$1),a$1((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips);}),w$1),l$1((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(({scale:e})=>{const t=e&&this.isVisibleAtScale(e);t!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",t);}),w$1)]),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach();}),(()=>{})):this.when().then((()=>{this.processAttach();}),(()=>{})));}destroy(){this.processDetach(),this.updateRequested=!1;}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this.updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate());}processDetach(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1);}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return !0;const{minScale:s,maxScale:i}=t;return (0===s||e<=s)&&(0===i||e>=i)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate());}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1;}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return !0}canResume(){return !!this.spatialReferenceSupported&&(!!super.canResume()&&this.visibleAtCurrentScale)}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,s=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),s&&(e.outsideScaleRange=s),e}};return e$1([y$2()],h.prototype,"attached",void 0),e$1([y$2({type:u,set(e){const t=n$2(e,this._get("clips"),u);this._set("clips",t);}})],h.prototype,"clips",void 0),e$1([y$2()],h.prototype,"container",void 0),e$1([y$2()],h.prototype,"moving",void 0),e$1([y$2({readOnly:!0})],h.prototype,"spatialReferenceSupported",null),e$1([y$2({readOnly:!0})],h.prototype,"updateParameters",void 0),e$1([y$2()],h.prototype,"updateRequested",void 0),e$1([y$2()],h.prototype,"updating",null),e$1([y$2()],h.prototype,"view",void 0),e$1([y$2({readOnly:!0})],h.prototype,"visibleAtCurrentScale",void 0),h=e$1([n$1("esri.views.2d.layers.LayerView2D")],h),h};

export { y };
