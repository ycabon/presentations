// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./BufferRange"],function(a,b){class c extends b.BufferRange{constructor(d,e,f){super(e,f);this.geometry=d}get isVisible(){return this.geometry.visible}get hasHighlights(){return null!=this.geometry.highlights&&this.isVisible}get hasOccludees(){return null!=this.geometry.occludees}}a.Instance=c;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});