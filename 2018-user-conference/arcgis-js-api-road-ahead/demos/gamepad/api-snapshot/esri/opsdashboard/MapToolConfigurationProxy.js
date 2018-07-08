// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/extendsHelper ../core/tsSupport/decorateHelper ../core/typescript ./core/ExtensionConfigurationBase".split(" "),function(g,h,e,c,d,f){return function(a){function b(){return null!==a&&a.apply(this,arguments)||this}e(b,a);b.prototype._initializeResponseReceived=function(b){var a=this;this.inherited(arguments).then(function(){return a.getMapWidgetProxy(a.config.mapWidgetId).then(function(a){this.mapWidgetProxy=a})})};c([d.shared("esri.opsdashboard.MapToolConfigurationProxy")],
b.prototype,"declaredClass",void 0);return b=c([d.subclass()],b)}(f)});