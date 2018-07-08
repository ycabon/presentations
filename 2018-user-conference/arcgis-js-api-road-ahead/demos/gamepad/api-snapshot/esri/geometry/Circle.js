// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ./Point ./Polygon ./support/geodesicUtils ./support/webMercatorUtils ./support/WKIDUnitConversion".split(" "),function(v,w,q,r,f,e,t,k,u,m,h){var n={centimeters:.01,decimeters:.1,feet:.3048,inches:.0254,kilometers:1E3,meters:1,miles:1609.344,millimeters:.001,"nautical-miles":1852,yards:.9144,"decimal-degrees":111320};return function(p){function b(){for(var a=
[],d=0;d<arguments.length;d++)a[d]=arguments[d];a=p.apply(this,a)||this;a.center=null;a.geodesic=!1;a.numberOfPoints=60;a.radius=1E3;a.radiusUnit="meters";return a}r(b,p);l=b;b.prototype.normalizeCtorArgs=function(a,d){var b;if(a&&a.center)b=a;else{if(a&&a.rings)return this.inherited(arguments);b={center:a}}return q({},this.inherited(arguments,[]),b,d)};b.prototype.initialize=function(){var a=this.center,d=this.numberOfPoints;this.hasZ=a&&a.hasZ;if(0===this.rings.length&&a){var b=this.radius*n[this.radiusUnit],
c=a.spatialReference,g="geographic";if(c.isWebMercator)g="webMercator";else if(null!=h[c.wkid]||c.wkt&&0===c.wkt.indexOf("PROJCS"))g="projected";if(this.geodesic){c=void 0;switch(g){case "webMercator":c=m.webMercatorToGeographic(a);break;case "projected":console.error("Creating a geodesic circle requires the center to be specified in web mercator or geographic coordinate system");break;case "geographic":c=a}a=this._createGeodesicCircle(c,b,d);"webMercator"===g&&(a=m.geographicToWebMercator(a))}else c=
void 0,"webMercator"===g||"projected"===g?c=b/this._convert2Meters(1,a.spatialReference):"geographic"===g&&(c=b/n["decimal-degrees"]),a=this._createPlanarCircle(a,c,d);this.spatialReference=a.spatialReference;this.addRing(a.rings[0])}};b.prototype.clone=function(){return new l({rings:this.rings,hasZ:this.hasZ,hasM:this.hasM,spatialReference:this.spatialReference})};b.prototype._createGeodesicCircle=function(a,d,b){for(var c=0,g=Math.PI/180,e=[];c<2*Math.PI;){var f=u.directGeodeticSolver(a.y*g,a.x*
g,c,d).toArray();this.hasZ&&f.push(a.z);e.push(f);c+=Math.PI/(b/2)}e.push(e[0]);return new k(e)};b.prototype._createPlanarCircle=function(a,b,e){for(var c=0,d=[];c<2*Math.PI;){var f=[a.x+Math.cos(-c)*b,a.y+Math.sin(-c)*b];this.hasZ&&f.push(a.z);d.push(f);c+=Math.PI/(e/2)}d.push(d[0]);return new k({spatialReference:a.spatialReference,rings:[d]})};b.prototype._convert2Meters=function(a,b){if(null!=h[b.wkid])b=h.values[h[b.wkid]];else{b=b.wkt;var d=b.lastIndexOf(",")+1,c=b.lastIndexOf("]]");b=parseFloat(b.substring(d,
c))}return a*b};f([e.property({type:t})],b.prototype,"center",void 0);f([e.property()],b.prototype,"geodesic",void 0);f([e.property()],b.prototype,"numberOfPoints",void 0);f([e.property()],b.prototype,"radius",void 0);f([e.property()],b.prototype,"radiusUnit",void 0);return b=l=f([e.subclass("esri.geometry.Circle")],b);var l}(e.declared(k))});