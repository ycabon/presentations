// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/libs/gl-matrix-2/math/mat4 ../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ./ElevationAligners ./elevationAlignmentUtils ./featureExpressionInfoUtils ./Graphics3DObject3DGraphicLayer".split(" "),function(n,g,h,w,x,y,z,A,B){class C extends B.Graphics3DObject3DGraphicLayer{constructor(){super(...arguments);this._originalGeometries=[];this._fastTransformUpdatesEnabled=!1}get fastTransformUpdatesEnabled(){return this._fastTransformUpdatesEnabled}enableFastTransformUpdates(d,
c){if(!this._fastTransformUpdatesEnabled){this._fastTransformUpdatesEnabled=!0;var {stageObject:e}=this,a=e.geometries.slice();e.removeAllGeometries();var b=g.getTranslation(l,e.transformation);c=c.getOrigin(b);for(const f of a)b=d(f.material),b=f.instantiate({material:b}),b.localOrigin=c,e.addGeometry(b);this._originalGeometries=a}}disableFastTransformUpdates(d){if(this._fastTransformUpdatesEnabled){this._fastTransformUpdatesEnabled=!1;var {stageObject:c}=this,e=c.geometries.map(a=>d(a.material));
c.removeAllGeometries();for(let a=0;a<this._originalGeometries.length;a++){const b=this._originalGeometries[a],f=e[a];f.setParameters({modelTransformation:null});f===b.material?c.addGeometry(b):c.addGeometry(b.instantiate({material:f}))}this._originalGeometries.length=0}}updateFastLocalOrigin(d,c,e){if(this._fastTransformUpdatesEnabled){var {stageObject:a}=this;if(0!==a.geometries.length){var b=a.geometries[0].localOrigin,f=g.getTranslation(l,d),k=e.getOrigin(f);if(k!==b){var m=c?.localMatrix??h.IDENTITY;
a.shaderTransformation=null;a.transformation=d;a.geometries.forEach(p=>{p.transformation=m;p.localOrigin=k})}}}}updateTransform(d,c,e){const {stageObject:a}=this,b=c?.localMatrix??h.IDENTITY;if(this._fastTransformUpdatesEnabled){var f=a.geometries[0].transformation;c=g.multiply(q,a.transformation,f);d=g.multiply(r,d,b);f=g.multiply(t,d,g.invert(t,f));a.shaderTransformation=f;this._setFastMaterialTransformation({matA:c,matB:d})}else a.shaderTransformation=null,a.transformation=d,a.geometries.forEach(k=>
{k.transformation=b});this._fastUpdateEdgeTransform()||this.resetEdgeObject(e)}alignWithElevation(d,c,e,a){if(this._fastTransformUpdatesEnabled){null!=e&&A.setContextFeature(this.elevationContext.featureExpressionInfoContext,e);var {stageObject:b}=this;if(b.geometries[0].material.parameters.modelTransformation){e=g.multiply(q,b.transformation,b.geometries[0].transformation);var f=g.copy(D,b.effectiveTransformation);this.alignedSampledElevation=y.perObjectElevationAligner(this,this.elevationContext,
d.spatialReference,(k,m)=>z.evaluateElevationInfoAtPoint(k,d,this.elevationContext,c,m),c,f);b.shaderTransformation=f;b=g.multiply(r,f,b.geometries[0].transformation);this._setFastMaterialTransformation({matA:e,matB:b});this._fastUpdateEdgeTransform()||this.resetEdgeObject(a)}}else super.alignWithElevation(d,c,e,a)}_setFastMaterialTransformation({matA:d,matB:c}){const {stageObject:e}=this;if(0!==e.geometries.length){var a=g.fromTranslation(E,w.scale(l,e.geometries[0].localOrigin.vec3,-1));d=g.multiply(u,
a,d);c=g.multiply(v,a,c);a=g.invert(u,d);c=g.multiply(v,c,a);for(const b of e.geometries)b.material.setParameters({modelTransformation:c})}}_fastUpdateEdgeTransform(){return this._stageLayer.stage.renderer.ensureEdgeView().fastUpdateObject3DEdgesTransform(this.stageObject)}}const l=x.create(),q=h.create(),r=h.create(),D=h.create(),t=h.create(),u=h.create(),v=h.create(),E=h.create();n.Graphics3DMeshObject3DGraphicLayer=C;Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});