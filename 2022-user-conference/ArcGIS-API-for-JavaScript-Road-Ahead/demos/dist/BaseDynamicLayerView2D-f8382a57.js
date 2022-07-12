import { Y as j, C as s, a as e, d, n } from './_virtual_index-64b818a8.js';
import { t } from './BitmapContainer-252343f3.js';
import { f } from './LayerView2D-246827ac.js';
import { S } from './ExportStrategy-726d3cf7.js';
import { u } from './LayerView-9b4453e0.js';
import { i } from './RefreshableLayerView-1ab1c1be.js';
import './WGLContainer-ddc57cf6.js';
import './enums-fb707d37.js';
import './pixelUtils-d970883c.js';
import './utils-b2399430.js';
import './Utils-9723b65e.js';
import './number-7d0da80b.js';
import './enums-11126df6.js';
import './Texture-0a4fb0f7.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-a43b2cc5.js';
import './alignmentUtils-d4b065e2.js';
import './definitions-20a531fc.js';
import './VertexArrayObject-8b8ec2c7.js';
import './vec4f32-0748677e.js';
import './ProgramTemplate-047af3b2.js';
import './StyleDefinition-8bdfb2b8.js';
import './config-76ec2e12.js';
import './GeometryUtils-0c093176.js';
import './earcut-da8a3e33.js';
import './Bitmap-0c8e05fd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let m=class extends(i(f(u))){update(t){this.strategy.update(t).catch((t=>{j(t)||s.getLogger(this.declaredClass).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new t,this.container.addChild(this._bitmapContainer),this.strategy=new S({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImage(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}};e([d()],m.prototype,"strategy",void 0),e([d()],m.prototype,"updating",void 0),m=e([n("esri.views.2d.layers.BaseDynamicLayerView2D")],m);const c=m;

export { c as default };
