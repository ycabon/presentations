/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{z as e}from"./dom.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.3.0
 */const t="CALCITE-COMBOBOX-ITEM",n="CALCITE-COMBOBOX-ITEM-GROUP",i=`${t}, ${n}`,l={chipInvisible:"chip--invisible",selectionDisplayFit:"selection-display-fit",selectionDisplaySingle:"selection-display-single",listContainer:"list-container"};function o(e){const t=e.parentElement?.closest(i),n=t?.parentElement?.closest(i);return[t,n].filter((e=>e))}function s(e){return e.ancestors?.filter((e=>"CALCITE-COMBOBOX-ITEM"===e.nodeName))||[]}function c(t){return e(t.querySelectorAll("calcite-combobox-item"))}function a(t){return e(t.querySelectorAll("calcite-combobox-item")).filter((e=>e.selected)).length>0}function r(e){return document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group",e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}function u(e){return e.includes("single")}export{l as C,i as a,c as b,t as c,n as d,o as e,r as f,s as g,a as h,u as i};
