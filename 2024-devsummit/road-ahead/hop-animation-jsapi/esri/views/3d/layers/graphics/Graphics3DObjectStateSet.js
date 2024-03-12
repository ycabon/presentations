// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../webgl-engine/lib/Object3DStateSet"],function(b,c){class d{constructor(a,e){this.stateType=a;this.objectIdField=e;this.objectStateSet=new c.Object3DStateSet;this.ids=new Set;this.paused=!1}hasGraphic(a){return this.objectIdField?this.ids.has(a.graphic.attributes[this.objectIdField]):this.ids.has(a.graphic.uid)}}b.Graphics3DObjectStateSet=d;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});