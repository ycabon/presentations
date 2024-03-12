/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import t from"../rest/support/AlgorithmicColorRamp.js";import r from"../rest/support/ColorRamp.js";import o from"../rest/support/MultipartColorRamp.js";const p={key:"type",base:r,typeMap:{algorithmic:t,multipart:o}};function m(r){return r?.type?"algorithmic"===r.type?t.fromJSON(r):"multipart"===r.type?o.fromJSON(r):null:null}export{m as f,p as t};
