import { U, cP as n$1, cy as E, q as e, y, r as i } from './index.js';
import { l as l$1, p } from './LayerView2D-f5c0bad9.js';
import { Q } from './GraphicsView2D-7864c55c.js';
import './Container-ef1b7692.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './quantizationUtils-182a167b.js';
import './json-dc26b8a4.js';
import './quickselect-1f1691b9.js';
import './shapingUtils-c46c57db.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-923bb70b.js';
import './RenderingContext-707935bb.js';
import './MaterialKey-0d01090a.js';
import './visualVariablesUtils-c781af89.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-9545e0f2.js';
import './VertexBuffer-a3280664.js';
import './CircularArray-5380cc6e.js';
import './TurboLine-48f20976.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-cb965a14.js';
import './TileContainer-1d971701.js';
import './WGLContainer-ee097a9e.js';
import './VertexArrayObject-5a96c147.js';
import './ShaderCompiler-b71ac8b5.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-fe671d1b.js';
import './FeatureSetReader-0e29a007.js';
import './centroid-6105d00e.js';
import './graphicsUtils-179ce863.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c={remove(){},pause(){},resume(){}};let n=class extends(l$1(p)){initialize(){this.graphicsView=new Q({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics});}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d");}hitTest(e,i){return this.suspended||!this.graphicsView?U(null):this.graphicsView.hitTest(e,i)}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}update(e){this.graphicsView.processUpdate(e);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(e){let i;return "number"==typeof e?i=[e]:e instanceof n$1?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):E.isCollection(e)&&(i=e.map((e=>e&&e.uid)).toArray()),i=i.filter((e=>null!=e)),i.length?(this.graphicsView.addHighlight(i),{remove:()=>this.graphicsView.removeHighlight(i)}):c}queryGraphics(){return U(this.graphicsView.graphics)}};e([y()],n.prototype,"graphicsView",void 0),e([y({dependsOn:["graphicsView.updating"]})],n.prototype,"updating",void 0),n=e([i("esri.views.2d.layers.GraphicsLayerView2D")],n);var l=n;

export default l;
