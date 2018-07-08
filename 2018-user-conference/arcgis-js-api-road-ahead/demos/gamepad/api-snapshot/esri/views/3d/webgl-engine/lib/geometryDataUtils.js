// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(f,a){Object.defineProperty(a,"__esModule",{value:!0});var b=1,c=null;a.generateDefaultIndexArray=function(a){if(a>b||null==c){for(;a>b;)b*=2;c=new Uint32Array(b);for(var d=0;d<b;d++)c[d]=d}return new Uint32Array(c.buffer,0,a)};var e=0;a.getNewId=function(){return e++}});