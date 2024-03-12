// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){class e{constructor(){this._candidateTiles=[]}schedule(a){this._candidateTiles.includes(a)||this._candidateTiles.push(a)}reshuffle(a){const c=[];for(const d of this._candidateTiles)0<a?(d.reshuffle(),a--):c.push(d);this._candidateTiles=c}}b.TileReshuffleManager=e;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});