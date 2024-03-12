// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(f){class g{constructor(a,b,c){this._scale=a;this._shift=b;this._levelShift=c}getLevelRowColumn(a){const b=this.getLevelShift(a[0]),c=this._shift+b;return c?[a[0]-b,a[1]>>c,a[2]>>c]:a}getLevelShift(a){return Math.min(a,this._levelShift)}getOffset(a,b){let c=0;var d=0;const e=this._shift+this.getLevelShift(a[0]);e&&(d=(1<<e)-1,b/=this._scale*(1<<e-1),c=(a[2]&d)*b,d=(a[1]&d)*b);return[c,d]}getScale(a){return this._scale*(1<<this._shift+this.getLevelShift(a))}}f.SchemaHelper=
g;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});