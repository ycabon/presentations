// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/maybe","./FeatureTileFetcher3D","./featureTileQuery3D"],function(d,e,f,g,h){Object.defineProperty(e,"__esModule",{value:!0});d=function(){function a(b){this._capabilities=this.memoryCache=null;var a=b.layerView.layer;this.layerView=b.layerView;this.objectIdField=a.objectIdField;this.returnZ=b.returnZ;this.returnM=b.returnM;this.query=h.createFeatureTileQuery3D(a);b=this.layerView.view.resourceController;"hasService"in a&&a.hasService&&b&&(this.memoryCache=
b.memoryController.getMemCache(a.uid))}a.prototype.destroy=function(){f.isSome(this.memoryCache)&&this.memoryCache.destroy()};a.prototype.createQuery=function(){var a=this.layerView.layer.createQuery();a.outFields=this.layerView.availableFields;a.returnZ=this.returnZ;a.returnM=this.returnM;a.outSpatialReference=this.tilingScheme.spatialReference;return a};Object.defineProperty(a.prototype,"viewingMode",{get:function(){return this.layerView.view.viewingMode},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,
"tilingScheme",{get:function(){return this.layerView.view.featureTiles.tilingScheme},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"scheduler",{get:function(){var a=this.layerView.view.resourceController;return a?a.scheduler:null},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"geometryType",{get:function(){return this.layerView.layer.geometryType},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"fullExtent",{get:function(){return this.layerView.layer.fullExtent},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"tileMaxRecordCount",{get:function(){return this.layerView.layer.capabilities.query.tileMaxRecordCount},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"maxRecordCount",{get:function(){return this.layerView.layer.capabilities.query.maxRecordCount},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"capabilities",{get:function(){return f.isSome(this._capabilities)?this._capabilities:this._capabilities=
g.contextCapabilitiesFromLayer(this.layerView.layer)},enumerable:!0,configurable:!0});a.prototype.logFetchError=function(a,c){a.error("#fetchTile()",this.layerView.layer,c&&c.message?c.message:c)};return a}();e.FeatureTileFetcher3DLayerViewContext=d});