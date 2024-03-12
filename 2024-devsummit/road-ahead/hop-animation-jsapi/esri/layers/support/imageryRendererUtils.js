// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../core/lang ./RasterFunction ./rasterFormats/pixelRangeUtils ./rasterFunctions/rasterFunctionSchema ../../renderers/support/colorRampUtils ../../renderers/support/stretchRendererUtils ../../renderers/visualVariables/SizeVariable".split(" "),function(w,B,h,G,H,v,I,J){function C(a,b){for(const c in a)"raster"===c.toLowerCase()&&("RasterFunctionVariable"===a[c].type?(a[c]=b.rasterFunctionDefinition,a[c].type="RasterFunctionTemplate"):"RasterFunctionTemplate"===a[c].type&&C(a[c].arguments,
b))}function r(a){const b=B.clone(H.schema[a.functionName+"Function"]);a=a.functionArguments;for(const c in a)"raster"===c.toLowerCase()?(b.arguments[c]=r(a[c]),b.arguments[c].type="RasterFunctionTemplate"):"colormap"===c.toLowerCase()?(b.arguments[c].value=K(a[c]),b.arguments.ColorSchemeType.value=0):b.arguments[c].value=a[c];return b}function D(a){const b=a?.Raster??a?.raster;return b&&"esri.layers.support.RasterFunction"===b.declaredClass?D(b.functionArguments):a}function L(a,b){const c=new h;
c.functionName="VectorFieldRenderer";const {dataType:g,bandNames:e}=b,d="vector-uv"===g;let l;if(e&&2===e.length){var m=e.map(k=>k.toLowerCase());l=m.indexOf("magnitude");m=m.indexOf("direction")}if(-1===l||null===l)l=0,m=1;const p="arithmetic"===a.rotationType?1:2,t="flow-from"===a.flowRepresentation?0:1,q=a.visualVariables?a.visualVariables.find(k=>"Magnitude"===k.field):new J;a={magnitudeBandID:l,directionBandID:m,isUVComponents:d,referenceSystem:p,massFlowAngleRepresentation:t,symbolTileSize:50,
symbolTileSizeUnits:100,calculationMethod:"Vector Average",symbologyName:M[a.style.toLowerCase().replace("-","_")],minimumMagnitude:q.minDataValue,maximumMagnitude:q.maxDataValue,minimumSymbolSize:q.minSize,maximumSymbolSize:q.maxSize};c.functionArguments=a;a=r(c);return b.convertToRFT?h.fromJSON({rasterFunctionDefinition:a}):c}function N(a,b){const c=b.convertToRFT,g=new h;g.functionName="Stretch";var e=x[I.stretchTypeJSONDict.toJSON(a.stretchType)],d=O(a.statistics??[]);d={StretchType:e,Statistics:d,
DRA:a.dynamicRangeAdjustment,UseGamma:a.useGamma,Gamma:a.gamma,ComputeGamma:a.computeGamma};null!=a.outputMin&&(d.Min=a.outputMin);null!=a.outputMax&&(d.Max=a.outputMax);e===x.standardDeviation?(d.NumberOfStandardDeviations=a.numberOfStandardDeviations,g.outputPixelType="u8"):e===x.percentClip?(d.MinPercent=a.minPercent,d.MaxPercent=a.maxPercent,g.outputPixelType="u8"):e===x.minMax?g.outputPixelType="u8":e===x.sigmoid&&(d.SigmoidStrengthLevel=a.sigmoidStrengthLevel);g.functionArguments=d;g.variableName=
"Raster";if(a.colorRamp){d=a.colorRamp;e=new h;if(c)e.functionArguments={ColorRamp:v.getRFxArgColorRampValue(d)};else{const l=v.getColorRampName(d,!0);l?e.functionArguments={colorRampName:l}:!b.convertColorRampToColormap||"algorithmic"!==d.type&&"multipart"!==d.type?(a=a.colorRamp.toJSON(),"algorithmic"===a.type?a.algorithm=a.algorithm||"esriCIELabAlgorithm":"multipart"===a.type&&a.colorRamps?.length&&a.colorRamps.forEach(m=>m.algorithm=m.algorithm||"esriCIELabAlgorithm"),e.functionArguments={colorRamp:a}):
e.functionArguments={Colormap:v.convertColorRampToColormap(d)}}e.variableName="Raster";e.functionName="Colormap";e.functionArguments.Raster=g;return c?new h({rasterFunctionDefinition:r(e)}):e}return c?new h({rasterFunctionDefinition:r(g)}):g}function P(a,b){const c=[],g=[],e=[],d=[],{pixelType:l,rasterAttributeTable:m}=b,p=null==m?null:m.features,t=E(m);if(t&&p&&Array.isArray(p)&&a.classBreakInfos){a.classBreakInfos.forEach((f,y)=>{const u=f.symbol?.color;let z;u?.a&&null!=f.minValue&&null!=f.maxValue&&
p.forEach(F=>{null!=f.minValue&&null!=f.maxValue&&(z=F.attributes[a.field],(z>=f.minValue&&z<f.maxValue||y===a.classBreakInfos.length-1&&z>=f.minValue)&&d.push([F.attributes[t],u.r,u.g,u.b]))})});var q=l?A(d,l):d,k=new h;k.functionName="Colormap";k.functionArguments={};k.functionArguments.Colormap=q;k.variableName="Raster";return b.convertToRFT?new h({rasterFunctionDefinition:r(k)}):k}a.classBreakInfos.forEach((f,y)=>{if(null!=f.minValue&&null!=f.maxValue){var u=f.symbol&&f.symbol.color;u?.a?(0===
y?c.push(f.minValue,f.maxValue+1E-4):c.push(f.minValue+1E-4,f.maxValue+1E-4),g.push(y),d.push([y,u.r,u.g,u.b])):e.push(f.minValue,f.maxValue)}});q=l?A(d,l):d;k=new h;k.functionName="Remap";k.functionArguments={InputRanges:c,OutputValues:g,NoDataRanges:e};k.variableName="Raster";const n=new h;n.functionName="Colormap";n.functionArguments={Colormap:q,Raster:k};return b.convertToRFT?new h({rasterFunctionDefinition:r(n)}):n}function A(a,b){(b=Q.has(b)?G.getPixelValueRange(b):null)&&a.push([Math.floor(b[0]-
1),0,0,0],[Math.ceil(b[1]+1),0,0,0]);return a}function E(a){if(null!=a)return{fields:a}=a,a?.find(b=>b?.name&&"value"===b.name.toLowerCase())?.name}function R(a,b){const c=[],{pixelType:g,rasterAttributeTable:e}=b;var d=null==e?null:e.features;const l=E(e),m=a.defaultSymbol?.color?.toRgb();var p=a.uniqueValueInfos;if(p)if(!d)for(a=0;a<p.length;a++){var t=p[a];d=t.symbol?.color;t=+t.value;if(d?.a){if(isNaN(t))return null;c.push([t,d.r,d.g,d.b])}}else if(l){const q=new Map;p.forEach(n=>{const f=n.value;
n=n.symbol?.color;null!=f&&n?.a&&q.set(String(f),n.toRgb())});const k=a.field;d.forEach(({attributes:n})=>{const f=n[l];(n=q.get(String(n[k])))?c.push([f,...n]):m&&c.push([f,...m])})}p=g?A(c,g):c;a=new h;a.functionName="Colormap";a.functionArguments={};a.functionArguments.Colormap=p;a.variableName="Raster";return b.convertToRFT?new h({rasterFunctionDefinition:r(a)}):a}function O(a){const b=[];a?.forEach(c=>{Array.isArray(c)?b.push(c):null!=c.min&&null!=c.max&&b.push([c.min,c.max,c.avg||0,c.stddev||
0])});return b}function K(a){const b=[],c=[];a.forEach(g=>{b.push(g[0]);c.push(v.convertRGBATo32Bit([...g.slice(1),255]))});return{type:"RasterColormap",values:b,colors:c}}const Q=new Set("u1 u2 u4 u8 s8 u16 s16".split(" ")),M={simple_scalar:"Simple Scalar",wind_barb:"Wind Barb",single_arrow:"Single Arrow",beaufort_kn:"Beaufort Wind (Knots)",beaufort_m:"Beaufort Wind (MetersPerSecond)",ocean_current_m:"Ocean Current (MetersPerSecond)",ocean_current_kn:"Ocean Current (Knots)"},S=new Set("raster-stretch unique-value class-breaks raster-shaded-relief vector-field raster-colormap".split(" ")),
x={none:0,standardDeviation:3,histogramEqualization:4,minMax:5,percentClip:6,sigmoid:9};w.combineRenderingRules=function(a,b){if(!a||!b)return B.clone(a||b);a=B.clone(a);if(a.functionDefinition&&b.rasterFunctionDefinition){const c=b.rasterFunctionDefinition;if(c.thumbnail||c.thumbnailEx)c.thumbnail=c.thumbnailEx=void 0;C(a.functionDefinition.arguments,b);a.rasterFunctionDefinition=a.functionDefinition.toJSON()}else"none"!==b.functionName?.toLowerCase()&&(D(a.functionArguments).Raster=b);return a};
w.convertRendererToRenderingRule=function(a,b){b=b||{};switch(a.type){case "raster-stretch":return N(a,b);case "class-breaks":return P(a,b);case "unique-value":return R(a,b);case "raster-colormap":var c=b;(b=a.extractColormap())&&0!==b.length?({pixelType:a}=c,a=a?A(b,a):b,b=new h,b.functionName="Colormap",b.functionArguments={},b.functionArguments.Colormap=a,a=c.convertToRFT?new h({rasterFunctionDefinition:r(b)}):b):a=null;return a;case "vector-field":return L(a,b);case "raster-shaded-relief":c=b.convertToRFT;
if("elevation"!==b.dataType&&("generic"!==b.dataType||1!==b.bandCount||"s16"!==b.pixelType&&"s32"!==b.pixelType&&"f32"!==b.pixelType&&"f64"!==b.pixelType))a=new h;else{b=new h;b.functionName="Hillshade";var g="traditional"===a.hillshadeType?0:1,e="none"===a.scalingType?1:3,d={HillshadeType:g,SlopeType:e,ZFactor:a.zFactor};0===g&&(d.Azimuth=a.azimuth,d.Altitude=a.altitude);3===e&&(d.PSPower=a.pixelSizePower,d.PSZFactor=a.pixelSizeFactor);b.functionArguments=d;b.variableName="Raster";a.colorRamp&&(b.functionName=
"ShadedRelief",c?d.ColorRamp=v.getRFxArgColorRampValue(a.colorRamp):d.Colormap=v.convertColorRampToColormap(a.colorRamp));a=c?new h({rasterFunctionDefinition:r(b)}):b}return a;case "flow":throw Error("Unsupported rendering rule.");}};w.convertRenderingRuleToRFT=r;w.isSupportedRendererType=function(a){return S.has(a.type)};Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});