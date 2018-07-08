// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("../../../core/watchUtils ../support/ExternalRenderer ./PanoramicAtmosphere ./RealisticAtmosphere ./SimpleAtmosphere ./Stars ../webgl-engine/lib/RenderSlot".split(" "),function(f,g,e,d,h,k,b){return g.createSubclass({declaredClass:"esri.views.3d.environment.EnvironmentRenderer",properties:{view:{},viewingMode:{dependsOn:["view.viewingMode"],get:function(){return this.get("view.viewingMode")||"global"}},atmosphereQuality:{dependsOn:["view.environment.atmosphereEnabled","view.environment.atmosphere.quality"],
get:function(){return this.get("view.environment.atmosphereEnabled")?this.get("view.environment.atmosphere.quality")||"none":"none"}},starsEnabled:{dependsOn:["view.environment.starsEnabled"],get:function(){return this.get("view.environment.starsEnabled")||!1}},transparent:{dependsOn:["view.basemapTerrain.opacity","view.basemapTerrain.wireframe"],get:function(){var a=this.get("view.basemapTerrain");return a&&a._renderer.isTransparent()}},_atmosphere:{},_stars:{},needsRender:{dependsOn:["_stars.needsRender",
"_atmosphere.needsRender"],get:function(){return!!(this._needsRender||this._atmosphere&&this._atmosphere.needsRender||this._stars&&this._stars.needsRender)}}},constructor:function(){this._slots=[b.POSTPROCESSING_ATMOSPHERE_OPAQUE,b.POSTPROCESSING_ATMOSPHERE_TRANSPARENT];this._stars=this._atmosphere=this._atmosphereReadyPromise=this._AtmosphereClass=null;this._needsRender=!0;this.notifyChange("needsRender")},initialize:function(){this.view._stage.addExternalRenderer(this._slots,this);this._basemapTerrainHandle=
f.when(this.view,"basemapTerrain",this._updateBasemapTerrain.bind(this))},destroy:function(){this._atmosphere&&(this._atmosphere.destroy(),this._atmosphere=null);this._stars&&(this._stars.destroy(),this._stars=null);this._basemapTerrainHandle&&this._basemapTerrainHandle.remove();this.view&&(this.view._stage.removeExternalRenderer(this),this.view=null)},setup:function(a){this.watch("viewingMode,atmosphereQuality,transparent,visible",this._updateAtmosphere.bind(this));this._updateAtmosphere();this.watch("starsEnabled,transparent,visible",
this._updateStars.bind(this));this._updateStars();this.watch("view.basemapTerrain.loaded",function(){this._needsRender=!0;this.notifyChange("needsRender")}.bind(this))},resetNeedsRender:function(){this._atmosphere&&(this._atmosphere.resetNeedsRender?this._atmosphere.resetNeedsRender():this._atmosphere.didRender&&(this._atmosphere.needsRender=!1,this._atmosphere.didRender=!1));this._stars&&(this._stars.resetNeedsRender?this._stars.resetNeedsRender():this._stars.didRender&&(this._stars.needsRender=
!1,this._stars.didRender=!1));this.didRender&&(this.didRender=this._needsRender=!1,this.notifyChange("needsRender"))},render:function(a){if(!this.get("view.basemapTerrain.loaded")&&"global"===this.viewingMode)return!1;if(!this._stars&&!this._atmosphere)return!0;this._stars&&this._stars.render(a);this._atmosphere&&this._atmosphere.render(a);return this._stars&&this._stars.didRender||this._atmosphere&&this._atmosphere.didRender},_updateStars:function(){var a=this._getSimpleAtmosphereSlot();this.starsEnabled&&
!this._stars?(this._stars=new k({view:this.view,slot:a}),this._stars.initializeRenderContext(this.renderContext)):!this.starsEnabled&&this._stars?(this._stars.destroy(),this._stars=null):this._stars&&(this._stars.slot=a);this._needsRender=!0;this.notifyChange("needsRender")},_updateAtmosphere:function(){var a=this._getSimpleAtmosphereSlot();this._atmosphere&&(this._atmosphere.slot=a);if(this._updateAtmosphereClass(this.renderContext)){this._needsRender=!0;this.notifyChange("needsRender");var b=function(){this._atmosphere&&
(this._atmosphere.destroy(),this._atmosphere=null)}.bind(this);if(this._AtmosphereClass){this._atmosphereReadyPromise&&(this._atmosphereReadyPromise.cancel(),this._atmosphereReadyPromise=null);var c=new this._AtmosphereClass({view:this.view,slot:a});c.initializeRenderContext(this.renderContext);this._atmosphere?this._atmosphereReadyPromise=c.when(function(){b();this._atmosphereReadyPromise=null;this._atmosphere=c}.bind(this)):this._atmosphere=c;c.when(this._updateBasemapTerrain.bind(this))}else b(),
this._updateBasemapTerrain()}},_updateAtmosphereClass:function(a){var b=this._AtmosphereClass;"none"===this.atmosphereQuality?this._AtmosphereClass=null:"high"===this.atmosphereQuality&&d.isSupported(a)?this._AtmosphereClass="local"===this.viewingMode?e:d:this._AtmosphereClass="local"===this.viewingMode?e:h;return this._AtmosphereClass!==b},_getSimpleAtmosphereSlot:function(){return this.transparent&&"global"===this.viewingMode?b.POSTPROCESSING_ATMOSPHERE_TRANSPARENT:b.POSTPROCESSING_ATMOSPHERE_OPAQUE},
_updateBasemapTerrain:function(){var a=this.get("view.basemapTerrain");a&&(a.velvetOverground=!(!this._AtmosphereClass||this._AtmosphereClass===d))}})});