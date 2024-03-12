/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{f as e}from"../widgets/Widget.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.3.0
 */const n=new WeakMap,t=new WeakMap;function a(e){t.set(e,new Promise((t=>n.set(e,t))))}function s(e){n.get(e)()}function i(e){return t.get(e)}async function o(n){return await i(n),e(n),new Promise((e=>requestAnimationFrame((()=>e()))))}export{s as a,i as b,o as c,a as s};
