/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import o from"../config.js";import r from"../core/Error.js";import{s as i}from"../request.js";function p(p){if(o.apiKey&&i(p.portal.url))throw new r("save-api-key-utils:api-key-not-supported",`Saving is not supported on ${p.portal.url} when using an api key`)}export{p as v};
