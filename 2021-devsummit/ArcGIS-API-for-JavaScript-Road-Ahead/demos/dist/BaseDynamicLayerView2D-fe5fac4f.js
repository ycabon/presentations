import { n, d0 as i, w as g, j as e, y, k as i$1 } from './_virtual_index-2683c931.js';
import { l, d as d$1 } from './LayerView2D-e9137e52.js';
import { t } from './BitmapContainer-c805daa0.js';
import { S } from './ExportStrategy-f4477cea.js';
import './Container-c9657d6c.js';
import './mat4f32-8dd9e37a.js';
import './_commonjsHelpers-3f70742c.js';
import './Utils-0b584b8b.js';
import './FramebufferObject-c19fef9d.js';
import './WGLContainer-0b2e4b10.js';
import './definitions-12783a0f.js';
import './vec4f32-1b47f233.js';
import './ShaderCompiler-8b82754c.js';
import './Program-9cec60fc.js';
import './earcut-cd592b7a.js';
import './GeometryUtils-58fe63b9.js';
import './MaterialKey-2936dc4b.js';
import './Bitmap-c19e22e5.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const h=n.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let c=class extends(i(l(d$1))){hitTest(){return null}update(t){this.strategy.update(t).catch((t=>{g(t)||h.error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new t,this.container.addChild(this._bitmapContainer),this.strategy=new S({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImage(t,e,r,{timestamp:this.refreshTimestamp})}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}};e([y()],c.prototype,"strategy",void 0),e([y()],c.prototype,"updating",void 0),c=e([i$1("esri.views.2d.layers.BaseDynamicLayerView2D")],c);var d=c;

export default d;
