/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import r from"../core/Error.js";const e="aggregateCount";function i(e,i){if(!e.view)throw new r(`${i}:missing-parameters`,"'view' parameter is required for binning");if(e.sqlExpression)throw new r(`${i}:invalid-parameters`,"'sqlExpression' parameter is not supported for binning");if("3d"===e.view.type)throw new r(`${i}:invalid-parameters`,"3d view is not supported for binning")}export{e as a,i as v};
