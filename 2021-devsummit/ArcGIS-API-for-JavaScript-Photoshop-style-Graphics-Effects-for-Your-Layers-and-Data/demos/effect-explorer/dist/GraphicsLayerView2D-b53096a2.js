import { U, cy as n$1, cv as E, q as e, y, r as i } from './index.js';
import { l as l$1, p } from './LayerView2D-c83abcff.js';
import { Q } from './GraphicsView2D-b87bd606.js';
import './Container-a572c1be.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './quantizationUtils-2a0a111f.js';
import './json-dc26b8a4.js';
import './quickselect-1f1691b9.js';
import './shapingUtils-2fb51fbb.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-da242892.js';
import './RenderingContext-4825733b.js';
import './MaterialKey-cf85a3bf.js';
import './visualVariablesUtils-668828f1.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-30e10c88.js';
import './VertexBuffer-ecefd038.js';
import './CircularArray-ff522544.js';
import './TurboLine-395b367b.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-666d48ab.js';
import './TileContainer-a66e3510.js';
import './WGLContainer-4d4d589d.js';
import './VertexArrayObject-aa888e2f.js';
import './ShaderCompiler-815c0eca.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-f39e3f3f.js';
import './FeatureSetReader-e8fad45e.js';
import './centroid-6105d00e.js';
import './graphicsUtils-039d2ab9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c={remove(){},pause(){},resume(){}};let n=class extends(l$1(p)){initialize(){this.graphicsView=new Q({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics});}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d");}hitTest(e,i){return this.suspended||!this.graphicsView?U(null):this.graphicsView.hitTest(e,i)}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}update(e){this.graphicsView.processUpdate(e);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(e){let i;return "number"==typeof e?i=[e]:e instanceof n$1?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):E.isCollection(e)&&(i=e.map((e=>e&&e.uid)).toArray()),i=i.filter((e=>null!=e)),i.length?(this.graphicsView.addHighlight(i),{remove:()=>this.graphicsView.removeHighlight(i)}):c}queryGraphics(){return U(this.graphicsView.graphics)}};e([y()],n.prototype,"graphicsView",void 0),e([y({dependsOn:["graphicsView.updating"]})],n.prototype,"updating",void 0),n=e([i("esri.views.2d.layers.GraphicsLayerView2D")],n);var l=n;

export default l;
