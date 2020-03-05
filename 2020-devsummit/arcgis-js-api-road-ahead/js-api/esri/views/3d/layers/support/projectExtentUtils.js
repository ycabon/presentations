// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/promiseUtils","../../../../geometry/support/webMercatorUtils","../../../../portal/support/geometryServiceUtils"],function(k,f,c,g,h){Object.defineProperty(f,"__esModule",{value:!0});f.toViewIfLocal=function(b){var d=b.view.spatialReference,a=b.layer.fullExtent,e=a&&a.spatialReference;return e?e.equals(d)?c.resolve(a.clone()):g.canProject(e,d)?c.resolve(g.project(a,d)):b.view.state.isLocal?h.projectGeometry(a,d,b.layer.portalItem).then(function(a){return!b.destroyed&&
a?a:void 0}).catch(function(){return null}):c.resolve(null):c.resolve(null)}});