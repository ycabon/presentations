/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function e(e,n){const{WhereClause:t}=await import("./sql/WhereClause.js").then((e=>e.W));return t.create(e,n)}function n(e,n){return null!=e&&""!==e?null!=n&&""!==n?`(${e}) AND (${n})`:e:n}export{e as parseWhereClause,n as sqlAnd};
