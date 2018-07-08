// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define([],function(){var e=0,a=function(b,a){var f=e++;this.getFaces=function(){return b};this.getVertexAttr=function(){return a};this.getId=function(){return f};this.estimateGpuMemoryUsage=function(){var a=0,c;for(c in b){var d=3;b[c].indices.normal&&(d+=3);b[c].indices.uv0&&(d+=2);b[c].indices.color&&d++;a+=b[c].indices.position.length*d*4}return a}};a.getNewId=function(){return e++};a.AxisOrder={CG:0,GIS:1};return a});