import { U, cP as n$1, cy as E, q as e, y, r as i } from './index.js';
import { l as l$1, p } from './LayerView2D-6ede9be6.js';
import { Q } from './GraphicsView2D-39601e9d.js';
import './Container-b4547994.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './quantizationUtils-ddb4fcaf.js';
import './json-dc26b8a4.js';
import './quickselect-1f1691b9.js';
import './shapingUtils-c82ac36b.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-0554c7ed.js';
import './RenderingContext-241e9091.js';
import './MaterialKey-d72dbce5.js';
import './visualVariablesUtils-3c8e051e.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-d9343cae.js';
import './VertexBuffer-b718e8e5.js';
import './CircularArray-2f6052f3.js';
import './TurboLine-d752dfc1.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-c6438626.js';
import './TileContainer-36df6f3f.js';
import './WGLContainer-ac96ee47.js';
import './VertexArrayObject-63d80198.js';
import './ShaderCompiler-2ec9968a.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-a5e3dd53.js';
import './FeatureSetReader-c0c1a4be.js';
import './centroid-6105d00e.js';
import './graphicsUtils-3a5c35b2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c={remove(){},pause(){},resume(){}};let n=class extends(l$1(p)){initialize(){this.graphicsView=new Q({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics});}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d");}hitTest(e,i){return this.suspended||!this.graphicsView?U(null):this.graphicsView.hitTest(e,i)}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}update(e){this.graphicsView.processUpdate(e);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(e){let i;return "number"==typeof e?i=[e]:e instanceof n$1?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):E.isCollection(e)&&(i=e.map((e=>e&&e.uid)).toArray()),i=i.filter((e=>null!=e)),i.length?(this.graphicsView.addHighlight(i),{remove:()=>this.graphicsView.removeHighlight(i)}):c}queryGraphics(){return U(this.graphicsView.graphics)}};e([y()],n.prototype,"graphicsView",void 0),e([y({dependsOn:["graphicsView.updating"]})],n.prototype,"updating",void 0),n=e([i("esri.views.2d.layers.GraphicsLayerView2D")],n);var l=n;

export default l;
