// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../rasterRenderers ../../core/arrayUtils ../../core/lang ./RasterFunction ../../renderers/support/colorRampUtils ../../renderers/support/stretchRendererUtils".split(" "),function(E,m,t,y,u,l,v,z){function w(a){var b=a.Raster;return b&&"esri.layers.support.RasterFunction"===b.declaredClass?w(b.functionArguments):a}function A(a,b){var d=[],f=[],e=[],g=[],h=b.pixelType,c=(b=b.rasterAttributeTable)&&b.features,n=x(b);if(c&&Array.isArray(c)&&a.classBreakInfos)return a.classBreakInfos.forEach(function(b,
d){var e=b.symbol.color,f;e.a&&c.forEach(function(c){f=c.attributes[a.field];(f>=b.minValue&&f<b.maxValue||d===a.classBreakInfos.length-1&&f>=b.minValue)&&g.push([c.attributes[n],e.r,e.g,e.b])})}),h=h?r(g,h):g,b=new l,b.functionName="Colormap",b.functionArguments={},b.functionArguments.Colormap=h,b.variableName="Raster",b;a.classBreakInfos.forEach(function(a,b){var c=a.symbol&&a.symbol.color;c.a?(0===b?d.push(a.minValue,a.maxValue+1E-6):d.push(a.minValue+1E-6,a.maxValue+1E-6),f.push(b),g.push([b,
c.r,c.g,c.b])):e.push(a.minValue,a.maxValue)});h=h?r(g,h):g;b=new l;b.functionName="Remap";b.functionArguments={InputRanges:d,OutputValues:f,NoDataRanges:e};b.variableName="Raster";var k=new l;k.functionName="Colormap";k.functionArguments={Colormap:h,Raster:b};return k}function r(a,b){(b=B[String(b).toLowerCase()])&&a.push([Math.floor(b[0]-1),0,0,0],[Math.ceil(b[1]+1),0,0,0]);return a}function x(a){if(a)return(a=(a=a.fields)&&y.find(a,function(a){return a&&a.name&&"value"===a.name.toLowerCase()}))&&
a.name}function C(a,b){var d=[],f=b.pixelType,e=(b=b.rasterAttributeTable)&&b.features,g=x(b),h=!1;a.uniqueValueInfos&&a.uniqueValueInfos.forEach(function(b){var c=b.symbol.color;c.a&&(a.field!==g&&e?e&&e.forEach(function(e){String(e.attributes[a.field])===String(b.value)&&d.push([e.attributes[g],c.r,c.g,c.b])}):isNaN(b.value)?h=!0:d.push([b.value,c.r,c.g,c.b]))});if(h)return null;f=f&&0<d.length?r(d,f):d;b=new l;b.functionName="Colormap";b.functionArguments={};b.functionArguments.Colormap=f;b.variableName=
"Raster";return b}Object.defineProperty(m,"__esModule",{value:!0});var B={u1:[0,1],u2:[0,3],u4:[0,15],u8:[0,255],s8:[-128,127],u16:[0,65535],s16:[-32768,32767]},D={type:"multipart",colorRamps:[{fromColor:[0,0,255],toColor:[0,255,255]},{fromColor:[0,255,255],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,0,0]}]};m.isSupportedRendererType=function(a){a=a.type;return"raster-stretch"===a||"unique-value"===a||"class-breaks"===a||"raster-shaded-relief"===a};m.combineRenderingRules=function(a,
b){if(!a||!b)return u.clone(a||b);a=u.clone(a);"none"!==b.functionName.toLowerCase()&&(w(a.functionArguments).Raster=b);return a};m.convertRendererToRenderingRule=function(a,b){b=b||{};switch(a.type){case "raster-stretch":var d=new l;d.functionName="Stretch";var f=p[z.stretchTypeJSONDict.toJSON(a.stretchType)],e={StretchType:f,Statistics:a.statistics,DRA:a.dynamicRangeAdjustment,UseGamma:a.useGamma,Gamma:a.gamma,ComputeGamma:a.computeGamma};null!=a.outputMin&&(e.Min=a.outputMin);null!=a.outputMax&&
(e.Max=a.outputMax);f===p.standardDeviation?(e.NumberOfStandardDeviations=a.numberOfStandardDeviations,d.outputPixelType="u8"):f===p.percentClip?(e.MinPercent=a.minPercent,e.MaxPercent=a.maxPercent,d.outputPixelType="u8"):f===p.minMax?d.outputPixelType="u8":f===p.sigmoid&&(e.SigmoidStrengthLevel=a.sigmoidStrengthLevel);d.functionArguments=e;d.variableName="Raster";if(a.colorRamp){var f=a.colorRamp,e=new l,g=v.getColorRampName(f);e.functionArguments=g?{colorRamp:g}:!b.convertColorRampToColormap||"algorithmic"!==
f.type&&"multipart"!==f.type?{colorRamp:a.colorRamp.toJSON()}:{Colormap:v.convertColorRampToColormap(f,256)};e.variableName="Raster";e.functionName="Colormap";e.functionArguments.Raster=d;a=e}else a=d;return a;case "class-breaks":return A(a,b);case "unique-value":return C(a,b);case "raster-colormap":return(a=a.extractColormap())&&0!==a.length?(a=(b=b.pixelType)?r(a,b):a,b=new l,b.functionName="Colormap",b.functionArguments={},b.functionArguments.Colormap=a,a=b):a=void 0,a;case "raster-shaded-relief":return null}};
m.createDefaultRenderer=function(a,b){if(a){var d=a.attributeTable,f=a.dataType,e=a.bandCount,g=a.pixelType,h=a.colormap,c=a.statistics,n=a.histograms;b&&0<b.length&&(c=c?b.map(function(a){return c[a]}):null,n=n?b.map(function(a){return n[a]}):null);var k;if(1===e&&h&&0<h.length)k=t.RasterColormapRenderer.createFromColormap(h);else if(1===e&&d){var l=d.fields.filter(function(a){return"red"===a.name.toLowerCase()})[0],m=d.fields.filter(function(a){return"green"===a.name.toLowerCase()})[0],p=d.fields.filter(function(a){return"blue"===
a.name.toLowerCase()})[0];a=d.fields.filter(function(a){return"value"===a.name})[0];var q=d.fields.filter(function(a){return"classname"===a.name.toLowerCase()})[0];q||(q=d.fields.filter(function(a){return"string"===a.type})[0])||(q=a);l&&m&&p&&q&&(k=t.UniqueValueRenderer.fromJSON({field1:q.name,uniqueValueInfos:d.features.map(function(a){return{value:a.attributes[q.name],label:a.attributes[q.name],symbol:{color:[a.attributes[l.name],a.attributes[m.name],a.attributes[p.name],255],type:"esriSFS",style:"esriSFSSolid"}}})}))}k||
(d=void 0,k=!1,e=b=a=void 0,"u8"===g&&"processed"===f?(d="min-max",c=c||[{min:0,max:255},{min:0,max:255},{min:0,max:255}]):"u8"===g||"elevation"===f?(d="min-max",k=c?!1:!0):"scientific"===f?(d="min-max",k=c?!1:!0,a=D):n&&0<n.length?(d="percent-clip",e=b=.25):c?d="min-max":(d="percent-clip",k=!0),k=t.RasterStretchRenderer.fromJSON({stretchType:d,dra:k,colorRamp:a,min:0,max:255,statistics:k?null:c,histograms:k?null:n,maxPercent:b,minPercent:e}));return k}};m.getDefaultBandCombination=function(a){var b=
a.bandCount;if(1===b)return null;if(2===b)return[0];a=a.keyProperties&&a.keyProperties.BandProperties;var d,f,e,g,h;if(a&&a.length===b){for(var c=0;c<a.length;c++)a[c].BandName&&"red"===a[c].BandName.toLowerCase()&&(f=c),a[c].BandName&&"green"===a[c].BandName.toLowerCase()&&(e=c),a[c].BandName&&"blue"===a[c].BandName.toLowerCase()&&(g=c),a[c].BandName&&"nearinfrared"===a[c].BandName.toLowerCase()&&(h=c);void 0!==f&&void 0!==e&&void 0!==g?d=[f,e,g]:void 0!==f&&void 0!==e&&void 0!==h&&(d=[h,f,e])}!d&&
3<b&&(d=[0,1,2]);return d};var p={none:0,standardDeviation:3,histogramEqualization:4,minMax:5,percentClip:6,sigmoid:9}});