// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../../symbols/cim/utils"],function(c,h){class k{constructor(a){const {offsetX:d,offsetY:e,postAngle:f,fontSize:g,transforms:b}=a;this.offsetX=d;this.offsetY=e;this.postAngle=f;this.fontSize=g;(this.transforms=b)&&1<b.infos.length&&(a=h.applyParentTransform(g,f,!1,d,e,b),this.fontSize=a.size,this.postAngle=a.rotation,this.offsetX=a.offsetX,this.offsetY=a.offsetY)}}c.TextMeshTransformProps=k;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});