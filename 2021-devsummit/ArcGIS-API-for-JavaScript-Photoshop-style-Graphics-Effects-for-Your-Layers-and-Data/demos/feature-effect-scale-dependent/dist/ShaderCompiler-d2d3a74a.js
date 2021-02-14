import { o } from './VertexArrayObject-182c4e34.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n(e){let n="";for(const t in e){const o=e[t];if("boolean"==typeof o)o&&(n+=`#define ${t}\n`);else if("number"==typeof o)n+=`#define ${t} ${o.toFixed()}\n`;else if("object"==typeof o){const e=o.options;let r=0;for(const t in e)n+=`#define ${e[t]} ${(r++).toFixed()}\n`;n+=`#define ${t} ${e[o.value]}\n`;}}return n}function t(n,t,o$1,r){o$1=o$1||{},r=r||"";const f="function"==typeof t.shaders?t.shaders(o$1):t.shaders;return new o(n,r+f.vertexShader,r+f.fragmentShader,t.attributes)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class r{constructor(e){this.readFile=e;}resolveIncludes(e){return this.resolve(e)}resolve(e,t=new Map){if(t.has(e))return t.get(e);const r=this.read(e);if(!r)throw new Error(`cannot find shader file ${e}`);const s=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let n=s.exec(r);const l=[];for(;null!=n;)l.push({path:n[1],start:n.index,length:n[0].length}),n=s.exec(r);let a=0,h="";return l.forEach((e=>{h+=r.slice(a,e.start),h+=t.has(e.path)?"":this.resolve(e.path,t),a=e.start+e.length;})),h+=r.slice(a),t.set(e,h),h}read(e){return this.readFile(e)}}

export { n, r, t };
