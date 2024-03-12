/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{c as e,m as t,l as i}from"./mat4.js";import{I as r,c as a}from"./mat4f64.js";import{a as o,g as s,i as n,s as l,h as c,o as d,p,c as h,d as u,b as m,l as f}from"./vec3.js";import{f as v,c as g}from"./vec3f64.js";import{g as S,b as T}from"./sphere.js";import{d as y}from"./mathUtils2.js";import{O as _}from"./basicInterfaces.js";import{a as b,C as A}from"./ContentObject.js";import{O,a as C,r as E}from"./Geometry.js";import{a as R,i as L}from"./Util.js";import{a as D,V as x}from"./VertexAttribute.js";import P from"../core/Evented.js";import I from"../core/Handles.js";import{d as w}from"./maybe.js";import{P as j}from"../core/scheduling.js";import{O as N}from"./Octree.js";import{h as z}from"../core/lang.js";import{L as U}from"./Logger.js";import{c as F}from"./mathUtils.js";import{g as M}from"./screenUtils.js";import{j as W}from"./vec2.js";import{Z as V,c as B,O as k}from"./vec4f64.js";import{k as G}from"./frustum.js";import{c as J,d as H,f as $,i as Y}from"./lineSegment.js";import{h as Z,d as q,G as Q,g as X}from"./plane.js";import{n as K}from"./InterleavedLayout.js";import{S as ee,D as te,j as ie,b as re,a3 as ae,V as oe,I as se,c as ne,H as le,d as ce,F as de,T as pe,g as he,a0 as ue,v as me,O as fe,h as ve,M as ge,a as Se,x as Te,e as ye,m as _e,i as be,C as Ae,y as Oe,o as Ce,P as Ee,a4 as Re,s as Le,p as De,q as xe,a5 as Pe,a6 as Ie,a7 as we,a8 as je,a9 as Ne,l as ze,r as Ue,aa as Fe,A as Me,G as We,B as Ve}from"./StencilUtils.js";import{M as Be,R as ke}from"./Material.js";import{_ as Ge}from"./tslib.es6.js";import{p as Je}from"./ShaderTechniqueConfiguration.js";import{T as He,m as $e,f as Ye,o as Ze,a as qe,d as Qe,b as Xe,e as Ke,h as et}from"./OrderIndependentTransparency.js";import{g as tt}from"./interfaces5.js";import{p as it}from"./floatRGBA.js";import{g as rt}from"../core/Accessor.js";import{a as at,b as ot,m as st}from"./enums.js";import{a as nt,T as lt}from"./Texture.js";import{s as ct}from"./vec4.js";class dt extends b{get geometries(){return this._geometries}get transformation(){return this._transformation??r}set transformation(t){this._transformation=e(this._transformation??a(),t),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(t){this._shaderTransformation=t?e(this._shaderTransformation??a(),t):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}constructor(e={}){super(),this.type=A.Object,this._shaderTransformation=null,this._parentLayer=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerUid=e.layerUid,e.isElevationSource&&(this.lastValidElevationBB=new pt),this._geometries=e.geometries?Array.from(e.geometries):new Array}dispose(){this._geometries.length=0}get parentLayer(){return this._parentLayer}set parentLayer(e){R(null==this._parentLayer||null==e,"Object3D can only be added to a single Layer"),this._parentLayer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e),this._emit("geometryAdded",{object:this,geometry:e}),this._invalidateBoundingVolume()}removeGeometry(e){const t=this._geometries.splice(e,1)[0];t&&(this._emit("geometryRemoved",{object:this,geometry:t}),this._invalidateBoundingVolume())}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,t,i=!1){this._emit("attributesChanged",{object:this,geometry:e,attribute:t,sync:i}),D(t)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(const e of this._geometries)e.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new O(_.MaskOccludee);for(const t of this._geometries)t.occludees=C(t.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const t of this._geometries)t.occludees=E(t.occludees,e);this._emit("occlusionChanged",this)}highlight(){const e=new O(_.Highlight);for(const t of this._geometries)t.highlights=C(t.highlights,e);return this._emit("highlightChanged",this),e}removeHighlight(e){for(const t of this._geometries)t.highlights=E(t.highlights,e);this._emit("highlightChanged",this)}getCombinedStaticTransformation(e,i){return t(i,this.transformation,e.transformation)}getCombinedShaderTransformation(e,i=a()){return t(i,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=this._bvWorldSpace||new ht,this._validateBoundingVolume(this._bvWorldSpace,St.WorldSpace)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=this._bvObjectSpace||new ht,this._validateBoundingVolume(this._bvObjectSpace,St.ObjectSpace)),this._bvObjectSpace}_validateBoundingVolume(e,t){const i=t===St.ObjectSpace;for(const t of this._geometries){const r=t.boundingInfo;r&&ut(r,e,i?t.transformation:this.getCombinedShaderTransformation(t))}o(S(e.bounds),e.min,e.max,.5);for(const t of this._geometries){const r=t.boundingInfo;if(null==r)continue;const a=i?t.transformation:this.getCombinedShaderTransformation(t),o=y(a);s(gt,r.center,a);const l=n(gt,S(e.bounds)),c=r.radius*o;e.bounds[3]=Math.max(e.bounds[3],l+c)}}_invalidateBoundingVolume(){const e=this._bvWorldSpace?.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this._parentLayer&&e&&this._parentLayer.notifyObjectBBChanged(this,e)}_emit(e,t){this._parentLayer&&this._parentLayer.events.emit(e,t)}get test(){const e=this;return{hasGeometry:t=>e._geometries.includes(t),getGeometryIndex:t=>e._geometries.indexOf(t)}}}class pt{constructor(){this.min=v(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=v(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}}class ht extends pt{constructor(){super(...arguments),this.bounds=T()}}function ut(e,t,r){const a=e.bbMin,o=e.bbMax;if(i(r)){const e=l(mt,r[12],r[13],r[14]);c(ft,a,e),c(vt,o,e);for(let e=0;e<3;++e)t.min[e]=Math.min(t.min[e],ft[e]),t.max[e]=Math.max(t.max[e],vt[e])}else if(s(ft,a,r),d(a,o))for(let e=0;e<3;++e)t.min[e]=Math.min(t.min[e],ft[e]),t.max[e]=Math.max(t.max[e],ft[e]);else{s(vt,o,r);for(let e=0;e<3;++e)t.min[e]=Math.min(t.min[e],ft[e],vt[e]),t.max[e]=Math.max(t.max[e],ft[e],vt[e]);for(let e=0;e<3;++e){p(ft,a),p(vt,o),ft[e]=o[e],vt[e]=a[e],s(ft,ft,r),s(vt,vt,r);for(let e=0;e<3;++e)t.min[e]=Math.min(t.min[e],ft[e],vt[e]),t.max[e]=Math.max(t.max[e],ft[e],vt[e])}}}const mt=g(),ft=g(),vt=g(),gt=g();var St,Tt;!function(e){e[e.WorldSpace=0]="WorldSpace",e[e.ObjectSpace=1]="ObjectSpace"}(St||(St={})),function(e){e[e.ASYNC=0]="ASYNC",e[e.SYNC=1]="SYNC"}(Tt||(Tt={}));const yt=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];class _t extends b{get objects(){return this._objects}constructor(e,t,i=""){super(),this.stage=e,this.apiLayerUid=i,this.type=A.Layer,this.events=new P,this.visible=!0,this.pickable=!0,this.sliceable=!1,this._objects=new j,this._objectsAdded=new j,this._handles=new I,this.apiLayerUid=i,this.visible=t?.visible??!0,this.pickable=t?.pickable??!0,this.updatePolicy=t?.updatePolicy??Tt.ASYNC,this._disableOctree=t?.disableOctree??!1,e.add(this);for(const t of yt)this._handles.add(this.events.on(t,(i=>e.handleEvent(t,i))))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.remove(this),this.invalidateSpatialQueryAccelerator())}add(e){this._objects.push(e),e.parentLayer=this,this.events.emit("layerObjectAdded",{layer:this,object:e}),null!=this._octree&&this._objectsAdded.push(e)}remove(e){this._objects.removeUnordered(e)&&(e.parentLayer=null,this.events.emit("layerObjectRemoved",{layer:this,object:e}),null!=this._octree&&(this._objectsAdded.removeUnordered(e)||this._octree.remove([e])))}addMany(e){this._objects.pushArray(e);for(const t of e)t.parentLayer=this;this.events.emit("layerObjectsAdded",{layer:this,objects:e}),null!=this._octree&&this._objectsAdded.pushArray(e)}removeMany(e){const t=new Array;if(this._objects.removeUnorderedMany(e,e.length,t),0!==t.length){for(const e of t)e.parentLayer=null;if(this.events.emit("layerObjectsRemoved",{layer:this,objects:t}),null!=this._octree){for(let e=0;e<t.length;)this._objectsAdded.removeUnordered(t[e])?(t[e]=t[t.length-1],t.length-=1):++e;this._octree.remove(t)}}}sync(){this.updatePolicy!==Tt.SYNC&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,t){null==this._octree||this._objectsAdded.includes(e)||this._octree.update(e,t)}getSpatialQueryAccelerator(){return null==this._octree&&this._objects.length>50&&!this._disableOctree?(this._octree=new N((e=>e.boundingVolumeWorldSpace.bounds)),this._octree.add(this._objects.data,this._objects.length)):null!=this._octree&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded.data,this._objectsAdded.length),this._objectsAdded.clear()),this._octree}invalidateSpatialQueryAccelerator(){this._octree=w(this._octree),this._objectsAdded.clear()}}function bt(e){return null!=e&&e.type===A.Layer}var At,Ot;!function(e){e[e.Draped=0]="Draped",e[e.Screen=1]="Screen",e[e.World=2]="World",e[e.COUNT=3]="COUNT"}(At||(At={})),function(e){e[e.Center=0]="Center",e[e.Tip=1]="Tip",e[e.COUNT=2]="COUNT"}(Ot||(Ot={}));class Ct extends te{constructor(){super(...arguments),this.output=ee.Color,this.transparencyPassType=He.NONE,this.occluder=!1,this.hasSlicePlane=!1,this.writeDepth=!1,this.space=At.Screen,this.hideOnShortSegments=!1,this.hasCap=!1,this.anchor=Ot.Center,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.cullAboveGround=!1}get draped(){return this.space===At.Draped}}function Et(e,t){const i=e.vertex;i.uniforms.add(new ie("intrinsicWidth",(e=>e.width))),t.vvSize?(e.attributes.add(x.SIZEFEATUREATTRIBUTE,"float"),i.uniforms.add(new re("vvSizeMinSize",(e=>e.vvSize.minSize)),new re("vvSizeMaxSize",(e=>e.vvSize.maxSize)),new re("vvSizeOffset",(e=>e.vvSize.offset)),new re("vvSizeFactor",(e=>e.vvSize.factor))),i.code.add(tt`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(e.attributes.add(x.SIZE,"float"),i.code.add(tt`float getSize(){
return intrinsicWidth * size;
}`)),t.vvOpacity?(e.attributes.add(x.OPACITYFEATUREATTRIBUTE,"float"),i.constants.add("vvOpacityNumber","int",8),i.uniforms.add(new ae("vvOpacityValues",(e=>e.vvOpacity.values),8),new ae("vvOpacityOpacities",(e=>e.vvOpacity.opacityValues),8)),i.code.add(tt`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):i.code.add(tt`vec4 applyOpacity( vec4 color ){
return color;
}`),t.vvColor?(e.include(oe,t),e.attributes.add(x.COLORFEATUREATTRIBUTE,"float"),i.code.add(tt`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(e.attributes.add(x.COLOR,"vec4"),i.code.add(tt`vec4 getColor(){
return applyOpacity(color);
}`))}Ge([Je({count:ee.COUNT})],Ct.prototype,"output",void 0),Ge([Je({count:He.COUNT})],Ct.prototype,"transparencyPassType",void 0),Ge([Je()],Ct.prototype,"occluder",void 0),Ge([Je()],Ct.prototype,"hasSlicePlane",void 0),Ge([Je()],Ct.prototype,"writeDepth",void 0),Ge([Je({count:At.COUNT})],Ct.prototype,"space",void 0),Ge([Je()],Ct.prototype,"hideOnShortSegments",void 0),Ge([Je()],Ct.prototype,"hasCap",void 0),Ge([Je({count:Ot.COUNT})],Ct.prototype,"anchor",void 0),Ge([Je()],Ct.prototype,"hasTip",void 0),Ge([Je()],Ct.prototype,"vvSize",void 0),Ge([Je()],Ct.prototype,"vvColor",void 0),Ge([Je()],Ct.prototype,"vvOpacity",void 0),Ge([Je()],Ct.prototype,"hasOccludees",void 0),Ge([Je()],Ct.prototype,"multipassEnabled",void 0),Ge([Je()],Ct.prototype,"cullAboveGround",void 0),Ge([Je({constValue:!1})],Ct.prototype,"occlusionPass",void 0),Ge([Je({constValue:!0})],Ct.prototype,"hasVvInstancing",void 0),Ge([Je({constValue:!0})],Ct.prototype,"hasSliceTranslatedView",void 0);class Rt{constructor(e,t,i){this._createTexture=e,this._parametersKey=t,this._repository=new Map,this._orphanCache=i.newCache(`procedural-texture-repository:${rt()}`,(e=>e.dispose()))}destroy(){for(const[e,{texture:t}]of this._repository)t.dispose();this._repository.clear(),this._orphanCache.destroy()}swap(e,t=null){const i=this._acquire(e);return this.release(t),i}release(e){if(null==e)return;const t=this._parametersKey(e),i=this._repository.get(t);if(i&&(i.refCount--,0===i.refCount)){this._repository.delete(t);const{texture:e}=i,r=e.usedMemory;this._orphanCache.put(t,e,r)}}_acquire(e){if(null==e)return null;const t=this._parametersKey(e),i=this._repository.get(t);if(i)return i.refCount++,i.texture;const r=this._orphanCache.pop(t)??this._createTexture(e),a=new Lt(r);return this._repository.set(t,a),r}}class Lt{constructor(e){this.texture=e,this.refCount=1}}function Dt(e,t){return new Rt((t=>{const{encodedData:i,textureSize:r}=function(e){const t=xt(e),i=1/e.pixelRatio,r=Pt(e),a=It(e),o=(Math.floor(.5*(a-1))+.5)*i,s=[];let n=1;for(const e of t){for(let t=0;t<e;t++){const r=n*(Math.min(t,e-1-t)+.5)*i/o*.5+.5;s.push(r)}n=-n}const l=Math.round(t[0]/2),c=[...s.slice(l),...s.slice(0,l)],d=new Uint8Array(4*r);let p=0;for(const e of c)it(e,d,p),p+=4;return{encodedData:d,textureSize:r}}(t),a=new nt;return a.internalFormat=at.RGBA,a.width=r,a.height=1,a.wrapMode=ot.REPEAT,new lt(e,a,i)}),(e=>`${e.pattern.join(",")}-r${e.pixelRatio}`),t)}function xt(e){return e.pattern.map((t=>Math.round(t*e.pixelRatio)))}function Pt(e){if(null==e)return 1;const t=xt(e);return Math.floor(t.reduce(((e,t)=>e+t)))}function It(e){return xt(e).reduce(((e,t)=>Math.max(e,t)))}const wt=B();function jt(e,t){e.constants.add("stippleAlphaColorDiscard","float",.001),e.constants.add("stippleAlphaHighlightDiscard","float",.5),t.stippleEnabled?function(e,t){const i=!(t.draped&&t.stipplePreferContinuous),{vertex:r,fragment:a}=e;a.include(se),t.draped||(ne(r,t),r.uniforms.add(new ie("worldToScreenPerDistanceRatio",((e,t)=>1/t.camera.perScreenPixelRatio))),r.code.add(tt`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),e.varyings.add("vStippleDistance","float"),e.varyings.add("vStippleDistanceLimits","vec2"),e.varyings.add("vStipplePatternStretch","float"),r.code.add(tt`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${zt};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),r.code.add(tt`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),r.code.add(tt`
    if (segmentLengthPseudoScreen >= ${i?"patternLength":"1e4"}) {
  `),le(r),r.code.add(tt`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`),a.uniforms.add(new ce("stipplePatternTexture",(e=>e.stippleTexture)),new ie("stipplePatternSDFNormalizer",(e=>{return(t=e.stipplePattern)?(Math.floor(.5*(It(t)-1))+.5)/t.pixelRatio:1;var t})),new ie("stipplePatternPixelSizeInv",(e=>1/Nt(e)))),a.code.add(tt`float getStippleSDF(out bool isClamped) {
float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv * vLineSizeInv;
u = fract(u);
float encodedSDF = rgba2float(texture(stipplePatternTexture, vec2(u, 0.5)));
float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
return (sdf - 0.5) * vStipplePatternStretch + 0.5;
}
float getStippleSDF() {
bool ignored;
return getStippleSDF(ignored);
}
float getStippleAlpha() {
bool isClamped;
float stippleSDF = getStippleSDF(isClamped);
float antiAliasedResult = clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);
return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
}`),t.stippleOffColorEnabled?(a.uniforms.add(new de("stippleOffColor",(e=>{return null==(t=e.stippleOffColor)?V:4===t.length?t:ct(wt,t[0],t[1],t[2],1);var t}))),a.code.add(tt`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):a.code.add(tt`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}(e,t):function(e){e.fragment.code.add(tt`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}(e)}function Nt(e){const t=e.stipplePattern;return t?Pt(e.stipplePattern)/t.pixelRatio:1}const zt=tt.float(.4),Ut=128,Ft=.5;function Mt(e){return"cross"===e||"x"===e}function Wt(e,t=Ut,i=t*Ft,r=0){const a=Vt(e,t,i,r);return new pe(a,{mipmap:!1,wrap:{s:ot.CLAMP_TO_EDGE,t:ot.CLAMP_TO_EDGE},width:t,height:t,components:4,noUnpackFlip:!0,reloadable:!0})}function Vt(e,t=Ut,i=t*Ft,r=0){switch(e){case"circle":default:return function(e,t){const i=e/2-.5;return Ht(e,Gt(i,i,t/2))}(t,i);case"square":return function(e,t){return Bt(e,t,!1)}(t,i);case"cross":return function(e,t,i=0){return kt(e,t,!1,i)}(t,i,r);case"x":return function(e,t,i=0){return kt(e,t,!0,i)}(t,i,r);case"kite":return function(e,t){return Bt(e,t,!0)}(t,i);case"triangle":return function(e,t){return Ht(e,Jt(e/2,t,t/2))}(t,i);case"arrow":return function(e,t){const i=t,r=t/2,a=e/2,o=.8*i,s=Gt(a,(e-t)/2-o,Math.sqrt(o*o+r*r)),n=Jt(a,i,r);return Ht(e,((e,t)=>Math.max(n(e,t),-s(e,t))))}(t,i)}}function Bt(e,t,i){return i&&(t/=Math.SQRT2),Ht(e,((r,a)=>{let o=r-.5*e+.25,s=.5*e-a-.75;if(i){const e=(o+s)/Math.SQRT2;s=(s-o)/Math.SQRT2,o=e}return Math.max(Math.abs(o),Math.abs(s))-.5*t}))}function kt(e,t,i,r=0){t-=r,i&&(t*=Math.SQRT2);const a=.5*t;return Ht(e,((t,o)=>{let s,n=t-.5*e,l=.5*e-o-1;if(i){const e=(n+l)/Math.SQRT2;l=(l-n)/Math.SQRT2,n=e}return n=Math.abs(n),l=Math.abs(l),s=n>l?n>a?Math.sqrt((n-a)*(n-a)+l*l):l:l>a?Math.sqrt(n*n+(l-a)*(l-a)):n,s-=r/2,s}))}function Gt(e,t,i){return(r,a)=>{const o=r-e,s=a-t;return Math.sqrt(o*o+s*s)-i}}function Jt(e,t,i){const r=Math.sqrt(t*t+i*i);return(a,o)=>{const s=Math.abs(a-e)-i,n=o-e+t/2+.75,l=(t*s+i*n)/r,c=-n;return Math.max(l,c)}}function Ht(e,t){const i=new Uint8Array(4*e*e);for(let r=0;r<e;r++)for(let a=0;a<e;a++){const o=a+e*r;let s=t(a,r);s=s/e+.5,it(s,i,4*o)}return i}const $t=64,Yt=32,Zt=10,qt=.25;function Qt(e,t){const i=Vt(e,64,32,6.4),r=new nt;return r.internalFormat=at.RGBA,r.width=64,r.height=64,r.wrapMode=ot.CLAMP_TO_EDGE,new lt(t,r,i)}function Xt(e,t){const{vertex:i,constants:r}=e;r.add("markerSizePerLineWidth","float",10),le(i),null==i.uniforms.get("markerScale")&&i.constants.add("markerScale","float",1),i.code.add(tt`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),t.space===At.World&&(i.constants.add("maxSegmentLengthFraction","float",.45),i.uniforms.add(new ie("perRenderPixelRatio",((e,t)=>t.camera.perRenderPixelRatio))),i.code.add(tt`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`))}var Kt;!function(e){e[e.BUTT=0]="BUTT",e[e.SQUARE=1]="SQUARE",e[e.ROUND=2]="ROUND",e[e.COUNT=3]="COUNT"}(Kt||(Kt={}));class ei extends te{constructor(){super(...arguments),this.output=ee.Color,this.capType=Kt.BUTT,this.transparencyPassType=He.NONE,this.occluder=!1,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.cullAboveGround=!1,this.wireframe=!1,this.objectAndLayerIdColorInstanced=!1}}Ge([Je({count:ee.COUNT})],ei.prototype,"output",void 0),Ge([Je({count:Kt.COUNT})],ei.prototype,"capType",void 0),Ge([Je({count:He.COUNT})],ei.prototype,"transparencyPassType",void 0),Ge([Je()],ei.prototype,"occluder",void 0),Ge([Je()],ei.prototype,"hasSlicePlane",void 0),Ge([Je()],ei.prototype,"hasPolygonOffset",void 0),Ge([Je()],ei.prototype,"writeDepth",void 0),Ge([Je()],ei.prototype,"draped",void 0),Ge([Je()],ei.prototype,"stippleEnabled",void 0),Ge([Je()],ei.prototype,"stippleOffColorEnabled",void 0),Ge([Je()],ei.prototype,"stipplePreferContinuous",void 0),Ge([Je()],ei.prototype,"roundJoins",void 0),Ge([Je()],ei.prototype,"applyMarkerOffset",void 0),Ge([Je()],ei.prototype,"vvSize",void 0),Ge([Je()],ei.prototype,"vvColor",void 0),Ge([Je()],ei.prototype,"vvOpacity",void 0),Ge([Je()],ei.prototype,"falloffEnabled",void 0),Ge([Je()],ei.prototype,"innerColorEnabled",void 0),Ge([Je()],ei.prototype,"hasOccludees",void 0),Ge([Je()],ei.prototype,"multipassEnabled",void 0),Ge([Je()],ei.prototype,"cullAboveGround",void 0),Ge([Je()],ei.prototype,"wireframe",void 0),Ge([Je()],ei.prototype,"objectAndLayerIdColorInstanced",void 0),Ge([Je({constValue:!1})],ei.prototype,"occlusionPass",void 0),Ge([Je({constValue:!0})],ei.prototype,"hasVvInstancing",void 0),Ge([Je({constValue:!0})],ei.prototype,"hasSliceTranslatedView",void 0);const ti=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new he,{attributes:i,varyings:r,constants:a,vertex:o,fragment:s}=t;t.include(ue),t.include(Et,e),t.include(jt,e);const n=e.applyMarkerOffset&&!e.draped;n&&(o.uniforms.add(new ie("markerScale",(e=>e.markerScale))),t.include(Xt,{space:At.World,draped:!1})),e.output===ee.LinearDepth&&t.include(me,e),t.include(fe,e),ve(o,e),o.uniforms.add(new ge("inverseProjectionMatrix",((e,t)=>t.camera.inverseProjectionMatrix)),new Se("nearFar",((e,t)=>t.camera.nearFar)),new ie("miterLimit",(e=>"miter"!==e.join?0:e.miterLimit)),new de("viewport",((e,t)=>t.camera.fullViewport))),o.constants.add("LARGE_HALF_FLOAT","float",65500),i.add(x.POSITION,"vec3"),i.add(x.PREVPOSITION,"vec3"),i.add(x.NEXTPOSITION,"vec3"),i.add(x.SUBDIVISIONFACTOR,"float"),i.add(x.UV0,"vec2"),r.add("vColor","vec4"),r.add("vpos","vec3"),r.add("vLineDistance","float"),r.add("vLineWidth","float"),Te(t);const l=e.multipassEnabled&&(e.output===ee.Color||e.output===ee.Alpha);l&&r.add("depth","float");const c=e.stippleEnabled;c&&r.add("vLineSizeInv","float"),a.add("aaWidth","float",e.stippleEnabled?0:1);const d=e.capType===Kt.ROUND,p=e.stippleEnabled&&d,h=e.falloffEnabled||p;h&&r.add("vLineDistanceNorm","float"),d&&(r.add("vSegmentSDF","float"),r.add("vReverseSegmentSDF","float")),o.code.add(tt`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),o.code.add(tt`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),ye(t),o.code.add(tt`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      if(pos.z > -nearFar[0]) {
        //current pos behind ncp --> we need to clip
        if (!isStartVertex) {
          if(prev.z < -nearFar[0]) {
            //previous in front of ncp
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if(next.z < -nearFar[0]) {
            //next in front of ncp
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        if (prev.z > -nearFar[0]) {
          //previous behind ncp
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        if (next.z > -nearFar[0]) {
          //next behind ncp
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${l?"depth = pos.z;":""}
      linearDepth = calculateLinearDepth(nearFar,pos.z);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `),le(o),o.code.add(tt`
  void main(void) {
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;
      float lineSize = getSize();

      if (lineSize < 1.0) {
        coverage = lineSize; // convert sub-pixel coverage to alpha
        lineSize = 1.0;
      }
      lineSize += aaWidth;

      float lineWidth = lineSize * pixelRatio;
      vLineWidth = lineWidth;
      ${c?tt`vLineSizeInv = 1.0 / lineSize;`:""}

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);
  `),n&&o.code.add(tt`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),o.code.add(tt`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),(e.stippleEnabled||d)&&o.code.add(tt`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${d?tt`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),o.code.add(tt`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),e.roundJoins?o.code.add(tt`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${e.stippleEnabled?tt`min(1.0, subdivisionFactor * ${tt.float(1.5)})`:tt`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):o.code.add(tt`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);const u=e.capType!==Kt.BUTT;return o.code.add(tt`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${u?tt`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),o.code.add(tt`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = sign(uv0.y) * pos.w;

    vLineDistance =  lineWidth * lineDistNorm;
    ${h?tt`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),d&&o.code.add(tt`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),e.stippleEnabled&&(e.draped?o.uniforms.add(new ie("worldToScreenRatio",((e,t)=>1/t.screenToPCSRatio))):o.code.add(tt`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),o.code.add(tt`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),e.draped?o.code.add(tt`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):o.code.add(tt`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),o.uniforms.add(new ie("stipplePatternPixelSize",(e=>Nt(e)))),o.code.add(tt`float patternLength = lineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits *= pos.w;
vStippleDistance *= pos.w;
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`)),o.code.add(tt`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${e.wireframe&&!e.draped?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }
  }
  `),l&&t.include(_e,e),t.include(be,e),s.include(Ae),s.code.add(tt`
  void main() {
    discardBySlice(vpos);
    ${l?"terrainDepthTest(depth);":""}
  `),e.wireframe?s.code.add(tt`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(d&&s.code.add(tt`
        float sdf = min(vSegmentSDF, vReverseSegmentSDF);
        vec2 fragmentPosition = vec2(
          min(sdf, 0.0),
          vLineDistance
        ) * gl_FragCoord.w;

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${tt.float(Oe)}) {
          discard;
        }
      `),p?s.code.add(tt`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${tt.float(Oe)}, stippleCoverage);
      `):s.code.add(tt`float stippleAlpha = getStippleAlpha();`),e.output!==ee.ObjectAndLayerIdColor&&s.code.add(tt`discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);`),s.uniforms.add(new de("intrinsicColor",(e=>e.color))),s.code.add(tt`vec4 color = intrinsicColor * vColor;`),e.innerColorEnabled&&(s.uniforms.add(new de("innerColor",(e=>e.innerColor??e.color)),new ie("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio))),s.code.add(tt`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),s.code.add(tt`vec4 finalColor = blendStipple(color, stippleAlpha);`),e.falloffEnabled&&(s.uniforms.add(new ie("falloff",(e=>e.falloff))),s.code.add(tt`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)),e.stippleEnabled||s.code.add(tt`float featherStartDistance = max(vLineWidth - 2.0, 0.0);
float value = abs(vLineDistance) * gl_FragCoord.w;
float feather = (value - featherStartDistance) / (vLineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`)),s.code.add(tt`
    ${e.output===ee.ObjectAndLayerIdColor?tt`finalColor.a = 1.0;`:""}

    if (finalColor.a < ${tt.float(Oe)}) {
      discard;
    }

    ${e.output===ee.Alpha?tt`fragColor = vec4(finalColor.a);`:""}
    ${e.output===ee.Color?tt`fragColor = highlightSlice(finalColor, vpos);`:""}
    ${e.output===ee.Color&&e.transparencyPassType===He.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    ${e.output===ee.Highlight?tt`fragColor = vec4(1.0);`:""}
    ${e.output===ee.LinearDepth?tt`outputDepth(linearDepth);`:""}
    ${e.output===ee.ObjectAndLayerIdColor?tt`outputObjectAndLayerIdColor();`:""}
  }
  `),t},ribbonlineNumRoundJoinSubdivisions:1},Symbol.toStringTag,{value:"Module"})),ii=new Map([[x.POSITION,0],[x.PREVPOSITION,1],[x.NEXTPOSITION,2],[x.SUBDIVISIONFACTOR,3],[x.UV0,4],[x.COLOR,5],[x.COLORFEATUREATTRIBUTE,5],[x.SIZE,6],[x.SIZEFEATUREATTRIBUTE,6],[x.OPACITYFEATUREATTRIBUTE,7],[x.OBJECTANDLAYERIDCOLOR,8]]);class ri extends Ce{initializeProgram(e){return new Ee(e.rctx,ri.shader.get().build(this.configuration),ii)}_makePipelineState(e,t){const i=this.configuration,r=e===He.NONE,a=e===He.FrontFace,o=Re(i.output);return $e({blending:i.output===ee.Color||i.output===ee.Alpha?r?Ye:Ze(e):null,depthTest:{func:qe(e)},depthWrite:r?i.writeDepth||o?Qe:null:Xe(e),colorWrite:Ke,stencilWrite:i.hasOccludees?Le:null,stencilTest:i.hasOccludees?t?De:xe:null,polygonOffset:r||a?i.hasPolygonOffset?ai:null:et})}initializePipeline(){const e=this.configuration;if(e.occluder){const t=e.hasPolygonOffset?ai:null;this._occluderPipelineTransparent=$e({blending:Ye,polygonOffset:t,depthTest:Pe,depthWrite:null,colorWrite:Ke,stencilWrite:null,stencilTest:Ie}),this._occluderPipelineOpaque=$e({blending:Ye,polygonOffset:t,depthTest:Pe,depthWrite:null,colorWrite:Ke,stencilWrite:we,stencilTest:je}),this._occluderPipelineMaskWrite=$e({blending:null,polygonOffset:t,depthTest:Ne,depthWrite:null,colorWrite:null,stencilWrite:Le,stencilTest:De})}return this._occludeePipelineState=this._makePipelineState(this.configuration.transparencyPassType,!0),this._makePipelineState(this.configuration.transparencyPassType,!1)}get primitiveType(){return this.configuration.wireframe?st.LINES:st.TRIANGLE_STRIP}getPipeline(e,t,i){return e?this._occludeePipelineState:this.configuration.occluder?i?this._occluderPipelineTransparent:t?this._occluderPipelineOpaque:this._occluderPipelineMaskWrite:super.getPipeline()}}ri.shader=new ze(ti,(()=>Promise.resolve().then((()=>ti))));const ai={factor:0,units:-4};var oi;!function(e){e[e.LEFT_JOIN_START=-2]="LEFT_JOIN_START",e[e.LEFT_JOIN_END=-1]="LEFT_JOIN_END",e[e.LEFT_CAP_START=-4]="LEFT_CAP_START",e[e.LEFT_CAP_END=-5]="LEFT_CAP_END",e[e.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",e[e.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",e[e.RIGHT_CAP_START=4]="RIGHT_CAP_START",e[e.RIGHT_CAP_END=5]="RIGHT_CAP_END"}(oi||(oi={}));class si extends Be{constructor(e){super(e,new li),this._configuration=new ei,this.produces=new Map([[Ue.OPAQUE_MATERIAL,e=>e===ee.Highlight||e===ee.ObjectAndLayerIdColor||(e===ee.Color||e===ee.Alpha)&&this.parameters.renderOccluded===ke.OccludeAndTransparentStencil],[Ue.OPAQUE_NO_SSAO_DEPTH,e=>e===ee.LinearDepth],[Ue.OCCLUDER_MATERIAL,e=>Fe(e)&&this.parameters.renderOccluded===ke.OccludeAndTransparentStencil],[Ue.TRANSPARENT_OCCLUDER_MATERIAL,e=>Fe(e)&&this.parameters.renderOccluded===ke.OccludeAndTransparentStencil],[Ue.TRANSPARENT_MATERIAL,e=>(e===ee.Color||e===ee.Alpha)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==ke.OccludeAndTransparentStencil],[Ue.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>(e===ee.Color||e===ee.Alpha)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==ke.OccludeAndTransparentStencil],[Ue.DRAPED_MATERIAL,e=>Me(e)]]),this._vertexAttributeLocations=ii}getConfiguration(e,t){this._configuration.output=e,this._configuration.draped=t.slot===Ue.DRAPED_MATERIAL;const i=null!=this.parameters.stipplePattern&&e!==ee.Highlight;var r;return this._configuration.stippleEnabled=i,this._configuration.stippleOffColorEnabled=i&&null!=this.parameters.stippleOffColor,this._configuration.stipplePreferContinuous=i&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.roundJoins="round"===this.parameters.join,this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=null!=this.parameters.markerParameters&&(r=this.parameters.markerParameters).anchor===Ot.Tip&&r.hideOnShortSegments&&"begin-end"===r.placement&&r.worldSpace,this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&null!=this.parameters.innerColor,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.occluder=this.parameters.renderOccluded===ke.OccludeAndTransparentStencil,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.wireframe=this.parameters.wireframe,this._configuration}intersectDraped(e,t,i,r,a,o){if(!i.options.selectionMode)return;const s=e.attributes.get(x.POSITION).data,n=e.attributes.get(x.SIZE);let l=this.parameters.width;if(this.parameters.vvSize){const t=e.attributes.get(x.SIZEFEATUREATTRIBUTE).data[0];l*=F(this.parameters.vvSize.offset[0]+t*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else n&&(l*=n.data[0]);const c=r[0],d=r[1],p=(l/2+4)*e.screenToWorldRatio;let h=Number.MAX_VALUE,u=0;for(let e=0;e<s.length-5;e+=3){const t=s[e],i=s[e+1],r=c-t,a=d-i,o=s[e+3]-t,n=s[e+4]-i,l=F((o*r+n*a)/(o*o+n*n),0,1),p=o*l-r,m=n*l-a,f=p*p+m*m;f<h&&(h=f,u=e/3)}h<p*p&&a(o.dist,o.normal,u,!1)}intersect(e,t,i,r,a,o){if(!i.options.selectionMode||!e.visible)return;if(!L(t))return void U.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const s=e.attributes,d=s.get(x.POSITION).data;let v=this.parameters.width;if(this.parameters.vvSize){const e=s.get(x.SIZEFEATUREATTRIBUTE).data[0];v*=F(this.parameters.vvSize.offset[0]+e*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else s.has(x.SIZE)&&(v*=s.get(x.SIZE).data[0]);const g=i.camera,S=vi;W(S,i.point);const T=v*g.pixelRatio/2+4*g.pixelRatio;l(Ei[0],S[0]-T,S[1]+T,0),l(Ei[1],S[0]+T,S[1]+T,0),l(Ei[2],S[0]+T,S[1]-T,0),l(Ei[3],S[0]-T,S[1]-T,0);for(let e=0;e<4;e++)if(!g.unprojectFromRenderScreen(Ei[e],Ri[e]))return;q(g.eye,Ri[0],Ri[1],Li),q(g.eye,Ri[1],Ri[2],Di),q(g.eye,Ri[2],Ri[3],xi),q(g.eye,Ri[3],Ri[0],Pi);let y=Number.MAX_VALUE,_=0;const b=pi(this.parameters,s)?d.length-2:d.length-5;for(let e=0;e<b;e+=3){hi[0]=d[e]+t[12],hi[1]=d[e+1]+t[13],hi[2]=d[e+2]+t[14];const i=(e+3)%d.length;if(ui[0]=d[i]+t[12],ui[1]=d[i+1]+t[13],ui[2]=d[i+2]+t[14],Q(Li,hi)<0&&Q(Li,ui)<0||Q(Di,hi)<0&&Q(Di,ui)<0||Q(xi,hi)<0&&Q(xi,ui)<0||Q(Pi,hi)<0&&Q(Pi,ui)<0)continue;if(g.projectToRenderScreen(hi,gi),g.projectToRenderScreen(ui,Si),gi[2]<0&&Si[2]>0){h(mi,hi,ui);const e=g.frustum,t=-Q(e[G.NEAR],hi)/u(mi,X(e[G.NEAR]));m(mi,mi,t),c(hi,hi,mi),g.projectToRenderScreen(hi,gi)}else if(gi[2]>0&&Si[2]<0){h(mi,ui,hi);const e=g.frustum,t=-Q(e[G.NEAR],ui)/u(mi,X(e[G.NEAR]));m(mi,mi,t),c(ui,ui,mi),g.projectToRenderScreen(ui,Si)}else if(gi[2]<0&&Si[2]<0)continue;gi[2]=0,Si[2]=0;const r=H($(gi,Si,_i),S);r<y&&(y=r,p(Ti,hi),p(yi,ui),_=e/3)}const A=i.rayBegin,O=i.rayEnd;if(y<T*T){let e=Number.MAX_VALUE;if(Y($(Ti,yi,_i),$(A,O,bi),fi)){h(fi,fi,A);const t=f(fi);m(fi,fi,1/t),e=t/n(A,O)}o(e,fi,_,!1)}}get _layout(){const e=K().vec3f(x.POSITION).vec3f(x.PREVPOSITION).vec3f(x.NEXTPOSITION).f32(x.SUBDIVISIONFACTOR).vec2f(x.UV0);return this.parameters.vvSize?e.f32(x.SIZEFEATUREATTRIBUTE):e.f32(x.SIZE),this.parameters.vvColor?e.f32(x.COLORFEATUREATTRIBUTE):e.vec4f(x.COLOR),this.parameters.vvOpacity&&e.f32(x.OPACITYFEATUREATTRIBUTE),z("enable-feature:objectAndLayerId-rendering")&&e.vec4u8(x.OBJECTANDLAYERIDCOLOR),e}createBufferWriter(){return new ci(this._layout,this.parameters)}createGLMaterial(e){return new ni(e)}validateParameters(e){"miter"!==e.join&&(e.miterLimit=0),null!=e.markerParameters&&(e.markerScale=e.markerParameters.width/e.width)}}class ni extends We{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextureRepository.release(this._stipplePattern),this._stipplePattern=null}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==ee.Color&&this._output!==ee.Alpha||this._updateOccludeeState(e);const t=this._material.parameters.stipplePattern;return this._stipplePattern!==t&&(this._material.setParameters({stippleTexture:this._stippleTextureRepository.swap(t,this._stipplePattern)}),this._stipplePattern=t),this.ensureTechnique(ri,e)}}class li extends Ve{constructor(){super(...arguments),this.width=0,this.color=k,this.join="miter",this.cap=Kt.BUTT,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.hasOccludees=!1,this.wireframe=!1}}class ci{constructor(e,t){this.vertexBufferLayout=e,this._parameters=t,this.numJoinSubdivisions=0;const i=t.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=i;break;case"round":this.numJoinSubdivisions=1+i}}_isClosed(e){return pi(this._parameters,e.attributes)}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const t=e.attributes.get(x.POSITION).indices.length/2+1,i=this._isClosed(e);let r=i?2:4;return r+=((i?t:t-1)-(i?0:1))*(2*this.numJoinSubdivisions+4),r+=2,this._parameters.wireframe&&(r=2+4*(r-2)),r}write(e,t,i,r,a){const o=Ai,c=Oi,d=Ci,h=i.attributes.get(x.POSITION),u=h.indices,m=h.data.length/3,f=i.attributes.get(x.DISTANCETOSTART)?.data;u&&u.length!==2*(m-1)&&console.warn("RibbonLineMaterial does not support indices");const v=i.attributes.get(x.SIZEFEATUREATTRIBUTE)?.data[0]??i.attributes.get(x.SIZE)?.data[0]??1;let g=[1,1,1,1],S=0;const T=this.vertexBufferLayout.fields.has(x.COLORFEATUREATTRIBUTE);T?S=i.attributes.get(x.COLORFEATUREATTRIBUTE).data[0]:i.attributes.has(x.COLOR)&&(g=i.attributes.get(x.COLOR).data);const y=z("enable-feature:objectAndLayerId-rendering")?i.objectAndLayerIdColor:null,_=this.vertexBufferLayout.fields.has(x.OPACITYFEATUREATTRIBUTE),b=_?i.attributes.get(x.OPACITYFEATUREATTRIBUTE).data[0]:0,A=new Float32Array(r.buffer),O=z("enable-feature:objectAndLayerId-rendering")?new Uint8Array(r.buffer):null,C=this.vertexBufferLayout.stride/4;let E=a*C;const R=E;let L=0;const D=f?(e,t,i)=>L=f[i]:(e,t,i)=>L+=n(e,t),P=z("enable-feature:objectAndLayerId-rendering"),I=(e,t,i,r,a,o,s)=>{if(A[E++]=t[0],A[E++]=t[1],A[E++]=t[2],A[E++]=e[0],A[E++]=e[1],A[E++]=e[2],A[E++]=i[0],A[E++]=i[1],A[E++]=i[2],A[E++]=r,A[E++]=s,A[E++]=a,A[E++]=v,T)A[E++]=S;else{const e=Math.min(4*o,g.length-4);A[E++]=g[e],A[E++]=g[e+1],A[E++]=g[e+2],A[E++]=g[e+3]}_&&(A[E++]=b),P&&(null!=y&&(O[4*E]=y[0],O[4*E+1]=y[1],O[4*E+2]=y[2],O[4*E+3]=y[3]),E++)};E+=C,l(c,h.data[0],h.data[1],h.data[2]),e&&s(c,c,e);const w=this._isClosed(i);if(w){const t=h.data.length-3;l(o,h.data[t],h.data[t+1],h.data[t+2]),e&&s(o,o,e)}else l(d,h.data[3],h.data[4],h.data[5]),e&&s(d,d,e),I(c,c,d,1,oi.LEFT_CAP_START,0,0),I(c,c,d,1,oi.RIGHT_CAP_START,0,0),p(o,c),p(c,d);const j=w?0:1,N=w?m:m-1;for(let t=j;t<N;t++){const i=(t+1)%m*3;l(d,h.data[i],h.data[i+1],h.data[i+2]),e&&s(d,d,e),D(o,c,t),I(o,c,d,0,oi.LEFT_JOIN_END,t,L),I(o,c,d,0,oi.RIGHT_JOIN_END,t,L);const r=this.numJoinSubdivisions;for(let e=0;e<r;++e){const i=(e+1)/(r+1);I(o,c,d,i,oi.LEFT_JOIN_END,t,L),I(o,c,d,i,oi.RIGHT_JOIN_END,t,L)}I(o,c,d,1,oi.LEFT_JOIN_START,t,L),I(o,c,d,1,oi.RIGHT_JOIN_START,t,L),p(o,c),p(c,d)}w?(l(d,h.data[3],h.data[4],h.data[5]),e&&s(d,d,e),L=D(o,c,N),I(o,c,d,0,oi.LEFT_JOIN_END,j,L),I(o,c,d,0,oi.RIGHT_JOIN_END,j,L)):(L=D(o,c,N),I(o,c,c,0,oi.LEFT_CAP_END,N,L),I(o,c,c,0,oi.RIGHT_CAP_END,N,L)),di(A,R+C,A,R,C),E=di(A,E-C,A,E,C),this._parameters.wireframe&&this._addWireframeVertices(r,R,E,C)}_addWireframeVertices(e,t,i,r){const a=new Float32Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT),o=new Float32Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,i-t);let s=0;const n=e=>s=di(o,e,a,s,r);for(let e=0;e<o.length-1;e+=2*r)n(e),n(e+2*r),n(e+1*r),n(e+2*r),n(e+1*r),n(e+3*r)}}function di(e,t,i,r,a){for(let o=0;o<a;o++)i[r++]=e[t++];return r}function pi(e,t){return!!e.isClosed&&t.get(x.POSITION).indices.length>2}const hi=g(),ui=g(),mi=g(),fi=g(),vi=g(),gi=M(),Si=M(),Ti=g(),yi=g(),_i=J(),bi=J(),Ai=g(),Oi=g(),Ci=g(),Ei=[M(),M(),M(),M()],Ri=[g(),g(),g(),g()],Li=Z(),Di=Z(),xi=Z(),Pi=Z();export{Kt as C,Ot as L,Xt as M,dt as O,Rt as P,si as R,Tt as U,_t as W,Ut as a,At as b,Wt as c,Ft as d,Et as e,$t as f,Yt as g,qt as h,Ct as i,bt as j,Qt as k,Dt as l,Zt as m,Mt as r};
