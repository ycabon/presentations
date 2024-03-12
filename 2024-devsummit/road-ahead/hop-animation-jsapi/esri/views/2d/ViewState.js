// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../Viewpoint ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../core/libs/gl-matrix-2/math/common ../../core/libs/gl-matrix-2/math/mat2d ../../core/libs/gl-matrix-2/factories/mat2df32 ../../core/libs/gl-matrix-2/factories/mat2df64 ../../core/libs/gl-matrix-2/math/mat3 ../../core/libs/gl-matrix-2/factories/mat3f32 ../../core/libs/gl-matrix-2/math/vec2 ../../core/libs/gl-matrix-2/factories/vec2f32 ../../core/libs/gl-matrix-2/factories/vec2f64 ../../core/libs/gl-matrix-2/types/vec2 ../../geometry/support/normalizeUtils ./viewpointUtils ../../geometry/Extent ../../geometry/Point".split(" "),
function(p,h,y,D,r,L,M,N,E,F,t,G,v,q,w,g,z,H,u,I,k,J,K){var x;const d=[0,0];h=x=class extends D.JSONSupport{constructor(a){super(a);this._viewpoint2D={center:H.create(),rotation:0,scale:0,spatialReference:void 0};this.center=[0,0];this.extent=new J;this.id=0;this.inverseTransform=v.create();this.scale=this.rotation=this.resolution=0;this.transform=v.create();this.transformNoRotation=v.create();this.displayMat3=w.create();this.displayViewMat3=w.create();this.viewMat3=w.create();this.viewMat2d=G.create();
this.worldScreenWidth=0;this.size=[0,0]}set pixelRatio(a){this._set("pixelRatio",a);this._update()}set size(a){this._set("size",a);this._update()}set viewpoint(a){if(a){const b=this._viewpoint2D,c=a.targetGeometry;b.center[0]=c.x;b.center[1]=c.y;b.rotation=a.rotation;b.scale=a.scale;b.spatialReference=c.spatialReference}this._update()}copy(a){const b=this.size,c=this.viewpoint;c&&b?(this.viewpoint=k.copy(c,a.viewpoint),this._set("size",g.copy(b,a.size))):(this.viewpoint=a.viewpoint.clone(),this._set("size",
[a.size[0],a.size[1]]));this._set("pixelRatio",a.pixelRatio);return this}clone(){return new x({size:this.size,viewpoint:this.viewpoint.clone(),pixelRatio:this.pixelRatio})}toMap(a,b,c){if(u.isVec2(b))return g.transformMat2d(a,b,this.inverseTransform);d[0]=b;d[1]=c;return g.transformMat2d(a,d,this.inverseTransform)}toScreen(a,b,c){if(u.isVec2(b))return g.transformMat2d(a,b,this.transform);d[0]=b;d[1]=c;return g.transformMat2d(a,d,this.transform)}toScreenNoRotation(a,b,c){if(u.isVec2(b))return g.transformMat2d(a,
b,this.transformNoRotation);d[0]=b;d[1]=c;return g.transformMat2d(a,d,this.transformNoRotation)}toScreenClosest(a,b,c){u.isVec2(b)?(d[0]=b[0],d[1]=b[1]):(d[0]=b,d[1]=c);[b]=d;const {center:l,extent:m,spatialReference:e,transform:n}=this;if(b<m.xmin||b>m.xmax)d[0]=I.getClosestDenormalizedXToReference(b,l[0],e);return g.transformMat2d(a,d,n)}getScreenTransform(a,b){const {center:c}=this._viewpoint2D,l=this._get("pixelRatio")||1,m=this._get("size");k.getMatrix(a,c,m,b,0,l);return a}_update(){const {center:a,
spatialReference:b,scale:c,rotation:l}=this._viewpoint2D,m=this._get("pixelRatio")||1,e=this._get("size"),n=new y({targetGeometry:new K(a[0],a[1],b),scale:c,rotation:l});this._set("viewpoint",n);if(e&&b&&c){this.resolution=k.getResolution(n);this.rotation=l;this.scale=c;this.spatialReference=b;g.copy(this.center,a);q.set(this.displayMat3,0!==e[0]?2/e[0]:0,0,0,0,0!==e[1]?-2/e[1]:0,0,-1,1,1);var f=q.identity(this.viewMat3),A=z.fromValues(e[0]/2,e[1]/2),B=z.fromValues(-e[0]/2,-e[1]/2),C=F.toRadian(l);
q.translate(f,f,A);q.rotate(f,f,C);q.translate(f,f,B);q.multiply(this.displayViewMat3,this.displayMat3,f);f=t.fromTranslation(this.viewMat2d,A);t.rotate(f,f,C);t.translate(f,f,B);k.getExtent(this.extent,n,e);k.getTransform(this.transform,n,e,m);t.invert(this.inverseTransform,this.transform);k.getTransformNoRotation(this.transformNoRotation,n,e,m);this.worldScreenWidth=k.getWorldScreenWidth(this.spatialReference,this.resolution);this._set("id",this.id+1);return this}}};p.__decorate([r.property({readOnly:!0})],
h.prototype,"id",void 0);p.__decorate([r.property({value:1,json:{write:!0}})],h.prototype,"pixelRatio",null);p.__decorate([r.property({json:{write:!0}})],h.prototype,"size",null);p.__decorate([r.property()],h.prototype,"spatialReference",void 0);p.__decorate([r.property({type:y,json:{write:!0}})],h.prototype,"viewpoint",null);return h=x=p.__decorate([E.subclass("esri.views.2d.ViewState")],h)});