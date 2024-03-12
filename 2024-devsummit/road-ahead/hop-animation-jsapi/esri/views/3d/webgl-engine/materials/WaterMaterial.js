// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/has ../../../../core/time ../../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../core/libs/gl-matrix-2/factories/vec4f64 ../core/shaderLibrary/ShaderOutput ../lib/AnimationTimer ../lib/Material ../lib/OrderIndependentTransparency ../lib/RenderSlot ./DefaultBufferWriter ./DefaultLayouts ./TriangleMaterial ./WaterGLMaterial ./WaterTechnique".split(" "),function(e,h,k,l,m,n,c,p,q,r,d,t,f,u,v,w){class x extends u.TriangleMaterial{constructor(b){super(b,
new g);this._configuration=new w.WaterTechniqueConfiguration;this._animation=new p.AnimationTimer;this.produces=new Map([[d.RenderSlot.OPAQUE_MATERIAL,a=>c.isColorOrAlpha(a)&&!this.parameters.transparent||c.isOIDorHighlight(a)],[d.RenderSlot.TRANSPARENT_MATERIAL,a=>c.isColorOrAlpha(a)&&this.parameters.transparent||c.isOIDorHighlight(a)],[d.RenderSlot.DRAPED_MATERIAL,a=>this.parameters.draped&&a===c.ShaderOutput.Color||c.isOIDorHighlight(a)],[d.RenderSlot.DRAPED_WATER,a=>a===c.ShaderOutput.Normal]])}getConfiguration(b,
a){this._configuration.output=b;this._configuration.writeDepth=!0;this._configuration.receiveShadows=this.parameters.receiveShadows;this._configuration.hasSlicePlane=this.parameters.hasSlicePlane;this._configuration.transparent=this.parameters.transparent;this._configuration.hasScreenSpaceReflections=this.parameters.hasScreenSpaceReflections;this._configuration.hasCloudsReflections=this.parameters.hasCloudsReflections;this._configuration.draped=this.parameters.draped;this._configuration.transparencyPassType=
a.transparencyPassType;this._configuration.enableOffset=a.camera.relativeElevation<r.OITPolygonOffsetLimit;this._configuration.multipassEnabled=a.multipassEnabled;this._configuration.cullAboveGround=a.multipassTerrain.cullAboveGround;return this._configuration}update(b){this._animation.enabled=35E3>Math.sqrt(this.parameters.waveTextureRepeat/this.parameters.waveStrength)*Math.min(b.camera.relativeElevation,b.camera.distance);b=this._animation.advance(b);this.setParameters({timeElapsed:k.secondsFromMilliseconds(this._animation.time)*
this.parameters.animationSpeed},!1);return this._animation.enabled&&b}createGLMaterial(b){return new v.WaterGLMaterial(b)}createBufferWriter(){return new t.DefaultBufferWriter(h("enable-feature:objectAndLayerId-rendering")?f.PositionUVLayoutObjectAndLayerId:f.PositionUVLayout)}get test(){return{animationEnabled:this._animation.enabled}}}class g extends q.MaterialParameters{constructor(){super(...arguments);this.waveStrength=.06;this.waveTextureRepeat=32;this.waveDirection=l.fromValues(1,0);this.waveVelocity=
.05;this.flowStrength=.015;this.flowOffset=-.5;this.animationSpeed=.35;this.timeElapsed=0;this.color=n.fromValues(0,0,0,0);this.transparent=!0;this.draped=this.hasSlicePlane=!1;this.receiveShadows=!0;this.hasCloudsReflections=this.hasScreenSpaceReflections=!1;this.origin=m.create();this.modelTransformation=null}}e.WaterMaterial=x;e.WaterMaterialParameters=g;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});