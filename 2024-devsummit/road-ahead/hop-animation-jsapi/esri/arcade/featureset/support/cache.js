// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(function(){class c{constructor(){this._databaseTypeMetaData={};this._layerInfo={}}clearDatabaseType(a){void 0===this._databaseTypeMetaData[a]&&delete this._databaseTypeMetaData[a]}getDatabaseType(a){return"MUSTBESET"===a||void 0===this._databaseTypeMetaData[a]?null:this._databaseTypeMetaData[a]}setDatabaseType(a,b){this._databaseTypeMetaData[a]=b}getLayerInfo(a){return void 0===this._layerInfo[a]?null:this._layerInfo[a]}setLayerInfo(a,b){this._layerInfo[a]=b}clearLayerInfo(a){void 0!==this._layerInfo[a]&&
delete this._layerInfo[a]}}c.applicationCache=null;return c});