import { B as e$2, D as n$1, gD as l, C as d, T as d$1, j_ as p$2, w, bj as v, j, j$ as n$2, s as s$1, aP as l$1, d$ as w$1, fw as a$1 } from './_virtual_index-fc1e0009.js';
import { s as s$2 } from './utils-9d4b373e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let e$1=class extends l{};e$1=e$2([n$1("esri.views.layers.support.ClipArea")],e$1);const t=e$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var s;let i=s=class extends t{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null;}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return (this._get("version")||0)+1}};e$2([d({type:[Number,String],json:{write:!0}})],i.prototype,"left",void 0),e$2([d({type:[Number,String],json:{write:!0}})],i.prototype,"right",void 0),e$2([d({type:[Number,String],json:{write:!0}})],i.prototype,"top",void 0),e$2([d({type:[Number,String],json:{write:!0}})],i.prototype,"bottom",void 0),e$2([d({readOnly:!0})],i.prototype,"version",null),i=s=e$2([n$1("esri.views.layers.support.ClipRect")],i);const p$1=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var y$1;const n={base:p$2,key:"type",typeMap:{extent:w,polygon:v}};let c=y$1=class extends t{constructor(){super(...arguments),this.type="geometry",this.geometry=null;}get version(){return (this._get("version")||0)+1}clone(){return new y$1({geometry:this.geometry.clone()})}};e$2([d({types:n,json:{read:d$1,write:!0}})],c.prototype,"geometry",void 0),e$2([d({readOnly:!0})],c.prototype,"version",null),c=y$1=e$2([n$1("esri.views.layers.support.Geometry")],c);const a=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let e=class extends t{constructor(){super(...arguments),this.type="path",this.path=[];}get version(){return (this._get("version")||0)+1}};e$2([d({type:[[[Number]]],json:{write:!0}})],e.prototype,"path",void 0),e$2([d({readOnly:!0})],e.prototype,"version",null),e=e$2([n$1("esri.views.layers.support.Path")],e);const p=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const y=j.ofType({key:"type",base:t,typeMap:{rect:p$1,path:p,geometry:a}}),f=t=>{let c=class extends t{constructor(){super(...arguments),this.attached=!1,this.clips=new y,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1;}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new s$1("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new s$2),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([l$1((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate();}),w$1),l$1((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e);}),w$1),l$1((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e);}),w$1),l$1((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e);}),w$1),a$1((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips);}))]),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach();}),(()=>{})):this.when().then((()=>{this.processAttach();}),(()=>{})));}destroy(){this.processDetach(),this.updateRequested=!1;}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this.updatingHandles?.updating)}get visibleAtCurrentScale(){return this.isVisibleAtScale(this.view.scale)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate());}processDetach(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1);}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return !0;const{minScale:s,maxScale:i}=t;return (0===s||e<=s)&&(0===i||e>=i)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate());}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1;}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return !0}canResume(){return !!this.spatialReferenceSupported&&(!!super.canResume()&&this.visibleAtCurrentScale)}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,s=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),s&&(e.outsideScaleRange=s),e}};return e$2([d()],c.prototype,"attached",void 0),e$2([d({type:y,set(e){const t=n$2(e,this._get("clips"),y);this._set("clips",t);}})],c.prototype,"clips",void 0),e$2([d()],c.prototype,"container",void 0),e$2([d()],c.prototype,"moving",void 0),e$2([d({readOnly:!0})],c.prototype,"spatialReferenceSupported",null),e$2([d({readOnly:!0})],c.prototype,"updateParameters",void 0),e$2([d()],c.prototype,"updateRequested",void 0),e$2([d()],c.prototype,"updating",null),e$2([d()],c.prototype,"view",void 0),e$2([d({readOnly:!0})],c.prototype,"visibleAtCurrentScale",null),c=e$2([n$1("esri.views.2d.layers.LayerView2D")],c),c};

export { f };
