// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../geometry/support/webMercatorUtils","../../../../portal/support/geometryServiceUtils"],function(e,g,h){e.toViewIfLocal=function(b){const d=b.view.spatialReference,a=b.layer.fullExtent;var c=null!=a&&a.spatialReference;if(null==a||!c)return Promise.resolve(null);if(c.equals(d))return Promise.resolve(a.clone());c=g.project(a,d);return null!=c?Promise.resolve(c):b.view.state.isLocal?h.projectGeometry(a,d,b.layer.portalItem).then(f=>!b.destroyed&&f?f:null).catch(()=>null):
Promise.resolve(null)};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});