// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../geometry/projection ../../../geometry/support/aaBoundingRect ../../../layers/support/layerUtils ../../ViewingMode ./TerrainConst ./terrainUtils".split(" "),function(c,d,z,h,B,C,D,m,A,e,r,t,u,v){function w(a,b){return null==a||a.spatialReference.equals(b)?a:A.projectWithoutEngine(a,
a.spatialReference,b)}c.ExtentHelper=class extends z{constructor(a){super(a)}initialize(){this.addHandles([this.layerViews.on("change",()=>this.notifyChange("stencilEnabledExtents"))])}destroy(){}get layerViewsExtent(){return this._computeLayerViewsExtent()}get tiledLayersExtent(){return this._computeTiledLayersExtent()}get stencilEnabledExtents(){return this._computeStencilEnabledExtents()}_computeStencilEnabledExtents(){const a=[];this.layerViews.forEach(b=>{b=b.layer;r.isIntegratedMeshOperationalLayer(b.operationalLayerType)&&
null!=this.viewSpatialReference&&(b=w(b.fullExtent,this.viewSpatialReference),null!=b&&a.push(e.fromExtent(b)))});return a}};d.__decorate([h.property({readOnly:!0})],c.ExtentHelper.prototype,"layerViewsExtent",null);d.__decorate([h.property({readOnly:!0})],c.ExtentHelper.prototype,"tiledLayersExtent",null);d.__decorate([h.property({readOnly:!0})],c.ExtentHelper.prototype,"stencilEnabledExtents",null);d.__decorate([h.property()],c.ExtentHelper.prototype,"viewSpatialReference",void 0);d.__decorate([h.property()],
c.ExtentHelper.prototype,"tilingScheme",void 0);d.__decorate([h.property()],c.ExtentHelper.prototype,"defaultTiledLayersExtent",void 0);d.__decorate([h.property({constructOnly:!0})],c.ExtentHelper.prototype,"layers",void 0);d.__decorate([h.property({constructOnly:!0})],c.ExtentHelper.prototype,"layerViews",void 0);c.ExtentHelper=d.__decorate([m.subclass("esri.views.3d.terrain.ExtentHelper")],c.ExtentHelper);let n=class extends c.ExtentHelper{_computeLayerViewsExtent(){return this._globalExtent}_computeTiledLayersExtent(){return this._globalExtent}get _globalExtent(){return this.viewSpatialReference.isWebMercator?
u.webmercatorWorldExtent:u.geographicWorldExtent}};n=d.__decorate([m.subclass("esri.views.3d.terrain.ExtentHelperGlobal")],n);let q=class extends c.ExtentHelper{_computeLayerViewsExtent(){const a=e.empty(),b=this.viewSpatialReference;this.layerViews.forEach(f=>{const k=f.layer;!f.isResolved()||"graphics"===k.type&&k.internal||(f=w("fullExtentInLocalViewSpatialReference"in f&&f.fullExtentInLocalViewSpatialReference||f.layer.fullExtent,b),e.expand(a,f,a))});const g=e.allFinite(a)?a:null,l=this._get("layerViewsExtent");
return e.equals(g,l)?l:g}_computeTiledLayersExtent(){const a=this.tilingScheme;if(!a)return null;const b=this.viewSpatialReference,g=e.empty();this.layers.forEach(k=>{if(k.loaded&&r.isTiledLayer(k)){const x=v.getTiledLayerInfo(k,b,t.ViewingMode.Local);if(null!=x){var {tileInfo:y,fullExtent:p}=x;null!=y&&null!=p&&(v.isProjectableRasterLayer(k)||a.compatibleWith(y)&&p.spatialReference.equals(a.spatialReference))&&e.expand(g,p,g)}}});e.expand(g,this.defaultTiledLayersExtent,g);const l=e.allFinite(g)?
g:null,f=this._get("tiledLayersExtent");return e.equals(l,f)?f:l}};q=d.__decorate([m.subclass("esri.views.3d.terrain.ExtentHelperLocal")],q);c.create=function(a,b){return a===t.ViewingMode.Global?new n(b):new q(b)};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});