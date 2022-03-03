import { e as s, q as g, ac as e, ad as d$1, ae as i$1 } from './_virtual_index-3ad07138.js';
import { t } from './BitmapContainer-b9d43000.js';
import { l, u } from './LayerView-ccf9971d.js';
import { S } from './ExportStrategy-cc87358e.js';
import { i } from './RefreshableLayerView-cd718d73.js';
import './WGLContainer-bec6b82e.js';
import './VertexArrayObject-3beb5624.js';
import './Texture-970325f3.js';
import './Utils-ba2d87f4.js';
import './ShaderCompiler-9e67e52b.js';
import './config-3e6df72b.js';
import './GeometryUtils-8e9bb139.js';
import './MaterialKey-8a7bcdbb.js';
import './Container-0ea8b7c2.js';
import './earcut-211aa720.js';
import './Bitmap-6fb4c9a4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h=s.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let c=class extends(i(l(u))){update(t){this.strategy.update(t).catch((t=>{g(t)||h.error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new t,this.container.addChild(this._bitmapContainer),this.strategy=new S({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImage(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}};e([d$1()],c.prototype,"strategy",void 0),e([d$1()],c.prototype,"updating",void 0),c=e([i$1("esri.views.2d.layers.BaseDynamicLayerView2D")],c);const d=c;

export { d as default };
