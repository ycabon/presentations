// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/perspectiveUtils ../../core/screenUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../core/libs/gl-matrix-2/factories/mat3f64 ../../core/libs/gl-matrix-2/math/vec2 ../../core/libs/gl-matrix-2/factories/vec2f64 ../../geometry/Point ../../geometry/Polygon ../../geometry/projection ./GeoreferenceBase".split(" "),function(h,n,p,k,f,y,z,q,r,t,u,g,v,w,x){const l=
u.create();f=class extends x{constructor(a){super(a);this.topRight=this.topLeft=this.bottomRight=this.bottomLeft=null;this.type="corners"}get coords(){let {topLeft:a,topRight:b,bottomLeft:c,bottomRight:d}=this;if(null==a||null==b||null==c||null==d)return null;const e=a.spatialReference;b=this.projectOrWarn(b,e);c=this.projectOrWarn(c,e);d=this.projectOrWarn(d,e);return null==b||null==c||null==d?null:new v({rings:[[[c.x,c.y],[a.x,a.y],[b.x,b.y],[d.x,d.y],[c.x,c.y]]],spatialReference:e})}set coords(a){var {topLeft:b}=
this;if(null!=b&&(b=b.spatialReference,a=this.projectOrWarn(a,b),null!=a)){var {rings:[[c,d,e,m]]}=a;this.bottomLeft=new g({x:c[0],y:c[1],spatialReference:b});this.topLeft=new g({x:d[0],y:d[1],spatialReference:b});this.topRight=new g({x:e[0],y:e[1],spatialReference:b});this.bottomRight=new g({x:m[0],y:m[1],spatialReference:b})}}toSourceNormalized(a){const {topLeft:b,topRight:c,bottomRight:d,bottomLeft:e}=this;if(null==a||null==b||null==c||null==d||null==e)return null;const m=b.spatialReference;a=
a.normalize();a=w.projectOrLoad(a,m).geometry;if(null==a)return null;t.set(l,a.x,a.y);a=n.getProjectiveTransform(r.create(),[b.x,b.y,e.x,e.y,c.x,c.y,d.x,d.y],[0,0,0,1,1,0,1,1]);n.transformProjective(l,l,a);return p.createScreenPoint(l[0],l[1])}};h.__decorate([k.property()],f.prototype,"coords",null);h.__decorate([k.property({type:g})],f.prototype,"bottomLeft",void 0);h.__decorate([k.property({type:g})],f.prototype,"bottomRight",void 0);h.__decorate([k.property({type:g})],f.prototype,"topLeft",void 0);
h.__decorate([k.property({type:g})],f.prototype,"topRight",void 0);return f=h.__decorate([q.subclass("esri.layers.support.CornersGeoreference")],f)});