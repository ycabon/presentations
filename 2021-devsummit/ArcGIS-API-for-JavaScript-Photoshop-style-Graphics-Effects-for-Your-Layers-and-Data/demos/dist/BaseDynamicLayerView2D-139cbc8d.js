import { k as i, dX as i$1, T, y as e, z as y, A as i$2 } from './_virtual:index-1982596a.js';
import { l, p } from './LayerView2D-650a20fa.js';
import { t } from './BitmapContainer-b09e982a.js';
import { w } from './ExportStrategy-feb5273c.js';
import './Container-5f0afd2d.js';
import './mat4f32-a4d1c0af.js';
import './Utils-86534e09.js';
import './WGLContainer-c81de169.js';
import './ShaderCompiler-a1cbc8fc.js';
import './Program-cb13ad60.js';
import './earcut-54ba3d1d.js';
import './GeometryUtils-83dd86c8.js';
import './MaterialKey-e4d75cc1.js';
import './Bitmap-f1dccf0b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const h=i.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let c=class extends(i$1(l(p))){hitTest(){return null}update(t){this.strategy.update(t).catch((t=>{T(t)||h.error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new t,this.container.addChild(this._bitmapContainer),this.strategy=new w({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImage(t,e,r,{timestamp:this.refreshTimestamp})}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}};e([y()],c.prototype,"strategy",void 0),e([y({dependsOn:["strategy.updating"]})],c.prototype,"updating",void 0),c=e([i$2("esri.views.2d.layers.BaseDynamicLayerView2D")],c);var d=c;

export default d;
