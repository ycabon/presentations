/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import"../intl.js";import{S as t,j as s}from"../core/Accessor.js";import{b as n}from"../chunks/domUtils.js";import o from"../core/Evented.js";import{debounce as r,throwIfNotAbortError as i,i as l,o as a}from"../core/promiseUtils.js";import{clone as c}from"../core/lang.js";import{L as d}from"../chunks/Logger.js";import{d as $}from"../chunks/maybe.js";import{EsriPromiseMixin as h}from"../core/Promise.js";import{watch as p,when as m,syncAndInitial as u}from"../core/reactiveUtils.js";import{g as f}from"../chunks/uuid.js";import{property as g}from"../core/accessorSupport/decorators/property.js";import{cast as y}from"../core/accessorSupport/decorators/cast.js";import{subclass as v}from"../core/accessorSupport/decorators/subclass.js";import{r as b}from"../chunks/tracking.js";import{d as w}from"../chunks/projector.js";import{g as k}from"../chunks/assets.js";import{makeAbsolute as j}from"../core/urlUtils.js";import{w as N,i as _,p as S,a as R}from"../chunks/jsxWidgetSupport.js";import{l as E}from"../chunks/legacyIcon.js";import{j as C,l as T,m as L,c as A,n as P}from"../chunks/widgetUtils.js";import{o as x}from"../chunks/locale.js";import{f as I}from"../chunks/messages.js";import"../chunks/date.js";import"../chunks/jsonMap.js";import"../config.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../request.js";import"../kernel.js";import"../core/Error.js";import"../core/JSONSupport.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../core/Handles.js";import"../chunks/metadata.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../chunks/ensureType.js";import"../chunks/asyncUtils.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";const M={handleInterceptedEvent:(e,t,s,n)=>(e.scheduleRender(),t.properties[`on${n.type}`].apply(t.properties.bind||s,[n]))},O={namespace:void 0,performanceLogger:()=>{},eventHandlerInterceptor:void 0,styleApplyer:(e,t,s)=>{"-"===t.charAt(0)?e.style.setProperty(t,s):e.style[t]=s}},F=(e,t,s=!1)=>{let n=e;return t.forEach(((e,o)=>{const r=n?.children?(i=t=>t.domNode===e,n.children.find(i)):void 0;var i;s&&!r&&o!==t.length-1||(n=r)})),n},U="calcite-mode-auto",H="calcite-mode-dark",B={autoMode:U,darkMode:H,lightMode:"calcite-mode-light",rtl:"calcite--rtl",calciteAnimate:"calcite-animate",calciteAnimateIn:"calcite-animate__in",calciteAnimateInUp:"calcite-animate__in-up",calciteAnimateInDown:"calcite-animate__in-down",calciteAnimateInRight:"calcite-animate__in-right",calciteAnimateInLeft:"calcite-animate__in-left",calciteAnimateInScale:"calcite-animate__in-scale"};let D,W,z,V=!1,q=!1,G=!1,J=!1,Z=null,K=!1;const Q=e=>{const t=new URL(e,st.$resourcesUrl$);return t.origin!==Ye.location.origin?t.href:t.pathname},X="http://www.w3.org/1999/xlink",Y={},ee=e=>"object"==(e=typeof e)||"function"===e,te=(e,t,...s)=>{let n=null,o=null,r=null,i=!1,l=!1;const a=[],c=t=>{for(let s=0;s<t.length;s++)n=t[s],Array.isArray(n)?c(n):null!=n&&"boolean"!=typeof n&&((i="function"!=typeof e&&!ee(n))&&(n=String(n)),i&&l?a[a.length-1].$text$+=n:a.push(i?se(null,n):n),l=i)};if(c(s),t){t.key&&(o=t.key),t.name&&(r=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,a,oe);const d=se(e,null);return d.$attrs$=t,a.length>0&&(d.$children$=a),d.$key$=o,d.$name$=r,d},se=(e,t)=>({$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null,$name$:null}),ne={},oe={forEach:(e,t)=>e.map(re).forEach(t),map:(e,t)=>e.map(re).map(t).map(ie)},re=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),ie=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),te(e.vtag,t,...e.vchildren||[])}const t=se(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},le=(e,t,s)=>{const n=e;return{emit:e=>ae(n,t,{bubbles:!!(4&s),composed:!!(2&s),cancelable:!!(1&s),detail:e})}},ae=(e,t,s)=>{const n=st.ce(t,s);return e.dispatchEvent(n),n},ce=new WeakMap,de=(e,t)=>"sc-"+(t&&32&e.$flags$?e.$tagName$+"-"+t:e.$tagName$),$e=(e,t,s,n,o,r)=>{if(s!==n){let i=Ze(e,t),l=t.toLowerCase();if("class"===t){const t=e.classList,o=pe(s),r=pe(n);t.remove(...o.filter((e=>e&&!r.includes(e)))),t.add(...r.filter((e=>e&&!o.includes(e))))}else if("style"===t){for(const t in s)n&&null!=n[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in n)s&&n[t]===s[t]||(t.includes("-")?e.style.setProperty(t,n[t]):e.style[t]=n[t])}else if("key"===t);else if("ref"===t)n&&n(e);else if(e.__lookupSetter__(t)||"o"!==t[0]||"n"!==t[1]){const a=ee(n);if((i||a&&null!==n)&&!o)try{if(e.tagName.includes("-"))e[t]=n;else{const o=n??"";"list"===t?i=!1:null!=s&&e[t]==o||(e[t]=o)}}catch(e){}let c=!1;l!==(l=l.replace(/^xlink\:?/,""))&&(t=l,c=!0),null==n||!1===n?!1===n&&""!==e.getAttribute(t)||(c?e.removeAttributeNS(X,t):e.removeAttribute(t)):(!i||4&r||o)&&!a&&(n=!0===n?"":n,c?e.setAttributeNS(X,t,n):e.setAttribute(t,n))}else if(t="-"===t[2]?t.slice(3):Ze(Ye,l)?l.slice(2):l[2]+t.slice(3),s||n){const o=t.endsWith(me);t=t.replace(ue,""),s&&st.rel(e,t,s,o),n&&st.ael(e,t,n,o)}}},he=/\s/,pe=e=>e?e.split(he):[],me="Capture",ue=new RegExp(me+"$"),fe=(e,t,s,n)=>{const o=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,r=e&&e.$attrs$||Y,i=t.$attrs$||Y;for(n in r)n in i||$e(o,n,r[n],void 0,s,t.$flags$);for(n in i)$e(o,n,r[n],i[n],s,t.$flags$)},ge=(e,t,s,n)=>{var o;const r=t.$children$[s];let i,l,a,c=0;if(V||(G=!0,"slot"===r.$tag$&&(D&&n.classList.add(D+"-s"),r.$flags$|=r.$children$?2:1)),null!==r.$text$)i=r.$elm$=et.createTextNode(r.$text$);else if(1&r.$flags$)i=r.$elm$=et.createTextNode("");else{if(J||(J="svg"===r.$tag$),i=r.$elm$=et.createElementNS(J?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&r.$flags$?"slot-fb":r.$tag$),J&&"foreignObject"===r.$tag$&&(J=!1),fe(null,r,J),null!=D&&i["s-si"]!==D&&i.classList.add(i["s-si"]=D),r.$children$)for(c=0;c<r.$children$.length;++c)l=ge(e,r,c,i),l&&i.appendChild(l);"svg"===r.$tag$?J=!1:"foreignObject"===i.tagName&&(J=!0)}return i["s-hn"]=z,3&r.$flags$&&(i["s-sr"]=!0,i["s-fs"]=null===(o=r.$attrs$)||void 0===o?void 0:o.slot,i["s-cr"]=W,i["s-sn"]=r.$name$||"",a=e&&e.$children$&&e.$children$[s],a&&a.$tag$===r.$tag$&&e.$elm$&&ye(e.$elm$,!1)),i},ye=(e,t)=>{var s;st.$flags$|=1;const n=e.childNodes;for(let e=n.length-1;e>=0;e--){const o=n[e];o["s-hn"]!==z&&o["s-ol"]&&(je(o).insertBefore(o,ke(o)),o["s-ol"].remove(),o["s-ol"]=void 0,o["s-sh"]=void 0,1===o.nodeType&&o.setAttribute("slot",null!==(s=o["s-sn"])&&void 0!==s?s:""),G=!0),t&&ye(o,t)}st.$flags$&=-2},ve=(e,t,s,n,o,r)=>{let i,l=e["s-cr"]&&e["s-cr"].parentNode||e;for(l.shadowRoot&&l.tagName===z&&(l=l.shadowRoot);o<=r;++o)n[o]&&(i=ge(null,s,o,e),i&&(n[o].$elm$=i,l.insertBefore(i,ke(t))))},be=(e,t,s)=>{for(let n=t;n<=s;++n){const t=e[n];if(t){const e=t.$elm$;Ce(t),e&&(q=!0,e["s-ol"]?e["s-ol"].remove():ye(e,!0),e.remove())}}},we=(e,t,s=!1)=>e.$tag$===t.$tag$&&("slot"===e.$tag$?e.$name$===t.$name$:!!s||e.$key$===t.$key$),ke=e=>e&&e["s-ol"]||e,je=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,Ne=(e,t,s=!1)=>{const n=t.$elm$=e.$elm$,o=e.$children$,r=t.$children$,i=t.$tag$,l=t.$text$;let a;null===l?(J="svg"===i||"foreignObject"!==i&&J,"slot"===i||fe(e,t,J),null!==o&&null!==r?((e,t,s,n,o=!1)=>{let r,i,l=0,a=0,c=0,d=0,$=t.length-1,h=t[0],p=t[$],m=n.length-1,u=n[0],f=n[m];for(;l<=$&&a<=m;)if(null==h)h=t[++l];else if(null==p)p=t[--$];else if(null==u)u=n[++a];else if(null==f)f=n[--m];else if(we(h,u,o))Ne(h,u,o),h=t[++l],u=n[++a];else if(we(p,f,o))Ne(p,f,o),p=t[--$],f=n[--m];else if(we(h,f,o))"slot"!==h.$tag$&&"slot"!==f.$tag$||ye(h.$elm$.parentNode,!1),Ne(h,f,o),e.insertBefore(h.$elm$,p.$elm$.nextSibling),h=t[++l],f=n[--m];else if(we(p,u,o))"slot"!==h.$tag$&&"slot"!==f.$tag$||ye(p.$elm$.parentNode,!1),Ne(p,u,o),e.insertBefore(p.$elm$,h.$elm$),p=t[--$],u=n[++a];else{for(c=-1,d=l;d<=$;++d)if(t[d]&&null!==t[d].$key$&&t[d].$key$===u.$key$){c=d;break}c>=0?(i=t[c],i.$tag$!==u.$tag$?r=ge(t&&t[a],s,c,e):(Ne(i,u,o),t[c]=void 0,r=i.$elm$),u=n[++a]):(r=ge(t&&t[a],s,a,e),u=n[++a]),r&&je(h.$elm$).insertBefore(r,ke(h.$elm$))}l>$?ve(e,null==n[m+1]?null:n[m+1].$elm$,s,n,a,m):a>m&&be(t,l,$)})(n,o,t,r,s):null!==r?(null!==e.$text$&&(n.textContent=""),ve(n,null,t,r,0,r.length-1)):null!==o&&be(o,0,o.length-1),J&&"svg"===i&&(J=!1)):(a=n["s-cr"])?a.parentNode.textContent=l:e.$text$!==l&&(n.data=l)},_e=e=>{const t=e.childNodes;for(const e of t)if(1===e.nodeType){if(e["s-sr"]){const s=e["s-sn"];e.hidden=!1;for(const n of t)if(n!==e)if(n["s-hn"]!==e["s-hn"]||""!==s){if(1===n.nodeType&&(s===n.getAttribute("slot")||s===n["s-sn"])){e.hidden=!0;break}}else if(1===n.nodeType||3===n.nodeType&&""!==n.textContent.trim()){e.hidden=!0;break}}_e(e)}},Se=[],Re=e=>{let t,s,n;for(const o of e.childNodes){if(o["s-sr"]&&(t=o["s-cr"])&&t.parentNode){s=t.parentNode.childNodes;const e=o["s-sn"];for(n=s.length-1;n>=0;n--)if(t=s[n],!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==o["s-hn"])if(Ee(t,e)){let s=Se.find((e=>e.$nodeToRelocate$===t));q=!0,t["s-sn"]=t["s-sn"]||e,s?(s.$nodeToRelocate$["s-sh"]=o["s-hn"],s.$slotRefNode$=o):(t["s-sh"]=o["s-hn"],Se.push({$slotRefNode$:o,$nodeToRelocate$:t})),t["s-sr"]&&Se.map((e=>{Ee(e.$nodeToRelocate$,t["s-sn"])&&(s=Se.find((e=>e.$nodeToRelocate$===t)),s&&!e.$slotRefNode$&&(e.$slotRefNode$=s.$slotRefNode$))}))}else Se.some((e=>e.$nodeToRelocate$===t))||Se.push({$nodeToRelocate$:t})}1===o.nodeType&&Re(o)}},Ee=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,Ce=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(Ce)},Te=(e,t)=>(e.$flags$|=16,e.$ancestorComponent$,ht((()=>Le(e,t)))),Le=(e,t)=>{const s=e.$hostElement$,n=(e.$cmpMeta$.$tagName$,()=>{}),o=s;let r;return r=Fe(o,t?"componentWillLoad":"componentWillUpdate"),r=Ae(r,(()=>Fe(o,"componentWillRender"))),n(),Ae(r,(()=>xe(e,o,t)))},Ae=(e,t)=>Pe(e)?e.then(t):t(),Pe=e=>e instanceof Promise||e&&e.then&&"function"==typeof e.then,xe=async(e,t,s)=>{const n=e.$hostElement$,o=(e.$cmpMeta$.$tagName$,()=>{});n["s-rc"],s&&(e=>{const t=e.$cmpMeta$,s=e.$hostElement$,n=t.$flags$,o=(t.$tagName$,()=>{}),r=((e,t,s)=>{var n;const o=de(t,s),r=Qe.get(o);if(e=11===e.nodeType?e:et,r)if("string"==typeof r){e=e.head||e;let s,i=ce.get(e);if(i||ce.set(e,i=new Set),!i.has(o)){{s=et.createElement("style"),s.innerHTML=r;const t=null!==(n=st.$nonce$)&&void 0!==n?n:function(e){var t,s,n;return null!==(n=null===(s=null===(t=e.head)||void 0===t?void 0:t.querySelector('meta[name="csp-nonce"]'))||void 0===s?void 0:s.getAttribute("content"))&&void 0!==n?n:void 0}(et);null!=t&&s.setAttribute("nonce",t),e.insertBefore(s,e.querySelector("link"))}4&t.$flags$&&(s.innerHTML+="slot-fb{display:contents}slot-fb[hidden]{display:none}"),i&&i.add(o)}}else e.adoptedStyleSheets.includes(r)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,r]);return o})(s.shadowRoot?s.shadowRoot:s.getRootNode(),t,e.$modeName$);10&n&&(s["s-sc"]=r,s.classList.add(r+"-h"),2&n&&s.classList.add(r+"-s")),o()})(e);const r=(e.$cmpMeta$.$tagName$,()=>{});Ie(e,t,n,s),r(),o(),Me(e)},Ie=(e,t,s,n)=>{try{Z=t,t=t.render&&t.render(),e.$flags$&=-17,e.$flags$|=2,((e,t,s=!1)=>{var n,o,r,i;const l=e.$hostElement$,a=e.$cmpMeta$,c=e.$vnode$||se(null,null),d=($=t)&&$.$tag$===ne?t:te(null,null,t);var $;if(z=l.tagName,a.$attrsToReflect$&&(d.$attrs$=d.$attrs$||{},a.$attrsToReflect$.map((([e,t])=>d.$attrs$[t]=l[e]))),s&&d.$attrs$)for(const e of Object.keys(d.$attrs$))l.hasAttribute(e)&&!["key","ref","style","class"].includes(e)&&(d.$attrs$[e]=l[e]);if(d.$tag$=null,d.$flags$|=4,e.$vnode$=d,d.$elm$=c.$elm$=l.shadowRoot||l,D=l["s-sc"],W=l["s-cr"],V=0!=(1&a.$flags$),q=!1,Ne(c,d,s),st.$flags$|=1,G){Re(d.$elm$);for(const e of Se){const t=e.$nodeToRelocate$;if(!t["s-ol"]){const e=et.createTextNode("");e["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=e,t)}}for(const e of Se){const t=e.$nodeToRelocate$,l=e.$slotRefNode$;if(l){const e=l.parentNode;let s=l.nextSibling;{let r=null===(n=t["s-ol"])||void 0===n?void 0:n.previousSibling;for(;r;){let n=null!==(o=r["s-nr"])&&void 0!==o?o:null;if(n&&n["s-sn"]===t["s-sn"]&&e===n.parentNode&&(n=n.nextSibling,!n||!n["s-nr"])){s=n;break}r=r.previousSibling}}(!s&&e!==t.parentNode||t.nextSibling!==s)&&t!==s&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),e.insertBefore(t,s),1===t.nodeType&&(t.hidden=null!==(r=t["s-ih"])&&void 0!==r&&r))}else 1===t.nodeType&&(s&&(t["s-ih"]=null!==(i=t.hidden)&&void 0!==i&&i),t.hidden=!0)}}q&&_e(d.$elm$),st.$flags$&=-2,Se.length=0})(e,t,n)}catch(t){Ke(t,e.$hostElement$)}return Z=null,null},Me=e=>{e.$cmpMeta$.$tagName$;const t=e.$hostElement$;e.$ancestorComponent$,Fe(t,"componentDidRender"),64&e.$flags$?Fe(t,"componentDidUpdate"):(e.$flags$|=64,Fe(t,"componentDidLoad"))},Oe=e=>{{const t=Ge(e),s=t.$hostElement$.isConnected;return s&&2==(18&t.$flags$)&&Te(t,!1),s}},Fe=(e,t,s)=>{if(e&&e[t])try{return e[t](s)}catch(e){Ke(e)}},Ue=(e,t,s)=>{var n;const o=e.prototype;if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);const s=Object.entries(t.$members$);s.map((([e,[s]])=>{(31&s||32&s)&&Object.defineProperty(o,e,{get(){return t=e,Ge(this).$instanceValues$.get(t);var t},set(s){((e,t,s,n)=>{const o=Ge(e),r=e,i=o.$instanceValues$.get(t),l=o.$flags$,a=r;var c,d;c=s,d=n.$members$[t][0],s=null==c||ee(c)?c:4&d?"false"!==c&&(""===c||!!c):2&d?parseFloat(c):1&d?String(c):c;const $=Number.isNaN(i)&&Number.isNaN(s);if(s!==i&&!$){if(o.$instanceValues$.set(t,s),n.$watchers$&&128&l){const e=n.$watchers$[t];e&&e.map((e=>{try{a[e](s,i,t)}catch(e){Ke(e,r)}}))}if(2==(18&l)){if(a.componentShouldUpdate&&!1===a.componentShouldUpdate(s,i,t))return;Te(o,!1)}}})(this,e,s,t)},configurable:!0,enumerable:!0})}));{const r=new Map;o.attributeChangedCallback=function(e,s,n){st.jmp((()=>{var i;const l=r.get(e);if(this.hasOwnProperty(l))n=this[l],delete this[l];else{if(o.hasOwnProperty(l)&&"number"==typeof this[l]&&this[l]==n)return;if(null==l){const o=Ge(this),r=null==o?void 0:o.$flags$;if(r&&!(8&r)&&128&r&&n!==s){const o=this,r=null===(i=t.$watchers$)||void 0===i?void 0:i[e];null==r||r.forEach((t=>{null!=o[t]&&o[t].call(o,n,s,e)}))}return}}this[l]=(null!==n||"boolean"!=typeof this[l])&&n}))},e.observedAttributes=Array.from(new Set([...Object.keys(null!==(n=t.$watchers$)&&void 0!==n?n:{}),...s.filter((([e,t])=>15&t[0])).map((([e,s])=>{var n;const o=s[1]||e;return r.set(o,e),512&s[0]&&(null===(n=t.$attrsToReflect$)||void 0===n||n.push([e,o])),o}))]))}}return e},He=(e,t)=>{const s={$flags$:t[0],$tagName$:t[1]};s.$members$=t[2],s.$listeners$=t[3],s.$watchers$=e.$watchers$,s.$attrsToReflect$=[];const n=e.prototype.connectedCallback,o=e.prototype.disconnectedCallback;return Object.assign(e.prototype,{__registerHost(){Je(this,s)},connectedCallback(){(e=>{if(0==(1&st.$flags$)){const t=Ge(e),s=t.$cmpMeta$,n=(s.$tagName$,()=>{});1&t.$flags$?(De(e,t,s.$listeners$),(null==t?void 0:t.$lazyInstance$)?t.$lazyInstance$:(null==t?void 0:t.$onReadyPromise$)&&t.$onReadyPromise$.then((()=>{t.$lazyInstance$}))):(t.$flags$|=1,12&s.$flags$&&(e=>{const t=e["s-cr"]=et.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e),s.$members$&&Object.entries(s.$members$).map((([t,[s]])=>{if(31&s&&e.hasOwnProperty(t)){const s=e[t];delete e[t],e[t]=s}})),(async(e,t,s,n)=>{let o;if(0==(32&t.$flags$)&&(t.$flags$|=32,o=e.constructor,customElements.whenDefined(s.$tagName$).then((()=>t.$flags$|=128)),o.style)){let n=o.style;"string"!=typeof n&&(n=n[t.$modeName$=(e=>Xe.map((t=>t(e))).find((e=>!!e)))(e)]);const r=de(s,t.$modeName$);if(!Qe.has(r)){const e=(s.$tagName$,()=>{});((e,t,s)=>{let n=Qe.get(e);ot&&s?(n=n||new CSSStyleSheet,"string"==typeof n?n=t:n.replaceSync(t)):n=t,Qe.set(e,n)})(r,n,!!(1&s.$flags$)),e()}}t.$ancestorComponent$,Te(t,!0)})(e,t,s)),n()}})(this),n&&n.call(this)},disconnectedCallback(){(async e=>{if(0==(1&st.$flags$)){const t=Ge(e);t.$rmListeners$&&(t.$rmListeners$.map((e=>e())),t.$rmListeners$=void 0)}})(this),o&&o.call(this)},__attachShadow(){this.attachShadow({mode:"open",delegatesFocus:!!(16&s.$flags$)})}}),e.is=s.$tagName$,Ue(e,s)},Be=(e,t)=>t,De=(e,t,s,n)=>{s&&s.map((([s,n,o])=>{const r=ze(e,s),i=We(t,o),l=Ve(s);st.ael(r,n,i,l),(t.$rmListeners$=t.$rmListeners$||[]).push((()=>st.rel(r,n,i,l)))}))},We=(e,t)=>s=>{try{e.$hostElement$[t](s)}catch(e){Ke(e)}},ze=(e,t)=>4&t?et:8&t?Ye:16&t?et.body:e,Ve=e=>nt?{passive:0!=(1&e),capture:0!=(2&e)}:0!=(2&e),qe=new WeakMap,Ge=e=>qe.get(e),Je=(e,t)=>{const s={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return De(e,s,t.$listeners$),qe.set(e,s)},Ze=(e,t)=>t in e,Ke=(e,t)=>(0,console.error)(e,t),Qe=new Map,Xe=[],Ye="undefined"!=typeof window?window:{},et=Ye.document||{head:{}},tt=Ye.HTMLElement||class{},st={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,s,n)=>e.addEventListener(t,s,n),rel:(e,t,s,n)=>e.removeEventListener(t,s,n),ce:(e,t)=>new CustomEvent(e,t)},nt=(()=>{let e=!1;try{et.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch(e){}return e})(),ot=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),rt=[],it=[],lt=(e,t)=>s=>{e.push(s),K||(K=!0,t&&4&st.$flags$?dt(ct):st.raf(ct))},at=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){Ke(e)}e.length=0},ct=()=>{at(rt),at(it),(K=rt.length>0)&&st.raf(ct)},dt=e=>Promise.resolve(void 0).then(e),$t=lt(rt,!1),ht=lt(it,!0);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.3.0
 */
function pt(){const{classList:e}=document.body,t=window.matchMedia("(prefers-color-scheme: dark)").matches,s=()=>e.contains(H)||e.contains(U)&&t?"dark":"light",n=e=>document.body.dispatchEvent(new CustomEvent("calciteModeChange",{bubbles:!0,detail:{mode:e}})),o=e=>{r!==e&&n(e),r=e};let r=s();n(r),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>o(e.matches?"dark":"light"))),new MutationObserver((()=>o(s()))).observe(document.body,{attributes:!0,attributeFilter:["class"]})}let mt;function ut(e){const t=[];for(const s of Object.keys(e))customElements.get(`calcite-${s}`)||t.push(e[s]?.());return t.length>0?Promise.all(t):null}"undefined"!=typeof window&&"undefined"!=typeof location&&"undefined"!=typeof document&&window.location===location&&window.document===document&&("interactive"===document.readyState?pt():document.addEventListener("DOMContentLoaded",(()=>pt()),{once:!0})),mt="esri/widgets/support/components/assets";const ft=new Set;var gt;let yt=0;const vt={widgetIcon:E.checkboxUnchecked};function bt(e,t){for(const s in t)null!=e[s]&&("object"==typeof e[s]&&"object"==typeof t[s]?bt(e[s],t?.[s]):e[s]=t[s]);return e}const wt=(e=>{let t;const s={...M,...e},n=(e=>({...O,...e}))(s),o=n.performanceLogger;let r,i=!0,l=!1;const a=[],c=[],d=(e,r,i)=>{let l;n.eventHandlerInterceptor=(e,n,r,i)=>function(e){let n;o("domEvent",e);const r=((e,t)=>{const s=[];for(;e&&e!==t;)s.push(e),e=e.parentNode;return s})(e.currentTarget,l.domNode),i=r.some((e=>customElements.get(e?.tagName?.toLowerCase())));if(e.eventPhase!==Event.CAPTURING_PHASE&&i){const t=e.composedPath(),s=t.slice(t.indexOf(e.currentTarget),t.indexOf(l.domNode)).reverse();n=F(l.getLastRender(),s,!0)}else r.reverse(),n=F(l.getLastRender(),r);let a;return n&&(a=s.handleInterceptedEvent(t,n,this,e)),o("domEventProcessed",e),a},s.postProcessProjectionOptions?.(n);const d=i();l=e(r,d,n),n.eventHandlerInterceptor=void 0,a.push(l),c.push(i),s.afterFirstVNodeRendered&&s.afterFirstVNodeRendered(l,d)};let $=()=>{if(r=void 0,i){i=!1,o("renderStart",void 0);for(let e=0;e<a.length;e++){const t=c[e]();o("rendered",void 0),a[e].update(t),o("patched",void 0)}o("renderDone",void 0),i=!0}};return s.modifyDoRenderImplementation&&($=s.modifyDoRenderImplementation($,a,c)),t={renderNow:$,scheduleRender:()=>{r||l||(r=requestAnimationFrame($))},stop:()=>{r&&(cancelAnimationFrame(r),r=void 0),l=!0},resume:()=>{l=!1,i=!0,t.scheduleRender()},append:(e,t)=>{d(w.append,e,t)},insertBefore:(e,t)=>{d(w.insertBefore,e,t)},merge:(e,t)=>{d(w.merge,e,t)},replace:(e,t)=>{d(w.replace,e,t)},detach:e=>{for(let t=0;t<c.length;t++)if(c[t]===e)return c.splice(t,1),a.splice(t,1)[0];throw new Error("renderFunction was not found")}},t})({postProcessProjectionOptions(e){const t=e.eventHandlerInterceptor,s=/capture$/i;e.eventHandlerInterceptor=(e,n,o,r)=>{const i=t?.(e,n,o,r),l=s.test(e);if(!((e=e.replace(s,"")).toLowerCase()in o)||l){const t=e[2].toLowerCase()+e.slice(3),s=e=>i?.call(o,e);o.addEventListener(t,s,l);const n=()=>o.removeEventListener(t,s,l),a=r.afterRemoved;r.afterRemoved=e=>{a?.(e),n()}}return i}},handleInterceptedEvent(e,t,s,n){const{eventPhase:o,type:r}=n,i=o===Event.CAPTURING_PHASE;let l=`on${r}${i?"capture":""}`;const a=t.properties;(a&&l in a||(l=`on${r[0].toUpperCase()}${r.slice(1)}${i?"Capture":""}`,a&&l in a))&&(P(),e.scheduleRender(),a[l].call(a.bind||s,n))}});let kt=!1,jt=class extends(h(o.EventedAccessor)){constructor(e,s){super(e,s),this._attached=!1,this._projector=wt,this._readyForTrueRender=!1,this.iconClass=vt.widgetIcon,this.icon=null,this.key=this,this.autoRenderingEnabled=!0,this._loadLocale=r((async()=>{if(this._messageBundleProps?.length){const e=await Promise.allSettled(this._messageBundleProps.map((async({bundlePath:e,propertyName:t})=>{if(this.destroyed)return;let s=await I(e);this.uiStrings&&Object.keys(this.uiStrings)&&(s=bt(c(s),this.uiStrings)),this[t]=s})));if(this.destroyed)return;for(const t of e)"rejected"===t.status&&d.getLogger(this).error("widget-intl:locale-error",this.declaredClass,t.reason)}await this.loadLocale()})),function(){try{Q(".")}catch{e=j(k("esri/widgets/support/components/assets")),st.$resourcesUrl$=e}var e}();const n="esri-widget-uid-"+f(),o=this.render.bind(this);this._trackingTarget=new t((()=>{this.autoRenderingEnabled&&this.scheduleRender()}));const i=()=>{if(!this._readyForTrueRender||this.destroyed)return null;const e=o();let t=e.properties;t||(e.properties=t={});const{key:s}=t;if(s||(t.key=n),_(e.vnodeSelector)){if(!this.visible)return{vnodeSelector:"div",properties:{key:`${n}-hidden`,class:"",styles:{display:"none"}},domNode:null,children:void 0,text:void 0}}else this.visible?t.styles||(t.styles={}):(t.class="",t.styles={display:"none"}),t.styles.display||(t.styles.display="");let r=0;return e.children?.forEach((e=>{if(_(e.vnodeSelector))return;let{properties:t}=e;t||(e.properties=t={}),t.key||(t.key=`${this.id}--${r++}`)})),S(this,e)};this.render=()=>{if(kt)return i();let e=C(this)??null;if(e)return e;this._trackingTarget.clear(),kt=!0;try{e=b(this._trackingTarget,i)}catch(e){throw console.error(e),e}finally{kt=!1}return e&&T(this,e),e};const l=this.beforeFirstRender();var a;l?this._resourcesFetch=l.then((()=>{this._readyForTrueRender=!0,this._postInitialize()})):(this._resourcesFetch=Promise.resolve().then((()=>{this._postInitialize()})),this._readyForTrueRender=!0),this.addResolvingPromise(this._resourcesFetch),a=this._resourcesFetch,ft.add(a),a.finally((()=>ft.delete(a)))}normalizeCtorArgs(e,t){const s={...e};return t&&(s.container=t),s}postInitialize(){}beforeFirstRender(){const e=this.loadDependencies();return this._messageBundleProps?.length||e?Promise.all([e,this._loadLocale()]).then((()=>{})).catch(i):null}loadDependencies(){return null}loadLocale(){return null}destroy(){this.destroyed||($(this._trackingTarget),$(this.viewModel),this._detach(this.container),this._set("container",null),this._emitter.clear(),this.render=()=>null,this._projector=null,L(this))}set container(e){this._get("container")||this._set("container",e)}castContainer(e){return n(e)}get domNode(){return this.container}set domNode(e){this.container=e}get id(){return this._get("id")||this.container?.id||Date.now().toString(16)+"-widget-"+yt++}set id(e){e&&this._set("id",e)}get label(){return this.declaredClass.split(".").pop()}set label(e){this._overrideIfSome("label",e)}get renderable(){return this._resourcesFetch}get visible(){return this._get("visible")}set visible(e){this._set("visible",e)}get[(gt=R,N)](){return{projector:this._projector}}render(){throw new Error("not implemented")}scheduleRender(){this.destroyed||(L(this),this._projector.scheduleRender())}own(e){s(d.getLogger(this.declaredClass),"`Widget.own()` is deprecated in favor of Widget.addHandles()'",{replacement:"Widget.addHandles()",version:"4.28"}),this.addHandles(e)}classes(...e){return A.apply(this,e)}renderNow(){L(this),this._projector.renderNow()}_postInitialize(){if(this.destroyed)return;this.scheduleRender(),this._delegatedEventNames?.length&&this.addHandles(p((()=>this.viewModel),((e,t)=>{t&&this.removeHandles("delegated-events"),e&&l(e)&&this.addHandles(this._delegatedEventNames.map((t=>a(e,t,(e=>{this.emit(t,e)})))),"delegated-events")}),u)),this.postInitialize();const e=async()=>{await this._loadLocale().catch(i),this.scheduleRender()};this.addHandles([x(e),p((()=>this.uiStrings),e),m((()=>this.container),(e=>{this.destroyed||this._attach(e)}),{initial:!0,once:!0})])}_attach(e){e&&(this._projector.merge(e,this.render),this._attached=!0)}_detach(e){this._attached&&(this._projector.detach(this.render),this._attached=!1),e?.parentNode?.removeChild(e)}};jt[gt]=!0,e([g()],jt.prototype,"_readyForTrueRender",void 0),e([g({value:null})],jt.prototype,"container",null),e([y("container")],jt.prototype,"castContainer",null),e([g()],jt.prototype,"iconClass",void 0),e([g()],jt.prototype,"icon",void 0),e([g()],jt.prototype,"id",null),e([g()],jt.prototype,"label",null),e([g()],jt.prototype,"renderable",null),e([g()],jt.prototype,"uiStrings",void 0),e([g()],jt.prototype,"viewModel",void 0),e([g({value:!0})],jt.prototype,"visible",null),e([g()],jt.prototype,"key",void 0),e([g()],jt.prototype,"children",void 0),e([g()],jt.prototype,"afterCreate",void 0),e([g()],jt.prototype,"afterUpdate",void 0),e([g()],jt.prototype,"afterRemoved",void 0),jt=e([v("esri.widgets.Widget")],jt);const Nt=jt;export{B as C,Be as F,tt as H,ne as a,le as c,Nt as default,Oe as f,Q as g,te as h,ut as l,He as p,$t as r};
