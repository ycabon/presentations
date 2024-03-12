// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./dom","./componentsUtils"],function(k,p,A){function B(a,b){if(p.closestElementCrossShadowBoundary(b.parentElement,"[form]"))return!0;let c=!1;a.addEventListener("calciteInternalFormComponentRegister",d=>{c=d.composedPath().some(e=>q.has(e));d.stopPropagation()},{once:!0});b.dispatchEvent(new CustomEvent("calciteInternalFormComponentRegister",{bubbles:!0,composed:!0}));return c}function v(a){"status"in a&&(a.status="idle");"validationIcon"in a&&(a.validationIcon=!1);"validationMessage"in
a&&(a.validationMessage="")}function C(a,b){"status"in a&&(a.status="invalid");"validationIcon"in a&&(a.validationIcon=!0);"validationMessage"in a&&(a.validationMessage=b)}function w(a){const b=a?.target,c=b?.parentElement,d=c?.nodeName?.toLowerCase(),e=d?.split("-");2>e.length||"calcite"!==e[0]||(a?.preventDefault(),C(c,b?.validationMessage||""),a=`${e.map((h,l)=>0===l?h:`${h[0].toUpperCase()}${h.slice(1)}`).join("")}${D.includes(d)?"Input":"Change"}`,c.addEventListener(a,()=>v(c),{once:!0}))}function x(a){const {el:b,
form:c}=a;return c?p.queryElementRoots(b,{id:c}):p.closestElementCrossShadowBoundary(b,"form")}function E(){v(this);"checked"in this?this.checked=this.defaultChecked:this.value=this.defaultValue}function F(a){const {el:b,formEl:c,name:d,value:e}=a,{ownerDocument:h}=b,l=b.querySelectorAll('input[slot\x3d"hidden-form-input"]');if(c&&d){var m=Array.isArray(e)?e:[e],r=[],y=new Set;l.forEach(f=>{const g=m.find(G=>G==f.value);null!=g?(y.add(g),z(a,f,g)):r.push(f)});var n;m.forEach(f=>{if(!y.has(f)){var g=
r.pop();g||(g=h.createElement("input"),g.slot="hidden-form-input");n||=h.createDocumentFragment();n.append(g);g.addEventListener("input",t);z(a,g,f)}});n&&b.append(n);r.forEach(f=>{f.removeEventListener("input",t);f.remove()})}else l.forEach(f=>{f.removeEventListener("input",t);f.remove()})}function z(a,b,c){const {defaultValue:d,disabled:e,form:h,name:l,required:m}=a;b.defaultValue=d;b.disabled=e;b.name=l;b.required=m;b.tabIndex=-1;h?b.setAttribute("form",h):b.removeAttribute("form");"checked"in
a?(b.checked=a.checked,b.defaultChecked=a.defaultChecked,b.value=a.checked?c||"on":""):b.value=c||"";a.syncHiddenFormInput?.(b)}const D=["calcite-input","calcite-input-number","calcite-input-text","calcite-text-area"],u=new WeakMap,q=new WeakSet,t=a=>{a.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputInput",{bubbles:!0}))};k.HiddenFormInputSlot=({component:a})=>{F(a);return A.h("slot",{name:"hidden-form-input"})};k.afterConnectDefaultValueSet=function(a,b){a.defaultValue=b};k.connectForm=
function(a){const {el:b,value:c}=a,d=x(a);if(d&&!B(d,b)){a.formEl=d;a.defaultValue=c;"checked"in a&&(a.defaultChecked=a.checked);var e=(a.onFormReset||E).bind(a);d.addEventListener("reset",e);u.set(a.el,e);q.add(b)}};k.disconnectForm=function(a){const {el:b,formEl:c}=a;if(c){var d=u.get(b);c.removeEventListener("reset",d);u.delete(b);a.formEl=null;q.delete(b)}};k.findAssociatedForm=x;k.internalHiddenInputInputEvent="calciteInternalHiddenInputInput";k.resetForm=function(a){a.formEl?.reset()};k.submitForm=
function(a){const {formEl:b}=a;if(!b)return!1;b.addEventListener("invalid",w,!0);b.requestSubmit();b.removeEventListener("invalid",w,!0);requestAnimationFrame(()=>{const c=b.querySelectorAll("[status\x3dinvalid]");for(const d of c)if(d?.validationMessage){d?.setFocus();break}});return!0}});