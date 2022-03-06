import { e as s, q as g, ac as e, ad as d$1, ae as i$1 } from './_virtual_index-49b2bc11.js';
import { t } from './BitmapContainer-1211760a.js';
import { l, u } from './LayerView-9194fd82.js';
import { S } from './ExportStrategy-cd41b467.js';
import { i } from './RefreshableLayerView-a108c313.js';
import './WGLContainer-0a7b434f.js';
import './VertexArrayObject-fabb4101.js';
import './Texture-7f200883.js';
import './Utils-8759b086.js';
import './ShaderCompiler-17283eff.js';
import './config-3e6df72b.js';
import './GeometryUtils-8e9bb139.js';
import './MaterialKey-67bb5654.js';
import './Container-905526e1.js';
import './earcut-211aa720.js';
import './Bitmap-4819b4da.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h=s.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let c=class extends(i(l(u))){update(t){this.strategy.update(t).catch((t=>{g(t)||h.error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new t,this.container.addChild(this._bitmapContainer),this.strategy=new S({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImage(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}};e([d$1()],c.prototype,"strategy",void 0),e([d$1()],c.prototype,"updating",void 0),c=e([i$1("esri.views.2d.layers.BaseDynamicLayerView2D")],c);const d=c;

export { d as default };
