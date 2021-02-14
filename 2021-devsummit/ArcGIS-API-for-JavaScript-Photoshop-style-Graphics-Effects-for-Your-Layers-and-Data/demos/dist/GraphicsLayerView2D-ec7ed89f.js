import { U, cH as n$1, cE as E, y as e, z as y, A as i } from './_virtual:index-1982596a.js';
import { l as l$1, p } from './LayerView2D-650a20fa.js';
import { Q } from './GraphicsView2D-529b81eb.js';
import './Container-5f0afd2d.js';
import './mat4f32-a4d1c0af.js';
import './quantizationUtils-00a9c519.js';
import './json-dc26b8a4.js';
import './quickselect-09389b48.js';
import './shapingUtils-426b1f2c.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-86534e09.js';
import './MaterialKey-e4d75cc1.js';
import './visualVariablesUtils-9d9ec070.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-023c6781.js';
import './VertexBuffer-ee5a6553.js';
import './CircularArray-c3928fdf.js';
import './TurboLine-605e6be5.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-9565bd8a.js';
import './TileContainer-3521582d.js';
import './WGLContainer-c81de169.js';
import './ShaderCompiler-a1cbc8fc.js';
import './Program-cb13ad60.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-8ec45f04.js';
import './FeatureSetReader-c9109446.js';
import './centroid-6105d00e.js';
import './graphicsUtils-e5e1146f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c={remove(){},pause(){},resume(){}};let n=class extends(l$1(p)){initialize(){this.graphicsView=new Q({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics});}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d");}hitTest(e,i){return this.suspended||!this.graphicsView?U(null):this.graphicsView.hitTest(e,i)}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}update(e){this.graphicsView.processUpdate(e);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(e){let i;return "number"==typeof e?i=[e]:e instanceof n$1?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):E.isCollection(e)&&(i=e.map((e=>e&&e.uid)).toArray()),i=i.filter((e=>null!=e)),i.length?(this.graphicsView.addHighlight(i),{remove:()=>this.graphicsView.removeHighlight(i)}):c}queryGraphics(){return U(this.graphicsView.graphics)}};e([y()],n.prototype,"graphicsView",void 0),e([y({dependsOn:["graphicsView.updating"]})],n.prototype,"updating",void 0),n=e([i("esri.views.2d.layers.GraphicsLayerView2D")],n);var l=n;

export default l;
