// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){class d{get hovering(){return this.someManipulator(a=>a.hovering)}get grabbing(){return this.someManipulator(a=>a.grabbing)}get dragging(){return this.someManipulator(a=>a.dragging)}hasManipulator(a){return this.someManipulator(c=>c===a)}someManipulator(a){let c=!1;this.forEachManipulator(e=>{!c&&a(e)&&(c=!0)});return c}}b.ManipulatorType=void 0;(function(a){a[a.TRANSLATE_XY=0]="TRANSLATE_XY";a[a.SCALE=1]="SCALE";a[a.ROTATE=2]="ROTATE"})(b.ManipulatorType||(b.ManipulatorType=
{}));b.Manipulation=d;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});