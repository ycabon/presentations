// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/arrayUtils"],function(b,c){class d{constructor(){this.copyright="";this.defaultScene=0;this.generator="";this._scenes=[]}addScene(a){if(this._scenes.includes(a))throw Error("Scene already added");this._scenes.push(a)}removeScene(a){c.remove(this._scenes,a)}forEachScene(a){this._scenes.forEach(a)}}b.Asset=d;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});