// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports dojo/Deferred dojo/has!host-browser?./core/request/script dojo/has!host-webworker?./core/workers/request dojo/io-query dojo/_base/lang dojo/_base/url dojo/request/xhr ./config ./core/deferredUtils ./core/Error ./core/global ./core/lang ./core/promiseUtils ./core/sniff ./core/urlUtils".split(" "),function(R,ea,u,S,L,F,r,M,G,T,U,t,V,y,p,k,g){function W(a){var c=F.objectToQuery(a.content);c&&(a.url+=(-1===a.url.indexOf("?")?"?":"\x26")+c);if(!g.isDataProtocol(a.url)&&2E3<a.url.length)return p.reject(r.mixin(Error(),
{message:"When using responseType 'image', URL length cannot exceed 2000 characters."}));var b=new Image;a.allowImageDataAccess&&(b.crossOrigin=a.withCredentials?"use-credentials":"anonymous");var f=!1,d=new u(function(){f=!0;b.onload=b.onerror=b.onabort=null;b.src=""}),c=function(){b.onload=b.onerror=b.onabort=null;f||d.reject(Error("Unable to load the resource"))};b.onload=function(){b.onload=b.onerror=b.onabort=null;f||d.resolve(this)};b.onerror=c;b.onabort=c;b.alt="";b.src=a.url;return d.promise}
function H(a){a=new M(a);return(a.host+(a.port?":"+a.port:"")).toLowerCase()}function X(){return I?I:I=p.create(function(a){R(["./identity/IdentityManager"],a)}).then(function(a){l=a})}function Y(a,c){var b=!!a.useProxy,f=a.method||"auto",d=y.isDefined(a.crossOrigin)?a.crossOrigin:m.useCors;a=r.mixin({},a);a._ssl&&(a.url=a.url.replace(/^http:/i,"https:"));var e=a.content,q=a.url;a._token&&(a.content=a.content||{},a.content.token=a._token);var B=0,n;q&&(n=F.objectToQuery(e),B=n.length+q.length+1,k("esri-url-encodes-apostrophe")&&
(B=n.replace(/'/g,"%27").length+q.length+1));a.timeout=y.isDefined(a.timeout)?a.timeout:m.timeout;a.handleAs=a.handleAs||"json";try{var C=n=void 0,v=d&&g.canUseXhr(a.urlObj)&&!/https?:\/\/[^\/]+\/[^\/]+\/admin\/?(\/.*)?$/i.test(a.url),N=g.hasSameOrigin(a.urlObj,g.appUrl)||v,w="post"===f||!!a.body||B>m.maxUrlLength,h=!N&&-1!==a.handleAs.indexOf("json")&&a.callbackParamName&&!a.body,x=!!g.getProxyRule(a.url)||m.forceProxy||b||("image"!==a.handleAs||a.allowImageDataAccess)&&(!h||w)&&!N;x&&(g.isBlobProtocol(a.url)||
g.isDataProtocol(a.url))&&(x=!1);if((k("host-browser")||k("host-webworker"))&&x)if(n=g.getProxyUrl(q,d),C=n.path,n._xo&&(v=!0),!w&&C.length+1+B>m.maxUrlLength&&(w=!0),a.url=C+"?"+q,w)a.content=r.mixin(n.query||{},e);else{var O=F.objectToQuery(r.mixin(n.query||{},e));O&&(a.url+=(-1===q.indexOf("?")?"?":"\x26")+O);a.content=null}if(h&&!w&&!x&&k("host-browser"))return a=z?z(a):a,a.jsonp=a.callbackParamName,a.query=a.content,S.get(a.url,a);var A=a.headers;!k("host-browser")&&!k("host-webworker")||A&&
A.hasOwnProperty("X-Requested-With")||(A=a.headers=A||{},A["X-Requested-With"]=null);if(k("host-browser")&&c){var J=a.content&&a.content.token;J&&(c.set?c.set("token",J):c.append("token",J));a.contentType=!1}if(v&&!a.hasOwnProperty("withCredentials")&&"with-credentials"===m.useCors){var b=x?C:q,t=g.getCorsConfig(b);if(t&&t.hasOwnProperty("withCredentials"))t.withCredentials&&(a.withCredentials=!0);else if(l){var p=l.findServerInfo(b);p&&p.webTierAuth&&(a.withCredentials=!0)}}a=z?z(a):a;if("image"===
a.handleAs)return W(a);if(w)return a.body?(a.data=c||a.body,a.query=a.content):a.data=a.content,delete a.body,delete a.content,!x&&k("safari")&&(a.url+=(-1===a.url.indexOf("?")?"?":"\x26")+"_ts\x3d"+(new Date).getTime()+Z++),G.post(a.url,a);a.query=a.content;delete a.content;return G.get(a.url,a)}catch(aa){return a=new u,a.reject(aa),a.promise}}function ba(a){var c=m.corsStatus;try{var b=H(a.url);if(m.corsDetection&&m.useCors&&k("esri-cors")&&a.url&&-1!==a.url.toLowerCase().indexOf("/rest/services")&&
!g.hasSameOrigin(a.urlObj,g.appUrl)&&!g.canUseXhr(a.urlObj)){if(c[b])return c[b];var f=new u;c[b]=f.promise;var d=a.url.substring(0,a.url.toLowerCase().indexOf("/rest/")+6)+"info";G.get(d,{query:{f:"json"},handleAs:"json",headers:{"X-Requested-With":null},timeout:1E3*m.corsDetectionTimeout}).then(function(c){c?(g.canUseXhr(a.url)||m.corsEnabledServers.push(b),f.resolve()):f.reject()},function(a){f.reject()});return f.promise}}catch(e){console.log("esri._detectCors: an unknown error occurred while detecting CORS support")}return ca}
function D(a,c,b,f){function d(a){a._pendingDfd=Y(b,n);var c=!!a._pendingDfd.response;(a._pendingDfd.response||a._pendingDfd).then(function(a){if(!c||!a.data)return a;var b=a.getHeader("Content-Type");if(b&&(b=b.toLowerCase(),-1===b.indexOf("text/plain")&&-1===b.indexOf("application/json")))return a;b=a.data;if(b instanceof ArrayBuffer&&750>=b.byteLength)b=new Blob([b]);else if(!(b instanceof Blob&&750>=b.size))return a;var h=new u,d=new FileReader;d.readAsText(b);d.onloadend=function(){if(!d.error)try{var b=
JSON.parse(d.result);b.error&&(Object.isExtensible(a)||(a=r.mixin({},a)),a._jsonData=b)}catch(fa){}h.resolve(a)};return h.promise}).then(function(b){var d=c?b.data:b,h=c?b.getHeader.bind(b):P;if(d&&(b=c&&b._jsonData||d,b.error||"error"===b.status))throw d=r.mixin(Error(),b.error||b),d.getHeader=h,d;a.resolve({data:d,url:f.url,requestOptions:f.requestOptions,getHeader:h});a._pendingDfd=null}).catch(function(c){var d,e,h;c&&(d=Number(c.code),e=c.hasOwnProperty("subcode")?Number(c.subcode):null,h=(h=
c.messageCode)&&h.toUpperCase());if(c&&403===d&&(4===e||c.message&&-1<c.message.toLowerCase().indexOf("ssl")&&-1===c.message.toLowerCase().indexOf("permission"))){if(!b._ssl){b._ssl=b._sslFromServer=!0;D(a,!0,b,f);return}}else if(c&&415===c.status){if(d=b.url,e=m.corsStatus,h=g.getCorsConfig(d,!0),-1<h&&m.corsEnabledServers.splice(h,1),h=new u,h.reject(new t("disabled")),e[H(d)]=h.promise,!b._err415){b._err415=1;D(a,!0,b,f);return}}else if(q&&"no-prompt"!==b.authMode&&l._errorCodes&&-1!==l._errorCodes.indexOf(d)&&
!l._isPublic(b.url)&&(403!==d||Q&&-1===Q.indexOf(h)&&(!y.isDefined(e)||2===e&&b._token))){da(a,b,f,E("request:server",c,f));return}a.reject(E("request:server",c,f));a._pendingDfd=null})}var e=b.body,q=b.useIdentity,k,n=null,p=e instanceof FormData;if(p||e&&e.elements)n=p?e:new FormData(e);var v=!!(-1!==b.url.toLowerCase().indexOf("token\x3d")||b.content&&b.content.token||n&&n.get&&n.get("token")||e&&e.elements&&e.elements.token);c||(!q||v||b._token||l._isPublic(b.url)||(c=function(a){a&&(b._token=
a.token,b._ssl=a.ssl)},"immediate"===b.authMode?k=l.getCredential(b.url).then(c):"no-prompt"===b.authMode?k=l.checkSignInStatus(b.url).then(c).catch(function(){}):c(l.findCredential(b.url))),a.then(function(a){if((/\/sharing\/rest\/accounts\/self/i.test(b.url)||/\/sharing\/rest\/portals\/self/i.test(b.url))&&!v&&!b._token&&a.user&&a.user.username){var c=m.corsEnabledServers,d=g.getCorsConfig(b.url,!0),e={host:H(b.url),withCredentials:!0};if(-1===d)c.push(e);else{var f=c[d];f instanceof RegExp?(e.host=
f,c.splice(d,1,e)):"object"===typeof f?f.withCredentials=!0:c.splice(d,1,e)}}if(c=b._credential)d=(d=l.findServerInfo(c.server))&&d.owningSystemUrl,e=void 0,d&&(d=d.replace(/\/?$/,"/sharing"),(e=l.findCredential(d,c.userId))&&-1===l._getIdenticalSvcIdx(d,e)&&e.resources.splice(0,0,d));return a}).always(function(a){delete b._credential;if(a){var c=!!b._ssl;a instanceof t?a.details.ssl=c:a.ssl=c}}));k?k.then(function(){d(a)}).catch(function(b){a.reject(b)}):d(a);return a.promise}function da(a,c,b,f){a._pendingDfd=
l.getCredential(c.url,{error:f,token:c._token});a._pendingDfd.then(function(d){c._token=d.token;c._credential=d;c._ssl=c._sslFromServer||d.ssl;D(a,!0,c,b)}).catch(function(b){a.reject(b);a._pendingDfd=null})}function E(a,c,b){var f="Error",d={url:b.url,requestOptions:b.requestOptions,getHeader:P};if(c instanceof t)return c.details?(c.details=y.clone(c.details),c.details.url=b.url,c.details.requestOptions=b.requestOptions):c.details=d,c;if(c){var e=c.response;b=e&&e.getHeader;var e=e&&e.status,g=c.message;
b=c.getHeader||b;g&&(f=g);b&&(d.getHeader=b);d.httpStatus=(y.isDefined(c.httpCode)?c.httpCode:c.code)||e;d.subCode=c.subcode;d.messageCode=c.messageCode;d.messages="string"===typeof c.details?[c.details]:c.details}a=new t(a,f,d);c&&"cancel"===c.dojoType&&(a.dojoType="cancel");return a}function K(a,c){if(L&&V.invokeStaticMessage)return L.execute(a,c);var b=r.mixin({},c),f={url:a,requestOptions:r.mixin({},c)};b.content=b.query;delete b.query;b.preventCache=!!b.cacheBust;delete b.cacheBust;b.handleAs=
b.responseType;delete b.responseType;"array-buffer"===b.handleAs&&(b.handleAs="arraybuffer");if("image"===b.handleAs){if(k("host-webworker"))return p.reject(E("request:invalid-parameters",Error("responseType 'image' is not supported in Web Workers or Node environment"),f));b.preventCache&&(b.content=b.content||{},b.content["request.preventCache"]=Date.now());b.method="auto"}else if(g.isDataProtocol(a))return p.reject(E("request:invalid-parameters",Error("Data URLs are not supported for responseType \x3d "+
b.handleAs),f));var d=m.useIdentity;"anonymous"===b.authMode&&(d=!1);b.useIdentity=d;b.url=g.normalize(a);b.urlObj=new M(b.url);var e=U.makeDeferredCancellingPending();ba(b).always(function(){if(d&&!l)return X()}).always(function(){D(e,!1,b,f)});return e.promise}var z,m=T.request,Q=["COM_0056","COM_0057"],Z=0,P=function(){return null},ca=(new u).resolve(),l,I;(function(a){a.setRequestPreCallback=function(a){z=a}})(K||(K={}));return K});