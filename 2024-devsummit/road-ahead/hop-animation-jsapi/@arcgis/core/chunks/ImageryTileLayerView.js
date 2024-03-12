/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../Graphic.js";import r from"../core/Error.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as a}from"../core/accessorSupport/decorators/subclass.js";import{c as s}from"./commonProperties2.js";import{p as o,a as n}from"./rasterProjectionHelper.js";import{a as l}from"./popupUtils.js";const p=p=>{let u=class extends p{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.tileInfo=null}get fullExtent(){return this._getfullExtent()}_getfullExtent(){return o(this.layer.serviceRasterInfo,this.view.spatialReference)}get hasTilingEffects(){return!!(this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment)}get datumTransformation(){return n(this.layer.fullExtent,this.view.spatialReference,!0)}supportsSpatialReference(e){return!!o(this.layer.serviceRasterInfo,e)}async fetchPopupFeaturesAtLocation(e,i){const{layer:a}=this;if(!e)throw new r("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:a});const{popupEnabled:s}=a,o=l(a,i);if(!s||null==o)throw new r("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:s,popupTemplate:o});const n=[],{value:p,magdirValue:u,processedValue:c}=await a.identify(e,{timeExtent:this.timeExtent,signal:i?.signal});let f="";if(p&&p.length){f="imagery-tile"===a.type&&a.hasStandardTime()&&null!=p[0]?p.map((e=>a.getStandardTimeValue(e))).join(", "):p.join(", ");const e={ObjectId:0},r="Raster.ServicePixelValue";e[r]="imagery-tile"===a.type&&"Function"===a.raster.datasetFormat?c?.join(", "):f,e[r+".Raw"]=f;const i=a.serviceRasterInfo.attributeTable;if(null!=i){const{fields:t,features:r}=i,a=t.find((({name:e})=>"value"===e.toLowerCase())),s=a?r.find((e=>String(e.attributes[a.name])===f)):null;if(s)for(const t in s.attributes)s.attributes.hasOwnProperty(t)&&(e[this._rasterFieldPrefix+t]=s.attributes[t])}const s=a.serviceRasterInfo.dataType;"vector-magdir"!==s&&"vector-uv"!==s||(e["Raster.Magnitude"]=u?.[0],e["Raster.Direction"]=u?.[1]);const o=new t(this.fullExtent.clone(),null,e);o.layer=a,o.sourceLayer=o.layer,n.push(o)}return n}};return e([i()],u.prototype,"layer",void 0),e([i(s)],u.prototype,"timeExtent",void 0),e([i()],u.prototype,"view",void 0),e([i()],u.prototype,"fullExtent",null),e([i()],u.prototype,"tileInfo",void 0),e([i({readOnly:!0})],u.prototype,"hasTilingEffects",null),e([i()],u.prototype,"datumTransformation",null),u=e([a("esri.views.layers.ImageryTileLayerView")],u),u};export{p as I};
