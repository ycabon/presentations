import { U, n as n$1, E, e, y, i } from './index.js';
import { l as l$1, p } from './LayerView2D-fa5e2461.js';
import { Q } from './GraphicsView2D-d223dbce.js';
import './Container-1ce5b0ce.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './quantizationUtils-b944d0c3.js';
import './json-dc26b8a4.js';
import './quickselect-1f1691b9.js';
import './definitions-6994070a.js';
import './shapingUtils-c8cec743.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-143cd224.js';
import './RenderingContext-e00790fa.js';
import './MaterialKey-948fb909.js';
import './visualVariablesUtils-9f8243f7.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-6a951f8b.js';
import './VertexBuffer-f56d7da8.js';
import './CircularArray-956ef871.js';
import './TurboLine-91ca5c89.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-8c4fe49d.js';
import './TileContainer-ea8b019f.js';
import './WGLContainer-18c8f52a.js';
import './VertexArrayObject-182c4e34.js';
import './ShaderCompiler-d2d3a74a.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-f6e7f50e.js';
import './FeatureSetReader-1d5be01e.js';
import './centroid-6105d00e.js';
import './graphicsUtils-66f45bf0.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c={remove(){},pause(){},resume(){}};let n=class extends(l$1(p)){initialize(){this.graphicsView=new Q({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics});}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d");}hitTest(e,i){return this.suspended||!this.graphicsView?U(null):this.graphicsView.hitTest(e,i)}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}update(e){this.graphicsView.processUpdate(e);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(e){let i;return "number"==typeof e?i=[e]:e instanceof n$1?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):E.isCollection(e)&&(i=e.map((e=>e&&e.uid)).toArray()),i=i.filter((e=>null!=e)),i.length?(this.graphicsView.addHighlight(i),{remove:()=>this.graphicsView.removeHighlight(i)}):c}queryGraphics(){return U(this.graphicsView.graphics)}};e([y()],n.prototype,"graphicsView",void 0),e([y({dependsOn:["graphicsView.updating"]})],n.prototype,"updating",void 0),n=e([i("esri.views.2d.layers.GraphicsLayerView2D")],n);var l=n;

export default l;
