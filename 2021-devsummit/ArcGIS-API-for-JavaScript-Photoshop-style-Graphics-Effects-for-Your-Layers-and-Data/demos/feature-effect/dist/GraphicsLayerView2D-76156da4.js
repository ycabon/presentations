import { U, n as n$1, E, e, y, i } from './index.js';
import { l as l$1, p } from './LayerView2D-73734b75.js';
import { Q } from './GraphicsView2D-30e51bef.js';
import './Container-ab4b8a7d.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './quantizationUtils-79ac4e60.js';
import './json-dc26b8a4.js';
import './quickselect-1f1691b9.js';
import './definitions-6994070a.js';
import './shapingUtils-79794aed.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-b26a7a24.js';
import './RenderingContext-93d2cda4.js';
import './MaterialKey-e2f7d356.js';
import './visualVariablesUtils-93a1341d.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-25ea991b.js';
import './VertexBuffer-5b41ea70.js';
import './CircularArray-08743929.js';
import './TurboLine-7e821e86.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-4517d340.js';
import './TileContainer-009d35cb.js';
import './WGLContainer-0cfd8bf2.js';
import './VertexArrayObject-66ff8833.js';
import './ShaderCompiler-cf832d12.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-28dd50df.js';
import './FeatureSetReader-0f850cde.js';
import './centroid-6105d00e.js';
import './graphicsUtils-3626d64f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c={remove(){},pause(){},resume(){}};let n=class extends(l$1(p)){initialize(){this.graphicsView=new Q({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics});}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d");}hitTest(e,i){return this.suspended||!this.graphicsView?U(null):this.graphicsView.hitTest(e,i)}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}update(e){this.graphicsView.processUpdate(e);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(e){let i;return "number"==typeof e?i=[e]:e instanceof n$1?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):E.isCollection(e)&&(i=e.map((e=>e&&e.uid)).toArray()),i=i.filter((e=>null!=e)),i.length?(this.graphicsView.addHighlight(i),{remove:()=>this.graphicsView.removeHighlight(i)}):c}queryGraphics(){return U(this.graphicsView.graphics)}};e([y()],n.prototype,"graphicsView",void 0),e([y({dependsOn:["graphicsView.updating"]})],n.prototype,"updating",void 0),n=e([i("esri.views.2d.layers.GraphicsLayerView2D")],n);var l=n;

export default l;
