import { cV as h, S, ac as e, ad as d, ae as i$1 } from './_virtual_index-3ad07138.js';
import { l as l$1, u } from './LayerView-ccf9971d.js';
import { i } from './GraphicContainer-f108ffc8.js';
import { i as it } from './BaseGraphicContainer-e75c5940.js';
import './Container-0ea8b7c2.js';
import './Utils-ba2d87f4.js';
import './Texture-970325f3.js';
import './CIMSymbolHelper-62ceca89.js';
import './BidiEngine-1d3a0a6d.js';
import './projectionSupport-f3b66f92.js';
import './json-2bf9d675.js';
import './VertexArrayObject-3beb5624.js';
import './FeatureContainer-c3691c35.js';
import './TileContainer-d98cb7c6.js';
import './WGLContainer-bec6b82e.js';
import './ShaderCompiler-9e67e52b.js';
import './config-3e6df72b.js';
import './GeometryUtils-8e9bb139.js';
import './MaterialKey-8a7bcdbb.js';
import './earcut-211aa720.js';
import './visualVariablesUtils-c0918cfa.js';
import './visualVariablesUtils-b2bf8e17.js';
import './Matcher-f07858c6.js';
import './tileUtils-84582c2d.js';
import './TileClipper-f06c223a.js';
import './cimSymbolUtils-12bccbc7.js';
import './quantizationUtils-cc435f69.js';
import './devEnvironmentUtils-a78265ea.js';
import './schemaUtils-05c05689.js';
import './MD5-a16a7511.js';
import './util-af29771e.js';
import './ComputedAttributeStorage-64438d2c.js';
import './FeatureSetReader-25593c0a.js';
import './centroid-3bf097a6.js';
import './vec3f32-c4a8e2ae.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c={remove(){},pause(){},resume(){}};let n=class extends(l$1(u)){initialize(){this.graphicsView=new it({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new i(this.view.featuresTilingScheme)});}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d");}async hitTest(e){return this.graphicsView?this.graphicsView.hitTest(e):null}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.hitTest(e).filter((e=>!!e.popupTemplate))}update(e){this.graphicsView.processUpdate(e);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(e){var s;let t;return "number"==typeof e?t=[e]:e instanceof h?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):S.isCollection(e)&&e.length>0&&(t=e.map((e=>e&&e.uid)).toArray()),t=null==(s=t)?void 0:s.filter((e=>null!=e)),t.length?(this.graphicsView.addHighlight(t),{remove:()=>this.graphicsView.removeHighlight(t)}):c}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};e([d()],n.prototype,"graphicsView",void 0),n=e([i$1("esri.views.2d.layers.GraphicsLayerView2D")],n);const l=n;

export { l as default };
