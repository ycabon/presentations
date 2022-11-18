import { aC as j, $ as s, b7 as l, P as g, e9 as j$1, u as e, y as y$1, z as n$1 } from './_virtual_index-1ea2035a.js';
import { a } from './BitmapContainer-6c702079.js';
import { y } from './LayerView2D-0acb5666.js';
import { o as oe } from './BaseGraphicContainer-aab27617.js';
import { n } from './HighlightGraphicContainer-d51c97ba.js';
import { v as v$1 } from './ExportStrategy-610b458a.js';
import { u } from './LayerView-04d8537b.js';
import { F } from './MapImageLayerView-842d49f0.js';
import { i } from './RefreshableLayerView-f32b8d34.js';
import { a as a$1 } from './drapedUtils-fff0739e.js';
import './WGLContainer-be6ebd59.js';
import './WGLBrushVTLSymbol-5326d98d.js';
import './definitions-a784b44f.js';
import './enums-4e1a5b11.js';
import './number-7d0da80b.js';
import './StyleDefinition-98114241.js';
import './enums-3e26cf0d.js';
import './GeometryUtils-07c7843a.js';
import './Utils-7b2ac961.js';
import './ShaderCompiler-4879c29c.js';
import './ProgramTemplate-192f2ab9.js';
import './MaterialKey-8672cbbb.js';
import './alignmentUtils-d4b065e2.js';
import './utils-94e6680e.js';
import './EffectView-de5a8347.js';
import './heatmapTextureUtils-076ceaf2.js';
import './cimAnalyzer-32e4ad07.js';
import './fontUtils-49a60944.js';
import './BidiEngine-25d35bf3.js';
import './Rect-1c5846da.js';
import './GeometryUtils-10c98655.js';
import './FeatureContainer-e333c7c0.js';
import './visualVariablesUtils-e0de182e.js';
import './visualVariablesUtils-933d57c8.js';
import './TileContainer-18a96df2.js';
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
import './Bitmap-c8e15fa6.js';
import './ExportImageParameters-4d04def3.js';
import './floorFilterUtils-776aae8e.js';
import './sublayerUtils-23d5ec90.js';
import './popupUtils-4fcb9e6d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let f=class extends(F(i(y(u)))){update(e){this.strategy.update(e).catch((e=>{j(e)||s.getLogger(this.declaredClass).error(e);})),e.stationary&&this.updateHighlightedFeatures(e.state.resolution),this._highlightView.processUpdate(e);}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:i}=this.layer,r=i>=10.3,s=i>=10;this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._highlightView=new oe({view:this.view,graphics:this.highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new n(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container),this.strategy=new v$1({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:r,imageNormalizationSupported:s,hidpi:!0}),this.handles.add(l((()=>this.exportImageVersion),(()=>this.requestUpdate())),"exportImageVersion"),this.handles.add(l((()=>this.view?.floors),(()=>this.requestUpdate())),"view.floors"),this.requestUpdate();}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}highlight(e){let r=null;if(e instanceof g?r=[e]:j$1.isCollection(e)&&e.length>0?r=e.toArray():Array.isArray(e)&&e.length>0&&(r=e),r=r?.filter(Boolean),!r||!r.length)return {remove:()=>{}};for(const t of r)"geometryType"in t.sourceLayer&&"point"===t.sourceLayer.geometryType&&(t.visible=!1);return this.highlightGraphics.addMany(r),{remove:()=>{this.highlightGraphics.removeMany(r);}}}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}createFetchPopupFeaturesQueryGeometry(e,t){return a$1(e,t,this.view)}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}highlightGraphicUpdated(e,t){this._highlightView.graphicUpdateHandler({graphic:e,property:t});}fetchImage(e,t,i,r){return this.layer.fetchImage(e,t,i,{timeExtent:this.timeExtent,floors:this.view.floors,...r})}fetchImageBitmap(e,t,i,r){return this.layer.fetchImageBitmap(e,t,i,{timeExtent:this.timeExtent,floors:this.view.floors,...r})}};e([y$1()],f.prototype,"strategy",void 0),e([y$1()],f.prototype,"updating",void 0),f=e([n$1("esri.views.2d.layers.MapImageLayerView2D")],f);const v=f;

export { v as default };
