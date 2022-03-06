import { ac as e, ae as i, W as i$1, h as r, ih as y } from './_virtual_index-49b2bc11.js';
import D from './FeatureLayerView2D-7d3f68d7.js';
import './Container-905526e1.js';
import './drapedUtils-548aa09d.js';
import './LayerView-9194fd82.js';
import './schemaUtils-54c0b4c1.js';
import './Utils-8759b086.js';
import './Texture-7f200883.js';
import './MaterialKey-67bb5654.js';
import './visualVariablesUtils-9beed5ec.js';
import './CIMSymbolHelper-bfef80ee.js';
import './BidiEngine-1d3a0a6d.js';
import './cimSymbolUtils-634dbb78.js';
import './quantizationUtils-65d5f437.js';
import './devEnvironmentUtils-a78265ea.js';
import './MD5-a16a7511.js';
import './util-2e9ee3aa.js';
import './popupUtils-91783a27.js';
import './RefreshableLayerView-a108c313.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(e,r){return !e.visible||0!==e.minScale&&r>e.minScale||0!==e.maxScale&&r<e.maxScale}let l=class extends D{initialize(){this.handles.add([i$1(this.view,"viewpoint",(()=>this._update()))]);}_injectOverrides(e){let s=super._injectOverrides(e);const t=this.view.scale,a=this.layer.sublayers.filter((e=>o(e,t))).map((e=>e.subtypeCode));if(!a.length)return s;s=r(s)?s:(new y).toJSON();const l=`NOT ${this.layer.subtypeField} IN (${a.join(",")})`;return s.where=s.where?`(${s.where}) AND (${l})`:l,s}_setLayersForFeature(e){const r=this.layer.fieldsIndex.get(this.layer.subtypeField),s=e.attributes[r.name],t=this.layer.sublayers.find((e=>e.subtypeCode===s));e.layer=t,e.sourceLayer=this.layer;}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode,orderBy:null})))},r=this.layer.sublayers.map((e=>e.subtypeCode)).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${r})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...e,definitionExpression:t}}};l=e([i("esri.views.2d.layers.SubtypeGroupLayerView2D")],l);const n=l;

export { n as default };
