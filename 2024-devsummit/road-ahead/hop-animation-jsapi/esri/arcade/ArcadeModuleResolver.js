// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../request ./executionError ./parser ./featureset/support/RecentlyUsedCache ../portal/Portal".split(" "),function(m,r,g,n,t,p){class b{constructor(a){this.portalUri=a}normalizeModuleUri(a){const d=/^[a-z0-9A-Z]+(@[0-9]+\.[0-9]+\.[0-9]+)?([\?|\/].*)?$/gi;var e=/(?<portalurl>.+)\/home\/item\.html\?id=(?<itemid>.+)$/gi;const l=/(?<portalurl>.+)\/sharing\/rest\/content\/users\/[a-zA-Z0-9]+\/items\/(?<itemid>.+)$/gi,u=/(?<portalurl>.+)\/sharing\/rest\/content\/items\/(?<itemid>.+)$/gi;
var k=/(?<itemid>.*)@(?<versionstring>[0-9]+\.[0-9]+\.[0-9]+)([\?|\/].*)?$/gi;if(a.startsWith("portal+")){let f=a.substring(7);var h="",c=f;let q=!1;for(const v of[e,u,l])if(e=v.exec(f),null!==e){h=e.groups;c=h.itemid;h=h.portalurl;q=!0;break}if(!1===q)if(d.test(f))c=f,h=this.portalUri;else throw new g.ModuleError(g.ModuleErrorCodes.UnsupportedUriProtocol,{uri:a});c.includes("/")&&(c=c.split("/")[0]);c.includes("?")&&(c=c.split("?")[0]);a="current";k=k.exec(c);null!==k&&(a=k.groups,c=a.itemid,a=a.versionstring);
f=(new p({url:h})).restUrl+"/content/items/"+c+"/resources/"+a+".arc";return{url:f,scheme:"portal",uri:"PO:"+f}}if(a.startsWith("mock")){if("mock"===a)return{url:"",scheme:"mock",data:'\n      export var hello \x3d 1;\n      export function helloWorld() {\n          return "Hello World " + hello;\n      }\n  ',uri:"mock"};c=a.replace("mock:","");if(void 0!==b.mocks[c])return{url:"",scheme:"mock",data:b.mocks[c],uri:a}}throw new g.ModuleError(g.ModuleErrorCodes.UnrecognizedUri,{uri:a});}async fetchModule(a){var d=
b.cachedModules.getFromCache(a.uri);if(d)return d;d=this.fetchSource(a);b.cachedModules.addToCache(a.uri,d);let e=null;try{e=await d}catch(l){throw b.cachedModules.removeFromCache(a.uri),l;}return e}async fetchSource(a){if("portal"===a.scheme){const d=await r(a.url,{responseType:"text",query:{}});if(d.data)return n.parseScript(d.data,[])}if("mock"===a.scheme)return n.parseScript(a.data??"",[]);throw new g.ModuleError(g.ModuleErrorCodes.UnsupportedUriProtocol);}static create(a){return new b(a)}static getDefault(){return this._default??
(b._default=b._moduleResolverFactory())}static set moduleResolverClass(a){this._moduleResolverFactory=a;this._default=null}}b.mocks={};b.cachedModules=new t(30);b._default=null;b._moduleResolverFactory=()=>{const a=p.getDefault();return new b(a.url)};m.ArcadeModuleResolver=b;Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});