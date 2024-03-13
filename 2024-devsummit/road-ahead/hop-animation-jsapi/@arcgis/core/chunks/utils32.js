/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.3.0
 */
const t={container:"container",containerHover:"container--hover",containerBorder:"container--border",containerBorderSelected:"container--border-selected",containerBorderUnselected:"container--border-unselected",contentContainer:"content-container",contentContainerSelectable:"content-container--selectable",contentContainerHasCenterContent:"content-container--has-center-content",nestedContainer:"nested-container",nestedContainerHidden:"nested-container--hidden",content:"content",customContent:"custom-content",actionsStart:"actions-start",contentStart:"content-start",label:"label",description:"description",contentEnd:"content-end",contentBottom:"content-bottom",actionsEnd:"actions-end",selectionContainer:"selection-container",selectionContainerSingle:"selection-container--single",openContainer:"open-container",dragContainer:"drag-container"},e={actionsStart:"actions-start",contentStart:"content-start",content:"content",contentBottom:"content-bottom",contentEnd:"content-end",actionsEnd:"actions-end"},n=0,o={selectedMultiple:"check-square-f",selectedSingle:"bullet-point-large",unselectedMultiple:"square",unselectedSingle:"bullet-point-large",closedLTR:"chevron-right",closedRTL:"chevron-left",open:"chevron-down",blank:"blank",close:"x"},c="data-test-active",a="calcite-list",r="calcite-list-item";function i(t){return Array.from(t.assignedElements({flatten:!0}).filter((t=>t.matches(a))))}function s(t){const e=t.assignedElements({flatten:!0}),n=e.filter((t=>t?.matches("calcite-list-item-group"))).map((t=>Array.from(t.querySelectorAll(r)))).reduce(((t,e)=>[...t,...e]),[]),o=e.filter((t=>t?.matches(r)));return[...e.filter((t=>t?.matches(a))).map((t=>Array.from(t.querySelectorAll(r)))).reduce(((t,e)=>[...t,...e]),[]),...n,...o]}function l(t){t.forEach((e=>{e.setPosition=t.indexOf(e)+1,e.setSize=t.length}))}function d(t,e=!1){const n=e?"ancestor::calcite-list-item | ancestor::calcite-list-item-group":"ancestor::calcite-list-item";return document.evaluate(n,t,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}export{t as C,o as I,n as M,e as S,c as a,s as b,i as c,d as g,l as u};