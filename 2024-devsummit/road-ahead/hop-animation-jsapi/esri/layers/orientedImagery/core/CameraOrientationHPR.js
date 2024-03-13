// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Clonable ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ./CameraOrientation".split(" "),function(b,a,m,c,A,B,C,n,p){a=class extends a.ClonableMixin(m.JSONSupportMixin(p)){constructor(){super(...arguments);this.type=1}get isAdvanced(){const {affineTransformations:f,focalLength:g,principalOffsetPoint:h,radialDistortionCoefficients:k,
tangentialDistortionCoefficients:l}=this;return 1<f?.length||!Number.isNaN(g)||1<h?.length||1<k?.length||1<l?.length}toString(){const {type:f,horizontalWKID:g,verticalWKID:h,x:k,y:l,z:q,heading:r,pitch:t,roll:u,affineTransformations:v,focalLength:w,principalOffsetPoint:x,radialDistortionCoefficients:y,tangentialDistortionCoefficients:z}=this,e=[f,g,h,k,l,q,r,t,u];this.isAdvanced&&(v?.forEach(d=>e.push(d)),e.push(w),x?.forEach(d=>e.push(d)),y?.forEach(d=>e.push(d)),z?.forEach(d=>e.push(d)));return e.map(d=>
Number.isNaN(d)?"":d).join("|")}};b.__decorate([c.property({json:{write:!0}})],a.prototype,"type",void 0);b.__decorate([c.property({type:[Number],json:{write:!0}})],a.prototype,"affineTransformations",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"focalLength",void 0);b.__decorate([c.property({type:[Number],json:{write:!0}})],a.prototype,"principalOffsetPoint",void 0);b.__decorate([c.property({type:[Number],json:{write:!0}})],a.prototype,"radialDistortionCoefficients",
void 0);b.__decorate([c.property({type:[Number],json:{write:!0}})],a.prototype,"tangentialDistortionCoefficients",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"heading",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"pitch",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"roll",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"horizontalWKID",void 0);b.__decorate([c.property({type:Number,
json:{write:!0}})],a.prototype,"verticalWKID",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"x",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"y",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"z",void 0);return a=b.__decorate([n.subclass("esri.layers.orientedImagery.core.CameraOrientationHPR")],a)});