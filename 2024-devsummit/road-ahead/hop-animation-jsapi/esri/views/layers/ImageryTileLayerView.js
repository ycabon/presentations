// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../Graphic ../../core/Error ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../layers/support/commonProperties ../../layers/support/rasterFunctions/rasterProjectionHelper ./support/popupUtils".split(" "),function(f,v,q,g,B,C,D,w,x,m,y){return b=>{b=class extends b{constructor(){super(...arguments);this._rasterFieldPrefix="Raster.";this.tileInfo=this.view=this.layer=
null}get fullExtent(){return this._getfullExtent()}_getfullExtent(){return m.projectDatasetExtent(this.layer.serviceRasterInfo,this.view.spatialReference)}get hasTilingEffects(){return!!(this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment)}get datumTransformation(){return m.getDefaultDatumTransformationForDataset(this.layer.fullExtent,this.view.spatialReference,!0)}supportsSpatialReference(c){return!!m.projectDatasetExtent(this.layer.serviceRasterInfo,
c)}async fetchPopupFeaturesAtLocation(c,e){const {layer:a}=this;if(!c)throw new q("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:a});var {popupEnabled:h}=a;const r=y.getFetchPopupTemplate(a,e);if(!h||null==r)throw new q("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:h,popupTemplate:r});h=[];const {value:k,magdirValue:t,processedValue:z}=await a.identify(c,{timeExtent:this.timeExtent,signal:e?.signal});let l=
"";if(k&&k.length){l="imagery-tile"===a.type&&a.hasStandardTime()&&null!=k[0]?k.map(n=>a.getStandardTimeValue(n)).join(", "):k.join(", ");c={ObjectId:0};c["Raster.ServicePixelValue"]="imagery-tile"===a.type&&"Function"===a.raster.datasetFormat?z?.join(", "):l;c["Raster.ServicePixelValue.Raw"]=l;e=a.serviceRasterInfo.attributeTable;if(null!=e){const {fields:n,features:A}=e,u=n.find(({name:p})=>"value"===p.toLowerCase());if(e=u?A.find(p=>String(p.attributes[u.name])===l):null)for(var d in e.attributes)e.attributes.hasOwnProperty(d)&&
(c[this._rasterFieldPrefix+d]=e.attributes[d])}d=a.serviceRasterInfo.dataType;if("vector-magdir"===d||"vector-uv"===d)c["Raster.Magnitude"]=t?.[0],c["Raster.Direction"]=t?.[1];d=new v(this.fullExtent.clone(),null,c);d.layer=a;d.sourceLayer=d.layer;h.push(d)}return h}};f.__decorate([g.property()],b.prototype,"layer",void 0);f.__decorate([g.property(x.combinedViewLayerTimeExtentProperty)],b.prototype,"timeExtent",void 0);f.__decorate([g.property()],b.prototype,"view",void 0);f.__decorate([g.property()],
b.prototype,"fullExtent",null);f.__decorate([g.property()],b.prototype,"tileInfo",void 0);f.__decorate([g.property({readOnly:!0})],b.prototype,"hasTilingEffects",null);f.__decorate([g.property()],b.prototype,"datumTransformation",null);return b=f.__decorate([w.subclass("esri.views.layers.ImageryTileLayerView")],b)}});