/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{r as n}from"../widgets/Widget.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.3.0
 */function t(n){return"opened"in n?n.opened:n.open}function e(n,e=!1){(e?n[n.transitionProp]:t(n))?n.onBeforeOpen():n.onBeforeClose(),(e?n[n.transitionProp]:t(n))?n.onOpen():n.onClose()}function i(i,o=!1){n((()=>{if(i.transitionEl){const{transitionDuration:n,transitionProperty:r}=getComputedStyle(i.transitionEl),s=n.split(","),a=s[r.split(",").indexOf(i.openTransitionProp)]??s[0];if("0s"===a)return void e(i,o);const p=setTimeout((()=>{i.transitionEl.removeEventListener("transitionstart",l),i.transitionEl.removeEventListener("transitionend",E),i.transitionEl.removeEventListener("transitioncancel",E),e(i,o)}),1e3*parseFloat(a));function l(n){n.propertyName===i.openTransitionProp&&n.target===i.transitionEl&&(clearTimeout(p),i.transitionEl.removeEventListener("transitionstart",l),(o?i[i.transitionProp]:t(i))?i.onBeforeOpen():i.onBeforeClose())}function E(n){n.propertyName===i.openTransitionProp&&n.target===i.transitionEl&&((o?i[i.transitionProp]:t(i))?i.onOpen():i.onClose(),i.transitionEl.removeEventListener("transitionend",E),i.transitionEl.removeEventListener("transitioncancel",E))}i.transitionEl.addEventListener("transitionstart",l),i.transitionEl.addEventListener("transitionend",E),i.transitionEl.addEventListener("transitioncancel",E)}}))}export{i as o};
