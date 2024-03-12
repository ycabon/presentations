/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"../../../chunks/tslib.es6.js";import t from"../../../core/Accessor.js";import{d as i}from"../../../chunks/maybe.js";import{property as s}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import{L as r}from"../../../chunks/Logger.js";import{subclass as n}from"../../../core/accessorSupport/decorators/subclass.js";import{d as o}from"../../../chunks/defaultUnit.js";import{A as a}from"../../../chunks/AnalysisView3D.js";import{M as l}from"../../../chunks/interfaces4.js";import{d as c,t as u}from"../../../chunks/quantityUtils.js";import{watch as h,syncAndInitial as d,initial as m}from"../../../core/reactiveUtils.js";import{i as p,s as g,n as _,c as v,e as j,g as y,b as f,h as b}from"../../../chunks/vec3.js";import{c as w}from"../../../chunks/vec3f64.js";import{geodesicLength as k}from"../../../geometry/geometryEngine.js";import L from"../../../geometry/Polyline.js";import{canProjectWithoutEngine as P}from"../../../geometry/projection.js";import C from"../../../geometry/SpatialReference.js";import{g as S,S as E,W as O}from"../../../chunks/spatialReferenceEllipsoidUtils.js";import{p as A}from"../../../chunks/projectPointToVector.js";import{p as V}from"../../../chunks/projectPointToWGS84ComparableLonLat.js";import{isSupported as z,geodesicLengths as M,inverseGeodeticSolver as D,InverseGeodeticSolverResult as T}from"../../../geometry/support/geodesicUtils.js";import{a as x,l as R,L as U}from"../../../chunks/LineVisualElement.js";import{U as G}from"../../../chunks/UnitNormalizer.js";import{a as N}from"../../../chunks/geodesicMeasurementUtils.js";import"../../../intl.js";import{j as H,u as I,h as B,e as W,B as F,m as Q}from"../../../chunks/colorUtils2.js";import{o as q,d as J}from"../../../chunks/mathUtils.js";import{f as Z,a as $,b as K,c as X,d as Y}from"../../../chunks/quantityFormatUtils.js";import{g as ee,d as te}from"../../../chunks/screenUtils.js";import{a2 as ie,l as se}from"../../../chunks/unitUtils.js";import{d as re}from"../../../chunks/vec2.js";import{V as ne,a as oe}from"../../../chunks/interfaces6.js";import{L as ae,G as le,E as ce,m as ue}from"../../../chunks/Segment.js";import he from"../../../core/Handles.js";import{c as de}from"../../../chunks/mat4f64.js";import{c as me}from"../../../chunks/vec4.js";import{f as pe,c as ge}from"../../../chunks/vec4f64.js";import{s as _e}from"../../../chunks/plane.js";import{O as ve}from"../../../chunks/Object3DVisualElement.js";import{c as je}from"../../../chunks/GeometryUtil.js";import{M as ye,a as fe,R as be}from"../../../chunks/Material.js";import{n as we}from"../../../chunks/InterleavedLayout.js";import{g as ke,h as Le,j as Pe,F as Ce,D as Se,l as Ee,o as Oe,P as Ae,r as Ve,S as ze,G as Me}from"../../../chunks/StencilUtils.js";import{V as De}from"../../../chunks/VertexAttribute.js";import{p as Te}from"../../../chunks/ShaderTechniqueConfiguration.js";import{T as xe,m as Re,f as Ue,o as Ge,d as Ne,e as He}from"../../../chunks/OrderIndependentTransparency.js";import{g as Ie}from"../../../chunks/interfaces5.js";import{k as Be,m as We}from"../../../chunks/enums.js";import{R as Fe}from"../../../chunks/RightAngleQuadVisualElement.js";import{c as Qe}from"../../../chunks/lineStippleUtils.js";import{r as qe}from"../../../chunks/viewUtils.js";import{o as Je}from"../../../chunks/locale.js";import{f as Ze}from"../../../chunks/messages.js";import"../../../chunks/metadata.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/ObservableBase.js";import"../../../chunks/tracking.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../config.js";import"../../../chunks/ensureType.js";import"../../../chunks/getDefaultUnitForView.js";import"../../../portal/Portal.js";import"../../../kernel.js";import"../../../core/urlUtils.js";import"../../../core/JSONSupport.js";import"../../../request.js";import"../../../core/Loadable.js";import"../../../core/Promise.js";import"../../../chunks/reader.js";import"../../../geometry/Extent.js";import"../../../geometry/Geometry.js";import"../../../chunks/jsonMap.js";import"../../../chunks/assets.js";import"../../../chunks/writer.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../portal/PortalGroup.js";import"../../../portal/PortalQueryParams.js";import"../../../portal/PortalQueryResult.js";import"../../../portal/PortalUser.js";import"../../../portal/PortalFolder.js";import"../../../chunks/asyncUtils.js";import"../../../core/Collection.js";import"../../../core/Evented.js";import"../../../chunks/shared.js";import"../../../chunks/SimpleObservable.js";import"../../../chunks/common.js";import"../../../chunks/geometryEngineBase.js";import"../../../chunks/_commonjsHelpers.js";import"../../../chunks/hydrated.js";import"../../../geometry/Multipoint.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Polygon.js";import"../../../chunks/coordsUtils.js";import"../../../chunks/Axis.js";import"../../../chunks/extentUtils.js";import"../../../chunks/aaBoundingRect.js";import"../../../chunks/projectBuffer.js";import"../../../chunks/geodesicConstants.js";import"../../../geometry/support/GeographicTransformation.js";import"../../../geometry/support/GeographicTransformationStep.js";import"../../../chunks/zscale.js";import"../../../chunks/projectVectorToWGS84ComparableLonLat.js";import"../../../geometry.js";import"../../../chunks/typeUtils.js";import"../../../geometry/support/jsonUtils.js";import"../../../chunks/ElevationProvider.js";import"../../../chunks/mat4.js";import"../../../chunks/line.js";import"../../../chunks/vec2f64.js";import"../../../chunks/DoubleArray.js";import"../../../chunks/Indices.js";import"../../../chunks/ViewingMode.js";import"../../../chunks/Attribute.js";import"../../../chunks/ContentObject.js";import"../../../chunks/Geometry.js";import"../../../chunks/basicInterfaces.js";import"../../../chunks/Util.js";import"../../../chunks/triangle.js";import"../../../chunks/lineSegment.js";import"../../../chunks/doublePrecisionUtils.js";import"../../../chunks/RibbonLineMaterial.js";import"../../../chunks/sphere.js";import"../../../chunks/mathUtils2.js";import"../../../chunks/Octree.js";import"../../../chunks/frustum.js";import"../../../chunks/floatRGBA.js";import"../../../chunks/Texture.js";import"../../../chunks/date.js";import"../../../chunks/timeZoneUtils.js";import"../../../chunks/datetime.js";import"../../../Color.js";import"../../../chunks/colorUtils.js";import"../../../chunks/unitFormatUtils.js";import"../../../chunks/ByteSizeUnit.js";import"../../../chunks/Cyclical.js";import"../../../chunks/VisualElement.js";import"../../../chunks/projector.js";import"../../../chunks/widgetUtils.js";import"../../../chunks/TextOverlayItem.js";import"../../../chunks/projectVectorToVector.js";import"../../../chunks/dehydratedPoint.js";import"../../../chunks/mat3f64.js";import"../../../chunks/quatf64.js";import"../../../chunks/vec3f32.js";import"../../../chunks/aaBoundingBox.js";import"../../../chunks/BufferView.js";import"../../../chunks/types.js";import"../../../chunks/mat3.js";import"../../../chunks/BindType.js";import"../../../chunks/lengthUtils.js";import"../../../chunks/debugFlags2.js";import"../../../chunks/requestImageUtils.js";import"../../../chunks/EngineVisualElement.js";import"../../../core/Identifiable.js";import"../../../chunks/RenderGeometry.js";import"../webgl/ManagedFBO.js";import"../../../chunks/IntegerPassUniform.js";import"../../../chunks/compilerUtils.js";import"../../../chunks/axisAngleDegrees.js";import"../../../chunks/quat.js";import"../../../chunks/weather.js";import"../environment/CloudyWeather.js";import"../../../chunks/enumeration.js";import"../environment/FoggyWeather.js";import"../environment/RainyWeather.js";import"../environment/SnowyWeather.js";import"../environment/SunnyWeather.js";import"../../../chunks/RenderState.js";import"../../../chunks/RenderPlugin.js";import"../../../chunks/NestedMap.js";import"../../../chunks/Camera.js";import"../../../chunks/VertexArrayObject2.js";import"../../../chunks/VertexArrayObject.js";import"../../../chunks/Intersector.js";import"../../../chunks/Intersector2.js";import"../../../chunks/boundedPlane.js";import"../../../chunks/verticalOffsetUtils.js";import"../../../chunks/orientedBoundingBox.js";import"../../../chunks/computeTranslationToOriginAndRotation.js";import"../../../chunks/glUtil.js";import"../../../chunks/VertexElementDescriptor.js";import"../../../chunks/MemCache.js";import"../../../chunks/BufferObject.js";import"../../../chunks/Scheduler.js";import"../../../core/signal.js";import"../../../chunks/debugFlags.js";import"../../../chunks/ColorMaterial.js";import"../../../chunks/DefaultBufferWriter.js";import"../../../chunks/TriangleMaterial.js";import"../../../chunks/OutputHighlight.glsl.js";import"../../../chunks/elevationInfoUtils.js";import"../../../chunks/unitConversionUtils.js";let $e=class extends t{constructor(e){super(e),this._unitNormalizer=new G,this._tempStartPosition=w(),this._tempEndPosition=w(),this._tempCornerPosition=w()}initialize(){const e=this.view.spatialReference,t=S(e),i=t===E?O:t;this._sphericalPCPF=i;const s=P(e,i);this._unitNormalizer.spatialReference=s?i:e,this.addHandles([h((()=>({viewData:this.viewData,startPoint:this.analysis.startPoint})),(({viewData:e,startPoint:t})=>{e.elevationAlignedStartPoint=this._applyProjectionAndElevationAlignment(t)}),d),h((()=>({viewData:this.viewData,endPoint:this.analysis.endPoint})),(({viewData:e,endPoint:t})=>{e.elevationAlignedEndPoint=this._applyProjectionAndElevationAlignment(t)}),d),h((()=>({result:this._computedResult,viewData:this.viewData})),(({result:e,viewData:t})=>{t.result=e}),d)])}_applyProjectionAndElevationAlignment(e){if(null==e)return e;const{spatialReference:t,elevationProvider:i}=this.view;return x(e,t,i)??(R(this.analysis,e.spatialReference,r.getLogger(this)),null)}get _computedResult(){const{elevationAlignedStartPoint:e,elevationAlignedEndPoint:t,measurementMode:i}=this.viewData;if(null==e||null==t)return null;const s=this._euclideanDistances(e,t),r=this._geodesicDistance(e,t,s.horizontal.value),n=i===l.Geodesic||i===l.Auto&&s.horizontal.value>N?"geodesic":"euclidean";return{mode:n,distance:"euclidean"===n?s.direct:r,directDistance:s.direct,horizontalDistance:r,verticalDistance:s.vertical,geodesicDistance:r}}_euclideanDistances(e,t){const i=e.clone();i.z=t.z;const s=this._tempStartPosition,r=this._tempEndPosition,n=this._tempCornerPosition,o=this.view.spatialReference,a=this._sphericalPCPF,l=P(o,a)?a:o;A(e,s,l),A(t,r,l),A(i,n,l);const u=p(s,r),h=p(n,r),d=Math.abs(t.z-e.z),m=e=>this._unitNormalizer.normalizeDistance(e),g=m(u),_=m(h),v=m(d);return{direct:c(g,"meters"),horizontal:c(_,"meters"),vertical:c(v,"meters")}}_geodesicDistance(e,t,i){const s=e.spatialReference,r=new L({spatialReference:s});r.addPath([e,t]);const n=s.isGeographic&&z(s)?M([r],"meters")[0]:s.isWebMercator?k(r,"meters"):null,o=null!=n?n:this._fallbackGeodesicDistance(e,t,i);return c(o,"meters")}_fallbackGeodesicDistance(e,t,i){if(V(e,Ke)&&V(t,Xe)){const e=new T;return D(e,Ke,Xe,C.WGS84),e.distance}return i}};e([s()],$e.prototype,"view",void 0),e([s()],$e.prototype,"analysis",void 0),e([s()],$e.prototype,"viewData",void 0),e([s()],$e.prototype,"_computedResult",null),$e=e([n("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementController")],$e);const Ke=w(),Xe=w(),Ye=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new ke,{vertex:i,fragment:s}=t;Le(i,e),i.uniforms.add(new Pe("width",(e=>e.width))),t.attributes.add(De.POSITION,"vec3"),t.attributes.add(De.NORMAL,"vec3"),t.attributes.add(De.UV0,"vec2"),t.attributes.add(De.LENGTH,"float"),t.varyings.add("vtc","vec2"),t.varyings.add("vlength","float"),t.varyings.add("vradius","float"),i.code.add(Ie`void main(void) {
vec3 bitangent = normal;
vtc = uv0;
vlength = length;
vradius = 0.5 * width;
vec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);
gl_Position = proj * pos;
}`),s.uniforms.add(new Pe("outlineSize",(e=>e.outlineSize)),new Ce("outlineColor",(e=>e.outlineColor)),new Pe("stripeLength",(e=>e.stripeLength)),new Ce("stripeEvenColor",(e=>e.stripeEvenColor)),new Ce("stripeOddColor",(e=>e.stripeOddColor)));const r=1/Math.sqrt(2);return s.code.add(Ie`
    const float INV_SQRT2 = ${Ie.float(r)};

    vec4 arrowColor(vec2 tc, float len) {
      float d = INV_SQRT2 * (tc.x - abs(tc.y));
      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));
      d = min(d, 1.0 - abs(tc.y));

      if (d < 0.0) {
        return vec4(0.0);
      } else if (d < outlineSize) {
        return outlineColor;
      } else {
        return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;
      }
    }

    void main(void) {
      vec2 ntc = vec2(vtc.x / vradius, vtc.y);
      vec4 color = arrowColor(ntc, vlength / vradius);
      if (color.a == 0.0) {
        discard;
      }
      fragColor = color;
    }
  `),t}},Symbol.toStringTag,{value:"Module"}));class et extends Oe{constructor(e,t,i){super(e,t,i)}initializeProgram(e){return new Ae(e.rctx,et.shader.get().build(this.configuration),it)}_setPipelineState(e){const t=e===xe.NONE,i=this.configuration;return Re({blending:i.transparent?t?Ue:Ge(e):null,polygonOffset:this.configuration.polygonOffsetEnabled?{factor:0,units:-4}:null,depthTest:{func:Be.LESS},depthWrite:Ne,colorWrite:He})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}get primitiveType(){return We.TRIANGLE_STRIP}}et.shader=new Ee(Ye,(()=>Promise.resolve().then((()=>Ye))));class tt extends Se{constructor(){super(...arguments),this.polygonOffsetEnabled=!1,this.transparent=!1,this.transparencyPassType=xe.NONE}}e([Te()],tt.prototype,"polygonOffsetEnabled",void 0),e([Te()],tt.prototype,"transparent",void 0),e([Te({count:xe.COUNT})],tt.prototype,"transparencyPassType",void 0);const it=new Map([[De.POSITION,0],[De.NORMAL,1],[De.UV0,2],[De.LENGTH,3]]);class st extends ye{constructor(e){super(e,new nt),this._vertexAttributeLocations=it,this.produces=new Map([[Ve.OPAQUE_MATERIAL,e=>!this._transparent&&(e===ze.Color||e===ze.Alpha)],[Ve.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>this._transparent&&(e===ze.Color||e===ze.Alpha)]]),this._configuration=new tt}getConfiguration(e,t){return this._configuration.polygonOffsetEnabled=this.parameters.polygonOffset,this._configuration.transparent=this._transparent,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration}intersect(){}createGLMaterial(e){return new rt(e)}createBufferWriter(){return new dt}get _transparent(){const{parameters:e}=this;return e.outlineColor[3]<1||e.stripeEvenColor[3]<1||e.stripeOddColor[3]<1}}class rt extends Me{beginSlot(e){return this.ensureTechnique(et,e)}}class nt extends fe{constructor(){super(...arguments),this.width=32,this.outlineSize=.2,this.outlineColor=pe(1,.5,0,1),this.stripeEvenColor=pe(1,1,1,1),this.stripeOddColor=pe(1,.5,0,1),this.stripeLength=1,this.polygonOffset=!1}}const ot=we().vec3f(De.POSITION).vec3f(De.NORMAL).vec2f(De.UV0).f32(De.LENGTH),at=w(),lt=w(),ct=w(),ut=w(),ht=w();class dt{constructor(){this.vertexBufferLayout=ot}elementCount(e){return 2*(e.attributes.get(De.POSITION).indices.length/2+1)}write(e,t,i,s,r){const{data:n,indices:o}=i.attributes.get(De.POSITION),a=i.attributes.get(De.NORMAL).data,l=n.length/3;o&&o.length!==2*(l-1)&&console.warn("MeasurementArrowMaterial does not support indices");const c=at,u=lt,h=ct,d=ut,m=ht,f=s.position,b=s.normal,w=s.uv0;let k=0;for(let i=0;i<l;++i){const s=3*i;if(g(c,n[s],n[s+1],n[s+2]),i<l-1){const e=3*(i+1);g(u,n[e],n[e+1],n[e+2]),g(m,a[e],a[e+1],a[e+2]),_(m,m),v(h,u,c),_(h,h),j(d,m,h),_(d,d)}const o=p(c,u);e&&t&&(y(c,c,e),y(u,u,e),y(d,d,t));const L=r+2*i,P=L+1;f.setVec(L,c),f.setVec(P,c),b.setVec(L,d),b.setVec(P,d),w.set(L,0,k),w.set(L,1,-1),w.set(P,0,k),w.set(P,1,1),i<l-1&&(k+=o)}const L=s.length;for(let e=0;e<2*l;++e)L.set(r+e,k)}}class mt extends ve{constructor(e){super(e),this._arrowWidth=16,this._arrowSubdivisions=128,this._origin=w(),this._originTransform=de(),this._arrowCenter=w(),this._renderOccluded=be.OccludeAndTransparent,this._geometry=null,this._stripeLength=1,this._stripesEnabled=!0,this._color=ge(),this._contrastColor=ge(),this.applyProperties(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._arrowMaterial&&this._arrowMaterial.setParameters({renderOccluded:e}))}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this._geometryChanged()}get stripeLength(){return this._stripeLength}set stripeLength(e){this._stripeLength=e,this.attached&&this._arrowMaterial.setParameters({stripeLength:this._stripeLength})}get stripesEnabled(){return this._stripesEnabled}set stripesEnabled(e){if(this._stripesEnabled=e,this.attached){const e=this._stripesEnabled?this._contrastColor:this._color;this._arrowMaterial.setParameters({stripeEvenColor:e})}}get color(){return this._color}set color(e){H(e,this._color)||(me(this._color,e),this._updateArrowColor())}get contrastColor(){return this._contrastColor}set contrastColor(e){H(e,this._color)||(me(this._contrastColor,e),this._updateArrowColor())}createExternalResources(){const e=this._color,t=this._contrastColor,i=this._stripesEnabled?t:e;this._arrowMaterial=new st({outlineColor:e,stripeEvenColor:i,stripeOddColor:e,renderOccluded:this.renderOccluded,polygonOffset:!0,isDecoration:this.isDecoration}),this._handles=new he,this._handles.add(h((()=>this.view.state.camera),(()=>{this._viewChanged()})))}destroyExternalResources(){this._arrowMaterial=null,this._handles=i(this._handles)}forEachExternalMaterial(e){e(this._arrowMaterial)}createGeometries(e){if(null==this._geometry?.startRenderSpace||null==this._geometry.endRenderSpace)return;const t=this._createArrowGeometry(this._geometry.startRenderSpace,this._geometry.endRenderSpace,this._origin,this._geometry);t.transformation=this._originTransform,e.addGeometry(t),this._viewChanged()}_createArrowGeometry(e,t,i,s){const r=this.view.renderCoordsHelper,n=[],o=[],a=(e,t)=>{const s=_e.get();v(s,e,i),n.push(s),o.push(t)};if("euclidean"===s.type){s.eval(.5,this._arrowCenter);const i=_e.get();r.worldUpAtPosition(this._arrowCenter,i),a(e,i),a(t,i)}else{s.eval(.5,this._arrowCenter);const e=this._arrowSubdivisions+1&-2;for(let t=0;t<e;++t){const i=t/(e-1),n=_e.get(),o=_e.get();s.eval(i,n),r.worldUpAtPosition(n,o),a(n,o)}}return je(this._arrowMaterial,n,o)}_geometryChanged(){this.recreateGeometry()}_viewChanged(){if(this.view.ready&&this.attached&&null!=this._geometry){const e=this.view.state.camera.computeScreenPixelSizeAt(this._arrowCenter);this._arrowMaterial.setParameters({width:this._arrowWidth*e})}}_updateArrowColor(){if(!this.attached)return;const e=this._color,t=this._contrastColor,i=this._stripesEnabled?t:e,s=e,r=e;this._arrowMaterial.setParameters({stripeEvenColor:i,outlineColor:s,stripeOddColor:r})}}let pt=class extends t{get _parameters(){const e=this.view.effectiveTheme,{accentColor:t,textColor:i}=e,s=I(t),r=B(t,.75),n=I(W(t)),o=W(i,F.Low);return{accentColor:s,contrastColor:n,translucentAccentColor:r,triangleLineWidth:3,geodesicProjectionLineWidth:2,guideLineWidth:2,guideStippleLengthPixels:3,directLabelFontSize:16,horizontalLabelFontSize:12,verticalLabelFontSize:12,textColor:i,textBackgroundColor:Q(o,.6),textCalloutColor:Q(o,.5)}}get visible(){return this.analysisView.visible}get viewMode(){const{elevationAlignedStartPoint:e,elevationAlignedEndPoint:t}=this.analysisView;if(null==e||null==t||e.equals(t))return ne.None;const i=this.analysisView.result;if(null==i)return ne.Direct;if("geodesic"===i.mode)return this._requiresGeodesicGuideAt(this._startPosition)||this._requiresGeodesicGuideAt(this._endPosition)?ne.ProjectedGeodesic:ne.Direct;const{verticalDistance:s,horizontalDistance:r}=i,n=s.value,o=r.value;return Math.min(n/o,o/n)<this.triangleCollapseRatioThreshold?ne.Direct:ne.Triangle}get actualVisualizedMeasurement(){if(null==this.analysisView.result)switch(this.analysisView.measurementMode){case l.Auto:case l.Euclidean:default:return"euclidean";case l.Geodesic:return"geodesic"}return this.analysisView.result.mode}get allowVisualElementsOrientationChange(){return null==this._triangleOrientationOverride}set allowVisualElementsOrientationChange(e){null==this._triangleOrientationOverride!==e&&(null==this._triangleOrientationOverride?this._triangleOrientationOverride=this._actualVisualElementsOrientation:this._triangleOrientationOverride=null)}get labels(){const e="geodesic"===this.actualVisualizedMeasurement;return{direct:this._segmentLabel,horizontal:e?this._segmentLabel:this._horizontalLabel,vertical:this._verticalLabel}}constructor(e){super(e),this._segmentVisualElement=null,this._triangleVisualElement=null,this._rightAngleQuad=null,this._projectedGeodesicLine=null,this._geodesicStartHint=null,this._geodesicEndHint=null,this._segmentLabel=null,this._verticalLabel=null,this._horizontalLabel=null,this._startPosition=w(),this._endPosition=w(),this._cornerPosition=w(),this._startPositionAtSeaLevel=w(),this._endPositionAtSeaLevel=w(),this._triangleOrientationOverride=null,this.messages=null,this.loadingMessages=!0,this.visualElementOrientation=oe.Auto,this.triangleCollapseRatioThreshold=.03}initialize(){const e=this._parameters,t={attached:!0,view:this.view,isDecoration:!0},{guideLineWidth:i,guideStippleLengthPixels:s,triangleLineWidth:r,geodesicProjectionLineWidth:n,directLabelFontSize:o,verticalLabelFontSize:a,horizontalLabelFontSize:l}=e;this._segmentVisualElement=new mt({...t,geometry:null,renderOccluded:be.OccludeAndTransparent}),this._triangleVisualElement=new U({...t,width:r,renderOccluded:be.OccludeAndTransparent}),this._rightAngleQuad=new Fe({...t,renderOccluded:be.OccludeAndTransparent});const c={...t,polygonOffset:!0,renderOccluded:be.OccludeAndTransparent};this._projectedGeodesicLine=new U({...c,width:n,stipplePattern:Qe(s)}),this._geodesicStartHint=new U({...c,width:i,stipplePattern:Qe(s)}),this._geodesicEndHint=new U({...c,width:i,stipplePattern:Qe(s)}),this._segmentLabel=new ae({...t,fontSize:o}),this._verticalLabel=new ae({...t,fontSize:a}),this._horizontalLabel=new ae({...t,fontSize:l}),this.addHandles([h((()=>{const{elevationAlignedStartPoint:e,elevationAlignedEndPoint:t}=this.analysisView,i=this.view;return{view:i,camera:i.state.camera,viewMode:this.viewMode,elevationAlignedStartPoint:e,elevationAlignedEndPoint:t,orientation:this._actualVisualElementsOrientation,visualizedMeasurement:this.actualVisualizedMeasurement,stripeLength:this._measurementArrowStripeLength}}),(e=>this._updateGeometryAndViewMode(e)),d),h((()=>({visible:this.visible,viewMode:this.viewMode})),(e=>this._updateVisualElementVisibility(e)),d),h((()=>({text:this._labelsText,visualizedMeasurement:this.actualVisualizedMeasurement})),(e=>this._updateLabelText(e)),d),h((()=>({visible:this.visible,viewMode:this.viewMode})),(e=>this._updateLabelVisibility(e)),d),h((()=>this._measurementArrowStripeLength),(e=>this._updateSegmentStripeLength(e)),d),Je((async()=>this._updateMessageBundle())),h((()=>this._parameters),(({textBackgroundColor:e,textCalloutColor:t,textColor:i,translucentAccentColor:s,accentColor:r,contrastColor:n})=>{const{_segmentLabel:o,_verticalLabel:a,_horizontalLabel:l,_triangleVisualElement:c,_rightAngleQuad:u,_projectedGeodesicLine:h,_geodesicStartHint:d,_geodesicEndHint:m,_segmentVisualElement:p}=this;o.backgroundColor=e,o.calloutColor=t,o.textColor=i,a.backgroundColor=e,a.calloutColor=t,a.textColor=i,l.backgroundColor=e,l.calloutColor=t,l.textColor=i,c.color=s,u.color=s,h.color=s,d.color=s,m.color=s,p.color=r,p.contrastColor=n}),m)]),this._updateMessageBundle()}destroy(){this._segmentVisualElement=i(this._segmentVisualElement),this._triangleVisualElement=i(this._triangleVisualElement),this._rightAngleQuad=i(this._rightAngleQuad),this._projectedGeodesicLine=i(this._projectedGeodesicLine),this._geodesicStartHint=i(this._geodesicStartHint),this._geodesicEndHint=i(this._geodesicEndHint),this._segmentLabel=i(this._segmentLabel),this._verticalLabel=i(this._verticalLabel),this._horizontalLabel=i(this._horizontalLabel),this.set("view",null)}_updateVisualElementVisibility({visible:e,viewMode:t}){if(this._segmentVisualElement.visible=!1,this._triangleVisualElement.visible=!1,this._rightAngleQuad.visible=!1,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1,e)switch(t){case ne.None:break;case ne.Direct:this._segmentVisualElement.visible=!0;break;case ne.Triangle:this._segmentVisualElement.visible=!0,this._triangleVisualElement.visible=!0,this._rightAngleQuad.visible=!0;break;case ne.ProjectedGeodesic:this._segmentVisualElement.visible=!0,this._projectedGeodesicLine.visible=!0,this._geodesicStartHint.visible=!0,this._geodesicEndHint.visible=!0}}_updateGeometryAndViewMode({view:e,camera:t,viewMode:i,elevationAlignedStartPoint:s,elevationAlignedEndPoint:r,orientation:n,visualizedMeasurement:o,stripeLength:a}){const l=e.renderCoordsHelper;if(null==l||null==s||null==r||s.equals(r))return;let c=this._startPosition,u=this._endPosition;l.toRenderCoords(s,c),l.toRenderCoords(r,u);const h=n===oe.AboveSegment?1:-1,d=h*(l.getAltitude(u)-l.getAltitude(c));d<0&&(c=this._endPosition,u=this._startPosition);const m="geodesic"===o?new le(this._startPosition,this._endPosition,l.spatialReference):new ce(this._startPosition,this._endPosition);switch(this._segmentVisualElement.geometry=m,this._updateSegmentStripeLength(a),i){case ne.Direct:this._updateSegment(m,n);break;case ne.Triangle:this._updateSegmentAndTriangle({view:e,camera:t,segment:m,orientation:n,startPosition:c,endPosition:u,deltaSign:h,altitudeDelta:d});break;case ne.ProjectedGeodesic:this._updateSegmentAndProjection({view:e,orientation:n,startPosition:c,endPosition:u})}}_updateSegment(e,t){this._segmentLabel.anchor=t===oe.AboveSegment?"top":"bottom",this._segmentLabel.geometry={type:"segment",segment:e,sampleLocation:"center"}}_updateSegmentAndTriangle({view:{renderCoordsHelper:e},camera:t,segment:i,orientation:s,startPosition:r,endPosition:n,deltaSign:o,altitudeDelta:a}){const l=this._cornerPosition;e.worldUpAtPosition(r,l),f(l,l,o*Math.abs(a)),b(l,l,r),this._triangleVisualElement.geometry=[[[r[0],r[1],r[2]],[l[0],l[1],l[2]],[n[0],n[1],n[2]]]],this._rightAngleQuad.geometry={previous:r,center:l,next:n};const c=new ce(r,l),u=new ce(l,n),h=function(e,t,i,s,r){const n=_t,o=vt;r.projectToRenderScreen(i,n),r.projectToRenderScreen(t,o);const a={segment:"bottom",horizontal:"top",vertical:n[0]<o[0]?"left":"right"};{const s=jt,n=yt;if(qe(e,i,r,s),qe(e,t,r,n),re(s,n)>=gt){const e=Math.sign(s[1])===Math.sign(n[1]);a.segment=e?ue(a.vertical):a.vertical}else{const e=ft;qe(i,t,r,e),re(e,n)>=gt&&(a.segment=Math.sign(e[0])===Math.sign(n[0])?ue(a.horizontal):a.horizontal)}}if(s===oe.BelowSegment){const e=e=>"top"===e?"bottom":"top";a.segment=e(a.segment),a.horizontal=e(a.horizontal),a.vertical=e(a.vertical)}return a}(r,n,l,s,t);this._segmentLabel.anchor=h.segment,this._segmentLabel.geometry={type:"segment",segment:i,sampleLocation:"center"},this._verticalLabel.geometry={type:"segment",segment:c,sampleLocation:"center"},this._verticalLabel.anchor=h.vertical,this._horizontalLabel.geometry={type:"segment",segment:u,sampleLocation:"center"},this._horizontalLabel.anchor=h.horizontal}_updateSegmentAndProjection({view:{renderCoordsHelper:e},orientation:t,startPosition:i,endPosition:s}){e.setAltitude(this._startPositionAtSeaLevel,0,i),e.setAltitude(this._endPositionAtSeaLevel,0,s);const r=new le(this._startPositionAtSeaLevel,this._endPositionAtSeaLevel,e.spatialReference);this._projectedGeodesicLine.setGeometryFromSegment(r),this._geodesicStartHint.setGeometryFromSegment(new ce(this._startPositionAtSeaLevel,i)),this._geodesicEndHint.setGeometryFromSegment(new ce(this._endPositionAtSeaLevel,s)),this._segmentLabel.geometry={type:"segment",segment:r,sampleLocation:"center"},this._segmentLabel.anchor=t===oe.AboveSegment?"top":"bottom"}_updateLabelText({text:e,visualizedMeasurement:t}){null!=e?(this._segmentLabel.text="euclidean"===t?e.euclideanDistance:e.geodesicDistance,this._horizontalLabel.text=e.horizontalDistance,this._verticalLabel.text=e.verticalDistance):(this._segmentLabel.text=null,this._horizontalLabel.text=null,this._verticalLabel.text=null),this.notifyChange("labels")}_updateLabelVisibility({visible:e,viewMode:t}){const i=this._segmentLabel,s=this._horizontalLabel,r=this._verticalLabel;if(i.visible=!1,s.visible=!1,r.visible=!1,e)switch(t){case ne.Direct:i.visible=!0;break;case ne.Triangle:i.visible=!0,s.visible=!0,r.visible=!0;break;case ne.ProjectedGeodesic:i.visible=!0;case ne.None:}}get _labelsText(){if(this.destroyed)return null;const e=this.messages,t=this.analysisView.result;if(null==t||null==e)return null;const{directDistance:i,horizontalDistance:s,verticalDistance:r,geodesicDistance:n}=t,o=this.analysisView.unit,a=e=>({euclideanDistance:"",geodesicDistance:"",horizontalDistance:"",verticalDistance:"",...e});switch(o){case"metric":return a({euclideanDistance:i&&X(e,i),geodesicDistance:n&&X(e,n),horizontalDistance:s&&X(e,s),verticalDistance:r&&Y(e,r)});case"imperial":return a({euclideanDistance:i&&$(e,i),geodesicDistance:n&&$(e,n),horizontalDistance:s&&$(e,s),verticalDistance:r&&K(e,r)});default:return a({euclideanDistance:i&&Z(e,i,o),geodesicDistance:n&&Z(e,n,o),horizontalDistance:s&&Z(e,s,o),verticalDistance:r&&Z(e,r,o)})}}_updateSegmentStripeLength(e){const t=this._segmentVisualElement;null!=e?(t.stripeLength=e,t.stripesEnabled=!0):t.stripesEnabled=!1}get _actualVisualElementsOrientation(){if(null!=this._triangleOrientationOverride)return this._triangleOrientationOverride;const e=this.visualElementOrientation;return e===oe.Auto?this.view.state.camera.aboveGround?oe.AboveSegment:oe.BelowSegment:e}_requiresGeodesicGuideAt(e){const t=this.view;if(!t?.state)return!1;const i=t.state.camera,s=t.renderCoordsHelper;if(!s)return!1;const r=i.computeScreenPixelSizeAt(e);return s.getAltitude(e)/r>=10}get _measurementArrowStripeLength(){const{result:e,unit:t}=this.analysisView;if(null==e)return null;let i=null;const s=e.directDistance;switch(t){case"metric":i=s&&u(s,"meters");break;case"imperial":i=s&&u(s,ie(s.value,s.unit));break;default:i=s&&u(s,t)}return null==i?null:q(i.value/30)*se(1,i.unit,"meters")}_updateMessageBundle(){this.loadingMessages=!0,Ze("esri/core/t9n/Units").then((e=>{this.messages=e})).finally((()=>{this.loadingMessages=!1}))}get testData(){return{labels:this.labels,stripeLength:this._segmentVisualElement?.stripeLength}}};e([s()],pt.prototype,"_parameters",null),e([s()],pt.prototype,"_triangleOrientationOverride",void 0),e([s()],pt.prototype,"messages",void 0),e([s()],pt.prototype,"view",void 0),e([s()],pt.prototype,"analysis",void 0),e([s()],pt.prototype,"analysisView",void 0),e([s()],pt.prototype,"loadingMessages",void 0),e([s()],pt.prototype,"visible",null),e([s()],pt.prototype,"viewMode",null),e([s()],pt.prototype,"actualVisualizedMeasurement",null),e([s()],pt.prototype,"visualElementOrientation",void 0),e([s()],pt.prototype,"triangleCollapseRatioThreshold",void 0),e([s()],pt.prototype,"allowVisualElementsOrientationChange",null),e([s()],pt.prototype,"labels",null),e([s()],pt.prototype,"_labelsText",null),e([s()],pt.prototype,"_actualVisualElementsOrientation",null),e([s()],pt.prototype,"_measurementArrowStripeLength",null),pt=e([n("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementVisualization")],pt);const gt=Math.cos(J(12)),_t=ee(),vt=ee(),jt=te(),yt=te(),ft=te();let bt=class extends(a(t)){constructor(e){super(e),this.type="direct-line-measurement-view-3d",this.analysis=null,this.result=null,this.measurementMode=l.Auto,this.elevationAlignedStartPoint=null,this.elevationAlignedEndPoint=null}initialize(){const e=this.view,t=this.analysis;this._analysisVisualization=new pt({view:e,analysis:t,analysisView:this}),this._analysisController=new $e({view:e,analysis:t,viewData:this})}destroy(){this._analysisController=i(this._analysisController),this._analysisVisualization=i(this._analysisVisualization)}get updating(){return!!this._analysisVisualization?.loadingMessages}get viewMode(){return this._analysisVisualization.viewMode}get actualVisualizedMeasurement(){return this._analysisVisualization.actualVisualizedMeasurement}get visualElementOrientation(){return this._analysisVisualization.visualElementOrientation}set visualElementOrientation(e){this._analysisVisualization.visualElementOrientation=e}get allowVisualElementsOrientationChange(){return this._analysisVisualization.allowVisualElementsOrientationChange}set allowVisualElementsOrientationChange(e){this._analysisVisualization.allowVisualElementsOrientationChange=e}get triangleCollapseRatioThreshold(){return this._analysisVisualization.triangleCollapseRatioThreshold}set triangleCollapseRatioThreshold(e){this._analysisVisualization.triangleCollapseRatioThreshold=e}get directLabelText(){return this._analysisVisualization.labels.direct?.text??""}get horizontalLabelText(){return this._analysisVisualization.labels.horizontal?.text??""}get verticalLabelText(){return this._analysisVisualization.labels.vertical?.text??""}get unit(){return this.analysis.unit??this._defaultUnit}get testData(){return this.destroyed?{labels:null,stripeLength:null,visualization:null,controller:null}:{...this._analysisVisualization?.testData,visualization:this._analysisVisualization,controller:this._analysisController}}};e([s()],bt.prototype,"updating",null),e([s({readOnly:!0})],bt.prototype,"type",void 0),e([s({constructOnly:!0,nonNullable:!0})],bt.prototype,"analysis",void 0),e([s()],bt.prototype,"result",void 0),e([s()],bt.prototype,"measurementMode",void 0),e([s()],bt.prototype,"elevationAlignedStartPoint",void 0),e([s()],bt.prototype,"elevationAlignedEndPoint",void 0),e([s({readOnly:!0})],bt.prototype,"viewMode",null),e([s({readOnly:!0})],bt.prototype,"actualVisualizedMeasurement",null),e([s()],bt.prototype,"visualElementOrientation",null),e([s()],bt.prototype,"allowVisualElementsOrientationChange",null),e([s()],bt.prototype,"triangleCollapseRatioThreshold",null),e([s({readOnly:!0})],bt.prototype,"directLabelText",null),e([s({readOnly:!0})],bt.prototype,"horizontalLabelText",null),e([s({readOnly:!0})],bt.prototype,"verticalLabelText",null),e([s()],bt.prototype,"_analysisVisualization",void 0),e([s()],bt.prototype,"_analysisController",void 0),e([s()],bt.prototype,"unit",null),e([s(o)],bt.prototype,"_defaultUnit",void 0),bt=e([n("esri.views.3d.analysis.DirectLineMeasurementAnalysisView3D")],bt);const wt=bt;export{wt as default};
