import { r, v, cv as t, B as e, C as d, kK as i$3, T as d$1, w, R as k, P as y$2, D as n$1, gD as l$1, jq as v$1, g, jo as o$1, cr as r$1, kL as t$1, c as n$2, L, kM as o$2, kN as e$1, h as L$1, k5 as g$1, s, t as t$2, F as has, a5 as E, h2 as a$3, kr as i$5, ar as j, Z as s$3, aP as l$2 } from './_virtual_index-fc1e0009.js';
import { t as t$3 } from './BitmapContainer-34d8cb69.js';
import { f as f$2 } from './LayerView2D-915c0186.js';
import { o as oe } from './BaseGraphicContainer-32186530.js';
import { n as n$3 } from './HighlightGraphicContainer-8fb8ca92.js';
import { S } from './ExportStrategy-18c3234c.js';
import { u as u$2 } from './LayerView-9aad410e.js';
import { i as i$1, r as r$2 } from './scaleUtils-8f7cdb9f.js';
import { c } from './ExportImageParameters-9cb9ed8f.js';
import { n } from './floorFilterUtils-776aae8e.js';
import { s as s$1, a as a$4 } from './drapedUtils-23583f29.js';
import { i as i$2 } from './sublayerUtils-cad23a30.js';
import { d as d$2, s as s$2 } from './popupUtils-42893d47.js';
import { i as i$4 } from './RefreshableLayerView-894e8344.js';
import './WGLContainer-b291d234.js';
import './enums-fb707d37.js';
import './utils-9d4b373e.js';
import './EffectView-1b384502.js';
import './Utils-073d76fd.js';
import './number-7d0da80b.js';
import './enums-11126df6.js';
import './Texture-4621aa9a.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-833d16dd.js';
import './alignmentUtils-d4b065e2.js';
import './definitions-20a531fc.js';
import './VertexArrayObject-6f9baa1d.js';
import './vec4f32-0748677e.js';
import './ProgramTemplate-dbebc039.js';
import './StyleDefinition-8bdfb2b8.js';
import './config-76ec2e12.js';
import './GeometryUtils-0c093176.js';
import './earcut-da8a3e33.js';
import './CIMSymbolHelper-d0b50b9c.js';
import './BidiEngine-d3dd902c.js';
import './floatRGBA-3ce2e497.js';
import './GeometryUtils-10c98655.js';
import './FeatureContainer-e490cef1.js';
import './TileContainer-07a8055c.js';
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
import './Bitmap-de94173a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const o=e=>e.spatialReference.wkid||JSON.stringify(e.spatialReference);function l(r$1,i){const{dpi:n,gdbVersion:s,geometry:l,geometryPrecision:f,height:p,layerOption:m,mapExtent:y,maxAllowableOffset:c,returnFieldName:u,returnGeometry:d,returnUnformattedValues:g,returnZ:x,spatialReference:b,timeExtent:h,tolerance:E,width:O}=r$1.toJSON(),{dynamicLayers:S,layerDefs:j,layerIds:N}=a$2(r$1),J=i&&r(i.geometry)?i.geometry:null,R={geometryPrecision:f,maxAllowableOffset:c,returnFieldName:u,returnGeometry:d,returnUnformattedValues:g,returnZ:x,tolerance:E},$=J&&J.toJSON()||l;if(R.imageDisplay=`${O},${p},${n}`,s&&(R.gdbVersion=s),$&&(delete $.spatialReference,R.geometry=JSON.stringify($),R.geometryType=v($)),b?R.sr=b.wkid||JSON.stringify(b):$&&$.spatialReference?R.sr=o($):y&&y.spatialReference&&(R.sr=o(y)),R.time=h?[h.start,h.end].join(","):null,y){const{xmin:e,ymin:r,xmax:t,ymax:i}=y;R.mapExtent=`${e},${r},${t},${i}`;}return j&&(R.layerDefs=j),S&&!j&&(R.dynamicLayers=S),R.layers="popup"===m?"visible":m,N&&!S&&(R.layers+=`:${N.join(",")}`),R}function a$2(r$1){const{mapExtent:t,floors:o,width:l,sublayers:a,layerIds:p,layerOption:m,gdbVersion:y}=r$1,c=a?.find((e=>null!=e.layer))?.layer?.serviceSublayers,u="popup"===m,d={},g=i$1({extent:t,width:l,spatialReference:t?.spatialReference}),x=[],b=e=>{const r=0===g,t=0===e.minScale||g<=e.minScale,i=0===e.maxScale||g>=e.maxScale;if(e.visible&&(r||t&&i))if(e.sublayers)e.sublayers.forEach(b);else {if(!1===p?.includes(e.id)||u&&(!e.popupTemplate||!e.popupEnabled))return;x.unshift(e);}};if(a?.forEach(b),a&&!x.length)d.layerIds=[];else {const r$1=i$2(x,c,y),t=x.map((e=>{const r=n(o,e);return e.toExportImageJSON(r)}));if(r$1)d.dynamicLayers=JSON.stringify(t);else {if(a){let e=x.map((({id:e})=>e));p&&(e=e.filter((e=>p.includes(e)))),d.layerIds=e;}else p?.length&&(d.layerIds=p);const r$1=f$1(o,x);if(r(r$1)&&r$1.length){const e={};for(const t of r$1)t.definitionExpression&&(e[t.id]=t.definitionExpression);Object.keys(e).length&&(d.layerDefs=JSON.stringify(e));}}}return d}function f$1(e,t$1){const i=!!e?.length,s=t$1.filter((e=>null!=e.definitionExpression||i&&null!=e.floorInfo));return s.length?s.map((t$1=>{const i=n(e,t$1),s=t(i,t$1.definitionExpression);return {id:t$1.id,definitionExpression:s}})):null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var m$1;let a$1=m$1=class extends l$1{constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400;}static from(t){return v$1(m$1,t)}};e([d({type:Number,json:{write:!0}})],a$1.prototype,"dpi",void 0),e([d()],a$1.prototype,"floors",void 0),e([d({type:String,json:{write:!0}})],a$1.prototype,"gdbVersion",void 0),e([d({types:i$3,json:{read:d$1,write:!0}})],a$1.prototype,"geometry",void 0),e([d({type:Number,json:{write:!0}})],a$1.prototype,"geometryPrecision",void 0),e([d({type:Number,json:{write:!0}})],a$1.prototype,"height",void 0),e([d({type:[Number],json:{write:!0}})],a$1.prototype,"layerIds",void 0),e([d({type:["top","visible","all","popup"],json:{write:!0}})],a$1.prototype,"layerOption",void 0),e([d({type:w,json:{write:!0}})],a$1.prototype,"mapExtent",void 0),e([d({type:Number,json:{write:!0}})],a$1.prototype,"maxAllowableOffset",void 0),e([d({type:Boolean,json:{write:!0}})],a$1.prototype,"returnFieldName",void 0),e([d({type:Boolean,json:{write:!0}})],a$1.prototype,"returnGeometry",void 0),e([d({type:Boolean,json:{write:!0}})],a$1.prototype,"returnM",void 0),e([d({type:Boolean,json:{write:!0}})],a$1.prototype,"returnUnformattedValues",void 0),e([d({type:Boolean,json:{write:!0}})],a$1.prototype,"returnZ",void 0),e([d({type:k,json:{write:!0}})],a$1.prototype,"spatialReference",void 0),e([d()],a$1.prototype,"sublayers",void 0),e([d({type:y$2,json:{write:!0}})],a$1.prototype,"timeExtent",void 0),e([d({type:Number,json:{write:!0}})],a$1.prototype,"tolerance",void 0),e([d({type:Number,json:{write:!0}})],a$1.prototype,"width",void 0),a$1=m$1=e([n$1("esri.rest.support.IdentifyParameters")],a$1);const u$1=a$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let u=class extends l$1{constructor(r){super(r),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null;}readFeature(r,t){return g.fromJSON({attributes:{...t.attributes},geometry:{...t.geometry}})}writeFeature(r$1,e){if(!r$1)return;const{attributes:t,geometry:s}=r$1;t&&(e.attributes={...t}),r(s)&&(e.geometry=s.toJSON(),e.geometryType=t$1.toJSON(s.type));}};e([d({type:String,json:{write:!0}})],u.prototype,"displayFieldName",void 0),e([d({type:g})],u.prototype,"feature",void 0),e([o$1("feature",["attributes","geometry"])],u.prototype,"readFeature",null),e([r$1("feature")],u.prototype,"writeFeature",null),e([d({type:Number,json:{write:!0}})],u.prototype,"layerId",void 0),e([d({type:String,json:{write:!0}})],u.prototype,"layerName",void 0),u=e([n$1("esri.rest.support.IdentifyResult")],u);const y$1=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function i(u,f,i){const c=(f=a(f)).geometry?[f.geometry]:[],l$1=n$2(u);return l$1.path+="/identify",L(c).then((r=>{const e=l(f,{geometry:r&&r[0]}),u=o$2({...l$1.query,f:"json",...e}),a=e$1(u,i);return L$1(l$1.path,a).then(m).then((t=>p(t,f.sublayers)))}))}function m(t){const r=t.data;r.results=r.results||[];const e={results:[]};return e.results=r.results.map((t=>y$1.fromJSON(t))),e}function a(t){return t=u$1.from(t)}function p(t,r){if(!r?.length)return t;const e=new Map;function s(t){e.set(t.id,t),t.sublayers&&t.sublayers.forEach(s);}r.forEach(s);for(const o of t.results)o.feature.sourceLayer=e.get(o.layerId);return t}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const P=P=>{let x=class extends P{initialize(){this.exportImageParameters=new c({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,t){const{layer:s$1}=this;if(!e)throw new s("mapimagelayer:fetchPopupFeatures","Nothing to fetch without area",{layer:s$1});const a=this.layer.capabilities?.operations?.supportsQuery??!0;if(!((this.layer.capabilities?.operations?.supportsIdentify??!0)&&this.layer.version>=10.5)&&!a)throw new s("mapimagelayer:fetchPopupFeatures-not-supported","query operation is disabled for this service",{layer:s$1});return a?this._fetchPopupFeaturesUsingQueries(e,t):this._fetchPopupFeaturesUsingIdentify(e,t)}canResume(){return !!super.canResume()&&!this.timeExtent?.isEmpty}async _fetchPopupFeaturesUsingIdentify(e,r){const s=await this._createIdentifyParameters(e,r);if(t$2(s))return [];const{results:a}=await i(this.layer.parsedUrl,s);return a.map((e=>e.feature))}async _createIdentifyParameters(e,r$1){const{floors:t,spatialReference:a,scale:o}=this.view,i=r(r$1)?r$1.event:null,l=await this._collectPopupProviders(this.layer.sublayers,o,r$1);if(!l.length)return null;await Promise.all(l.map((({sublayer:e})=>e.load().catch((()=>{})))));const m=Math.min(has("mapimagelayer-popup-identify-max-tolerance"),this.layer.allSublayers.reduce(((e,r)=>r.renderer?s$1({renderer:r.renderer,event:i}):e),2)),c=this.createFetchPopupFeaturesQueryGeometry(e,m),y=r$2(o,a),f=Math.round(c.width/y),d=new w({xmin:c.center.x-y*f,ymin:c.center.y-y*f,xmax:c.center.x+y*f,ymax:c.center.y+y*f,spatialReference:c.spatialReference}),w$1=!1===this.layer.capabilities?.operations?.supportsQuery||await new Promise((e=>{let r=!1;Promise.all(l.map((async({popupTemplate:t})=>{if(t){const s=await this._loadArcadeModules(t);if(r)return;const a=s?.arcadeUtils.hasGeometryOperations(t);a&&(r=!0,e(!0));}}))).finally((()=>e(!1)));}));return new u$1({floors:t,gdbVersion:this.layer.gdbVersion,geometry:e,height:f,layerOption:"popup",mapExtent:d,maxAllowableOffset:w$1?0:y,returnGeometry:!0,spatialReference:a,sublayers:this.layer.sublayers,timeExtent:this.timeExtent,tolerance:m,width:f})}async _fetchPopupFeaturesUsingQueries(e,r$1){const t=await this._collectPopupProviders(this.layer.sublayers,this.view.scale,r$1),o=r(r$1)?r$1.event:null,i=t.map((async({sublayer:r$1,popupTemplate:t})=>{await r$1.load().catch((()=>{}));const a=r$1.createQuery(),i=s$1({renderer:r$1.renderer,event:o}),p=this.createFetchPopupFeaturesQueryGeometry(e,i);if(a.geometry=p,a.outFields=await d$2(r$1,t),"floors"in this.view){const e=this.view?.floors?.clone(),t=n(e,r$1);r(t)&&(a.where=a.where?`(${a.where}) AND (${t})`:t);}const n$1=await this._loadArcadeModules(t);n$1&&n$1.arcadeUtils.hasGeometryOperations(t)||(a.maxAllowableOffset=p.width/i);return (await r$1.queryFeatures(a)).features}));return (await E(i)).reduce(((e,r)=>r.value?[...e,...r.value]:e),[]).filter((e=>null!=e))}async _collectPopupProviders(e,r$1,t){const a=[],o=async e=>{const i=0===e.minScale||r$1<=e.minScale,p=0===e.maxScale||r$1>=e.maxScale;if(e.visible&&i&&p)if(e.sublayers)e.sublayers.forEach(o);else if(e.popupEnabled){const r$1=s$2(e,{...t,defaultPopupTemplateEnabled:!1});r(r$1)&&a.unshift({sublayer:e,popupTemplate:r$1});}},i=e.toArray().reverse().map(o);return await Promise.all(i),a}_loadArcadeModules(e){if(e.expressionInfos?.length||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type)))return a$3()}};return e([d()],x.prototype,"exportImageParameters",void 0),e([d({readOnly:!0})],x.prototype,"exportImageVersion",null),e([d()],x.prototype,"layer",void 0),e([d()],x.prototype,"suspended",void 0),e([d(g$1)],x.prototype,"timeExtent",void 0),x=e([n$1("esri.views.layers.MapImageLayerView")],x),x};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let f=class extends(P(i$4(f$2(u$2)))){constructor(){super(...arguments),this._highlightGraphics=new i$5;}update(e){this.strategy.update(e).catch((e=>{j(e)||s$3.getLogger(this.declaredClass).error(e);}));}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:r}=this.layer,s=r>=10.3,a=r>=10;this._bitmapContainer=new t$3,this.container.addChild(this._bitmapContainer);const o=new oe({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new n$3(this.view.featuresTilingScheme)});this.container.addChild(o.container),this.strategy=new S({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:s,imageNormalizationSupported:a,hidpi:!0}),this.handles.add(l$2((()=>this.exportImageVersion),(()=>this.requestUpdate())),"exportImageVersion"),this.handles.add(l$2((()=>this.view?.floors),(()=>this.requestUpdate())),"view.floors"),this.requestUpdate();}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}highlight(e,t){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e);}}}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}createFetchPopupFeaturesQueryGeometry(e,t){return a$4(e,t,this.view)}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,floors:this.view.floors,...i})}};e([d()],f.prototype,"strategy",void 0),e([d()],f.prototype,"updating",void 0),f=e([n$1("esri.views.2d.layers.MapImageLayerView2D")],f);const y=f;

export { y as default };
