/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{f as e}from"../widgets/Widget.js";import{c as t}from"./observers.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.3.0
 */const o=new Set;let s;const n={childList:!0};function r(e){s||(s=t("mutation",i)),s.observe(e.el,n)}function c(e){o.delete(e.el),i(s.takeRecords()),s.disconnect();for(const[e]of o.entries())s.observe(e,n)}function i(t){t.forEach((({target:t})=>{e(t)}))}export{r as c,c as d};
