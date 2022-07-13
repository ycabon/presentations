import { aP as l, aQ as h, q as x, j, e6 as J, e7 as t, e8 as p, B as e, D as n } from './_virtual_index-4b72c57d.js';
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
let y=class extends(f(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().map((r=>{const i=this._popupTemplates.get(r),o=r.hitTest(e);for(const e of o)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return o})).flat().map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.handles.add([l((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i$1,featureSet:o,layerDefinition:t$1}of e){const e=x.fromJSON(o),p=new j(e.features),h=t$1.drawingInfo,m=i$1?J.fromJSON(i$1):null,y=t(h.renderer),g=new oe({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new i(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),h),l((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new p({symbol:e});}),h),l((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new p({symbol:e});}),h),l((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new p({symbol:e});}),h)],"georsslayerview");}detach(){this.handles.remove("georsslayerview"),this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=e([n("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export { g as default };
