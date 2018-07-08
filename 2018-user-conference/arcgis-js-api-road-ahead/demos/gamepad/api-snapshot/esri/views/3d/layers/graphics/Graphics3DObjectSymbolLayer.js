// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper dojo/_base/lang dojo/errors/CancelError ../../../../Color ../../../../core/screenUtils ../../../../geometry/support/aaBoundingBox ../../../../symbols/ObjectSymbol3DLayer ./ElevationAligners ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolCommonCode ./Graphics3DSymbolLayer ./graphicUtils ./objectResourceUtils ../support/FastSymbolUpdates ../../lib/glMatrix ../../webgl-engine/Stage ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/materials/DefaultMaterial".split(" "),
function(h,r,J,A,K,B,C,k,L,M,D,t,N,q,E,u,n,m,O,f,P){var x=n.mat4d,F=n.vec3d,p=[1,1,1],v=[1,1,1,1],G=[0,0,0];h=k.fromValues(-.5,-.5,-.5,.5,.5,.5);r=k.fromValues(-.5,-.5,0,.5,.5,1);n=k.fromValues(-.5,-.5,0,.5,.5,.5);var H={sphere:h,cube:h,cylinder:r,cone:r,"inverted-cone":r,tetrahedron:n,diamond:h},I=[m.ModelContentType.MATERIAL,m.ModelContentType.TEXTURE,m.ModelContentType.GEOMETRY];return function(h){function d(){return null!==h&&h.apply(this,arguments)||this}J(d,h);d.prototype._prepareResources=
function(){var a=this.symbol,c=this._getStageIdHint();if(!this._isPropertyDriven("size")){var b=q.validateSymbolLayerSize(this.symbol);if(b){this._logWarning(b);this.reject();return}}a.resource&&a.resource.href?this._prepareModelResources(a.resource.href,c):this._preparePrimitiveResources(a.resource?a.resource.primitive:"sphere",c)};d.prototype._preparePrimitiveResources=function(a,c){var b=this.symbol;if("sphere"===a)this._geometryData=f.createPolySphereGeometry(.5,2,!0);else if("cube"===a)this._geometryData=
f.createBoxGeometry(1);else if("cylinder"===a)this._geometryData=f.createCylinderGeometry(1,.5,32,[0,0,1],[0,0,.5]);else if("cone"===a)this._geometryData=f.createConeGeometry(1,.5,15,!1),f.cgToGIS(this._geometryData);else if("inverted-cone"===a)this._geometryData=f.createConeGeometry(1,.5,15,!0),f.cgToGIS(this._geometryData);else if("tetrahedron"===a)this._geometryData=f.createTetrahedronGeometry(1),f.cgToGIS(this._geometryData);else if("diamond"===a)this._geometryData=f.createDiamondGeometry(1),
f.cgToGIS(this._geometryData);else{this._logWarning("Unknown object symbol primitive: "+a);this.reject();return}this._geometry=new O(this._geometryData,c);this._context.stage.add(m.ModelContentType.GEOMETRY,this._geometry);this._resourceBoundingBox=H[a];this._resourceSize=k.size(this._resourceBoundingBox);this._symbolSize=q.computeSizeWithResourceSize(this._resourceSize,b);a=this._getMaterialOpacity();a={specular:[0,0,0],opacity:a,transparent:1>a||this._isPropertyDriven("opacity"),instanced:["transformation"],
ambient:p,diffuse:p};var e=this.symbolContainer;if("point-3d"===e.type&&e.verticalOffset){var e=e.verticalOffset,y=e.minWorldLength,d=e.maxWorldLength;a.verticalOffset={screenLength:C.pt2px(e.screenLength),minWorldLength:y||0,maxWorldLength:null!=d?d:Infinity};a.castShadows=!1}this._context.screenSizePerspectiveEnabled&&(a.screenSizePerspective=this._context.sharedResources.screenSizePerspectiveSettings);this._isPropertyDriven("color")?a.externalColor=v:(b=b.material?B.toUnitRGBA(b.material.color):
v,a.externalColor=b);this._fastUpdates=u.initFastSymbolUpdatesState(this._context.renderer,this._supportsShaderVisualVariables(),this._fastVisualVariableConvertOptions());this._fastUpdates.enabled?(A.mixin(a,this._fastUpdates.materialParameters),a.instanced.push("featureAttribute")):this._hasPerInstanceColor()&&a.instanced.push("color");this._material=new P(a,c+"_objectmat");this._context.stage.add(m.ModelContentType.MATERIAL,this._material);this.resolve()};d.prototype._prepareModelResources=function(a,
c){var b=this,e=["transformation"];c={materialParamsMixin:{instanced:e},idHint:c,streamDataSupplier:this._context.streamDataSupplier};this._fastUpdates=u.initFastSymbolUpdatesState(this._context.renderer,this._supportsShaderVisualVariables(),this._fastVisualVariableConvertOptions());this._fastUpdates.enabled?(A.mixin(c.materialParamsMixin,this._fastUpdates.materialParameters),e.push("featureAttribute")):this._hasPerInstanceColor()&&e.push("color");e=this.symbolContainer;if("point-3d"===e.type&&e.verticalOffset){var e=
e.verticalOffset,d=e.minWorldLength,g=e.maxWorldLength;c.materialParamsMixin.verticalOffset={screenLength:C.pt2px(e.screenLength),minWorldLength:d||0,maxWorldLength:null!=g?g:Infinity};c.materialParamsMixin.castShadows=!1}this._symbolLoaderPromise=E.fetch(a,c);this._symbolLoaderPromise.then(function(a){b._symbolLoaderPromise=null;if(!b.isRejected()){var c=b._context,e=a.stageResources,d=c.stage,y=b._getExternalColorParameters(b.symbol.material),g=b._getMaterialOpacity(),f=b._isPropertyDriven("opacity"),
z=e[m.ModelContentType.MATERIAL];a.originalMaterialOpacities=Array(z.length);z.forEach(function(b,e){var d=b.getParameterValues();b.setParameterValues(y);a.originalMaterialOpacities[e]=d.opacity;e=d.opacity*g;b.setParameterValues({opacity:e,transparent:1>e||f||d.transparent});c.screenSizePerspectiveEnabled&&b.setParameterValues({screenSizePerspective:c.sharedResources.screenSizePerspectiveSettings})});I.forEach(function(a){for(var b=e[a],c=0;b&&c<b.length;c++)d.add(a,b[c])});b._resourceBoundingBox=
E.computeBoundingBox(a);b._resourceSize=k.size(b._resourceBoundingBox);b._pivotOffset=a.pivotOffset;b._symbolSize=q.computeSizeWithResourceSize(b._resourceSize,b.symbol);b._i3sModel=a;u.updateFastSymbolUpdatesState(b._fastUpdates,b._context.renderer,b._fastVisualVariableConvertOptions())&&z.forEach(function(a){return a.setParameterValues(b._fastUpdates.materialParameters)});b.resolve()}},function(a){b._symbolLoaderPromise=null;if(!b.isFulfilled()){if(!(a instanceof K)){var c="ObjectSymbol3DLayer failed to load";
a&&a.message&&(c+=" ("+a.message+")");b._logWarning(c)}b.reject()}})};d.prototype._forEachMaterial=function(a){this._i3sModel?this._i3sModel.stageResources[m.ModelContentType.MATERIAL].forEach(a):a(this._material)};d.prototype._getExternalColorParameters=function(a){var c={};this._isPropertyDriven("color")?c.externalColor=v:a&&a.color?c.externalColor=B.toUnitRGBA(a.color):(c.externalColor=v,c.colorMixMode="ignore");return c};d.prototype.destroy=function(){h.prototype.destroy.call(this);this.isFulfilled()||
this.reject();this._symbolLoaderPromise&&this._symbolLoaderPromise.cancel();var a=this._context.stage;if(this._i3sModel){var c=this._i3sModel.stageResources;I.forEach(function(b){for(var e=c[b],d=0;e&&d<e.length;d++)a.remove(b,e[d].id)})}else this._material&&a.remove(m.ModelContentType.MATERIAL,this._material.id),this._geometry&&a.remove(m.ModelContentType.GEOMETRY,this._geometry.id)};d.prototype.createGraphics3DGraphic=function(a){var c=a.graphic;if(!this._validateGeometry(c.geometry))return null;
var b=t.placePointOnGeometry(c.geometry);if(!b)return this._logWarning("unsupported geometry type for icon symbol: "+c.geometry.type),null;var e="graphic"+c.uid,d=this.getGraphicElevationContext(c);return this._createAs3DShape(c,b,a.renderingInfo,d,e,c.uid)};d.prototype.layerPropertyChanged=function(a,c,b){var e=this;if("opacity"===a){var d=this._isPropertyDriven("opacity");if(this._i3sModel){var g=this._getMaterialOpacity();this._i3sModel.stageResources[m.ModelContentType.MATERIAL].forEach(function(a,
b){b=e._i3sModel.originalMaterialOpacities[b]*g;a.setParameterValues({opacity:b,transparent:1>b||d})})}else c=this._getMaterialOpacity(),this._material.setParameterValues({opacity:c,transparent:1>c||d});return!0}if("elevationInfo"===a){this._updateElevationContext();for(var f in c){var l=c[f];if(a=b(l))l=this.getGraphicElevationContext(l.graphic),a.needsElevationUpdates=t.needsElevationUpdates3D(l.mode),a.elevationContext.set(l)}return!0}return!1};d.prototype.applyRendererDiff=function(a,c,b,e){var d=
this,g;for(g in a.diff)switch(g){case "visualVariables":if(u.updateFastSymbolUpdatesState(this._fastUpdates,c,this._fastVisualVariableConvertOptions()))this._forEachMaterial(function(a){return a.setParameterValues(d._fastUpdates.materialParameters)});else return!1;break;default:return!1}return!0};d.prototype._createAs3DShape=function(a,c,b,e,d,g){var f=this,l=null,h=null,k=this._getFastUpdateAttrValues(a);k&&(l={featureAttribute:k},h=function(a){return u.evaluateModelTransform(f._fastUpdates.materialParameters,
k,a)});!this._fastUpdates.enabled&&this._hasPerInstanceColor()&&(l=l||{},l.color=q.mixinColorAndOpacity(b.color,b.opacity));a=this._context.layer.uid;var w=x.identity();this._applyObjectRotation(b,w);this._applyObjectRotation(this.symbol,w);this._applyObjectScale(b,w);this._applyAnchor(w);if(this._i3sModel){b=this._i3sModel.stageResources[m.ModelContentType.GEOMETRY];for(var r=this._i3sModel.materialsByComponent,n=Array(b.length),p=0;p<n.length;p++)n[p]=w;d=t.createStageObjectForPoint.call(this,c,
b,r,n,l,e,d,a,g,null,h)}else d=t.createStageObjectForPoint.call(this,c,[this._geometry],[[this._material]],[w],l,e,d,a,g,null,h);if(null===d)return null;if(this._fastUpdates.enabled){var v=u.getMaterialParams(this._fastUpdates.visualVariables,this._fastVisualVariableConvertOptions());this._forEachMaterial(function(a){return a.setParameterValues(v)})}d.object.setCastShadow(!0);g=new D(this,d.object,null,null,null,M.perObjectElevationAligner,e,D.VisibilityModes.REMOVE_OBJECT);g.alignedTerrainElevation=
d.terrainElevation;g.needsElevationUpdates=t.needsElevationUpdates3D(e.mode);t.extendPointGraphicElevationContext(g,c,this._context.elevationProvider);return g};d.prototype._applyObjectScale=function(a,c){this._fastUpdates.enabled&&this._fastUpdates.customTransformation||(a=this._isPropertyDriven("size")&&a.size?a.size:this._symbolSize,a=q.computeObjectScale(a,this._symbolSize,this._resourceSize,this._context.renderCoordsHelper.unitInMeters),1===a[0]&&1===a[1]&&1===a[2]||x.scale(c,a))};d.prototype._applyObjectRotation=
function(a,c){if(!(this._fastUpdates.enabled&&this._fastUpdates.customTransformation&&a instanceof L))return q.computeObjectRotation(a.heading,a.tilt,a.roll,c)};d.prototype._computeAnchor=function(){switch(this.symbol.anchor){case "center":return F.scale(k.center(this._resourceBoundingBox),-1);case "top":var a=k.center(this._resourceBoundingBox);return[-a[0],-a[1],-this._resourceBoundingBox[5]];case "bottom":return a=k.center(this._resourceBoundingBox),[-a[0],-a[1],-this._resourceBoundingBox[2]];
default:return this._pivotOffset?F.scale(this._pivotOffset,-1,Array(3)):G}};d.prototype._applyAnchor=function(a){if(!this._fastUpdates.enabled||!this._fastUpdates.customTransformation){var c=this._computeAnchor();c&&x.translate(a,c)}};d.prototype._hasPerInstanceColor=function(){return this._isPropertyDriven("color")||this._isPropertyDriven("opacity")};d.prototype._supportsShaderVisualVariables=function(){return this._context.stage.has("instancedRendering")?!0:!1};d.prototype._fastVisualVariableConvertOptions=
function(){var a=this._resourceBoundingBox?k.size(this._resourceBoundingBox):p,c=this._resourceBoundingBox?this._computeAnchor():G,b=this._context.renderCoordsHelper.unitInMeters,d=q.computeObjectScale(this._symbolSize,this._symbolSize,this._resourceSize,b);return{modelSize:a,symbolSize:this._symbolSize||p,unitInMeters:b,transformation:{anchor:c,scale:d,rotation:[this.symbol.tilt||0,this.symbol.roll||0,this.symbol.heading||0]}}};d.PRIMITIVE_BOUNDING_BOX=H;return d}(N)});