// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(d,c){c.parseWhereClause=async function(a,b){const {WhereClause:e}=await new Promise((f,g)=>d(["./sql/WhereClause"],f,g));return e.create(a,b)};c.sqlAnd=function(a,b){return null!=a&&""!==a?null!=b&&""!==b?`(${a}) AND (${b})`:a:b};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});