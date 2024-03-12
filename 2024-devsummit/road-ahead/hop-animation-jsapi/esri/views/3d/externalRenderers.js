// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/libs/gl-matrix-2/factories/mat4f64","../../geometry/projection/computeTranslationToOriginAndRotation","../../geometry/projection/projectBuffer","./webgl/ExternalRendererStore"],function(c,u,v,k,w){function l(a,d){m.add(a,d)}function n(a,d){m.remove(a,d)}function p(a){a._stage.renderView.requestRender()}function q(a,d,e,b,g,f,h){b=b||a.spatialReference;return k.projectBuffer(d,b,e,g,a.renderCoordsHelper.spatialReference,f,h)?g:null}function r(a,d,e,b,g,f,h){f=f||a.spatialReference;
return k.projectBuffer(d,a.renderCoordsHelper.spatialReference,e,b,f,g,h)?b:null}function t(a,d,e,b){b||=u.create();e=e||a.spatialReference;return v.computeTranslationToOriginAndRotation(e,d,b,a.renderCoordsHelper.spatialReference)?b:null}const m=new w.ExternalRendererStore;c.add=l;c.bind=function(a){return{add:l.bind(this,a),remove:n.bind(this,a),requestRender:p.bind(this,a),toRenderCoordinates:q.bind(this,a),fromRenderCoordinates:r.bind(this,a),renderCoordinateTransformAt:t.bind(this,a)}};c.fromRenderCoordinates=
r;c.getRenderCamera=function(a){return a.state.camera.clone()};c.remove=n;c.renderCoordinateTransformAt=t;c.requestRender=p;c.toRenderCoordinates=q;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});