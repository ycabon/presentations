import { B as e, C as d, e9 as t, D as n$1, j, aP as l, ea as U, dI as n$2, t as t$1 } from './_virtual_index-4b72c57d.js';
import { r } from './GroupContainer-5c2c9c46.js';
import { u, f } from './LayerView-a579da68.js';
import './WGLContainer-e9b25fc8.js';
import './enums-fb707d37.js';
import './utils-1dcda7d1.js';
import './EffectView-0ee93c44.js';
import './Utils-af323e30.js';
import './number-7d0da80b.js';
import './enums-1f2484bf.js';
import './Texture-e2dd4118.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-98c27063.js';
import './alignmentUtils-d4b065e2.js';
import './VertexArrayObject-47c5aa7a.js';
import './ProgramTemplate-cee70b37.js';
import './StyleDefinition-c3b89df1.js';
import './config-76ec2e12.js';
import './GeometryUtils-0c093176.js';
import './earcut-da8a3e33.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let p=class extends u{constructor(i){super(i),this.type="group",this.layerViews=new j;}_allLayerViewVisibility(i){this.layerViews.forEach((e=>{e.visible=i;}));}initialize(){this.handles.add([this.layerViews.on("change",(i=>this._layerViewsChangeHandler(i))),l((()=>this.layer.visibilityMode),(()=>this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(null)))),U),l((()=>this.visible),(i=>{this._applyVisibility((()=>this._allLayerViewVisibility(i)),(()=>{}));}),U)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]});}set layerViews(i){this._set("layerViews",n$2(i,this._get("layerViews")));}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((i,e)=>i+e.updatingProgress),0)/this.layerViews.length}isUpdating(){return this.layerViews.some((i=>i.updating))}_hasLayerViewVisibleOverrides(){return this.layerViews.some((i=>i._isOverridden("visible")))}_findLayerViewForLayer(i){return i&&this.layerViews.find((e=>e.layer===i))}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find((i=>this._findLayerViewForLayer(i)?.visible));return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){t$1(i)&&(i=this._firstVisibleOnLayerOrder(),t$1(i)&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))),this.layerViews.forEach((e=>{e.visible=e===i;}));}_layerViewsChangeHandler(i){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map((i=>l((()=>i.visible),(e=>this._applyVisibility((()=>{e!==this.visible&&(i.visible=this.visible);}),(()=>this._applyExclusiveVisibility(e?i:null)))),U))).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(e?.visible?e:null)));}_applyVisibility(i,e){this._hasLayerViewVisibleOverrides()&&("inherited"===this.layer?.visibilityMode?i():"exclusive"===this.layer?.visibilityMode&&e());}};e([d({cast:t})],p.prototype,"layerViews",null),e([d({readOnly:!0})],p.prototype,"updatingProgress",null),e([d()],p.prototype,"view",void 0),p=e([n$1("esri.views.layers.GroupLayerView")],p);const n=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let a=class extends(f(n)){constructor(){super(...arguments),this.container=new r;}attach(){this._updateStageChildren(),this.handles.add(this.layerViews.on("after-changes",(()=>this._updateStageChildren())),"grouplayerview2d");}detach(){this.handles.remove("grouplayerview2d"),this.container.removeAllChildren();}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,r)=>this.container.addChildAt(e.container,r)));}};a=e([n$1("esri.views.2d.layers.GroupLayerView2D")],a);const i=a;

export { i as default };
