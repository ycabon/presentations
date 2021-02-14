import { U, cH as n$1, cE as E, y as e, z as y, A as i } from './_virtual:index-3cfe80ed.js';
import { l as l$1, p } from './LayerView2D-57e1d9b0.js';
import { Q } from './GraphicsView2D-07823d1d.js';
import './Container-77c0b40a.js';
import './mat4f32-a4d1c0af.js';
import './quantizationUtils-b01f8cd7.js';
import './json-dc26b8a4.js';
import './quickselect-e027054e.js';
import './shapingUtils-82073fb7.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-7b430d1d.js';
import './MaterialKey-493fae21.js';
import './visualVariablesUtils-4bf7ba0e.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-31964d6f.js';
import './VertexBuffer-e387e241.js';
import './CircularArray-11b719a7.js';
import './TurboLine-66db23ef.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-c61e0fae.js';
import './TileContainer-657d3bf9.js';
import './WGLContainer-1770bca0.js';
import './ShaderCompiler-0e5c709a.js';
import './Program-57fde19e.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-421a40e7.js';
import './FeatureSetReader-2ac4bb8f.js';
import './centroid-6105d00e.js';
import './graphicsUtils-33fd835c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c={remove(){},pause(){},resume(){}};let n=class extends(l$1(p)){initialize(){this.graphicsView=new Q({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics});}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d");}hitTest(e,i){return this.suspended||!this.graphicsView?U(null):this.graphicsView.hitTest(e,i)}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}update(e){this.graphicsView.processUpdate(e);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(e){let i;return "number"==typeof e?i=[e]:e instanceof n$1?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):E.isCollection(e)&&(i=e.map((e=>e&&e.uid)).toArray()),i=i.filter((e=>null!=e)),i.length?(this.graphicsView.addHighlight(i),{remove:()=>this.graphicsView.removeHighlight(i)}):c}queryGraphics(){return U(this.graphicsView.graphics)}};e([y()],n.prototype,"graphicsView",void 0),e([y({dependsOn:["graphicsView.updating"]})],n.prototype,"updating",void 0),n=e([i("esri.views.2d.layers.GraphicsLayerView2D")],n);var l=n;

export default l;
