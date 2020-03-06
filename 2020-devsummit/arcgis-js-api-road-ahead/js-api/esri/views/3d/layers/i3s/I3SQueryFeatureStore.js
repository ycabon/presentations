// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/Accessor ../../../../core/Evented ../../../../core/accessorSupport/decorators ../../../../core/libs/gl-matrix-2/vec4f64 ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/aaBoundingRect ../../support/projectionUtils".split(" "),function(f,h,m,g,n,p,d,q,k,l,r){Object.defineProperty(h,"__esModule",{value:!0});f=function(f){function a(b){b=f.call(this,
b)||this;b.events=new p;return b}m(a,f);a.prototype.destroy=function(){};a.prototype.forEach=function(b){this.forAllFeatures(function(a){b(a);return 1})};a.prototype.forEachBounds=function(b,a,c){for(var t=this.getFeatureExtent,e=0;e<b.length;e++)a(t(b[e],c))};a.prototype.forEachInBounds=function(b,a){var d=this;this.forAllFeatures(function(c){var e=d.getFeatureExtent(c,u);l.intersects(b,k.toRect(e,v))&&a(c);return 1},function(a){r.mbsToMbs(a.node.mbs,d.sourceSpatialReference,c,d.viewSpatialReference);
if(c[0]>=b[0]&&c[2]<=b[2]&&c[1]>=b[1]&&c[3]<=b[3])return 1;a=c[0]-Math.max(b[0],Math.min(c[0],b[2]));var e=c[1]-Math.max(b[1],Math.min(c[1],b[3]));return a*a+e*e<=c[3]*c[3]?1:2})};g([d.property({constructOnly:!0})],a.prototype,"featureAdapter",void 0);g([d.property({constructOnly:!0})],a.prototype,"forAllFeatures",void 0);g([d.property({constructOnly:!0})],a.prototype,"getFeatureExtent",void 0);g([d.property({constructOnly:!0})],a.prototype,"sourceSpatialReference",void 0);g([d.property({constructOnly:!0})],
a.prototype,"viewSpatialReference",void 0);return a=g([d.subclass("esri.views.3d.layers.i3s.I3SQueryFeatureStore")],a)}(d.declared(n));h.I3SQueryFeatureStore=f;var c=q.vec4f64.create(),u=k.create(),v=l.create();h.default=f});