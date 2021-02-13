import { U, cy as n$1, cv as E, q as e, y, r as i } from './index.js';
import { l as l$1, p } from './LayerView2D-972bfc62.js';
import { Q } from './GraphicsView2D-c640ad67.js';
import './Container-8aa3a7d5.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './quantizationUtils-525c06e0.js';
import './json-dc26b8a4.js';
import './quickselect-1f1691b9.js';
import './shapingUtils-8e28639c.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-71c67510.js';
import './RenderingContext-8eac4936.js';
import './MaterialKey-5f2277a7.js';
import './visualVariablesUtils-a5616d7a.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-0a8dd192.js';
import './VertexBuffer-99d317bf.js';
import './CircularArray-615878d8.js';
import './TurboLine-0769667b.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-1fbeefb8.js';
import './TileContainer-6fbb3aac.js';
import './WGLContainer-57c1077a.js';
import './VertexArrayObject-8d58b309.js';
import './ShaderCompiler-7f3be066.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-acd4f4a3.js';
import './FeatureSetReader-592a63f4.js';
import './centroid-6105d00e.js';
import './graphicsUtils-2cd49833.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c={remove(){},pause(){},resume(){}};let n=class extends(l$1(p)){initialize(){this.graphicsView=new Q({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics});}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d");}hitTest(e,i){return this.suspended||!this.graphicsView?U(null):this.graphicsView.hitTest(e,i)}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}update(e){this.graphicsView.processUpdate(e);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(e){let i;return "number"==typeof e?i=[e]:e instanceof n$1?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):E.isCollection(e)&&(i=e.map((e=>e&&e.uid)).toArray()),i=i.filter((e=>null!=e)),i.length?(this.graphicsView.addHighlight(i),{remove:()=>this.graphicsView.removeHighlight(i)}):c}queryGraphics(){return U(this.graphicsView.graphics)}};e([y()],n.prototype,"graphicsView",void 0),e([y({dependsOn:["graphicsView.updating"]})],n.prototype,"updating",void 0),n=e([i("esri.views.2d.layers.GraphicsLayerView2D")],n);var l=n;

export default l;
