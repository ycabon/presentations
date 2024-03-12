/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{C as e}from"./CollectionFlattener.js";function t(t){return new e({getCollections:()=>[t.tables,t.layers],getChildrenFunction:e=>{const t=[];return"tables"in e&&t.push(e.tables),"layers"in e&&t.push(e.layers),t},itemFilterFunction:e=>{const t=e.parent;return!!t&&"tables"in t&&t.tables.includes(e)}})}function n(e){for(const t of e.values())t?.destroy();e.clear()}export{t as c,n as d};
