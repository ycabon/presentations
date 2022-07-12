import { a as e, d, jm as t, n as n$1, cA as j, l, fV as U, i_ as n$2, O as t$1 } from './_virtual_index-64b818a8.js';
import { r } from './GroupContainer-01ac0b29.js';
import { f } from './LayerView2D-246827ac.js';
import { u } from './LayerView-9b4453e0.js';
import './WGLContainer-ddc57cf6.js';
import './enums-fb707d37.js';
import './pixelUtils-d970883c.js';
import './utils-b2399430.js';
import './Utils-9723b65e.js';
import './number-7d0da80b.js';
import './enums-11126df6.js';
import './Texture-0a4fb0f7.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-a43b2cc5.js';
import './alignmentUtils-d4b065e2.js';
import './definitions-20a531fc.js';
import './VertexArrayObject-8b8ec2c7.js';
import './vec4f32-0748677e.js';
import './ProgramTemplate-047af3b2.js';
import './StyleDefinition-8bdfb2b8.js';
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
