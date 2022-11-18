import { aC as j, $ as s, u as e, y as y$1, z as n } from './_virtual_index-1ea2035a.js';
import { a } from './BitmapContainer-6c702079.js';
import { y } from './LayerView2D-0acb5666.js';
import { v } from './ExportStrategy-610b458a.js';
import { u } from './LayerView-04d8537b.js';
import { i } from './RefreshableLayerView-f32b8d34.js';
import './WGLContainer-be6ebd59.js';
import './WGLBrushVTLSymbol-5326d98d.js';
import './definitions-a784b44f.js';
import './enums-4e1a5b11.js';
import './number-7d0da80b.js';
import './StyleDefinition-98114241.js';
import './enums-3e26cf0d.js';
import './GeometryUtils-07c7843a.js';
import './Utils-7b2ac961.js';
import './ShaderCompiler-4879c29c.js';
import './ProgramTemplate-192f2ab9.js';
import './MaterialKey-8672cbbb.js';
import './alignmentUtils-d4b065e2.js';
import './utils-94e6680e.js';
import './EffectView-de5a8347.js';
import './heatmapTextureUtils-076ceaf2.js';
import './Bitmap-c8e15fa6.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let m=class extends(i(y(u))){update(t){this._strategy.update(t).catch((t=>{j(t)||s.getLogger(this.declaredClass).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImage(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y$1()],m.prototype,"_strategy",void 0),e([y$1()],m.prototype,"updating",void 0),m=e([n("esri.views.2d.layers.BaseDynamicLayerView2D")],m);const c=m;

export { c as default };
