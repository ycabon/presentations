// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/Error","../../core/object","./parser","./utils"],function(h,l,q,m,r){function n(a){return(a=m.parse(a))?r.isEffectFunctions(a)?a.map(b=>b.toJSON()):a.map(({scale:b,effects:c})=>({scale:b,value:c.map(g=>g.toJSON())})):null}function p(a){if(!a||0===a.length)return null;var b=(b=a[0])?"scale"in b:!1;if(b){b=[];for(const c of a)b.push({scale:c.scale,value:k(c.value)});return b}return k(a)}function k(a){if(!a?.length)return"";const b=[];for(const e of a){a=[];switch(e.type){case "grayscale":case "sepia":case "saturate":case "invert":case "brightness":case "contrast":case "opacity":a=
[f(e,"amount")];break;case "blur":a=[f(e,"radius","pt")];break;case "hue-rotate":a=[f(e,"angle","deg")];break;case "drop-shadow":a=f(e,"xoffset","pt");var c=f(e,"yoffset","pt"),g=f(e,"blurRadius","pt"),d=e;if(null==d.color)throw new l("effect:missing-parameter",`Missing parameter '${"color"}' in ${d.type} effect`,{effect:d});d=d.color;a=[a,c,g,`rgba(${d[0]||0}, ${d[1]||0}, ${d[2]||0}, ${d[3]/255||0})`];break;case "bloom":a=[f(e,"strength"),f(e,"radius","pt"),f(e,"threshold")]}a=`${e.type}(${a.filter(Boolean).join(" ")})`;
m.parse(a);b.push(a)}return b.join(" ")}function f(a,b,c){if(null==a[b])throw new l("effect:missing-parameter",`Missing parameter '${b}' in ${a.type} effect`,{effect:a});return c?a[b]+c:""+a[b]}h.effectFunctionsFromJSON=k;h.fromJSON=p;h.read=function(a,b,c){try{return p(a)}catch(g){c?.messages?.push(g)}return null};h.toJSON=n;h.write=function(a,b,c,g){try{const d=n(a);q.setDeepValue(c,d,b)}catch(d){g.messages&&g.messages.push(d)}};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});