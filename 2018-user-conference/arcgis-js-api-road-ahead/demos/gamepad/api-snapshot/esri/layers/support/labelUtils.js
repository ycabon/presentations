// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/_base/lang"],function(h,b,e){Object.defineProperty(b,"__esModule",{value:!0});var f=/__begin__/ig,g=/__end__/ig,c=/^__begin__/i,d=/__end__$/i;b.convertTemplatedStringToArcade=function(a){a?(a=e.replace(a,function(a,b){return'__begin__$feature["'+b+'"]__end__'}),a=c.test(a)?a.replace(c,""):'"'+a,a=d.test(a)?a.replace(d,""):a+'"',a=a.replace(f,'" + ').replace(g,' + "')):a='""';return a}});