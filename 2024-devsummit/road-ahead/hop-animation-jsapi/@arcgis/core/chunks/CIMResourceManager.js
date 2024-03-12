/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{l as e}from"./fontUtils.js";import{g as t}from"./imageUtils.js";class i{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}getResource(e){return this._resourceMap.get(e)??null}async fetchResource(e,i){const s=this._resourceMap.get(e);if(s)return{width:s.width,height:s.height};let h=this._inFlightResourceMap.get(e);return h?h.then((e=>({width:e.width,height:e.height}))):(h=t(e,i),this._inFlightResourceMap.set(e,h),h.then((t=>(this._inFlightResourceMap.delete(e),this._resourceMap.set(e,t),{width:t.width,height:t.height})),(()=>({width:0,height:0}))))}deleteResource(e){this._inFlightResourceMap.delete(e),this._resourceMap.delete(e)}loadFont(t){return e(t)}}export{i as C};
