//>>built
define(["../errors/RequestError","./watch","./handlers","./util","../has"],function(n,x,p,e,q){function y(a,b){var c=a.xhr;a.status=a.xhr.status;try{a.text=c.responseText}catch(d){}"xml"===a.options.handleAs&&(a.data=c.responseXML);var f;if(b)this.reject(b);else{try{p(a)}catch(d){f=d}e.checkStatus(c.status)?f?this.reject(f):this.resolve(a):(b=f?new n("Unable to load "+a.url+" status: "+c.status+" and an error in handleAs: transformation of response",a):new n("Unable to load "+a.url+" status: "+c.status,
a),this.reject(b))}}function z(a){return this.xhr.getResponseHeader(a)}function l(a,b,c){var f=b&&b.data&&b.data instanceof FormData,d=e.parseArgs(a,e.deepCreate(A,b),f);a=d.url;b=d.options;var B=!b.data&&"POST"!==b.method&&"PUT"!==b.method;10>=q("ie")&&(a=a.split("#")[0]);var r,h=e.deferred(d,u,v,C,y,function(){r&&r()}),g=d.xhr=l._create();if(!g)return h.cancel(new n("XHR was not created")),c?h:h.promise;d.getHeader=z;t&&(r=t(g,h,d));var p="undefined"===typeof b.data?null:b.data,D=!b.sync,E=b.method;
try{g.open(E,a,D,b.user||void 0,b.password||void 0);b.withCredentials&&(g.withCredentials=b.withCredentials);b.handleAs in w&&(g.responseType=w[b.handleAs]);var k=b.headers;a=f||B?!1:"application/x-www-form-urlencoded";if(k)for(var m in k)"content-type"===m.toLowerCase()?a=k[m]:k[m]&&g.setRequestHeader(m,k[m]);a&&!1!==a&&g.setRequestHeader("Content-Type",a);k&&"X-Requested-With"in k||g.setRequestHeader("X-Requested-With","XMLHttpRequest");e.notify&&e.notify.emit("send",d,h.promise.cancel);g.send(p)}catch(F){h.reject(F)}x(h);
g=null;return c?h:h.promise}q.add("dojo-force-activex-xhr",function(){return 0});var w={blob:"blob",document:"document",arraybuffer:"arraybuffer"},v,C,t,u;v=function(a){return!this.isFulfilled()};u=function(a,b){b.xhr.abort()};t=function(a,b,c){function f(a){b.handleResponse(c)}function d(a){a=new n("Unable to load "+c.url+" status: "+a.target.status,c);b.handleResponse(c,a)}function e(a){a.lengthComputable?(c.loaded=a.loaded,c.total=a.total,b.progress(c)):3===c.xhr.readyState&&(c.loaded="loaded"in
a?a.loaded:a.position,b.progress(c))}a.addEventListener("load",f,!1);a.addEventListener("error",d,!1);a.addEventListener("progress",e,!1);return function(){a.removeEventListener("load",f,!1);a.removeEventListener("error",d,!1);a.removeEventListener("progress",e,!1);a=null}};var A={data:null,query:null,sync:!1,method:"GET"};l._create=function(){throw Error("XMLHTTP not available");};q("dojo-force-activex-xhr")||(l._create=function(){return new XMLHttpRequest});e.addCommonMethods(l);return l});