// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/libs/gl-matrix-2/mat4","../../../../../core/libs/gl-matrix-2/mat4f64"],function(a,b,d,e){Object.defineProperty(b,"__esModule",{value:!0});a=function(){return function(a,b,f,g,h,c,k){this.from=a;this.to=b;this.isHidden=f;this.highlightedIndexRanges=g;this.hasOccludees=h;this.transformation=c;this.instanceParameters=k;null!=c&&(this.transformationNormal=e.mat4f64.clone(c),d.mat4.invert(this.transformationNormal,this.transformationNormal),d.mat4.transpose(this.transformationNormal,
this.transformationNormal))}}();b.Instance=a});