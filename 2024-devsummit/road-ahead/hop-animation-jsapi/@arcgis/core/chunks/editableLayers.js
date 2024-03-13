/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{L as e}from"./Logger.js";import{f as r}from"./unitUtils.js";import{a as t,b as i}from"./infoFor3D.js";import{g as s,h as a}from"./layerUtils2.js";function n(n){return!(!(n&&"object"==typeof n&&"loaded"in n&&n.loaded&&s(n)?.operations?.supportsEditing&&"type"in n)||"editingEnabled"in n&&!a(n)||"scene"===n.type&&!function(s){const{associatedLayer:a}=s,n=a?.infoFor3D;if(!n)return!0;const{supportedFormats:o,queryFormats:l}=n,d=t("model/gltf-binary",o)??i("glb",o);if(null==d||!l.includes(d))return e.getLogger("esri.layers.support.editableLayers").warnOnce(`SceneLayer (${s.title??"Untitled layer"}, ${s.id}) is not editable because it does not support GLB queries.`),!1;const c=s.spatialReference,p=a.spatialReference;if(!r(c,p))return e.getLogger("esri.layers.support.editableLayers").warnOnce(`SceneLayer (${s.title??"Untitled layer"}, ${s.id}) is not editable because its spatial reference (wkid:${c.wkid}) is different from its associated FeatureLayer's spatial reference (wkid:${p.wkid}).`),!1;const f=a.sourceJSON.sourceSpatialReference;return!(null!=f&&!r(f,p)&&(e.getLogger("esri.layers.support.editableLayers").warnOnce(`SceneLayer (${s.title??"Untitled layer"}, ${s.id}) is not editable because the spatial reference of its associated FeatureLayer's service (wkid:${p.wkid}) is different from its source spatial reference (wkid:${f.wkid}).`),1))}(n)||"oriented-imagery"===n.type)}export{n as i};