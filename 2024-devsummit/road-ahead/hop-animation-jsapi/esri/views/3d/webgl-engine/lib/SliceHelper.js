// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["../../../../chunks/boundedPlane"],function(a){const b=a.create();class c{constructor(){this._plane=a.create()}get isEnabled(){return!a.equals(this.plane,b)}get plane(){return this._plane}set plane(d){a.copy(d||b,this._plane)}}return c});