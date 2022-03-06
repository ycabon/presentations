import { cV as h, S, ac as e, ad as d, ae as i$1 } from './_virtual_index-49b2bc11.js';
import { l as l$1, u } from './LayerView-9194fd82.js';
import { i } from './GraphicContainer-f578401c.js';
import { i as it } from './BaseGraphicContainer-aff65f18.js';
import './Container-905526e1.js';
import './Utils-8759b086.js';
import './Texture-7f200883.js';
import './CIMSymbolHelper-bfef80ee.js';
import './BidiEngine-1d3a0a6d.js';
import './projectionSupport-f94b815a.js';
import './json-2bf9d675.js';
import './VertexArrayObject-fabb4101.js';
import './FeatureContainer-ead96078.js';
import './TileContainer-7b06a76e.js';
import './WGLContainer-0a7b434f.js';
import './ShaderCompiler-17283eff.js';
import './config-3e6df72b.js';
import './GeometryUtils-8e9bb139.js';
import './MaterialKey-67bb5654.js';
import './earcut-211aa720.js';
import './visualVariablesUtils-d152fc61.js';
import './visualVariablesUtils-9beed5ec.js';
import './Matcher-098afb59.js';
import './tileUtils-e14c76f8.js';
import './TileClipper-0109d9ce.js';
import './cimSymbolUtils-634dbb78.js';
import './quantizationUtils-65d5f437.js';
import './devEnvironmentUtils-a78265ea.js';
import './schemaUtils-54c0b4c1.js';
import './MD5-a16a7511.js';
import './util-2e9ee3aa.js';
import './ComputedAttributeStorage-39bb9c65.js';
import './FeatureSetReader-c99e2aca.js';
import './centroid-15412c9b.js';
import './vec3f32-c4a8e2ae.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c={remove(){},pause(){},resume(){}};let n=class extends(l$1(u)){initialize(){this.graphicsView=new it({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new i(this.view.featuresTilingScheme)});}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d");}async hitTest(e){return this.graphicsView?this.graphicsView.hitTest(e):null}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.hitTest(e).filter((e=>!!e.popupTemplate))}update(e){this.graphicsView.processUpdate(e);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(e){var s;let t;return "number"==typeof e?t=[e]:e instanceof h?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):S.isCollection(e)&&e.length>0&&(t=e.map((e=>e&&e.uid)).toArray()),t=null==(s=t)?void 0:s.filter((e=>null!=e)),t.length?(this.graphicsView.addHighlight(t),{remove:()=>this.graphicsView.removeHighlight(t)}):c}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};e([d()],n.prototype,"graphicsView",void 0),n=e([i$1("esri.views.2d.layers.GraphicsLayerView2D")],n);const l=n;

export { l as default };
