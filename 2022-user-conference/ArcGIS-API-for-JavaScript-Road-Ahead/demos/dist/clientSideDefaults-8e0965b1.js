import { kH as l$1, kI as o$1, kJ as S, bo as y, S as has } from './_virtual_index-64b818a8.js';
import { t } from './QueryEngineCapabilities-140b3c8f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function o(t){return {renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?l$1:"esriGeometryPolyline"===t?o$1:S}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let n=1;function i(t,s){if(has("esri-csp-restrictions"))return ()=>({[s]:null,...t});try{let e=`this.${s} = null;`;for(const s in t){e+=`this${u.test(s)?`.${s}`:`["${s}"]`} = ${JSON.stringify(t[s])};`;}const r=new Function(`\n      return class AttributesClass$${n++} {\n        constructor() {\n          ${e};\n        }\n      }\n    `)();return ()=>new r}catch(e){return ()=>({[s]:null,...t})}}function a(s={}){return [{name:"New Feature",description:"",prototype:{attributes:y(s)}}]}function l(t$1,e){return {analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t$1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:e,supportsDelete:e,supportsEditing:e,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:e,supportsExceedsLimitStatistics:!0},query:t,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:e,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}

export { a, i, l, o };
