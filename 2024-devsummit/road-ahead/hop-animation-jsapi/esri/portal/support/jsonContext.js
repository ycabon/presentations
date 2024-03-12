// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/urlUtils","../Portal"],function(c,d,g){function e(a,b){return{origin:b,url:d.urlToObject(a.itemUrl),portal:a.portal||g.getDefault(),portalItem:a}}c.createForItemRead=function(a,b){return{...e(a,b),readResourcePaths:[]}};c.createForItemWrite=function(a,b,h){const f=d.urlToObject(a.itemUrl);return{...e(a,b),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:f?{rootPath:f.path,writtenUrls:[]}:null,resources:h?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:
null}};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});