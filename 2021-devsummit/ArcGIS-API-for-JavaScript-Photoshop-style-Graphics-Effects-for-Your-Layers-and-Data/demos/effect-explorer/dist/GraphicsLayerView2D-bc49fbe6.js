import { U, cy as n$1, cv as E, q as e, y, r as i } from './index.js';
import { l as l$1, p } from './LayerView2D-7469c712.js';
import { Q } from './GraphicsView2D-b8e13cc9.js';
import './Container-170ec83c.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './quantizationUtils-70355d31.js';
import './json-dc26b8a4.js';
import './quickselect-1f1691b9.js';
import './shapingUtils-897d6660.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-90668a37.js';
import './RenderingContext-96175dfe.js';
import './MaterialKey-3b583efd.js';
import './visualVariablesUtils-ad9cdd4f.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-d302fcf3.js';
import './VertexBuffer-06295311.js';
import './CircularArray-a2572ebd.js';
import './TurboLine-4e1b0dad.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-4ae39be5.js';
import './TileContainer-9a9caf23.js';
import './WGLContainer-64a6402b.js';
import './VertexArrayObject-58dc635a.js';
import './ShaderCompiler-e7656ff4.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-b665b292.js';
import './FeatureSetReader-00f1d30c.js';
import './centroid-6105d00e.js';
import './graphicsUtils-07e264f0.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c={remove(){},pause(){},resume(){}};let n=class extends(l$1(p)){initialize(){this.graphicsView=new Q({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics});}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d");}hitTest(e,i){return this.suspended||!this.graphicsView?U(null):this.graphicsView.hitTest(e,i)}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}update(e){this.graphicsView.processUpdate(e);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(e){let i;return "number"==typeof e?i=[e]:e instanceof n$1?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):E.isCollection(e)&&(i=e.map((e=>e&&e.uid)).toArray()),i=i.filter((e=>null!=e)),i.length?(this.graphicsView.addHighlight(i),{remove:()=>this.graphicsView.removeHighlight(i)}):c}queryGraphics(){return U(this.graphicsView.graphics)}};e([y()],n.prototype,"graphicsView",void 0),e([y({dependsOn:["graphicsView.updating"]})],n.prototype,"updating",void 0),n=e([i("esri.views.2d.layers.GraphicsLayerView2D")],n);var l=n;

export default l;
