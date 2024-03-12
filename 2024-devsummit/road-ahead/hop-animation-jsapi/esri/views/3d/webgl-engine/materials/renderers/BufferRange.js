// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(f){class g{constructor(a=0,d=0){this.from=a;this.to=d}get numElements(){return this.to-this.from}}f.BufferRange=g;f.mergeAdjacentRanges=function(a){const d=new Map;a.forAll(b=>d.set(b.from,b));for(var c=!0;c;){c=!1;for(let b=0;b<a.length;++b){c=a.data[b];const e=d.get(c.to);if(!e)return;c.to=e.to;d.delete(e.from);a.removeUnordered(e);c=!0}}};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});