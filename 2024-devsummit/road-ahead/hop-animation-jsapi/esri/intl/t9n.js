// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../request","../core/Error","./messages"],function(f,p,g,q){async function r(a,b,d,e){var c=b.exec(d);if(!c)throw new g("esri-intl:invalid-bundle",`Bundle id "${d}" is not compatible with the pattern "${b}"`);b=c[1]?`${c[1]}/`:"";c=c[2];const l=q.normalizeMessageBundleLocale(e);e=`${b}${c}.json`;b=l?`${b}${c}_${l}.json`:e;let h;try{h=await m(a(b))}catch(t){if(b===e)throw new g("intl:unknown-bundle",`Bundle "${d}" cannot be loaded`,{error:t});try{h=await m(a(e))}catch(u){throw new g("intl:unknown-bundle",
`Bundle "${d}" cannot be loaded`,{error:u});}}return h}async function m(a){if(null!=k.fetchBundleAsset)return k.fetchBundleAsset(a);a=await p(a,{responseType:"text"});return JSON.parse(a.data)}class n{constructor({base:a="",pattern:b,location:d=new URL(window.location.href)}){let e;e="string"===typeof d?c=>(new URL(c,new URL(d,window.location.href))).href:d instanceof URL?c=>(new URL(c,d)).href:d;this.pattern="string"===typeof b?new RegExp(`^${b}`):b;this.getAssetUrl=e;a=a?a.endsWith("/")?a:a+"/":
"";this.matcher=new RegExp(`^${a}(?:(.*)/)?(.*)$`)}fetchMessageBundle(a,b){return r(this.getAssetUrl,this.matcher,a,b)}}const k={};f.JSONLoader=n;f.createJSONLoader=function(a){return new n(a)};f.test=k;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});