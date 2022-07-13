import { aP as l, aQ as h, q as x, j, kj as J, kk as t, kl as p, B as e, D as n } from './_virtual_index-a68dd1ed.js';
import { f } from './LayerView2D-5e78fc62.js';
import { i } from './GraphicContainer-72267ffa.js';
import { o as oe } from './BaseGraphicContainer-7910f35d.js';
import { u } from './LayerView-c3f47c16.js';
import './utils-65fe22dc.js';
import './EffectView-f0c56014.js';
import './Utils-13ecd570.js';
import './number-7d0da80b.js';
import './enums-11126df6.js';
import './enums-fb707d37.js';
import './Texture-6d086a89.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-c720612c.js';
import './alignmentUtils-d4b065e2.js';
import './definitions-20a531fc.js';
import './CIMSymbolHelper-207e14e1.js';
import './BidiEngine-d3dd902c.js';
import './floatRGBA-86b5337e.js';
import './GeometryUtils-10c98655.js';
import './VertexArrayObject-8465ed50.js';
import './FeatureContainer-bfa84563.js';
import './TileContainer-fc4bdcaf.js';
import './WGLContainer-f0084bc3.js';
import './vec4f32-0748677e.js';
import './ProgramTemplate-0f5b7acb.js';
import './StyleDefinition-8bdfb2b8.js';
import './config-76ec2e12.js';
import './GeometryUtils-0c093176.js';
import './earcut-da8a3e33.js';
import './visualVariablesUtils-9ffa569b.js';
import './visualVariablesUtils-2b7ff03c.js';
import './Matcher-74eec27a.js';
import './tileUtils-dcde4a9f.js';
import './TileClipper-b97993cf.js';
import './Geometry-bc69b0c8.js';
import './cimAnalyzer-cdc9ead8.js';
import './callExpressionWithFeature-61b951a0.js';
import './ExpandedCIM-ab130668.js';
import './devEnvironmentUtils-0f97b5c2.js';
import './schemaUtils-b5b76e05.js';
import './createSymbolSchema-b0736342.js';
import './MD5-efff06bc.js';
import './util-d93141bf.js';
import './ComputedAttributeStorage-85ce72ec.js';
import './centroid-6ca6c7bb.js';
import './vec3f32-3c06790e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let y=class extends(f(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().map((r=>{const i=this._popupTemplates.get(r),o=r.hitTest(e);for(const e of o)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return o})).flat().map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.handles.add([l((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i$1,featureSet:o,layerDefinition:t$1}of e){const e=x.fromJSON(o),p=new j(e.features),h=t$1.drawingInfo,m=i$1?J.fromJSON(i$1):null,y=t(h.renderer),g=new oe({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new i(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),h),l((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new p({symbol:e});}),h),l((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new p({symbol:e});}),h),l((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new p({symbol:e});}),h)],"georsslayerview");}detach(){this.handles.remove("georsslayerview"),this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=e([n("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export { g as default };
