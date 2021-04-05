import { U, cH as n$1, cE as E, y as e, z as y, A as i } from './_virtual:index-325c676c.js';
import { l as l$1, p } from './LayerView2D-163643b1.js';
import { Q } from './GraphicsView2D-0d92cd71.js';
import './Container-a3da1052.js';
import './mat4f32-a4d1c0af.js';
import './quantizationUtils-521d4bba.js';
import './json-dc26b8a4.js';
import './quickselect-da3bccc8.js';
import './shapingUtils-979c101c.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-18a166ec.js';
import './MaterialKey-1f691632.js';
import './visualVariablesUtils-b16ad397.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-aca64697.js';
import './VertexBuffer-7e4dc683.js';
import './CircularArray-5e553ebf.js';
import './TurboLine-3d061ef1.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-eb99525b.js';
import './TileContainer-5e3a44d3.js';
import './WGLContainer-a4103f3d.js';
import './ShaderCompiler-b7ec7313.js';
import './Program-9517ac59.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-0da62ba9.js';
import './FeatureSetReader-48a5eb37.js';
import './centroid-6105d00e.js';
import './graphicsUtils-ea233ef6.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c={remove(){},pause(){},resume(){}};let n=class extends(l$1(p)){initialize(){this.graphicsView=new Q({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics});}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d");}hitTest(e,i){return this.suspended||!this.graphicsView?U(null):this.graphicsView.hitTest(e,i)}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}update(e){this.graphicsView.processUpdate(e);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(e){let i;return "number"==typeof e?i=[e]:e instanceof n$1?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):E.isCollection(e)&&(i=e.map((e=>e&&e.uid)).toArray()),i=i.filter((e=>null!=e)),i.length?(this.graphicsView.addHighlight(i),{remove:()=>this.graphicsView.removeHighlight(i)}):c}queryGraphics(){return U(this.graphicsView.graphics)}};e([y()],n.prototype,"graphicsView",void 0),e([y({dependsOn:["graphicsView.updating"]})],n.prototype,"updating",void 0),n=e([i("esri.views.2d.layers.GraphicsLayerView2D")],n);var l=n;

export default l;
