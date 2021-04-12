import { j as e, y as y$1, dd as w, k as i$1, s, r, b_ as E, dh as a, n as n$1, d0 as i$3, dE as m, w as g } from './_virtual_index-2683c931.js';
import { l as l$1, d as d$1 } from './LayerView2D-e9137e52.js';
import { a as a$1 } from './drapedUtils-fb46e175.js';
import { t, e as et } from './BaseGraphicContainer-d9ecea3a.js';
import { n } from './ExportImageParameters-796a1826.js';
import { s as s$1 } from './clickToleranceUtils-0399fce2.js';
import { i as i$2, d } from './popupUtils-13353587.js';
import { t as t$1 } from './BitmapContainer-c805daa0.js';
import { S } from './ExportStrategy-f4477cea.js';
import { I } from './Utils-0b584b8b.js';
import './Container-c9657d6c.js';
import './mat4f32-8dd9e37a.js';
import './_commonjsHelpers-3f70742c.js';
import './definitions-12783a0f.js';
import './schemaUtils-62f0bc7d.js';
import './MD5-a554c7d9.js';
import './MaterialKey-2936dc4b.js';
import './visualVariablesUtils-ba6f60d7.js';
import './Rect-a3838111.js';
import './BidiEngine-fb789855.js';
import './WGLMeshFactory-4b43760e.js';
import './ComputedAttributeStorage-bb926dc8.js';
import './quickselect-eae177f3.js';
import './FeatureSetReader-c8b784f1.js';
import './centroid-395619b0.js';
import './visualVariablesUtils-52efe4a8.js';
import './tileUtils-a3c95651.js';
import './TurboLine-b4d64355.js';
import './GeometryUtils-58fe63b9.js';
import './quantizationUtils-46b123b8.js';
import './FramebufferObject-c19fef9d.js';
import './FeatureContainer-3f732927.js';
import './TileContainer-f32af6bf.js';
import './WGLContainer-0b2e4b10.js';
import './vec4f32-1b47f233.js';
import './ShaderCompiler-8b82754c.js';
import './Program-9cec60fc.js';
import './earcut-cd592b7a.js';
import './sublayerUtils-a5b6b99d.js';
import './Bitmap-c19e22e5.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const c=c=>{let y=class extends c{initialize(){this.exportImageParameters=new n({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,t){const{layer:o}=this;if(!e)return Promise.reject(new s("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:o}));const p=this.get("view.scale"),i=[],m=async e=>{const o=0===e.minScale||p<=e.minScale,s=0===e.maxScale||p>=e.maxScale;if(e.visible&&o&&s)if(e.sublayers)e.sublayers.forEach(m);else if(e.popupEnabled){const o=d(e,{...t,defaultPopupTemplateEnabled:!1});r(o)&&i.unshift({sublayer:e,popupTemplate:o});}},c=o.sublayers.toArray().reverse().map(m);await Promise.all(c);const y=i.map((async({sublayer:o,popupTemplate:s})=>{await o.load().catch((()=>{}));const a=o.createQuery(),p=r(t)?t.event:null,i=s$1({renderer:o.renderer,event:p}),m=this.createFetchPopupFeaturesQueryGeometry(e,i);a.geometry=m,a.outFields=await i$2(o,s);const n=await this._loadArcadeModules(s);n&&n.arcadeUtils.hasGeometryOperations(s)||(a.maxAllowableOffset=m.width/i);return (await o.queryFeatures(a)).features}));return (await E(y)).reduce(((e,r)=>r.value?[...e,...r.value]:e),[]).filter((e=>null!=e))}canResume(){var e;return !!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return a()}};return e([y$1()],y.prototype,"exportImageParameters",void 0),e([y$1({readOnly:!0})],y.prototype,"exportImageVersion",null),e([y$1()],y.prototype,"layer",void 0),e([y$1()],y.prototype,"suspended",void 0),e([y$1(w)],y.prototype,"timeExtent",void 0),y=e([i$1("esri.views.layers.MapImageLayerView")],y),y};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let o=class extends t{renderChildren(r){if(r.drawPhase!==I.HIGHLIGHT)return;if(this.attributeView.bindTextures(r.context),!this.children.some((r=>r.hasData)))return;super.renderChildren(r);const{painter:e}=r,t=e.effects.highlight;t.bind(r),r.context.setColorMask(!0,!0,!0,!0),r.context.clear(16384),this._renderChildren(r,t.defines.concat(["highlightAll"])),t.draw(r),t.unbind();}};o=e([i$1("esri.views.2d.layers.support.HighlightGraphicContainer")],o);var i=o;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const l=n$1.getLogger("esri.views.2d.layers.MapImageLayerView2D");let y=class extends(c(i$3(l$1(d$1)))){constructor(){super(...arguments),this._highlightGraphics=new m;}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{g(e)||l.error(e);}));}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:r}=this.layer,i$1=r>=10.3,s=r>=10;this._bitmapContainer=new t$1,this.container.addChild(this._bitmapContainer);const a=new et({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new i(this.view.featuresTilingScheme)});this.container.addChild(a.container),this.strategy=new S({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:i$1,imageNormalizationSupported:s,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion"),this.requestUpdate();}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}highlight(e,t){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e);}}}createFetchPopupFeaturesQueryGeometry(e,t){return a$1(e,t,this.view)}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,timestamp:this.refreshTimestamp,...i})}};e([y$1()],y.prototype,"strategy",void 0),e([y$1()],y.prototype,"updating",void 0),y=e([i$1("esri.views.2d.layers.MapImageLayerView2D")],y);var f=y;

export default f;
