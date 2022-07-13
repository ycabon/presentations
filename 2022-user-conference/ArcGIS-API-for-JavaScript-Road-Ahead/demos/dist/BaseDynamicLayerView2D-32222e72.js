import { ar as j, Z as s, B as e, C as d, D as n } from './_virtual_index-fc1e0009.js';
import { t } from './BitmapContainer-34d8cb69.js';
import { f } from './LayerView2D-915c0186.js';
import { S } from './ExportStrategy-18c3234c.js';
import { u } from './LayerView-9aad410e.js';
import { i } from './RefreshableLayerView-894e8344.js';
import './WGLContainer-b291d234.js';
import './enums-fb707d37.js';
import './utils-9d4b373e.js';
import './EffectView-1b384502.js';
import './Utils-073d76fd.js';
import './number-7d0da80b.js';
import './enums-11126df6.js';
import './Texture-4621aa9a.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-833d16dd.js';
import './alignmentUtils-d4b065e2.js';
import './definitions-20a531fc.js';
import './VertexArrayObject-6f9baa1d.js';
import './vec4f32-0748677e.js';
import './ProgramTemplate-dbebc039.js';
import './StyleDefinition-8bdfb2b8.js';
import './config-76ec2e12.js';
import './GeometryUtils-0c093176.js';
import './earcut-da8a3e33.js';
import './Bitmap-de94173a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let m=class extends(i(f(u))){update(t){this.strategy.update(t).catch((t=>{j(t)||s.getLogger(this.declaredClass).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new t,this.container.addChild(this._bitmapContainer),this.strategy=new S({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImage(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}};e([d()],m.prototype,"strategy",void 0),e([d()],m.prototype,"updating",void 0),m=e([n("esri.views.2d.layers.BaseDynamicLayerView2D")],m);const c=m;

export { c as default };
