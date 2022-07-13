import { iX as h, r, F as has } from './_virtual_index-fc1e0009.js';
import { _ } from './georeference-8b2e9136.js';
import './mat4f64-2ebd3575.js';
import './axisAngleDegrees-1fee8123.js';
import './quat-92534261.js';
import './quatf64-808fd6fd.js';
import './BufferView-1591d5ec.js';
import './vec33-5a0f7743.js';
import './projection-04d5ffcd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class n{async createIndex(r$1,n){const o=new Array;if(!r$1.vertexAttributes||!r$1.vertexAttributes.position)return new h;const s=this._createMeshData(r$1),a=r(n)?await n.invoke("createIndexThread",s,{transferList:o}):this.createIndexThread(s).result;return this._createPooledRBush().fromJSON(a)}createIndexThread(e){const t=new Float64Array(e.position),r=this._createPooledRBush();return e.components?this._createIndexComponentsThread(r,t,e.components.map((e=>new Uint32Array(e)))):this._createIndexAllThread(r,t)}_createIndexAllThread(e,t){const r=new Array(t.length/9);let n=0;for(let s=0;s<t.length;s+=9)r[n++]=o(t,s+0,s+3,s+6);return e.load(r),{result:e.toJSON()}}_createIndexComponentsThread(e,t,r){let n=0;for(const o of r)n+=o.length/3;const s=new Array(n);let a=0;for(const i of r)for(let e=0;e<i.length;e+=3)s[a++]=o(t,3*i[e+0],3*i[e+1],3*i[e+2]);return e.load(s),{result:e.toJSON()}}_createMeshData(e){const t=(e.transform?_({position:e.vertexAttributes.position,normal:null,tangent:null},e.transform,e.spatialReference).position:e.vertexAttributes.position).buffer;return !e.components||e.components.some((e=>!e.faces))?{position:t}:{position:t,components:e.components.map((e=>e.faces))}}_createPooledRBush(){return new h(9,has("esri-csp-restrictions")?e=>e:[".minX",".minY",".maxX",".maxY"])}}function o(e,t,r,n){return {minX:Math.min(e[t+0],e[r+0],e[n+0]),maxX:Math.max(e[t+0],e[r+0],e[n+0]),minY:Math.min(e[t+1],e[r+1],e[n+1]),maxY:Math.max(e[t+1],e[r+1],e[n+1]),p0:[e[t+0],e[t+1],e[t+2]],p1:[e[r+0],e[r+1],e[r+2]],p2:[e[n+0],e[n+1],e[n+2]]}}

export { n as default };
