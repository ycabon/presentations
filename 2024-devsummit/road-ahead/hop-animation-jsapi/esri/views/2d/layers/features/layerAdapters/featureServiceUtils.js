// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/has"],function(c,d){c.exceedsMinimumSnapshotCoverage=function(a,b){a=a.extent;a=b?.clone().intersection(a);a=null!=a?a.width*a.height:0;b=b?b.width*b.height:0;b=0===b?0:a/b;a=d("featurelayer-snapshot-point-coverage");return!isNaN(b)&&b>=a};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});