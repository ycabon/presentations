import { cG as g$1, cA as j, a as e, d, n } from './_virtual_index-64b818a8.js';
import { f } from './LayerView2D-246827ac.js';
import { i } from './GraphicContainer-e7bff001.js';
import { o as oe } from './BaseGraphicContainer-ae41de74.js';
import { u } from './LayerView-9b4453e0.js';
import './utils-b2399430.js';
import './Utils-9723b65e.js';
import './number-7d0da80b.js';
import './enums-11126df6.js';
import './enums-fb707d37.js';
import './Texture-0a4fb0f7.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-a43b2cc5.js';
import './alignmentUtils-d4b065e2.js';
import './definitions-20a531fc.js';
import './CIMSymbolHelper-8a3e4339.js';
import './BidiEngine-d3dd902c.js';
import './floatRGBA-fc82869e.js';
import './GeometryUtils-10c98655.js';
import './VertexArrayObject-8b8ec2c7.js';
import './FeatureContainer-f32c668b.js';
import './TileContainer-a9754968.js';
import './WGLContainer-ddc57cf6.js';
import './pixelUtils-d970883c.js';
import './vec4f32-0748677e.js';
import './ProgramTemplate-047af3b2.js';
import './StyleDefinition-8bdfb2b8.js';
import './config-76ec2e12.js';
import './GeometryUtils-0c093176.js';
import './earcut-da8a3e33.js';
import './visualVariablesUtils-37e4fcd9.js';
import './visualVariablesUtils-f466489d.js';
import './Matcher-ead959e6.js';
import './tileUtils-eaaeedda.js';
import './TileClipper-e45c89a7.js';
import './Geometry-bc69b0c8.js';
import './cimAnalyzer-15eec215.js';
import './callExpressionWithFeature-2a9f2efb.js';
import './ExpandedCIM-72fcda41.js';
import './devEnvironmentUtils-0f97b5c2.js';
import './schemaUtils-6e8c0373.js';
import './createSymbolSchema-15811898.js';
import './MD5-efff06bc.js';
import './util-4c696f7e.js';
import './ComputedAttributeStorage-cfca73bd.js';
import './centroid-e637c3e9.js';
import './vec3f32-3c06790e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const g={remove(){},pause(){},resume(){}};let c=class extends(f(u)){constructor(){super(...arguments),this._highlightIds=new Map;}attach(){this.graphicsView=new oe({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new i(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.graphicsView=null,this.handles.remove("graphicslayerview2d");}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((e=>({type:"graphic",graphic:e,mapPoint:i,layer:this.layer}))):null}async fetchPopupFeatures(i){if(this.graphicsView)return this.graphicsView.hitTest(i).filter((i=>!!i.popupTemplate))}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i){let s;return "number"==typeof i?s=[i]:i instanceof g$1?s=[i.uid]:Array.isArray(i)&&i.length>0?s="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):j.isCollection(i)&&i.length>0&&(s=i.map((i=>i&&i.uid)).toArray()),s=s?.filter((i=>null!=i)),s.length?(this._addHighlight(s),{remove:()=>this._removeHighlight(s)}):g}_addHighlight(i){for(const e of i)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1);}else this._highlightIds.set(e,1);this._updateHighlight();}_removeHighlight(i){for(const e of i)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;0===i?this._highlightIds.delete(e):this._highlightIds.set(e,i);}this._updateHighlight();}_updateHighlight(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()));}};e([d()],c.prototype,"graphicsView",void 0),c=e([n("esri.views.2d.layers.GraphicsLayerView2D")],c);const l=c;

export { l as default };
