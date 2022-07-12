import { a as e, n as n$1, l as l$1, ai as h, G as r, j3 as y$1 } from './_virtual_index-64b818a8.js';
import A from './FeatureLayerView2D-de73bbbc.js';
import './utils-b2399430.js';
import './Utils-9723b65e.js';
import './number-7d0da80b.js';
import './enums-11126df6.js';
import './enums-fb707d37.js';
import './Texture-0a4fb0f7.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-a43b2cc5.js';
import './alignmentUtils-d4b065e2.js';
import './definitions-20a531fc.js';
import './LayerView2D-246827ac.js';
import './schemaUtils-6e8c0373.js';
import './visualVariablesUtils-f466489d.js';
import './createSymbolSchema-15811898.js';
import './CIMSymbolHelper-8a3e4339.js';
import './BidiEngine-d3dd902c.js';
import './floatRGBA-fc82869e.js';
import './GeometryUtils-10c98655.js';
import './cimAnalyzer-15eec215.js';
import './callExpressionWithFeature-2a9f2efb.js';
import './ExpandedCIM-72fcda41.js';
import './MD5-efff06bc.js';
import './util-4c696f7e.js';
import './floorFilterUtils-776aae8e.js';
import './popupUtils-0b937595.js';
import './LayerView-9b4453e0.js';
import './RefreshableLayerView-1ab1c1be.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function l(e,r){return !e.visible||0!==e.minScale&&r>e.minScale||0!==e.maxScale&&r<e.maxScale}let n=class extends A{initialize(){this.handles.add([l$1((()=>this.view?.viewpoint),(()=>this._update()),h)]);}_injectOverrides(e){let s=super._injectOverrides(e);const t=this.view.scale,i=this.layer.sublayers.filter((e=>l(e,t))).map((e=>e.subtypeCode));if(!i.length)return s;s=r(s)?s:(new y$1).toJSON();const o=`NOT ${this.layer.subtypeField} IN (${i.join(",")})`;return s.where=s.where?`(${s.where}) AND (${o})`:o,s}_setLayersForFeature(e){const r=this.layer.fieldsIndex.get(this.layer.subtypeField),s=e.attributes[r.name],t=this.layer.sublayers.find((e=>e.subtypeCode===s));e.layer=t,e.sourceLayer=this.layer;}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode,orderBy:null})))},r=this.layer.sublayers.map((e=>e.subtypeCode)).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${r})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...e,definitionExpression:t}}};n=e([n$1("esri.views.2d.layers.SubtypeGroupLayerView2D")],n);const y=n;

export { y as default };
