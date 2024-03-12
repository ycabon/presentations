/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import e from"../../core/Error.js";import"../../core/lang.js";import"../../chunks/Logger.js";import"../../config.js";const l=[{scale:565,level:9},{scale:9028,level:8},{scale:72224,level:7},{scale:288896,level:6},{scale:2311163,level:5},{scale:18489298,level:4},{scale:73957191,level:3},{scale:295828764,level:2}];async function r(r){const{view:s}=await async function(l){if(!l.view)throw new e("bin-level:missing-parameters","'view' parameter is required");return await l.view.when(),{...l}}(r);return function(e){let r=2;for(const s of l)if(!(s.scale<e)){r=s.level;break}return r}(s.scale)}export{r as default};
