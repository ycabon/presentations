import { m4 as i$1, aA as j, Z as s, b3 as l, B as e, C as d, D as n$1 } from './_virtual_index-9b831d4a.js';
import { t } from './BitmapContainer-000ea42e.js';
import { f as f$1 } from './LayerView2D-bd5847a4.js';
import { o as oe } from './BaseGraphicContainer-bd052543.js';
import { n } from './HighlightGraphicContainer-d38de3d8.js';
import { S } from './ExportStrategy-a6f2b423.js';
import { u } from './LayerView-e26ca8f9.js';
import { P } from './MapImageLayerView-328409cd.js';
import { i } from './RefreshableLayerView-18d98912.js';
import { a } from './drapedUtils-7abad8d8.js';
import './brushes-0ba66925.js';
import './definitions-94cbc2bf.js';
import './Utils-0ee32720.js';
import './number-7d0da80b.js';
import './enums-11126df6.js';
import './ProgramTemplate-fb419b93.js';
import './MaterialKey-7b48d630.js';
import './alignmentUtils-d4b065e2.js';
import './utils-bc8fd4f8.js';
import './heatmapTextureUtils-0da3eb14.js';
import './StyleDefinition-8bdfb2b8.js';
import './GeometryUtils-0c093176.js';
import './WGLContainer-c474bc93.js';
import './Container-38939417.js';
import './EffectView-280fbeb4.js';
import './CIMSymbolHelper-6ee7aec0.js';
import './BidiEngine-d3dd902c.js';
import './GeometryUtils-10c98655.js';
import './FeatureContainer-b528cf81.js';
import './visualVariablesUtils-e83355ec.js';
import './visualVariablesUtils-3a3b1834.js';
import './TileContainer-d62dd38b.js';
import './Matcher-1541592c.js';
import './tileUtils-2aab94aa.js';
import './TileClipper-42f55302.js';
import './Geometry-bc69b0c8.js';
import './cimAnalyzer-320e051b.js';
import './ExpandedCIM-aa105730.js';
import './schemaUtils-c67b468a.js';
import './createSymbolSchema-aa6ae1a4.js';
import './MD5-efff06bc.js';
import './util-301a8acd.js';
import './ComputedAttributeStorage-559bdb74.js';
import './centroid-3313e4f0.js';
import './GraphicsView-d48dcc3f.js';
import './Bitmap-04f84dc2.js';
import './ExportImageParameters-07df6265.js';
import './floorFilterUtils-776aae8e.js';
import './sublayerUtils-0c1618ac.js';
import './popupUtils-c1e7b664.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let f=class extends(P(i(f$1(u)))){constructor(){super(...arguments),this._highlightGraphics=new i$1;}update(e){this.strategy.update(e).catch((e=>{j(e)||s.getLogger(this.declaredClass).error(e);}));}attach(){const{imageMaxWidth:e,imageMaxHeight:t$1,version:r}=this.layer,s=r>=10.3,a=r>=10;this._bitmapContainer=new t,this.container.addChild(this._bitmapContainer);const o=new oe({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new n(this.view.featuresTilingScheme)});this.container.addChild(o.container),this.strategy=new S({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t$1,imageRotationSupported:s,imageNormalizationSupported:a,hidpi:!0}),this.handles.add(l((()=>this.exportImageVersion),(()=>this.requestUpdate())),"exportImageVersion"),this.handles.add(l((()=>this.view?.floors),(()=>this.requestUpdate())),"view.floors"),this.requestUpdate();}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}highlight(e,t){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e);}}}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}createFetchPopupFeaturesQueryGeometry(e,t){return a(e,t,this.view)}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,floors:this.view.floors,...i})}};e([d()],f.prototype,"strategy",void 0),e([d()],f.prototype,"updating",void 0),f=e([n$1("esri.views.2d.layers.MapImageLayerView2D")],f);const y=f;

export { y as default };
