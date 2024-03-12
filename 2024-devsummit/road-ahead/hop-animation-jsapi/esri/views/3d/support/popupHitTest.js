// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../layers/support/layerUtils","../terrain/LayerClass","../../support/hitTestSelectUtils"],function(m,r,n,t){function u(a,d){const e=new Set,c=[];var g=a.basemapTerrain.numLayers(n.LayerClass.MAP);for(--g;0<=g;g--){const f=a.basemapTerrain.layerViewByIndex(g,n.LayerClass.MAP);e.add(f.layer.uid);c.push(f)}a=a.basemapTerrain.overlayManager.renderer.layers;for(const {uid:f}of a)if(a=d.get(f))e.add(f),c.push(a);c.reverse();return{layerUids:e,layerViews:c}}function v(a){const d=
new Map;for(const e of a.allLayerViews)d.set(e.layer.uid,e);return d}const w={layerUids:new Set,layerViews:[]};m.popupHitTest=async function(a,d){const {results:e,ground:c}=await t.hitTestSelectSimilarDistance(a,d),g=(!c.layer||!r.isIntegratedMeshLayer(c.layer.type))&&c.mapPoint,f=[];d=v(a);const h=g?u(a,d):w;let k=a=0;const p=()=>{const b=h.layerViews[k];g&&b&&"fetchPopupFeaturesAtLocation"in b&&f.push({mapPoint:c.mapPoint,layerView:b});++k};let l=null;for(;a<e.length||k<h.layerViews.length;){const b=
e[a];if(b&&"graphic"!==b.type)++a;else if(b){const x=h.layerUids.has(b.layer?.uid)&&b.distance===c.distance,q=d.get(b.layer?.uid);l??=b.mapPoint;k<h.layerViews.length&&(x||(b.distance??0)>c.distance)&&h.layerViews[k]!==q?p():(f.push({graphic:b.graphic,layerView:q}),++a)}else p()}l??=c.mapPoint;return{hits:f,location:l}};Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});