/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import e from"../rest/support/Query.js";async function r(e,r,u){r=r.clone(),e.capabilities.query.supportsMaxRecordCountFactor&&(r.maxRecordCountFactor=a(e));const n=t(e),o=e.capabilities.query.supportsPagination;r.start=0,r.num=n;let s=null;for(;;){const t=await e.source.queryFeaturesJSON(r,u);if(null==s?s=t:s.features=s.features.concat(t.features),s.exceededTransferLimit=t.exceededTransferLimit,!o||!t.exceededTransferLimit)break;r.start+=n}return s}function t(e){return a(e)*function(e){return e.capabilities.query.maxRecordCount||2e3}(e)}function a(r){return r.capabilities.query.supportsMaxRecordCountFactor?e.MAX_MAX_RECORD_COUNT_FACTOR:1}export{t as g,r as q};
