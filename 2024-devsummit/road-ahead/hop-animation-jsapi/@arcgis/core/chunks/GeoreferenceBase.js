/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{Clonable as r}from"../core/Clonable.js";import{L as o}from"./Logger.js";import"../core/lang.js";import"../core/Error.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import{projectOrLoad as s}from"../geometry/projection.js";let a=class extends r{projectOrWarn(e,r){if(null==e)return e;const{geometry:t,pending:a}=s(e,r);return a?null:a||t?t:(o.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:r}),null)}};a=e([t("esri.layers.support.GeoreferenceBase")],a);const c=a;export{c as G};
