// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(e){e.getPow2NeighborKey=function(a,b,c,f){a=a.clone();const d=1<<a.level;b=a.col+b;c=a.row+c;f&&0>b?(a.col=b+d,--a.world):b>=d?(a.col=b-d,a.world+=1):a.col=b;a.row=c;return a};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});