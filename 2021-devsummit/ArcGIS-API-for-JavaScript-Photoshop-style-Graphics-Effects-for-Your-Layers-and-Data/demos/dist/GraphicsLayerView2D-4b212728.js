import { U, cH as n$1, cE as E, y as e, z as y, A as i } from './_virtual:index-98fd932b.js';
import { l as l$1, p } from './LayerView2D-5a333780.js';
import { Q } from './GraphicsView2D-7c3a090e.js';
import './Container-0b4cc106.js';
import './mat4f32-a4d1c0af.js';
import './quantizationUtils-fab7ade3.js';
import './json-dc26b8a4.js';
import './quickselect-5613a511.js';
import './shapingUtils-feccb4cc.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-b3a85d6f.js';
import './MaterialKey-30b5ebd6.js';
import './visualVariablesUtils-fbf9edb4.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-3a9114bd.js';
import './VertexBuffer-6fad06b5.js';
import './CircularArray-13b39bf2.js';
import './TurboLine-e0aaeb31.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-ae27a45f.js';
import './TileContainer-ee6a69b0.js';
import './WGLContainer-3b24848e.js';
import './ShaderCompiler-d9930b79.js';
import './Program-96d8e234.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-b45efe82.js';
import './FeatureSetReader-59741c5e.js';
import './centroid-6105d00e.js';
import './graphicsUtils-cf79bcb3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c={remove(){},pause(){},resume(){}};let n=class extends(l$1(p)){initialize(){this.graphicsView=new Q({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics});}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d");}hitTest(e,i){return this.suspended||!this.graphicsView?U(null):this.graphicsView.hitTest(e,i)}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}update(e){this.graphicsView.processUpdate(e);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(e){let i;return "number"==typeof e?i=[e]:e instanceof n$1?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):E.isCollection(e)&&(i=e.map((e=>e&&e.uid)).toArray()),i=i.filter((e=>null!=e)),i.length?(this.graphicsView.addHighlight(i),{remove:()=>this.graphicsView.removeHighlight(i)}):c}queryGraphics(){return U(this.graphicsView.graphics)}};e([y()],n.prototype,"graphicsView",void 0),e([y({dependsOn:["graphicsView.updating"]})],n.prototype,"updating",void 0),n=e([i("esri.views.2d.layers.GraphicsLayerView2D")],n);var l=n;

export default l;
