/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import s from"../config.js";import t from"../request.js";import r from"../core/Error.js";import{L as o}from"./Logger.js";import{join as e}from"../core/urlUtils.js";function i(s,r){return t(a(s),r)}function a(t){if(!s.assetsPath)throw o.getLogger("esri.assets").errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new r("assets:path-not-set","config.assetsPath is not set");return e(s.assetsPath,t)}export{i as f,a as g};
