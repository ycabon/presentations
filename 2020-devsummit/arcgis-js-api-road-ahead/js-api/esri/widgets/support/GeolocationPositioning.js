// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../Graphic ../../core/Accessor ../../core/Error ../../core/Evented ../../core/geolocationUtils ../../core/promiseUtils ../../core/accessorSupport/decorators ../../symbols/PictureMarkerSymbol ./GoTo".split(" "),function(w,H,x,d,y,z,A,B,C,D,k,E,e,F,G){return function(g){function b(){var a=null!==g&&g.apply(this,arguments)||this;
a._geolocationUsable=!0;a._iconPath=w.toUrl("../../images/support/sdk_gps_location.png");a.geolocationOptions=null;a.goToLocationEnabled=!0;a.graphic=new A({symbol:new F({url:a._iconPath,width:21,height:21})});a.scale=null;a.useHeadingEnabled=!0;a.view=null;return a}x(b,g);b.prototype.initialize=function(){k.supported()||(this._geolocationUsable=!1)};b.prototype.destroy=function(){this._clear();this.view=null};b.prototype._clear=function(){this.view&&this.view.graphics.remove(this.graphic)};b.prototype._getScaleWithinConstraints=
function(a,c){return c?"2d"===c.type?(c=c.constraints,Math.min(c.effectiveMinScale,Math.max(c.effectiveMaxScale,a))):a:a};b.prototype._getScale=function(a){var c=this.scale;return this._getScaleWithinConstraints("number"===typeof c?c:2500,a)};b.prototype._getHeading=function(a,c){c=c&&c.spatialReference;a=a.coords&&a.coords.heading;if(!(!c||!c.isWebMercator&&!c.isGeographic||"number"!==typeof a||isNaN(a)||0>a||360<a))return a};b.prototype._addHeading=function(a){var c=a.heading,b=a.target;(a=a.view)&&
"number"===typeof c&&!isNaN(c)&&("3d"===a.type?b.heading=c:"2d"===a.type&&(b.rotation=360-c))};b.prototype._animatePoint=function(a,c,b,e){var d=this.view;if(!this.goToLocationEnabled||!d)return E.resolve(c);var f=this.useHeadingEnabled?this._getHeading(c,d):void 0;a={target:a,scale:b};this._addHeading({heading:f,target:a,view:d});return this.callGoTo({target:a,options:e}).then(function(){return c})};b.prototype._setPosition=function(a,c){return z(this,void 0,void 0,function(){var b,d,e,f,g,l,m,n,
p,q,r,t,u,v;return y(this,function(h){switch(h.label){case 0:return h.trys.push([0,2,,3]),[4,k.positionToPoint({position:a,view:this.view},c)];case 1:return b=h.sent(),d=this.graphic,e=a.timestamp,f=a.coords,g=f.accuracy,l=f.altitude,m=f.altitudeAccuracy,n=f.heading,p=f.latitude,q=f.longitude,r=f.speed,t={timestamp:e,accuracy:g,altitude:l,altitudeAccuracy:m,heading:n,latitude:p,longitude:q,speed:r},d&&(d.geometry=b,d.attributes=t),u=this._getScale(this.view),[2,this._animatePoint(b,a,u,c)];case 2:throw v=
h.sent(),new C("positioning:invalid-point","Cannot position invalid point",{error:v});case 3:return[2]}})})};d([e.property()],b.prototype,"_geolocationUsable",void 0);d([e.property()],b.prototype,"geolocationOptions",void 0);d([e.property()],b.prototype,"goToLocationEnabled",void 0);d([e.property()],b.prototype,"graphic",void 0);d([e.property()],b.prototype,"scale",void 0);d([e.property()],b.prototype,"useHeadingEnabled",void 0);d([e.property()],b.prototype,"view",void 0);return b=d([e.subclass("esri.widgets.support.GeolocationPositioning")],
b)}(e.declared(G.GoToMixin(D.EventedMixin(B))))});