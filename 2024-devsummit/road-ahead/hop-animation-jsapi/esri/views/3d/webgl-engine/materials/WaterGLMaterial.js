// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../core/shaderLibrary/ShaderOutput","../lib/GLMaterial","./WaterTechnique"],function(b,c,d,e){class f extends d{_updateShadowState(a){a.shadowMap.enabled!==this._material.parameters.receiveShadows&&this._material.setParameters({receiveShadows:a.shadowMap.enabled})}_updateSSRState(a){a=null!=a.ssr.lastFrameColor;a!==this._material.parameters.hasScreenSpaceReflections&&this._material.setParameters({hasScreenSpaceReflections:a})}_updateCloudsReflectionState(a){a=null!=a.cloudsFade.data;
a!==this._material.parameters.hasCloudsReflections&&this._material.setParameters({hasCloudsReflections:a})}ensureResources(a){return this._techniqueRepository.constructionContext.waterTextureRepository.ensureResources(a)}beginSlot(a){this._output===c.ShaderOutput.Color&&(this._updateShadowState(a),this._updateSSRState(a),this._updateCloudsReflectionState(a));this._material.setParameters(this._techniqueRepository.constructionContext.waterTextureRepository.passParameters);return this.ensureTechnique(e.WaterTechnique,
a)}}b.WaterGLMaterial=f;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});