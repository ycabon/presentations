import { c8 as n$1, b$ as L, j as e, y, k as i$1 } from './_virtual_index-2683c931.js';
import { l as l$1, d } from './LayerView2D-e9137e52.js';
import { e as et } from './BaseGraphicContainer-d9ecea3a.js';
import { i } from './GraphicContainer-e41c0016.js';
import './Container-c9657d6c.js';
import './mat4f32-8dd9e37a.js';
import './_commonjsHelpers-3f70742c.js';
import './definitions-12783a0f.js';
import './schemaUtils-62f0bc7d.js';
import './MD5-a554c7d9.js';
import './Utils-0b584b8b.js';
import './FramebufferObject-c19fef9d.js';
import './MaterialKey-2936dc4b.js';
import './visualVariablesUtils-ba6f60d7.js';
import './Rect-a3838111.js';
import './BidiEngine-fb789855.js';
import './WGLMeshFactory-4b43760e.js';
import './ComputedAttributeStorage-bb926dc8.js';
import './quickselect-eae177f3.js';
import './FeatureSetReader-c8b784f1.js';
import './centroid-395619b0.js';
import './visualVariablesUtils-52efe4a8.js';
import './tileUtils-a3c95651.js';
import './TurboLine-b4d64355.js';
import './GeometryUtils-58fe63b9.js';
import './quantizationUtils-46b123b8.js';
import './FeatureContainer-3f732927.js';
import './TileContainer-f32af6bf.js';
import './WGLContainer-0b2e4b10.js';
import './vec4f32-1b47f233.js';
import './ShaderCompiler-8b82754c.js';
import './Program-9cec60fc.js';
import './earcut-cd592b7a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const c={remove(){},pause(){},resume(){}};let n=class extends(l$1(d)){initialize(){this.graphicsView=new et({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new i(this.view.featuresTilingScheme)});}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d");}hitTest(e,i){return this.suspended||!this.graphicsView?Promise.resolve(null):this.graphicsView.hitTest(e,i)}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}update(e){this.graphicsView.processUpdate(e);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(e){let i;return "number"==typeof e?i=[e]:e instanceof n$1?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):L.isCollection(e)&&(i=e.map((e=>e&&e.uid)).toArray()),i=i.filter((e=>null!=e)),i.length?(this.graphicsView.addHighlight(i),{remove:()=>this.graphicsView.removeHighlight(i)}):c}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};e([y()],n.prototype,"graphicsView",void 0),e([y()],n.prototype,"updating",void 0),n=e([i$1("esri.views.2d.layers.GraphicsLayerView2D")],n);var l=n;

export default l;
