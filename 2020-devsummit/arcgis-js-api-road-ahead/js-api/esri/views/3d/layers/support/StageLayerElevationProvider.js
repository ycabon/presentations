// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/Accessor ../../../../core/Evented ../../../../core/Logger ../../../../core/maybe ../../../../core/unitUtils ../../../../core/accessorSupport/decorators ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/aaBoundingRect ../../../../symbols/support/unitConversionUtils ../../webgl-engine/lib/Intersector".split(" "),
function(r,t,u,h,v,w,x,y,z,f,l,g,k,A,B,C){Object.defineProperty(t,"__esModule",{value:!0});var D=x.getLogger("esri.views.3d.layers.support.StageLayerElevationProvider");r=function(g){function b(a){a=g.call(this,a)||this;a.elevationOffset=0;a.layerDirtyNotificationHandle=null;return a}u(b,g);b.prototype.initialize=function(){var a=this;this.renderCoordsHelper=this.view.renderCoordsHelper;this.intersectLayers=[this.stageLayer];this.intersector=new C.Intersector(this.view.viewingMode);this.intersector.options.store=
0;var c=this.computeLayerExtent(this.stageLayer);this.zmin=c[2];this.zmax=c[5];this.layerDirtyNotificationHandle=this.stageLayer.on("dirty",function(c){return a.stageLayerChanged(c.origin,c.dirtyType,c.subObject)})};b.prototype.dispose=function(){this.layerDirtyNotificationHandle.remove()};b.prototype.elevationInfoChanged=function(){var a=null!=this.layer?this.layer.elevationInfo:null;if(null!=a&&"on-the-ground"!==a.mode){var c=z.getMetersPerVerticalUnitForSR(this.layer.spatialReference),b=B.getMetersPerUnit(a.unit);
this.elevationOffset=y.unwrapOr(a.offset,0)*b/c}else this.elevationOffset=0};b.prototype.getElevation=function(a,c,b,d){e[0]=a;e[1]=c;e[2]=b;if(!this.renderCoordsHelper.toRenderCoords(e,d,e))return D.error("could not project point for elevation alignment"),null;c=this.elevationOffset;a=this.zmin+c;c=this.zmax+c;l.vec3.copy(m,e);l.vec3.copy(n,e);this.renderCoordsHelper.setAltitude(c,m);this.renderCoordsHelper.setAltitude(a,n);this.intersector.reset(m,n);this.intersector.intersect(this.intersectLayers,
null,null,1,null,function(a){return a.metadata&&a.metadata.isElevationSource});return this.intersector.results.min.getIntersectionPoint(e)?this.renderCoordsHelper.getAltitude(e):null};b.prototype.stageLayerChanged=function(a,c,b){switch(c){case "layerObjectAdded":case "layerObjectRemoved":case "objGeometryAdded":a=b;a.metadata&&a.metadata.isElevationSource&&this.objectChanged(a);break;case "objGeometryRemoved":case "objGeometryReplaced":case "objGeometryTransformation":case "vertexAttrsUpdated":case "objTransformation":a.metadata&&
a.metadata.isElevationSource&&this.objectChanged(a)}};b.prototype.objectChanged=function(a){if(this.spatialReference){k.empty(d);a.metadata.lastValidElevationBB.isEmpty()||this.expandExtent(a.metadata.lastValidElevationBB.bbMin,a.metadata.lastValidElevationBB.bbMax,d);var c=a.getBBMin(!1),b=a.getBBMax(!1);this.expandExtent(c,b,d);k.toRect(d,p);this.zmin=Math.min(this.zmin,d[2]);this.zmax=Math.max(this.zmax,d[5]);q.extent=p;q.spatialReference=this.spatialReference;this.emit("elevation-change",q);l.vec3.copy(a.metadata.lastValidElevationBB.bbMin,
c);l.vec3.copy(a.metadata.lastValidElevationBB.bbMax,b)}};b.prototype.computeLayerExtent=function(a){k.empty(d);var c=0;for(a=a.getObjects();c<a.length;c++){var b=a[c];this.expandExtent(b.getBBMin(!1),b.getBBMax(!1),d)}return d};b.prototype.expandExtent=function(a,c,b){for(var d=0;8>d;++d)e[0]=d&1?a[0]:c[0],e[1]=d&2?a[1]:c[1],e[2]=d&4?a[2]:c[2],this.renderCoordsHelper.fromRenderCoords(e,e,this.spatialReference),k.expand(b,e);return b};h([f.property({constructOnly:!0})],b.prototype,"layer",void 0);
h([f.property({constructOnly:!0})],b.prototype,"stageLayer",void 0);h([f.property({constructOnly:!0})],b.prototype,"view",void 0);h([f.property({readOnly:!0,aliasOf:"view.spatialReference"})],b.prototype,"spatialReference",void 0);return b=h([f.subclass("esri.views.3d.layers.support.StageLayerElevationProvider")],b)}(f.declared(w.EventedMixin(v)));t.StageLayerElevationProvider=r;var d=k.empty(),p=A.empty(),q={spatialReference:null,extent:p,context:"scene"},e=g.vec3f64.create(),m=g.vec3f64.create(),
n=g.vec3f64.create()});