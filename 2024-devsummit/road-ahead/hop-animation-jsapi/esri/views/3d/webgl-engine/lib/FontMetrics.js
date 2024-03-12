// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./TextHelperCanvas"],function(d,g){const e=new Map;class h{get maxHeight(){return this.maxAscent+this.maxDescent}constructor(a,b){this.maxAscent=a;this.maxDescent=b}}const k={canvas:null},l=(()=>{let a="";for(let b=32;127>b;b++)a+=String.fromCharCode(b);return a})();d.getFontMetrics=function(a){const {size:b}=a.definition,f=a.fontString(b);var c=e.get(f);c||(c=g.getTextHelperCanvas(k,0,0).getContext("2d"),a.setFontProperties(c,b),a=c.measureText(l),c=new h(a.actualBoundingBoxAscent,
a.actualBoundingBoxDescent),e.set(f,c));return c};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});