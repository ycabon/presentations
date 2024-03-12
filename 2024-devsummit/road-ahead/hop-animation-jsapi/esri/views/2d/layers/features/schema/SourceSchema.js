// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/sql"],function(c,f){c.createFeatureSourceSchema=function(g,a,b,h,d){const k=f.sqlAnd(a.definitionExpression,null!=a.subtypeCode?`${a.subtypeField} = ${a.subtypeCode}`:null),e=a.customParameters??{};d&&(e.token=d);return{type:"feature",sourceRefreshVersion:h,service:g,tileInfoJSON:b.tileInfoJSON,availableFields:b.availableFields,dataFilter:{definitionExpression:k,gdbVersion:a.gdbVersion,historicMoment:a.historicMoment?.getTime(),outSpatialReference:b.outSpatialReference.toJSON(),
timeExtent:a.timeExtent?.toJSON(),customParameters:e}}};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});