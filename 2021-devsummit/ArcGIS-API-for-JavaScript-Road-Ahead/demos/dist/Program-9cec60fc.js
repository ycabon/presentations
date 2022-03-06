import { t as t$1 } from './_virtual_index-2683c931.js';
import { t, b as r$1, c as o$1, d as e$2 } from './FramebufferObject-c19fef9d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var e$1=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var n$1=999,o=9999,i=0,s$1=1,c=2,d=3,f=4,p=5,u=6,l=7,h=8,y=9,g=10,w=11,m=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function k(){var t$1,k,b,v=0,_=0,x=n$1,j=[],E=[],O=1,L=0,D=0,G=!1,T=!1,X="";return function(t){return E=[],null!==t?P(t.replace?t.replace(/\r\n/g,"\n"):t):C()};function F(t){t.length&&E.push({type:m[x],data:t,position:D,line:O,column:L});}function P(e){var a;for(v=0,b=(X+=e).length;t$1=X[v],v<b;){switch(a=v,x){case i:v=$();break;case s$1:v=V();break;case c:v=M();break;case d:v=z();break;case f:v=Z();break;case w:v=W();break;case p:v=q();break;case o:v=B();break;case y:v=A();break;case n$1:v=S();}if(a!==v)switch(X[a]){case"\n":L=0,++O;break;default:++L;}}return _+=v,X=X.slice(v),E}function C(t){return j.length&&F(j.join("")),x=g,F("(eof)"),E}function S(){return j=j.length?[]:j,"/"===k&&"*"===t$1?(D=_+v-1,x=i,k=t$1,v+1):"/"===k&&"/"===t$1?(D=_+v-1,x=s$1,k=t$1,v+1):"#"===t$1?(x=c,D=_+v,v):/\s/.test(t$1)?(x=y,D=_+v,v):(G=/\d/.test(t$1),T=/[^\w_]/.test(t$1),D=_+v,x=G?f:T?d:o,v)}function A(){return /[^\s]/g.test(t$1)?(F(j.join("")),x=n$1,v):(j.push(t$1),k=t$1,v+1)}function M(){return "\r"!==t$1&&"\n"!==t$1||"\\"===k?(j.push(t$1),k=t$1,v+1):(F(j.join("")),x=n$1,v)}function V(){return M()}function $(){return "/"===t$1&&"*"===k?(j.push(t$1),F(j.join("")),x=n$1,v+1):(j.push(t$1),k=t$1,v+1)}function z(){if("."===k&&/\d/.test(t$1))return x=p,v;if("/"===k&&"*"===t$1)return x=i,v;if("/"===k&&"/"===t$1)return x=s$1,v;if("."===t$1&&j.length){for(;I(j););return x=p,v}if(";"===t$1||")"===t$1||"("===t$1){if(j.length)for(;I(j););return F(t$1),x=n$1,v+1}var e=2===j.length&&"="!==t$1;if(/[\w_\d\s]/.test(t$1)||e){for(;I(j););return x=n$1,v}return j.push(t$1),k=t$1,v+1}function I(t$1){for(var a,r,n=0;;){if(a=t.indexOf(t$1.slice(0,t$1.length+n).join("")),r=t[a],-1===a){if(n--+t$1.length>0)continue;r=t$1.slice(0,1).join("");}return F(r),D+=r.length,(j=j.slice(r.length)).length}}function W(){return /[^a-fA-F0-9]/.test(t$1)?(F(j.join("")),x=n$1,v):(j.push(t$1),k=t$1,v+1)}function Z(){return "."===t$1||/[eE]/.test(t$1)?(j.push(t$1),x=p,k=t$1,v+1):"x"===t$1&&1===j.length&&"0"===j[0]?(x=w,j.push(t$1),k=t$1,v+1):/[^\d]/.test(t$1)?(F(j.join("")),x=n$1,v):(j.push(t$1),k=t$1,v+1)}function q(){return "f"===t$1&&(j.push(t$1),k=t$1,v+=1),/[eE]/.test(t$1)||"-"===t$1&&/[eE]/.test(k)?(j.push(t$1),k=t$1,v+1):/[^\d]/.test(t$1)?(F(j.join("")),x=n$1,v):(j.push(t$1),k=t$1,v+1)}function B(){if(/[^\d\w_]/.test(t$1)){var e=j.join("");return x=r$1.indexOf(e)>-1?h:o$1.indexOf(e)>-1?l:u,F(j.join("")),x=n$1,v}return j.push(t$1),k=t$1,v+1}}function b(t){var e=k(),a=[];return a=(a=a.concat(e(t))).concat(e(null))}function v(t){return b(t)}function _(t){return t.map((t=>"eof"!==t.type?t.data:"")).join("")}const x=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];function j(t,e="100",a="300 es"){const r=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const n of t)if("preprocessor"===n.type){const t=r.exec(n.data);if(t){const r=t[1].replace(/\s\s+/g," ");if(r===a)return r;if(r===e)return n.data="#version "+a,e;throw new Error("unknown glsl version: "+r)}}return t.splice(0,0,{type:"preprocessor",data:"#version "+a},{type:"whitespace",data:"\n"}),null}function E(t,e){for(let a=e-1;a>=0;a--){const e=t[a];if("whitespace"!==e.type&&"block-comment"!==e.type){if("keyword"!==e.type)break;if("attribute"===e.data||"in"===e.data)return !0}}return !1}function O(t,e,a,r){r=r||a;for(const n of t)if("ident"===n.type&&n.data===a){r in e?e[r]++:e[r]=0;return O(t,e,r+"_"+e[r],r)}return a}function L(t,e,a="afterVersion"){function r(t,e){for(let a=e;a<t.length;a++){const e=t[a];if("operator"===e.type&&";"===e.data)return a}return null}function n(t){let e=-1,n=0,o=-1;for(let i=0;i<t.length;i++){const s=t[i];if("preprocessor"===s.type&&(s.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++n:s.data.match(/\#endif\s*.*/)&&--n),"afterVersion"!==a&&"afterPrecision"!==a||"preprocessor"===s.type&&/^#version/.test(s.data)&&(o=Math.max(o,i)),"afterPrecision"===a&&"keyword"===s.type&&"precision"===s.data){const e=r(t,i);if(null===e)throw new Error("precision statement not followed by any semicolons!");o=Math.max(o,e);}e<o&&0===n&&(e=i);}return e+1}const o={data:"\n",type:"whitespace"},i=e=>e<t.length&&/[^\r\n]$/.test(t[e].data);let s=n(t);i(s-1)&&t.splice(s++,0,o);for(const c of e)t.splice(s++,0,c);i(s-1)&&i(s)&&t.splice(s,0,o);}function D(t,e,a,r="lowp"){L(t,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"keyword",data:a},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision");}function G(t,e,a,r,n="lowp"){L(t,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:r.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:a},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision");}function T(t,e){let a,r,n=-1;for(let o=e;o<t.length;o++){const e=t[o];if("operator"===e.type&&("["===e.data&&(a=o),"]"===e.data)){r=o;break}"integer"===e.type&&(n=parseInt(e.data,10));}return a&&r&&t.splice(a,r-a+1),n}function X(e,a){const r=v(e);if("300 es"===j(r,"100","300 es"))throw new Error("shader is already glsl 300 es");let n=null,o=null;const i={},s={};for(let c=0;c<r.length;++c){const e=r[c];switch(e.type){case"keyword":"vertex"===a&&"attribute"===e.data?e.data="in":"varying"===e.data&&(e.data="vertex"===a?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(e.data.trim())&&(e.data=e.data.replace(/(2D|Cube|EXT)/g,"")),"fragment"===a&&"gl_FragColor"===e.data&&(n||(n=O(r,i,"fragColor"),D(r,n,"vec4")),e.data=n),"fragment"===a&&"gl_FragData"===e.data){const t=T(r,c+1),a=O(r,i,"fragData");G(r,a,"vec4",t,"mediump"),e.data=a;}else "fragment"===a&&"gl_FragDepthEXT"===e.data&&(o||(o=O(r,i,"gl_FragDepth")),e.data=o);break;case"ident":if(e$1.indexOf(e.data)>=0){if("vertex"===a&&E(r,c))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");e.data in s||(s[e.data]=O(r,i,e.data)),e.data=s[e.data];}}}for(let t=r.length-1;t>=0;--t){const e=r[t];if("preprocessor"===e.type){const a=e.data.match(/\#extension\s+(.*)\:/);if(a&&a[1]&&x.indexOf(a[1].trim())>=0){const e=r[t+1];r.splice(t,e&&"whitespace"===e.type?2:1);}const n=e.data.match(/\#ifdef\s+(.*)/);n&&n[1]&&x.indexOf(n[1].trim())>=0&&(e.data="#if 1");const o=e.data.match(/\#ifndef\s+(.*)/);o&&o[1]&&x.indexOf(o[1].trim())>=0&&(e.data="#if 0");}}return _(r)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class n{constructor(t,o,n,r,e={}){if(this._context=null,this._glName=null,this._locations={},this._initialized=!1,this._vShader=null,this._fShader=null,this._defines={},this._nameToUniformLocation={},this._nameToAttribLocation={},this._nameToUniform1={},this._nameToUniform1v={},this._nameToUniform2={},this._nameToUniform3={},this._nameToUniform4={},this._nameToUniformMatrix3={},this._nameToUniformMatrix4={},t||console.error("RenderingContext isn't initialized!"),0===o.length&&console.error("Shaders source should not be empty!"),t.instanceCounter.increment(e$2.Program,this),this._context=t,this._vertexShaderSource=o,this._fragmentShaderSource=n,Array.isArray(e))for(const i of e)this._defines[i]="1";else this._defines=e;this._locations=r;}get glName(){return this._glName}get locations(){return this._locations}getDefine(t){return this._defines[t]}dispose(){if(!this._context)return;const t=this._context.gl;if(this._vShader){const i=this._vShader;t.deleteShader(i),this._vShader=null;}if(this._fShader){const i=this._fShader;t.deleteShader(i),this._fShader=null;}this._glName&&(t.deleteProgram(this._glName),this._glName=null),this._context.instanceCounter.decrement(e$2.Program,this),this._context=null;}initialize(){if(this._initialized)return;this._vShader=this._loadShader(35633),this._fShader=this._loadShader(35632),this._vShader&&this._fShader||console.error("Error loading shaders!");const t=this._context.gl,i=t.createProgram();t.attachShader(i,this._vShader),t.attachShader(i,this._fShader);for(const o in this._locations){const n=this._locations[o];t.bindAttribLocation(i,n,o);}t.linkProgram(i),this._glName=i,this._initialized=!0;}getUniformLocation(t){return this.initialize(),void 0===this._nameToUniformLocation[t]&&(this._nameToUniformLocation[t]=this._context.gl.getUniformLocation(this._glName,t)),this._nameToUniformLocation[t]}hasUniform(t){return null!==this.getUniformLocation(t)}getAttribLocation(t){return this.initialize(),void 0===this._nameToAttribLocation[t]&&(this._nameToAttribLocation[t]=this._context.gl.getAttribLocation(this._glName,t)),this._nameToAttribLocation[t]}setUniform1i(t,i){const o=this._nameToUniform1[t];if(void 0===o||i!==o){this._context.bindProgram(this);this._context.gl.uniform1i(this.getUniformLocation(t),i),this._nameToUniform1[t]=i;}}setUniform1iv(t,i){const o=this._nameToUniform1v[t];if(r(o,i)){this._context.bindProgram(this);this._context.gl.uniform1iv(this.getUniformLocation(t),i),void 0===o?this._nameToUniform1v[t]=n._arrayCopy(i):n._arrayAssign(i,o);}}setUniform2iv(t,i){const o=this._nameToUniform2[t];if(r(o,i)){this._context.bindProgram(this);this._context.gl.uniform2iv(this.getUniformLocation(t),i),void 0===o?this._nameToUniform2[t]=n._arrayCopy(i):n._arrayAssign(i,o);}}setUniform3iv(t,i){const o=this._nameToUniform3[t];if(r(o,i)){this._context.bindProgram(this);this._context.gl.uniform3iv(this.getUniformLocation(t),i),void 0===o?this._nameToUniform3[t]=n._arrayCopy(i):n._arrayAssign(i,o);}}setUniform4iv(t,i){const o=this._nameToUniform4[t];if(r(o,i)){this._context.bindProgram(this);this._context.gl.uniform4iv(this.getUniformLocation(t),i),void 0===o?this._nameToUniform4[t]=n._arrayCopy(i):n._arrayAssign(i,o);}}setUniform1f(t,i){const o=this._nameToUniform1[t];if(void 0===o||i!==o){this._context.bindProgram(this);this._context.gl.uniform1f(this.getUniformLocation(t),i),this._nameToUniform1[t]=i;}}setUniform1fv(t,i){const o=this._nameToUniform1v[t];if(r(o,i)){this._context.bindProgram(this);this._context.gl.uniform1fv(this.getUniformLocation(t),i),void 0===o?this._nameToUniform1v[t]=n._arrayCopy(i):n._arrayAssign(i,o);}}setUniform2f(t,i,o){const n=this._nameToUniform2[t];if(void 0===n||i!==n[0]||o!==n[1]){this._context.bindProgram(this);this._context.gl.uniform2f(this.getUniformLocation(t),i,o),void 0===n?this._nameToUniform2[t]=[i,o]:(n[0]=i,n[1]=o);}}setUniform2fv(t,i){const o=this._nameToUniform2[t];if(r(o,i)){this._context.bindProgram(this);this._context.gl.uniform2fv(this.getUniformLocation(t),i),void 0===o?this._nameToUniform2[t]=n._arrayCopy(i):n._arrayAssign(i,o);}}setUniform3f(t,i,o,n){const r=this._nameToUniform3[t];if(void 0===r||i!==r[0]||o!==r[1]||n!==r[2]){this._context.bindProgram(this);this._context.gl.uniform3f(this.getUniformLocation(t),i,o,n),void 0===r?this._nameToUniform3[t]=[i,o,n]:(r[0]=i,r[1]=o,r[2]=n);}}setUniform3fv(t,i){const o=this._nameToUniform3[t];if(r(o,i)){this._context.bindProgram(this);this._context.gl.uniform3fv(this.getUniformLocation(t),i),void 0===o?this._nameToUniform3[t]=n._arrayCopy(i):n._arrayAssign(i,o);}}setUniform4f(t,i,o,n,r){const e=this._nameToUniform4[t];if(void 0===e||i!==e[0]||o!==e[1]||n!==e[2]||r!==e[3]){this._context.bindProgram(this);this._context.gl.uniform4f(this.getUniformLocation(t),i,o,n,r),void 0===e?this._nameToUniform4[t]=[i,o,n,r]:(e[0]=i,e[1]=o,e[2]=n,e[3]=r);}}setUniform4fv(t,i){const o=this._nameToUniform4[t];if(r(o,i)){this._context.bindProgram(this);this._context.gl.uniform4fv(this.getUniformLocation(t),i),void 0===o?this._nameToUniform4[t]=n._arrayCopy(i):n._arrayAssign(i,o);}}setUniformMatrix3fv(t,i,o=!1){const r=this._nameToUniformMatrix3[t];if(e(r,i)){this._context.bindProgram(this);this._context.gl.uniformMatrix3fv(this.getUniformLocation(t),o,i),void 0===r?this._nameToUniformMatrix3[t]=n._arrayCopy(i):n._arrayAssign(i,r);}}setUniformMatrix4fv(t,i,o=!1){const r=this._nameToUniformMatrix4[t];if(s(r,i)){this._context.bindProgram(this);this._context.gl.uniformMatrix4fv(this.getUniformLocation(t),o,i),void 0===r?this._nameToUniformMatrix4[t]=n._arrayCopy(i):n._arrayAssign(i,r);}}assertCompatibleVertexAttributeLocations(t){const i=t.locations===this.locations;return i||console.error("VertexAttributeLocations are incompatible"),i}static _padToThree(t){let i=t.toString();return t<1e3&&(i=("  "+t).slice(-3)),i}_addLineNumbers(t){let i=2;return t.replace(/\n/g,(()=>"\n"+n._padToThree(i++)+":"))}_loadShader(t){const i=35633===t;let n=i?this._vertexShaderSource:this._fragmentShaderSource,r="";for(const o in this._defines)r+=`#define ${o} ${this._defines[o]}\n`;n=r+n,"webgl2"===this._context.contextVersion&&(n=X(n,i?"vertex":"fragment"));const e=this._context.gl,s=e.createShader(t);return e.shaderSource(s,n),e.compileShader(s),s}static _arrayCopy(t){const i=[];for(let o=0;o<t.length;++o)i.push(t[o]);return i}static _arrayAssign(t,i){for(let o=0;o<t.length;++o)i[o]=t[o];}}function r(i,o){if(t$1(i)||i.length!==o.length)return !0;for(let t=0;t<i.length;++t)if(i[t]!==o[t])return !0;return !1}function e(i,o){return !!t$1(i)||(9!==i.length?r(i,o):9!==i.length||i[0]!==o[0]||i[1]!==o[1]||i[2]!==o[2]||i[3]!==o[3]||i[4]!==o[4]||i[5]!==o[5]||i[6]!==o[6]||i[7]!==o[7]||i[8]!==o[8])}function s(i,o){return !!t$1(i)||(16!==i.length?r(i,o):16!==i.length||i[0]!==o[0]||i[1]!==o[1]||i[2]!==o[2]||i[3]!==o[3]||i[4]!==o[4]||i[5]!==o[5]||i[6]!==o[6]||i[7]!==o[7]||i[8]!==o[8]||i[9]!==o[9]||i[10]!==o[10]||i[11]!==o[11]||i[12]!==o[12]||i[13]!==o[13]||i[14]!==o[14]||i[15]!==o[15])}

export { n };