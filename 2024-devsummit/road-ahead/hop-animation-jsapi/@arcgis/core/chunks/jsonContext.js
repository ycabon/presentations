/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{urlToObject as t}from"../core/urlUtils.js";import r from"../portal/Portal.js";function e(t,r){return{...l(t,r),readResourcePaths:[]}}function o(r,e,o){const a=t(r.itemUrl);return{...l(r,e),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:a?{rootPath:a.path,writtenUrls:[]}:null,resources:o?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function l(e,o){return{origin:o,url:t(e.itemUrl),portal:e.portal||r.getDefault(),portalItem:e}}export{e as a,o as c};
