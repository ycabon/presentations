// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(function(){class a{constructor(b=1){this._seed=b}set seed(b){this._seed=null==b?Math.random()*a._m:b}getInt(){return this._seed=(a._a*this._seed+a._c)%a._m}getFloat(){return this.getInt()/(a._m-1)}getIntRange(b,c){return Math.round(this.getFloatRange(b,c))}getFloatRange(b,c){c-=b;const d=this.getInt()/a._m;return b+d*c}}a._m=2147483647;a._a=48271;a._c=0;return a});