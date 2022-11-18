/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function n(n,t){for(var e=0;e<t.length;e++){const r=t[e];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in n)){const e=Object.getOwnPropertyDescriptor(r,t);e&&Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:()=>r[t]});}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var t,e,r,o={exports:{}};t=o,e=function(){function n(n){const e=n.locateFile,r={};var o=void 0!==o?o:{};const i=(()=>{let n;return {resolve:t=>n(t),promise:new Promise((t=>n=t))}})(),a=()=>i.promise;o.locateFile=e,o.onRuntimeInitialized=()=>{i.resolve(r);},r.Module=o,r.whenLoaded=a;var u,s={};for(u in o)o.hasOwnProperty(u)&&(s[u]=o[u]);var f,c,l,p,m,h="object"==typeof window,d="function"==typeof importScripts,y="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,g="";function v(n){return o.locateFile?o.locateFile(n,g):g+n}y?(g=d?require("path").dirname(g)+"/":__dirname+"/",f=function(n,t){return p||(p=require("fs")),m||(m=require("path")),n=m.normalize(n),p.readFileSync(n,t?null:"utf8")},l=function(n){var t=f(n,!0);return t.buffer||(t=new Uint8Array(t)),T(t.buffer),t},c=function(n,t,e){p||(p=require("fs")),m||(m=require("path")),n=m.normalize(n),p.readFile(n,(function(n,r){n?e(n):t(r.buffer);}));},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),t.exports=o,process.on("uncaughtException",(function(n){if(!(n instanceof Pn))throw n})),process.on("unhandledRejection",Q),o.inspect=function(){return "[Emscripten Module object]"}):(h||d)&&(d?g=self.location.href:"undefined"!=typeof document&&document.currentScript&&(g=document.currentScript.src),g=0!==g.indexOf("blob:")?g.substr(0,g.lastIndexOf("/")+1):"",f=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.send(null),t.responseText},d&&(l=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),c=function(n,t,e){var r=new XMLHttpRequest;r.open("GET",n,!0),r.responseType="arraybuffer",r.onload=function(){200==r.status||0==r.status&&r.response?t(r.response):e();},r.onerror=e,r.send(null);});var w=o.print||console.log.bind(console),b=o.printErr||console.warn.bind(console);for(u in s)s.hasOwnProperty(u)&&(o[u]=s[u]);s=null,o.arguments&&o.arguments,o.thisProgram&&o.thisProgram,o.quit&&o.quit;var A,_,E=0,R=function(n){E=n;},P=function(){return E};o.wasmBinary&&(A=o.wasmBinary),o.noExitRuntime,"object"!=typeof WebAssembly&&Q("no native wasm support detected");var S=!1;function T(n,t){n||Q("Assertion failed: "+t);}var j,x,I,H,M="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function F(n,t,e){for(var r=t+e,o=t;n[o]&&!(o>=r);)++o;if(o-t>16&&n.subarray&&M)return M.decode(n.subarray(t,o));for(var i="";t<o;){var a=n[t++];if(128&a){var u=63&n[t++];if(192!=(224&a)){var s=63&n[t++];if((a=224==(240&a)?(15&a)<<12|u<<6|s:(7&a)<<18|u<<12|s<<6|63&n[t++])<65536)i+=String.fromCharCode(a);else {var f=a-65536;i+=String.fromCharCode(55296|f>>10,56320|1023&f);}}else i+=String.fromCharCode((31&a)<<6|u);}else i+=String.fromCharCode(a);}return i}function q(n,t){return n?F(x,n,t):""}function C(n,t){return n%t>0&&(n+=t-n%t),n}function O(n){j=n,o.HEAP8=new Int8Array(n),o.HEAP16=new Int16Array(n),o.HEAP32=I=new Int32Array(n),o.HEAPU8=x=new Uint8Array(n),o.HEAPU16=new Uint16Array(n),o.HEAPU32=new Uint32Array(n),o.HEAPF32=new Float32Array(n),o.HEAPF64=new Float64Array(n);}o.INITIAL_MEMORY;var W=[],U=[],L=[];function k(){if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)z(o.preRun.shift());on(W);}function B(){on(U);}function D(){if(o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;)G(o.postRun.shift());on(L);}function z(n){W.unshift(n);}function N(n){U.unshift(n);}function G(n){L.unshift(n);}var X=0,Y=null;function J(n){X++,o.monitorRunDependencies&&o.monitorRunDependencies(X);}function K(n){if(X--,o.monitorRunDependencies&&o.monitorRunDependencies(X),0==X&&Y){var t=Y;Y=null,t();}}function Q(n){throw o.onAbort&&o.onAbort(n),b(n+=""),S=!0,n="abort("+n+"). Build with -s ASSERTIONS=1 for more info.",new WebAssembly.RuntimeError(n)}o.preloadedImages={},o.preloadedAudios={};var V,Z="data:application/octet-stream;base64,";function $(n){return n.startsWith(Z)}function nn(n){return n.startsWith("file://")}function tn(n){try{if(n==V&&A)return new Uint8Array(A);if(l)return l(n);throw "both async and sync fetching of the wasm failed"}catch(b){Q(b);}}function en(){if(!A&&(h||d)){if("function"==typeof fetch&&!nn(V))return fetch(V,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw "failed to load wasm binary file at '"+V+"'";return n.arrayBuffer()})).catch((function(){return tn(V)}));if(c)return new Promise((function(n,t){c(V,(function(t){n(new Uint8Array(t));}),t);}))}return Promise.resolve().then((function(){return tn(V)}))}function rn(){var n={a:hn};function t(n,t){var e=n.exports;o.asm=e,O((_=o.asm.m).buffer),H=o.asm.q,N(o.asm.n),K();}function e(n){t(n.instance);}function r(t){return en().then((function(t){return WebAssembly.instantiate(t,n)})).then(t,(function(n){b("failed to asynchronously prepare wasm: "+n),Q(n);}))}function i(){return A||"function"!=typeof WebAssembly.instantiateStreaming||$(V)||nn(V)||"function"!=typeof fetch?r(e):fetch(V,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,n).then(e,(function(n){return b("wasm streaming compile failed: "+n),b("falling back to ArrayBuffer instantiation"),r(e)}))}))}if(J(),o.instantiateWasm)try{return o.instantiateWasm(n,t)}catch(a){return b("Module.instantiateWasm callback failed with error: "+a),!1}return i(),{}}function on(n){for(;n.length>0;){var t=n.shift();if("function"!=typeof t){var e=t.func;"number"==typeof e?void 0===t.arg?H.get(e)():H.get(e)(t.arg):e(void 0===t.arg?null:t.arg);}else t(o);}}function an(){throw "longjmp"}function un(n,t,e){x.copyWithin(n,t,t+e);}function sn(n){try{return _.grow(n-j.byteLength+65535>>>16),O(_.buffer),1}catch(t){}}function fn(n){var t=x.length,e=2147483648;if((n>>>=0)>e)return !1;for(var r=1;r<=4;r*=2){var o=t*(1+.2/r);if(o=Math.min(o,n+100663296),sn(Math.min(e,C(Math.max(n,o),65536))))return !0}return !1}$(V="libtess.wasm")||(V=v(V));var cn={mappings:{},buffers:[null,[],[]],printChar:function(n,t){var e=cn.buffers[n];0===t||10===t?((1===n?w:b)(F(e,0)),e.length=0):e.push(t);},varargs:void 0,get:function(){return cn.varargs+=4,I[cn.varargs-4>>2]},getStr:function(n){return q(n)},get64:function(n,t){return n}};function ln(n,t,e,r){for(var o=0,i=0;i<e;i++){for(var a=I[t+8*i>>2],u=I[t+(8*i+4)>>2],s=0;s<u;s++)cn.printChar(n,x[a+s]);o+=u;}return I[r>>2]=o,0}function pn(){return P()}function mn(n){R(n);}var hn={h:an,l:un,g:fn,f:ln,b:pn,k:_n,d:An,j:En,i:Rn,e:bn,c:wn,a:mn};rn(),o.___wasm_call_ctors=function(){return (o.___wasm_call_ctors=o.asm.n).apply(null,arguments)},o._malloc=function(){return (o._malloc=o.asm.o).apply(null,arguments)},o._free=function(){return (o._free=o.asm.p).apply(null,arguments)},o._triangulate=function(){return (o._triangulate=o.asm.r).apply(null,arguments)};var dn,yn=o.stackSave=function(){return (yn=o.stackSave=o.asm.s).apply(null,arguments)},gn=o.stackRestore=function(){return (gn=o.stackRestore=o.asm.t).apply(null,arguments)},vn=o._setThrew=function(){return (vn=o._setThrew=o.asm.u).apply(null,arguments)};function wn(n,t,e){var r=yn();try{H.get(n)(t,e);}catch(o){if(gn(r),o!==o+0&&"longjmp"!==o)throw o;vn(1,0);}}function bn(n,t){var e=yn();try{H.get(n)(t);}catch(r){if(gn(e),r!==r+0&&"longjmp"!==r)throw r;vn(1,0);}}function An(n,t){var e=yn();try{return H.get(n)(t)}catch(r){if(gn(e),r!==r+0&&"longjmp"!==r)throw r;vn(1,0);}}function _n(n){var t=yn();try{return H.get(n)()}catch(e){if(gn(t),e!==e+0&&"longjmp"!==e)throw e;vn(1,0);}}function En(n,t,e){var r=yn();try{return H.get(n)(t,e)}catch(o){if(gn(r),o!==o+0&&"longjmp"!==o)throw o;vn(1,0);}}function Rn(n,t,e,r){var o=yn();try{return H.get(n)(t,e,r)}catch(i){if(gn(o),i!==i+0&&"longjmp"!==i)throw i;vn(1,0);}}function Pn(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n;}function Sn(n){function t(){dn||(dn=!0,o.calledRun=!0,S||(B(),o.onRuntimeInitialized&&o.onRuntimeInitialized(),D()));}X>0||(k(),X>0||(o.setStatus?(o.setStatus("Running..."),setTimeout((function(){setTimeout((function(){o.setStatus("");}),1),t();}),1)):t()));}if(Y=function n(){dn||Sn(),dn||(Y=n);},o.run=Sn,o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();Sn();let Tn=null,jn=null,xn=null,In=null;const Hn=r.Module,Mn=2,Fn=4e3;let qn=0;const Cn=(n,t,e)=>{Tn||(Tn=Hn._triangulate);let r=Hn.HEAPF32;const o=Hn.HEAP32.BYTES_PER_ELEMENT,i=2,a=r.BYTES_PER_ELEMENT;e>qn&&(qn=e,xn&&(Hn._free(xn),xn=0),jn&&(Hn._free(jn),jn=0)),xn||(xn=Hn._malloc(e*a)),In||(In=Hn._malloc(Fn*o));const u=e*Mn;jn||(jn=Hn._malloc(u*a)),r=Hn.HEAPF32,r.set(n,xn/a),Hn.HEAP32.set(t,In/o);const s=u/i,f=Tn(xn,In,Math.min(t.length,Fn),i,jn,s),c=f*i;r=Hn.HEAPF32;const l=r.slice(jn/a,jn/a+c),p={};return p.buffer=l,p.vertexCount=f,p};return r.triangulate=Cn,r.whenLoaded()}return {load:n}},void 0!==(r=e())&&(t.exports=r);const i=n({__proto__:null,default:o.exports},[o.exports]);

export { i as l };
