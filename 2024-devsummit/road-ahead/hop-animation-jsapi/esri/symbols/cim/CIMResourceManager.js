// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["../../core/fontUtils","../../core/imageUtils"],function(d,e){class f{constructor(){this._resourceMap=new Map;this._inFlightResourceMap=new Map;this.geometryEnginePromise=this.geometryEngine=null}destroy(){this._inFlightResourceMap.clear();this._resourceMap.clear()}getResource(a){return this._resourceMap.get(a)??null}async fetchResource(a,g){var b=this._resourceMap.get(a);if(b)return{width:b.width,height:b.height};if(b=this._inFlightResourceMap.get(a))return b.then(c=>({width:c.width,height:c.height}));
b=e.getImageData(a,g);this._inFlightResourceMap.set(a,b);return b.then(c=>{this._inFlightResourceMap.delete(a);this._resourceMap.set(a,c);return{width:c.width,height:c.height}},()=>({width:0,height:0}))}deleteResource(a){this._inFlightResourceMap.delete(a);this._resourceMap.delete(a)}loadFont(a){return d.loadFont(a)}}return f});