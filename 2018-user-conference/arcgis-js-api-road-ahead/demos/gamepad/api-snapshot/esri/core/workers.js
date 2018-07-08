// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
require({cache:{"esri/core/workers/workers":function(){define("require exports dojo/sniff dojo/promise/all ../Logger ../promiseUtils ./Connection ./RemoteClient ./WorkerOwner".split(" "),function(r,b,h,m,l,a,g,d,c){function e(){if(t)return t;for(var a=n+p,e=[],d=function(a){var f=c.create(a).then(function(f){return k[a]=f});e.push(f)},b=0;b<a;b++)d(b);return t=m(e).then(function(){})}Object.defineProperty(b,"__esModule",{value:!0});b.Connection=g;b.RemoteClient=d;(g=h("host-browser")?navigator.hardwareConcurrency:
0)||(g=h("safari")&&h("mac")||h("trident")?8:2);var n=h("esri-workers-debug")?1:Math.max(1,Math.ceil(g/2)),p=h("esri-workers-debug")?1:Math.max(1,Math.floor(g/2)),q=l.getLogger("esri.core.workers"),u=0,k=[];b.initialize=function(){e()};b.open=function(f,c,t){void 0===c&&(c={});if(Array.isArray(f))return new b.Connection(f.map(function(a){return new b.RemoteClient(a,c.client)}));if("string"!==typeof f){q.warn("workers-open:signature-deprecated","DEPRECATED: workers.open() changed signature.");var d=
f;f=c;c={client:d,strategy:t?"dedicated":"distributed"}}var l=c.strategy||"distributed";return"local"===l?a.create(function(a){r([f],function(f){a(b.RemoteClient.connect(f))})}).then(function(a){return new b.Connection([new b.RemoteClient(a,c.client)])}):e().then(function(){if("dedicated"===l){var e=n+u++;u%=p;return k[e].open(f).then(function(a){return new b.Connection([new b.RemoteClient(a,c.client)])})}return a.all(k.map(function(a){return a.open(f)})).then(function(a){return new b.Connection(a.map(function(a){return new b.RemoteClient(a,
c.client)}))})})};b.terminate=function(){for(var a=0;a<k.length;a++)k[a]&&k[a].terminate();k.length=0};var t})},"esri/core/workers/Connection":function(){define(["require","exports","../promiseUtils"],function(r,b,h){return function(){function b(b){this._clientIdx=0;this._clients=b}b.prototype.broadcast=function(b,a,g){for(var d=[],c=0,e=this._clients;c<e.length;c++)d.push(e[c].invoke(b,a,g));return d};b.prototype.close=function(){for(var b=0,a=this._clients;b<a.length;b++)a[b].close();this._clients=
[]};b.prototype.invoke=function(b,a,g,d){var c=d&&d.client;if(!this._clients||!this._clients.length)return h.reject(Error("Connection closed"));null!=c&&-1!==this._clients.indexOf(c)||this._clients.some(function(a){return a.isBusy()?!1:(c=a,!0)})||(this._clientIdx=(this._clientIdx+1)%this._clients.length,c=this._clients[this._clientIdx]);b=c.invoke(b,a,g);d&&(d.client=c);return b};b.prototype.openPorts=function(){return h.all(this._clients.map(function(b){return b.openPort()}))};return b}()})},"esri/core/workers/RemoteClient":function(){define("require exports dojo/Deferred ../Error ../promiseUtils ./utils".split(" "),
function(r,b,h,m,l,a){function g(a,k){a["delete"](k)}var d=a.MessageType.CLOSE,c=a.MessageType.CANCEL,e=a.MessageType.INVOKE,n=a.MessageType.RESPONSE,p=a.MessageType.OPEN_PORT,q=function(){function b(a){this._timer=null;this._cancelledJobIds=new Set;this._invokeMessages=[];this._invoke=a;this._timer=null;this._process=this._process.bind(this)}b.prototype.push=function(b){b.type===a.MessageType.CANCEL?this._cancelledJobIds.add(b.jobId):(this._invokeMessages.push(b),null===this._timer&&(this._timer=
setTimeout(this._process,0)))};b.prototype.clear=function(){this._invokeMessages.length=0;this._cancelledJobIds.clear();this._timer=null};b.prototype._process=function(){this._timer=null;for(var a=0,b=this._invokeMessages;a<b.length;a++){var f=b[a];this._cancelledJobIds.has(f.jobId)||this._invoke(f)}this._cancelledJobIds.clear();this._invokeMessages.length=0};return b}();return function(){function b(a,b,f){this._outJobs=new Map;this._inJobs=new Map;this._queue=new q(this._onInvoke.bind(this));this._onMessage=
this._onMessage.bind(this);this._client=b;this._port=a;this._port.addEventListener("message",this._onMessage);this._port.start();this._channel=f}b.connect=function(a){var c=new MessageChannel;a="function"===typeof a?new a:"default"in a&&"function"===typeof a.default?new a.default:a;a.remoteClient=new b(c.port1,a,c);return c.port2};b.prototype.close=function(){this._post({type:d});this._close()};b.prototype.isBusy=function(){return 0<this._outJobs.size};b.prototype.invoke=function(b,d,f){var k=this,
t=a.newJobId(),n=new h(function(){g(k._outJobs,t);k._post({type:c,jobId:t})});this._outJobs.set(t,n);this._post({type:e,jobId:t,methodName:b},d,f);return n.promise};b.prototype.openPort=function(){var b=this,e=a.newJobId(),f=new h(function(){g(b._outJobs,e);b._post({type:c,jobId:e})});this._outJobs.set(e,f);this._post({type:p,jobId:e});return f.promise};b.prototype._close=function(){this._channel&&(this._channel=null);this._port.removeEventListener("message",this._onMessage);this._port.close();this._outJobs.forEach(function(a){a.cancel()});
this._inJobs.clear();this._outJobs.clear();this._queue.clear();this._port=this._client=null};b.prototype._onMessage=function(b){if(b=a.receiveMessage(b))switch(b.type){case n:this._onResponse(b);break;case e:this._queue.push(b);break;case c:this._onCancel(b);break;case d:this._close();break;case p:this._onOpenPort(b)}};b.prototype._onCancel=function(a){var b=this._inJobs,f=a.jobId,c=b.get(f);this._queue.push(a);c&&(g(b,f),c.cancel())};b.prototype._onInvoke=function(b){var c=this,f=b.methodName,e=
b.jobId;b=b.data;var d=this._inJobs,p=this._client,k=p[f],h;try{if(!k&&f&&-1!==f.indexOf("."))for(var q=f.split("."),v=0;v<q.length-1;v++)p=p[q[v]],k=p[q[v+1]];if("function"!==typeof k)throw new TypeError(f+" is not a function");h=k.call(p,b,this)}catch(z){this._post({type:n,jobId:e,error:a.toInvokeError(z)});return}l.isThenable(h)?(d.set(e,h),h.then(function(a){d.has(e)&&(g(d,e),c._post({type:n,jobId:e},a))}).catch(function(b){d.has(e)&&(g(d,e),b&&"cancel"===b.dojoType||c._post({type:n,jobId:e,error:a.toInvokeError(b||
{message:"Error encountered at method "+f})}))})):this._post({type:n,jobId:e},h)};b.prototype._onOpenPort=function(a){var c=new MessageChannel;new b(c.port1,this._client);this._post({type:n,jobId:a.jobId},c.port2,[c.port2])};b.prototype._onResponse=function(a){var b=a.jobId,c=a.error;a=a.data;var e=this._outJobs;if(e.has(b)){var d=e.get(b);g(e,b);c?d.reject(m.fromJSON(JSON.parse(c))):d.resolve(a)}};b.prototype._post=function(b,c,e){return a.postMessage(this._port,b,c,e)};return b}()})},"esri/core/workers/utils":function(){define(["require",
"exports","dojo/has"],function(r,b,h){function m(a){return a&&"object"===typeof a&&("result"in a||"transferList"in a)}Object.defineProperty(b,"__esModule",{value:!0});(function(a){a[a.HANDSHAKE=0]="HANDSHAKE";a[a.CONFIGURE=1]="CONFIGURE";a[a.CONFIGURED=2]="CONFIGURED";a[a.OPEN=3]="OPEN";a[a.OPENED=4]="OPENED";a[a.RESPONSE=5]="RESPONSE";a[a.INVOKE=6]="INVOKE";a[a.CANCEL=7]="CANCEL";a[a.CLOSE=8]="CLOSE";a[a.OPEN_PORT=9]="OPEN_PORT"})(b.MessageType||(b.MessageType={}));var l=0;b.newJobId=function(){return l++};
b.isTranferableResult=m;b.toInvokeError=function(a){return a?a.toJSON?JSON.stringify(a):JSON.stringify({name:a.name,message:a.message,details:a.details,stack:a.stack}):null};b.postMessage=function(a,b,d,c){2===arguments.length||void 0===d&&void 0===c?a.postMessage(b):(h("esri-workers-supports-transfer-arraybuffer")||(c?(c=c.filter(function(a){return!(a instanceof ArrayBuffer)}),c.length||(c=null)):m(d)&&d.transferList&&(d.transferList=d.transferList.filter(function(a){return!(a instanceof ArrayBuffer)}),
d.transferList.length||(d.transferList=null))),c?(b.data=d,a.postMessage(b,c)):m(d)?(b.data=d.result,d.transferList?a.postMessage(b,d.transferList):a.postMessage(b)):(b.data=d,a.postMessage(b)))};b.receiveMessage=function(a){return a?(a=a.data)?"string"===typeof a?JSON.parse(a):a:null:null}})},"esri/core/workers/WorkerOwner":function(){define("require exports dojo/Deferred ../../kernel ../Error ../Logger ../promiseUtils ./utils ./workerFactory".split(" "),function(r,b,h,m,l,a,g,d,c){var e=a.getLogger("esri.core.workers"),
n=d.MessageType.CANCEL,p=d.MessageType.INVOKE,q=d.MessageType.OPEN,u=d.MessageType.OPENED,k=d.MessageType.RESPONSE;return function(){function a(a,b){this._outJobs=new Map;this._inJobs=new Map;this.worker=a;this.id=b;a.addEventListener("message",this._onMessage.bind(this));a.addEventListener("error",function(a){a.preventDefault();e.error(a)})}a.create=function(b){return c.createWorker().then(function(c){return new a(c,b)})};a.prototype.terminate=function(){this.worker.terminate()};a.prototype.open=
function(a){var b=this,c=d.newJobId(),e=new h(function(a){b._outJobs["delete"](c);b._post({type:n,jobId:c})});this._outJobs.set(c,e);this._post({type:q,jobId:c,modulePath:a});return e.promise};a.prototype._onMessage=function(a){if(a=d.receiveMessage(a))switch(a.type){case u:case k:this._onResponse(a);break;case n:this._onCancel(a);break;case p:this._onInvoke(a)}};a.prototype._onCancel=function(a){(a=this._inJobs.get(a.jobId))&&a.cancel()};a.prototype._onInvoke=function(a){var b=this,c=a.methodName,
e=a.jobId;a=a.data;var f=this._inJobs,p=m.workerMessages[c],n;try{if("function"!==typeof p)throw new TypeError(c+" is not a function");n=p.call(null,a)}catch(v){this._post({type:k,jobId:e,error:d.toInvokeError(v)});return}g.isThenable(n)?(f.set(e,n),n.then(function(a){f["delete"](e);b._post({type:k,jobId:e},a)}).catch(function(a){f["delete"](e);a||(a={message:"Error encountered at method"+c});a.dojoType&&"cancel"===a.dojoType||b._post({type:k,jobId:e,error:d.toInvokeError(a)})})):this._post({type:k,
jobId:e},n)};a.prototype._onResponse=function(a){var b=a.jobId,c=a.error;a=a.data;var e=this._outJobs.get(b);e&&(this._outJobs["delete"](b),c?e.reject(l.fromJSON(JSON.parse(c))):e.resolve(a))};a.prototype._post=function(a,b,c){return d.postMessage(this.worker,a,b,c)};return a}()})},"esri/core/workers/workerFactory":function(){define("require exports ../tsSupport/assignHelper dojo/_base/kernel ../../config ../../request ../Logger ../promiseUtils ../sniff ../urlUtils ./loaderConfig ./utils ./WorkerFallback".split(" "),
function(r,b,h,m,l,a,g,d,c,e,n,p,q){function u(){return x?x:x=d.create(function(a){var b=new MessageChannel,e=b.port1,d=b.port2,n=function(b){c.add("esri-workers-supports-transfer-arraybuffer",Number(null!=b.data));e.removeEventListener("message",n);e.close();d.close();c("esri-workers-supports-transfer-arraybuffer")||w.warn("This browser doesn't support ArrayBuffer transfer.");a()};e.addEventListener("message",n);e.start();d.start();b=new ArrayBuffer(0);d.postMessage(b,[b])})}function k(a){return u().then(function(){return d.create(function(b){function e(f){if(f=
p.receiveMessage(f))switch(f.type){case B:f=a;var q=l.workers.loaderUrl||n.DEFAULT_LOADER_URL,g;null!=l["default"]?(g=h({},l),delete g["default"],g=JSON.parse(JSON.stringify(g))):g=JSON.parse(JSON.stringify(l));var k=l.workers.loaderConfig,k=n.default({baseUrl:k.baseUrl,locale:m.locale,has:h({"esri-cors":1,"dojo-test-sniff":0,"config-deferredInstrumentation":0,"host-webworker":1,"events-keypress-typed":0,"esri-workers-supports-transfer-arraybuffer":c("esri-workers-supports-transfer-arraybuffer")},
k.has),map:h({},k.map),paths:h({},k.paths),packages:k.packages||[]});f.postMessage({type:A,configure:{esriConfig:g,loaderUrl:q,loaderConfig:k}});break;case C:a.removeEventListener("message",e),a.removeEventListener("error",d),b(a)}}function d(b){b.preventDefault();a.removeEventListener("message",e);a.removeEventListener("error",d);w.warn("Failed to create Worker. Fallback to execute module in main thread",b);a=new q;a.addEventListener("message",e);a.addEventListener("error",d)}a.addEventListener("message",
e);a.addEventListener("error",d)})})}Object.defineProperty(b,"__esModule",{value:!0});var t=e.normalize(r.toUrl("./worker.js")),f=!e.hasSameOrigin(t,location.href),w=g.getLogger("esri.core.workers"),y=null,C=p.MessageType.CONFIGURED,A=p.MessageType.CONFIGURE,B=p.MessageType.HANDSHAKE,x=null;b.createWorker=function(){if(!c("esri-workers"))return k(new q);if(!f){var b=void 0;try{b=new Worker(t)}catch(z){w.warn("Failed to create Worker. Fallback to execute module in main thread",event),b=new q}return k(b)}y||
(y=a(t,{responseType:"text"}));return y.then(function(a){return new Worker(URL.createObjectURL(new Blob([a.data],{type:"text/javascript"})))}).catch(function(a){w.warn("Failed to create Worker. Fallback to execute module in main thread",a);return new q}).then(function(a){return k(a)})}})},"esri/core/workers/loaderConfig":function(){define(["require","exports","../tsSupport/assignHelper","dojo/has","../urlUtils"],function(r,b,h,m,l){Object.defineProperty(b,"__esModule",{value:!0});m=m("esri-built")?
"dojo/dojo-lite.js":"dojo/dojo.js";b.DEFAULT_LOADER_URL=l.makeAbsolute(l.removeQueryParameters(r.toUrl(m)));b.DEFAULT_CONFIG={baseUrl:function(){var a=l.removeQueryParameters(r.toUrl("dojo/x.js"));return l.makeAbsolute(a.slice(0,a.length-5))}(),packages:[{name:"esri"},{name:"dojo"},{name:"dojox"},{name:"dstore"},{name:"moment",main:"moment"},{name:"@dojo"},{name:"cldrjs",main:"dist/cldr"},{name:"globalize",main:"dist/globalize"},{name:"maquette",main:"dist/maquette.umd"},{name:"maquette-css-transitions",
main:"dist/maquette-css-transitions.umd"},{name:"maquette-jsx",main:"dist/maquette-jsx.umd"},{name:"tslib",main:"tslib"}],map:{globalize:{cldr:"cldrjs/dist/cldr","cldr/event":"cldrjs/dist/cldr/event","cldr/supplemental":"cldrjs/dist/cldr/supplemental","cldr/unresolved":"cldrjs/dist/cldr/unresolved"}}};b.default=function(a){var g={async:a.async,isDebug:a.isDebug,locale:a.locale,baseUrl:a.baseUrl,has:h({},a.has),map:h({},a.map),packages:a.packages&&a.packages.concat()||[],paths:h({},a.paths)};a.hasOwnProperty("async")||
(g.async=!0);a.hasOwnProperty("isDebug")||(g.isDebug=!1);a.baseUrl||(g.baseUrl=b.DEFAULT_CONFIG.baseUrl);b.DEFAULT_CONFIG.packages.forEach(function(a){a:{for(var b=g.packages,c=0;c<b.length;c++)if(b[c].name===a.name)break a;a=h({},a);c=l.removeQueryParameters(r.toUrl(a.name+"/x.js"));c=c.slice(0,c.length-5);a.location=l.makeAbsolute(c);b.push(a)}});a=g.map=g.map||{};for(var d=0,c=Object.keys(b.DEFAULT_CONFIG.map);d<c.length;d++){var e=c[d];a[e]||(a[e]=b.DEFAULT_CONFIG.map[e])}return g}})},"esri/core/workers/WorkerFallback":function(){define(["require",
"exports","dojo/has","../global","./utils"],function(r,b,h,m,l){var a=function(){return function(){var a=this,b=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach(function(c){a[c]=function(){for(var a=[],e=0;e<arguments.length;e++)a[e]=arguments[e];return b[c].apply(b,a)}})}}(),g=m.MutationObserver||m.WebKitMutationObserver,d=function(){var a;if(m.process&&m.process.nextTick)a=function(a){m.process.nextTick(a)};else if(m.Promise)a=function(a){m.Promise.resolve().then(a)};
else if(g){var b=[],d=document.createElement("div");(new g(function(){for(;0<b.length;)b.shift()()})).observe(d,{attributes:!0});a=function(a){b.push(a);d.setAttribute("queueStatus","1")}}return a}();return function(){function b(){this._dispatcher=new a;this._isInitialized=!1;this._workerPostMessage({type:l.MessageType.HANDSHAKE})}b.prototype.terminate=function(){};Object.defineProperty(b.prototype,"onmessage",{get:function(){return this._onmessageHandler},set:function(a){this._onmessageHandler&&
this.removeEventListener("message",this._onmessageHandler);(this._onmessageHandler=a)&&this.addEventListener("message",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"onerror",{get:function(){return this._onerrorHandler},set:function(a){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler);(this._onerrorHandler=a)&&this.addEventListener("error",a)},enumerable:!0,configurable:!0});b.prototype.postMessage=function(a,b){var c=this;d(function(){c._workerMessageHandler(new MessageEvent("message",
{data:a}))})};b.prototype.dispatchEvent=function(a){return this._dispatcher.dispatchEvent(a)};b.prototype.addEventListener=function(a,b,c){this._dispatcher.addEventListener(a,b,c)};b.prototype.removeEventListener=function(a,b,c){this._dispatcher.removeEventListener(a,b,c)};b.prototype._workerPostMessage=function(a,b){var c=this;d(function(){c.dispatchEvent(new MessageEvent("message",{data:a}))})};b.prototype._workerMessageHandler=function(a){var b=this;if(a=l.receiveMessage(a)){var c=a.jobId;switch(a.type){case l.MessageType.CONFIGURE:this._isInitialized||
this._workerPostMessage({type:l.MessageType.CONFIGURED});break;case l.MessageType.OPEN:r(["esri/core/workers/RemoteClient",a.modulePath],function(a,d){a=a.connect(d);b._workerPostMessage({type:l.MessageType.OPENED,jobId:c,data:a})})}}};return b}()})},"*noref":1}});define(["require","exports","./workers/workers"],function(r,b,h){Object.defineProperty(b,"__esModule",{value:!0});for(var m in h)b.hasOwnProperty(m)||(b[m]=h[m])});