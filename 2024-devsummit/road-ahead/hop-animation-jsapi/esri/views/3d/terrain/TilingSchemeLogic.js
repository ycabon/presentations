// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../geometry/projection ../../../geometry/support/aaBoundingRect ../../../geometry/support/spatialReferenceUtils ../../../layers/support/layerUtils ../../ViewingMode ./terrainUtils ./TilingScheme".split(" "),function(c,d,p,k,e,u,v,w,q,l,r,m,
t,n,h,g){c.TilingSchemeLogic=class extends p{constructor(a){super(a)}initialize(){this.addHandles([this.layers.on("change",()=>this._update()),k.watch(()=>this.extentHelper.layerViewsExtent,()=>this._setAdHocTilingScheme())]);this._update();this.tilingSchemeLocked||this._setAdHocTilingScheme()}destroy(){this._waitTask=null;this.layers.destroy()}_update(){this._waitTask=null;if(!this.tilingSchemeLocked){var a;this.layers.some(f=>!t.isTiledLayer(f)||f.isRejected()?!1:f.isFulfilled()&&null==h.getTiledLayerInfo(f,
this.viewSpatialReference,this.viewingMode)?!1:(a=f,"vector-tile"!==f?.type&&!h.isProjectableRasterLayer(f)));if(a)if(a.isResolved()){var b=h.getTiledLayerInfo(a,this.viewSpatialReference,this.viewingMode);null!=b&&(b=new g.TilingScheme(b.tileInfo),this._lockTilingScheme(b))}else this._updateWhen(a)}}_updateWhen(a){const b=a.when().catch(()=>{}).then(()=>{b!==this._waitTask||this.destroyed||this._update()});this._waitTask=b}_lockTilingScheme(a){if(this.viewingMode===n.ViewingMode.Global){const b=
a.levels.length-1;a.spatialReference.isWebMercator?a=g.TilingScheme.makeWebMercatorAuxiliarySphere(b):l.canProjectToWGS84ComparableLonLat(a.spatialReference)&&(a=g.TilingScheme.makeGCSWithTileSize(a.spatialReference,a.pixelSize,b))}this.tilingSchemeLocked=!0;this.tilingScheme=a;this.extentHelper.tilingScheme=this.tilingScheme;this._updateTiledLayerExtent();this.removeAllHandles();this.addHandles(k.watch(()=>this.extentHelper.tiledLayersExtent,()=>this._updateTiledLayerExtent()))}_updateTiledLayerExtent(){this._set("extent",
this.extentHelper.tiledLayersExtent)}_setAdHocTilingScheme(){if(this.viewingMode===n.ViewingMode.Global){var a=this.extentHelper.viewSpatialReference;const b=l.canProjectToWGS84ComparableLonLat(a)||m.isMars(a)||m.isMoon(a);a.isWebMercator?this.tilingScheme=g.TilingScheme.WebMercatorAuxiliarySphere:b&&(this.tilingScheme=g.TilingScheme.makeGCSWithTileSize(a,256));this._set("extent",this.extentHelper.layerViewsExtent)}else a=this.extentHelper.layerViewsExtent,null==a||r.equals(a,this.extent)||(this.tilingScheme=
g.TilingScheme.fromExtent(a,this.extentHelper.viewSpatialReference),this._set("extent",a))}get test(){return{lockTilingScheme:a=>this._lockTilingScheme(a),done:!this._waitTask}}};d.__decorate([e.property()],c.TilingSchemeLogic.prototype,"tilingScheme",void 0);d.__decorate([e.property({readOnly:!0})],c.TilingSchemeLogic.prototype,"extent",void 0);d.__decorate([e.property({value:!1})],c.TilingSchemeLogic.prototype,"tilingSchemeLocked",void 0);d.__decorate([e.property({constructOnly:!0})],c.TilingSchemeLogic.prototype,
"viewSpatialReference",void 0);d.__decorate([e.property({constructOnly:!0})],c.TilingSchemeLogic.prototype,"layers",void 0);d.__decorate([e.property({constructOnly:!0})],c.TilingSchemeLogic.prototype,"extentHelper",void 0);d.__decorate([e.property({constructOnly:!0})],c.TilingSchemeLogic.prototype,"viewingMode",void 0);c.TilingSchemeLogic=d.__decorate([q.subclass("esri.views.3d.terrain.TilingSchemeLogic")],c.TilingSchemeLogic);Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});