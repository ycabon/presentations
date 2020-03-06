// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Accessor ../../../core/Handles ../../../core/accessorSupport/decorators ../camera/constraintUtils ../camera/intersectionUtils".split(" "),function(c,d,g,f,h,k,e,l,m){Object.defineProperty(d,"__esModule",{value:!0});c=function(c){function a(b){b=c.call(this,b)||this;b.handles=new k;return b}g(a,c);a.prototype.initialize=function(){var b=this;this.handles.add(this.view.basemapTerrain.on("elevation-change",
function(a){return b.handleElevationChangeEvent(a)}))};a.prototype.destroy=function(){this.handles&&(this.handles.destroy(),this.handles=null)};a.prototype.handleElevationChangeEvent=function(b){this.view.state.cameraController||m.eyeWithinExtent(this.view,this.view.state.camera,b.extent,b.spatialReference)&&this.applyToCurrentCamera()};a.prototype.applyToCurrentCamera=function(){var b=this;this.view.state.updateCamera(function(a){l.applySurfaceCollisionConstraint(b.view,a,1)})};f([e.property({constructOnly:!0})],
a.prototype,"view",void 0);return a=f([e.subclass("esri.views.3d.state.ElevationCollisionConstraint")],a)}(e.declared(h));d.SurfaceCollisionConstraint=c;d.default=c});