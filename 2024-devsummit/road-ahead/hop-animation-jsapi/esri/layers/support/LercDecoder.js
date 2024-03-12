// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/workers/WorkerHandle"],function(e,g){class f extends g.WorkerHandle{constructor(a=null){super("LercWorker","_decode",{_decode:b=>[b.buffer]},a,{strategy:"dedicated"});this.schedule=a;this.ref=0}decode(a,b,d){return a&&0!==a.byteLength?this.invoke({buffer:a,options:b},d):Promise.resolve(null)}release(){0>=--this.ref&&(c.forEach((a,b)=>{a===this&&c.delete(b)}),this.destroy())}}const c=new Map;e.acquireDecoder=function(a=null){let b=c.get(a);b||(null!=a?(b=new f(d=>a.immediate.schedule(d)),
c.set(a,b)):(b=new f,c.set(null,b)));++b.ref;return b};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});