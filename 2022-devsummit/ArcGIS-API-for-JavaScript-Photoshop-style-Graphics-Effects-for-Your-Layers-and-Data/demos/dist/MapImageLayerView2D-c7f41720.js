import { ac as e, ae as i$1, ad as d, i9 as g, s, h as r, iC as n, E, fd as a, e as s$2, ir as c$1, q as g$1 } from './_virtual_index-3ad07138.js';
import { t as t$2 } from './BitmapContainer-b9d43000.js';
import { l, u as u$1 } from './LayerView-ccf9971d.js';
import { t, i as it } from './BaseGraphicContainer-e75c5940.js';
import { I } from './Utils-ba2d87f4.js';
import { S } from './ExportStrategy-cc87358e.js';
import { c } from './ExportImageParameters-8a8f7c7a.js';
import { s as s$1, a as a$1 } from './drapedUtils-4e6cbba2.js';
import { t as t$1, d as d$1 } from './popupUtils-9bd5eacf.js';
import { i as i$2 } from './RefreshableLayerView-cd718d73.js';
import './WGLContainer-bec6b82e.js';
import './VertexArrayObject-3beb5624.js';
import './Texture-970325f3.js';
import './ShaderCompiler-9e67e52b.js';
import './config-3e6df72b.js';
import './GeometryUtils-8e9bb139.js';
import './MaterialKey-8a7bcdbb.js';
import './Container-0ea8b7c2.js';
import './earcut-211aa720.js';
import './CIMSymbolHelper-62ceca89.js';
import './BidiEngine-1d3a0a6d.js';
import './projectionSupport-f3b66f92.js';
import './json-2bf9d675.js';
import './FeatureContainer-c3691c35.js';
import './TileContainer-d98cb7c6.js';
import './visualVariablesUtils-c0918cfa.js';
import './visualVariablesUtils-b2bf8e17.js';
import './Matcher-f07858c6.js';
import './tileUtils-84582c2d.js';
import './TileClipper-f06c223a.js';
import './cimSymbolUtils-12bccbc7.js';
import './quantizationUtils-cc435f69.js';
import './devEnvironmentUtils-a78265ea.js';
import './schemaUtils-05c05689.js';
import './MD5-a16a7511.js';
import './util-af29771e.js';
import './ComputedAttributeStorage-64438d2c.js';
import './FeatureSetReader-25593c0a.js';
import './centroid-3bf097a6.js';
import './vec3f32-c4a8e2ae.js';
import './Bitmap-6fb4c9a4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let o=class extends t{renderChildren(r){if(r.drawPhase!==I.HIGHLIGHT)return;if(this.attributeView.bindTextures(r.context),!this.children.some((r=>r.hasData)))return;super.renderChildren(r);const{painter:e}=r,t=e.effects.highlight;t.bind(r),r.context.setColorMask(!0,!0,!0,!0),r.context.clear(16384),this._renderChildren(r,t.defines.concat(["highlightAll"])),t.draw(r),t.unbind();}};o=e([i$1("esri.views.2d.layers.support.HighlightGraphicContainer")],o);const i=o;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const y$1=y=>{let d$2=class extends y{initialize(){this.exportImageParameters=new c({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,s$2){const{layer:a}=this;if(!e)return Promise.reject(new s("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const i=this.get("view.scale"),p=[],m=async e=>{const r$1=0===e.minScale||i<=e.minScale,o=0===e.maxScale||i>=e.maxScale;if(e.visible&&r$1&&o)if(e.sublayers)e.sublayers.forEach(m);else if(e.popupEnabled){const r$1=d$1(e,{...s$2,defaultPopupTemplateEnabled:!1});r(r$1)&&p.unshift({sublayer:e,popupTemplate:r$1});}},y=a.sublayers.toArray().reverse().map(m);await Promise.all(y);const d=p.map((async({sublayer:r$1,popupTemplate:o})=>{await r$1.load().catch((()=>{}));const a=r$1.createQuery(),i=r(s$2)?s$2.event:null,p=s$1({renderer:r$1.renderer,event:i}),m=this.createFetchPopupFeaturesQueryGeometry(e,p);if(a.geometry=m,a.outFields=await t$1(r$1,o),"map-image"===this.layer.type&&"floors"in this.view){var c,y;const e=null==(c=this.view)||null==(y=c.floors)?void 0:y.clone(),o=n(e,r$1);r(o)&&(a.where=a.where?`(${a.where}) AND (${o})`:o);}const d=await this._loadArcadeModules(o);d&&d.arcadeUtils.hasGeometryOperations(o)||(a.maxAllowableOffset=m.width/p);return (await r$1.queryFeatures(a)).features}));return (await E(d)).reduce(((e,r)=>r.value?[...e,...r.value]:e),[]).filter((e=>null!=e))}canResume(){var e;return !!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length")||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type)))return a()}};return e([d()],d$2.prototype,"exportImageParameters",void 0),e([d({readOnly:!0})],d$2.prototype,"exportImageVersion",null),e([d()],d$2.prototype,"layer",void 0),e([d()],d$2.prototype,"suspended",void 0),e([d(g)],d$2.prototype,"timeExtent",void 0),d$2=e([i$1("esri.views.layers.MapImageLayerView")],d$2),d$2};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=s$2.getLogger("esri.views.2d.layers.MapImageLayerView2D");let f=class extends(y$1(i$2(l(u$1)))){constructor(){super(...arguments),this._highlightGraphics=new c$1;}update(e){this.strategy.update(e).catch((e=>{g$1(e)||u.error(e);}));}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:r}=this.layer,i$1=r>=10.3,s=r>=10;this._bitmapContainer=new t$2,this.container.addChild(this._bitmapContainer);const a=new it({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new i(this.view.featuresTilingScheme)});this.container.addChild(a.container),this.strategy=new S({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:i$1,imageNormalizationSupported:s,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion"),this.handles.add(this.watch("view.floors",(()=>this.requestUpdate())),"view.floors"),this.requestUpdate();}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}highlight(e,t){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e);}}}createFetchPopupFeaturesQueryGeometry(e,t){return a$1(e,t,this.view)}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,floors:this.view.floors,...i})}};e([d()],f.prototype,"strategy",void 0),e([d()],f.prototype,"updating",void 0),f=e([i$1("esri.views.2d.layers.MapImageLayerView2D")],f);const y=f;

export { y as default };
