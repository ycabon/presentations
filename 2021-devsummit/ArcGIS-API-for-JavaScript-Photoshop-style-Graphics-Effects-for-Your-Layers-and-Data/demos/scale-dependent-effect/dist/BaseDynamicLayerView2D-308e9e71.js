import { i, ci as i$1, T, n as e, y, p as i$2 } from './index.js';
import { l, p } from './LayerView2D-a18f2836.js';
import { t } from './BitmapContainer-8af6d48d.js';
import { w } from './ExportStrategy-c0bfea64.js';
import './Container-8a78d3ea.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './Utils-c3a9816c.js';
import './RenderingContext-c649b1a9.js';
import './WGLContainer-b0229d22.js';
import './definitions-6994070a.js';
import './VertexArrayObject-d10bd599.js';
import './ShaderCompiler-962ffbff.js';
import './earcut-54ba3d1d.js';
import './GeometryUtils-83dd86c8.js';
import './MaterialKey-54ebae87.js';
import './Bitmap-eb4f892a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const h=i.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let c=class extends(i$1(l(p))){hitTest(){return null}update(t){this.strategy.update(t).catch((t=>{T(t)||h.error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new t,this.container.addChild(this._bitmapContainer),this.strategy=new w({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImage(t,e,r,{timestamp:this.refreshTimestamp})}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}};e([y()],c.prototype,"strategy",void 0),e([y({dependsOn:["strategy.updating"]})],c.prototype,"updating",void 0),c=e([i$2("esri.views.2d.layers.BaseDynamicLayerView2D")],c);var d=c;

export default d;
