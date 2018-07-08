// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["dojo/_base/declare"],function(e){return e(null,{declaredClass:"esri.tasks.workflow.support.Util",_convertIdsToString:function(a){return this._join(a,",")},_join:function(a,b){var c="";if(a&&0<a.length)for(var c=c+a[0],d=1;d<a.length;d++)c+=b+a[d];return c},_convertToDate:function(a){return null!=a?new Date(a):null},_formatJobQueryCSV:function(a){var b="";if(a)if("string"==typeof a)b=a;else try{b=this.join(a,",")}catch(c){}return b},_formatDomainUsername:function(a){a&&0<a.length&&(a=a.replace(/\\/g,
"|"));return a}})});