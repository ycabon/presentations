/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import r from"../core/Collection.js";function n(n,e,t=r){return e||(e=new t),e===n||(e.removeAll(),function(r){return r&&(Array.isArray(r)||"items"in r&&Array.isArray(r.items))}(n)?e.addMany(n):n&&e.add(n)),e}function e(r){return r}export{e as c,n as r};
