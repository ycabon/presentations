import { g as g$1, j, B as e, C as d, D as n } from './_virtual_index-4b72c57d.js';
import { f, u } from './LayerView-a579da68.js';
import { i } from './GraphicContainer-8e44c386.js';
import { o as oe } from './BaseGraphicContainer-8cdbc58e.js';
import './utils-1dcda7d1.js';
import './EffectView-0ee93c44.js';
import './Utils-af323e30.js';
import './number-7d0da80b.js';
import './enums-1f2484bf.js';
import './enums-fb707d37.js';
import './Texture-e2dd4118.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-98c27063.js';
import './alignmentUtils-d4b065e2.js';
import './CIMSymbolHelper-50c786a1.js';
import './BidiEngine-d3dd902c.js';
import './GeometryUtils-10c98655.js';
import './normalizeUtilsSync-9f78312b.js';
import './projectionSupport-8e09cd0f.js';
import './json-523694e0.js';
import './VertexArrayObject-47c5aa7a.js';
import './FeatureContainer-5186b646.js';
import './TileContainer-b4229202.js';
import './WGLContainer-e9b25fc8.js';
import './ProgramTemplate-cee70b37.js';
import './StyleDefinition-c3b89df1.js';
import './config-76ec2e12.js';
import './GeometryUtils-0c093176.js';
import './earcut-da8a3e33.js';
import './visualVariablesUtils-6896dbe6.js';
import './visualVariablesUtils-a3d3fab4.js';
import './Matcher-08aa0565.js';
import './tileUtils-6b4a5161.js';
import './TileClipper-ce64f0f6.js';
import './Geometry-bc69b0c8.js';
import './cimAnalyzer-ee2b7de5.js';
import './quantizationUtils-994cbb23.js';
import './ExpandedCIM-72783fee.js';
import './devEnvironmentUtils-0f97b5c2.js';
import './schemaUtils-9aaf6a24.js';
import './createSymbolSchema-35c250f9.js';
import './MD5-efff06bc.js';
import './util-04e40aaf.js';
import './ComputedAttributeStorage-59add305.js';
import './centroid-824ff9a8.js';
import './vec3f32-90dde670.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const g={remove(){},pause(){},resume(){}};let c=class extends(f(u)){constructor(){super(...arguments),this._highlightIds=new Map;}attach(){this.graphicsView=new oe({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new i(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.graphicsView=null,this.handles.remove("graphicslayerview2d");}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((e=>({type:"graphic",graphic:e,mapPoint:i,layer:this.layer}))):null}async fetchPopupFeatures(i){if(this.graphicsView)return this.graphicsView.hitTest(i).filter((i=>!!i.popupTemplate))}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i){let s;return "number"==typeof i?s=[i]:i instanceof g$1?s=[i.uid]:Array.isArray(i)&&i.length>0?s="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):j.isCollection(i)&&i.length>0&&(s=i.map((i=>i&&i.uid)).toArray()),s=s?.filter((i=>null!=i)),s.length?(this._addHighlight(s),{remove:()=>this._removeHighlight(s)}):g}_addHighlight(i){for(const e of i)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1);}else this._highlightIds.set(e,1);this._updateHighlight();}_removeHighlight(i){for(const e of i)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;0===i?this._highlightIds.delete(e):this._highlightIds.set(e,i);}this._updateHighlight();}_updateHighlight(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()));}};e([d()],c.prototype,"graphicsView",void 0),c=e([n("esri.views.2d.layers.GraphicsLayerView2D")],c);const l=c;

export { l as default };
