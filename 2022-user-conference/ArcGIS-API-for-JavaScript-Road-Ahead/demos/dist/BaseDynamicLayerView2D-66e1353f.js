import { aA as j, Z as s, B as e, C as d, D as n } from './_virtual_index-9b831d4a.js';
import { t } from './BitmapContainer-000ea42e.js';
import { f } from './LayerView2D-bd5847a4.js';
import { S } from './ExportStrategy-a6f2b423.js';
import { u } from './LayerView-e26ca8f9.js';
import { i } from './RefreshableLayerView-18d98912.js';
import './brushes-0ba66925.js';
import './definitions-94cbc2bf.js';
import './Utils-0ee32720.js';
import './number-7d0da80b.js';
import './enums-11126df6.js';
import './ProgramTemplate-fb419b93.js';
import './MaterialKey-7b48d630.js';
import './alignmentUtils-d4b065e2.js';
import './utils-bc8fd4f8.js';
import './heatmapTextureUtils-0da3eb14.js';
import './StyleDefinition-8bdfb2b8.js';
import './GeometryUtils-0c093176.js';
import './WGLContainer-c474bc93.js';
import './Container-38939417.js';
import './EffectView-280fbeb4.js';
import './Bitmap-04f84dc2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let m=class extends(i(f(u))){update(t){this.strategy.update(t).catch((t=>{j(t)||s.getLogger(this.declaredClass).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new t,this.container.addChild(this._bitmapContainer),this.strategy=new S({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImage(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}};e([d()],m.prototype,"strategy",void 0),e([d()],m.prototype,"updating",void 0),m=e([n("esri.views.2d.layers.BaseDynamicLayerView2D")],m);const c=m;

export { c as default };
