// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){c.getItem=function(d){return d["data-item"]};c.sortTablesToIds=function(d,e){d?.sort((a,b)=>{a=e.indexOf(a.uid);b=e.indexOf(b.uid);return a>b?-1:a<b?1:0})};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});