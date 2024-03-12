/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const t=t=>null==t||"object"!=typeof t?[]:[..."templates"in t&&Array.isArray(t.templates)?t.templates:[],..."types"in t&&Array.isArray(t.types)?t.types.flatMap((t=>t.templates)):[]];export{t as g};
