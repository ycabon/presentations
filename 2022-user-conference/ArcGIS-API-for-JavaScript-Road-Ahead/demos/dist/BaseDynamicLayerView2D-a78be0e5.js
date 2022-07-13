import { ar as j, Z as s, B as e, C as d, D as n } from './_virtual_index-4b72c57d.js';
import { t } from './BitmapContainer-bf37ea3c.js';
import { f, u } from './LayerView-a579da68.js';
import { S } from './ExportStrategy-953a358e.js';
import { i } from './RefreshableLayerView-f638c9df.js';
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
import './Bitmap-b90cd0ba.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let m=class extends(i(f(u))){update(t){this.strategy.update(t).catch((t=>{j(t)||s.getLogger(this.declaredClass).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new t,this.container.addChild(this._bitmapContainer),this.strategy=new S({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImage(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}};e([d()],m.prototype,"strategy",void 0),e([d()],m.prototype,"updating",void 0),m=e([n("esri.views.2d.layers.BaseDynamicLayerView2D")],m);const c=m;

export { c as default };
