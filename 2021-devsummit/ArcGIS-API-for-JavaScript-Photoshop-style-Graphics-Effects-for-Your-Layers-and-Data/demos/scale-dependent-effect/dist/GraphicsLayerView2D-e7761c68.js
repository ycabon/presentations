import { U, c1 as n$1, b_ as E, n as e, y, p as i } from './index.js';
import { l as l$1, p } from './LayerView2D-a18f2836.js';
import { Q } from './GraphicsView2D-178c7045.js';
import './Container-8a78d3ea.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './quantizationUtils-06d3d833.js';
import './json-dc26b8a4.js';
import './quickselect-1f1691b9.js';
import './definitions-6994070a.js';
import './shapingUtils-2162ddfb.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-c3a9816c.js';
import './RenderingContext-c649b1a9.js';
import './MaterialKey-54ebae87.js';
import './visualVariablesUtils-f0aabcfc.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-c81ce394.js';
import './VertexBuffer-79f6b978.js';
import './CircularArray-b7a74001.js';
import './TurboLine-98b09688.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-1cc775c0.js';
import './TileContainer-74df6a99.js';
import './WGLContainer-b0229d22.js';
import './VertexArrayObject-d10bd599.js';
import './ShaderCompiler-962ffbff.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-ebc8f54b.js';
import './FeatureSetReader-d2b755b7.js';
import './centroid-6105d00e.js';
import './graphicsUtils-4a9659dd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c={remove(){},pause(){},resume(){}};let n=class extends(l$1(p)){initialize(){this.graphicsView=new Q({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics});}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d");}hitTest(e,i){return this.suspended||!this.graphicsView?U(null):this.graphicsView.hitTest(e,i)}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}update(e){this.graphicsView.processUpdate(e);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(e){let i;return "number"==typeof e?i=[e]:e instanceof n$1?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):E.isCollection(e)&&(i=e.map((e=>e&&e.uid)).toArray()),i=i.filter((e=>null!=e)),i.length?(this.graphicsView.addHighlight(i),{remove:()=>this.graphicsView.removeHighlight(i)}):c}queryGraphics(){return U(this.graphicsView.graphics)}};e([y()],n.prototype,"graphicsView",void 0),e([y({dependsOn:["graphicsView.updating"]})],n.prototype,"updating",void 0),n=e([i("esri.views.2d.layers.GraphicsLayerView2D")],n);var l=n;

export default l;
