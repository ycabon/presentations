// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["./object"],function(e){function f(c,b){return c.replaceAll(/\$\{([^\s:\}]*)(?::([^\s:\}]+))?\}/g,(a,d)=>{if(""===d)return"$";a=e.getDeepValue(d,b);return(null==a?"":a).toString()})}class g{constructor(c,b,a){this.name=c;this.details=a;this.message=(b&&f(b,a))??""}toString(){return"["+this.name+"]: "+this.message}}return g});