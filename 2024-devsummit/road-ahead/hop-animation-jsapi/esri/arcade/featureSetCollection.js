// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(function(){class d{constructor(){this.declaredRootClass="esri.arcade.featureSetCollection";this._layerById={};this._layerByName={}}add(a,c,b){this._layerById[c]=b;this._layerByName[a]=b}async featureSetByName(a,c,b){return void 0===this._layerByName[a]?null:this._layerByName[a]}async featureSetById(a,c,b){return void 0===this._layerById[a]?null:this._layerById[a]}castToText(a){return"object, FeatureSetCollection"}}return d});