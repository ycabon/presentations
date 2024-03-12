// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/arrayUtils ../../../core/events ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/decorators/cast ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../Widget ./GridViewModel ../../support/globalCss ../../support/widgetUtils ../../support/decorators/messageBundle ../../support/jsxFactory".split(" "),function(z,ud,fb,Kb,gb,A,vd,lg,wd,xd,yd,zd,mg,Ad,W){function X(c){const a=
customElements.get(c.is);if(a){const b=a.version;b&&c.version&&b===c.version?console.warn(`The component ${c.is} has been loaded twice`):console.error(`Tried to define ${c.is} version ${c.version} when version ${a.version} is already in use. Something will probably break.`)}else Object.defineProperty(c,"version",{get(){return"24.3.4"}}),customElements.define(c.is,c)}function Lb(c,a){if(!Array.isArray(c)||!c.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Mb?Mb.createHTML(a):
a}function ha(c,a,b=c,d){if(a===ia)return a;let e=void 0!==d?b._$Co?.[d]:b._$Cl;const f=ua(a)?void 0:a._$litDirective$;return e?.constructor!==f&&(e?._$AO?.(!1),void 0===f?e=void 0:(e=new f(c),e._$AT(c,b,d)),void 0!==d?(b._$Co??(b._$Co=[]))[d]=e:b._$Cl=e),void 0!==e&&(a=ha(c,e._$AS(c,a.values),e,d)),a}function Nb(c){return c&&Object.prototype.hasOwnProperty.call(c,"__themes")}function Bd(c=[]){return[c].flat(Infinity).filter(a=>{if(a instanceof hb)return!0;console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`.");
return!1})}function O(c,a,b={}){c&&Nb(customElements.get(c))&&console.warn(`The custom element definition for "${c}"\n      was finalized before a style module was registered.\n      Make sure to add component specific style modules before\n      importing the corresponding custom element.`);a=Bd(a);window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(c,a,b):Ob.push({themeFor:c,styles:a,include:b.include,moduleId:b.moduleId})}function ib(){return window.Vaadin&&window.Vaadin.styleModules?
window.Vaadin.styleModules.getAllThemes():Ob}function Cd(c,a){return(c||"").split(" ").some(b=>(new RegExp(`^${b.split("*").join(".*")}$`,"u")).test(a))}function Dd(c=""){let a=0;c.startsWith("lumo-")||c.startsWith("material-")?a=1:c.startsWith("vaadin-")&&(a=2);return a}function Pb(c){const a=[];c.include&&[].concat(c.include).forEach(b=>{const d=ib().find(e=>e.moduleId===b);d?a.push(...Pb(d),...d.styles):console.warn(`Included moduleId ${b} not found in style registry`)},c.styles);return a}function Ed(c,
a){const b=document.createElement("style");b.innerHTML=c.map(d=>d.cssText).join("\n");a.content.appendChild(b)}function Fd(c){const a=`${c}-default-theme`,b=ib().filter(d=>d.moduleId!==a&&Cd(d.themeFor,c)).map(d=>({...d,styles:[...Pb(d),...d.styles],includePriority:Dd(d.moduleId)})).sort((d,e)=>e.includePriority-d.includePriority);return 0<b.length?b:ib().filter(d=>d.moduleId===a)}function va(c,a){if(c&&Gd.test(c)||"//"===c)return c;if(void 0===Ka){Ka=!1;try{const b=new URL("b","http://a");b.pathname=
"c%20d";Ka="http://a/c%20d"===b.href}catch(b){}}a||=document.baseURI||window.location.href;if(Ka)try{return(new URL(c,a)).href}catch(b){return c}J||(J=document.implementation.createHTMLDocument("temp"),J.base=J.createElement("base"),J.head.appendChild(J.base),J.anchor=J.createElement("a"),J.body.appendChild(J.anchor));J.base.href=a;J.anchor.href=c;return J.anchor.href||c}function jb(c,a){return c.replace(Hd,function(b,d,e,f){return d+"'"+va(e.replace(/["']/g,""),a)+"'"+f})}function kb(c){return c.substring(0,
c.lastIndexOf("/")+1)}function Qb(c){c=jb((c.body?c.body:c).textContent,c.baseURI);const a=document.createElement("style");a.textContent=c;return a}function Id(c){c=c.trim().split(/\s+/);const a=[];for(let g=0;g<c.length;g++){var b=a,d=b.push,e;var f=c[g];if(e=ja.import(f)){if(void 0===e._styles){f=[];f.push(...Rb(e));const h=e.querySelector("template");h&&f.push(...Sb(h,e.assetpath));e._styles=f}e=e._styles}else console.warn("Could not find style data in module named",f),e=[];d.call(b,...e)}return a}
function Sb(c,a){if(!c._styles){const b=[],d=c.content.querySelectorAll("style");for(let e=0;e<d.length;e++){let f=d[e],g=f.getAttribute("include");g&&b.push(...Id(g).filter(function(h,k,l){return l.indexOf(h)===k}));a&&(f.textContent=jb(f.textContent,a));b.push(f)}c._styles=b}return c._styles}function Jd(c){return(c=ja.import(c))?Rb(c):[]}function Rb(c){const a=[];c=c.querySelectorAll("link[rel\x3dimport][type~\x3dcss]");for(let d=0;d<c.length;d++){var b=c[d];if(b.import){const e=b.import;if((b=
b.hasAttribute("shady-unscoped"))&&!e._unscopedStyle){const f=Qb(e);f.setAttribute("shady-unscoped","");e._unscopedStyle=f}else e._style||(e._style=Qb(e));a.push(b?e._unscopedStyle:e._style)}}return a}function Y(c){let a=c.indexOf(".");return-1===a?c:c.slice(0,a)}function wa(c){if(Array.isArray(c)){let a=[];for(let b=0;b<c.length;b++){let d=c[b].toString().split(".");for(let e=0;e<d.length;e++)a.push(d[e])}return a.join(".")}return c}function Tb(c){return Array.isArray(c)?wa(c).split("."):c.toString().split(".")}
function G(c,a,b){a=Tb(a);for(let d=0;d<a.length;d++){if(!c)return;c=c[a[d]]}b&&(b.path=a.join("."));return c}function Ub(c,a,b){let d=Tb(a),e=d[d.length-1];if(1<d.length){for(a=0;a<d.length-1;a++)if(c=c[d[a]],!c)return;c[e]=b}else c[a]=b;return d.join(".")}function Vb(c){return La[c]||(La[c]=0>c.indexOf("-")?c:c.replace(Kd,a=>a[1].toUpperCase()))}function Ma(c){return La[c]||(La[c]=c.replace(Ld,"-$1").toLowerCase())}function Wb(c,a){let b=a.parentInfo&&Wb(c,a.parentInfo);if(b)for(let d=b.firstChild,
e=0;d;d=d.nextSibling){if(a.parentIndex===e++)return d}else return c}function Md(c,a,b){c=c._methodHost||c;return function(d){if(c[b])c[b](d,d.detail);else console.warn("listener method `"+b+"` not defined")}}function lb(c,a,b){let d=c[a];if(!d)d=c[a]={};else if(!c.hasOwnProperty(a)&&(d=c[a]=Object.create(c[a]),b))for(let e in d)for(c=d[e],a=d[e]=Array(c.length),b=0;b<c.length;b++)a[b]=c[b];return d}function xa(c,a,b,d,e,f){if(a){let h=!1;const k=ya++;for(let l in b){var g=e?Y(l):l;if(g=a[g])for(let m=
0,n=g.length,p;m<n&&(p=g[m]);m++)p.info&&p.info.lastRun===k||e&&!mb(l,p.trigger)||(p.info&&(p.info.lastRun=k),p.fn(c,l,b,d,p.info,e,f),h=!0)}return h}return!1}function mb(c,a){if(a){let b=a.name;return b==c||!(!a.structured||0!==b.indexOf(c+"."))||!(!a.wildcard||0!==c.indexOf(b+"."))}return!0}function Xb(c,a,b,d,e){a="string"===typeof e.method?c[e.method]:e.method;b=e.property;a?a.call(c,c.__data[b],d[b]):e.dynamicFn||console.warn("observer method `"+e.method+"` not defined")}function Yb(c,a,b,d){b=
{value:b,queueProperty:!0};d&&(b.path=d);Z(c).dispatchEvent(new CustomEvent(a,{detail:b}))}function Nd(c,a,b,d,e,f){f=(d=(f?Y(a):a)!=a?a:null)?G(c,d):c.__data[a];d&&void 0===f&&(f=b[a]);Yb(c,e.eventName,f,d)}function Od(c,a,b,d,e){b=c.__data[a];Na&&(b=Na(b,e.attrName,"attribute",c));c._propertyToAttribute(a,e.attrName,b)}function Pd(c){let a=c.constructor.__orderedComputedDeps;if(!a){a=new Map;const d=c[r.COMPUTE];let {counts:e,ready:f,total:g}=Qd(c);for(var b;b=f.shift();)a.set(b,a.size),(b=d[b])&&
b.forEach(h=>{h=h.info.methodInfo;--g;0===--e[h]&&f.push(h)});0!==g&&console.warn(`Computed graph for ${c.localName} incomplete; circular?`);c.constructor.__orderedComputedDeps=a}return a}function Qd(c){const a=c.__computeInfo,b={};c=c[r.COMPUTE];const d=[];let e=0;for(let f in a){const g=a[f];e+=b[f]=g.args.filter(h=>!h.literal).length+(g.dynamicFn?1:0)}for(let f in c)a[f]||d.push(f);return{counts:b,ready:d,total:e}}function Zb(c,a,b,d,e){a=nb(c,a,b,d,e);if(a===za)return!1;e=e.methodInfo;if(c.__dataHasAccessor&&
c.__dataHasAccessor[e])return c._setPendingProperty(e,a,!0);c[e]=a;return!1}function ob(c,a,b,d,e,f,g){b.bindings=b.bindings||[];d={kind:d,target:e,parts:f,literal:g,isCompound:1!==f.length};b.bindings.push(d);if(d.target&&"attribute"!=d.kind&&"text"!=d.kind&&!d.isCompound&&"{"===d.parts[0].mode){let {event:n,negate:p}=d.parts[0];d.listenerEvent=n||Ma(e)+"-changed";d.listenerNegate=p}b=a.nodeInfoList.length;for(g=0;g<d.parts.length;g++){var h=d.parts[g];h.compoundIndex=g;e=c;f=a;var k=d,l=h,m=b;if(!l.literal)if("attribute"===
k.kind&&"-"===k.target[0])console.warn("Cannot set attribute "+k.target+' because "-" is not a valid attribute starting character');else for(h=l.dependencies,k={index:m,binding:k,part:l,evaluator:e},l=0;l<h.length;l++)m=h[l],"string"==typeof m&&(m=$b(m),m.wildcard=!0),e._addTemplatePropertyEffect(f,m.rootProperty,{fn:Rd,info:k,trigger:m})}}function Rd(c,a,b,d,e,f,g){g=g[e.index];var h=e.binding;let k=e.part;f&&k.source&&a.length>k.source.length&&"property"==h.kind&&!h.isCompound&&g.__isPropertyEffectsClient&&
g.__dataHasAccessor&&g.__dataHasAccessor[h.target]?(b=b[a],a=h.target+a.slice(k.source.length),g._setPendingPropertyOrPath(a,b,!1,!0)&&c._enqueueClient(g)):(a=e.evaluator._evaluateBinding(c,k,a,b,d,f),a!==za&&(h.isCompound&&(b=g.__dataCompoundStorage[h.target],b[k.compoundIndex]=a,a=b.join("")),"attribute"===h.kind||"textContent"!==h.target&&("value"!==h.target||"input"!==g.localName&&"textarea"!==g.localName)||(a=void 0==a?"":a),Na&&(a=Na(a,h.target,h.kind,g)),"attribute"==h.kind?c._valueToNodeAttribute(g,
a,h.target):(h=h.target,g.__isPropertyEffectsClient&&g.__dataHasAccessor&&g.__dataHasAccessor[h]?g[r.READ_ONLY]&&g[r.READ_ONLY][h]||g._setPendingProperty(h,a)&&c._enqueueClient(g):c._setUnmanagedPropertyToNode(g,h,a))))}function Sd(c,a,b){if(b.listenerEvent){let d=b.parts[0];c.addEventListener(b.listenerEvent,function(e){var f=b.target,g=d.source,h=d.negate;let k=e.detail,l=k&&k.path;l?(g+=l.slice(f.length),e=k&&k.value):e=e.currentTarget[f];a[r.READ_ONLY]&&a[r.READ_ONLY][g]||!a._setPendingPropertyOrPath(g,
h?!e:e,!0,!!l)||k&&k.queueProperty||a._invalidateProperties()})}}function ac(c,a,b,d,e,f){f=a.static||f&&("object"!==typeof f||f[a.methodName]);e={methodName:a.methodName,args:a.args,methodInfo:e,dynamicFn:f};for(let g=0,h;g<a.args.length&&(h=a.args[g]);g++)h.literal||c._addPropertyEffect(h.rootProperty,b,{fn:d,info:e,trigger:h});f&&c._addPropertyEffect(a.methodName,b,{fn:d,info:e});return e}function nb(c,a,b,d,e){d=c._methodHost||c;let f=d[e.methodName];if(f)return c=c._marshalArgs(e.args,a,b),c===
za?za:f.apply(d,c);e.dynamicFn||console.warn("method `"+e.methodName+"` not defined")}function bc(c){let a="";for(let b=0;b<c.length;b++)a+=c[b].literal||"";return a}function pb(c){var a=c.match(/([^\s]+?)\(([\s\S]*)\)/);return a?(c={methodName:a[1],static:!0,args:Td},a[2].trim()?(a=a[2].replace(/\\,/g,"\x26comma;").split(","),Ud(a,c)):c):null}function Ud(c,a){a.args=c.map(function(b){b=$b(b);b.literal||(a.static=!1);return b},this);return a}function $b(c){c=c.trim().replace(/&comma;/g,",").replace(/\\(.)/g,
"$1");let a={name:c,value:"",literal:!1},b=c[0];"-"===b&&(b=c[1]);"0"<=b&&"9">=b&&(b="#");switch(b){case "'":case '"':a.value=c.slice(1,-1);a.literal=!0;break;case "#":a.value=Number(c),a.literal=!0}a.literal||(a.rootProperty=Y(c),a.structured=0<=c.indexOf("."),a.structured&&(a.wildcard=".*"==c.slice(-2),a.wildcard&&(a.name=c.slice(0,-2))));return a}function cc(c,a,b){c=G(c,b);void 0===c&&(c=a[b]);return c}function dc(c,a,b,d){d={indexSplices:d};qb&&!c._overrideLegacyUndefined&&(a.splices=d);c.notifyPath(b+
".splices",d);c.notifyPath(b+".length",a.length);qb&&!c._overrideLegacyUndefined&&(d.indexSplices=[])}function Aa(c,a,b,d,e,f){dc(c,a,b,[{index:d,addedCount:e,removed:f,object:a,type:"splice"}])}function Vd(c){return c[0].toUpperCase()+c.substring(1)}function Wd(){rb=!1;const c=ka.length;for(let a=0;a<c;a++){const b=ka[a];if(b)try{b()}catch(d){setTimeout(()=>{throw d;})}}ka.splice(0,c);ec+=c}function Xd(){const c=!!la.size;la.forEach(a=>{try{a.flush()}catch(b){setTimeout(()=>{throw b;})}});return c}
function sb(c,a,b=c.getAttribute("dir")){a?c.setAttribute("dir",a):null!=b&&c.removeAttribute("dir")}function tb(c,a){return c.split(".").reduce((b,d)=>b?b[d]:void 0,a)}function fc(c){window.Vaadin&&window.Vaadin.templateRendererCallback?window.Vaadin.templateRendererCallback(c):c.querySelector("template")&&console.warn(`WARNING: <template> inside <${c.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}function gc(c,a){return a?
a.closest(c)||gc(c,a.getRootNode().host):null}function hc(c){return c?new Set(c.split(" ")):new Set}function ic(c,a,b){const d=hc(c.getAttribute(a));d.add(b);c.setAttribute(a,d?[...d].join(" "):"")}function jc(c,a,b){const d=hc(c.getAttribute(a));d.delete(b);0===d.size?c.removeAttribute(a):c.setAttribute(a,d?[...d].join(" "):"")}function ma(c){return c.__cells||Array.from(c.querySelectorAll('[part~\x3d"cell"]:not([part~\x3d"details-cell"])'))}function H(c,a){[...c.children].forEach(a)}function na(c,
a){ma(c).forEach(a);c.__detailsCell&&a(c.__detailsCell)}function kc(c,a,b){let d=1;c.forEach(e=>{0===d%10&&(d+=1);e._order=b+d*a;d+=1})}function Oa(c,a,b){switch(typeof b){case "boolean":c.toggleAttribute(a,b);break;case "string":c.setAttribute(a,b);break;default:c.removeAttribute(a)}}function P(c,a,b){a||""===a?ic(c,"part",b):jc(c,"part",b)}function Q(c,a,b){c.forEach(d=>{P(d,b,a)})}function Ba(c,a){const b=ma(c);Object.entries(a).forEach(([d,e])=>{Oa(c,d,e);d=`${d}-row`;P(c,e,d);Q(b,`${d}-cell`,
e)})}function lc(c,a){const b=ma(c);Object.entries(a).forEach(([d,e])=>{var f=c.getAttribute(d);Oa(c,d,e);f&&(f=`${d}-${f}-row`,P(c,!1,f),Q(b,`${f}-cell`,!1));e&&(d=`${d}-${e}-row`,P(c,e,d),Q(b,`${d}-cell`,e))})}function aa(c,a,b,d,e){Oa(c,a,b);e&&P(c,!1,e);P(c,b,d||`${a}-cell`)}function Yd(){return mc(function(){return!0})}function Zd(){return Pa&&0<Object.keys(Pa).map(c=>Pa[c]).filter(c=>c.productionMode).length?!0:!1}function mc(c,a){if("function"===typeof c){var b=$d.exec(c.toString());if(b)try{c=
new Function(b[1])}catch(d){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",d)}return c(a)}}function ae(){}function Qa(c){if(null===c.offsetParent&&0===c.clientWidth&&0===c.clientHeight)return!0;{const a=c.style;"hidden"===a.visibility||"none"===a.display?c=!0:(c=window.getComputedStyle(c),c="hidden"===c.visibility||"none"===c.display?!0:!1)}return c}function oa(c,a){return c.split(".").reduce((b,d)=>b[d],a)}function nc(c,a,b){if(0===b.length)return!1;let d=!0;c.forEach(({path:e})=>
{if(e&&-1!==e.indexOf(".")){var f=e.replace(/\.[^.]*$/u,"");void 0===oa(f,b[0])&&(console.warn(`Path "${e}" used for ${a} does not exist in all of the items, ${a} is disabled.`),d=!1)}});return d}function Ra(c){return 0<=[void 0,null].indexOf(c)?"":isNaN(c)?c.toString():c}function oc(c,a){c=Ra(c);a=Ra(a);return c<a?-1:c>a?1:0}function be(c,a){return c.sort((b,d)=>a.map(e=>"asc"===e.direction?oc(oa(e.path,b),oa(e.path,d)):"desc"===e.direction?oc(oa(e.path,d),oa(e.path,b)):0).reduce((e,f)=>0!==e?e:
f,0))}function ce(c,a){return c.filter(b=>a.every(d=>{const e=Ra(oa(d.path,b));d=Ra(d.value).toString().toLowerCase();return e.toString().toLowerCase().includes(d)}))}function ba(c){var a=c.type;return-1<ub.indexOf(a)?"mousemove"===a?(a=void 0===c.buttons?1:c.buttons,c instanceof window.MouseEvent&&!de&&(a=ee[c.which]||0),!!(a&1)):0===(void 0===c.button?0:c.button):!1}function fe(c){if("click"===c.type){if(0===c.detail)return!0;var a=R(c);if(!a.nodeType||a.nodeType!==Node.ELEMENT_NODE)return!0;a=
a.getBoundingClientRect();const b=c.pageX;c=c.pageY;return!(b>=a.left&&b<=a.right&&c>=a.top&&c<=a.bottom)}return!1}function pc(c,a,b){c.movefn=a;c.upfn=b;document.addEventListener("mousemove",a);document.addEventListener("mouseup",b)}function pa(c){document.removeEventListener("mousemove",c.movefn);document.removeEventListener("mouseup",c.upfn);c.movefn=null;c.upfn=null}function R(c){const a=qc(c);return 0<a.length?a[0]:c.target}function ge(c){const a=c.type;var b=c.currentTarget.__polymerGestures;
if(b&&(b=b[a])){if(!c.__polymerGesturesHandled&&(c.__polymerGesturesHandled={},a.startsWith("touch"))){var d=c.changedTouches[0];"touchstart"===a&&1===c.touches.length&&(L.touch.id=d.identifier);if(L.touch.id!==d.identifier)return;if(!rc&&("touchstart"===a||"touchmove"===a)){d=c.changedTouches[0];var e=c.type;if("touchstart"===e)L.touch.x=d.clientX,L.touch.y=d.clientY,L.touch.scrollDecided=!1;else if("touchmove"===e&&!L.touch.scrollDecided){L.touch.scrollDecided=!0;e="auto";var f=qc(c);for(let h=
0,k;h<f.length;h++)if(k=f[h],k.__polymerGesturesTouchAction){e=k.__polymerGesturesTouchAction;break}f=!1;var g=Math.abs(L.touch.x-d.clientX);d=Math.abs(L.touch.y-d.clientY);c.cancelable&&("none"===e?f=!0:"pan-x"===e?f=d>g:"pan-y"===e&&(f=g>d));f?c.preventDefault():Sa("track")}}}d=c.__polymerGesturesHandled;if(!d.skip){for(let h=0,k;h<ca.length;h++)k=ca[h],b[k.name]&&!d[k.name]&&k.flow&&-1<k.flow.start.indexOf(c.type)&&k.reset&&k.reset();for(let h=0,k;h<ca.length;h++)k=ca[h],b[k.name]&&!d[k.name]&&
(d[k.name]=!0,k[a](c))}}}function Ca(c,a,b){if(vb[a]){const g=vb[a],h=g.deps,k=g.name;let l=c.__polymerGestures;l||(c.__polymerGestures=l={});for(let m=0,n,p;m<h.length;m++)if(n=h[m],!(he&&-1<ub.indexOf(n))||"click"===n){(p=l[n])||(l[n]=p={_count:0});if(0===p._count){var d=c,e=d.addEventListener,f=n;ub.indexOf(n);e.call(d,f,ge,void 0)}p[k]=(p[k]||0)+1;p._count=(p._count||0)+1}c.addEventListener(a,b);g.touchAction&&ie(c,g.touchAction);return!0}return!1}function wb(c){ca.push(c);c.emits.forEach(a=>
{vb[a]=c})}function ie(c,a){rc&&c instanceof HTMLElement&&M.run(()=>{c.style.touchAction=a});c.__polymerGesturesTouchAction=a}function xb(c,a,b){a=new Event(a,{bubbles:!0,cancelable:!0,composed:!0});a.detail=b;c.dispatchEvent(a);a.defaultPrevented&&(c=b.preventer||b.sourceEvent)&&c.preventDefault&&c.preventDefault()}function Sa(c){a:{for(let a=0,b;a<ca.length;a++){b=ca[a];for(let d=0,e;d<b.emits.length;d++)if(e=b.emits[d],e===c){c=b;break a}}c=null}c.info&&(c.info.prevent=!0)}function Da(c,a,b,d){a&&
xb(a,c,{x:b.clientX,y:b.clientY,sourceEvent:b,preventer:d,prevent(e){return Sa(e)}})}function sc(c,a,b){if(c.prevent)return!1;if(c.started)return!0;b=Math.abs(c.y-b);return 5<=Math.abs(c.x-a)||5<=b}function yb(c,a,b){if(a){var d=c.moves[c.moves.length-2],e=c.moves[c.moves.length-1],f=e.x-c.x,g=e.y-c.y,h=0;if(d){var k=e.x-d.x;h=e.y-d.y}xb(a,"track",{state:c.state,x:b.clientX,y:b.clientY,dx:f,dy:g,ddx:k,ddy:h,sourceEvent:b,hover(){var l=b.clientX,m=b.clientY;let n=document.elementFromPoint(l,m),p=n;
for(;p&&p.shadowRoot&&!window.ShadyDOM;){const q=p;p=p.shadowRoot.elementFromPoint(l,m);if(q===p)break;p&&(n=p)}return n}})}}function tc(c,a,b){const d=Math.abs(a.clientX-c.x),e=Math.abs(a.clientY-c.y),f=R(b||a);!f||je[f.localName]&&f.hasAttribute("disabled")||!(isNaN(d)||isNaN(e)||25>=d&&25>=e||fe(a))||c.prevent||xb(f,"tap",{x:a.clientX,y:a.clientY,sourceEvent:a,preventer:b})}function D(c,a,b){a:if("object"==typeof a&&a){var d=a[Symbol.toPrimitive];if(void 0!==d){a=d.call(a,"string");if("object"!=
typeof a)break a;throw new TypeError("@@toPrimitive must return a primitive value.");}a=String(a)}a="symbol"==typeof a?a:String(a);a in c?Object.defineProperty(c,a,{value:b,enumerable:!0,configurable:!0,writable:!0}):c[a]=b;return c}function Ta(c,a,b=0){for(const d of c.subCaches){const e=d.parentCacheIndex;if(a<=e)break;else if(a<=e+d.flatSize)return Ta(d,a-e-1,b+1);a-=d.flatSize}return{cache:c,item:c.items[a],index:a,page:Math.floor(a/c.pageSize),level:b}}function uc({getItemId:c},a,b,d=0,e=0){for(var f=
0;f<a.items.length;f++){const g=a.items[f];if(g&&c(g)===c(b))return{cache:a,level:d,item:g,index:f,page:Math.floor(f/a.pageSize),subCache:a.getSubCache(f),flatIndex:e+a.getFlatIndex(f)}}for(const g of a.subCaches)if(f=e+a.getFlatIndex(g.parentCacheIndex),f=uc({getItemId:c},g,b,d+1,f+1))return f}function vc(c,[a,...b],d=0){Infinity===a&&(a=c.size-1);const e=c.getFlatIndex(a);return(c=c.getSubCache(a))&&0<c.flatSize&&b.length?vc(c,b,d+e+1):d+e}function wc(c,a){if(!c||!a||c.length!==a.length)return!1;
for(let b=0,d=c.length;b<d;b++)if(c[b]instanceof Array&&a[b]instanceof Array){if(!wc(c[b],a[b]))return!1}else if(c[b]!==a[b])return!1;return!0}function xc(c,a){const {scrollLeft:b}=c;return"rtl"!==a?b:c.scrollWidth-c.clientWidth+b}class ke extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}X(ke);const Ua=globalThis,zb=Ua.ShadowRoot&&(void 0===Ua.ShadyCSS||Ua.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ab=Symbol(),yc=new WeakMap;
let hb=class{constructor(c,a,b){if(this._$cssResult$=!0,b!==Ab)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=c;this.t=a}get styleSheet(){let c=this.o;const a=this.t;if(zb&&void 0===c){const b=void 0!==a&&1===a.length;b&&(c=yc.get(a));void 0===c&&((this.o=c=new CSSStyleSheet).replaceSync(this.cssText),b&&yc.set(a,c))}return c}toString(){return this.cssText}};const E=(c,...a)=>{a=1===c.length?c[0]:a.reduce((b,d,e)=>{if(!0===d._$cssResult$)d=d.cssText;
else if("number"!=typeof d)throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");return b+d+c[e+1]},c[0]);return new hb(a,c,Ab)},le=(c,a)=>{if(zb)c.adoptedStyleSheets=a.map(b=>b instanceof CSSStyleSheet?b:b.styleSheet);else for(const b of a){a=document.createElement("style");const d=Ua.litNonce;void 0!==d&&a.setAttribute("nonce",d);a.textContent=b.cssText;c.appendChild(a)}},zc=zb?c=>
c:c=>{if(c instanceof CSSStyleSheet){let a="";for(const b of c.cssRules)a+=b.cssText;c=new hb("string"==typeof a?a:a+"",void 0,Ab)}return c},{is:me,defineProperty:ne,getOwnPropertyDescriptor:oe,getOwnPropertyNames:pe,getOwnPropertySymbols:qe,getPrototypeOf:re}=Object,qa=globalThis,Ac=qa.trustedTypes,se=Ac?Ac.emptyScript:"",te=qa.reactiveElementPolyfillSupport,Bb={toAttribute(c,a){switch(a){case Boolean:c=c?se:null;break;case Object:case Array:c=null==c?c:JSON.stringify(c)}return c},fromAttribute(c,
a){let b=c;switch(a){case Boolean:b=null!==c;break;case Number:b=null===c?null:Number(c);break;case Object:case Array:try{b=JSON.parse(c)}catch(d){b=null}}return b}},Bc=(c,a)=>!me(c,a),Cc={attribute:!0,type:String,converter:Bb,reflect:!1,hasChanged:Bc};let Dc;(Dc=Symbol).metadata??(Dc.metadata=Symbol("metadata"));qa.litPropertyMetadata??(qa.litPropertyMetadata=new WeakMap);class ra extends HTMLElement{static addInitializer(c){this._$Ei();(this.l??(this.l=[])).push(c)}static get observedAttributes(){return this.finalize(),
this._$Eh&&[...this._$Eh.keys()]}static createProperty(c,a=Cc){if(a.state&&(a.attribute=!1),this._$Ei(),this.elementProperties.set(c,a),!a.noAccessor){const b=Symbol();a=this.getPropertyDescriptor(c,b,a);void 0!==a&&ne(this.prototype,c,a)}}static getPropertyDescriptor(c,a,b){const {get:d,set:e}=oe(this.prototype,c)??{get(){return this[a]},set(f){this[a]=f}};return{get(){return d?.call(this)},set(f){const g=d?.call(this);e.call(this,f);this.requestUpdate(c,g,b)},configurable:!0,enumerable:!0}}static getPropertyOptions(c){return this.elementProperties.get(c)??
Cc}static _$Ei(){if(!this.hasOwnProperty("elementProperties")){var c=re(this);c.finalize();void 0!==c.l&&(this.l=[...c.l]);this.elementProperties=new Map(c.elementProperties)}}static finalize(){if(!this.hasOwnProperty("finalized")){if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){var c=this.properties;const a=[...pe(c),...qe(c)];for(const b of a)this.createProperty(b,c[b])}c=this[Symbol.metadata];if(null!==c&&(c=litPropertyMetadata.get(c),void 0!==c))for(const [a,b]of c)this.elementProperties.set(a,
b);this._$Eh=new Map;for(const [a,b]of this.elementProperties)c=this._$Eu(a,b),void 0!==c&&this._$Eh.set(c,a);this.elementStyles=this.finalizeStyles(this.styles)}}static finalizeStyles(c){const a=[];if(Array.isArray(c)){c=new Set(c.flat(1/0).reverse());for(const b of c)a.unshift(zc(b))}else void 0!==c&&a.push(zc(c));return a}static _$Eu(c,a){a=a.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof c?c.toLowerCase():void 0}constructor(){super();this._$Ep=void 0;this.hasUpdated=this.isUpdatePending=
!1;this._$Em=null;this._$Ev()}_$Ev(){this._$Eg=new Promise(c=>this.enableUpdating=c);this._$AL=new Map;this._$ES();this.requestUpdate();this.constructor.l?.forEach(c=>c(this))}addController(c){(this._$E_??(this._$E_=new Set)).add(c);void 0!==this.renderRoot&&this.isConnected&&c.hostConnected?.()}removeController(c){this._$E_?.delete(c)}_$ES(){const c=new Map,a=this.constructor.elementProperties;for(const b of a.keys())this.hasOwnProperty(b)&&(c.set(b,this[b]),delete this[b]);0<c.size&&(this._$Ep=
c)}createRenderRoot(){const c=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return le(c,this.constructor.elementStyles),c}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot());this.enableUpdating(!0);this._$E_?.forEach(c=>c.hostConnected?.())}enableUpdating(c){}disconnectedCallback(){this._$E_?.forEach(c=>c.hostDisconnected?.())}attributeChangedCallback(c,a,b){this._$AK(c,b)}_$EO(c,a){const b=this.constructor.elementProperties.get(c),d=this.constructor._$Eu(c,
b);void 0!==d&&!0===b.reflect&&(a=(void 0!==b.converter?.toAttribute?b.converter:Bb).toAttribute(a,b.type),this._$Em=c,null==a?this.removeAttribute(d):this.setAttribute(d,a),this._$Em=null)}_$AK(c,a){var b=this.constructor;c=b._$Eh.get(c);if(void 0!==c&&this._$Em!==c){b=b.getPropertyOptions(c);const d="function"==typeof b.converter?{fromAttribute:b.converter}:void 0!==b.converter?.fromAttribute?b.converter:Bb;this._$Em=c;this[c]=d.fromAttribute(a,b.type);this._$Em=null}}requestUpdate(c,a,b){if(void 0!==
c){if(b??=this.constructor.getPropertyOptions(c),!(b.hasChanged??Bc)(this[c],a))return;this.C(c,a,b)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(c,a,b){this._$AL.has(c)||this._$AL.set(c,a);!0===b.reflect&&this._$Em!==c&&(this._$ET??(this._$ET=new Set)).add(c)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(a){Promise.reject(a)}const c=this.scheduleUpdate();return null!=c&&await c,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(this.isUpdatePending){if(!this.hasUpdated){if(this.renderRoot??
(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const [b,d]of this._$Ep)this[b]=d;this._$Ep=void 0}var c=this.constructor.elementProperties;if(0<c.size)for(const [b,d]of c)!0!==d.wrapped||this._$AL.has(b)||void 0===this[b]||this.C(b,this[b],d)}c=!1;var a=this._$AL;try{(c=this.shouldUpdate(a))?(this.willUpdate(a),this._$E_?.forEach(b=>b.hostUpdate?.()),this.update(a)):this._$Ej()}catch(b){throw c=!1,this._$Ej(),b;}c&&this._$AE(a)}}willUpdate(c){}_$AE(c){this._$E_?.forEach(a=>a.hostUpdated?.());
this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(c));this.updated(c)}_$Ej(){this._$AL=new Map;this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(c){return!0}update(c){this._$ET&&(this._$ET=this._$ET.forEach(a=>this._$EO(a,this[a])));this._$Ej()}updated(c){}firstUpdated(c){}}ra.elementStyles=[];ra.shadowRootOptions={mode:"open"};ra.elementProperties=new Map;ra.finalized=new Map;te?.({ReactiveElement:ra});(qa.reactiveElementVersions??
(qa.reactiveElementVersions=[])).push("2.0.3");const Va=globalThis,Wa=Va.trustedTypes,Mb=Wa?Wa.createPolicy("lit-html",{createHTML:c=>c}):void 0,S=`lit$${(Math.random()+"").slice(9)}$`,Ec="?"+S,ue=`<${Ec}>`,K=document,ua=c=>null===c||"object"!=typeof c&&"function"!=typeof c,Fc=Array.isArray,Ea=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Gc=/--\x3e/g,Hc=/>/g,da=RegExp("\x3e|[ \t\n\f\r](?:([^\\s\"'\x3e\x3d/]+)([ \t\n\f\r]*\x3d[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`\x3c\x3e\x3d]|(\"|')|))|$)","g"),
Ic=/'/g,Jc=/"/g,Kc=/^(?:script|style|textarea|title)$/i,ia=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),Lc=new WeakMap,ea=K.createTreeWalker(K,129);class Xa{constructor({strings:c,_$litType$:a},b){this.parts=[];let d=0,e=0;const f=c.length-1,g=this.parts;var h=c.length-1;const k=[];let l,m=2===a?"\x3csvg\x3e":"",n=Ea;for(let t=0;t<h;t++){const w=c[t];let I,v,F=-1;for(var p=0;p<w.length&&(n.lastIndex=p,v=n.exec(w),null!==v);)p=n.lastIndex,n===Ea?"!--"===v[1]?n=Gc:void 0!==v[1]?n=Hc:void 0!==
v[2]?(Kc.test(v[2])&&(l=RegExp("\x3c/"+v[2],"g")),n=da):void 0!==v[3]&&(n=da):n===da?"\x3e"===v[0]?(n=l??Ea,F=-1):void 0===v[1]?F=-2:(F=n.lastIndex-v[2].length,I=v[1],n=void 0===v[3]?da:'"'===v[3]?Jc:Ic):n===Jc||n===Ic?n=da:n===Gc||n===Hc?n=Ea:(n=da,l=void 0);p=n===da&&c[t+1].startsWith("/\x3e")?" ":"";m+=n===Ea?w+ue:0<=F?(k.push(I),w.slice(0,F)+"$lit$"+w.slice(F)+S+p):w+S+(-2===F?t:p)}c=[Lb(c,m+(c[h]||"\x3c?\x3e")+(2===a?"\x3c/svg\x3e":"")),k];const [q,x]=c;if(this.el=Xa.createElement(q,b),ea.currentNode=
this.el.content,2===a)a=this.el.content.firstChild,a.replaceWith(...a.childNodes);for(;null!==(a=ea.nextNode())&&g.length<f;){if(1===a.nodeType){if(a.hasAttributes())for(const t of a.getAttributeNames())t.endsWith("$lit$")?(c=x[e++],b=a.getAttribute(t).split(S),c=/([.?@])?(.*)/.exec(c),g.push({type:1,index:d,name:c[2],strings:b,ctor:"."===c[1]?ve:"?"===c[1]?we:"@"===c[1]?xe:Ya}),a.removeAttribute(t)):t.startsWith(S)&&(g.push({type:6,index:d}),a.removeAttribute(t));if(Kc.test(a.tagName)&&(b=a.textContent.split(S),
c=b.length-1,0<c)){a.textContent=Wa?Wa.emptyScript:"";for(h=0;h<c;h++)a.append(b[h],K.createComment("")),ea.nextNode(),g.push({type:2,index:++d});a.append(b[c],K.createComment(""))}}else if(8===a.nodeType)if(a.data===Ec)g.push({type:2,index:d});else for(b=-1;-1!==(b=a.data.indexOf(S,b+1));)g.push({type:7,index:d}),b+=S.length-1;d++}}static createElement(c,a){a=K.createElement("template");return a.innerHTML=c,a}}class ye{constructor(c,a){this._$AV=[];this._$AN=void 0;this._$AD=c;this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(c){const {el:{content:a},
parts:b}=this._$AD,d=(c?.creationScope??K).importNode(a,!0);ea.currentNode=d;let e=ea.nextNode(),f=0,g=0,h=b[0];for(;void 0!==h;){if(f===h.index){let k;2===h.type?k=new Za(e,e.nextSibling,this,c):1===h.type?k=new h.ctor(e,h.name,h.strings,this,c):6===h.type&&(k=new ze(e,this,c));this._$AV.push(k);h=b[++g]}f!==h?.index&&(e=ea.nextNode(),f++)}return ea.currentNode=K,d}p(c){let a=0;for(const b of this._$AV)void 0!==b&&(void 0!==b.strings?(b._$AI(c,b,a),a+=b.strings.length-2):b._$AI(c[a])),a++}}class Za{get _$AU(){return this._$AM?._$AU??
this._$Cv}constructor(c,a,b,d){this.type=2;this._$AH=B;this._$AN=void 0;this._$AA=c;this._$AB=a;this._$AM=b;this.options=d;this._$Cv=d?.isConnected??!0}get parentNode(){let c=this._$AA.parentNode;const a=this._$AM;return void 0!==a&&11===c?.nodeType&&(c=a.parentNode),c}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(c,a=this){c=ha(this,c,a);ua(c)?c===B||null==c||""===c?(this._$AH!==B&&this._$AR(),this._$AH=B):c!==this._$AH&&c!==ia&&this._(c):void 0!==c._$litType$?this.g(c):void 0!==
c.nodeType?this.$(c):(a=c,Fc(a)||"function"==typeof a?.[Symbol.iterator]?this.T(c):this._(c))}k(c){return this._$AA.parentNode.insertBefore(c,this._$AB)}$(c){this._$AH!==c&&(this._$AR(),this._$AH=this.k(c))}_(c){this._$AH!==B&&ua(this._$AH)?this._$AA.nextSibling.data=c:this.$(K.createTextNode(c));this._$AH=c}g(c){const {values:a,_$litType$:b}=c;c="number"==typeof b?this._$AC(c):(void 0===b.el&&(b.el=Xa.createElement(Lb(b.h,b.h[0]),this.options)),b);if(this._$AH?._$AD===c)this._$AH.p(a);else{c=new ye(c,
this);const d=c.u(this.options);c.p(a);this.$(d);this._$AH=c}}_$AC(c){let a=Lc.get(c.strings);return void 0===a&&Lc.set(c.strings,a=new Xa(c)),a}T(c){Fc(this._$AH)||(this._$AH=[],this._$AR());const a=this._$AH;let b,d=0;for(const e of c)d===a.length?a.push(b=new Za(this.k(K.createComment("")),this.k(K.createComment("")),this,this.options)):b=a[d],b._$AI(e),d++;d<a.length&&(this._$AR(b&&b._$AB.nextSibling,d),a.length=d)}_$AR(c=this._$AA.nextSibling,a){for(this._$AP?.(!1,!0,a);c&&c!==this._$AB;)a=c.nextSibling,
c.remove(),c=a}setConnected(c){void 0===this._$AM&&(this._$Cv=c,this._$AP?.(c))}}class Ya{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(c,a,b,d,e){this.type=1;this._$AH=B;this._$AN=void 0;this.element=c;this.name=a;this._$AM=d;this.options=e;2<b.length||""!==b[0]||""!==b[1]?(this._$AH=Array(b.length-1).fill(new String),this.strings=b):this._$AH=B}_$AI(c,a=this,b,d){const e=this.strings;let f=!1;if(void 0===e)c=ha(this,c,a,0),(f=!ua(c)||c!==this._$AH&&c!==ia)&&
(this._$AH=c);else{const g=c;let h,k;c=e[0];for(h=0;h<e.length-1;h++)k=ha(this,g[b+h],a,h),k===ia&&(k=this._$AH[h]),f||=!ua(k)||k!==this._$AH[h],k===B?c=B:c!==B&&(c+=(k??"")+e[h+1]),this._$AH[h]=k}f&&!d&&this.O(c)}O(c){c===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,c??"")}}class ve extends Ya{constructor(){super(...arguments);this.type=3}O(c){this.element[this.name]=c===B?void 0:c}}class we extends Ya{constructor(){super(...arguments);this.type=4}O(c){this.element.toggleAttribute(this.name,
!!c&&c!==B)}}class xe extends Ya{constructor(c,a,b,d,e){super(c,a,b,d,e);this.type=5}_$AI(c,a=this){if((c=ha(this,c,a,0)??B)!==ia){a=this._$AH;var b=c===B&&a!==B||c.capture!==a.capture||c.once!==a.once||c.passive!==a.passive,d=c!==B&&(a===B||b);b&&this.element.removeEventListener(this.name,this,a);d&&this.element.addEventListener(this.name,this,c);this._$AH=c}}handleEvent(c){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,c):this._$AH.handleEvent(c)}}class ze{constructor(c,
a,b){this.element=c;this.type=6;this._$AN=void 0;this._$AM=a;this.options=b}get _$AU(){return this._$AM._$AU}_$AI(c){ha(this,c)}}(0,Va.litHtmlPolyfillSupport)?.(Xa,Za);(Va.litHtmlVersions??(Va.litHtmlVersions=[])).push("3.1.1");class $a extends ra{constructor(){super(...arguments);this.renderOptions={host:this};this._$Do=void 0}createRenderRoot(){const c=super.createRenderRoot();let a;return(a=this.renderOptions).renderBefore??(a.renderBefore=c.firstChild),c}update(c){const a=this.render();this.hasUpdated||
(this.renderOptions.isConnected=this.isConnected);super.update(c);c=this.renderRoot;var b=this.renderOptions;const d=b?.renderBefore??c;var e=d._$litPart$;void 0===e&&(e=b?.renderBefore??null,d._$litPart$=e=new Za(c.insertBefore(K.createComment(""),e),e,void 0,b??{}));this._$Do=(e._$AI(a),e)}connectedCallback(){super.connectedCallback();this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback();this._$Do?.setConnected(!1)}render(){return ia}}$a._$litElement$=!0;$a.finalized=!0;
globalThis.litElementHydrateSupport?.({LitElement:$a});(0,globalThis.litElementPolyfillSupport)?.({LitElement:$a});let Mc;((Mc=globalThis).litElementVersions??(Mc.litElementVersions=[])).push("4.0.3");const Ae=c=>class extends c{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(a,b,d){super.attributeChangedCallback(a,b,d);"theme"===a&&this._set_theme(d)}},Ob=[],Cb=c=>class extends Ae(c){static finalize(){super.finalize();
if(!this.elementStyles){var a=this.prototype._template;a&&!Nb(this)&&Ed(this.getStylesForThis(),a)}}static finalizeStyles(a){const b=this.getStylesForThis();return a?[...super.finalizeStyles(a),...b]:b}static getStylesForThis(){const a=Object.getPrototypeOf(this.prototype);this.__themes=[...((a?a.constructor.__themes:[])||[]),...Fd(this.is)];const b=this.__themes.flatMap(d=>d.styles);return b.filter((d,e)=>e===b.lastIndexOf(d))}},Be=(c,...a)=>{const b=document.createElement("style");b.id=c;b.textContent=
a.map(d=>d.toString()).join("\n").replace(":host","html");document.head.insertAdjacentElement("afterbegin",b)},sa=(c,...a)=>{Be(`lumo-${c}`,a)},Ce=E`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`;sa("color-props",Ce);const De=E`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;O("",De,{moduleId:"lumo-color"});const Ee=E`
  @font-face {
    font-family: 'lumo-icons';
    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==)
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --lumo-icons-align-center: '\\ea01';
    --lumo-icons-align-left: '\\ea02';
    --lumo-icons-align-right: '\\ea03';
    --lumo-icons-angle-down: '\\ea04';
    --lumo-icons-angle-left: '\\ea05';
    --lumo-icons-angle-right: '\\ea06';
    --lumo-icons-angle-up: '\\ea07';
    --lumo-icons-arrow-down: '\\ea08';
    --lumo-icons-arrow-left: '\\ea09';
    --lumo-icons-arrow-right: '\\ea0a';
    --lumo-icons-arrow-up: '\\ea0b';
    --lumo-icons-bar-chart: '\\ea0c';
    --lumo-icons-bell: '\\ea0d';
    --lumo-icons-calendar: '\\ea0e';
    --lumo-icons-checkmark: '\\ea0f';
    --lumo-icons-chevron-down: '\\ea10';
    --lumo-icons-chevron-left: '\\ea11';
    --lumo-icons-chevron-right: '\\ea12';
    --lumo-icons-chevron-up: '\\ea13';
    --lumo-icons-clock: '\\ea14';
    --lumo-icons-cog: '\\ea15';
    --lumo-icons-cross: '\\ea16';
    --lumo-icons-download: '\\ea17';
    --lumo-icons-dropdown: '\\ea18';
    --lumo-icons-edit: '\\ea19';
    --lumo-icons-error: '\\ea1a';
    --lumo-icons-eye: '\\ea1b';
    --lumo-icons-eye-disabled: '\\ea1c';
    --lumo-icons-menu: '\\ea1d';
    --lumo-icons-minus: '\\ea1e';
    --lumo-icons-ordered-list: '\\ea1f';
    --lumo-icons-phone: '\\ea20';
    --lumo-icons-photo: '\\ea21';
    --lumo-icons-play: '\\ea22';
    --lumo-icons-plus: '\\ea23';
    --lumo-icons-redo: '\\ea24';
    --lumo-icons-reload: '\\ea25';
    --lumo-icons-search: '\\ea26';
    --lumo-icons-undo: '\\ea27';
    --lumo-icons-unordered-list: '\\ea28';
    --lumo-icons-upload: '\\ea29';
    --lumo-icons-user: '\\ea2a';
  }
`;sa("font-icons",Ee);const Fe=E`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`;sa("sizing-props",Fe);const Ge=E`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`;sa("spacing-props",Ge);const He=E`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;E`
  html {
    /* Button */
    --vaadin-button-background: var(--lumo-contrast-5pct);
    --vaadin-button-border: none;
    --vaadin-button-border-radius: var(--lumo-border-radius-m);
    --vaadin-button-font-size: var(--lumo-font-size-m);
    --vaadin-button-font-weight: 500;
    --vaadin-button-height: var(--lumo-size-m);
    --vaadin-button-margin: var(--lumo-space-xs) 0;
    --vaadin-button-min-width: calc(var(--vaadin-button-height) * 2);
    --vaadin-button-padding: 0 calc(var(--vaadin-button-height) / 3 + var(--lumo-border-radius-m) / 2);
    --vaadin-button-text-color: var(--lumo-primary-text-color);
    --vaadin-button-primary-background: var(--lumo-primary-color);
    --vaadin-button-primary-border: none;
    --vaadin-button-primary-font-weight: 600;
    --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    --vaadin-button-tertiary-background: transparent !important;
    --vaadin-button-tertiary-text-color: var(--lumo-primary-text-color);
    --vaadin-button-tertiary-font-weight: 500;
    --vaadin-button-tertiary-padding: 0 calc(var(--vaadin-button-height) / 6);
    /* Checkbox */
    --vaadin-checkbox-background: var(--lumo-contrast-20pct);
    --vaadin-checkbox-background-hover: var(--lumo-contrast-30pct);
    --vaadin-checkbox-border-radius: var(--lumo-border-radius-s);
    --vaadin-checkbox-checkmark-char: var(--lumo-icons-checkmark);
    --vaadin-checkbox-checkmark-char-indeterminate: '';
    --vaadin-checkbox-checkmark-color: var(--lumo-primary-contrast-color);
    --vaadin-checkbox-checkmark-size: calc(var(--vaadin-checkbox-size) + 2px);
    --vaadin-checkbox-label-color: var(--lumo-body-text-color);
    --vaadin-checkbox-label-font-size: var(--lumo-font-size-m);
    --vaadin-checkbox-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    /* Radio button */
    --vaadin-radio-button-background: var(--lumo-contrast-20pct);
    --vaadin-radio-button-background-hover: var(--lumo-contrast-30pct);
    --vaadin-radio-button-dot-color: var(--lumo-primary-contrast-color);
    --vaadin-radio-button-dot-size: 3px;
    --vaadin-radio-button-label-color: var(--lumo-body-text-color);
    --vaadin-radio-button-label-font-size: var(--lumo-font-size-m);
    --vaadin-radio-button-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs)
      var(--lumo-space-xs);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-selection-color: var(--lumo-primary-color);
    --vaadin-selection-color-text: var(--lumo-primary-text-color);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
    --vaadin-focus-ring-color: var(--lumo-primary-color-50pct);
    --vaadin-focus-ring-width: 2px;
    /* Label */
    --vaadin-input-field-label-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-focused-label-color: var(--lumo-primary-text-color);
    --vaadin-input-field-hovered-label-color: var(--lumo-body-text-color);
    --vaadin-input-field-label-font-size: var(--lumo-font-size-s);
    --vaadin-input-field-label-font-weight: 500;
    /* Helper */
    --vaadin-input-field-helper-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-helper-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-helper-font-weight: 400;
    --vaadin-input-field-helper-spacing: 0.4em;
    /* Error message */
    --vaadin-input-field-error-color: var(--lumo-error-text-color);
    --vaadin-input-field-error-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-error-font-weight: 400;
    /* Input field */
    --vaadin-input-field-background: var(--lumo-contrast-10pct);
    --vaadin-input-field-icon-color: var(--lumo-contrast-60pct);
    --vaadin-input-field-icon-size: var(--lumo-icon-size-m);
    --vaadin-input-field-invalid-background: var(--lumo-error-color-10pct);
    --vaadin-input-field-invalid-hover-highlight: var(--lumo-error-color-50pct);
    --vaadin-input-field-height: var(--lumo-size-m);
    --vaadin-input-field-hover-highlight: var(--lumo-contrast-50pct);
    --vaadin-input-field-placeholder-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-readonly-border: 1px dashed var(--lumo-contrast-30pct);
    --vaadin-input-field-value-color: var(--lumo-body-text-color);
    --vaadin-input-field-value-font-size: var(--lumo-font-size-m);
    --vaadin-input-field-value-font-weight: 400;
  }
`;sa("style-props",He);const Ie=E`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,Je=E`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;O("",Je,{moduleId:"lumo-typography"});sa("typography-props",Ie);O("vaadin-checkbox",E`
    :host {
      color: var(--vaadin-checkbox-label-color, var(--lumo-body-text-color));
      font-size: var(--vaadin-checkbox-label-font-size, var(--lumo-font-size-m));
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
      --_checkbox-size: var(--vaadin-checkbox-size, calc(var(--lumo-size-m) / 2));
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      --_selection-color: var(--vaadin-selection-color, var(--lumo-primary-color));
    }

    :host([has-label]) ::slotted(label) {
      padding: var(
        --vaadin-checkbox-label-padding,
        var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs)
      );
    }

    [part='checkbox'] {
      width: var(--_checkbox-size);
      height: var(--_checkbox-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--vaadin-checkbox-border-radius, var(--lumo-border-radius-s));
      background: var(--vaadin-checkbox-background, var(--lumo-contrast-20pct));
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      cursor: var(--lumo-clickable-cursor);
      /* Default field border color */
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
    }

    :host([indeterminate]),
    :host([checked]) {
      --vaadin-input-field-border-color: transparent;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--_selection-color);
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--vaadin-checkbox-checkmark-char, var(--lumo-icons-checkmark));
      color: var(--vaadin-checkbox-checkmark-color, var(--lumo-primary-contrast-color));
      font-size: var(--vaadin-checkbox-checkmark-size, calc(var(--_checkbox-size) + 2px));
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: var(--vaadin-checkbox-checkmark-char-indeterminate, '');
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 calc(var(--_focus-ring-width) + 1px) var(--_focus-ring-color),
        inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
      --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_checkbox-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background: var(--vaadin-checkbox-background-hover, var(--lumo-contrast-30pct));
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background: var(--vaadin-checkbox-background, var(--lumo-contrast-20pct));
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,{moduleId:"lumo-checkbox"});O("vaadin-grid",E`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--vaadin-grid-cell-background, var(--lumo-base-color));
      cursor: default;
      --_cell-padding: var(--vaadin-grid-cell-padding, var(--_cell-default-padding));
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: inherit;
      padding: var(--_cell-padding);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='focused-cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='focused-cell']:focus::before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      inset: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='last-row'][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    #scroller [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'],
    [part~='footer-cell'],
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] {
      font-weight: 400;
    }

    [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    /* Hide header row top border if previous row is hidden */
    [part~='row'][hidden] + [part~='row'] [part~='header-cell'] {
      border-top: 0;
    }

    [part~='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part~='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      width: 3px;
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    [first-frozen-to-end] {
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='even-row'] [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='even-row'] [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    :host([theme~='compact']) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl']) [first-frozen-to-end] {
      border-left: none;
      border-right: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    :host([dir='rtl'][overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"});window.JSCompiler_renameProperty=function(c,a){return c};let Hd=/(url\()([^)]*)(\))/g,Gd=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,Ka,J;const Ke=!window.ShadyDOM||!window.ShadyDOM.inUse;!(window.ShadyCSS&&!window.ShadyCSS.nativeCss);const Le=Ke&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const c=new CSSStyleSheet;c.replaceSync("");const a=document.createElement("div");a.attachShadow({mode:"open"});a.shadowRoot.adoptedStyleSheets=
[c];return a.shadowRoot.adoptedStyleSheets[0]===c}catch(c){return!1}})();let Me=window.Polymer&&window.Polymer.rootPath||kb(document.baseURI||window.location.href),Na=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures||!1;let Db=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Ne=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Oe=window.Polymer&&window.Polymer.legacyOptimizations||!1,Pe=window.Polymer&&window.Polymer.legacyWarnings||
!1,Qe=window.Polymer&&window.Polymer.syncInitialRender||!1,qb=window.Polymer&&window.Polymer.legacyUndefined||!1,Re=window.Polymer&&window.Polymer.orderedComputed||!1,Nc=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Se=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1;let Te=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,Ue=0;const C=function(c){let a=
c.__mixinApplications;a||(a=new WeakMap,c.__mixinApplications=a);let b=Ue++;return function(d){let e=d.__mixinSet;if(e&&e[b])return d;let f=a,g=f.get(d);g||(g=c(d),f.set(d,g),d=Object.create(g.__mixinSet||e||null),d[b]=!0,g.__mixinSet=d);return g}};let Fa={},ab={};class ja extends HTMLElement{static get observedAttributes(){return["id"]}static import(c,a){return c?(c=Fa[c]||ab[c.toLowerCase()])&&a?c.querySelector(a):c:null}attributeChangedCallback(c,a,b,d){a!==b&&this.register()}get assetpath(){if(!this.__assetpath){var c=
window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument;c=va(this.getAttribute("assetpath")||"",c.baseURI);this.__assetpath=kb(c)}return this.__assetpath}register(c){if(c=c||this.id){if(Db&&void 0!==(Fa[c]||ab[c.toLowerCase()]))throw Fa[c]=ab[c.toLowerCase()]=null,Error(`strictTemplatePolicy: dom-module ${c} re-registered`);this.id=c;Fa[c]=ab[c.toLowerCase()]=this;this.querySelector("style")&&console.warn("dom-module %s has style outside template",
this.id)}}}ja.prototype.modules=Fa;customElements.define("dom-module",ja);const Z=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?c=>ShadyDOM.patch(c):c=>c,La={},Kd=/-[a-z]/g,Ld=/([A-Z])/g;let Ve=0,Oc=0,ta=[],We=0,Eb=!1,Pc=document.createTextNode("");(new window.MutationObserver(function(){Eb=!1;const c=ta.length;for(let a=0;a<c;a++){let b=ta[a];if(b)try{b()}catch(d){setTimeout(()=>{throw d;})}}ta.splice(0,c);Oc+=c})).observe(Pc,{characterData:!0});
const Xe={run(c){Eb||(Eb=!0,Pc.textContent=We++);ta.push(c);return Ve++},cancel(c){const a=c-Oc;if(0<=a){if(!ta[a])throw Error("invalid async handle: "+c);ta[a]=null}}},Qc=C(c=>{class a extends c{static createProperties(b){const d=this.prototype;for(let e in b)e in d||d._createPropertyAccessor(e)}static attributeNameForProperty(b){return b.toLowerCase()}static typeForProperty(b){}_createPropertyAccessor(b,d){this._addPropertyToAttributeMap(b);this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=
Object.assign({},this.__dataHasAccessor));this.__dataHasAccessor[b]||(this.__dataHasAccessor[b]=!0,this._definePropertyAccessor(b,d))}_addPropertyToAttributeMap(b){this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let d=this.__dataAttributes[b];d||(d=this.constructor.attributeNameForProperty(b),this.__dataAttributes[d]=b);return d}_definePropertyAccessor(b,d){Object.defineProperty(this,b,{get(){return this.__data[b]},set:d?function(){}:function(e){this._setPendingProperty(b,
e,!0)&&this._invalidateProperties()}})}constructor(){super();this.__dataInvalid=this.__dataReady=this.__dataEnabled=!1;this.__data={};this.__dataInstanceProps=this.__dataOld=this.__dataPending=null;this.__dataCounter=0;this.__serializing=!1;this._initializeProperties()}ready(){this.__dataReady=!0;this._flushProperties()}_initializeProperties(){for(let b in this.__dataHasAccessor)this.hasOwnProperty(b)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[b]=this[b],delete this[b])}_initializeInstanceProperties(b){Object.assign(this,
b)}_setProperty(b,d){this._setPendingProperty(b,d)&&this._invalidateProperties()}_getProperty(b){return this.__data[b]}_setPendingProperty(b,d,e){e=this.__data[b];let f=this._shouldPropertyChange(b,d,e);f&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||b in this.__dataOld||(this.__dataOld[b]=e),this.__data[b]=d,this.__dataPending[b]=d);return f}_isPropertyPending(b){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(b))}_invalidateProperties(){!this.__dataInvalid&&
this.__dataReady&&(this.__dataInvalid=!0,Xe.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const b=this.__data,d=this.__dataPending,e=this.__dataOld;this._shouldPropertiesChange(b,d,e)&&(this.__dataOld=this.__dataPending=null,this._propertiesChanged(b,
d,e));this.__dataCounter--}_shouldPropertiesChange(b,d,e){return!!d}_propertiesChanged(b,d,e){}_shouldPropertyChange(b,d,e){return e!==d&&(e===e||d===d)}attributeChangedCallback(b,d,e,f){d!==e&&this._attributeToProperty(b,e);super.attributeChangedCallback&&super.attributeChangedCallback(b,d,e,f)}_attributeToProperty(b,d,e){if(!this.__serializing){const f=this.__dataAttributes;b=f&&f[b]||b;this[b]=this._deserializeValue(d,e||this.constructor.typeForProperty(b))}}_propertyToAttribute(b,d,e){this.__serializing=
!0;e=3>arguments.length?this[b]:e;this._valueToNodeAttribute(this,e,d||this.constructor.attributeNameForProperty(b));this.__serializing=!1}_valueToNodeAttribute(b,d,e){d=this._serializeValue(d);if("class"===e||"name"===e||"slot"===e)b=Z(b);void 0===d?b.removeAttribute(e):b.setAttribute(e,""===d&&window.trustedTypes?window.trustedTypes.emptyScript:d)}_serializeValue(b){switch(typeof b){case "boolean":return b?"":void 0;default:return null!=b?b.toString():void 0}}_deserializeValue(b,d){switch(d){case Boolean:return null!==
b;case Number:return Number(b);default:return b}}}return a}),Rc={};let bb=HTMLElement.prototype;for(;bb;){let c=Object.getOwnPropertyNames(bb);for(let a=0;a<c.length;a++)Rc[c[a]]=!0;bb=Object.getPrototypeOf(bb)}const Ye=(()=>window.trustedTypes?c=>trustedTypes.isHTML(c)||trustedTypes.isScript(c)||trustedTypes.isScriptURL(c):()=>!1)(),Ze=C(c=>{c=Qc(c);class a extends c{static createPropertiesForAttributes(){let b=this.observedAttributes;for(let d=0;d<b.length;d++)this.prototype._createPropertyAccessor(Vb(b[d]))}static attributeNameForProperty(b){return Ma(b)}_initializeProperties(){this.__dataProto&&
(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null);super._initializeProperties()}_initializeProtoProperties(b){for(let d in b)this._setProperty(d,b[d])}_ensureAttribute(b,d){this.hasAttribute(b)||this._valueToNodeAttribute(this,d,b)}_serializeValue(b){switch(typeof b){case "object":if(b instanceof Date)return b.toString();if(b){if(Ye(b))return b;try{return JSON.stringify(b)}catch(d){return""}}default:return super._serializeValue(b)}}_deserializeValue(b,d){let e;switch(d){case Object:try{e=
JSON.parse(b)}catch(f){e=b}break;case Array:try{e=JSON.parse(b)}catch(f){e=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${b}`)}break;case Date:e=isNaN(b)?String(b):Number(b);e=new Date(e);break;default:e=super._deserializeValue(b,d)}return e}_definePropertyAccessor(b,d){if(!Rc[b]){let e=this[b];void 0!==e&&(this.__data?this._setPendingProperty(b,e):(this.__dataProto?this.hasOwnProperty("__dataProto")||(this.__dataProto=Object.create(this.__dataProto)):this.__dataProto={},
this.__dataProto[b]=e))}super._definePropertyAccessor(b,d)}_hasAccessor(b){return this.__dataHasAccessor&&this.__dataHasAccessor[b]}_isPropertyPending(b){return!!(this.__dataPending&&b in this.__dataPending)}}return a}),$e={"dom-if":!0,"dom-repeat":!0};let Sc=!1,Tc=!1;const af=(()=>{const c=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:a=>a});return(a,b,d)=>{b=b.getAttribute(d);c&&d.startsWith("on-")?a.setAttribute(d,c.createScript(b,
d)):a.setAttribute(d,b)}})(),bf=C(c=>{class a extends c{static _parseTemplate(b,d){if(!b._templateInfo){let e=b._templateInfo={};e.nodeInfoList=[];e.nestedTemplate=!!d;e.stripWhiteSpace=d&&d.stripWhiteSpace||b.hasAttribute&&b.hasAttribute("strip-whitespace");this._parseTemplateContent(b,e,{parent:null})}return b._templateInfo}static _parseTemplateContent(b,d,e){return this._parseTemplateNode(b.content,d,e)}static _parseTemplateNode(b,d,e){let f=!1;"template"!=b.localName||b.hasAttribute("preserve-content")?
"slot"===b.localName&&(d.hasInsertionPoint=!0):f=this._parseTemplateNestedTemplate(b,d,e)||f;if(!Sc){Sc=!0;const g=document.createElement("textarea");g.placeholder="a";Tc=g.placeholder===g.textContent}Tc&&"textarea"===b.localName&&b.placeholder&&b.placeholder===b.textContent&&(b.textContent=null);b.firstChild&&this._parseTemplateChildNodes(b,d,e);b.hasAttributes&&b.hasAttributes()&&(f=this._parseTemplateNodeAttributes(b,d,e)||f);return f||e.noted}static _parseTemplateChildNodes(b,d,e){if("script"!==
b.localName&&"style"!==b.localName)for(let h=b.firstChild,k=0,l;h;h=l){if("template"==h.localName){var f=h,g=f.getAttribute("is");if(g&&$e[g]){let m=f;m.removeAttribute("is");f=m.ownerDocument.createElement(g);m.parentNode.replaceChild(f,m);for(f.appendChild(m);m.attributes.length;)({name:g}=m.attributes[0]),af(f,m,g),m.removeAttribute(g)}h=f}l=h.nextSibling;if(h.nodeType===Node.TEXT_NODE){for(f=l;f&&f.nodeType===Node.TEXT_NODE;)h.textContent+=f.textContent,l=f.nextSibling,b.removeChild(f),f=l;if(d.stripWhiteSpace&&
!h.textContent.trim()){b.removeChild(h);continue}}f={parentIndex:k,parentInfo:e};this._parseTemplateNode(h,d,f)&&(f.infoIndex=d.nodeInfoList.push(f)-1);h.parentNode&&k++}}static _parseTemplateNestedTemplate(b,d,e){d=this._parseTemplate(b,d);(d.content=b.content.ownerDocument.createDocumentFragment()).appendChild(b.content);e.templateInfo=d;return!0}static _parseTemplateNodeAttributes(b,d,e){let f=!1,g=Array.from(b.attributes);for(let h=g.length-1,k;k=g[h];h--)f=this._parseTemplateNodeAttribute(b,
d,e,k.name,k.value)||f;return f}static _parseTemplateNodeAttribute(b,d,e,f,g){return"on-"===f.slice(0,3)?(b.removeAttribute(f),e.events=e.events||[],e.events.push({name:f.slice(3),value:g}),!0):"id"===f?(e.id=g,!0):!1}static _contentForTemplate(b){let d=b._templateInfo;return d&&d.content||b.content}_stampTemplate(b,d){b&&!b.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(b);d=d||this.constructor._parseTemplate(b);let e=d.nodeInfoList;b=document.importNode(d.content||
b.content,!0);b.__noInsertionPoint=!d.hasInsertionPoint;let f=b.nodeList=Array(e.length);b.$={};for(let k=0,l=e.length,m;k<l&&(m=e[k]);k++){let n=f[k]=Wb(b,m);m.id&&(b.$[m.id]=n);var g=n,h=d;m.templateInfo&&(g._templateInfo=m.templateInfo,g._parentTemplateInfo=h);g=n;h=m;if(h.events&&h.events.length)for(let p=0,q=h.events,x;p<q.length&&(x=q[p]);p++)this._addMethodEventListenerToNode(g,x.name,x.value,this)}return b}_addMethodEventListenerToNode(b,d,e,f){e=Md(f||b,d,e);this._addEventListenerToNode(b,
d,e);return e}_addEventListenerToNode(b,d,e){b.addEventListener(d,e)}_removeEventListenerFromNode(b,d,e){b.removeEventListener(d,e)}}return a});let ya=0;const za=[],r={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},cf=/[A-Z]/,Uc=(c,a,b,d,e)=>{var f=e?Y(c):c;if(a=a[f])for(f=0;f<a.length;f++){var g=a[f];if(g.info.lastRun!==ya&&(!e||mb(c,g.trigger))){g.info.lastRun=ya;g=g.info;var h=b,k=
d;let l=0,m=h.length-1,n=-1;for(;l<=m;){const p=l+m>>1,q=k.get(h[p].methodInfo)-k.get(g.methodInfo);if(0>q)l=p+1;else if(0<q)m=p-1;else{n=p;break}}0>n&&(n=m+1);h.splice(n,0,g)}}},Td=[],Vc=RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})",
"g"),ef=C(c=>{const a=bf(Ze(c));class b extends a{constructor(){super();this.__isPropertyEffectsClient=!0;this.__dataClientsReady;this.__dataPendingClients;this.__dataToNotify;this.__dataLinkedPaths;this.__dataHasPaths;this.__dataCompoundStorage;this.__dataHost;this.__dataTemp;this.__dataClientsInitialized;this.__data;this.__dataPending;this.__dataOld;this.__computeEffects;this.__computeInfo;this.__reflectEffects;this.__notifyEffects;this.__propagateEffects;this.__observeEffects;this.__readOnly;this.__templateInfo;
this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return r}_initializeProperties(){super._initializeProperties();this._registerHost();this.__dataClientsReady=!1;this.__dataLinkedPaths=this.__dataToNotify=this.__dataPendingClients=null;this.__dataHasPaths=!1;this.__dataCompoundStorage=this.__dataCompoundStorage||null;this.__dataHost=this.__dataHost||null;this.__dataTemp={};this.__dataClientsInitialized=!1}_registerHost(){if(Ga.length){let d=Ga[Ga.length-1];d._enqueueClient(this);this.__dataHost=
d}}_initializeProtoProperties(d){this.__data=Object.create(d);this.__dataPending=Object.create(d);this.__dataOld={}}_initializeInstanceProperties(d){let e=this[r.READ_ONLY];for(let f in d)e&&e[f]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[f]=this.__dataPending[f]=d[f])}_addPropertyEffect(d,e,f){this._createPropertyAccessor(d,e==r.READ_ONLY);let g=lb(this,e,!0)[d];g||=this[e][d]=[];g.push(f)}_removePropertyEffect(d,e,f){d=lb(this,e,!0)[d];f=d.indexOf(f);
0<=f&&d.splice(f,1)}_hasPropertyEffect(d,e){e=this[e];return!(!e||!e[d])}_hasReadOnlyEffect(d){return this._hasPropertyEffect(d,r.READ_ONLY)}_hasNotifyEffect(d){return this._hasPropertyEffect(d,r.NOTIFY)}_hasReflectEffect(d){return this._hasPropertyEffect(d,r.REFLECT)}_hasComputedEffect(d){return this._hasPropertyEffect(d,r.COMPUTE)}_setPendingPropertyOrPath(d,e,f,g){if(g||Y(Array.isArray(d)?d[0]:d)!==d){if(!g&&(g=G(this,d),d=Ub(this,d,e),!d||!super._shouldPropertyChange(d,e,g)))return!1;this.__dataHasPaths=
!0;if(this._setPendingProperty(d,e,f)){if(f=this.__dataLinkedPaths)for(let h in f)g=f[h],0===d.indexOf(h+".")?(g+=d.slice(h.length),this._setPendingPropertyOrPath(g,e,!0,!0)):0===d.indexOf(g+".")&&(g=h+d.slice(g.length),this._setPendingPropertyOrPath(g,e,!0,!0));return!0}}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[d])return this._setPendingProperty(d,e,f);this[d]=e}return!1}_setUnmanagedPropertyToNode(d,e,f){if(f!==d[e]||"object"==typeof f)"className"===e&&(d=Z(d)),d[e]=f}_setPendingProperty(d,
e,f){let g=this.__dataHasPaths&&0<=d.indexOf(".");if(this._shouldPropertyChange(d,e,(g?this.__dataTemp:this.__data)[d])){this.__dataPending||(this.__dataPending={},this.__dataOld={});d in this.__dataOld||(this.__dataOld[d]=this.__data[d]);g?this.__dataTemp[d]=e:this.__data[d]=e;this.__dataPending[d]=e;if(g||this[r.NOTIFY]&&this[r.NOTIFY][d])this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[d]=f;return!0}return!1}_setProperty(d,e){this._setPendingProperty(d,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&
this._flushProperties()}_enqueueClient(d){this.__dataPendingClients=this.__dataPendingClients||[];d!==this&&this.__dataPendingClients.push(d)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let d=this.__dataPendingClients;if(d){this.__dataPendingClients=null;for(let e=0;e<d.length;e++){let f=d[e];f.__dataEnabled?f.__dataPending&&f._flushProperties():f._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(d,
e){for(let f in d)!e&&this[r.READ_ONLY]&&this[r.READ_ONLY][f]||this._setPendingPropertyOrPath(f,d[f],!0);this._invalidateProperties()}ready(){this._flushProperties();this.__dataClientsReady||this._flushClients();this.__dataPending&&this._flushProperties()}_propertiesChanged(d,e,f){d=this.__dataHasPaths;this.__dataHasPaths=!1;var g;if(g=this[r.COMPUTE])if(Re){ya++;var h=Pd(this),k=[];for(var l in e)Uc(l,g,k,h,d);for(;l=k.shift();)Zb(this,"",e,f,l)&&Uc(l.methodInfo,g,k,h,d);Object.assign(f,this.__dataOld);
Object.assign(e,this.__dataPending);this.__dataPending=null}else for(h=e;xa(this,g,h,f,d);)Object.assign(f,this.__dataOld),Object.assign(e,this.__dataPending),h=this.__dataPending,this.__dataPending=null;g=this.__dataToNotify;this.__dataToNotify=null;this._propagatePropertyChanges(e,f,d);this._flushClients();xa(this,this[r.REFLECT],e,f,d);xa(this,this[r.OBSERVE],e,f,d);if(g){h=this[r.NOTIFY];let t;k=ya++;for(let I in g)if(g[I]){if(l=h){var m=h;l=k;var n=I,p=e,q=f,x=d;let v=!1,F=x?Y(n):n;if(m=m[F])for(let Ha=
0,df=m.length,T;Ha<df&&(T=m[Ha]);Ha++)T.info&&T.info.lastRun===l||x&&!mb(n,T.trigger)||(T.info&&(T.info.lastRun=l),T.fn(this,n,p,q,T.info,x,void 0),v=!0);l=v}if(l)t=!0;else{if(l=d)l=I,n=e,p=Y(l),p!==l?(p=Ma(p)+"-changed",Yb(this,p,n[l],l),l=!0):l=!1;l&&(t=!0)}}let w;t&&(w=this.__dataHost)&&w._invalidateProperties&&w._invalidateProperties()}1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(d,e,f){this[r.PROPAGATE]&&xa(this,this[r.PROPAGATE],d,e,f);this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,
d,e,f)}_runEffectsForTemplate(d,e,f,g){const h=(k,l)=>{xa(this,d.propertyEffects,k,f,l,d.nodeList);for(let m=d.firstChild;m;m=m.nextSibling)this._runEffectsForTemplate(m,k,f,l)};d.runEffects?d.runEffects(h,e,g):h(e,g)}linkPaths(d,e){d=wa(d);e=wa(e);this.__dataLinkedPaths=this.__dataLinkedPaths||{};this.__dataLinkedPaths[d]=e}unlinkPaths(d){d=wa(d);this.__dataLinkedPaths&&delete this.__dataLinkedPaths[d]}notifySplices(d,e){let f={path:""};d=G(this,d,f);dc(this,d,f.path,e)}get(d,e){return G(e||this,
d)}set(d,e,f){f?Ub(f,d,e):this[r.READ_ONLY]&&this[r.READ_ONLY][d]||this._setPendingPropertyOrPath(d,e,!0)&&this._invalidateProperties()}push(d,...e){let f={path:""};d=G(this,d,f);let g=d.length,h=d.push(...e);e.length&&Aa(this,d,f.path,g,e.length,[]);return h}pop(d){let e={path:""};d=G(this,d,e);let f=!!d.length,g=d.pop();f&&Aa(this,d,e.path,d.length,0,[g]);return g}splice(d,e,f,...g){let h={path:""},k=G(this,d,h);0>e?e=k.length-Math.floor(-e):e&&=Math.floor(e);let l;l=2===arguments.length?k.splice(e):
k.splice(e,f,...g);(g.length||l.length)&&Aa(this,k,h.path,e,g.length,l);return l}shift(d){let e={path:""};d=G(this,d,e);let f=!!d.length,g=d.shift();f&&Aa(this,d,e.path,0,0,[g]);return g}unshift(d,...e){let f={path:""};d=G(this,d,f);let g=d.unshift(...e);e.length&&Aa(this,d,f.path,0,e.length,[]);return g}notifyPath(d,e){if(1==arguments.length){var f={path:""};e=G(this,d,f);f=f.path}else f=Array.isArray(d)?wa(d):d;this._setPendingPropertyOrPath(f,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(d,
e){this._addPropertyEffect(d,r.READ_ONLY);e&&(this["_set"+Vd(d)]=function(f){this._setProperty(d,f)})}_createPropertyObserver(d,e,f){let g={property:d,method:e,dynamicFn:!!f};this._addPropertyEffect(d,r.OBSERVE,{fn:Xb,info:g,trigger:{name:d}});f&&this._addPropertyEffect(e,r.OBSERVE,{fn:Xb,info:g,trigger:{name:e}})}_createMethodObserver(d,e){let f=pb(d);if(!f)throw Error("Malformed observer expression '"+d+"'");ac(this,f,r.OBSERVE,nb,null,e)}_createNotifyingProperty(d){this._addPropertyEffect(d,r.NOTIFY,
{fn:Nd,info:{eventName:Ma(d)+"-changed",property:d}})}_createReflectedProperty(d){let e=this.constructor.attributeNameForProperty(d);"-"===e[0]?console.warn("Property "+d+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(d,r.REFLECT,{fn:Od,info:{attrName:e}})}_createComputedProperty(d,e,f){let g=pb(e);if(!g)throw Error("Malformed computed expression '"+e+"'");e=ac(this,g,r.COMPUTE,
Zb,d,f);lb(this,"__computeInfo")[d]=e}_marshalArgs(d,e,f){const g=this.__data,h=[];for(let k=0,l=d.length;k<l;k++){let {name:m,structured:n,wildcard:p,value:q,literal:x}=d[k];if(!x)if(p){const t=0===e.indexOf(m+"."),w=cc(g,f,t?e:m);q={path:t?e:m,value:w,base:t?G(g,m):w}}else q=n?cc(g,f,m):g[m];if(qb&&!this._overrideLegacyUndefined&&void 0===q&&1<d.length)return za;h[k]=q}return h}static addPropertyEffect(d,e,f){this.prototype._addPropertyEffect(d,e,f)}static createPropertyObserver(d,e,f){this.prototype._createPropertyObserver(d,
e,f)}static createMethodObserver(d,e){this.prototype._createMethodObserver(d,e)}static createNotifyingProperty(d){this.prototype._createNotifyingProperty(d)}static createReadOnlyProperty(d,e){this.prototype._createReadOnlyProperty(d,e)}static createReflectedProperty(d){this.prototype._createReflectedProperty(d)}static createComputedProperty(d,e,f){this.prototype._createComputedProperty(d,e,f)}static bindTemplate(d){return this.prototype._bindTemplate(d)}_bindTemplate(d,e){let f=this.constructor._parseTemplate(d),
g=this.__preBoundTemplateInfo==f;if(!g)for(let h in f.propertyEffects)this._createPropertyAccessor(h);e?(f=Object.create(f),f.wasPreBound=g,this.__templateInfo?(d=d._parentTemplateInfo||this.__templateInfo,e=d.lastChild,f.parent=d,d.lastChild=f,(f.previousSibling=e)?e.nextSibling=f:d.firstChild=f):this.__templateInfo=f):this.__preBoundTemplateInfo=f;return f}static _addTemplatePropertyEffect(d,e,f){(d.hostProps=d.hostProps||{})[e]=!0;d=d.propertyEffects=d.propertyEffects||{};(d[e]=d[e]||[]).push(f)}_stampTemplate(d,
e){e=e||this._bindTemplate(d,!0);Ga.push(this);d=super._stampTemplate(d,e);Ga.pop();e.nodeList=d.nodeList;if(!e.wasPreBound){var f=e.childNodes=[];for(var g=d.firstChild;g;g=g.nextSibling)f.push(g)}d.templateInfo=e;let {nodeList:h,nodeInfoList:k}=e;if(k.length)for(let m=0;m<k.length;m++){let n=h[m],p=k[m].bindings;if(p)for(let q=0;q<p.length;q++){let x=p[q];f=n;g=x;if(g.isCompound){let t=f.__dataCompoundStorage||(f.__dataCompoundStorage={});var l=g.parts;let w=Array(l.length);for(let I=0;I<l.length;I++)w[I]=
l[I].literal;l=g.target;t[l]=w;g.literal&&"property"==g.kind&&("className"===l&&(f=Z(f)),f[l]=g.literal)}Sd(n,this,x)}n.__dataHost=this}this.__dataClientsReady&&(this._runEffectsForTemplate(e,this.__data,null,!1),this._flushClients());return d}_removeBoundDom(d){d=d.templateInfo;const {previousSibling:e,nextSibling:f,parent:g}=d;e?e.nextSibling=f:g&&(g.firstChild=f);f?f.previousSibling=e:g&&(g.lastChild=e);d.nextSibling=d.previousSibling=null;d=d.childNodes;for(let h=0;h<d.length;h++){let k=d[h];
Z(Z(k).parentNode).removeChild(k)}}static _parseTemplateNode(d,e,f){let g=a._parseTemplateNode.call(this,d,e,f);if(d.nodeType===Node.TEXT_NODE){let h=this._parseBindings(d.textContent,e);h&&(d.textContent=bc(h)||" ",ob(this,e,f,"text","textContent",h),g=!0)}return g}static _parseTemplateNodeAttribute(d,e,f,g,h){let k=this._parseBindings(h,e);if(k){h=g;let l="property";cf.test(g)?l="attribute":"$"==g[g.length-1]&&(g=g.slice(0,-1),l="attribute");let m=bc(k);m&&"attribute"==l&&("class"==g&&d.hasAttribute("class")&&
(m+=" "+d.getAttribute(g)),d.setAttribute(g,m));"attribute"==l&&"disable-upgrade$"==h&&d.setAttribute(g,"");"input"===d.localName&&"value"===h&&d.setAttribute(h,"");d.removeAttribute(h);"property"===l&&(g=Vb(g));ob(this,e,f,l,g,k,m);return!0}return a._parseTemplateNodeAttribute.call(this,d,e,f,g,h)}static _parseTemplateNestedTemplate(d,e,f){let g=a._parseTemplateNestedTemplate.call(this,d,e,f);const h=d.parentNode,k=f.templateInfo,l="dom-if"===h.localName,m="dom-repeat"===h.localName;Nc&&(l||m)&&
(h.removeChild(d),f=f.parentInfo,f.templateInfo=k,f.noted=!0,g=!1);d=k.hostProps;if(Se&&l)d&&(e.hostProps=Object.assign(e.hostProps||{},d),Nc||(f.parentInfo.noted=!0));else for(let n in d)ob(this,e,f,"property","_host_"+n,[{mode:"{",source:n,dependencies:[n],hostProp:!0}]);return g}static _parseBindings(d,e){let f=[];for(var g=0,h;null!==(h=Vc.exec(d));){h.index>g&&f.push({literal:d.slice(g,h.index)});g=h[1][0];let m=!!h[2];h=h[3].trim();let n=!1,p="";var k=-1;"{"==g&&0<(k=h.indexOf("::"))&&(p=h.substring(k+
2),h=h.substring(0,k),n=!0);k=pb(h);let q=[];if(k){let {args:x,methodName:t}=k;for(var l=0;l<x.length;l++){let w=x[l];w.literal||q.push(w)}if((l=e.dynamicFns)&&l[t]||k.static)q.push(t),k.dynamicFn=!0}else q.push(h);f.push({source:h,mode:g,negate:m,customEvent:n,signature:k,dependencies:q,event:p});g=Vc.lastIndex}g&&g<d.length&&(d=d.substring(g))&&f.push({literal:d});return f.length?f:null}static _evaluateBinding(d,e,f,g,h,k){d=e.signature?nb(d,f,g,h,e.signature):f!=e.source?G(d,e.source):k&&0<=f.indexOf(".")?
G(d,f):d.__data[f];e.negate&&(d=!d);return d}}return b}),Ga=[],ff=C(c=>{function a(e){e=Object.getPrototypeOf(e);return e.prototype instanceof d?e:null}function b(e){if(!e.hasOwnProperty("__ownProperties")){var f=null;if(e.hasOwnProperty("properties")){var g=e.properties;if(g){f=g;g={};for(let h in f){const k=f[h];g[h]="function"===typeof k?{type:k}:k}f=g}}e.__ownProperties=f}return e.__ownProperties}c=Qc(c);class d extends c{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){const e=
this._properties;this.__observedAttributes=e?Object.keys(e).map(f=>this.prototype._addPropertyToAttributeMap(f)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty("__finalized")){const e=a(this);e&&e.finalize();this.__finalized=!0;this._finalizeClass()}}static _finalizeClass(){const e=b(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty("__properties")){const e=a(this);this.__properties=Object.assign({},e&&e._properties,b(this))}return this.__properties}static typeForProperty(e){return(e=
this._properties[e])&&e.type}_initializeProperties(){this.constructor.finalize();super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback();this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return d}),Wc=window.ShadyCSS&&window.ShadyCSS.cssBuild,gf=C(c=>{function a(e,f,g,h){if(!Wc){const p=f.content.querySelectorAll("style"),q=Sb(f);var k=Jd(g),l=f.content.firstElementChild;for(var m=0;m<k.length;m++){var n=
k[m];n.textContent=e._processStyleText(n.textContent,h);f.content.insertBefore(n,l)}k=0;for(l=0;l<q.length;l++)m=q[l],n=p[k],n!==m?(m=m.cloneNode(!0),n.parentNode.insertBefore(m,n)):k++,m.textContent=e._processStyleText(m.textContent,h)}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(f,g);if(Te&&Wc&&Le&&(f=f.content.querySelectorAll("style"))){let p="";Array.from(f).forEach(q=>{p+=q.textContent;q.parentNode.removeChild(q)});e._styleSheet=new CSSStyleSheet;e._styleSheet.replaceSync(p)}}const b=ff(ef(c));
class d extends b{static get polymerElementVersion(){return"3.5.1"}static _finalizeClass(){b._finalizeClass.call(this);var e;this.hasOwnProperty("__ownObservers")||(this.__ownObservers=this.hasOwnProperty("observers")?this.observers:null);(e=this.__ownObservers)&&this.createObservers(e,this._properties);this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"===typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):Oe||(e=e.cloneNode(!0)));this.prototype._template=
e}static createProperties(e){for(let l in e){var f=this.prototype,g=l,h=e[l],k=e;h.computed&&(h.readOnly=!0);h.computed&&(f._hasReadOnlyEffect(g)?console.warn(`Cannot redefine computed property '${g}'.`):f._createComputedProperty(g,h.computed,k));h.readOnly&&!f._hasReadOnlyEffect(g)?f._createReadOnlyProperty(g,!h.computed):!1===h.readOnly&&f._hasReadOnlyEffect(g)&&console.warn(`Cannot make readOnly property '${g}' non-readOnly.`);h.reflectToAttribute&&!f._hasReflectEffect(g)?f._createReflectedProperty(g):
!1===h.reflectToAttribute&&f._hasReflectEffect(g)&&console.warn(`Cannot make reflected property '${g}' non-reflected.`);h.notify&&!f._hasNotifyEffect(g)?f._createNotifyingProperty(g):!1===h.notify&&f._hasNotifyEffect(g)&&console.warn(`Cannot make notify property '${g}' non-notify.`);h.observer&&f._createPropertyObserver(g,h.observer,k[h.observer]);f._addPropertyToAttributeMap(g)}}static createObservers(e,f){const g=this.prototype;for(let h=0;h<e.length;h++)g._createMethodObserver(e[h],f)}static get template(){if(!this.hasOwnProperty("_template")){var e=
this.prototype.hasOwnProperty("_template")?this.prototype._template:void 0;"function"===typeof e&&(e=e());if(void 0===e){if(e=this.hasOwnProperty("is")){e=this.is;let f=null;if(e&&(!Db||Ne)&&(f=ja.import(e,"template"),Db&&!f))throw Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);e=f}e=e||Object.getPrototypeOf(this.prototype).constructor.template}this._template=e}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty("_importPath")){var e=
this.importMeta;this._importPath=e?kb(e.url):(e=ja.import(this.is))&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}return this._importPath}constructor(){super();this._template;this._importPath;this.rootPath;this.importPath;this.root;this.$}_initializeProperties(){this.constructor.finalize();this.constructor._finalizeTemplate(this.localName);super._initializeProperties();this.rootPath=Me;this.importPath=this.constructor.importPath;var e=this.constructor;if(!e.hasOwnProperty("__propertyDefaults")){e.__propertyDefaults=
null;var f=e._properties;for(let g in f){let h=f[g];"value"in h&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[g]=h)}}if(e=e.__propertyDefaults)for(let g in e)f=e[g],this._canApplyPropertyDefault(g)&&(f="function"==typeof f.value?f.value.call(this):f.value,this._hasAccessor(g)?this._setPendingProperty(g,f,!0):this[g]=f)}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,f){return jb(e,f)}static _finalizeTemplate(e){const f=this.prototype._template;
if(f&&!f.__polymerFinalized){f.__polymerFinalized=!0;var g=this.importPath;g=g?va(g):"";a(this,f,e,g);this.prototype._bindTemplate(f)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this);super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$);super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root));super._readyClients()}_attachDom(e){const f=Z(this);if(f.attachShadow)return e?
(f.shadowRoot||(f.attachShadow({mode:"open",shadyUpgradeFragment:e}),f.shadowRoot.appendChild(e),this.constructor._styleSheet&&(f.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Qe&&window.ShadyDOM&&window.ShadyDOM.flushInitial(f.shadowRoot),f.shadowRoot):null;throw Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root \x3d this;` before `ready`.");}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,
f){!f&&this.importPath&&(f=va(this.importPath));return va(e,f)}static _parseTemplateContent(e,f,g){f.dynamicFns=f.dynamicFns||this._properties;return b._parseTemplateContent.call(this,e,f,g)}static _addTemplatePropertyEffect(e,f,g){!Pe||f in this._properties||g.info.part.signature&&g.info.part.signature.static||g.info.part.hostProp||e.nestedTemplate||console.warn(`Property '${f}' used in template but not declared in 'properties'; `+"attribute will not be observed.");return b._addTemplatePropertyEffect.call(this,
e,f,g)}}return d}),Xc=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:c=>c}),Fb=function(c,...a){hf(c,a);const b=document.createElement("template");a=a.reduce((d,e,f)=>{if(e instanceof HTMLTemplateElement)e=e.innerHTML;else throw Error(`non-template value passed to Polymer's html function: ${e}`);return d+e+c[f+1]},c[0]);Xc&&(a=Xc.createHTML(a));b.innerHTML=a;return b},hf=(c,a)=>{if(!Array.isArray(c)||!Array.isArray(c.raw)||a.length!==c.length-1)throw new TypeError("Invalid call to the html template tag");
},Ia=gf(HTMLElement);let Yc=0,ec=0;const ka=[];let rb=!1;const U={after(c){return{run(a){return window.setTimeout(a,c)},cancel(a){window.clearTimeout(a)}}},run(c,a){return window.setTimeout(c,a)},cancel(c){window.clearTimeout(c)}},V={run(c){return window.requestAnimationFrame(c)},cancel(c){window.cancelAnimationFrame(c)}},Zc={run(c){return window.requestIdleCallback?window.requestIdleCallback(c):window.setTimeout(c,16)},cancel(c){window.cancelIdleCallback?window.cancelIdleCallback(c):window.clearTimeout(c)}},
M={run(c){rb||(rb=!0,queueMicrotask(()=>Wd()));ka.push(c);c=Yc;Yc+=1;return c},cancel(c){const a=c-ec;if(0<=a){if(!ka[a])throw Error(`invalid async handle: ${c}`);ka[a]=null}}},la=new Set;class u{static debounce(c,a,b){c instanceof u?c._cancelAsync():c=new u;c.setConfig(a,b);return c}constructor(){this._timer=this._callback=this._asyncModule=null}setConfig(c,a){this._asyncModule=c;this._callback=a;this._timer=this._asyncModule.run(()=>{this._timer=null;la.delete(this);this._callback()})}cancel(){this.isActive()&&
(this._cancelAsync(),la.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}}const Ja=()=>{let c;do c=Xd();while(c)},N=[];(new MutationObserver(function(){const c=document.documentElement.getAttribute("dir");N.forEach(a=>{sb(a,c)})})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const Gb=c=>class extends c{static get properties(){return{dir:{type:String,
value:"",reflectToAttribute:!0,converter:{fromAttribute:a=>a?a:"",toAttribute:a=>""===a?null:a}}}}get __isRTL(){return"rtl"===this.getAttribute("dir")}connectedCallback(){super.connectedCallback();if(!this.hasAttribute("dir")||this.__restoreSubscription)this.__subscribe(),sb(this,document.documentElement.getAttribute("dir"),null)}attributeChangedCallback(a,b,d){super.attributeChangedCallback(a,b,d);if("dir"===a){a=document.documentElement.getAttribute("dir");var e=d===a&&-1===N.indexOf(this),f=!d&&
b&&-1===N.indexOf(this);b=d!==a&&b===a;e||f?(this.__subscribe(),sb(this,a,d)):b&&this.__unsubscribe()}}disconnectedCallback(){super.disconnectedCallback();this.__restoreSubscription=N.includes(this);this.__unsubscribe()}_valueToNodeAttribute(a,b,d){("dir"!==d||""!==b||a.hasAttribute("dir"))&&super._valueToNodeAttribute(a,b,d)}_attributeToProperty(a,b,d){"dir"!==a||b?super._attributeToProperty(a,b,d):this.dir=""}__subscribe(){N.includes(this)||N.push(this)}__unsubscribe(){N.includes(this)&&N.splice(N.indexOf(this),
1)}};class fa{constructor(c,a){this.__host=c;this.__callback=a;this.__currentSlots=[];this.__onMutation=this.__onMutation.bind(this);this.__observer=new MutationObserver(this.__onMutation);this.__observer.observe(c,{childList:!0});this.__initialCallDebouncer=u.debounce(this.__initialCallDebouncer,M,()=>this.__onMutation())}disconnect(){this.__observer.disconnect();this.__initialCallDebouncer.cancel();this.__toggleSlotChangeListeners(!1)}flush(){this.__onMutation()}__toggleSlotChangeListeners(c){this.__currentSlots.forEach(a=>
{c?a.addEventListener("slotchange",this.__onMutation):a.removeEventListener("slotchange",this.__onMutation)})}__onMutation(){const c=!this.__currentColumns;this.__currentColumns||(this.__currentColumns=[]);const a=fa.getColumns(this.__host),b=a.filter(f=>!this.__currentColumns.includes(f)),d=this.__currentColumns.filter(f=>!a.includes(f)),e=this.__currentColumns.some((f,g)=>f!==a[g]);this.__currentColumns=a;this.__toggleSlotChangeListeners(!1);this.__currentSlots=[...this.__host.children].filter(f=>
f instanceof HTMLSlotElement);this.__toggleSlotChangeListeners(!0);(c||b.length||d.length||e)&&this.__callback(b,d)}static __isColumnElement(c){return c.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(c.localName)}static getColumns(c){const a=[],b=c._isColumnElement||fa.__isColumnElement;[...c.children].forEach(d=>{b(d)?a.push(d):d instanceof HTMLSlotElement&&[...d.assignedElements({flatten:!0})].filter(e=>b(e)).forEach(e=>a.push(e))});return a}}const $c=c=>class extends c{static get properties(){return{resizable:{type:Boolean,
sync:!0,value(){if("vaadin-grid-column-group"!==this.localName){var a=this.parentNode;return a&&"vaadin-grid-column-group"===a.localName?a.resizable||!1:!1}}},frozen:{type:Boolean,value:!1,sync:!0},frozenToEnd:{type:Boolean,value:!1,sync:!0},rowHeader:{type:Boolean,value:!1,sync:!0},hidden:{type:Boolean,value:!1,sync:!0},header:{type:String,sync:!0},textAlign:{type:String,sync:!0},headerPartName:{type:String,sync:!0},footerPartName:{type:String,sync:!0},_lastFrozen:{type:Boolean,value:!1,sync:!0},
_bodyContentHidden:{type:Boolean,value:!1,sync:!0},_firstFrozenToEnd:{type:Boolean,value:!1,sync:!0},_order:{type:Number,sync:!0},_reorderStatus:{type:Boolean,sync:!0},_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:{type:Function,sync:!0},_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)",sync:!0},footerRenderer:{type:Function,sync:!0},_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)",
sync:!0},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return"_widthChanged(width, _headerCell, _footerCell, _cells);_frozenChanged(frozen, _headerCell, _footerCell, _cells);_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells);_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells);_textAlignChanged(textAlign, _cells, _headerCell, _footerCell);_orderChanged(_order, _headerCell, _footerCell, _cells);_lastFrozenChanged(_lastFrozen);_firstFrozenToEndChanged(_firstFrozenToEnd);_onRendererOrBindingChanged(_renderer, _cells, _bodyContentHidden, path);_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header);_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell);_resizableChanged(resizable, _headerCell);_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells);_hiddenChanged(hidden, _headerCell, _footerCell, _cells);_rowHeaderChanged(rowHeader, _cells);__headerFooterPartNameChanged(_headerCell, _footerCell, headerPartName, footerPartName)".split(";")}get _grid(){this._gridValue||
(this._gridValue=this._findHostGrid());return this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(a=>a)}connectedCallback(){super.connectedCallback();requestAnimationFrame(()=>{this._grid&&this._allCells.forEach(a=>{a._content.parentNode||this._grid.appendChild(a._content)})})}disconnectedCallback(){super.disconnectedCallback();requestAnimationFrame(()=>{this._grid||this._allCells.forEach(a=>{a._content.parentNode&&
a._content.parentNode.removeChild(a._content)})});this._gridValue=void 0}ready(){super.ready();fc(this)}_findHostGrid(){let a=this;for(;a&&!/^vaadin.*grid(-pro)?$/u.test(a.localName);)a=a.assignedSlot?a.assignedSlot.parentNode:a.parentNode;return a||void 0}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell);this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(a){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow");
this._allCells.forEach(b=>{b.style.flexGrow=a})}_orderChanged(a){this._allCells.forEach(b=>{b.style.order=a})}_widthChanged(a){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width");this._allCells.forEach(b=>{b.style.width=a})}_frozenChanged(a){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",a);this._allCells.forEach(b=>{aa(b,"frozen",a)});this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_frozenToEndChanged(a){this.parentElement&&
this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozenToEnd",a);this._allCells.forEach(b=>{this._grid&&b.parentElement===this._grid.$.sizer||aa(b,"frozen-to-end",a)});this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(a){this._allCells.forEach(b=>{aa(b,"last-frozen",a)});this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=a)}_firstFrozenToEndChanged(a){this._allCells.forEach(b=>{this._grid&&
b.parentElement===this._grid.$.sizer||aa(b,"first-frozen-to-end",a)});this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._firstFrozenToEnd=a)}_rowHeaderChanged(a,b){b&&b.forEach(d=>{d.setAttribute("role",a?"rowheader":"gridcell")})}_generateHeader(a){return a.substr(a.lastIndexOf(".")+1).replace(/([A-Z])/gu,"-$1").toLowerCase().replace(/-/gu," ").replace(/^./u,b=>b.toUpperCase())}_reorderStatusChanged(a){const b=this.__previousReorderStatus,d=b?`reorder-${b}-cell`:"",e=
`reorder-${a}-cell`;this._allCells.forEach(f=>{aa(f,"reorder-status",a,e,d)});this.__previousReorderStatus=a}_resizableChanged(a,b){void 0!==a&&void 0!==b&&b&&[b].concat(this._emptyCells).forEach(d=>{if(d){var e=d.querySelector('[part~\x3d"resize-handle"]');e&&d.removeChild(e);a&&(e=document.createElement("div"),e.setAttribute("part","resize-handle"),d.appendChild(e))}})}_textAlignChanged(a){if(void 0!==a&&void 0!==this._grid)if(-1===["start","end","center"].indexOf(a))console.warn('textAlign can only be set as "start", "end" or "center"');
else{var b;"ltr"===getComputedStyle(this._grid).direction?"start"===a?b="left":"end"===a&&(b="right"):"start"===a?b="right":"end"===a&&(b="left");this._allCells.forEach(d=>{d._content.style.textAlign=a;getComputedStyle(d._content).textAlign!==a&&(d._content.style.textAlign=b)})}}_hiddenChanged(a){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",a);!!a!==!!this._previousHidden&&this._grid&&(!0===a&&this._allCells.forEach(b=>{b._content.parentNode&&
b._content.parentNode.removeChild(b._content)}),this._grid._debouncerHiddenChanged=u.debounce(this._grid._debouncerHiddenChanged,V,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._debounceUpdateFrozenColumn&&this._grid._debounceUpdateFrozenColumn(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation());this._previousHidden=a}_runRenderer(a,b,d){const e=d&&d.item&&!b.parentElement.hidden;if(e||a===this._headerRenderer||
a===this._footerRenderer)b=[b._content,this],e&&b.push(d),a.apply(this,b)}__renderCellsContent(a,b){!this.hidden&&this._grid&&b.forEach(d=>{if(d.parentElement){var e=this._grid.__getRowModel(d.parentElement);a&&(d._renderer!==a&&this._clearCellContent(d),d._renderer=a,this._runRenderer(a,d,e))}})}_clearCellContent(a){a._content.innerHTML="";delete a._content._$litPart$}_renderHeaderCellContent(a,b){b&&a&&(this.__renderCellsContent(a,[b]),this._grid&&b.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(b.parentElement))}_onHeaderRendererOrBindingChanged(a,
b,...d){this._renderHeaderCellContent(a,b)}__headerFooterPartNameChanged(a,b,d,e){[{cell:a,partName:d},{cell:b,partName:e}].forEach(({cell:f,partName:g})=>{f&&(f.part.remove(...(f.__customParts||[])),f.__customParts=g?g.trim().split(" "):[],f.part.add(...f.__customParts))})}_renderBodyCellsContent(a,b){b&&a&&this.__renderCellsContent(a,b)}_onRendererOrBindingChanged(a,b,...d){this._renderBodyCellsContent(a,b)}_renderFooterCellContent(a,b){b&&a&&(this.__renderCellsContent(a,[b]),this._grid&&b.parentElement&&
this._grid.__debounceUpdateHeaderFooterRowVisibility(b.parentElement))}_onFooterRendererOrBindingChanged(a,b){this._renderFooterCellContent(a,b)}__setTextContent(a,b){a.textContent!==b&&(a.textContent=b)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){this.path&&this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(a,b,{item:d}){this.path&&this.__setTextContent(a,tb(this.path,d))}_defaultFooterRenderer(){}_computeHeaderRenderer(a,
b){return a?a:void 0!==b&&null!==b?this.__textHeaderRenderer:this._defaultHeaderRenderer}_computeRenderer(a){return a?a:this._defaultRenderer}_computeFooterRenderer(a){return a?a:this._defaultFooterRenderer}},jf=c=>class extends $c(Gb(c)){static get properties(){return{width:{type:String,value:"100px",sync:!0},flexGrow:{type:Number,value:1,sync:!0},renderer:{type:Function,sync:!0},_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)",sync:!0},path:{type:String,sync:!0},autoWidth:{type:Boolean,
value:!1},_focusButtonMode:{type:Boolean,value:!1},_cells:{type:Array,sync:!0}}}};class ad extends jf(Ia){static get is(){return"vaadin-grid-column"}}X(ad);const bd=C(c=>"function"===typeof c.prototype.addController?c:class extends c{constructor(){super();this.__controllers=new Set}connectedCallback(){super.connectedCallback();this.__controllers.forEach(a=>{a.hostConnected&&a.hostConnected()})}disconnectedCallback(){super.disconnectedCallback();this.__controllers.forEach(a=>{a.hostDisconnected&&a.hostDisconnected()})}addController(a){this.__controllers.add(a);
void 0!==this.$&&this.isConnected&&a.hostConnected&&a.hostConnected()}removeController(a){this.__controllers.delete(a)}}),$d=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Pa=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;window.Vaadin=window.Vaadin||{};const cd=function(c,a){if(window.Vaadin.developmentMode)return mc(c,a)};if(void 0===window.Vaadin.developmentMode){var kf=window.Vaadin;try{var dd=localStorage.getItem("vaadin.developmentmode.force")?!0:0<=
["localhost","127.0.0.1"].indexOf(window.location.hostname)?Pa?!Zd():!Yd():!1}catch(c){dd=!1}kf.developmentMode=dd}window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){"function"===typeof cd&&cd(ae)};let Hb;const ed=new Set,fd=c=>class extends Gb(c){static finalize(){super.finalize();const {is:a}=this;
a&&!ed.has(a)&&(window.Vaadin.registrations.push(this),ed.add(a),window.Vaadin.developmentModeCallback&&(Hb=u.debounce(Hb,Zc,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),la.add(Hb)))}constructor(){super();null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add \x3c!DOCTYPE html\x3e to the HTML document.')}};let cb=!1;window.addEventListener("keydown",()=>{cb=!0},{capture:!0});window.addEventListener("mousedown",()=>
{cb=!1},{capture:!0});const Ib=C(c=>class extends c{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(a){this._setAriaDisabled(a)}_setAriaDisabled(a){a?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}}),gd=c=>class extends Ib(c){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(a,
b){super._disabledChanged(a,b);a?(void 0!==this.tabindex&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):b&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(a){this.disabled&&-1!==a&&(this._lastTabIndex=a,this.tabindex=-1)}},hd=/Android/u.test(navigator.userAgent),lf=/Chrome/u.test(navigator.userAgent)&&/Google Inc/u.test(navigator.vendor),mf=/Firefox/u.test(navigator.userAgent),nf=/^iPad/u.test(navigator.platform)||/^Mac/u.test(navigator.platform)&&1<navigator.maxTouchPoints,id=/^iPhone/u.test(navigator.platform)||
nf,jd=/^((?!chrome|android).)*safari/iu.test(navigator.userAgent);try{document.createEvent("TouchEvent");var kd=!0}catch(c){kd=!1}const ld=kd;class of{constructor(c,a){this.slot=c;this.callback=a;this._storedNodes=[];this._scheduled=this._connected=!1;this._boundSchedule=()=>{this._schedule()};this.connect();this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule);this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule);this._connected=
!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask(()=>{this.flush()}))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const c=this.slot.assignedNodes({flatten:!0});let a=[];const b=[],d=[];c.length&&(a=c.filter(e=>!this._storedNodes.includes(e)));this._storedNodes.length&&this._storedNodes.forEach((e,f)=>{const g=c.indexOf(e);-1===g?b.push(e):g!==f&&d.push(e)});(a.length||b.length||d.length)&&this.callback({addedNodes:a,movedNodes:d,removedNodes:b});
this._storedNodes=c}}let pf=0;class Jb extends EventTarget{static generateId(c,a){return`${a||"default"}-${c.localName}-${pf++}`}constructor(c,a,b,d={}){super();const {initializer:e,multiple:f,observe:g,useUniqueId:h}=d;this.host=c;this.slotName=a;this.tagName=b;this.observe="boolean"===typeof g?g:!0;this.multiple="boolean"===typeof f?f:!1;this.slotInitializer=e;f&&(this.nodes=[]);h&&(this.defaultId=this.constructor.generateId(c,a))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():
this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let c=this.getSlotChild();c?(this.node=c,this.initAddedNode(c)):(c=this.attachDefaultNode(),this.initNode(c))}initMultiple(){var c=this.getSlotChildren();if(0===c.length){if(c=this.attachDefaultNode())this.nodes=[c],this.initNode(c)}else this.nodes=c,c.forEach(a=>{this.initAddedNode(a)})}attachDefaultNode(){const {host:c,slotName:a,tagName:b}=this;let d=this.defaultNode;!d&&b&&(d=document.createElement(b),d instanceof
Element&&(""!==a&&d.setAttribute("slot",a),this.defaultNode=this.node=d));d&&c.appendChild(d);return d}getSlotChildren(){const {slotName:c}=this;return Array.from(this.host.childNodes).filter(a=>a.nodeType===Node.ELEMENT_NODE&&a.slot===c||a.nodeType===Node.TEXT_NODE&&a.textContent.trim()&&""===c)}getSlotChild(){return this.getSlotChildren()[0]}initNode(c){const {slotInitializer:a}=this;a&&a(c,this.host)}initCustomNode(c){}teardownNode(c){}initAddedNode(c){c!==this.defaultNode&&(this.initCustomNode(c),
this.initNode(c))}observeSlot(){var {slotName:c}=this;c=this.host.shadowRoot.querySelector(""===c?"slot:not([name])":`slot[name=${c}]`);this.__slotObserver=new of(c,({addedNodes:a,removedNodes:b})=>{const d=this.multiple?this.nodes:[this.node];a=a.filter(e=>!(e.nodeType===Node.TEXT_NODE&&""===e.textContent.trim())&&!d.includes(e));b.length&&(this.nodes=d.filter(e=>!b.includes(e)),b.forEach(e=>{this.teardownNode(e)}));a&&0<a.length&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=
[...d,...a].filter(e=>e!==this.defaultNode),a.forEach(e=>{this.initAddedNode(e)})):(this.node&&this.node.remove(),this.node=a[0],this.initAddedNode(this.node)))})}}class md extends Jb{constructor(c){super(c,"tooltip");this.setTarget(c)}initCustomNode(c){c.target=this.target;void 0!==this.ariaTarget&&(c.ariaTarget=this.ariaTarget);void 0!==this.context&&(c.context=this.context);void 0!==this.manual&&(c.manual=this.manual);void 0!==this.opened&&(c.opened=this.opened);void 0!==this.position&&(c._position=
this.position);void 0!==this.shouldShow&&(c.shouldShow=this.shouldShow);this.__notifyChange()}teardownNode(){this.__notifyChange()}setAriaTarget(c){this.ariaTarget=c;const a=this.node;a&&(a.ariaTarget=c)}setContext(c){this.context=c;const a=this.node;a&&(a.context=c)}setManual(c){this.manual=c;const a=this.node;a&&(a.manual=c)}setOpened(c){this.opened=c;const a=this.node;a&&(a.opened=c)}setPosition(c){this.position=c;const a=this.node;a&&(a._position=c)}setShouldShow(c){this.shouldShow=c;const a=
this.node;a&&(a.shouldShow=c)}setTarget(c){this.target=c;const a=this.node;a&&(a.target=c)}__notifyChange(){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:this.node}}))}}const nd=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/u),qf=nd&&8<=nd[1];class od{constructor({createElements:c,updateElement:a,scrollTarget:b,scrollContainer:d,elementsContainer:e,reorderElements:f}){this.isAttached=!0;this._vidxOffset=0;this.createElements=c;this.updateElement=a;this.scrollTarget=
b;this.scrollContainer=d;this.elementsContainer=e||d;this.reorderElements=f;this._maxPages=1.3;this.__placeholderHeight=200;this.__elementHeightQueue=Array(10);this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500,FIX_INVALID_ITEM_POSITIONING:100};this.__resizeObserver=new ResizeObserver(()=>this._resizeHandler());"visible"===getComputedStyle(this.scrollTarget).overflow&&(this.scrollTarget.style.overflow="auto");"static"===getComputedStyle(this.scrollContainer).position&&(this.scrollContainer.style.position=
"relative");this.__resizeObserver.observe(this.scrollTarget);this.scrollTarget.addEventListener("scroll",()=>this._scrollHandler());this._scrollLineHeight=this._getScrollLineHeight();this.scrollTarget.addEventListener("wheel",g=>this.__onWheel(g));this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",()=>{this.__mouseDown=!0}),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1;this.__pendingReorder&&this.__reorderElements()}))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+
this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}__hasPlaceholders(){return this.__getVisibleElements().some(c=>c.__virtualizerPlaceholder)}scrollToIndex(c){if("number"===typeof c&&!isNaN(c)&&0!==this.size&&this.scrollTarget.offsetHeight){delete this.__pendingScrollToIndex;3>=this._physicalCount&&this.flush();c=this._clamp(c,0,this.size-1);var a=this.__getVisibleElements().length,b=Math.floor(c/this.size*this._virtualCount);this._virtualCount-b<a?(b=this._virtualCount-
(this.size-c),this._vidxOffset=this.size-this._virtualCount):b<a?1E3>c?(b=c,this._vidxOffset=0):(b=1E3,this._vidxOffset=c-b):this._vidxOffset=c-b;this.__skipNextVirtualIndexAdjust=!0;super.scrollToIndex(b);this.adjustedFirstVisibleIndex!==c&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(c)||0);this._scrollHandler();this.__hasPlaceholders()&&(this.__pendingScrollToIndex=c)}}flush(){const c=this._physicalCount;0!==this.scrollTarget.offsetHeight&&(this._resizeHandler(),
Ja(),this._scrollHandler(),this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.flush(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush(),this._physicalCount!==c&&this.flush())}update(c=0,a=this.size-1){const b=[];this.__getVisibleElements().forEach(d=>{d.__virtualIndex>=c&&d.__virtualIndex<=a&&(this.__updateElement(d,d.__virtualIndex,!0),b.push(d))});this.__afterElementsUpdated(b)}_updateMetrics(c){Ja();
let a=0,b=0;const d=this._physicalAverageCount,e=this._physicalAverage;this._iterateItems((f,g)=>{b+=this._physicalSizes[f];this._physicalSizes[f]=Math.ceil(this.__getBorderBoxHeight(this._physicalItems[f]));a+=this._physicalSizes[f];this._physicalAverageCount+=this._physicalSizes[f]?1:0},c);this._physicalSize=this._physicalSize+a-b;this._physicalAverageCount!==d&&(this._physicalAverage=Math.round((e*d+a)/this._physicalAverageCount))}__getBorderBoxHeight(c){var a=getComputedStyle(c);c=parseFloat(a.height)||
0;if("border-box"===a.boxSizing)return c;const b=parseFloat(a.paddingBottom)||0,d=parseFloat(a.paddingTop)||0,e=parseFloat(a.borderBottomWidth)||0;a=parseFloat(a.borderTopWidth)||0;return c+b+d+e+a}__updateElement(c,a,b){c.__virtualizerPlaceholder&&(c.style.paddingTop="",c.__virtualizerPlaceholder=!1);this.__preventElementUpdates||c.__lastUpdatedIndex===a&&!b||(this.updateElement(c,a),c.__lastUpdatedIndex=a)}__afterElementsUpdated(c){c.forEach(a=>{const b=a.offsetHeight;0===b?(a.style.paddingTop=
`${this.__placeholderHeight}px`,a.__virtualizerPlaceholder=!0,this.__placeholderClearDebouncer=u.debounce(this.__placeholderClearDebouncer,V,()=>this._resizeHandler())):(this.__elementHeightQueue.push(b),this.__elementHeightQueue.shift(),a=this.__elementHeightQueue.filter(d=>void 0!==d),this.__placeholderHeight=Math.round(a.reduce((d,e)=>d+e,0)/a.length))});void 0===this.__pendingScrollToIndex||this.__hasPlaceholders()||this.scrollToIndex(this.__pendingScrollToIndex)}__getIndexScrollOffset(c){const a=
this.__getVisibleElements().find(b=>b.__virtualIndex===c);return a?this.scrollTarget.getBoundingClientRect().top-a.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(c){c!==this.size&&(this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.cancel(),this._debouncers&&this._debouncers._increasePoolIfNeeded&&this._debouncers._increasePoolIfNeeded.cancel(),this.__size=c,this._physicalItems?(this._updateScrollerSize(),this._virtualCount=this.items.length,
this._render()):(this._itemsChanged({path:"items"}),this.__preventElementUpdates=!0,Ja(),this.__preventElementUpdates=!1),this._isVisible||this._assignModels(),this.elementsContainer.children.length||requestAnimationFrame(()=>this._resizeHandler()),this._resizeHandler(),Ja())}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(c){this.scrollTarget.scrollTop=c}get items(){return{length:Math.min(this.size,1E5)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const c=
window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(c["padding-top"],10);this._isRTL="rtl"===c.direction;this._viewportWidth=this.elementsContainer.offsetWidth;this._viewportHeight=this.scrollTarget.offsetHeight;this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight;this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(c){c=this.createElements(c);const a=document.createDocumentFragment();c.forEach(b=>{b.style.position="absolute";
a.appendChild(b);this.__resizeObserver.observe(b)});this.elementsContainer.appendChild(a);return c}_assignModels(c){const a=[];this._iterateItems((b,d)=>{b=this._physicalItems[b];b.hidden=d>=this.size;b.hidden?delete b.__lastUpdatedIndex:(b.__virtualIndex=d+(this._vidxOffset||0),this.__updateElement(b,b.__virtualIndex),a.push(b))},c);this.__afterElementsUpdated(a)}_isClientFull(){setTimeout(()=>{this.__clientFull=!0});return this.__clientFull||super._isClientFull()}translate3d(c,a,b,d){d.style.transform=
`translateY(${a})`}toggleScrollListener(){}_scrollHandler(){if(0!==this.scrollTarget.offsetHeight){this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));var c=this.scrollTarget.scrollTop-this._scrollPosition;super._scrollHandler();if(0!==this._physicalCount){const a=0<=c,b=this._getReusables(!a);b.indexes.length&&(this._physicalTop=b.physicalTop,a?(this._virtualStart-=b.indexes.length,this._physicalStart-=b.indexes.length):(this._virtualStart+=b.indexes.length,this._physicalStart+=
b.indexes.length),this._resizeHandler())}c&&(this.__fixInvalidItemPositioningDebouncer=u.debounce(this.__fixInvalidItemPositioningDebouncer,U.after(this.timeouts.FIX_INVALID_ITEM_POSITIONING),()=>this.__fixInvalidItemPositioning()));this.reorderElements&&(this.__scrollReorderDebouncer=u.debounce(this.__scrollReorderDebouncer,U.after(this.timeouts.SCROLL_REORDER),()=>this.__reorderElements()));this.__previousScrollTop=this._scrollTop;0===this._scrollTop&&0!==this.firstVisibleIndex&&0<Math.abs(c)&&
this.scrollToIndex(0)}}__fixInvalidItemPositioning(){if(this.scrollTarget.isConnected){var c=this._physicalBottom<this._scrollBottom,a=0===this.adjustedFirstVisibleIndex,b=this.adjustedLastVisibleIndex===this.size-1;if(this._physicalTop>this._scrollTop&&!a||c&&!b)a=this._ratio,this._ratio=0,this._scrollPosition=this._scrollTop+(c?-1:1),this._scrollHandler(),this._ratio=a}}__onWheel(c){if(!c.ctrlKey&&!this._hasScrolledAncestor(c.target,c.deltaX,c.deltaY)){var a=c.deltaY;c.deltaMode===WheelEvent.DOM_DELTA_LINE?
a*=this._scrollLineHeight:c.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(a*=this._scrollPageHeight);this._deltaYAcc||(this._deltaYAcc=0);if(this._wheelAnimationFrame)this._deltaYAcc+=a,c.preventDefault();else{a+=this._deltaYAcc;this._deltaYAcc=0;this._wheelAnimationFrame=!0;this.__debouncerWheelAnimationFrame=u.debounce(this.__debouncerWheelAnimationFrame,V,()=>{this._wheelAnimationFrame=!1});var b=Math.abs(c.deltaX)+Math.abs(a);this._canScroll(this.scrollTarget,c.deltaX,a)?(c.preventDefault(),this.scrollTarget.scrollTop+=
a,this.scrollTarget.scrollLeft+=c.deltaX,this._ignoreNewWheel=this._hasResidualMomentum=!0,this._debouncerIgnoreNewWheel=u.debounce(this._debouncerIgnoreNewWheel,U.after(this.timeouts.IGNORE_WHEEL),()=>{this._ignoreNewWheel=!1})):this._hasResidualMomentum&&b<=this._previousMomentum||this._ignoreNewWheel?c.preventDefault():b>this._previousMomentum&&(this._hasResidualMomentum=!1);this._previousMomentum=b}}}_hasScrolledAncestor(c,a,b){if(c===this.scrollTarget||c===this.scrollTarget.getRootNode().host)return!1;
if(this._canScroll(c,a,b)&&-1!==["auto","scroll"].indexOf(getComputedStyle(c).overflow))return!0;if(c!==this&&c.parentElement)return this._hasScrolledAncestor(c.parentElement,a,b)}_canScroll(c,a,b){return 0<b&&c.scrollTop<c.scrollHeight-c.offsetHeight||0>b&&0<c.scrollTop||0<a&&c.scrollLeft<c.scrollWidth-c.offsetWidth||0>a&&0<c.scrollLeft}_increasePoolIfNeeded(c){2<this._physicalCount&&c?super._increasePoolIfNeeded(Math.max(c,Math.min(100,Math.ceil(this._optPhysicalSize/this._physicalAverage)-this._physicalCount))):
super._increasePoolIfNeeded(c)}_getScrollLineHeight(){const c=document.createElement("div");c.style.fontSize="initial";c.style.display="none";document.body.appendChild(c);const a=window.getComputedStyle(c).fontSize;document.body.removeChild(c);return a?window.parseInt(a):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter(c=>!c.hidden)}__reorderElements(){if(this.__mouseDown)this.__pendingReorder=!0;else{this.__pendingReorder=!1;var c=this._virtualStart+(this._vidxOffset||
0),a=this.__getVisibleElements(),b=a.find(d=>d.contains(this.elementsContainer.getRootNode().activeElement)||d.contains(this.scrollTarget.getRootNode().activeElement))||a[0];if(b){c=b.__virtualIndex-c;b=a.indexOf(b)-c;if(0<b)for(c=0;c<b;c++)this.elementsContainer.appendChild(a[c]);else if(0>b)for(b=a.length+b;b<a.length;b++)this.elementsContainer.insertBefore(a[b],a[0]);if(jd){const {transform:d}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)";setTimeout(()=>{this.scrollTarget.style.transform=
d})}}}}_adjustVirtualIndexOffset(c){if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(1E4<Math.abs(c))c=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.offsetHeight),this._vidxOffset=Math.round(c*this.size-c*this._virtualCount);else{c=this._vidxOffset;0===this._scrollTop?(this._vidxOffset=0,c!==this._vidxOffset&&super.scrollToIndex(0)):1E3>this.firstVisibleIndex&&0<this._vidxOffset&&(this._vidxOffset-=
Math.min(this._vidxOffset,100),super.scrollToIndex(this.firstVisibleIndex+(c-this._vidxOffset)));const a=this.size-this._virtualCount;this._scrollTop>=this._maxScrollTop&&0<this._maxScrollTop?(this._vidxOffset=a,c!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-1E3&&this._vidxOffset<a&&(this._vidxOffset+=Math.min(a-this._vidxOffset,100),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-c)))}}}Object.setPrototypeOf(od.prototype,{_ratio:.5,
_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+
this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){return Math.max(0,this._virtualCount-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(c){this._virtualStartVal=c=this._clamp(c,0,this._maxVirtualStart)},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(c){c%=this._physicalCount;
0>c&&(c=this._physicalCount+c);this._physicalStartVal=c},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(c){this._physicalCountVal=c},get _optPhysicalSize(){return 0===this._viewportHeight?Infinity:this._viewportHeight*this._maxPages},get _isVisible(){return!(!this.offsetWidth&&!this.offsetHeight)},get firstVisibleIndex(){let c=this._firstVisibleIndexVal;if(null==c){let a=this._physicalTop+
this._scrollOffset;this._firstVisibleIndexVal=c=this._iterateItems((b,d)=>{a+=this._getPhysicalSizeIncrement(b);if(a>this._scrollPosition)return d})||0}return c},get lastVisibleIndex(){let c=this._lastVisibleIndexVal;if(null==c){let a=this._physicalTop+this._scrollOffset;this._iterateItems((b,d)=>{a<this._scrollBottom&&(c=d);a+=this._getPhysicalSizeIncrement(b)});this._lastVisibleIndexVal=c}return c},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){var c=Math.max(0,
Math.min(this._maxScrollTop,this._scrollTop));let a=c-this._scrollPosition;var b=0<=a;this._scrollPosition=c;this._lastVisibleIndexVal=this._firstVisibleIndexVal=null;Math.abs(a)>this._physicalSize&&0<this._physicalSize?(a-=this._scrollOffset,b=Math.round(a/this._physicalAverage),this._virtualStart+=b,this._physicalStart+=b,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()):0<this._physicalCount&&(c=this._getReusables(b),b?(this._physicalTop=
c.physicalTop,this._virtualStart+=c.indexes.length,this._physicalStart+=c.indexes.length):(this._virtualStart-=c.indexes.length,this._physicalStart-=c.indexes.length),this._update(c.indexes,b?null:c.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),M))},_getReusables(c){let a;let b;const d=[],e=this._hiddenContentSize*this._ratio,f=this._virtualStart,g=this._virtualEnd,h=this._physicalCount;let k=this._physicalTop+this._scrollOffset;var l=this._physicalBottom+
this._scrollOffset;const m=this._scrollPosition,n=this._scrollBottom;c?(a=this._physicalStart,l=m-k):(a=this._physicalEnd,l-=n);for(;;){b=this._getPhysicalSizeIncrement(a);l-=b;if(d.length>=h||l<=e)break;if(c){if(g+d.length+1>=this._virtualCount)break;if(k+b>=m-this._scrollOffset)break;d.push(a);k+=b;a=(a+1)%h}else{if(0>=f-d.length)break;if(k+this._physicalSize-b<=n)break;d.push(a);k-=b;a=0===a?h-1:a-1}}return{indexes:d,physicalTop:k-this._scrollOffset}},_update(c,a){if(!(c&&0===c.length||0===this._physicalCount)){this._assignModels(c);
this._updateMetrics(c);if(a)for(;a.length;)c=a.pop(),this._physicalTop-=this._getPhysicalSizeIncrement(c);this._positionItems();this._updateScrollerSize()}},_isClientFull(){return 0!==this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(c){c=this._clamp(this._physicalCount+c,3,this._virtualCount-this._virtualStart)-this._physicalCount;var a=Math.round(.5*this._physicalCount);if(!(0>c)){if(0<c){a=window.performance.now();[].push.apply(this._physicalItems,
this._createPool(c));for(let b=0;b<c;b++)this._physicalSizes.push(0);this._physicalCount+=c;this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=c);this._update();this._templateCost=(window.performance.now()-a)/c;a=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===a||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",
this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,a)),Zc):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,a),M))}},_render(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){const c=this._getReusables(!0);this._physicalTop=c.physicalTop;this._virtualStart+=c.indexes.length;this._physicalStart+=c.indexes.length;this._update(c.indexes);this._update();this._increasePoolIfNeeded(0)}else 0<this._virtualCount&&(this.updateViewportBoundaries(),
this._increasePoolIfNeeded(3))},_itemsChanged(c){"items"===c.path&&(this._physicalTop=this._virtualStart=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._lastVisibleIndexVal=this._firstVisibleIndexVal=null,this._physicalItems||(this._physicalItems=[]),this._physicalSizes||(this._physicalSizes=[]),this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,V))},_iterateItems(c,a){let b,d,e,f;if(2===
arguments.length&&a)for(f=0;f<a.length;f++){if(b=a[f],d=this._computeVidx(b),null!=(e=c.call(this,b,d)))return e}else{b=this._physicalStart;for(d=this._virtualStart;b<this._physicalCount;b++,d++)if(null!=(e=c.call(this,b,d)))return e;for(b=0;b<this._physicalStart;b++,d++)if(null!=(e=c.call(this,b,d)))return e}},_computeVidx(c){return c>=this._physicalStart?this._virtualStart+(c-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+c},_positionItems(){this._adjustScrollPosition();
let c=this._physicalTop;this._iterateItems(a=>{this.translate3d(0,`${c}px`,0,this._physicalItems[a]);c+=this._physicalSizes[a]})},_getPhysicalSizeIncrement(c){return this._physicalSizes[c]},_adjustScrollPosition(){const c=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==c){this._physicalTop-=c;const a=this._scrollPosition;!qf&&0<a&&this._resetScrollPosition(a-c)}},_resetScrollPosition(c){this.scrollTarget&&0<=c&&(this._scrollPosition=this._scrollTop=
c)},_updateScrollerSize(c){const a=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage;this._estScrollHeight=a;if(c||0===this._scrollHeight||this._scrollPosition>=a-this._physicalSize||Math.abs(a-this._scrollHeight)>=this._viewportHeight)this.$.items.style.height=`${a}px`,this._scrollHeight=a},scrollToIndex(c){if(!("number"!==typeof c||0>c||c>this.items.length-1)&&(Ja(),0!==this._physicalCount)){c=this._clamp(c,0,this._virtualCount-1);if(!this._isIndexRendered(c)||
c>=this._maxVirtualStart)this._virtualStart=c-1;this._assignModels();this._updateMetrics();this._physicalTop=this._virtualStart*this._physicalAverage;for(var a=this._physicalStart,b=this._virtualStart,d=0,e=this._hiddenContentSize;b<c&&d<=e;)d+=this._getPhysicalSizeIncrement(a),a=(a+1)%this._physicalCount,b+=1;this._updateScrollerSize(!0);this._positionItems();this._resetScrollPosition(this._physicalTop+this._scrollOffset+d);this._increasePoolIfNeeded(0);this._lastVisibleIndexVal=this._firstVisibleIndexVal=
null}},_resetAverage(){this._physicalAverageCount=this._physicalAverage=0},_resizeHandler(){this._debounce("_render",()=>{this._lastVisibleIndexVal=this._firstVisibleIndexVal=null;this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},V)},_isIndexRendered(c){return c>=this._virtualStart&&c<=this._virtualEnd},_getPhysicalIndex(c){return(this._physicalStart+(c-this._virtualStart))%this._physicalCount},_clamp(c,
a,b){return Math.min(b,Math.max(a,c))},_debounce(c,a,b){this._debouncers||(this._debouncers={});this._debouncers[c]=u.debounce(this._debouncers[c],b,a.bind(this));la.add(this._debouncers[c])}});class rf{constructor(c){this.__adapter=new od(c)}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}get size(){return this.__adapter.size}set size(c){this.__adapter.size=c}scrollToIndex(c){this.__adapter.scrollToIndex(c)}update(c=
0,a=this.size-1){this.__adapter.update(c,a)}flush(){this.__adapter.flush()}}const sf=c=>class extends c{static get observers(){return["_a11yUpdateGridSize(size, _columnTree)"]}_a11yGetHeaderRowCount(a){return a.filter(b=>b.some(d=>d.headerRenderer||d.path||d.header)).length}_a11yGetFooterRowCount(a){return a.filter(b=>b.some(d=>d.headerRenderer)).length}_a11yUpdateGridSize(a,b){if(void 0!==a&&void 0!==b){var d=b[b.length-1];this.$.table.setAttribute("aria-rowcount",a+this._a11yGetHeaderRowCount(b)+
this._a11yGetFooterRowCount(b));this.$.table.setAttribute("aria-colcount",d&&d.length||0);this._a11yUpdateHeaderRows();this._a11yUpdateFooterRows()}}_a11yUpdateHeaderRows(){H(this.$.header,(a,b)=>{a.setAttribute("aria-rowindex",b+1)})}_a11yUpdateFooterRows(){H(this.$.footer,(a,b)=>{a.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+b+1)})}_a11yUpdateRowRowindex(a,b){a.setAttribute("aria-rowindex",b+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(a,
b){a.setAttribute("aria-selected",!!b);na(a,d=>{d.setAttribute("aria-selected",!!b)})}_a11yUpdateRowExpanded(a){this.__isRowExpandable(a)?a.setAttribute("aria-expanded","false"):this.__isRowCollapsible(a)?a.setAttribute("aria-expanded","true"):a.removeAttribute("aria-expanded")}_a11yUpdateRowLevel(a,b){0<b||this.__isRowCollapsible(a)||this.__isRowExpandable(a)?a.setAttribute("aria-level",b+1):a.removeAttribute("aria-level")}_a11ySetRowDetailsCell(a,b){na(a,d=>{d!==b&&d.setAttribute("aria-controls",
b.id)})}_a11yUpdateCellColspan(a,b){a.setAttribute("aria-colspan",Number(b))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(a=>{let b=a.parentNode;for(;b&&"vaadin-grid-cell-content"!==b.localName;)b=b.parentNode;b&&b.assignedSlot&&b.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(a.direction)]||"none")})}},tf=c=>{if(!c.parentNode)return!1;const a=Array.from(c.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, a[href], area[href]")).filter(b=>
{b=b.getAttribute("part");return!(b&&b.includes("body-cell"))}).includes(c);return!c.disabled&&a&&c.offsetParent&&"hidden"!==getComputedStyle(c).visibility},uf=c=>class extends c{static get properties(){return{activeItem:{type:Object,notify:!0,value:null,sync:!0}}}ready(){super.ready();this.$.scroller.addEventListener("click",this._onClick.bind(this));this.addEventListener("cell-activate",this._activateItem.bind(this));this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(a){if(a=
(a=a.detail.model)?a.item:null)this.activeItem=this._itemsEqual(this.activeItem,a)?null:a}_onClick(a){if(!a.defaultPrevented){var b=a.composedPath();if((b=b[b.indexOf(this.$.table)-3])&&!(-1<b.getAttribute("part").indexOf("details-cell"))){var d=b._content,e=this.getRootNode().activeElement;d.contains(e)||this._isFocusable(a.target)||a.target instanceof HTMLLabelElement||this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(b.parentElement)}}))}}}_isFocusable(a){return tf(a)}},
vf=c=>(a,b)=>{let d=c?[...c]:[];a.filters&&nc(a.filters,"filtering",d)&&(d=ce(d,a.filters));Array.isArray(a.sortOrders)&&a.sortOrders.length&&nc(a.sortOrders,"sorting",d)&&(d=be(d,a.sortOrders));var e=Math.min(d.length,a.pageSize);a=a.page*e;e=d.slice(a,a+e);b(e,d.length)},wf=c=>class extends c{static get properties(){return{items:{type:Array,sync:!0}}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, _filters, _sorters, items.*)"]}__setArrayDataProvider(a){const b=
vf(this.items);b.__items=a;this._arrayDataProvider=b;this.size=a.length;this.dataProvider=b}__dataProviderOrItemsChanged(a,b,d){d&&(this._arrayDataProvider?a!==this._arrayDataProvider?this.items=this._arrayDataProvider=void 0:b?this._arrayDataProvider.__items===b?(this.clearCache(),this.size=this._flatSize):this.__setArrayDataProvider(b):(this.dataProvider=this._arrayDataProvider=void 0,this.size=0,this.clearCache()):b&&this.__setArrayDataProvider(b))}},rc="string"===typeof document.head.style.touchAction,
ub=["mousedown","mousemove","mouseup","click"],ee=[0,1,4,2];try{var pd=1===(new MouseEvent("test",{buttons:1})).buttons}catch(c){pd=!1}const de=pd;(function(){try{const c=Object.defineProperty({},"passive",{get(){}});window.addEventListener("test",null,c);window.removeEventListener("test",null,c)}catch(c){}})();const he=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),je={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0},L={mouse:{target:null,mouseIgnoreJob:null},
touch:{x:0,y:0,id:-1,scrollDecided:!1}},qc=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:c=>c.composedPath&&c.composedPath()||[],vb={},ca=[];wb({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){pa(this.info)},mousedown(c){if(ba(c)){var a=R(c),b=this;pc(this.info,d=>{ba(d)||(Da("up",a,d),pa(b.info))},d=>{ba(d)&&Da("up",a,d);pa(b.info)});Da("down",
a,c)}},touchstart(c){Da("down",R(c),c.changedTouches[0],c)},touchend(c){Da("up",R(c),c.changedTouches[0],c)}});wb({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(c){2<this.moves.length&&this.moves.shift();this.moves.push(c)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start";this.info.started=!1;this.info.moves=
[];this.info.x=0;this.info.y=0;this.info.prevent=!1;pa(this.info)},mousedown(c){if(ba(c)){var a=R(c),b=this,d=e=>{const f=e.clientX,g=e.clientY;sc(b.info,f,g)&&(b.info.state=b.info.started?"mouseup"===e.type?"end":"track":"start","start"===b.info.state&&Sa("tap"),b.info.addMove({x:f,y:g}),ba(e)||(b.info.state="end",pa(b.info)),a&&yb(b.info,a,e),b.info.started=!0)};pc(this.info,d,e=>{b.info.started&&d(e);pa(b.info)});this.info.x=c.clientX;this.info.y=c.clientY}},touchstart(c){c=c.changedTouches[0];
this.info.x=c.clientX;this.info.y=c.clientY},touchmove(c){const a=R(c);c=c.changedTouches[0];const b=c.clientX,d=c.clientY;sc(this.info,b,d)&&("start"===this.info.state&&Sa("tap"),this.info.addMove({x:b,y:d}),yb(this.info,a,c),this.info.state="track",this.info.started=!0)},touchend(c){const a=R(c);c=c.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:c.clientX,y:c.clientY}),yb(this.info,a,c))}});wb({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown",
"touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN;this.info.y=NaN;this.info.prevent=!1},mousedown(c){ba(c)&&(this.info.x=c.clientX,this.info.y=c.clientY)},click(c){ba(c)&&tc(this.info,c)},touchstart(c){c=c.changedTouches[0];this.info.x=c.clientX;this.info.y=c.clientY},touchend(c){tc(this.info,c.changedTouches[0],c)}});const xf=c=>class extends c{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,
value:1E7}}}static get observers(){return["_updateOrders(_columnTree)"]}ready(){super.ready();Ca(this,"track",this._onTrackEvent);this._reorderGhost=this.shadowRoot.querySelector('[part\x3d"reorder-ghost"]');this.addEventListener("touchstart",this._onTouchStart.bind(this));this.addEventListener("touchmove",this._onTouchMove.bind(this));this.addEventListener("touchend",this._onTouchEnd.bind(this));this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(a){this.hasAttribute("reordering")&&
(a.preventDefault(),ld||this._onTrackEnd())}_onTouchStart(a){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:a.touches[0].clientX,y:a.touches[0].clientY}})},100)}_onTouchMove(a){this._draggedColumn&&a.preventDefault();clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout);this._onTrackEnd()}_onTrackEvent(a){if("start"===a.detail.state){var b=a.composedPath();(b=b[b.indexOf(this.$.header)-2])&&b._content&&!b._content.contains(this.getRootNode().activeElement)&&
!this.$.scroller.hasAttribute("column-resizing")&&(this._touchDevice||this._onTrackStart(a))}else"track"===a.detail.state?this._onTrack(a):"end"===a.detail.state&&this._onTrackEnd(a)}_onTrackStart(a){if(this.columnReorderingAllowed){var b=a.composedPath&&a.composedPath();if((!b||!b.some(d=>d.hasAttribute&&d.hasAttribute("draggable")))&&(b=this._cellFromPoint(a.detail.x,a.detail.y))&&b.getAttribute("part").includes("header-cell")){this.toggleAttribute("reordering",!0);for(this._draggedColumn=b._column;1===
this._draggedColumn.parentElement.childElementCount;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed");this._draggedColumn._reorderStatus="dragging";this._updateGhost(b);this._reorderGhost.style.visibility="visible";this._updateGhostPosition(a.detail.x,this._touchDevice?a.detail.y-50:a.detail.y);this._autoScroller()}}}_onTrack(a){if(this._draggedColumn){var b=this._cellFromPoint(a.detail.x,a.detail.y);if(b){var d=this._getTargetColumn(b,
this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,d)&&this._isSwappableByPosition(d,a.detail.x)){b=this._columnTree.findIndex(h=>h.includes(d));b=this._getColumnsInOrder(b);var e=b.indexOf(this._draggedColumn);const f=b.indexOf(d),g=e<f?1:-1;for(;e!==f;e+=g)this._swapColumnOrders(this._draggedColumn,b[e+g])}this._updateGhostPosition(a.detail.x,this._touchDevice?a.detail.y-50:a.detail.y);this._lastDragClientX=a.detail.x}}}_onTrackEnd(){this._draggedColumn&&(this.toggleAttribute("reordering",
!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._lastDragClientX=this._draggedColumn=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(a=this._columnTree.length-1){return this._columnTree[a].filter(b=>!b.hidden).sort((b,d)=>b._order-d._order)}_cellFromPoint(a=0,b=0){this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",
!0);a=this.shadowRoot.elementFromPoint(a,b);this.$.scroller.toggleAttribute("no-content-pointer-events",!1);if(a&&a._column)return a}_updateGhostPosition(a,b){const d=this._reorderGhost.getBoundingClientRect();a-=d.width/2;b-=d.height/2;const e=parseInt(this._reorderGhost._left||0),f=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=e-(d.left-a);this._reorderGhost._top=f-(d.top-b);this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(a){const b=
this._reorderGhost;b.textContent=a._content.innerText;const d=window.getComputedStyle(a);"boxSizing display width height background alignItems padding border flex-direction overflow".split(" ").forEach(e=>{b.style[e]=d[e]});return b}_updateOrders(a){void 0!==a&&(a[0].forEach(b=>{b._order=0}),kc(a[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(a,b){H(a.parentNode,d=>{/column/u.test(d.localName)&&this._isSwapAllowed(d,a)&&(d._reorderStatus=b)})}_autoScroller(){if(this._lastDragClientX){const a=
this._lastDragClientX-this.getBoundingClientRect().right+50,b=this.getBoundingClientRect().left-this._lastDragClientX+50;0<a?this.$.table.scrollLeft+=a/10:0<b&&(this.$.table.scrollLeft-=b/10)}this._draggedColumn&&setTimeout(()=>this._autoScroller(),10)}_isSwapAllowed(a,b){if(a&&b){const d=a.parentElement===b.parentElement,e=a.frozen&&b.frozen||a.frozenToEnd&&b.frozenToEnd||!a.frozen&&!a.frozenToEnd&&!b.frozen&&!b.frozenToEnd;return a!==b&&d&&e}}_isSwappableByPosition(a,b){var d=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~\x3d"cell"]')).find(f=>
a.contains(f._column));const e=this.$.header.querySelector("tr:not([hidden]) [reorder-status\x3ddragging]").getBoundingClientRect();d=d.getBoundingClientRect();return d.left>e.left?b>d.right-e.width:b<d.left+e.width}_swapColumnOrders(a,b){[a._order,b._order]=[b._order,a._order];this._debounceUpdateFrozenColumn();this._updateFirstAndLastColumn()}_getTargetColumn(a,b){if(a&&b){let d=a._column;for(;d.parentElement!==b.parentElement&&d!==this;)d=d.parentElement;return d.parentElement===b.parentElement?
d:a._column}}},yf=c=>class extends c{ready(){super.ready();const a=this.$.scroller;Ca(a,"track",this._onHeaderTrack.bind(this));a.addEventListener("touchmove",b=>a.hasAttribute("column-resizing")&&b.preventDefault());a.addEventListener("contextmenu",b=>"resize-handle"===b.target.getAttribute("part")&&b.preventDefault());a.addEventListener("mousedown",b=>"resize-handle"===b.target.getAttribute("part")&&b.preventDefault())}_onHeaderTrack(a){var b=a.target;if("resize-handle"===b.getAttribute("part")){let h=
b.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);"vaadin-grid-column-group"===h.localName;)h=h._childColumns.slice(0).sort((l,m)=>l._order-m._order).filter(l=>!l.hidden).pop();b=this.__isRTL;var d=a.detail.x,e=Array.from(this.$.header.querySelectorAll('[part~\x3d"row"]:last-child [part~\x3d"cell"]'));const k=e.find(l=>l._column===h);if(k.offsetWidth){var f=getComputedStyle(k._content);f=10+parseInt(f.paddingLeft)+parseInt(f.paddingRight)+parseInt(f.borderLeftWidth)+
parseInt(f.borderRightWidth)+parseInt(f.marginLeft)+parseInt(f.marginRight);var g=k.offsetWidth;const l=k.getBoundingClientRect();g=k.hasAttribute("frozen-to-end")?g+(b?d-l.right:l.left-d):g+(b?l.left-d:d-l.right);h.width=`${Math.max(f,g)}px`;h.flexGrow=0}e.sort((l,m)=>l._column._order-m._column._order).forEach((l,m,n)=>{m<n.indexOf(k)&&(l._column.width=`${l.offsetWidth}px`,l._column.flexGrow=0)});(e=this._frozenToEndCells[0])&&this.$.table.scrollWidth>this.$.table.offsetWidth&&(e=e.getBoundingClientRect(),
d-=b?e.right:e.left,b&&0>=d||!b&&0<=d)&&(this.$.table.scrollLeft+=d);"end"===a.detail.state&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:h}})));this._resizeHandler()}}};class qd{constructor(c,a,b,d,e){D(this,"context",void 0);D(this,"size",0);D(this,"pageSize",void 0);D(this,"items",[]);D(this,"pendingRequests",{});D(this,"__subCacheByIndex",{});D(this,"__flatSize",0);this.context=c;this.pageSize=a;this.size=b||0;
this.parentCache=d;this.parentCacheIndex=e;this.__flatSize=b||0}get parentItem(){return this.parentCache&&this.parentCache.items[this.parentCacheIndex]}get subCaches(){return Object.values(this.__subCacheByIndex)}get isLoading(){return 0<Object.keys(this.pendingRequests).length?!0:this.subCaches.some(c=>c.isLoading)}get flatSize(){return this.__flatSize}get effectiveSize(){console.warn("\x3cvaadin-grid\x3e The `effectiveSize` property of ItemCache is deprecated and will be removed in Vaadin 25.");
return this.flatSize}recalculateFlatSize(){this.__flatSize=!this.parentItem||this.context.isExpanded(this.parentItem)?this.size+this.subCaches.reduce((c,a)=>{a.recalculateFlatSize();return c+a.flatSize},0):0}setPage(c,a){const b=c*this.pageSize;a.forEach((d,e)=>{this.items[b+e]=d})}getSubCache(c){return this.__subCacheByIndex[c]}removeSubCache(c){delete this.__subCacheByIndex[c]}removeSubCaches(){this.__subCacheByIndex={}}createSubCache(c){const a=new qd(this.context,this.pageSize,0,this,c);return this.__subCacheByIndex[c]=
a}getFlatIndex(c){const a=Math.max(0,Math.min(this.size-1,c));return this.subCaches.reduce((b,d)=>a>d.parentCacheIndex?b+d.flatSize:b,a)}getItemForIndex(c){console.warn("\x3cvaadin-grid\x3e The `getItemForIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");({item:c}=Ta(this,c));return c}getCacheAndIndex(c){console.warn("\x3cvaadin-grid\x3e The `getCacheAndIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");const {cache:a,index:b}=Ta(this,c);return{cache:a,
scaledIndex:b}}updateSize(){console.warn("\x3cvaadin-grid\x3e The `updateSize` method of ItemCache is deprecated and will be removed in Vaadin 25.");this.recalculateFlatSize()}ensureSubCacheForScaledIndex(c){console.warn("\x3cvaadin-grid\x3e The `ensureSubCacheForScaledIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");this.getSubCache(c)||(c=this.createSubCache(c),this.context.__controller.__loadCachePage(c,0))}get grid(){console.warn("\x3cvaadin-grid\x3e The `grid` property of ItemCache is deprecated and will be removed in Vaadin 25.");
return this.context.__controller.host}get itemCaches(){console.warn("\x3cvaadin-grid\x3e The `itemCaches` property of ItemCache is deprecated and will be removed in Vaadin 25.");return this.__subCacheByIndex}}class zf extends EventTarget{constructor(c,{size:a,pageSize:b,isExpanded:d,getItemId:e,dataProvider:f,dataProviderParams:g}){super();D(this,"host",void 0);D(this,"dataProvider",void 0);D(this,"dataProviderParams",void 0);D(this,"size",void 0);D(this,"pageSize",void 0);D(this,"isExpanded",void 0);
D(this,"getItemId",void 0);D(this,"rootCache",void 0);this.host=c;this.pageSize=b;this.getItemId=e;this.isExpanded=d;this.dataProvider=f;this.dataProviderParams=g;this.rootCache=this.__createRootCache(a)}get flatSize(){return this.rootCache.flatSize}get __cacheContext(){return{isExpanded:this.isExpanded,__controller:this}}isLoading(){return this.rootCache.isLoading}setPageSize(c){this.pageSize=c;this.clearCache()}setDataProvider(c){this.dataProvider=c;this.clearCache()}recalculateFlatSize(){this.rootCache.recalculateFlatSize()}clearCache(){this.rootCache=
this.__createRootCache(this.rootCache.size)}getFlatIndexContext(c){return Ta(this.rootCache,c)}getItemContext(c){return uc({getItemId:this.getItemId},this.rootCache,c)}getFlatIndexByPath(c){return vc(this.rootCache,c)}ensureFlatIndexLoaded(c){const {cache:a,page:b,item:d}=this.getFlatIndexContext(c);d||this.__loadCachePage(a,b)}ensureFlatIndexHierarchy(c){const {cache:a,item:b,index:d}=this.getFlatIndexContext(c);b&&this.isExpanded(b)&&!a.getSubCache(d)&&(c=a.createSubCache(d),this.__loadCachePage(c,
0))}loadFirstPage(){this.__loadCachePage(this.rootCache,0)}__createRootCache(c){return new qd(this.__cacheContext,this.pageSize,c)}__loadCachePage(c,a){if(this.dataProvider&&!c.pendingRequests[a]){var b={page:a,pageSize:this.pageSize,parentItem:c.parentItem};this.dataProviderParams&&(b={...b,...this.dataProviderParams()});var d=(e,f)=>{void 0!==f?c.size=f:b.parentItem&&(c.size=e.length);c.setPage(a,e);this.recalculateFlatSize();this.dispatchEvent(new CustomEvent("page-received"));delete c.pendingRequests[a];
this.dispatchEvent(new CustomEvent("page-loaded"))};c.pendingRequests[a]=d;this.dispatchEvent(new CustomEvent("page-requested"));this.dataProvider(b,d)}}}const Af=c=>class extends c{static get properties(){return{size:{type:Number,notify:!0,sync:!0},_flatSize:{type:Number,sync:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged",sync:!0},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged",sync:!0},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_hasData:{type:Boolean,
value:!1,sync:!0},itemHasChildrenPath:{type:String,value:"children",observer:"__itemHasChildrenPathChanged",sync:!0},itemIdPath:{type:String,value:null,sync:!0},expandedItems:{type:Object,notify:!0,value:()=>[],sync:!0},__expandedKeys:{type:Object,computed:"__computeExpandedKeys(itemIdPath, expandedItems)"}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems)"]}constructor(){super();this._dataProviderController=new zf(this,{size:this.size,pageSize:this.pageSize,
getItemId:this.getItemId.bind(this),isExpanded:this._isExpanded.bind(this),dataProvider:this.dataProvider?this.dataProvider.bind(this):null,dataProviderParams:()=>({sortOrders:this._mapSorters(),filters:this._mapFilters()})});this._dataProviderController.addEventListener("page-requested",this._onDataProviderPageRequested.bind(this));this._dataProviderController.addEventListener("page-received",this._onDataProviderPageReceived.bind(this));this._dataProviderController.addEventListener("page-loaded",
this._onDataProviderPageLoaded.bind(this))}get _cache(){console.warn("\x3cvaadin-grid\x3e The `_cache` property is deprecated and will be removed in Vaadin 25.");return this._dataProviderController.rootCache}get _effectiveSize(){console.warn("\x3cvaadin-grid\x3e The `_effectiveSize` property is deprecated and will be removed in Vaadin 25.");return this._flatSize}_sizeChanged(a){this._dataProviderController.rootCache.size=a;this._dataProviderController.recalculateFlatSize();this._flatSize=this._dataProviderController.flatSize}__itemHasChildrenPathChanged(a,
b){(b||"children"!==a)&&this.requestContentUpdate()}_getItem(a,b){if(!(a>=this._flatSize)){b.index=a;var {item:d}=this._dataProviderController.getFlatIndexContext(a);d?(this.__updateLoading(b,!1),this._updateItem(b,d),this._isExpanded(d)&&this._dataProviderController.ensureFlatIndexHierarchy(a)):(this.__updateLoading(b,!0),this._dataProviderController.ensureFlatIndexLoaded(a))}}__updateLoading(a,b){const d=ma(a);Oa(a,"loading",b);Q(d,"loading-row-cell",b)}getItemId(a){return this.itemIdPath?tb(this.itemIdPath,
a):a}_isExpanded(a){return this.__expandedKeys&&this.__expandedKeys.has(this.getItemId(a))}_expandedItemsChanged(){this._dataProviderController.recalculateFlatSize();this._flatSize=this._dataProviderController.flatSize;this.__updateVisibleRows()}__computeExpandedKeys(a,b){a=b||[];const d=new Set;a.forEach(e=>{d.add(this.getItemId(e))});return d}expandItem(a){this._isExpanded(a)||(this.expandedItems=[...this.expandedItems,a])}collapseItem(a){this._isExpanded(a)&&(this.expandedItems=this.expandedItems.filter(b=>
!this._itemsEqual(b,a)))}_getIndexLevel(a=0){({level:a}=this._dataProviderController.getFlatIndexContext(a));return a}_loadPage(a,b){console.warn("\x3cvaadin-grid\x3e The `_loadPage` method is deprecated and will be removed in Vaadin 25.");this._dataProviderController.__loadCachePage(b,a)}_onDataProviderPageRequested(){this._setLoading(!0)}_onDataProviderPageReceived(){this._flatSize=this._dataProviderController.flatSize;this._getRenderedRows().forEach(a=>{this._dataProviderController.ensureFlatIndexHierarchy(a.index)});
this._hasData=!0}_onDataProviderPageLoaded(){this._debouncerApplyCachedData=u.debounce(this._debouncerApplyCachedData,U.after(0),()=>{this._setLoading(!1);this._getRenderedRows().forEach(a=>{const {item:b}=this._dataProviderController.getFlatIndexContext(a.index);b&&this._getItem(a.index,a)});this.__scrollToPendingIndexes();this.__dispatchPendingBodyCellFocus()});this._dataProviderController.isLoading()||this._debouncerApplyCachedData.flush()}__debounceClearCache(){this.__clearCacheDebouncer=u.debounce(this.__clearCacheDebouncer,
M,()=>this.clearCache())}clearCache(){this._dataProviderController.clearCache();this._dataProviderController.rootCache.size=this.size;this._dataProviderController.recalculateFlatSize();this._hasData=!1;this.__updateVisibleRows();this.__virtualizer.size||this._dataProviderController.loadFirstPage()}_pageSizeChanged(a,b){this._dataProviderController.setPageSize(a);void 0!==b&&a!==b&&this.clearCache()}_checkSize(){void 0===this.size&&0===this._flatSize&&console.warn("The \x3cvaadin-grid\x3e needs the total number of items in order to display rows, which you can specify either by setting the `size` property, or by providing it to the second argument of the `dataProvider` function `callback` call.")}_dataProviderChanged(a,
b){this._dataProviderController.setDataProvider(a?a.bind(this):null);void 0!==b&&this.clearCache();this._ensureFirstPageLoaded();this._debouncerCheckSize=u.debounce(this._debouncerCheckSize,U.after(2E3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._dataProviderController.loadFirstPage()}_itemsEqual(a,b){return this.getItemId(a)===this.getItemId(b)}_getItemIndexInArray(a,b){let d=-1;b.forEach((e,f)=>{this._itemsEqual(e,a)&&(d=f)});return d}scrollToIndex(...a){let b;for(;b!==
(b=this._dataProviderController.getFlatIndexByPath(a));)this._scrollToFlatIndex(b);if(this._dataProviderController.isLoading()||!this.clientHeight)this.__pendingScrollToIndexes=a}__scrollToPendingIndexes(){if(this.__pendingScrollToIndexes&&this.$.items.children.length){const a=this.__pendingScrollToIndexes;delete this.__pendingScrollToIndexes;this.scrollToIndex(...a)}}},Bf=!("draggable"in document.createElement("div")),Cf=c=>class extends c{static get properties(){return{dropMode:{type:String,sync:!0},
rowsDraggable:{type:Boolean,sync:!0},dragFilter:{type:Function,sync:!0},dropFilter:{type:Function,sync:!0},__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}ready(){super.ready();this.$.table.addEventListener("dragstart",this._onDragStart.bind(this));this.$.table.addEventListener("dragend",this._onDragEnd.bind(this));this.$.table.addEventListener("dragover",this._onDragOver.bind(this));this.$.table.addEventListener("dragleave",
this._onDragLeave.bind(this));this.$.table.addEventListener("drop",this._onDrop.bind(this));this.$.table.addEventListener("dragenter",a=>{this.dropMode&&(a.preventDefault(),a.stopPropagation())})}_onDragStart(a){if(this.rowsDraggable){let e=a.target;"vaadin-grid-cell-content"===e.localName&&(e=e.assignedSlot.parentNode.parentNode);if(e.parentNode===this.$.items){a.stopPropagation();this.toggleAttribute("dragging-rows",!0);if(this._safari){const f=e.style.transform;e.style.top=/translateY\((.*)\)/u.exec(f)[1];
e.style.transform="none";requestAnimationFrame(()=>{e.style.top="";e.style.transform=f})}var b=e.getBoundingClientRect();Bf?a.dataTransfer.setDragImage(e):a.dataTransfer.setDragImage(e,a.clientX-b.left,a.clientY-b.top);var d=[e];this._isSelected(e._item)&&(d=this.__getViewportRows().filter(f=>this._isSelected(f._item)).filter(f=>!this.dragFilter||this.dragFilter(this.__getRowModel(f))));a.dataTransfer.setData("text",this.__formatDefaultTransferData(d));Ba(e,{dragstart:1<d.length?`${d.length}`:""});
this.style.setProperty("--_grid-drag-start-x",`${a.clientX-b.left+20}px`);this.style.setProperty("--_grid-drag-start-y",`${a.clientY-b.top+10}px`);requestAnimationFrame(()=>{Ba(e,{dragstart:!1});this.style.setProperty("--_grid-drag-start-x","");this.style.setProperty("--_grid-drag-start-y","")});b=new CustomEvent("grid-dragstart",{detail:{draggedItems:d.map(f=>f._item),setDragData:(f,g)=>a.dataTransfer.setData(f,g),setDraggedItemsCount:f=>e.setAttribute("dragstart",f)}});b.originalEvent=a;this.dispatchEvent(b)}}}_onDragEnd(a){this.toggleAttribute("dragging-rows",
!1);a.stopPropagation();const b=new CustomEvent("grid-dragend");b.originalEvent=a;this.dispatchEvent(b)}_onDragLeave(a){a.stopPropagation();this._clearDragStyles()}_onDragOver(a){if(this.dropMode)if(this._dragOverItem=this._dropLocation=void 0,this.__dndAutoScroll(a.clientY))this._clearDragStyles();else{var b=a.composedPath().find(d=>"tr"===d.localName);if(this._flatSize&&"on-grid"!==this.dropMode)if(b&&b.parentNode===this.$.items){const d=b.getBoundingClientRect();this._dropLocation="on-top";"between"===
this.dropMode?this._dropLocation=a.clientY-d.top<d.bottom-a.clientY?"above":"below":"on-top-or-between"===this.dropMode&&(a.clientY-d.top<d.height/3?this._dropLocation="above":a.clientY-d.top>d.height/3*2&&(this._dropLocation="below"))}else{if(b||"between"!==this.dropMode&&"on-top-or-between"!==this.dropMode)return;b=Array.from(this.$.items.children).filter(d=>!d.hidden).pop();this._dropLocation="below"}else this._dropLocation="empty";b&&b.hasAttribute("drop-disabled")?this._dropLocation=void 0:(a.stopPropagation(),
a.preventDefault(),"empty"===this._dropLocation?this.toggleAttribute("dragover",!0):b?(this._dragOverItem=b._item,b.getAttribute("dragover")!==this._dropLocation&&lc(b,{dragover:this._dropLocation})):this._clearDragStyles())}}__dndAutoScroll(a){if(this.__dndAutoScrolling)return!0;var b=this.$.header.getBoundingClientRect().bottom,d=this.$.footer.getBoundingClientRect().top;b=b-a+this.__dndAutoScrollThreshold;d=a-d+this.__dndAutoScrollThreshold;a=0;0<d?a=2*d:0<b&&(a=2*-b);if(a&&(b=this.$.table.scrollTop,
this.$.table.scrollTop+=a,b!==this.$.table.scrollTop))return this.__dndAutoScrolling=!0,setTimeout(()=>{this.__dndAutoScrolling=!1},20),!0}__getViewportRows(){const a=this.$.header.getBoundingClientRect().bottom,b=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(d=>{d=d.getBoundingClientRect();return d.bottom>a&&d.top<b})}_clearDragStyles(){this.removeAttribute("dragover");H(this.$.items,a=>{lc(a,{dragover:null})})}_onDrop(a){if(this.dropMode){a.stopPropagation();
a.preventDefault();var b=a.dataTransfer.types&&Array.from(a.dataTransfer.types).map(d=>({type:d,data:a.dataTransfer.getData(d)}));this._clearDragStyles();b=new CustomEvent("grid-drop",{bubbles:a.bubbles,cancelable:a.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:b}});b.originalEvent=a;this.dispatchEvent(b)}}__formatDefaultTransferData(a){return a.map(b=>Array.from(b.children).filter(d=>!d.hidden&&-1===d.getAttribute("part").indexOf("details-cell")).sort((d,
e)=>d._column._order>e._column._order?1:-1).map(d=>d._content.textContent.trim()).filter(d=>d).join("\t")).join("\n")}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){H(this.$.items,a=>{a.hidden||this._filterDragAndDrop(a,this.__getRowModel(a))})}_filterDragAndDrop(a,b){const d=this.loading||a.hasAttribute("loading"),e=!this.rowsDraggable||d||this.dragFilter&&!this.dragFilter(b);b=!this.dropMode||d||this.dropFilter&&!this.dropFilter(b);na(a,f=>{e?f._content.removeAttribute("draggable"):
f._content.setAttribute("draggable",!0)});Ba(a,{"drag-disabled":!!e,"drop-disabled":!!b})}},Df=c=>class extends c{static get properties(){return{_columnTree:Object}}ready(){super.ready();this._addNodeObserver()}_hasColumnGroups(a){return a.some(b=>"vaadin-grid-column-group"===b.localName)}_getChildColumns(a){return fa.getColumns(a)}_flattenColumnGroups(a){return a.map(b=>"vaadin-grid-column-group"===b.localName?this._getChildColumns(b):[b]).reduce((b,d)=>b.concat(d),[])}_getColumnTree(){var a=fa.getColumns(this);
const b=[a];for(;this._hasColumnGroups(a);)a=this._flattenColumnGroups(a),b.push(a);return b}_debounceUpdateColumnTree(){this.__updateColumnTreeDebouncer=u.debounce(this.__updateColumnTreeDebouncer,M,()=>this._updateColumnTree())}_updateColumnTree(){const a=this._getColumnTree();wc(a,this._columnTree)||(a.forEach(b=>{b.forEach(d=>{d.performUpdate&&d.performUpdate()})}),this._columnTree=a)}_addNodeObserver(){this._observer=new fa(this,(a,b)=>{const d=b.flatMap(e=>e._allCells);a=e=>d.filter(f=>f&&f._content.contains(e)).length;
this.__removeSorters(this._sorters.filter(a));this.__removeFilters(this._filters.filter(a));this._debounceUpdateColumnTree();this._debouncerCheckImports=u.debounce(this._debouncerCheckImports,U.after(2E3),this._checkImports.bind(this));this._ensureFirstPageLoaded()})}_checkImports(){"vaadin-grid-column-group vaadin-grid-filter vaadin-grid-filter-column vaadin-grid-tree-toggle vaadin-grid-selection-column vaadin-grid-sort-column vaadin-grid-sorter".split(" ").forEach(a=>{this.querySelector(a)&&!customElements.get(a)&&
console.warn(`Make sure you have imported the required module for <${a}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(a=>this._updateFirstAndLastColumnForRow(a))}_updateFirstAndLastColumnForRow(a){Array.from(a.querySelectorAll('[part~\x3d"cell"]:not([part~\x3d"details-cell"])')).sort((b,d)=>b._column._order-d._column._order).forEach((b,d,e)=>{aa(b,"first-column",0===d);aa(b,"last-column",d===e.length-1)})}_isColumnElement(a){return a.nodeType===
Node.ELEMENT_NODE&&/\bcolumn\b/u.test(a.localName)}},Ef=c=>class extends c{getEventContext(a){const b={};a=a.__composedPath||a.composedPath();const d=a[a.indexOf(this.$.table)-3];if(!d)return b;b.section=["body","header","footer","details"].find(e=>-1<d.getAttribute("part").indexOf(e));d._column&&(b.column=d._column);"body"!==b.section&&"details"!==b.section||Object.assign(b,this.__getRowModel(d.parentElement));return b}},Ff=c=>class extends c{static get properties(){return{_filters:{type:Array,value:()=>
[]}}}constructor(){super();this._filterChanged=this._filterChanged.bind(this);this.addEventListener("filter-changed",this._filterChanged)}_filterChanged(a){a.stopPropagation();this.__addFilter(a.target);this.__applyFilters()}__removeFilters(a){0!==a.length&&(this._filters=this._filters.filter(b=>0>a.indexOf(b)),this.__applyFilters())}__addFilter(a){-1===this._filters.indexOf(a)&&this._filters.push(a)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(a=>
({path:a.path,value:a.value}))}},Gf=c=>class extends c{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_itemsFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_footerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,_focusedCell:{type:Object,observer:"_focusedCellChanged",sync:!0},interacting:{type:Boolean,value:!1,reflectToAttribute:!0,
readOnly:!0,observer:"_interactingChanged"}}}get __rowFocusMode(){return this.__isRow(this._itemsFocusable)||this.__isRow(this._headerFocusable)||this.__isRow(this._footerFocusable)}set __rowFocusMode(a){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach(b=>{var d=this[b];if(a){const e=d&&d.parentElement;this.__isCell(d)?this[b]=e:this.__isCell(e)&&(this[b]=e.parentElement)}else!a&&this.__isRow(d)&&(d=d.firstElementChild,this[b]=d._focusButton||d)})}ready(){super.ready();this._ios||
this._android||(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",()=>{this.toggleAttribute("navigating",!1);this._isMousedown=!0;this._focusedColumnOrder=void 0}),this.addEventListener("mouseup",()=>{this._isMousedown=!1}))}_focusableChanged(a,b){b&&
b.setAttribute("tabindex","-1");a&&this._updateGridSectionFocusTarget(a)}_focusedCellChanged(a,b){b&&jc(b,"part","focused-cell");a&&ic(a,"part","focused-cell")}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable);this._updateGridSectionFocusTarget(this._itemsFocusable);this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(this._itemsFocusable){var a=this.shadowRoot.activeElement===this._itemsFocusable;this._getRenderedRows().forEach(b=>{if(b.index===
this._focusedItemIndex)if(this.__rowFocusMode)this._itemsFocusable=b;else{var d=this._itemsFocusable.parentElement;let e=this._itemsFocusable;d&&(this.__isCell(d)&&(e=d,d=d.parentElement),d=[...d.children].indexOf(e),this._itemsFocusable=this.__getFocusable(b,b.children[d]))}});a&&this._itemsFocusable.focus()}}_onKeyDown(a){const b=a.key;let d;switch(b){case "ArrowUp":case "ArrowDown":case "ArrowLeft":case "ArrowRight":case "PageUp":case "PageDown":case "Home":case "End":d="Navigation";break;case "Enter":case "Escape":case "F2":d=
"Interaction";break;case "Tab":d="Tab";break;case " ":d="Space"}this._detectInteracting(a);this.interacting&&"Interaction"!==d&&(d=void 0);if(d)this[`_on${d}KeyDown`](a,b)}_ensureScrolledToIndex(a){[...this.$.items.children].find(b=>b.index===a)?this.__scrollIntoViewport(a):this.scrollToIndex(a)}__isRowExpandable(a){if(this.itemHasChildrenPath)return a=a._item,!(!a||!tb(this.itemHasChildrenPath,a)||this._isExpanded(a))}__isRowCollapsible(a){return this._isExpanded(a._item)}__isDetailsCell(a){return a.matches('[part~\x3d"details-cell"]')}__isCell(a){return a instanceof
HTMLTableCellElement}__isRow(a){return a instanceof HTMLTableRowElement}__getIndexOfChildElement(a){return Array.prototype.indexOf.call(a.parentNode.children,a)}_onNavigationKeyDown(a,b){a.preventDefault();var d=this._lastVisibleIndex-this._firstVisibleIndex-1;const e=this.__isRTL;let f=0,g=0;switch(b){case "ArrowRight":f=e?-1:1;break;case "ArrowLeft":f=e?1:-1;break;case "Home":this.__rowFocusMode?g=-Infinity:a.ctrlKey?g=-Infinity:f=-Infinity;break;case "End":this.__rowFocusMode?g=Infinity:a.ctrlKey?
g=Infinity:f=Infinity;break;case "ArrowDown":g=1;break;case "ArrowUp":g=-1;break;case "PageDown":g=d;break;case "PageUp":g=-d}d=a.composedPath().find(k=>this.__isRow(k));a=a.composedPath().find(k=>this.__isCell(k));if((!this.__rowFocusMode||d)&&(this.__rowFocusMode||a)){var h=e?"ArrowRight":"ArrowLeft";if(b===(e?"ArrowLeft":"ArrowRight")){if(this.__rowFocusMode){if(this.__isRowExpandable(d)){this.expandItem(d._item);return}this.__rowFocusMode=!1;this._onCellNavigation(d.firstElementChild,0,0);return}}else if(b===
h)if(this.__rowFocusMode){if(this.__isRowCollapsible(d)){this.collapseItem(d._item);return}}else if(b=[...d.children].sort((k,l)=>k._order-l._order),a===b[0]||this.__isDetailsCell(a)){this.__rowFocusMode=!0;this._onRowNavigation(d,0);return}this.__rowFocusMode?this._onRowNavigation(d,g):this._onCellNavigation(a,f,g)}}_onRowNavigation(a,b){({dstRow:a}=this.__navigateRows(b,a));a&&a.focus()}__getIndexInGroup(a,b){return a.parentNode===this.$.items?void 0!==b?b:a.index:this.__getIndexOfChildElement(a)}__navigateRows(a,
b,d){const e=this.__getIndexInGroup(b,this._focusedItemIndex),f=b.parentNode;var g=(f===this.$.items?this._flatSize:f.children.length)-1;let h=Math.max(0,Math.min(e+a,g));if(f!==this.$.items){if(h>e)for(;h<g&&f.children[h].hidden;)h+=1;else if(h<e)for(;0<h&&f.children[h].hidden;)--h;this.toggleAttribute("navigating",!0);return{dstRow:f.children[h]}}g=!1;d&&(d=this.__isDetailsCell(d),f===this.$.items&&(b=b._item,{item:g}=this._dataProviderController.getFlatIndexContext(h),g=d?0===a:1===a&&this._isDetailsOpened(b)||
-1===a&&h!==e&&this._isDetailsOpened(g),g!==d&&(1===a&&g||-1===a&&!g)&&(h=e)));this._ensureScrolledToIndex(h);this._focusedItemIndex=h;this.toggleAttribute("navigating",!0);return{dstRow:[...f.children].find(k=>!k.hidden&&k.index===h),dstIsRowDetails:g}}_onCellNavigation(a,b,d){var e=a.parentNode;const {dstRow:f,dstIsRowDetails:g}=this.__navigateRows(d,e,a);if(f){var h=this.__getIndexOfChildElement(a);this.$.items.contains(a)&&(h=[...this.$.sizer.children].findIndex(m=>m._column===a._column));var k=
this.__isDetailsCell(a),l=e.parentNode;e=this.__getIndexInGroup(e,this._focusedItemIndex);void 0===this._focusedColumnOrder&&(this._focusedColumnOrder=k?0:this._getColumns(l,e).filter(m=>!m.hidden)[h]._order);if(g)[...f.children].find(m=>this.__isDetailsCell(m)).focus();else{h=this.__getIndexInGroup(f,this._focusedItemIndex);l=this._getColumns(l,h).filter(n=>!n.hidden);h=l.map(n=>n._order).sort((n,p)=>n-p);const m=h.length-1;e=h.indexOf(h.slice(0).sort((n,p)=>Math.abs(n-this._focusedColumnOrder)-
Math.abs(p-this._focusedColumnOrder))[0]);b=0===d&&k?e:Math.max(0,Math.min(e+b,m));b!==e&&(this._focusedColumnOrder=void 0);b=l.reduce((n,p,q)=>{n[p._order]=q;return n},{})[h[b]];if(this.$.items.contains(a)){const n=this.$.sizer.children[b];this._lazyColumns&&(this.__isColumnInViewport(n._column)||n.scrollIntoView(),this.__updateColumnsBodyContentHidden(),this.__updateHorizontalScrollPosition());b=[...f.children].find(p=>p._column===n._column)}else b=f.children[b];this._scrollHorizontallyToCell(b);
b.focus()}}}_onInteractionKeyDown(a,b){var d=a.composedPath()[0];d="input"===d.localName&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/iu.test(d.type);switch(b){case "Enter":var e=this.interacting?!d:!0;break;case "Escape":e=!1;break;case "F2":e=!this.interacting}({cell:d}=this._getGridEventLocation(a));if(this.interacting!==e&&null!==d)if(e){if(e=d._content.querySelector("[focus-target]")||[...d._content.querySelectorAll("*")].find(f=>this._isFocusable(f)))a.preventDefault(),e.focus(),
this._setInteracting(!0),this.toggleAttribute("navigating",!1)}else a.preventDefault(),this._focusedColumnOrder=void 0,d.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0);"Escape"===b&&this._hideTooltip(!0)}_predictFocusStepTarget(a,b){var d=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];a=d.indexOf(a);for(a+=b;0<=a&&a<=d.length-1;){let e=d[a];e&&!this.__rowFocusMode&&(e=d[a].parentNode);if(!e||e.hidden)a+=b;else break}(d=d[a])&&
!this.__isHorizontallyInViewport(d)&&(b=this._getColumnsInOrder().find(e=>this.__isColumnInViewport(e)))&&(d===this._headerFocusable?d=b._headerCell:d===this._itemsFocusable?(d=d._column._cells.indexOf(d),d=b._cells[d]):d===this._footerFocusable&&(d=b._footerCell));return d}_onTabKeyDown(a){var b=this._predictFocusStepTarget(a.composedPath()[0],a.shiftKey?-1:1);if(b){a.stopPropagation();if(b===this.$.table)this.$.table.focus();else if(b===this.$.focusexit)this.$.focusexit.focus();else if(b===this._itemsFocusable){let e=
b;var d=this.__isRow(b)?b:b.parentNode;this._ensureScrolledToIndex(this._focusedItemIndex);d.index!==this._focusedItemIndex&&this.__isCell(b)&&(b=Array.from(d.children).indexOf(this._itemsFocusable),(d=Array.from(this.$.items.children).find(f=>!f.hidden&&f.index===this._focusedItemIndex))&&(e=d.children[b]));a.preventDefault();e.focus()}else a.preventDefault(),b.focus();this.toggleAttribute("navigating",!0)}}_onSpaceKeyDown(a){a.preventDefault();a=a.composedPath()[0];const b=this.__isRow(a);!b&&a._content&&
a._content.firstElementChild||this.dispatchEvent(new CustomEvent(b?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(b?a:a.parentElement)}}))}_onKeyUp(a){if(/^( |SpaceBar)$/u.test(a.key)&&!this.interacting){a.preventDefault();var b=a.composedPath()[0];if(b._content&&b._content.firstElementChild){const d=this.hasAttribute("navigating");b._content.firstElementChild.dispatchEvent(new MouseEvent("click",{shiftKey:a.shiftKey,bubbles:!0,composed:!0,cancelable:!0}));this.toggleAttribute("navigating",
d)}}}_onFocusIn(a){this._isMousedown||this.toggleAttribute("navigating",!0);const b=a.composedPath()[0];b===this.$.table||b===this.$.focusexit?(this._predictFocusStepTarget(b,b===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(a)}_onFocusOut(a){this.toggleAttribute("navigating",!1);this._detectInteracting(a);this._hideTooltip();this._focusedCell=null}_onContentFocusIn(a){const {section:b,cell:d,row:e}=this._getGridEventLocation(a);if(d||this.__rowFocusMode){this._detectInteracting(a);
if(b&&(d||e))if(this._activeRowGroup=b,this.$.header===b?this._headerFocusable=this.__getFocusable(e,d):this.$.items===b?this._itemsFocusable=this.__getFocusable(e,d):this.$.footer===b&&(this._footerFocusable=this.__getFocusable(e,d)),d){const f=this.getEventContext(a);(this.__pendingBodyCellFocus=this.loading&&"body"===f.section)||d.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:f}}));this._focusedCell=d._focusButton||d;cb&&a.target===d&&this._showTooltip(a)}else this._focusedCell=
null;this._detectFocusedItemIndex(a)}}__dispatchPendingBodyCellFocus(){this.__pendingBodyCellFocus&&this.shadowRoot.activeElement===this._itemsFocusable&&this._itemsFocusable.dispatchEvent(new Event("focusin",{bubbles:!0,composed:!0}))}__getFocusable(a,b){return this.__rowFocusMode?a:b._focusButton||b}_detectInteracting(a){a=a.composedPath().some(b=>"vaadin-grid-cell-content"===b.localName);this._setInteracting(a);this.__updateHorizontalScrollPosition()}_detectFocusedItemIndex(a){const {section:b,
row:d}=this._getGridEventLocation(a);b===this.$.items&&(this._focusedItemIndex=d.index)}_updateGridSectionFocusTarget(a){if(a){var b=this._getGridSectionFromFocusTarget(a);a.tabIndex=this.interacting&&b===this._activeRowGroup?-1:0}}_preventScrollerRotatingCellFocus(a,b){a.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1));b===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=
!1,this.toggleAttribute("navigating",!0))}_getColumns(a,b){let d=this._columnTree.length-1;a===this.$.header?d=b:a===this.$.footer&&(d=this._columnTree.length-1-b);return this._columnTree[d]}__isValidFocusable(a){return this.$.table.contains(a)&&a.offsetHeight}_resetKeyboardNavigation(){!this.$&&this.performUpdate&&this.performUpdate();["header","footer"].forEach(a=>{if(!this.__isValidFocusable(this[`_${a}Focusable`])){const b=[...this.$[a].children].find(e=>e.offsetHeight),d=b?[...b.children].find(e=>
!e.hidden):null;b&&d&&(this[`_${a}Focusable`]=this.__getFocusable(b,d))}});if(!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const a=this.__getFirstVisibleItem(),b=a?[...a.children].find(d=>!d.hidden):null;b&&a&&(this._focusedColumnOrder=void 0,this._itemsFocusable=this.__getFocusable(a,b))}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(a){if(!(a.hasAttribute("frozen")||a.hasAttribute("frozen-to-end")||this.__isDetailsCell(a))){var b=a.getBoundingClientRect(),
d=a.parentNode,e=Array.from(d.children).indexOf(a),f=this.$.table.getBoundingClientRect();a=f.left;f=f.right;for(var g=e-1;0<=g;g--){const h=d.children[g];if(!h.hasAttribute("hidden")&&!this.__isDetailsCell(h)&&(h.hasAttribute("frozen")||h.hasAttribute("frozen-to-end"))){a=h.getBoundingClientRect().right;break}}for(e+=1;e<d.children.length;e++)if(g=d.children[e],!g.hasAttribute("hidden")&&!this.__isDetailsCell(g)&&(g.hasAttribute("frozen")||g.hasAttribute("frozen-to-end"))){f=g.getBoundingClientRect().left;
break}b.left<a&&(this.$.table.scrollLeft+=Math.round(b.left-a));b.right>f&&(this.$.table.scrollLeft+=Math.round(b.right-f))}}_getGridEventLocation(a){a=a.composedPath();const b=a.indexOf(this.$.table);return{section:1<=b?a[b-1]:null,row:2<=b?a[b-2]:null,cell:3<=b?a[b-3]:null}}_getGridSectionFromFocusTarget(a){return a===this._headerFocusable?this.$.header:a===this._itemsFocusable?this.$.items:a===this._footerFocusable?this.$.footer:null}},Hf=c=>class extends c{static get properties(){return{detailsOpenedItems:{type:Array,
value:()=>[],sync:!0},rowDetailsRenderer:{type:Function,sync:!0},_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready();this._detailsCellResizeObserver=new ResizeObserver(a=>{a.forEach(({target:b})=>{this._updateDetailsCellHeight(b.parentElement)});this.__virtualizer.__adapter._resizeHandler()})}_rowDetailsRendererChanged(a){a&&this._columnTree&&H(this.$.items,
b=>{if(!b.querySelector("[part~\x3ddetails-cell]")){this._updateRow(b,this._columnTree[this._columnTree.length-1]);const d=this._isDetailsOpened(b._item);this._toggleDetailsCell(b,d)}})}_detailsOpenedItemsChanged(a,b){H(this.$.items,d=>{d.hasAttribute("details-opened")?this._updateItem(d,d._item):b&&this._isDetailsOpened(d._item)&&this._updateItem(d,d._item)})}_configureDetailsCell(a){a.setAttribute("part","cell details-cell");a.toggleAttribute("frozen",!0);this._detailsCellResizeObserver.observe(a)}_toggleDetailsCell(a,
b){if(a=a.querySelector('[part~\x3d"details-cell"]'))a.hidden=!b,!a.hidden&&this.rowDetailsRenderer&&(a._renderer=this.rowDetailsRenderer)}_updateDetailsCellHeight(a){const b=a.querySelector('[part~\x3d"details-cell"]');b&&(this.__updateDetailsRowPadding(a,b),requestAnimationFrame(()=>this.__updateDetailsRowPadding(a,b)))}__updateDetailsRowPadding(a,b){b.hidden?a.style.removeProperty("padding-bottom"):a.style.setProperty("padding-bottom",`${b.offsetHeight}px`)}_updateDetailsCellHeights(){H(this.$.items,
a=>{this._updateDetailsCellHeight(a)})}_isDetailsOpened(a){return this.detailsOpenedItems&&-1!==this._getItemIndexInArray(a,this.detailsOpenedItems)}openItemDetails(a){this._isDetailsOpened(a)||(this.detailsOpenedItems=[...this.detailsOpenedItems,a])}closeItemDetails(a){this._isDetailsOpened(a)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter(b=>!this._itemsEqual(b,a)))}},db=document.createElement("div");db.style.position="fixed";db.style.clip="rect(0px, 0px, 0px, 0px)";db.setAttribute("aria-live",
"polite");document.body.appendChild(db);const If=C(c=>class extends c{ready(){super.ready();this.addEventListener("keydown",a=>{this._onKeyDown(a)});this.addEventListener("keyup",a=>{this._onKeyUp(a)})}_onKeyDown(a){switch(a.key){case "Enter":this._onEnter(a);break;case "Escape":this._onEscape(a)}}_onKeyUp(a){}_onEnter(a){}_onEscape(a){}}),Jf=c=>class extends Ib(If(c)){get _activeKeys(){return[" "]}ready(){super.ready();Ca(this,"down",a=>{this._shouldSetActive(a)&&this._setActive(!0)});Ca(this,"up",
()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback();this._setActive(!1)}_shouldSetActive(a){return!this.disabled}_onKeyDown(a){super._onKeyDown(a);this._shouldSetActive(a)&&this._activeKeys.includes(a.key)&&(this._setActive(!0),document.addEventListener("keyup",b=>{this._activeKeys.includes(b.key)&&this._setActive(!1)},{once:!0}))}_setActive(a){this.toggleAttribute("active",a)}},Kf=C(c=>class extends c{get _keyboardActive(){return cb}ready(){this.addEventListener("focusin",
a=>{this._shouldSetFocus(a)&&this._setFocused(!0)});this.addEventListener("focusout",a=>{this._shouldRemoveFocus(a)&&this._setFocused(!1)});super.ready()}disconnectedCallback(){super.disconnectedCallback();this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(a){this.toggleAttribute("focused",a);this.toggleAttribute("focus-ring",a&&this._keyboardActive)}_shouldSetFocus(a){return!0}_shouldRemoveFocus(a){return!0}}),Lf=C(c=>class extends Kf(gd(c)){static get properties(){return{autofocus:{type:Boolean},
focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super();this._boundOnBlur=this._onBlur.bind(this);this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready();this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus();this.setAttribute("focus-ring","")})}focus(){this.focusElement&&!this.disabled&&this.focusElement.focus()}blur(){this.focusElement&&this.focusElement.blur()}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(a,
b){a?(a.disabled=this.disabled,this._addFocusListeners(a),this.__forwardTabIndex(this.tabindex)):b&&this._removeFocusListeners(b)}_addFocusListeners(a){a.addEventListener("blur",this._boundOnBlur);a.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(a){a.removeEventListener("blur",this._boundOnBlur);a.removeEventListener("focus",this._boundOnFocus)}_onFocus(a){a.stopPropagation();this.dispatchEvent(new Event("focus"))}_onBlur(a){a.stopPropagation();this.dispatchEvent(new Event("blur"))}_shouldSetFocus(a){return a.target===
this.focusElement}_shouldRemoveFocus(a){return a.target===this.focusElement}_disabledChanged(a,b){super._disabledChanged(a,b);this.focusElement&&(this.focusElement.disabled=a);a&&this.blur()}_tabindexChanged(a){this.__forwardTabIndex(a)}__forwardTabIndex(a){void 0!==a&&this.focusElement&&(this.focusElement.tabIndex=a,-1!==a&&(this.tabindex=void 0));this.disabled&&a&&(-1!==a&&(this._lastTabIndex=a),this.tabindex=void 0)}}),eb=new ResizeObserver(c=>{setTimeout(()=>{c.forEach(a=>{a.target.resizables?
a.target.resizables.forEach(b=>{b._onResize(a.contentRect)}):a.target._onResize(a.contentRect)})})}),Mf=C(c=>class extends c{get _observeParent(){return!1}connectedCallback(){super.connectedCallback();eb.observe(this);if(this._observeParent){const a=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;a.resizables||(a.resizables=new Set,eb.observe(a));a.resizables.add(this);this.__parent=a}}disconnectedCallback(){super.disconnectedCallback();eb.unobserve(this);const a=this.__parent;
if(this._observeParent&&a){const b=a.resizables;b&&(b.delete(this),0===b.size&&eb.unobserve(a));this.__parent=null}}_onResize(a){}}),Nf=c=>class extends Mf(c){static get properties(){return{columnRendering:{type:String,value:"eager",sync:!0},_frozenCells:{type:Array,value:()=>[]},_frozenToEndCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element}}static get observers(){return["__columnRenderingChanged(_columnTree, columnRendering)"]}get _scrollLeft(){return this.$.table.scrollLeft}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(a){this.$.table.scrollTop=
a}get _lazyColumns(){return"lazy"===this.columnRendering}ready(){super.ready();this.scrollTarget=this.$.table;this.$.items.addEventListener("focusin",a=>{const b=a.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=a.composedPath()[b-1]});this.$.items.addEventListener("focusout",()=>{this._rowWithFocusedElement=void 0});this.$.table.addEventListener("scroll",()=>this._afterScroll())}_onResize(){this._updateOverflow();this.__updateHorizontalScrollPosition();if(this._firefox){const a=
!Qa(this);a&&!1===this.__previousVisible&&(this._scrollTop=this.__memorizedScrollTop||0);this.__previousVisible=a}}_scrollToFlatIndex(a){a=Math.min(this._flatSize-1,Math.max(0,a));this.__virtualizer.scrollToIndex(a);this.__scrollIntoViewport(a)}__scrollIntoViewport(a){var b=[...this.$.items.children].find(d=>d.index===a);if(b){b=b.getBoundingClientRect();const d=this.$.footer.getBoundingClientRect().top,e=this.$.header.getBoundingClientRect().bottom;b.bottom>d?this.$.table.scrollTop+=b.bottom-d:b.top<
e&&(this.$.table.scrollTop-=e-b.top)}}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this.$.scroller.toggleAttribute("scrolling",!0)));this._debounceScrolling=u.debounce(this._debounceScrolling,U.after(500),()=>{cancelAnimationFrame(this._scrollingFrame);delete this._scrollingFrame;this.$.scroller.toggleAttribute("scrolling",!1)})}_afterScroll(){this.__updateHorizontalScrollPosition();this.hasAttribute("reordering")||this._scheduleScrolling();this.hasAttribute("navigating")||
this._hideTooltip(!0);this._updateOverflow();this._debounceColumnContentVisibility=u.debounce(this._debounceColumnContentVisibility,U.after(100),()=>{this._lazyColumns&&this.__cachedScrollLeft!==this._scrollLeft&&(this.__cachedScrollLeft=this._scrollLeft,this.__updateColumnsBodyContentHidden())});this._firefox&&!Qa(this)&&!1!==this.__previousVisible&&(this.__memorizedScrollTop=this._scrollTop)}__updateColumnsBodyContentHidden(){if(this._columnTree){var a=this._getColumnsInOrder();if(a[0]&&a[0]._sizerCell){var b=
!1;a.forEach(e=>{const f=this._lazyColumns&&!this.__isColumnInViewport(e);e._bodyContentHidden!==f&&(b=!0,e._cells.forEach(g=>{if(g!==e._sizerCell)if(f)g.remove();else if(g.__parentRow){const h=[...g.__parentRow.children].find(k=>a.indexOf(k._column)>a.indexOf(e));g.__parentRow.insertBefore(g,h)}}));e._bodyContentHidden=f});b&&this._frozenCellsChanged();if(this._lazyColumns){var d=[...a].reverse().find(f=>f.frozen);d=this.__getColumnEnd(d);const e=a.find(f=>!f.frozen&&!f._bodyContentHidden);this.__lazyColumnsStart=
this.__getColumnStart(e)-d;this.$.items.style.setProperty("--_grid-lazy-columns-start",`${this.__lazyColumnsStart}px`);this._resetKeyboardNavigation()}}}}__getColumnEnd(a){return a?a._sizerCell.offsetLeft+(this.__isRTL?0:a._sizerCell.offsetWidth):this.__isRTL?this.$.table.clientWidth:0}__getColumnStart(a){return a?a._sizerCell.offsetLeft+(this.__isRTL?a._sizerCell.offsetWidth:0):this.__isRTL?this.$.table.clientWidth:0}__isColumnInViewport(a){return a.frozen||a.frozenToEnd?!0:this.__isHorizontallyInViewport(a._sizerCell)}__isHorizontallyInViewport(a){return a.offsetLeft+
a.offsetWidth>=this._scrollLeft&&a.offsetLeft<=this._scrollLeft+this.clientWidth}__columnRenderingChanged(a,b){"eager"===b?this.$.scroller.removeAttribute("column-rendering"):this.$.scroller.setAttribute("column-rendering",b);this.__updateColumnsBodyContentHidden()}_updateOverflow(){this._debounceOverflow=u.debounce(this._debounceOverflow,V,()=>{this.__doUpdateOverflow()})}__doUpdateOverflow(){var a="";const b=this.$.table;b.scrollTop<b.scrollHeight-b.clientHeight&&(a+=" bottom");0<b.scrollTop&&(a+=
" top");const d=xc(b,this.getAttribute("dir"));0<d&&(a+=" start");d<b.scrollWidth-b.clientWidth&&(a+=" end");this.__isRTL&&(a=a.replace(/start|end/giu,e=>"start"===e?"end":"start"));b.scrollLeft<b.scrollWidth-b.clientWidth&&(a+=" right");0<b.scrollLeft&&(a+=" left");a=a.trim();0<a.length&&this.getAttribute("overflow")!==a?this.setAttribute("overflow",a):0===a.length&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}_frozenCellsChanged(){this._debouncerCacheElements=u.debounce(this._debouncerCacheElements,
M,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~\x3d"cell"]')).forEach(a=>{a.style.transform=""});this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]"));this._frozenToEndCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]"));this.__updateHorizontalScrollPosition()});this._debounceUpdateFrozenColumn()}_debounceUpdateFrozenColumn(){this.__debounceUpdateFrozenColumn=u.debounce(this.__debounceUpdateFrozenColumn,M,()=>this._updateFrozenColumn())}_updateFrozenColumn(){if(this._columnTree){var a=
this._columnTree[this._columnTree.length-1].slice(0);a.sort((e,f)=>e._order-f._order);var b,d;for(let e=0;e<a.length;e++){const f=a[e];f._lastFrozen=!1;f._firstFrozenToEnd=!1;void 0===d&&f.frozenToEnd&&!f.hidden&&(d=e);f.frozen&&!f.hidden&&(b=e)}void 0!==b&&(a[b]._lastFrozen=!0);void 0!==d&&(a[d]._firstFrozenToEnd=!0);this.__updateColumnsBodyContentHidden()}}__updateHorizontalScrollPosition(){if(this._columnTree){var a=this.$.table.scrollWidth,b=this.$.table.clientWidth,d=Math.max(0,this.$.table.scrollLeft),
e=xc(this.$.table,this.getAttribute("dir")),f=`translate(${-d}px, 0)`;this.$.header.style.transform=f;this.$.footer.style.transform=f;this.$.items.style.transform=f;f=this.__isRTL?e+b-a:d;var g=`translate(${f}px, 0)`;this._frozenCells.forEach(l=>{l.style.transform=g});a=this.__isRTL?e:d+b-a;var h=`translate(${a}px, 0)`,k=h;this._lazyColumns&&(d=this._getColumnsInOrder(),b=[...d].reverse().find(l=>!l.frozenToEnd&&!l._bodyContentHidden),b=this.__getColumnEnd(b),d=d.find(l=>l.frozenToEnd),d=this.__getColumnStart(d),
k=`translate(${a+(d-b)+this.__lazyColumnsStart}px, 0)`);this._frozenToEndCells.forEach(l=>{this.$.items.contains(l)?l.style.transform=k:l.style.transform=h});this.hasAttribute("navigating")&&this.__rowFocusMode&&this.$.table.style.setProperty("--_grid-horizontal-scroll-position",`${-f}px`)}}},Of=c=>class extends c{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[],sync:!0},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems)"]}_isSelected(a){return this.__selectedKeys.has(this.getItemId(a))}selectItem(a){this._isSelected(a)||
(this.selectedItems=[...this.selectedItems,a])}deselectItem(a){this._isSelected(a)&&(this.selectedItems=this.selectedItems.filter(b=>!this._itemsEqual(b,a)))}_toggleItem(a){this._isSelected(a)?this.deselectItem(a):this.selectItem(a)}__selectedItemsChanged(){this.requestContentUpdate()}__computeSelectedKeys(a,b){a=b||[];const d=new Set;a.forEach(e=>{d.add(this.getItemId(e))});return d}};let rd="prepend";const Pf=c=>class extends c{static get properties(){return{multiSort:{type:Boolean,value:!1},multiSortPriority:{type:String,
value:()=>rd},multiSortOnShiftClick:{type:Boolean,value:!1},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}static setDefaultMultiSortPriority(a){rd=["append","prepend"].includes(a)?a:"prepend"}ready(){super.ready();this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(a){const b=a.target;a.stopPropagation();b._grid=this;this.__updateSorter(b,a.detail.shiftClick,a.detail.fromSorterClick);this.__applySorters()}__removeSorters(a){0!==a.length&&
(this._sorters=this._sorters.filter(b=>0>a.indexOf(b)),this.multiSort&&this.__updateSortOrders(),this.__applySorters())}__updateSortOrders(){this._sorters.forEach((a,b)=>{a._order=1<this._sorters.length?b:null})}__appendSorter(a){a.direction?this._sorters.includes(a)||this._sorters.push(a):this._removeArrayItem(this._sorters,a);this.__updateSortOrders()}__prependSorter(a){this._removeArrayItem(this._sorters,a);a.direction&&this._sorters.unshift(a);this.__updateSortOrders()}__updateSorter(a,b,d){if(a.direction||
-1!==this._sorters.indexOf(a))if(a._order=null,this.multiSort&&(!this.multiSortOnShiftClick||!d)||this.multiSortOnShiftClick&&b)"append"===this.multiSortPriority?this.__appendSorter(a):this.__prependSorter(a);else if(a.direction||this.multiSortOnShiftClick)b=this._sorters.filter(e=>e!==a),this._sorters=a.direction?[a]:[],b.forEach(e=>{e._order=null;e.direction=null})}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.__debounceClearCache();
this._a11yUpdateSorters();this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(a=>({path:a.path,direction:a.direction}))}_removeArrayItem(a,b){b=a.indexOf(b);-1<b&&a.splice(b,1)}},Qf=c=>class extends c{static get properties(){return{cellClassNameGenerator:{type:Function,sync:!0},cellPartNameGenerator:{type:Function,sync:!0}}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)","__cellPartNameGeneratorChanged(cellPartNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}__cellPartNameGeneratorChanged(){this.generateCellPartNames()}generateCellClassNames(){H(this.$.items,
a=>{a.hidden||a.hasAttribute("loading")||this._generateCellClassNames(a,this.__getRowModel(a))})}generateCellPartNames(){H(this.$.items,a=>{a.hidden||a.hasAttribute("loading")||this._generateCellPartNames(a,this.__getRowModel(a))})}_generateCellClassNames(a,b){na(a,d=>{d.__generatedClasses&&d.__generatedClasses.forEach(e=>d.classList.remove(e));if(this.cellClassNameGenerator){const e=this.cellClassNameGenerator(d._column,b);d.__generatedClasses=e&&e.split(" ").filter(f=>0<f.length);d.__generatedClasses&&
d.__generatedClasses.forEach(f=>d.classList.add(f))}})}_generateCellPartNames(a,b){na(a,d=>{d.__generatedParts&&d.__generatedParts.forEach(e=>{P(d,null,e)});if(this.cellPartNameGenerator){const e=this.cellPartNameGenerator(d._column,b);d.__generatedParts=e&&e.split(" ").filter(f=>0<f.length);d.__generatedParts&&d.__generatedParts.forEach(f=>{P(d,!0,f)})}})}},Rf=c=>class extends wf(Af(Df(uf(Nf(Of(Pf(Hf(Gf(sf(Ff(xf(yf(Ef(Cf(Qf(gd(c))))))))))))))))){static get observers(){return["_columnTreeChanged(_columnTree)",
"_flatSizeChanged(_flatSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:jd},_ios:{type:Boolean,value:id},_firefox:{type:Boolean,value:mf},_android:{type:Boolean,value:hd},_touchDevice:{type:Boolean,value:ld},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},__pendingRecalculateColumnWidths:{type:Boolean,value:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0}}}constructor(){super();this.addEventListener("animationend",
this._onAnimationEnd)}get _firstVisibleIndex(){const a=this.__getFirstVisibleItem();return a?a.index:void 0}get _lastVisibleIndex(){const a=this.__getLastVisibleItem();return a?a.index:void 0}connectedCallback(){super.connectedCallback();this.isAttached=!0;this.recalculateColumnWidths()}disconnectedCallback(){super.disconnectedCallback();this.isAttached=!1;this._hideTooltip(!0)}__getFirstVisibleItem(){return this._getRenderedRows().find(a=>this._isInViewport(a))}__getLastVisibleItem(){return this._getRenderedRows().reverse().find(a=>
this._isInViewport(a))}_isInViewport(a){const b=this.$.table.getBoundingClientRect();a=a.getBoundingClientRect();const d=this.$.header.getBoundingClientRect().height,e=this.$.footer.getBoundingClientRect().height;return a.bottom>b.top+d&&a.top<b.bottom-e}_getRenderedRows(){return Array.from(this.$.items.children).filter(a=>!a.hidden).sort((a,b)=>a.index-b.index)}_getRowContainingNode(a){if(a=gc("vaadin-grid-cell-content",a))return a.assignedSlot.parentElement.parentElement}_isItemAssignedToRow(a,
b){b=this.__getRowModel(b);return this.getItemId(a)===this.getItemId(b.item)}ready(){super.ready();this.__virtualizer=new rf({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0});(new ResizeObserver(()=>setTimeout(()=>{this.__updateColumnsBodyContentHidden();this.__tryToRecalculateColumnWidthsIfPending()}))).observe(this.$.table);fc(this);this._tooltipController=new md(this);
this.addController(this._tooltipController);this._tooltipController.setManual(!0)}__getBodyCellCoordinates(a){if(this.$.items.contains(a)&&"td"===a.localName)return{item:a.parentElement._item,column:a._column}}__focusBodyCell({item:a,column:b}){var d=this._getRenderedRows().find(e=>e._item===a);(d=d&&[...d.children].find(e=>e._column===b))&&d.focus()}_focusFirstVisibleRow(){const a=this.__getFirstVisibleItem();this.__rowFocusMode=!0;a.focus()}_flatSizeChanged(a,b,d,e){if(b&&d&&e){d=this.shadowRoot.activeElement;
e=this.__getBodyCellCoordinates(d);const f=b.size||0;b.size=a;b.update(f-1,f-1);a<f&&b.update(a-1,a-1);e&&d.parentElement.hidden&&this.__focusBodyCell(e);this._resetKeyboardNavigation()}}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter(a=>a.clientHeight).length}__getIntrinsicWidth(a){this.__intrinsicWidthCache.has(a)||this.__calculateAndCacheIntrinsicWidths([a]);return this.__intrinsicWidthCache.get(a)}__getDistributedWidth(a,b){if(null==a||a===this)return 0;var d=Math.max(this.__getIntrinsicWidth(a),
this.__getDistributedWidth((a.assignedSlot||a).parentElement,a));if(!b)return d;a=a._visibleChildColumns.map(e=>this.__getIntrinsicWidth(e)).reduce((e,f)=>e+f,0);d=Math.max(0,d-a);d*=this.__getIntrinsicWidth(b)/a;return this.__getIntrinsicWidth(b)+d}_recalculateColumnWidths(a){this.__virtualizer.flush();[...this.$.header.children,...this.$.footer.children].forEach(e=>{e.__debounceUpdateHeaderFooterRowVisibility&&e.__debounceUpdateHeaderFooterRowVisibility.flush()});this._debouncerHiddenChanged&&this._debouncerHiddenChanged.flush();
this.__intrinsicWidthCache=new Map;const b=this._firstVisibleIndex,d=this._lastVisibleIndex;this.__viewportRowsCache=this._getRenderedRows().filter(e=>e.index>=b&&e.index<=d);this.__calculateAndCacheIntrinsicWidths(a);a.forEach(e=>{e.width=`${this.__getDistributedWidth(e)}px`})}__setVisibleCellContentAutoWidth(a,b){a._allCells.filter(d=>this.$.items.contains(d)?this.__viewportRowsCache.includes(d.parentElement):!0).forEach(d=>{d.__measuringAutoWidth=b;d.__measuringAutoWidth?(d.__originalWidth=d.style.width,
d.style.width="auto",d.style.position="absolute"):(d.style.width=d.__originalWidth,delete d.__originalWidth,d.style.position="")})}__getAutoWidthCellsMaxWidth(a){return a._allCells.reduce((b,d)=>d.__measuringAutoWidth?Math.max(b,d.offsetWidth+1):b,0)}__calculateAndCacheIntrinsicWidths(a){a.forEach(b=>this.__setVisibleCellContentAutoWidth(b,!0));a.forEach(b=>{const d=this.__getAutoWidthCellsMaxWidth(b);this.__intrinsicWidthCache.set(b,d)});a.forEach(b=>this.__setVisibleCellContentAutoWidth(b,!1))}recalculateColumnWidths(){if(this._columnTree)if(Qa(this)||
this._dataProviderController.isLoading())this.__pendingRecalculateColumnWidths=!0;else{var a=this._getColumns().filter(b=>!b.hidden&&b.autoWidth);this._recalculateColumnWidths(a)}}__tryToRecalculateColumnWidthsIfPending(){this.__pendingRecalculateColumnWidths&&!Qa(this)&&!this._dataProviderController.isLoading()&&this.__hasRowsWithClientHeight()&&(this.__pendingRecalculateColumnWidths=!1,this.recalculateColumnWidths())}_onDataProviderPageLoaded(){super._onDataProviderPageLoaded();this.__tryToRecalculateColumnWidthsIfPending()}_createScrollerRows(a){const b=
[];for(let d=0;d<a;d++){const e=document.createElement("tr");e.setAttribute("part","row body-row");e.setAttribute("role","row");e.setAttribute("tabindex","-1");this._columnTree&&this._updateRow(e,this._columnTree[this._columnTree.length-1],"body",!1,!0);b.push(e)}this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(d=>{d.isConnected&&d._cells&&(d._cells=[...d._cells])});this.__afterCreateScrollerRowsDebouncer=u.debounce(this.__afterCreateScrollerRowsDebouncer,V,()=>{this._afterScroll();
this.__tryToRecalculateColumnWidthsIfPending()});return b}_createCell(a,b){const d=`vaadin-grid-cell-content-${this._contentIndex=this._contentIndex+1||0}`,e=document.createElement("vaadin-grid-cell-content");e.setAttribute("slot",d);const f=document.createElement(a);f.id=d.replace("-content-","-");f.setAttribute("role","td"===a?"gridcell":"columnheader");hd||id||(f.addEventListener("mouseenter",g=>{this.$.scroller.hasAttribute("scrolling")||this._showTooltip(g)}),f.addEventListener("mouseleave",
()=>{this._hideTooltip()}),f.addEventListener("mousedown",()=>{this._hideTooltip(!0)}));a=document.createElement("slot");a.setAttribute("name",d);b&&b._focusButtonMode?(b=document.createElement("div"),b.setAttribute("role","button"),b.setAttribute("tabindex","-1"),f.appendChild(b),f._focusButton=b,f.focus=function(){f._focusButton.focus()},b.appendChild(a)):(f.setAttribute("tabindex","-1"),f.appendChild(a));f._content=e;e.addEventListener("mousedown",()=>{if(lf){const g=h=>{const k=e.contains(this.getRootNode().activeElement);
h=h.composedPath().includes(e);!k&&h&&f.focus();document.removeEventListener("mouseup",g,!0)};document.addEventListener("mouseup",g,!0)}else setTimeout(()=>{e.contains(this.getRootNode().activeElement)||f.focus()})});return f}_updateRow(a,b,d="body",e=!1,f=!1){const g=document.createDocumentFragment();na(a,h=>{h._vacant=!0});a.innerHTML="";"body"===d&&(a.__cells=[],a.__detailsCell=null);b.filter(h=>!h.hidden).forEach((h,k,l)=>{if("body"===d){h._cells||(h._cells=[]);var m=h._cells.find(n=>n._vacant);
m||(m=this._createCell("td",h),h._cells.push(m));m.setAttribute("part","cell body-cell");m.__parentRow=a;a.__cells.push(m);h._bodyContentHidden||a.appendChild(m);a===this.$.sizer&&(h._sizerCell=m);k===l.length-1&&this.rowDetailsRenderer&&(this._detailsCells||(this._detailsCells=[]),k=this._detailsCells.find(n=>n._vacant)||this._createCell("td"),-1===this._detailsCells.indexOf(k)&&this._detailsCells.push(k),k._content.parentElement||g.appendChild(k._content),this._configureDetailsCell(k),a.appendChild(k),
a.__detailsCell=k,this._a11ySetRowDetailsCell(a,k),k._vacant=!1);f||(h._cells=[...h._cells])}else m="header"===d?"th":"td",e||"vaadin-grid-column-group"===h.localName?(m=h[`_${d}Cell`]||this._createCell(m),m._column=h,a.appendChild(m),h[`_${d}Cell`]=m):(h._emptyCells||(h._emptyCells=[]),m=h._emptyCells.find(n=>n._vacant)||this._createCell(m),m._column=h,a.appendChild(m),-1===h._emptyCells.indexOf(m)&&h._emptyCells.push(m)),m.part.add("cell",`${d}-cell`);m._content.parentElement||g.appendChild(m._content);
m._vacant=!1;m._column=h});"body"!==d&&this.__debounceUpdateHeaderFooterRowVisibility(a);this.appendChild(g);this._frozenCellsChanged();this._updateFirstAndLastColumnForRow(a)}__debounceUpdateHeaderFooterRowVisibility(a){a.__debounceUpdateHeaderFooterRowVisibility=u.debounce(a.__debounceUpdateHeaderFooterRowVisibility,M,()=>this.__updateHeaderFooterRowVisibility(a))}__updateHeaderFooterRowVisibility(a){if(a){var b=Array.from(a.children).filter(d=>{const e=d._column;if(e._emptyCells&&-1<e._emptyCells.indexOf(d))return!1;
if(a.parentElement===this.$.header){if(e.headerRenderer)return!0;if(null===e.header)return!1;if(e.path||void 0!==e.header)return!0}else if(e.footerRenderer)return!0;return!1});a.hidden!==!b.length&&(a.hidden=!b.length);this._resetKeyboardNavigation()}}_updateScrollerItem(a,b){this._preventScrollerRotatingCellFocus(a,b);this._columnTree&&(this._updateRowOrderParts(a,b),this._a11yUpdateRowRowindex(a,b),this._getItem(b,a))}_columnTreeChanged(a){this._renderColumnTree(a);this.recalculateColumnWidths();
this.__updateColumnsBodyContentHidden()}_updateRowOrderParts(a,b=a.index){Ba(a,{first:0===b,last:b===this._flatSize-1,odd:0!==b%2,even:0===b%2})}_updateRowStateParts(a,{expanded:b,selected:d,detailsOpened:e}){Ba(a,{expanded:b,collapsed:this.__isRowExpandable(a),selected:d,"details-opened":e})}_renderColumnTree(a){for(H(this.$.items,d=>{this._updateRow(d,a[a.length-1],"body",!1,!0);const e=this.__getRowModel(d);this._updateRowOrderParts(d);this._updateRowStateParts(d,e);this._filterDragAndDrop(d,e)});this.$.header.children.length<
a.length;){var b=document.createElement("tr");b.setAttribute("part","row");b.setAttribute("role","row");b.setAttribute("tabindex","-1");this.$.header.appendChild(b);b=document.createElement("tr");b.setAttribute("part","row");b.setAttribute("role","row");b.setAttribute("tabindex","-1");this.$.footer.appendChild(b)}for(;this.$.header.children.length>a.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);H(this.$.header,(d,e,f)=>
{this._updateRow(d,a[e],"header",e===a.length-1);d=ma(d);Q(d,"first-header-row-cell",0===e);Q(d,"last-header-row-cell",e===f.length-1)});H(this.$.footer,(d,e,f)=>{this._updateRow(d,a[a.length-1-e],"footer",0===e);d=ma(d);Q(d,"first-footer-row-cell",0===e);Q(d,"last-footer-row-cell",e===f.length-1)});this._updateRow(this.$.sizer,a[a.length-1]);this._resizeHandler();this._frozenCellsChanged();this._updateFirstAndLastColumn();this._resetKeyboardNavigation();this._a11yUpdateHeaderRows();this._a11yUpdateFooterRows();
this.generateCellClassNames();this.generateCellPartNames();this.__updateHeaderAndFooter()}_updateItem(a,b){a._item=b;const d=this.__getRowModel(a);this._toggleDetailsCell(a,d.detailsOpened);this._a11yUpdateRowLevel(a,d.level);this._a11yUpdateRowSelected(a,d.selected);this._updateRowStateParts(a,d);this._generateCellClassNames(a,d);this._generateCellPartNames(a,d);this._filterDragAndDrop(a,d);H(a,e=>{if(e._renderer){const f=e._column||this;e._renderer.call(f,e._content,f,d)}});this._updateDetailsCellHeight(a);
this._a11yUpdateRowExpanded(a,d.expanded)}_resizeHandler(){this._updateDetailsCellHeights();this.__updateHorizontalScrollPosition()}_onAnimationEnd(a){0===a.animationName.indexOf("vaadin-grid-appear")&&(a.stopPropagation(),this.__tryToRecalculateColumnWidthsIfPending(),requestAnimationFrame(()=>{this.__scrollToPendingIndexes()}))}__getRowModel(a){return{index:a.index,item:a._item,level:this._getIndexLevel(a.index),expanded:this._isExpanded(a._item),selected:this._isSelected(a._item),detailsOpened:!!this.rowDetailsRenderer&&
this._isDetailsOpened(a._item)}}_showTooltip(a){const b=this._tooltipController.node;b&&b.isConnected&&(this._tooltipController.setTarget(a.target),this._tooltipController.setContext(this.getEventContext(a)),b._stateController.open({focus:"focusin"===a.type,hover:"mouseenter"===a.type}))}_hideTooltip(a){const b=this._tooltipController&&this._tooltipController.node;b&&b._stateController.close(a)}requestContentUpdate(){this.__updateHeaderAndFooter();this.__updateVisibleRows()}__updateHeaderAndFooter(){(this._columnTree||
[]).forEach(a=>{a.forEach(b=>{b._renderHeaderAndFooter&&b._renderHeaderAndFooter()})})}__updateVisibleRows(a,b){this.__virtualizer&&this.__virtualizer.update(a,b)}},Sf=E`
  @keyframes vaadin-grid-appear {
    to {
      opacity: 1;
    }
  }

  :host {
    display: flex;
    flex-direction: column;
    animation: 1ms vaadin-grid-appear;
    height: 400px;
    flex: 1 1 auto;
    align-self: stretch;
    position: relative;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  #scroller {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    transform: translateY(0);
    width: auto;
    height: auto;
    position: absolute;
    inset: 0;
  }

  :host([all-rows-visible]) {
    height: auto;
    align-self: flex-start;
    flex-grow: 0;
    width: 100%;
  }

  :host([all-rows-visible]) #scroller {
    width: 100%;
    height: 100%;
    position: relative;
  }

  :host([all-rows-visible]) #items {
    min-height: 1px;
  }

  #table {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
    outline: none;
    /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
    z-index: 0;
  }

  #header,
  #footer {
    display: block;
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    overflow: visible;
    width: 100%;
    z-index: 1;
  }

  #header {
    top: 0;
  }

  th {
    text-align: inherit;
  }

  /* Safari doesn't work with "inherit" */
  [safari] th {
    text-align: initial;
  }

  #footer {
    bottom: 0;
  }

  #items {
    flex-grow: 1;
    flex-shrink: 0;
    display: block;
    position: -webkit-sticky;
    position: sticky;
    width: 100%;
    left: 0;
    overflow: visible;
  }

  [part~='row'] {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
  }

  [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
    visibility: hidden;
  }

  [column-rendering='lazy'] [part~='body-cell']:not([frozen]):not([frozen-to-end]) {
    transform: translateX(var(--_grid-lazy-columns-start));
  }

  #items [part~='row'] {
    position: absolute;
  }

  #items [part~='row']:empty {
    height: 100%;
  }

  [part~='cell']:not([part~='details-cell']) {
    flex-shrink: 0;
    flex-grow: 1;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    padding: 0;
    white-space: nowrap;
  }

  [part~='cell'] > [tabindex] {
    display: flex;
    align-items: inherit;
    outline: none;
    position: absolute;
    inset: 0;
  }

  [part~='details-cell'] {
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
  }

  [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: block;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [hidden] {
    display: none !important;
  }

  [frozen],
  [frozen-to-end] {
    z-index: 2;
    will-change: transform;
  }

  [no-scrollbars][safari] #table,
  [no-scrollbars][firefox] #table {
    overflow: hidden;
  }

  /* Reordering styles */
  :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
  :host([reordering]) [part~='resize-handle'],
  #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    pointer-events: none;
  }

  [part~='reorder-ghost'] {
    visibility: hidden;
    position: fixed;
    pointer-events: none;
    opacity: 0.5;

    /* Prevent overflowing the grid in Firefox */
    top: 0;
    left: 0;
  }

  :host([reordering]) {
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  /* Resizing styles */
  [part~='resize-handle'] {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    cursor: col-resize;
    z-index: 1;
  }

  [part~='resize-handle']::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 35px;
    transform: translateX(-50%);
  }

  [last-column] [part~='resize-handle']::before,
  [last-frozen] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
    right: 0;
  }

  [frozen-to-end] [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  [frozen-to-end] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  [first-frozen-to-end] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
  }

  [first-frozen-to-end] {
    margin-inline-start: auto;
  }

  /* Hide resize handle if scrolled to end */
  :host(:not([overflow~='end'])) [first-frozen-to-end] [part~='resize-handle'] {
    display: none;
  }

  #scroller[column-resizing] {
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  /* Sizer styles */
  #sizer {
    display: flex;
    position: absolute;
    visibility: hidden;
  }

  #sizer [part~='details-cell'] {
    display: none !important;
  }

  #sizer [part~='cell'][hidden] {
    display: none !important;
  }

  #sizer [part~='cell'] {
    display: block;
    flex-shrink: 0;
    line-height: 0;
    height: 0 !important;
    min-height: 0 !important;
    max-height: 0 !important;
    padding: 0 !important;
    border: none !important;
  }

  #sizer [part~='cell']::before {
    content: '-';
  }

  #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: none !important;
  }

  /* RTL specific styles */

  :host([dir='rtl']) #items,
  :host([dir='rtl']) #header,
  :host([dir='rtl']) #footer {
    left: auto;
  }

  :host([dir='rtl']) [part~='reorder-ghost'] {
    left: auto;
    right: 0;
  }

  :host([dir='rtl']) [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [part~='resize-handle']::before {
    transform: translateX(50%);
  }

  :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
  :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle'] {
    right: 0;
    left: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle']::before {
    right: 0;
    left: auto;
  }

  @media (forced-colors: active) {
    [part~='selected-row'] [part~='first-column-cell']::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      border: 2px solid;
    }

    [part~='focused-cell']::before {
      outline: 2px solid !important;
      outline-offset: -1px;
    }
  }
