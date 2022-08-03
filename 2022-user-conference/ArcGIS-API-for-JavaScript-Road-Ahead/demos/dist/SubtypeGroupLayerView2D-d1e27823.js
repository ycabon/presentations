import { B as e, D as n$1, b3 as l$1, b4 as h, r, lI as y$1 } from './_virtual_index-9b831d4a.js';
import A from './FeatureLayerView2D-97112dd7.js';
import './EffectView-280fbeb4.js';
import './definitions-94cbc2bf.js';
import './LayerView2D-bd5847a4.js';
import './Container-38939417.js';
import './schemaUtils-c67b468a.js';
import './Utils-0ee32720.js';
import './number-7d0da80b.js';
import './enums-11126df6.js';
import './utils-bc8fd4f8.js';
import './MaterialKey-7b48d630.js';
import './alignmentUtils-d4b065e2.js';
import './visualVariablesUtils-3a3b1834.js';
import './createSymbolSchema-aa6ae1a4.js';
import './CIMSymbolHelper-6ee7aec0.js';
import './BidiEngine-d3dd902c.js';
import './GeometryUtils-10c98655.js';
import './cimAnalyzer-320e051b.js';
import './ExpandedCIM-aa105730.js';
import './MD5-efff06bc.js';
import './util-301a8acd.js';
import './FeatureLayerView-473ed4b0.js';
import './floorFilterUtils-776aae8e.js';
import './popupUtils-c1e7b664.js';
import './LayerView-e26ca8f9.js';
import './RefreshableLayerView-18d98912.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function l(e,r){return !e.visible||0!==e.minScale&&r>e.minScale||0!==e.maxScale&&r<e.maxScale}let n=class extends A{initialize(){this.handles.add([l$1((()=>this.view?.viewpoint),(()=>this._update()),h)]);}_injectOverrides(e){let s=super._injectOverrides(e);const t=this.view.scale,i=this.layer.sublayers.filter((e=>l(e,t))).map((e=>e.subtypeCode));if(!i.length)return s;s=r(s)?s:(new y$1).toJSON();const o=`NOT ${this.layer.subtypeField} IN (${i.join(",")})`;return s.where=s.where?`(${s.where}) AND (${o})`:o,s}_setLayersForFeature(e){const r=this.layer.fieldsIndex.get(this.layer.subtypeField),s=e.attributes[r.name],t=this.layer.sublayers.find((e=>e.subtypeCode===s));e.layer=t,e.sourceLayer=this.layer;}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode,orderBy:null})))},r=this.layer.sublayers.map((e=>e.subtypeCode)).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${r})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...e,definitionExpression:t}}};n=e([n$1("esri.views.2d.layers.SubtypeGroupLayerView2D")],n);const y=n;

export { y as default };
