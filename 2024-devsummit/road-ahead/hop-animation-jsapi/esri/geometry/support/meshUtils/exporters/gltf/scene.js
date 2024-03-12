// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){class c{constructor(){this.name="";this._nodes=[]}addNode(a){if(this._nodes.includes(a))throw Error("Node already added");this._nodes.push(a)}forEachNode(a){this._nodes.forEach(a)}}b.Scene=c;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});