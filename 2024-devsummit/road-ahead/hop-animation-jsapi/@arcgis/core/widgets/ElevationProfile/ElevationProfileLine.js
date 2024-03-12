/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import t from"../../Color.js";import{z as o}from"../../core/lang.js";import i from"../../core/Evented.js";import{h as s}from"../../chunks/handleUtils.js";import{m as r}from"../../chunks/memoize.js";import{watch as n,syncAndInitial as l,sync as a}from"../../core/reactiveUtils.js";import{g as p}from"../../chunks/uuid.js";import{property as u}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/Logger.js";import{subclass as c}from"../../core/accessorSupport/decorators/subclass.js";import m from"../../geometry/Point.js";import{l as h,g as d,x as v}from"../../chunks/unitUtils.js";import{b as f}from"../../chunks/vec4f64.js";import{R as j}from"../../chunks/Material.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/ensureType.js";import"../../config.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/asyncUtils.js";import"../../core/Collection.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../geometry/SpatialReference.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/interfaces5.js";import"../../chunks/basicInterfaces.js";import"../../chunks/ContentObject.js";import"../../chunks/VertexAttribute.js";import"../../chunks/aaBoundingBox.js";import"../../geometry/Extent.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/ViewingMode.js";import"../../chunks/Util.js";import"../../chunks/vec2f64.js";import"../../chunks/vec4.js";var g,y;!function(e){e.Disabled="disabled",e.Ready="ready",e.Creating="creating",e.Created="created",e.Selecting="selecting",e.Selected="selected"}(g||(g={})),function(e){e.NoValidInput="no-valid-input",e.NoVisibleProfiles="no-visible-profiles",e.InvalidGeometry="invalid-geometry",e.TooComplex="too-complex",e.InvalidElevationInfo="invalid-elevation-info",e.UnknownError="unknown-error",e.RefinedButNoChartData="refined-but-no-chart-data",e.None="none"}(y||(y={}));let k={noDataValue:-5e5,defaultQueryOptions:()=>({noDataValue:k.noDataValue,demResolution:"auto",maximumAutoTileRequests:150,ignoreInvisibleLayers:!0}),updateThrottleMillis:100,delayAfterPreviewMillis:500,defaultDemResolution:h(10,"centimeters","meters"),densificationMaxSamples:3e3,largeChartSamples:1e4,maxTotalSamples:1e5,maxChartRatio:300,minSlopeSampleDistance:10,formatPrecision:1,portraitModePixelBreakpoint:400,profileLinesStyle3D:{width:3,outlineSize:0,falloff:0,outlineColor:f([1,1,1,0]),renderOccluded:j.Opaque},hoveredPointsStyle:{size:14,borderStyle:"solid",borderWidth:3,borderColor:"#ffffff",boxShadow:"0px 0px 0px 5px rgba(255,255,255,0.2)"}};function b(){return k}const S=" ― ",x={progress:1,hasZ:!1,samples:[],statistics:null,spatialReference:null};function w(e,t,o){return null==e?null:h(e*t,"meters",o)}function E(e,t,o){return null==e?null:h(e*t,"meters",o)}let P=class extends i.EventedAccessor{constructor(e){super(e),this.type=null,this.id=p(),this.title=null,this.color=new t("#000000"),this.visible=!0,this._getSamplesMemoized=r(((e,t)=>function(e,t){if(null==e||null==t)return null;const{samples:o,spatialReference:i}=e,{distance:s,elevation:r}=t,n=d(i),l=v(i),a=o.length,p=new Array(a);for(let e=0;e<a;++e){const t=o[e],i=t.sampledZ,a=t.coordinate;p[e]={x:a[0],y:a[1],z:i,distance:w(t.distance,n,s),elevation:E(i,l,r)}}return p}(e,t))),this._getStatisticsMemoized=r(((e,t)=>function(e,t){if(null==e||null==t||null==e.statistics||null==e.spatialReference)return null;const{distance:o,elevation:i}=t,{statistics:s,spatialReference:r}=e,n=d(r),l=v(r);return{maxDistance:w(s.maxDistance,n,o),minElevation:E(s.minElevation,l,i),maxElevation:E(s.maxElevation,l,i),avgElevation:E(s.avgElevation,l,i),elevationGain:E(s.elevationGain,l,i),elevationLoss:E(s.elevationLoss,l,i),maxPositiveSlope:s.maxPositiveSlope,maxNegativeSlope:s.maxNegativeSlope,avgPositiveSlope:s.avgPositiveSlope,avgNegativeSlope:s.avgNegativeSlope}}(e,t))),this.viewVisualizationEnabled=!0,this.result=null,this.effectiveUnits=null,this.numSamplesForPreview=30,this.numSamplesPerChunk=200,this.chartFillEnabled=!0,this.chartStrokeWidth=1.5,this.chartStrokeOffsetY=0,this._viewModel=null}get progress(){return null!=this.result&&this.visible?this.result.progress:0}get samples(){return this._getSamplesMemoized(this.result,this.effectiveUnits)}get statistics(){return this._getStatisticsMemoized(this.result,this.effectiveUnits)}get hoveredPoint(){const e=this._viewModel?.hoveredChartPosition;return null!=e?this._getPoint(e):null}get available(){return!0}get hasZ(){const e=this.result;return null!=e&&e.hasZ}get minDemResolution(){return b().defaultDemResolution}queryElevation(){throw new Error("not implemented")}attach(e){return this._viewModel=e,s([n((()=>e.effectiveUnits),(e=>{this.effectiveUnits=e}),l),n((()=>[e.input]),(()=>this._onChange()),a)])}toggleVisibility(e){this.visible=void 0===e?!this.visible:e}_onChange(){this.emit("change")}_getPoint(e){const{samples:t,result:i}=this;if(null==t||null==i)return null;const s=t.length;if(0===s)return null;const r=t[s-1].distance,n=o(t,e*r,(e=>e.distance));if(null==n)return null;const{x:l,y:a,z:p}=n;return null==p?null:new m({x:l,y:a,z:p,spatialReference:i.spatialReference})}};e([u({nonNullable:!0})],P.prototype,"id",void 0),e([u({nonNullable:!0})],P.prototype,"title",void 0),e([u({type:t,nonNullable:!0})],P.prototype,"color",void 0),e([u({nonNullable:!0})],P.prototype,"visible",void 0),e([u({readOnly:!0})],P.prototype,"progress",null),e([u({readOnly:!0})],P.prototype,"samples",null),e([u({readOnly:!0})],P.prototype,"statistics",null),e([u()],P.prototype,"hoveredPoint",null),e([u()],P.prototype,"viewVisualizationEnabled",void 0),e([u()],P.prototype,"available",null),e([u()],P.prototype,"result",void 0),e([u()],P.prototype,"effectiveUnits",void 0),e([u()],P.prototype,"numSamplesForPreview",void 0),e([u()],P.prototype,"numSamplesPerChunk",void 0),e([u()],P.prototype,"chartFillEnabled",void 0),e([u()],P.prototype,"chartStrokeWidth",void 0),e([u()],P.prototype,"chartStrokeOffsetY",void 0),e([u({readOnly:!0})],P.prototype,"hasZ",null),e([u({readOnly:!0})],P.prototype,"minDemResolution",null),e([u()],P.prototype,"_viewModel",void 0),P=e([c("esri.widgets.ElevationProfile.ElevationProfileLine")],P);const R=P;export{g as E,y as a,R as default,x as e,b as g,S as n};
