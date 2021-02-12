import { U, cP as n$1, cy as E, q as e, y, r as i } from './index.js';
import { l as l$1, p } from './LayerView2D-a323da6b.js';
import { Q } from './GraphicsView2D-2d165f43.js';
import './Container-afb7bc3e.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './quantizationUtils-c0611e45.js';
import './json-dc26b8a4.js';
import './quickselect-1f1691b9.js';
import './shapingUtils-dcbb2c5b.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-ea321f1e.js';
import './RenderingContext-d31ba1e0.js';
import './MaterialKey-54202b75.js';
import './visualVariablesUtils-f62b50fc.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-d3a1727d.js';
import './VertexBuffer-4c2c0271.js';
import './CircularArray-99513797.js';
import './TurboLine-21fa90f1.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-3c223b17.js';
import './TileContainer-e5b4ea06.js';
import './WGLContainer-f415d29f.js';
import './VertexArrayObject-b943938d.js';
import './ShaderCompiler-833038a1.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-c1444bb2.js';
import './FeatureSetReader-4c248b92.js';
import './centroid-6105d00e.js';
import './graphicsUtils-9af6492a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c={remove(){},pause(){},resume(){}};let n=class extends(l$1(p)){initialize(){this.graphicsView=new Q({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics});}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d");}hitTest(e,i){return this.suspended||!this.graphicsView?U(null):this.graphicsView.hitTest(e,i)}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}update(e){this.graphicsView.processUpdate(e);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(e){let i;return "number"==typeof e?i=[e]:e instanceof n$1?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):E.isCollection(e)&&(i=e.map((e=>e&&e.uid)).toArray()),i=i.filter((e=>null!=e)),i.length?(this.graphicsView.addHighlight(i),{remove:()=>this.graphicsView.removeHighlight(i)}):c}queryGraphics(){return U(this.graphicsView.graphics)}};e([y()],n.prototype,"graphicsView",void 0),e([y({dependsOn:["graphicsView.updating"]})],n.prototype,"updating",void 0),n=e([i("esri.views.2d.layers.GraphicsLayerView2D")],n);var l=n;

export default l;
