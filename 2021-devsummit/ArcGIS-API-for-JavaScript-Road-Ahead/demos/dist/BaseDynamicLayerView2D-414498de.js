import { n, d0 as i, w as g, j as e, y, k as i$1 } from './_virtual_index-634cbc09.js';
import { l, d as d$1 } from './LayerView2D-9976179f.js';
import { t } from './BitmapContainer-aeb67527.js';
import { S } from './ExportStrategy-0e214a21.js';
import './Container-87e93059.js';
import './mat4f32-8dd9e37a.js';
import './_commonjsHelpers-3f70742c.js';
import './Utils-3e0360c1.js';
import './FramebufferObject-553bb493.js';
import './WGLContainer-9f4143c6.js';
import './definitions-12783a0f.js';
import './vec4f32-1b47f233.js';
import './ShaderCompiler-5b134693.js';
import './Program-83739cf0.js';
import './earcut-cd592b7a.js';
import './GeometryUtils-58fe63b9.js';
import './MaterialKey-202e82ff.js';
import './Bitmap-0d3f5308.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const h=n.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let c=class extends(i(l(d$1))){hitTest(){return null}update(t){this.strategy.update(t).catch((t=>{g(t)||h.error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new t,this.container.addChild(this._bitmapContainer),this.strategy=new S({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImage(t,e,r,{timestamp:this.refreshTimestamp})}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}};e([y()],c.prototype,"strategy",void 0),e([y()],c.prototype,"updating",void 0),c=e([i$1("esri.views.2d.layers.BaseDynamicLayerView2D")],c);var d=c;

export default d;
