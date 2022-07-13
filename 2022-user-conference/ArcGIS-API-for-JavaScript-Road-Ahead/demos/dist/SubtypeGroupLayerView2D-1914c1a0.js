import { B as e, D as n$1, aP as l$1, aQ as h, r, dR as y$1 } from './_virtual_index-4b72c57d.js';
import A from './FeatureLayerView2D-aeacd367.js';
import './EffectView-0ee93c44.js';
import './enums-1f2484bf.js';
import './LayerView-a579da68.js';
import './utils-1dcda7d1.js';
import './Utils-af323e30.js';
import './number-7d0da80b.js';
import './enums-fb707d37.js';
import './Texture-e2dd4118.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-98c27063.js';
import './alignmentUtils-d4b065e2.js';
import './schemaUtils-9aaf6a24.js';
import './visualVariablesUtils-a3d3fab4.js';
import './createSymbolSchema-35c250f9.js';
import './CIMSymbolHelper-50c786a1.js';
import './BidiEngine-d3dd902c.js';
import './GeometryUtils-10c98655.js';
import './cimAnalyzer-ee2b7de5.js';
import './quantizationUtils-994cbb23.js';
import './ExpandedCIM-72783fee.js';
import './MD5-efff06bc.js';
import './util-04e40aaf.js';
import './floorFilterUtils-776aae8e.js';
import './popupUtils-967d9801.js';
import './RefreshableLayerView-f638c9df.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function l(e,r){return !e.visible||0!==e.minScale&&r>e.minScale||0!==e.maxScale&&r<e.maxScale}let n=class extends A{initialize(){this.handles.add([l$1((()=>this.view?.viewpoint),(()=>this._update()),h)]);}_injectOverrides(e){let s=super._injectOverrides(e);const t=this.view.scale,i=this.layer.sublayers.filter((e=>l(e,t))).map((e=>e.subtypeCode));if(!i.length)return s;s=r(s)?s:(new y$1).toJSON();const o=`NOT ${this.layer.subtypeField} IN (${i.join(",")})`;return s.where=s.where?`(${s.where}) AND (${o})`:o,s}_setLayersForFeature(e){const r=this.layer.fieldsIndex.get(this.layer.subtypeField),s=e.attributes[r.name],t=this.layer.sublayers.find((e=>e.subtypeCode===s));e.layer=t,e.sourceLayer=this.layer;}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode,orderBy:null})))},r=this.layer.sublayers.map((e=>e.subtypeCode)).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${r})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...e,definitionExpression:t}}};n=e([n$1("esri.views.2d.layers.SubtypeGroupLayerView2D")],n);const y=n;

export { y as default };
