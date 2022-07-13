import { aP as l, aQ as h, q as x, j, kj as J, kk as t, kl as p, B as e, D as n } from './_virtual_index-fc1e0009.js';
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
let y=class extends(f(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().map((r=>{const i=this._popupTemplates.get(r),o=r.hitTest(e);for(const e of o)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return o})).flat().map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.handles.add([l((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i$1,featureSet:o,layerDefinition:t$1}of e){const e=x.fromJSON(o),p=new j(e.features),h=t$1.drawingInfo,m=i$1?J.fromJSON(i$1):null,y=t(h.renderer),g=new oe({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new i(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),h),l((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new p({symbol:e});}),h),l((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new p({symbol:e});}),h),l((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new p({symbol:e});}),h)],"georsslayerview");}detach(){this.handles.remove("georsslayerview"),this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=e([n("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export { g as default };
