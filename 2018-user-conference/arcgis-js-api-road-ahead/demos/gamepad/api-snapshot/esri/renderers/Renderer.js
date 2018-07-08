// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("../core/declare ../core/Accessor ../core/JSONSupport ../core/kebabDictionary ../core/screenUtils ../core/lang ../core/Error ../support/arcadeUtils ../webdoc/support/opacityUtils dojo/_base/lang ../Color ./support/utils ./support/AuthoringInfo".split(" "),function(K,L,M,t,A,v,B,r,G,p,l,N,O){var w=t({sizeInfo:"size",colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation"}),H=t({widthAndDepth:"width-and-depth"}),P=t({unknown:"unknown",inch:"inches",foot:"feet",yard:"yards",mile:"miles",
"nautical-mile":"nautical-miles",millimeter:"millimeters",centimeter:"centimeters",decimeter:"decimeters",meter:"meters",kilometer:"kilometers","decimal-degree":"decimal-degrees"});t({classedSize:"classed-size",classedColor:"classed-color",univariateColorSize:"univariate-color-size"});t({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation"});t({percentTotal:"percent-of-total"});
var C=Math.PI,I=G.opacityToTransparency,J=G.transparencyToOpacity;return K([L,M],{declaredClass:"esri.renderers.Renderer",properties:{authoringInfo:{type:O,value:null,json:{write:!0}},requiredFields:{dependsOn:["visualVariables"],get:function(){var a=Object.create(null);this.collectRequiredFields(a);return Object.keys(a).sort()}},type:{type:String,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}},visualVariables:{json:{read:{source:["visualVariables","rotationType","rotationExpression"],reader:function(a,
b){return this._readVariables(a,b)}},write:function(a,b,c,d){var e=[];a.forEach(function(a,b){"size"===a.type?e.push(this._writeSizeInfo(a,d,b)):"color"===a.type?e.push(this._writeColorInfo(a,d,b)):"opacity"===a.type?e.push(this._writeOpacityInfo(a,d,b)):"rotation"===a.type&&e.push(this._writeRotationInfo(a,d,b))},this);b.visualVariables=e}}}},constructor:function(){this._cache={}},_rotationRE:/^\[([^\]]+)\]$/i,_viewScaleRE:/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i,_visualVariablesSetter:function(a){var b=
this._cache;this.visualVariables&&this.visualVariables.forEach(function(a,d){b.hasOwnProperty(d)&&(b[d]=null)},this);a&&a.some(function(a){return!!a.target})&&a.sort(function(a,b){return a.target===b.target?0:a.target?1:-1});a&&a.forEach(function(a,d){"color"===a.type?b[d]=this._processColorInfo(a):"opacity"===a.type?b[d]=this._processOpacityInfo(a):"size"===a.type?b[d]=this._processSizeInfo(a):"rotation"===a.type&&(b[d]=this._processRotationInfo(a))},this);this._set("visualVariables",a)},getSymbol:function(a,
b){},getVisualVariableValues:function(a,b){var c=this.visualVariables,d;c&&(d=c.map(function(d){var c,e=d.type,f=e+"Info";b=p.mixin({},b);b[f]=d;switch(e){case "size":c=this.getSize(a,b);break;case "color":c=this.getColor(a,b);break;case "opacity":c=this.getOpacity(a,b);break;case "rotation":c=this.getRotationAngle(a,b)}return{variable:d,value:c}},this).filter(function(a){return null!=a.value},this));return d},hasVisualVariables:function(a,b){return a?!!this.getVisualVariablesForType(a,b):!!(this.getVisualVariablesForType("size",
b)||this.getVisualVariablesForType("color",b)||this.getVisualVariablesForType("opacity",b)||this.getVisualVariablesForType("rotation",b))},getVisualVariablesForType:function(a,b){var c=this.visualVariables,d;c&&(d=c.filter(function(d){return d.type===a&&("string"===typeof b?d.target===b:!1===b?!d.target:!0)}))&&0===d.length&&(d=void 0);return d},getSize:function(a,b){var c=this._getVarInfo(b&&b.sizeInfo,"size"),d=c.variable,c=this._cache[c.cacheKey],e=null;if(d)var k=d.minSize,e=d.maxSize,k="object"===
typeof k&&k?this._getSize(a,k,c&&c.minSize,b):k,e="object"===typeof e&&e?this._getSize(a,e,c&&c.maxSize,b):e,e=this._getSize(a,d,c&&c.root,b,[k,e]);return e},getSizeRangeAtScale:function(a,b){var c;a=this._getVarInfo(a,"size");var d=this._cache[a.cacheKey],e={scale:b};if((a=a.variable)&&b){b=a.minSize;var k=a.maxSize;a="object"===typeof b&&b?this._getSize({},b,d&&d.minSize,e):b;d="object"===typeof k&&k?this._getSize({},k,d&&d.maxSize,e):k;if(null!=a||null!=d)a>d&&(c=d,d=a,a=c),c={minSize:a,maxSize:d}}return c},
getColor:function(a,b){var c=this._getVarInfo(b&&b.colorInfo,"color");return this._getColorComponent(a,c.variable,this._cache[c.cacheKey],b)},getOpacity:function(a,b){var c=this._getVarInfo(b&&b.opacityInfo,"opacity");return this._getColorComponent(a,c.variable,this._cache[c.cacheKey],b,!0)},getRotationAngle:function(a,b){var c=this._getVarInfo(b&&b.rotationInfo,"rotation"),d=c.variable,e=this._cache[c.cacheKey],k=d.axis||"heading",c="heading"===k&&"arithmetic"===d.rotationType?90:0,k="heading"===
k&&"arithmetic"===d.rotationType?-1:1,d=d.field,e=e&&e.compiledFunc,n=a.attributes,f=0;if(d||e)e?f=r.executeFunction(e,r.createExecContext(a,r.getViewInfo(b))):p.isFunction(d)?f=d.apply(this,arguments):n&&(f=n[d]||0),f="number"!==typeof f||isNaN(f)?null:c+k*f;return f},collectRequiredFields:function(a){var b=[];this.visualVariables&&(b=b.concat(this.visualVariables));b.forEach(function(b){b&&(b.field&&(a[b.field]=!0),b.normalizationField&&(a[b.normalizationField]=!0),b.valueExpression&&r.extractFieldNames(b.valueExpression).forEach(function(b){a[b]=
!0}))})},_getVarInfo:function(a,b){var c;a&&a.type===b&&this.visualVariables?(c=this.visualVariables.indexOf(a),a=this.visualVariables[c]):this.visualVariables&&(a=(a=this.getVisualVariablesForType(b))&&a[0],c=this.visualVariables.indexOf(a));return{variable:a,cacheKey:c}},_readSizeInfo:function(a){a.axis&&(a.axis=H.fromJSON(a.axis));a.valueUnit&&(a.valueUnit=P.fromJSON(a.valueUnit));return a},_readColorInfo:function(a){a&&(a.colors&&a.colors.forEach(function(b,c){p.isArray(b)?a.colors[c]=l.fromJSON(b):
a.colors[c]=new l(b)}),a.stops&&a.stops.forEach(function(b,c){b.color&&p.isArray(b.color)?a.stops[c].color=l.fromJSON(b.color):b.color&&(a.stops[c].color=new l(b.color))}));return a},_readOpacityInfo:function(a){var b;a&&(b=p.mixin({},a),b.transparencyValues&&(b.opacityValues=b.transparencyValues.map(J),delete b.transparencyValues),b.stops&&(b.stops=b.stops.map(function(a){a=p.mixin({},a);a.opacity=J(a.transparency);delete a.transparency;return a})));return b},_readVariables:function(a,b){a&&(a=a.map(function(a){a=
v.clone(a);a.type=w.fromJSON(a.type);"size"===a.type?a=this._readSizeInfo(a):"color"===a.type?a=this._readColorInfo(a):"opacity"===a.type&&(a=this._readOpacityInfo(a));return a},this));var c=b.rotationType;if(b=b.rotationExpression)c={type:"rotation",rotationType:c},(b=b.match(this._rotationRE))&&b[1]&&(c.field=b[1],a||(a=[]),a.push(c));return a},_createCache:function(a){var b=a&&a.valueExpression,c=r.createSyntaxTree(b),c=r.createFunction(c),d=!(!a||!a.expression)||this._viewScaleRE.test(b);return{ipData:this._interpolateData(a),
hasExpr:!!b,compiledFunc:c,isScaleDriven:d}},_processColorInfo:function(a){a&&(a.colors&&a.colors.forEach(function(b,c){b instanceof l||(a.colors[c]=new l(b))}),a.stops&&a.stops.forEach(function(b,c){!b.color||b.color instanceof l||(a.stops[c].color=new l(b.color))}),this._sortStops(a.stops));return this._createCache(a)},_processOpacityInfo:function(a){this._sortStops(a&&a.stops);return this._createCache(a)},_processSizeInfo:function(a){a.stops&&Array.isArray(a.stops)?a.stops=this._processSizeInfoStops(a.stops):
(a.minSize=a.minSize&&this._processSizeInfoSize(a.minSize),a.maxSize=a.maxSize&&this._processSizeInfoSize(a.maxSize));return{root:this._createCache(a),minSize:this._createCache(a.minSize),maxSize:this._createCache(a.maxSize)}},_processSizeInfoSize:function(a){"object"===typeof a?a.stops=this._processSizeInfoStops(a.stops):a=A.toPt(a);return a},_processSizeInfoStops:function(a){a&&Array.isArray(a)&&(a.forEach(function(a){a.size=A.toPt(a.size)}),this._sortStops(a));return a},_sortStops:function(a){a&&
Array.isArray(a)&&a.sort(function(a,c){return a.value-c.value})},_processRotationInfo:function(a){return this._createCache(a)},_getSize:function(a,b,c,d,e){var k=a.attributes,n=b.field,f=b.stops,g=0,l=c&&c.hasExpr,t=c&&c.compiledFunc,v=c&&c.ipData,w=c&&c.isScaleDriven,u="number"===typeof a,h=u?a:null;if(n||w||l){var y=d&&d.scale,m=e?e[0]:b.minSize,q=e?e[1]:b.maxSize,x=b.minDataValue,E=b.maxDataValue,A=b.valueUnit||"unknown",F=b.valueRepresentation,g=b.scaleBy,B=b.normalizationField,D=k?parseFloat(k[B]):
void 0,z=d&&d.shape;w?h=null==y?this._getAverageValue(b):y:"number"!==typeof h&&(l?h=r.executeFunction(t,r.createExecContext(a,r.getViewInfo(d))):p.isFunction(n)?h=n.apply(this,arguments):k&&(h=k[n]));if(null==h||B&&!u&&(isNaN(D)||0===D))return null;isNaN(D)||u||(h/=D);if(f)q=this._lookupData(h,v),h=q[0],m=q[1],h===m?g=f[h].size:(h=f[h].size,f=f[m].size,g=h+(f-h)*q[2]);else if(null!=m&&null!=q&&null!=x&&null!=E)h<=x?g=m:h>=E?g=q:(f=(h-x)/(E-x),"area"===g&&z?(m=(h="circle"===z)?C*Math.pow(m/2,2):m*
m,f=m+f*((h?C*Math.pow(q/2,2):q*q)-m),g=h?2*Math.sqrt(f/C):Math.sqrt(f)):g=m+f*(q-m));else if("unknown"===A)null!=m&&null!=x?(m&&x?(f=h/x,g="circle"===z?2*Math.sqrt(f*Math.pow(m/2,2)):"square"===z||"diamond"===z||"image"===z?Math.sqrt(f*Math.pow(m,2)):f*m):g=h+(m||x),g=g<m?m:g,null!=q&&g>q&&(g=q)):g=h;else{f=(d&&d.resolution?d.resolution:1)*N.meterIn[A];if("area"===F)g=Math.sqrt(h/C)/f,g*=2;else if(g=h/f,"radius"===F||"distance"===F)g*=2;null!=m&&g<m&&(g=m);null!=q&&g>q&&(g=q)}}else b&&(g=f&&f[0]&&
f[0].size,null==g&&(g=b.minSize));return g=isNaN(g)?0:g},_getAverageValue:function(a){var b=a.stops,c;b?(c=b[0].value,a=b[b.length-1].value):(c=a.minDataValue||0,a=a.maxDataValue||0);return(c+a)/2},_getColorComponent:function(a,b,c,d,e,k){var n=a.attributes,f=b&&b.field,g="number"===typeof a,l=g?a:null,t=c&&c.hasExpr,w=c&&c.compiledFunc,v=c&&c.ipData,u;if(f||t){var h=b.normalizationField,y=n?parseFloat(n[h]):void 0;"number"!==typeof l&&(t?l=r.executeFunction(w,r.createExecContext(a,r.getViewInfo(d))):
p.isFunction(f)?l=f.apply(this,arguments):n&&(l=n[f]));null==l||h&&!g&&(isNaN(y)||0===y)||(isNaN(y)||g||(l/=y),u=e?this._getOpacity(l,b,v):this._getColor(l,b,v))}else b&&(n=b.stops,e?(u=n&&n[0]&&n[0].opacity,null==u&&(u=b.opacityValues&&b.opacityValues[0])):u=n&&n[0]&&n[0].color||b.colors&&b.colors[0]);k&&(k.data=l,k.value=u);return k||u},_interpolateData:function(a){var b;if(a)if(a.colors||a.opacityValues){var c=(a.colors||a.opacityValues).length,d=a.minDataValue,e=(a.maxDataValue-d)/(c-1);b=[];
for(a=0;a<c;a++)b[a]=d+a*e}else a.stops&&(b=a.stops.map(function(a){return a.value||0}));return b},_getOpacity:function(a,b,c){a=this._lookupData(a,c);var d;b=b||this.opacityInfo;a&&(c=a[0],d=a[1],c===d?d=this._getOpacValue(b,c):(c=this._getOpacValue(b,c),b=this._getOpacValue(b,d),d=c+(b-c)*a[2]));return d},_getOpacValue:function(a,b){return a.opacityValues?a.opacityValues[b]:a.stops[b].opacity},_getColor:function(a,b,c){a=this._lookupData(a,c);var d;b=b||this.colorInfo;a&&(d=a[0],c=a[1],d=d===c?
this._getColorObj(b,d):l.blendColors(this._getColorObj(b,d),this._getColorObj(b,c),a[2]),d=new l(d));return d},_getColorObj:function(a,b){return a.colors?a.colors[b]:a.stops[b].color},_lookupData:function(a,b){var c;if(b){var d=0,e=b.length-1;b.some(function(b,c){if(a<b)return e=c,!0;d=c;return!1});c=[d,e,(a-b[d])/(b[e]-b[d])]}return c},_processForContext:function(a,b,c){if(b&&"web-scene"===b.origin){var d=null!=a.expression,e=null!=a.valueExpressionTitle&&"rotation"===a.type;b.messages&&(d&&b.messages.push(new B("property:unsupported",
a.type+"VisualVariable.expression is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:c+".expression",context:b})),e&&b.messages.push(new B("property:unsupported",a.type+"VisualVariable.valueExpressionTitle is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:c+".valueExpressionTitle",context:b})));d&&delete a.expression;e&&delete a.valueExpressionTitle}else"size"===a.type&&this._convertExpressionToArcade(a)},
_writeRotationInfo:function(a,b,c){a&&(a=p.mixin({},a),this._processForContext(a,b,"visualVariables["+c+"]"),a.type=w.toJSON(a.type),a=v.fixJson(a,!0));return a},_convertExpressionToArcade:function(a){a&&a.expression&&(a.valueExpression="$view.scale")},_writeSizeInfo:function(a,b,c){if(a){a=p.mixin({},a);this._processForContext(a,b,"string"===typeof c?c:"visualVariables["+c+"]");var d=a.minSize,e=a.maxSize;d&&(a.minSize="number"===typeof d?d:this._writeSizeInfo(d,b,"visualVariables["+c+"].minSize"));
e&&(a.maxSize="number"===typeof e?e:this._writeSizeInfo(e,b,"visualVariables["+c+"].maxSize"));b=a.legendOptions;c=a.axis;a.type=w.toJSON(a.type);c&&(a.axis=H.toJSON(c));b&&(a.legendOptions=p.mixin({},b),b=b.customValues)&&(a.legendOptions.customValues=b.slice(0));a.stops&&(a.stops=a.stops.map(function(a){a=p.mixin({},a);null===a.label&&delete a.label;return a}));a=v.fixJson(a,!0)}return a},_writeColorInfo:function(a,b,c){a&&(a=p.mixin({},a),this._processForContext(a,b,"visualVariables["+c+"]"),a.type=
w.toJSON(a.type),a.colors&&(a.colors=a.colors.map(function(a){return l.toJSON(a)})),a.stops&&(a.stops=a.stops.map(function(a){a=p.mixin({},a);a.color&&(a.color=l.toJSON(a.color));null==a.value&&(a.value=0);null===a.label&&delete a.label;return a})),a.legendOptions&&(a.legendOptions=p.mixin({},a.legendOptions)),a=v.fixJson(a,!0));return a},_writeOpacityInfo:function(a,b,c){var d;a&&(d=p.mixin({},a),this._processForContext(d,b,"visualVariables["+c+"]"),d.type=w.toJSON(d.type),d.opacityValues&&(d.transparencyValues=
d.opacityValues.map(I),delete d.opacityValues),d.stops&&(d.stops=d.stops.map(function(a){a=p.mixin({},a);a.transparency=I(a.opacity);delete a.opacity;null===a.label&&delete a.label;return a})),d.legendOptions&&(d.legendOptions=p.mixin({},d.legendOptions)),d=v.fixJson(d,!0));return d}})});