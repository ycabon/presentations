import { ac as e, ae as i, W as i$1, h as r, i8 as y } from './_virtual_index-3ad07138.js';
import D from './FeatureLayerView2D-96f788fe.js';
import './Container-0ea8b7c2.js';
import './drapedUtils-4e6cbba2.js';
import './LayerView-ccf9971d.js';
import './schemaUtils-05c05689.js';
import './Utils-ba2d87f4.js';
import './Texture-970325f3.js';
import './MaterialKey-8a7bcdbb.js';
import './visualVariablesUtils-b2bf8e17.js';
import './CIMSymbolHelper-62ceca89.js';
import './BidiEngine-1d3a0a6d.js';
import './cimSymbolUtils-12bccbc7.js';
import './quantizationUtils-cc435f69.js';
import './devEnvironmentUtils-a78265ea.js';
import './MD5-a16a7511.js';
import './util-af29771e.js';
import './popupUtils-9bd5eacf.js';
import './RefreshableLayerView-cd718d73.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(e,r){return !e.visible||0!==e.minScale&&r>e.minScale||0!==e.maxScale&&r<e.maxScale}let l=class extends D{initialize(){this.handles.add([i$1(this.view,"viewpoint",(()=>this._update()))]);}_injectOverrides(e){let s=super._injectOverrides(e);const t=this.view.scale,a=this.layer.sublayers.filter((e=>o(e,t))).map((e=>e.subtypeCode));if(!a.length)return s;s=r(s)?s:(new y).toJSON();const l=`NOT ${this.layer.subtypeField} IN (${a.join(",")})`;return s.where=s.where?`(${s.where}) AND (${l})`:l,s}_setLayersForFeature(e){const r=this.layer.fieldsIndex.get(this.layer.subtypeField),s=e.attributes[r.name],t=this.layer.sublayers.find((e=>e.subtypeCode===s));e.layer=t,e.sourceLayer=this.layer;}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode,orderBy:null})))},r=this.layer.sublayers.map((e=>e.subtypeCode)).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${r})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...e,definitionExpression:t}}};l=e([i("esri.views.2d.layers.SubtypeGroupLayerView2D")],l);const n=l;

export { n as default };
