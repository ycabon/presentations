// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/has ../../../../core/mathUtils ../../../../core/libs/gl-matrix-2/math/mat3 ../../../../core/libs/gl-matrix-2/factories/mat3f64 ../../../../core/libs/gl-matrix-2/math/mat4 ../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../renderers/support/lengthUtils ../../support/debugFlags ../../webgl-engine/core/shaderModules/interfaces".split(" "),function(f,Z,A,L,M,k,w,N,O,B,P,Q){function p(a){return null!==
a&&void 0!==a}function n(a){return"number"===typeof a}function r(a){return"string"===typeof a}function g(a,b){a&&a.push(b)}function R(a,b,c,d=w.create()){a=a||0;b=b||0;c=c||0;0!==a&&k.rotateZ(d,d,-a/180*Math.PI);0!==b&&k.rotateX(d,d,b/180*Math.PI);0!==c&&k.rotateY(d,d,c/180*Math.PI);return d}function l(a,b,c,d,e){const h=a.minSize,t=a.maxSize;if(a.expression)return g(e,"Could not convert size info: expression not supported"),!1;if(a.useSymbolValue)return a=d.symbolSize[c],b.minSize[c]=a,b.maxSize[c]=
a,b.offset[c]=b.minSize[c],b.factor[c]=0,b.type[c]=f.FastSizeType.DefinedSize,!0;if(p(a.field)){if(p(a.stops)){if(2===a.stops.length&&n(a.stops[0].size)&&n(a.stops[1].size))return C(a.stops[0].size,a.stops[1].size,a.stops[0].value,a.stops[1].value,b,c),b.type[c]=f.FastSizeType.DefinedSize,!0;g(e,"Could not convert size info: stops only supported with 2 elements");return!1}if(n(h)&&n(t)&&p(a.minDataValue)&&p(a.maxDataValue))return C(h,t,a.minDataValue,a.maxDataValue,b,c),b.type[c]=f.FastSizeType.DefinedSize,
!0;if("unknown"===a.valueUnit)return g(e,"Could not convert size info: proportional size not supported"),!1;if(null!=B.meterIn[a.valueUnit])return b.minSize[c]=-Infinity,b.maxSize[c]=Infinity,b.offset[c]=0,b.factor[c]=1/B.meterIn[a.valueUnit],b.type[c]=f.FastSizeType.DefinedSize,!0;g(e,"Could not convert size info: scale-dependent size not supported");return!1}if(!p(a.field)){if(a.stops?.[0]&&n(a.stops[0].size))return b.minSize[c]=a.stops[0].size,b.maxSize[c]=a.stops[0].size,b.offset[c]=b.minSize[c],
b.factor[c]=0,b.type[c]=f.FastSizeType.DefinedSize,!0;if(n(h))return b.minSize[c]=h,b.maxSize[c]=h,b.offset[c]=h,b.factor[c]=0,b.type[c]=f.FastSizeType.DefinedSize,!0}g(e,"Could not convert size info: unsupported variant of sizeInfo");return!1}function C(a,b,c,d,e,h){d=0<Math.abs(d-c)?(b-a)/(d-c):0;e.minSize[h]=0<d?a:b;e.maxSize[h]=0<d?b:a;e.offset[h]=a-c*d;e.factor[h]=d}function S(a,b,c,d){if(a.normalizationField||a.valueRepresentation)return g(d,"Could not convert size info: unsupported property"),
null;var e=a.field;if(null!=e&&!r(e))return g(d,"Could not convert size info: field is not a string"),null;if(!b.size)b.size=new D(a.field);else if(a.field)if(!b.size.field)b.size.field=a.field;else if(a.field!==b.size.field)return g(d,"Could not convert size info: multiple fields in use"),null;switch(a.axis){case "width":return(e=l(a,b.size,0,c,d))?b:null;case "height":return(e=l(a,b.size,2,c,d))?b:null;case "depth":return(e=l(a,b.size,1,c,d))?b:null;case "width-and-depth":return(e=l(a,b.size,0,
c,d))&&l(a,b.size,1,c,d),e?b:null;case null:case void 0:case "all":return(e=(e=(e=l(a,b.size,0,c,d))&&l(a,b.size,1,c,d))&&l(a,b.size,2,c,d))?b:null;default:return g(d,`Could not convert size info: unknown axis "${a.axis}""`),null}}function T(a,b,c){for(let d=0;3>d;++d){let e=b.unitInMeters;a.type[d]===f.FastSizeType.DefinedSize&&(e*=b.modelSize[d],a.type[d]=f.FastSizeType.DefinedScale);a.minSize[d]/=e;a.maxSize[d]/=e;a.offset[d]/=e;a.factor[d]/=e}if(a.type[0]!==f.FastSizeType.Undefined)b=0;else if(a.type[1]!==
f.FastSizeType.Undefined)b=1;else if(a.type[2]!==f.FastSizeType.Undefined)b=2;else return g(c,"No size axis contains a valid size or scale"),!1;for(c=0;3>c;++c)a.type[c]===f.FastSizeType.Undefined&&(a.minSize[c]=a.minSize[b],a.maxSize[c]=a.maxSize[b],a.offset[c]=a.offset[b],a.factor[c]=a.factor[b],a.type[c]=a.type[b]);return!0}function E(a,b,c){a[4*b]=c.r/255;a[4*b+1]=c.g/255;a[4*b+2]=c.b/255;a[4*b+3]=c.a}function U(a,b,c){if(a.normalizationField)return g(c,"Could not convert color info: unsupported property"),
null;if(r(a.field))if(a.stops){if(8<a.stops.length)return g(c,"Could not convert color info: too many color stops"),null;b.color=new F(a.field);a=a.stops;for(c=0;8>c;++c){const d=a[Math.min(c,a.length-1)];b.color.values[c]=d.value;E(b.color.colors,c,d.color)}}else return g(c,"Could not convert color info: missing stops or colors"),null;else if(a.stops&&0<=a.stops.length)for(a=a.stops&&0<=a.stops.length&&a.stops[0].color,b.color={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},c=0;8>c;c++)b.color.values[c]=Infinity,E(b.color.colors,c,a);else return g(c,"Could not convert color info: no field and no colors/stops"),null;return b}function V(a,b,c){if(a.normalizationField)return g(c,"Could not convert opacity info: unsupported property"),null;if(r(a.field))if(a.stops){if(8<a.stops.length)return g(c,"Could not convert opacity info: too many opacity stops"),null;b.opacity=new G(a.field);a=a.stops;for(c=0;8>c;++c){const d=a[Math.min(c,
a.length-1)];b.opacity.values[c]=d.value;b.opacity.opacityValues[c]=d.opacity}}else return g(c,"Could not convert opacity info: missing stops or opacities"),null;else if(a.stops&&0<=a.stops.length)for(a=a.stops&&0<=a.stops.length?a.stops[0].opacity:0,b.opacity={field:null,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]},c=0;8>c;c++)b.opacity.values[c]=Infinity,b.opacity.opacityValues[c]=a;else return g(c,"Could not convert opacity info: no field and no opacities/stops"),null;return b}function x(a,
b,c){a=2===c&&"arithmetic"===a.rotationType;b.offset[c]=a?90:0;b.factor[c]=a?-1:1;b.type[c]=1}function W(a,b,c){if(!r(a.field))return g(c,"Could not convert rotation info: field is not a string"),null;if(!b.rotation)b.rotation={field:a.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};else if(a.field)if(!b.rotation.field)b.rotation.field=a.field;else if(a.field!==b.rotation.field)return g(c,"Could not convert rotation info: multiple fields in use"),null;switch(a.axis){case "tilt":return x(a,b.rotation,
0),b;case "roll":return x(a,b.rotation,1),b;case null:case void 0:case "heading":return x(a,b.rotation,2),b;default:return g(c,`Could not convert rotation info: unknown axis "${a.axis}""`),null}}function y(a,b,c){if(!a)return null;const d=a.reduce((e,h)=>{if(!e)return e;if(h.valueExpression)return g(c,"Could not convert visual variables: arcade expressions not supported"),null;switch(h.type){case "size":return b.supports.size?S(h,e,b,c):e;case "color":return b.supports.color?U(h,e,c):e;case "opacity":return b.supports.opacity?
V(h,e,c):null;case "rotation":return b.supports.rotation?W(h,e,c):e;default:return null}},new H);return 0<a.length&&d&&!d.size&&!d.color&&!d.opacity&&!d.rotation||d?.size&&!T(d.size,b,c)?null:d}function u(a,b,c){if(!!a!==!!b||a&&a.field!==b?.field)return!1;if(a&&"rotation"===c)for(c=0;3>c;c++)if(a.type[c]!==b.type[c]||a.offset[c]!==b.offset[c]||a.factor[c]!==b.factor[c])return!1;return!0}function z(a,b){a=new I(a);a.vvSize&&(a.vvSymbolAnchor=b.anchor,k.identity(q),R(b.rotation[2],b.rotation[0],b.rotation[1],
q),a.vvSymbolRotationMatrix=a.vvSymbolRotationMatrix||M.create(),L.fromMat4(a.vvSymbolRotationMatrix,q));return a}f.FastSizeType=void 0;(function(a){a[a.Undefined=0]="Undefined";a[a.DefinedSize=1]="DefinedSize";a[a.DefinedScale=2]="DefinedScale"})(f.FastSizeType||(f.FastSizeType={}));f.FastRotationType=void 0;(function(a){a[a.Undefined=0]="Undefined";a[a.DefinedAngle=1]="DefinedAngle"})(f.FastRotationType||(f.FastRotationType={}));class v{constructor(a){this.field=a}}class D extends v{constructor(a){super(a);
this.minSize=[0,0,0];this.maxSize=[0,0,0];this.offset=[0,0,0];this.factor=[0,0,0];this.type=[f.FastSizeType.Undefined,f.FastSizeType.Undefined,f.FastSizeType.Undefined]}}class F extends v{constructor(a){super(a);this.colors=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.values=[0,0,0,0,0,0,0,0]}}class G extends v{constructor(a){super(a);this.values=[0,0,0,0,0,0,0,0];this.opacityValues=[0,0,0,0,0,0,0,0]}}class X extends v{constructor(a){super(a);this.offset=[0,0,0];this.factor=
[1,1,1];this.type=[0,0,0]}}class H{}class Y{constructor(a,b=[1,1,1],c=[1,1,1],d=1,e=[0,0,0],h=[1,1,1],t=[0,0,0]){this.supports=a;this.modelSize=b;this.symbolSize=c;this.unitInMeters=d;this.anchor=e;this.scale=h;this.rotation=t}}class J{constructor(a,b,c){this.visualVariables=a;this.materialParameters=b;this.requiresShaderTransformation=c}}class I extends Q.NoParameters{constructor(a){super();this.vvSize=a?.size??null;this.vvColor=a?.color??null;this.vvOpacity=a?.opacity??null}}const m=w.create(),
K=O.create(),q=w.create();f.ConvertOptions=Y;f.FastColorInfo=F;f.FastOpacityInfo=G;f.FastRotationInfo=X;f.FastSizeInfo=D;f.FastSymbolUpdatesState=J;f.FastVisualVariables=H;f.VisualVariablesParameters=I;f.convertVisualVariables=y;f.evaluateModelTransform=function(a,b,c){if(!a.vvSize)return c;k.copy(m,c);c=a.vvSymbolRotationMatrix;k.set(q,c[0],c[1],c[2],0,c[3],c[4],c[5],0,c[6],c[7],c[8],0,0,0,0,1);k.multiply(m,m,q);for(c=0;3>c;++c)K[c]=A.clamp(a.vvSize.offset[c]+b[0]*a.vvSize.factor[c],a.vvSize.minSize[c],
a.vvSize.maxSize[c]);k.scale(m,m,K);k.translate(m,m,a.vvSymbolAnchor);return m};f.evaluateModelTransformScale=function(a,b,c){if(!b.vvSize)return N.set(a,1,1,1),a;for(let d=0;3>d;++d)a[d]=A.clamp(b.vvSize.offset[d]+c[0]*b.vvSize.factor[d],b.vvSize.minSize[d],b.vvSize.maxSize[d]);return a};f.getAttributeValue=function(a,b){a=null==a?0:b.attributes[a];return"number"===typeof a&&isFinite(a)?a:0};f.getMaterialParameters=z;f.initFastSymbolUpdatesState=function(a,b){return!a||P.debugFlags.TESTS_DISABLE_FAST_UPDATES?
null:(a=y(a.visualVariables,b))?new J(a,z(a,b),!!a.size):null};f.updateFastSymbolUpdatesState=function(a,b,c){if(!b||!a)return!1;const d=a.visualVariables;b=y(b.visualVariables,c);if(!(b&&u(d.size,b.size,"size")&&u(d.color,b.color,"color")&&u(d.rotation,b.rotation,"rotation")&&u(d.opacity,b.opacity,"opacity")))return!1;a.visualVariables=b;a.materialParameters=z(b,c);a.requiresShaderTransformation=!!b.size;return!0};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});