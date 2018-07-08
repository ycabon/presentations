// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(h,k){return function(){function d(a){this._gridSize=a;this._origins={}}d.prototype.getOrigin=function(a){var c=this._gridSize,f=Math.round(a[0]/c),g=Math.round(a[1]/c);a=Math.round(a[2]/c);var c=""+d.ORIGIN_PREFIX+f+"/"+g+"/"+a,b=this._origins[c];if(!b){var b=this._gridSize,e=d.OFFSET,b={id:c,vec3:[f*b+e,g*b+e,a*b+e]};this._origins[c]=b}return b};d.ORIGIN_PREFIX="rg_";d.OFFSET=1.11;return d}()});