/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{h as e}from"../widgets/Widget.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.3.0
 */const t=/firefox/i.test(function(){const e=navigator.userAgentData;return e?.brands?e.brands.map((({brand:e,version:t})=>`${e}/${t}`)).join(" "):navigator.userAgent}()),n=t?new WeakMap:null;function i(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function r(e){const i=e.target;if(t&&!n.get(i))return;const{disabled:r}=i;r&&e.preventDefault()}const a=["mousedown","mouseup","click"];function o(e){if(t&&!n.get(e.target))return;const{disabled:i}=e.target;i&&(e.stopImmediatePropagation(),e.preventDefault())}const s={capture:!0};function c(e){if(e.disabled)return e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void l(e);u(e),e.el.removeAttribute("aria-disabled")}function l(e){var n;e.el.click=i,(n=t?d(e):e.el)&&(n.addEventListener("pointerdown",r,s),a.forEach((e=>n.addEventListener(e,o,s))))}function d(e){return n.get(e.el)}function u(e){var n;delete e.el.click,(n=t?d(e):e.el)&&(n.removeEventListener("pointerdown",r,s),a.forEach((e=>n.removeEventListener(e,o,s))))}function f(e){if(!e.disabled||!t)return;const i=e.el.parentElement||e.el;n.set(e.el,i),l(e)}function v(e){t&&(n.delete(e.el),u(e))}function m({disabled:t},n){return e("div",{class:"interaction-container",inert:t},...n)}export{m as I,f as c,v as d,c as u};
