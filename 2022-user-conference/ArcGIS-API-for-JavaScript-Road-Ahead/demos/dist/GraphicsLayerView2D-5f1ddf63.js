import { g as g$1, j, B as e, C as d, D as n } from './_virtual_index-fc1e0009.js';
import { f } from './LayerView2D-915c0186.js';
import { i } from './GraphicContainer-f41e7bce.js';
import { o as oe } from './BaseGraphicContainer-32186530.js';
import { u } from './LayerView-9aad410e.js';
import './utils-9d4b373e.js';
import './EffectView-1b384502.js';
import './Utils-073d76fd.js';
import './number-7d0da80b.js';
import './enums-11126df6.js';
import './enums-fb707d37.js';
import './Texture-4621aa9a.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-833d16dd.js';
import './alignmentUtils-d4b065e2.js';
import './definitions-20a531fc.js';
import './CIMSymbolHelper-d0b50b9c.js';
import './BidiEngine-d3dd902c.js';
import './floatRGBA-3ce2e497.js';
import './GeometryUtils-10c98655.js';
import './VertexArrayObject-6f9baa1d.js';
import './FeatureContainer-e490cef1.js';
import './TileContainer-07a8055c.js';
import './WGLContainer-b291d234.js';
import './vec4f32-0748677e.js';
import './ProgramTemplate-dbebc039.js';
import './StyleDefinition-8bdfb2b8.js';
import './config-76ec2e12.js';
import './GeometryUtils-0c093176.js';
import './earcut-da8a3e33.js';
import './visualVariablesUtils-2a1be08f.js';
import './visualVariablesUtils-cff6b693.js';
import './Matcher-f9684b93.js';
import './tileUtils-b7a1d603.js';
import './TileClipper-6e5d91c3.js';
import './Geometry-bc69b0c8.js';
import './cimAnalyzer-8dbd5635.js';
import './callExpressionWithFeature-1f700441.js';
import './ExpandedCIM-1216aadf.js';
import './devEnvironmentUtils-0f97b5c2.js';
import './schemaUtils-001ae18f.js';
import './createSymbolSchema-6c79a99e.js';
import './MD5-efff06bc.js';
import './util-1b5d3cc6.js';
import './ComputedAttributeStorage-7fb1a814.js';
import './centroid-e754a555.js';
import './vec3f32-3c06790e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const g={remove(){},pause(){},resume(){}};let c=class extends(f(u)){constructor(){super(...arguments),this._highlightIds=new Map;}attach(){this.graphicsView=new oe({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new i(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.graphicsView=null,this.handles.remove("graphicslayerview2d");}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((e=>({type:"graphic",graphic:e,mapPoint:i,layer:this.layer}))):null}async fetchPopupFeatures(i){if(this.graphicsView)return this.graphicsView.hitTest(i).filter((i=>!!i.popupTemplate))}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i){let s;return "number"==typeof i?s=[i]:i instanceof g$1?s=[i.uid]:Array.isArray(i)&&i.length>0?s="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):j.isCollection(i)&&i.length>0&&(s=i.map((i=>i&&i.uid)).toArray()),s=s?.filter((i=>null!=i)),s.length?(this._addHighlight(s),{remove:()=>this._removeHighlight(s)}):g}_addHighlight(i){for(const e of i)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1);}else this._highlightIds.set(e,1);this._updateHighlight();}_removeHighlight(i){for(const e of i)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;0===i?this._highlightIds.delete(e):this._highlightIds.set(e,i);}this._updateHighlight();}_updateHighlight(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()));}};e([d()],c.prototype,"graphicsView",void 0),c=e([n("esri.views.2d.layers.GraphicsLayerView2D")],c);const l=c;

export { l as default };
