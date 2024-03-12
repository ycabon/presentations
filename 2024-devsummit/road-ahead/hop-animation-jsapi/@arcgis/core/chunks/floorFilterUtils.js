/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function o(o){const n=o.layer;return"floorInfo"in n&&n.floorInfo?.floorField&&"floors"in o.view?l(o.view.floors,n.floorInfo.floorField):null}function n(o,n){return"floorInfo"in n&&n.floorInfo?.floorField?l(o,n.floorInfo.floorField):null}function l(o,n){if(!o?.length)return null;const l=o.filter((o=>""!==o)).map((o=>`'${o}'`));return l.push("''"),`${n} IN (${l.join(",")}) OR ${n} IS NULL`}export{o as a,n as g};
