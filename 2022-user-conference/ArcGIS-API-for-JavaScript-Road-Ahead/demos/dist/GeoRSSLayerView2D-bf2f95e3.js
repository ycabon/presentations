import { b7 as l, b8 as h, k as x, e9 as j, mS as k, oh as t, oY as p, u as e, z as n } from './_virtual_index-1ea2035a.js';
import { y as y$1 } from './LayerView2D-0acb5666.js';
import { i } from './GraphicContainer-0fdd8b97.js';
import { o as oe } from './BaseGraphicContainer-aab27617.js';
import { u } from './LayerView-04d8537b.js';
import './utils-94e6680e.js';
import './EffectView-de5a8347.js';
import './enums-4e1a5b11.js';
import './MaterialKey-8672cbbb.js';
import './alignmentUtils-d4b065e2.js';
import './Utils-7b2ac961.js';
import './number-7d0da80b.js';
import './enums-3e26cf0d.js';
import './definitions-a784b44f.js';
import './cimAnalyzer-32e4ad07.js';
import './fontUtils-49a60944.js';
import './BidiEngine-25d35bf3.js';
import './Rect-1c5846da.js';
import './GeometryUtils-10c98655.js';
import './FeatureContainer-e333c7c0.js';
import './visualVariablesUtils-e0de182e.js';
import './visualVariablesUtils-933d57c8.js';
import './TileContainer-18a96df2.js';
import './WGLContainer-be6ebd59.js';
import './WGLBrushVTLSymbol-5326d98d.js';
import './StyleDefinition-98114241.js';
import './GeometryUtils-07c7843a.js';
import './ShaderCompiler-4879c29c.js';
import './ProgramTemplate-192f2ab9.js';
import './heatmapTextureUtils-076ceaf2.js';
import './Matcher-39feddc4.js';
import './tileUtils-e3849516.js';
import './TileClipper-b7d453c3.js';
import './Geometry-bc69b0c8.js';
import './ExpandedCIM-a44ee24d.js';
import './schemaUtils-15a39169.js';
import './createSymbolSchema-49eb4f50.js';
import './util-b1c4d8f0.js';
import './ComputedAttributeStorage-5652149f.js';
import './centroid-205dc6cf.js';
import './GraphicsView-fce768d1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let y=class extends(y$1(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().map((r=>{const i=this._popupTemplates.get(r),o=r.hitTest(e);for(const e of o)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return o})).flat().map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.handles.add([l((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i$1,featureSet:o,layerDefinition:t$1}of e){const e=x.fromJSON(o),p=new j(e.features),h=t$1.drawingInfo,m=i$1?k.fromJSON(i$1):null,y=t(h.renderer),g=new oe({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new i(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),h),l((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new p({symbol:e});}),h),l((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new p({symbol:e});}),h),l((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new p({symbol:e});}),h)],"georsslayerview");}detach(){this.handles.remove("georsslayerview"),this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=e([n("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export { g as default };
