/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{g as s}from"../widgets/Widget.js";import{g as e}from"./locale2.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.3.0
 */const n={};function t(){throw new Error("could not fetch component message bundle")}function a(s){s.messages={...s.defaultMessages,...s.messageOverrides}}async function o(s){s.defaultMessages=await c(s,s.effectiveLocale),a(s)}async function c(a,o){const{el:c}=a,i=c.tagName.toLowerCase().replace("calcite-","");return async function(e,a){const o=`${a}_${e}`;return n[o]||(n[o]=fetch(s(`./assets/${a}/t9n/messages_${e}.json`)).then((s=>(s.ok||t(),s.json()))).catch((()=>t()))),n[o]}(e(o,"t9n"),i)}async function i(s,e){s.defaultMessages=await c(s,e),a(s)}function f(s){s.onMessagesChange=u}function r(s){s.onMessagesChange=void 0}function u(){a(this)}export{f as c,r as d,o as s,i as u};
