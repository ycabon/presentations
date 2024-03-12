// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/vec42 ../../../../core/libs/gl-matrix-2/factories/vec4f64 ./Object3DVisualElement ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/lib/Material ../../webgl-engine/materials/SlicePlaneMaterial".split(" "),function(b,c,d,e,f,g,h){class k extends e.Object3DVisualElement{constructor(a){super(a);this._material=null;this._renderOccluded=g.RenderOccludedFlag.OccludeAndTransparent;this._gridWidth=1;this._gridColor=d.fromValues(1,0,0,1);this._backgroundColor=d.fromValues(1,
0,0,1);this.applyProperties(a)}get renderOccluded(){return this._renderOccluded}set renderOccluded(a){a!==this._renderOccluded&&(this._renderOccluded=a,this._updateMaterial())}get gridWidth(){return this._gridWidth}set gridWidth(a){this._gridWidth!==a&&(this._gridWidth=a,this._updateMaterial())}get gridColor(){return this._gridColor}set gridColor(a){c.copy(this._gridColor,a);this._updateMaterial()}get backgroundColor(){return this._backgroundColor}set backgroundColor(a){c.copy(this._backgroundColor,
a);this._updateMaterial()}createExternalResources(){this._material=new h.SlicePlaneMaterial(this._materialParameters)}destroyExternalResources(){this._material=null}forEachExternalMaterial(a){null!=this._material&&a(this._material)}createGeometries(a){if(null!=this._material){const l=f.createSquareGeometry(this._material);a.addGeometry(l)}}get _materialParameters(){return{backgroundColor:this._backgroundColor,gridWidth:this._gridWidth,gridColor:this._gridColor,renderOccluded:this._renderOccluded,
isDecoration:this.isDecoration}}_updateMaterial(){null!=this._material&&this._material.setParameters(this._materialParameters)}}b.SlicePlaneVisualElement=k;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});