`;O("vaadin-grid",Sf,{moduleId:"vaadin-grid-styles"});let Tf=class extends Rf(fd(Cb(bd(Ia)))){static get template(){return Fb`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <slot name="tooltip"></slot>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}};X(Tf);const Uf=c=>class extends $c(c){static get properties(){return{_childColumns:{value(){return this._getChildColumns(this)}},flexGrow:{type:Number,readOnly:!0,sync:!0},width:{type:String,readOnly:!0},_visibleChildColumns:Array,_colSpan:Number,_rootColumns:Array}}static get observers(){return"_groupFrozenChanged(frozen, _rootColumns);_groupFrozenToEndChanged(frozenToEnd, _rootColumns);_groupHiddenChanged(hidden);_colSpanChanged(_colSpan, _headerCell, _footerCell);_groupOrderChanged(_order, _rootColumns);_groupReorderStatusChanged(_reorderStatus, _rootColumns);_groupResizableChanged(resizable, _rootColumns)".split(";")}connectedCallback(){super.connectedCallback();
this._addNodeObserver();this._updateFlexAndWidth()}disconnectedCallback(){super.disconnectedCallback();this._observer&&this._observer.disconnect()}_columnPropChanged(a,b){"hidden"===a&&(this._preventHiddenSynchronization=!0,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1);/flexGrow|width|hidden|_childColumns/u.test(a)&&this._updateFlexAndWidth();"frozen"!==a||this.frozen||(this.frozen=b);"lastFrozen"!==a||this._lastFrozen||(this._lastFrozen=b);"frozenToEnd"!==
a||this.frozenToEnd||(this.frozenToEnd=b);"firstFrozenToEnd"!==a||this._firstFrozenToEnd||(this._firstFrozenToEnd=b)}_groupOrderChanged(a,b){if(b){const d=b.slice(0);a?(b=10**(/(0+)$/u.exec(a).pop().length-(~~(Math.log(b.length)/Math.LN10)+1)),d[0]&&d[0]._order&&d.sort((e,f)=>e._order-f._order),kc(d,b,a)):d.forEach(e=>{e._order=0})}}_groupReorderStatusChanged(a,b){void 0!==a&&void 0!==b&&b.forEach(d=>{d._reorderStatus=a})}_groupResizableChanged(a,b){void 0!==a&&void 0!==b&&b.forEach(d=>{d.resizable=
a})}_updateVisibleChildColumns(a){this._visibleChildColumns=Array.prototype.filter.call(a,b=>!b.hidden);this._colSpan=this._visibleChildColumns.length;this._updateAutoHidden()}_updateFlexAndWidth(){if(this._visibleChildColumns){if(0<this._visibleChildColumns.length){const a=this._visibleChildColumns.reduce((b,d)=>b+=` + ${(d.width||"0px").replace("calc","")}`,"").substring(3);this._setWidth(`calc(${a})`)}else this._setWidth("0px");this._setFlexGrow(Array.prototype.reduce.call(this._visibleChildColumns,
(a,b)=>a+b.flexGrow,0))}}__scheduleAutoFreezeWarning(a,b){if(this._grid){const d=b.replace(/([A-Z])/gu,"-$1").toLowerCase(),e=a[0][b]||a[0].hasAttribute(d);a.every(f=>(f[b]||f.hasAttribute(d))===e)||(this._grid.__autoFreezeWarningDebouncer=u.debounce(this._grid.__autoFreezeWarningDebouncer,V,()=>{console.warn(`WARNING: Joining ${b} and non-${b} Grid columns inside the same column group! `+"This will automatically freeze all the joined columns to avoid rendering issues. "+`If this was intentional, consider marking each joined column explicitly as ${b}. `+
`Otherwise, exclude the ${b} columns from the joined group.`)}))}}_groupFrozenChanged(a,b){void 0!==b&&void 0!==a&&!1!==a&&(this.__scheduleAutoFreezeWarning(b,"frozen"),Array.from(b).forEach(d=>{d.frozen=a}))}_groupFrozenToEndChanged(a,b){void 0!==b&&void 0!==a&&!1!==a&&(this.__scheduleAutoFreezeWarning(b,"frozenToEnd"),Array.from(b).forEach(d=>{d.frozenToEnd=a}))}_groupHiddenChanged(a){(a||this.__groupHiddenInitialized)&&this._synchronizeHidden();this.__groupHiddenInitialized=!0}_updateAutoHidden(){const a=
this._autoHidden;this._autoHidden=0===(this._visibleChildColumns||[]).length;if(a||this._autoHidden)this.hidden=this._autoHidden}_synchronizeHidden(){this._childColumns&&!this._preventHiddenSynchronization&&this._childColumns.forEach(a=>{a.hidden=this.hidden})}_colSpanChanged(a,b,d){b&&(b.setAttribute("colspan",a),this._grid&&this._grid._a11yUpdateCellColspan(b,a));d&&(d.setAttribute("colspan",a),this._grid&&this._grid._a11yUpdateCellColspan(d,a))}_getChildColumns(a){return fa.getColumns(a)}_addNodeObserver(){this._observer=
new fa(this,()=>{this._preventHiddenSynchronization=!0;this._childColumns=this._rootColumns=this._getChildColumns(this);this._updateVisibleChildColumns(this._childColumns);this._preventHiddenSynchronization=!1;this._grid&&this._grid._debounceUpdateColumnTree&&this._grid._debounceUpdateColumnTree()});this._observer.flush()}_isColumnElement(a){return a.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(a.localName)}};class Vf extends Uf(Ia){static get is(){return"vaadin-grid-column-group"}}X(Vf);const Wf=
C(c=>class extends c{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready();this._createDelegateAttrsObserver();this._createDelegatePropsObserver()}_stateTargetChanged(a){a&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(a=>
{this._delegateAttribute(a,this[a])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(a=>{this._delegateProperty(a,this[a])})}_delegateAttrsChanged(...a){this.constructor.delegateAttrs.forEach((b,d)=>{this._delegateAttribute(b,a[d])})}_delegatePropsChanged(...a){this.constructor.delegateProps.forEach((b,d)=>{this._delegateProperty(b,a[d])})}_delegateAttribute(a,b){this.stateTarget&&("invalid"===a&&this._delegateAttribute("aria-invalid",b?"true":!1),"boolean"===typeof b?this.stateTarget.toggleAttribute(a,
b):b?this.stateTarget.setAttribute(a,b):this.stateTarget.removeAttribute(a))}_delegateProperty(a,b){this.stateTarget&&(this.stateTarget[a]=b)}}),Xf=C(c=>class extends c{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0,sync:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super();this._boundOnInput=this.__onInput.bind(this);
this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return null!=this.value&&""!==this.value}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(a){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=a)}clear(){this._hasInputValue=!1;this._inputElementValue=this.value=""}_addInputListeners(a){a.addEventListener("input",this._boundOnInput);a.addEventListener("change",
this._boundOnChange)}_removeInputListeners(a){a.removeEventListener("input",this._boundOnInput);a.removeEventListener("change",this._boundOnChange)}_forwardInputValue(a){this.inputElement&&(this._inputElementValue=null!=a?a:"")}_inputElementChanged(a,b){a?this._addInputListeners(a):b&&this._removeInputListeners(b)}_hasInputValueChanged(a,b){(a||b)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(a){this._setHasInputValue(a);this._onInput(a)}_onInput(a){const b=a.composedPath()[0];
this.__userInput=a.isTrusted;this.value=b.value;this.__userInput=!1}_onChange(a){}_toggleHasValue(a){this.toggleAttribute("has-value",a)}_valueChanged(a,b){this._toggleHasValue(this._hasValue);if(""!==a||void 0!==b)this.__userInput||this._forwardInputValue(a)}_setHasInputValue(a){this._hasInputValue=0<a.composedPath()[0].value.length}}),Yf=C(c=>class extends Wf(Ib(Xf(c))){static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,
"checked"]}_onChange(a){this._toggleChecked(a.target.checked)}_toggleChecked(a){this.checked=a}});class Zf extends Jb{constructor(c,a){super(c,"input","input",{initializer:(b,d)=>{d.value&&(b.value=d.value);d.type&&b.setAttribute("type",d.type);b.id=this.defaultId;"function"===typeof a&&a(b)},useUniqueId:!0})}}class $f extends Jb{constructor(c,a,b,d={}){super(c,a,b,{...d,useUniqueId:!0})}initCustomNode(c){this.__updateNodeId(c);this.__notifyChange(c)}teardownNode(c){(c=this.getSlotChild())&&c!==this.defaultNode?
this.__notifyChange(c):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const c=super.attachDefaultNode();c&&this.__updateNodeId(c);return c}restoreDefaultNode(){}updateDefaultNode(c){this.__notifyChange(c)}observeNode(c){this.__nodeObserver&&this.__nodeObserver.disconnect();this.__nodeObserver=new MutationObserver(a=>{a.forEach(b=>{const d=b.target,e=d===this.node;"attributes"===b.type?e&&this.__updateNodeId(d):(e||d.parentElement===this.node)&&this.__notifyChange(this.node)})});
this.__nodeObserver.observe(c,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(c){return c?c.nodeType===Node.ELEMENT_NODE&&(customElements.get(c.localName)||0<c.children.length)||c.textContent&&""!==c.textContent.trim():!1}__notifyChange(c){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(c),node:c}}))}__updateNodeId(c){const a=!this.nodes||c===this.nodes[0];c.nodeType!==Node.ELEMENT_NODE||this.multiple&&!a||
c.id||(c.id=this.defaultId)}}class ag extends $f{constructor(c){super(c,"label","label")}setLabel(c){this.label=c;this.getSlotChild()||this.restoreDefaultNode();this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){var {label:c}=this;c&&""!==c.trim()&&(c=this.attachDefaultNode(),this.observeNode(c))}updateDefaultNode(c){c&&(c.textContent=this.label);super.updateDefaultNode(c)}initCustomNode(c){super.initCustomNode(c);this.observeNode(c)}}const bg=C(c=>class extends bd(c){static get properties(){return{label:{type:String,
observer:"_labelChanged"}}}constructor(){super();this._labelController=new ag(this);this._labelController.addEventListener("slot-content-changed",a=>{this.toggleAttribute("has-label",a.detail.hasContent)})}get _labelId(){const a=this._labelNode;return a&&a.id}get _labelNode(){return this._labelController.node}ready(){super.ready();this.addController(this._labelController)}_labelChanged(a){this._labelController.setLabel(a)}});class cg{constructor(c,a){this.input=c;this.__preventDuplicateLabelClick=
this.__preventDuplicateLabelClick.bind(this);a.addEventListener("slot-content-changed",b=>{this.__initLabel(b.detail.node)});this.__initLabel(a.node)}__initLabel(c){c&&(c.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&c.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const c=a=>{a.stopImmediatePropagation();this.input.removeEventListener("click",c)};this.input.addEventListener("click",c)}}const dg=c=>class extends bg(Yf(Lf(Jf(c)))){static get properties(){return{indeterminate:{type:Boolean,
notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super();this._setType("checkbox");this.value="on"}ready(){super.ready();this.addController(new Zf(this,a=>{this._setInputElement(a);this._setFocusElement(a);this.ariaTarget=this.stateTarget=a}));this.addController(new cg(this.inputElement,
this._labelController))}_shouldSetActive(a){return"a"===a.target.localName?!1:super._shouldSetActive(a)}_toggleChecked(a){this.indeterminate&&(this.indeterminate=!1);super._toggleChecked(a)}},eg=E`
  :host {
    display: inline-block;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    -webkit-tap-highlight-color: transparent;
  }

  .vaadin-checkbox-container {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: baseline;
  }

  [part='checkbox'],
  ::slotted(input),
  ::slotted(label) {
    grid-row: 1;
  }

  [part='checkbox'],
  ::slotted(input) {
    grid-column: 1;
  }

  [part='checkbox'] {
    width: var(--vaadin-checkbox-size, 1em);
    height: var(--vaadin-checkbox-size, 1em);
    --_input-border-width: var(--vaadin-input-field-border-width, 0);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  [part='checkbox']::before {
    display: block;
    content: '\\202F';
    line-height: var(--vaadin-checkbox-size, 1em);
    contain: paint;
  }

  /* visually hidden */
  ::slotted(input) {
    opacity: 0;
    cursor: inherit;
    margin: 0;
    align-self: stretch;
    -webkit-appearance: none;
    width: initial;
    height: initial;
  }

  @media (forced-colors: active) {
    [part='checkbox'] {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([disabled]) [part='checkbox'],
    :host([disabled]) [part='checkbox']::after {
      outline-color: GrayText;
    }

    :host(:is([checked], [indeterminate])) [part='checkbox']::after {
      outline: 1px solid;
      outline-offset: -1px;
      border-radius: inherit;
    }

    :host([focused]) [part='checkbox'],
    :host([focused]) [part='checkbox']::after {
      outline-width: 2px;
    }
  }
`;O("vaadin-checkbox",eg,{moduleId:"vaadin-checkbox-styles"});class fg extends dg(fd(Cb(Ia))){static get is(){return"vaadin-checkbox"}static get template(){return Fb`
      <div class="vaadin-checkbox-container">
        <div part="checkbox" aria-hidden="true"></div>
        <slot name="input"></slot>
        <slot name="label"></slot>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready();this._tooltipController=new md(this);this._tooltipController.setAriaTarget(this.inputElement);this.addController(this._tooltipController)}}X(fg);const gg=c=>class extends c{static get properties(){return{width:{type:String,value:"58px",sync:!0},flexGrow:{type:Number,value:0,sync:!0},selectAll:{type:Boolean,value:!1,notify:!0,sync:!0},autoSelect:{type:Boolean,value:!1,sync:!0},dragSelect:{type:Boolean,value:!1,sync:!0},_indeterminate:{type:Boolean,sync:!0},_selectAllHidden:Boolean}}static get observers(){return["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, selectAll, _indeterminate, _selectAllHidden)"]}_defaultHeaderRenderer(a,
b){b=a.firstElementChild;b||(b=document.createElement("vaadin-checkbox"),b.setAttribute("aria-label","Select All"),b.classList.add("vaadin-grid-select-all-checkbox"),a.appendChild(b),b.addEventListener("checked-changed",this.__onSelectAllCheckedChanged.bind(this)));a=this.__isChecked(this.selectAll,this._indeterminate);b.__rendererChecked=a;b.checked=a;b.hidden=this._selectAllHidden;b.indeterminate=this._indeterminate}_defaultRenderer(a,b,{item:d,selected:e}){b=a.firstElementChild;b||(b=document.createElement("vaadin-checkbox"),
b.setAttribute("aria-label","Select Row"),a.appendChild(b),b.addEventListener("checked-changed",this.__onSelectRowCheckedChanged.bind(this)),Ca(a,"track",this.__onCellTrack.bind(this)),a.addEventListener("mousedown",this.__onCellMouseDown.bind(this)),a.addEventListener("click",this.__onCellClick.bind(this)));b.__item=d;b.__rendererChecked=e;b.checked=e}__onSelectAllCheckedChanged(a){a.target.checked!==a.target.__rendererChecked&&(this._indeterminate||a.target.checked?this._selectAll():this._deselectAll())}__onSelectRowCheckedChanged(a){a.target.checked!==
a.target.__rendererChecked&&(a.target.checked?this._selectItem(a.target.__item):this._deselectItem(a.target.__item))}__onCellTrack(a){if(this.dragSelect)if(this.__dragCurrentY=a.detail.y,this.__dragDy=a.detail.dy,"start"===a.detail.state){const b=this._grid._getRenderedRows().find(d=>d.contains(a.currentTarget.assignedSlot));this.__selectOnDrag=!this._grid._isSelected(b._item);this.__dragStartIndex=b.index;this.__dragStartItem=b._item;this.__dragAutoScroller()}else"end"===a.detail.state&&(this.__dragStartItem&&
(this.__selectOnDrag?this._selectItem(this.__dragStartItem):this._deselectItem(this.__dragStartItem)),setTimeout(()=>{this.__dragStartIndex=void 0}))}__onCellMouseDown(a){this.dragSelect&&a.preventDefault()}__onCellClick(a){void 0!==this.__dragStartIndex&&a.preventDefault()}__dragAutoScroller(){if(void 0!==this.__dragStartIndex){var a=this._grid._getRenderedRows(),b=a.find(e=>{e=e.getBoundingClientRect();return this.__dragCurrentY>=e.top&&this.__dragCurrentY<=e.bottom}),d=b?b.index:void 0;b=this.__getScrollableArea();
this.__dragCurrentY<b.top?d=this._grid._firstVisibleIndex:this.__dragCurrentY>b.bottom&&(d=this._grid._lastVisibleIndex);void 0!==d&&a.forEach(e=>{if(d>this.__dragStartIndex&&e.index>=this.__dragStartIndex&&e.index<=d||d<this.__dragStartIndex&&e.index<=this.__dragStartIndex&&e.index>=d)this.__selectOnDrag?this._selectItem(e._item):this._deselectItem(e._item),this.__dragStartItem=void 0});a=.15*b.height;0>this.__dragDy&&this.__dragCurrentY<b.top+a&&(this._grid.$.table.scrollTop-=10*Math.min(1,(b.top+
a-this.__dragCurrentY)/a));0<this.__dragDy&&this.__dragCurrentY>b.bottom-a&&(this._grid.$.table.scrollTop+=10*Math.min(1,(this.__dragCurrentY-(b.bottom-a))/a));setTimeout(()=>this.__dragAutoScroller(),10)}}__getScrollableArea(){const a=this._grid.$.table.getBoundingClientRect(),b=this._grid.$.header.getBoundingClientRect(),d=this._grid.$.footer.getBoundingClientRect();return{top:a.top+b.height,bottom:a.bottom-d.height,left:a.left,right:a.right,height:a.height-b.height-d.height,width:a.width}}_selectAll(){}_deselectAll(){}_selectItem(a){}_deselectItem(a){}__isChecked(a,
b){return b||a}},hg=c=>class extends gg(c){static get properties(){return{__previousActiveItem:Object}}static get observers(){return["__onSelectAllChanged(selectAll)"]}constructor(){super();this.__boundOnActiveItemChanged=this.__onActiveItemChanged.bind(this);this.__boundOnDataProviderChanged=this.__onDataProviderChanged.bind(this);this.__boundOnSelectedItemsChanged=this.__onSelectedItemsChanged.bind(this)}disconnectedCallback(){this._grid.removeEventListener("active-item-changed",this.__boundOnActiveItemChanged);
this._grid.removeEventListener("data-provider-changed",this.__boundOnDataProviderChanged);this._grid.removeEventListener("filter-changed",this.__boundOnSelectedItemsChanged);this._grid.removeEventListener("selected-items-changed",this.__boundOnSelectedItemsChanged);super.disconnectedCallback()}connectedCallback(){super.connectedCallback();this._grid&&(this._grid.addEventListener("active-item-changed",this.__boundOnActiveItemChanged),this._grid.addEventListener("data-provider-changed",this.__boundOnDataProviderChanged),
this._grid.addEventListener("filter-changed",this.__boundOnSelectedItemsChanged),this._grid.addEventListener("selected-items-changed",this.__boundOnSelectedItemsChanged))}__onSelectAllChanged(a){void 0!==a&&this._grid&&(this.__selectAllInitialized?this._selectAllChangeLock||(a&&this.__hasArrayDataProvider()?this.__withFilteredItemsArray(b=>{this._grid.selectedItems=b}):this._grid.selectedItems=[]):this.__selectAllInitialized=!0)}__arrayContains(a,b){return Array.isArray(a)&&Array.isArray(b)&&b.every(d=>
a.includes(d))}_selectAll(){this.selectAll=!0}_deselectAll(){this.selectAll=!1}_selectItem(a){this._grid.selectItem(a)}_deselectItem(a){this._grid.deselectItem(a)}__onActiveItemChanged(a){a=a.detail.value;if(this.autoSelect){const b=a||this.__previousActiveItem;b&&this._grid._toggleItem(b)}this.__previousActiveItem=a}__hasArrayDataProvider(){return Array.isArray(this._grid.items)&&!!this._grid.dataProvider}__onSelectedItemsChanged(){this._selectAllChangeLock=!0;this.__hasArrayDataProvider()&&this.__withFilteredItemsArray(a=>
{this._grid.selectedItems.length?this.__arrayContains(this._grid.selectedItems,a)?(this.selectAll=!0,this._indeterminate=!1):(this.selectAll=!1,this._indeterminate=!0):this._indeterminate=this.selectAll=!1});this._selectAllChangeLock=!1}__onDataProviderChanged(){this._selectAllHidden=!Array.isArray(this._grid.items)}__withFilteredItemsArray(a){const b={page:0,pageSize:Infinity,sortOrders:[],filters:this._grid._mapFilters()};this._grid.dataProvider(b,d=>a(d))}};class ig extends hg(ad){static get is(){return"vaadin-grid-selection-column"}}
X(ig);O("vaadin-grid-sorter",E`
    :host {
      justify-content: flex-start;
      align-items: baseline;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: var(--lumo-clickable-cursor);
    }

    [part='content'] {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [part='indicators'] {
      margin-left: var(--lumo-space-s);
    }

    [part='indicators']::before {
      transform: scale(0.8);
    }

    :host(:not([direction]):not(:hover)) [part='indicators'] {
      color: var(--lumo-tertiary-text-color);
    }

    :host([direction]) {
      color: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
    }

    [part='order'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='indicators'] {
      margin-right: var(--lumo-space-s);
      margin-left: 0;
    }
  `,{moduleId:"lumo-grid-sorter"});const sd=document.createElement("template");sd.innerHTML="\n  \x3cstyle\x3e\n    @font-face {\n      font-family: 'vaadin-grid-sorter-icons';\n      src: url(data:application/font-woff;charset\x3dutf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA\x3d\x3d) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  \x3c/style\x3e\n";
document.head.appendChild(sd.content);O("vaadin-grid-sorter",E`
    :host {
      display: inline-flex;
      cursor: pointer;
      max-width: 100%;
    }

    [part='content'] {
      flex: 1 1 auto;
    }

    [part='indicators'] {
      position: relative;
      align-self: center;
      flex: none;
    }

    [part='order'] {
      display: inline;
      vertical-align: super;
    }

    [part='indicators']::before {
      font-family: 'vaadin-grid-sorter-icons';
      display: inline-block;
    }

    :host(:not([direction])) [part='indicators']::before {
      content: '\\e901';
    }

    :host([direction='asc']) [part='indicators']::before {
      content: '\\e900';
    }

    :host([direction='desc']) [part='indicators']::before {
      content: '\\e902';
    }
  `,{moduleId:"vaadin-grid-sorter-styles"});const jg=c=>class extends c{static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null,sync:!0},_order:{type:Number,value:null,sync:!0},_isConnected:{type:Boolean,observer:"__isConnectedChanged"}}}static get observers(){return["_pathOrDirectionChanged(path, direction)"]}ready(){super.ready();this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback();this._isConnected=
!0}disconnectedCallback(){super.disconnectedCallback();this._isConnected=!1;!this.parentNode&&this._grid&&this._grid.__removeSorters([this])}_pathOrDirectionChanged(){this.__dispatchSorterChangedEvenIfPossible()}__isConnectedChanged(a,b){!1!==b&&this.__dispatchSorterChangedEvenIfPossible()}__dispatchSorterChangedEvenIfPossible(){void 0!==this.path&&void 0!==this.direction&&this._isConnected&&(this.dispatchEvent(new CustomEvent("sorter-changed",{detail:{shiftClick:!!this._shiftClick,fromSorterClick:!!this._fromSorterClick},
bubbles:!0,composed:!0})),this._shiftClick=this._fromSorterClick=!1)}_getDisplayOrder(a){return null===a?"":a+1}_onClick(a){if(!a.defaultPrevented){var b=this.getRootNode().activeElement;this!==b&&this.contains(b)||(a.preventDefault(),this._shiftClick=a.shiftKey,this._fromSorterClick=!0,this.direction="asc"===this.direction?"desc":"desc"===this.direction?null:"asc")}}};class kg extends jg(Cb(Gb(Ia))){static get template(){return Fb`
      <div part="content">
        <slot></slot>
      </div>
      <div part="indicators">
        <span part="order">[[_getDisplayOrder(_order)]]</span>
      </div>
    `}static get is(){return"vaadin-grid-sorter"}}X(kg);const td={selectionColumn:!0,columnMenus:!0};let y=class extends xd{constructor(c,a){super(c,a);this._grid=null;this._columnElements=[];this.messages=this.itemIdPath=null;this.viewModel=new yd;this.visibleElements={...td}}initialize(){this.addHandles([this.columns.on("change",()=>this.onColumnChange()),gb.watch(()=>this.viewModel?.size,()=>this._updateGridSize()),gb.watch(()=>this.store?.state,(c,a)=>{"ready"!==c||"loaded"!==a&&"error"!==a||
this.refreshPageCache()}),gb.on(()=>this._grid?.$?.table,"scroll",()=>this.viewModel?.closeColumnMenus())])}destroy(){this.resetColumns();this.columns?.destroy()}resetColumns(){this.columns.items.forEach(c=>c.destroy());this.columns.removeAll()}get cellClassNameGenerator(){return this.viewModel.cellClassNameGenerator}set cellClassNameGenerator(c){this.viewModel.cellClassNameGenerator=c}get cellPartNameGenerator(){return this.viewModel.cellPartNameGenerator}set cellPartNameGenerator(c){this.viewModel.cellPartNameGenerator=
c}get columns(){return this.viewModel.columns}set columns(c){this.viewModel.columns=c}get columnReorderingEnabled(){return this.viewModel.columnReorderingEnabled}set columnReorderingEnabled(c){this.viewModel.columnReorderingEnabled=c}get dataProvider(){return this.viewModel.dataProvider}set dataProvider(c){this.viewModel.dataProvider=c}get highlightIds(){return this.viewModel.highlightIds}set highlightIds(c){this.viewModel.highlightIds=c}get label(){return this.messages?.widgetLabel??""}set label(c){this._overrideIfSome("label",
c)}get multiSortEnabled(){return this.viewModel.multiSortEnabled}set multiSortEnabled(c){this.viewModel.multiSortEnabled=c}get pageSize(){return this.viewModel.pageSize}set pageSize(c){this.viewModel.pageSize=c}get rowDetailsRenderer(){return this.viewModel.rowDetailsRenderer}set rowDetailsRenderer(c){this.viewModel.rowDetailsRenderer=c}get size(){return this.viewModel.size}get sortOrders(){return this._grid?._sorters?this._grid._sorters.filter(c=>!!c&&c.path).map(({direction:c,path:a})=>({direction:c,
path:a})):[]}get store(){return this.viewModel.store}set store(c){this.viewModel.store=c}castVisibleElements(c){return{...td,...c}}getColumnProps(c,a){const {id:b}=this,{autoWidth:d,direction:e,flexGrow:f,frozen:g,frozenToEnd:h,header:k,hidden:l,invalid:m,path:n,resizable:p,textAlign:q,width:x}=c,{renderFunction:t,footerRenderFunction:w,headerRenderFunction:I}=c;return{footerRenderer:w?(v,F)=>w({root:v,column:F}):void 0,headerRenderer:I?(v,F)=>I({root:v,column:F}):void 0,renderer:t?(v,F,Ha)=>t({root:v,
column:F,rowData:Ha}):void 0,autoWidth:d,direction:e,flexGrow:f,frozen:g,frozenToEnd:h,header:k,hidden:l,key:`${b}_${k}_${a??n}`,path:n,resizable:p,bind:this,headerPartName:m?"invalid":void 0,"text-align":q,width:"number"===typeof x?`${x}px`:x,afterCreate:this._afterColumnCreate,afterRemoved:this._afterColumnRemoved}}clearSelection(){this._clearSelection();this.scheduleRender()}clearSort(){let c=!1;this._grid&&(this._grid._sorters?.length&&(this._grid._sorters.forEach(a=>{a._order=null;a.direction=
null}),c=!0),this.columns?.length&&this.columns.some(a=>!!a.direction)&&(this.columns.forEach(a=>a.direction=null),c=!0),c&&(this.notifyChange("sortOrders"),this.scheduleRender()))}findColumn(c){this.viewModel.findColumn(c)}generateCellClassNames(){this._grid?.generateCellClassNames()}getSlotElementByName(c){return this._grid?.shadowRoot?.querySelector(`slot[name='${c}']`)??null}hideColumn(c){this.viewModel?.hideColumn(c)}recalculateColumnWidths(){this._grid?.recalculateColumnWidths()}async reset(){this._clearSelection();
await this.store?.reset();this.scrollToTop()}refreshPageCache(){this._grid?.clearCache()}selectRows(c){c=(c?.filter(a=>!this.highlightIds.includes(a.objectId))).map(a=>a.objectId);c.length&&this.highlightIds.addMany(c)}deselectRows(c){c=c?.map(a=>a.objectId)||[];c.length&&this.highlightIds.removeMany(c)}showColumn(c){this.viewModel?.showColumn(c)}sort({path:c,direction:a}){this.viewModel?.sortColumn(c,a);this.notifyChange("sortOrders")}scrollToIndex(c){this._grid?.scrollToIndex(c)}scrollToTop(){this._grid?.scrollToIndex(0)}isEditingActive(){return!!this._getActiveEditInfo().length}onColumnChange(){this._columnElements.forEach(c=>
{this._applyRenderersToColumnElement(c)});this._grid?.requestContentUpdate()}render(){const {columnMenus:c}=this.visibleElements;return W.tsx("div",{bind:this,class:this.classes("esri-grid",zd.globalCss.widget,{["esri-grid--no-column-menu"]:!c})},W.tsx("div",{bind:this,class:"esri-grid__content"},this._renderGrid()))}_renderGrid(){const c=this.highlightIds.map(a=>this.store?.getLocalItemByKey(a)||{objectId:a}).toArray();return W.tsx("vaadin-grid",{afterCreate:this._afterGridCreate,afterUpdate:this._afterGridUpdate,
bind:this,cellClassNameGenerator:this.cellClassNameGenerator,cellPartNameGenerator:this.cellPartNameGenerator,class:"esri-grid__grid",columnReorderingAllowed:this.columnReorderingEnabled,dataProvider:this.dataProvider,id:`${this.id}_grid`,itemIdPath:this.itemIdPath,multiSort:this.multiSortEnabled,pageSize:this.pageSize,ref:"grid",rowDetailsRenderer:this.rowDetailsRenderer,selectedItems:c,size:this.size},this._renderAllColumns())}_renderAllColumns(){return"disabled"!==this.viewModel.state&&this.columns?.length?
[this._renderSelectionColumn(),this._renderColumns()]:null}_renderSelectionColumn(){return W.tsx("vaadin-grid-selection-column",{_selectAllHidden:!0,bind:this,dragSelect:!0,frozen:!0,hidden:!this.visibleElements.selectionColumn,selectAll:!1,sortable:!1,textAlign:"center"})}_renderColumns(){return this.columns.items.map((c,a)=>"columns"in c?this._renderGroupColumn(c,a):W.tsx("vaadin-grid-column",{...this.getColumnProps(c,a)})).filter(ud.isSome)}_renderGroupColumn(c,a){const b=this.getColumnProps(c,
a);if(b.hidden||!c.columns)return null;c=c.columns.filter(({hidden:d})=>!d);return c.length?W.tsx("vaadin-grid-column-group",{...b},c.map(d=>W.tsx("vaadin-grid-column",{...this.getColumnProps(d,a)}))):null}_afterGridCreate(c){const a=this._grid=c;a.setAttribute("theme","compact column-borders");customElements.whenDefined("vaadin-grid").then(()=>this._addGridEventListeners());a.__updateSorter=b=>{var d=a._sorters;const e=!d.includes(b);if(b.direction||!e)b._order=null,a.multiSort?(a._removeArrayItem(d,
b),b.direction&&(null!=b._initialOrder?(e?d[b._initialOrder]=b:d.splice(b._initialOrder,0,b),b._initialOrder=null):d.unshift(b)),a.__updateSortOrders()):b.direction&&(d=d.filter(f=>f!==b),a._sorters=[b],d.forEach(f=>{f._order=null;f.direction=null}))}}_afterGridUpdate(c){this._grid||(this._grid=c)}_afterColumnCreate(c){this._columnElements.push(c)}_afterColumnRemoved(c){c=this._columnElements.indexOf(c,0);-1<c&&this._columnElements.splice(c,1)}_updateGridSize(){this._grid&&(this._grid.size=this.size||
0,this.scheduleRender())}_getActiveEditInfo(){return!this.columns||this.columns.length?[]:this.columns.filter(c=>"activeEditInfo"in c).map(c=>c.activeEditInfo).items}_addGridEventListeners(){const c=this._grid;Kb.assertIsSome(c);this.addHandles([fb.on(c,"click",a=>this._onRowClick(a)),fb.on(c,"selected-items-changed",a=>this._onSelectedItemsChange(a)),fb.on(c,"sorter-changed",()=>this.notifyChange("sortOrders"))])}_onRowClick(c){var a=this._grid;Kb.assertIsSome(a);a=a.getEventContext(c);const {item:b,
section:d}=a;b&&d&&"details"!==d&&"header"!==d&&this.emit("row-click",{context:a,native:c})}_clearSelection(){this.highlightIds.removeAll()}_onSelectedItemsChange(c){const {highlightIds:a}=this,b=c.detail.value.map(e=>e.objectId);c=b.filter(e=>!a.includes(e));const d=a.filter(e=>!b.includes(e));a.removeMany(d);a.addMany(c)}_applyRenderersToColumnElement(c){var a=c?.path;if(a=null!=a?this.viewModel.findColumn(a):void 0)try{const {renderFunction:b,footerRenderFunction:d,headerRenderFunction:e}=a;b&&
"renderer"in c&&(c.renderer=(f,g,h)=>b({root:f,column:g,rowData:h}));d&&(c.footerRenderer=(f,g)=>d({root:f,column:g}));e&&(c.headerRenderer=(f,g)=>e({root:f,column:g}))}catch(b){}}};z.__decorate([A.property()],y.prototype,"_grid",void 0);z.__decorate([A.property()],y.prototype,"cellClassNameGenerator",null);z.__decorate([A.property()],y.prototype,"cellPartNameGenerator",null);z.__decorate([A.property()],y.prototype,"columns",null);z.__decorate([A.property()],y.prototype,"columnReorderingEnabled",
null);z.__decorate([A.property()],y.prototype,"dataProvider",null);z.__decorate([A.property()],y.prototype,"highlightIds",null);z.__decorate([A.property()],y.prototype,"itemIdPath",void 0);z.__decorate([A.property()],y.prototype,"label",null);z.__decorate([A.property(),Ad.messageBundle("esri/widgets/FeatureTable/t9n/FeatureTable")],y.prototype,"messages",void 0);z.__decorate([A.property()],y.prototype,"multiSortEnabled",null);z.__decorate([A.property()],y.prototype,"pageSize",null);z.__decorate([A.property()],
y.prototype,"rowDetailsRenderer",null);z.__decorate([A.property()],y.prototype,"size",null);z.__decorate([A.property({readOnly:!0})],y.prototype,"sortOrders",null);z.__decorate([A.property()],y.prototype,"store",null);z.__decorate([A.property()],y.prototype,"viewModel",void 0);z.__decorate([A.property()],y.prototype,"visibleElements",void 0);z.__decorate([vd.cast("visibleElements")],y.prototype,"castVisibleElements",null);return y=z.__decorate([wd.subclass("esri.widgets.FeatureTable.Grid.Grid")],
y)});