// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/lang ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ./Extent ./Geometry ./Point ./support/zmUtils".split(" "),function(f,x,k,e,L,G,H,I,J,y,z){function A(a){return(b,c)=>null==b?c:null==c?b:a(b,c)}var l;e=l=class extends J{constructor(...a){super(...a);this.points=[];this.type="multipoint"}normalizeCtorArgs(a,b){if(!a&&!b)return{};const c={};Array.isArray(a)?
(c.points=a,c.spatialReference=b):!a||"esri.geometry.SpatialReference"!==a.declaredClass&&null==a.wkid?(a.points&&(c.points=a.points),a.spatialReference&&(c.spatialReference=a.spatialReference),a.hasZ&&(c.hasZ=a.hasZ),a.hasM&&(c.hasM=a.hasM)):c.spatialReference=a;if(a=c.points?.[0])void 0===c.hasZ&&void 0===c.hasM?(c.hasZ=2<a.length,c.hasM=!1):void 0===c.hasZ?c.hasZ=3<a.length:void 0===c.hasM&&(c.hasM=3<a.length);return c}get cache(){this.commitProperty("points");this.commitProperty("hasZ");this.commitProperty("hasM");
this.commitProperty("spatialReference");return{}}get extent(){const a=this.points;if(!a.length)return null;const b=new I,c=this.hasZ,B=this.hasM,C=c?3:2;var d=a[0];const g=A(Math.min),h=A(Math.max);let [m,n]=d,[p,q]=d,r,t,u,v;for(let w=0,K=a.length;w<K;w++){d=a[w];const [D,E]=d;m=g(m,D);n=g(n,E);p=h(p,D);q=h(q,E);if(c&&2<d.length){const F=d[2];r=g(r,F);u=h(u,F)}B&&d.length>C&&(d=d[C],t=g(t,d),v=h(v,d))}b.xmin=m;b.ymin=n;b.xmax=p;b.ymax=q;b.spatialReference=this.spatialReference;c?(b.zmin=r,b.zmax=
u):(b.zmin=void 0,b.zmax=void 0);B?(b.mmin=t,b.mmax=v):(b.mmin=void 0,b.mmax=void 0);return b}writePoints(a,b){b.points=x.clone(this.points)}addPoint(a){z.updateSupportFromPoint(this,a);Array.isArray(a)?this.points.push(a):this.points.push(a.toArray());this.notifyChange("points");return this}clone(){const a={points:x.clone(this.points),spatialReference:this.spatialReference};this.hasZ&&(a.hasZ=!0);this.hasM&&(a.hasM=!0);return new l(a)}getPoint(a){if(!this._validateInputs(a))return null;a=this.points[a];
const b={x:a[0],y:a[1],spatialReference:this.spatialReference};let c=2;this.hasZ&&(b.z=a[2],c=3);this.hasM&&(b.m=a[c]);return new y(b)}removePoint(a){if(!this._validateInputs(a))return null;a=new y(this.points.splice(a,1)[0],this.spatialReference);this.notifyChange("points");return a}setPoint(a,b){if(!this._validateInputs(a))return this;z.updateSupportFromPoint(this,b);Array.isArray(b)||(b=b.toArray());this.points[a]=b;this.notifyChange("points");return this}toJSON(a){return this.write({},a)}_validateInputs(a){return null!=
a&&0<=a&&a<this.points.length}};f.__decorate([k.property({readOnly:!0})],e.prototype,"cache",null);f.__decorate([k.property()],e.prototype,"extent",null);f.__decorate([k.property({type:[[Number]],json:{write:{isRequired:!0}}})],e.prototype,"points",void 0);f.__decorate([H.writer("points")],e.prototype,"writePoints",null);e=l=f.__decorate([G.subclass("esri.geometry.Multipoint")],e);e.prototype.toJSON.isDefaultToJSON=!0;return e});