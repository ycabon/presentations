// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
require({cache:{"esri/views/2d/layers/features/tileRenderers/BaseTileRenderer":function(){define("require exports ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/decorateHelper ../../../../../core/HandleOwner ../../../../../core/accessorSupport/decorators".split(" "),function(p,d,r,a,v,g){Object.defineProperty(d,"__esModule",{value:!0});p=function(d){function f(a){a=d.call(this,a)||this;a.tiles=new Map;return a}r(f,d);f.prototype.destroy=function(){this.tiles.clear();
this.layer=this.layerView=this.tileInfoView=this.tiles=null};Object.defineProperty(f.prototype,"updating",{get:function(){return this.isUpdating()},enumerable:!0,configurable:!0});f.prototype.acquireTile=function(a){var f=this,d=this.createTile(a);d.once("isReady",function(){return f.notifyChange("updating")});this.tiles.set(a.id,d);return d};f.prototype.lockAttributeTextureUpload=function(){};f.prototype.unlockAttributeTextureUpload=function(){};f.prototype.forceAttributeTextureUpload=function(){};
f.prototype.forEachTile=function(a){this.tiles.forEach(a)};f.prototype.releaseTile=function(a){this.tiles.delete(a.key.id);this.disposeTile(a)};f.prototype.isUpdating=function(){var a=!0;this.tiles.forEach(function(f){a=a&&f.isReady});return!a};f.prototype.setHighlight=function(){};f.prototype.invalidateLabels=function(){};f.prototype.requestUpdate=function(){this.layerView.requestUpdate()};a([g.property()],f.prototype,"layer",void 0);a([g.property()],f.prototype,"layerView",void 0);a([g.property()],
f.prototype,"tileInfoView",void 0);a([g.property()],f.prototype,"updating",null);return f=a([g.subclass("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],f)}(g.declared(v.HandleOwner));d.default=p})},"esri/views/2d/layers/features/tileRenderers/support/visualVariablesUtils":function(){define("require exports ../../../../../../core/tsSupport/assignHelper ../../../../../../core/screenUtils ../../../../engine ../../../../engine/webgl/definitions ../../../../../3d/layers/support/FastSymbolUpdates".split(" "),
function(p,d,r,a,v,g,q){function f(b){return{value:b.value,size:a.toPt(b.size)}}function u(b){return b.map(function(b){return f(b)})}function t(b){return"string"===typeof b||"number"===typeof b?a.toPt(b):{type:"size",expression:b.expression,stops:u(b.stops)}}function x(b){var a={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if(v.Utils.isString(b.field))if(b.stops){if(8<b.stops.length)return null;var l=b.stops;for(b=0;8>b;++b){var f=l[Math.min(b,l.length-1)];a.values[b]=f.value;a.opacities[b]=
f.opacity}}else return null;else if(b.stops&&0<=b.stops.length)for(l=b.stops&&0<=b.stops.length&&b.stops[0].opacity,b=0;8>b;b++)a.values[b]=Infinity,a.opacities[b]=l;else return null;return a}Object.defineProperty(d,"__esModule",{value:!0});var n=v.enums.WGLVVFlag;d.getVisualVariableSizeValueRepresentationRatio=function(b,a){if(!b||!a)return b;switch(a){case "radius":case "distance":return 2*b;case "area":return Math.sqrt(b)}return b};d.stopToSizeStop=f;d.normalizeSizeStops=u;d.normalizeSizeElement=
t;d.getVisualVariablesFields=function(b){var a=b&&0<b.length?{}:null;a&&b.forEach(function(b){var l=b.type;b.field&&(a[l]=b.field)});return a};var l=function(b){var l=[],f=[];b=u(b);for(var d=b.length,m=0;6>m;m++){var n=b[Math.min(m,d-1)];l.push(n.value);f.push(null==n.size?g.NAN_MAGIC_NUMBER:a.pt2px(n.size))}return{values:new Float32Array(l),sizes:new Float32Array(f)}};d.convertVisualVariables=function(b){var a=b&&0<b.length?{}:null,f=a?{}:null;if(!a)return{vvFields:a,vvRanges:f};for(var d=0;d<b.length;d++){var m=
b[d],g=m.type;m.field&&(a[g]=m.field);if("size"===g)switch(f.size||(f.size={}),v.getTypeOfSizeVisualVariable(m)){case n.SIZE_MINMAX_VALUE:f.size.minMaxValue={minDataValue:m.minDataValue,maxDataValue:m.maxDataValue,minSize:t(m.minSize),maxSize:t(m.maxSize)};break;case n.SIZE_SCALE_STOPS:f.size.scaleStops={stops:u(m.stops)};break;case n.SIZE_FIELD_STOPS:if(m.levels){var g={},p;for(p in m.levels)g[p]=l(m.levels[p]);f.size.fieldStops={type:"level-dependent",levels:g}}else f.size.fieldStops=r({type:"static"},
l(m.stops));break;case n.SIZE_UNIT_VALUE:f.size.unitValue={unit:m.valueUnit,valueRepresentation:m.valueRepresentation}}else if("color"===g)for(m=q.convertVisualVariables([m],{modelSize:null,symbolSize:null,unitInMeters:1,transformation:null}),f.color=m.color,m=0;32>m;m+=4)v.color.premultiplyAlpha(f.color.colors,m,!0);else"opacity"===g?f.opacity=x(m):"rotation"===g&&(f.rotation={type:m.rotationType})}return{vvFields:a,vvRanges:f}}})},"esri/views/3d/layers/support/FastSymbolUpdates":function(){define("require exports ../../../../core/compilerUtils ../../../../core/mathUtils ../../../../core/libs/gl-matrix-2/mat3 ../../../../core/libs/gl-matrix-2/mat3f64 ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../renderers/support/utils ../../support/debugFlags".split(" "),
function(p,d,r,a,v,g,q,f,u,t,x,n){function l(c){return null!==c&&void 0!==c}function b(c){return"number"===typeof c}function y(c){return"string"===typeof c}function k(c,e){c&&c.push(e)}function w(c,e,h,a,f){var z=c.minSize,d=c.maxSize;if(c.expression)return k(f,"Could not convert size info: expression not supported"),!1;if(c.useSymbolValue)return c=a.symbolSize[h],e.minSize[h]=c,e.maxSize[h]=c,e.offset[h]=e.minSize[h],e.factor[h]=0,e.type[h]=1,!0;if(l(c.field)){if(l(c.stops)){if(2===c.stops.length&&
b(c.stops[0].size)&&b(c.stops[1].size))return m(c.stops[0].size,c.stops[1].size,c.stops[0].value,c.stops[1].value,e,h),e.type[h]=1,!0;k(f,"Could not convert size info: stops only supported with 2 elements");return!1}if(b(z)&&b(d)&&l(c.minDataValue)&&l(c.maxDataValue))return m(z,d,c.minDataValue,c.maxDataValue,e,h),e.type[h]=1,!0;if(null!=x.meterIn[c.valueUnit])return e.minSize[h]=-Infinity,e.maxSize[h]=Infinity,e.offset[h]=0,e.factor[h]=1/x.meterIn[c.valueUnit],e.type[h]=1,!0;if("unknown"===c.valueUnit)return k(f,
"Could not convert size info: proportional size not supported"),!1;k(f,"Could not convert size info: scale-dependent size not supported");return!1}if(!l(c.field)){if(c.stops&&c.stops[0]&&b(c.stops[0].size))return e.minSize[h]=c.stops[0].size,e.maxSize[h]=c.stops[0].size,e.offset[h]=e.minSize[h],e.factor[h]=0,e.type[h]=1,!0;if(b(z))return e.minSize[h]=z,e.maxSize[h]=z,e.offset[h]=z,e.factor[h]=0,e.type[h]=1,!0}k(f,"Could not convert size info: unsupported variant of sizeInfo");return!1}function m(c,
e,h,a,b,f){a=0<Math.abs(a-h)?(e-c)/(a-h):0;b.minSize[f]=0<a?c:e;b.maxSize[f]=0<a?e:c;b.offset[f]=c-h*a;b.factor[f]=a}function H(c,e,h,a){if(c.normalizationField||c.valueRepresentation)return k(a,"Could not convert size info: unsupported property"),null;var b=c.field;if(null!=b&&!y(b))return k(a,"Could not convert size info: field is not a string"),null;if(!e.size)e.size={field:c.field,minSize:[0,0,0],maxSize:[0,0,0],offset:[0,0,0],factor:[0,0,0],type:[0,0,0]};else if(c.field)if(!e.size.field)e.size.field=
c.field;else if(c.field!==e.size.field)return k(a,"Could not convert size info: multiple fields in use"),null;switch(c.axis){case "width":return(b=w(c,e.size,0,h,a))?e:null;case "height":return(b=w(c,e.size,2,h,a))?e:null;case "depth":return(b=w(c,e.size,1,h,a))?e:null;case "width-and-depth":return(b=w(c,e.size,0,h,a))&&w(c,e.size,1,h,a),b?e:null;case null:case void 0:case "all":return(b=(b=(b=w(c,e.size,0,h,a))&&w(c,e.size,1,h,a))&&w(c,e.size,2,h,a))?e:null;default:return k(a,'Could not convert size info: unknown axis "'+
c.axis+'""'),null}}function I(c,e,a){for(var b=0;3>b;++b){var h=e.unitInMeters;1===c.type[b]&&(h*=e.modelSize[b],c.type[b]=2);c.minSize[b]/=h;c.maxSize[b]/=h;c.offset[b]/=h;c.factor[b]/=h}if(0!==c.type[0])e=0;else if(0!==c.type[1])e=1;else if(0!==c.type[2])e=2;else return k(a,"No size axis contains a valid size or scale"),!1;for(b=0;3>b;++b)0===c.type[b]&&(c.minSize[b]=c.minSize[e],c.maxSize[b]=c.maxSize[e],c.offset[b]=c.offset[e],c.factor[b]=c.factor[e],c.type[b]=c.type[e]);return!0}function G(c,
e,b){c[4*e+0]=b.r/255;c[4*e+1]=b.g/255;c[4*e+2]=b.b/255;c[4*e+3]=b.a}function J(c,e,b){if(c.normalizationField)return k(b,"Could not convert color info: unsupported property"),null;if(y(c.field))if(c.stops){if(8<c.stops.length)return k(b,"Could not convert color info: too many color stops"),null;e.color={field:c.field,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};b=c.stops;for(c=0;8>c;++c){var a=b[Math.min(c,b.length-1)];e.color.values[c]=a.value;
G(e.color.colors,c,a.color)}}else return k(b,"Could not convert color info: missing stops or colors"),null;else if(c.stops&&0<=c.stops.length)for(b=c.stops&&0<=c.stops.length&&c.stops[0].color,e.color={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},c=0;8>c;c++)e.color.values[c]=Infinity,G(e.color.colors,c,b);else return k(b,"Could not convert color info: no field and no colors/stops"),null;return e}function K(c,b,a){if(c.normalizationField)return k(a,
"Could not convert opacity info: unsupported property"),null;if(y(c.field))if(c.stops){if(8<c.stops.length)return k(a,"Could not convert opacity info: too many opacity stops"),null;b.opacity={field:c.field,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]};a=c.stops;for(c=0;8>c;++c){var e=a[Math.min(c,a.length-1)];b.opacity.values[c]=e.value;b.opacity.opacityValues[c]=e.opacity}}else return k(a,"Could not convert opacity info: missing stops or opacities"),null;else if(c.stops&&0<=c.stops.length)for(a=
c.stops&&0<=c.stops.length&&c.stops[0].opacity,b.opacity={field:null,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]},c=0;8>c;c++)b.opacity.values[c]=Infinity,b.opacity.opacityValues[c]=a;else return k(a,"Could not convert opacity info: no field and no opacities/stops"),null;return b}function D(c,b,a){c=2===a&&"arithmetic"===c.rotationType;b.offset[a]=c?90:0;b.factor[a]=c?-1:1;b.type[a]=1}function L(c,b,a){if(!y(c.field))return k(a,"Could not convert rotation info: field is not a string"),
null;if(!b.rotation)b.rotation={field:c.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};else if(c.field)if(!b.rotation.field)b.rotation.field=c.field;else if(c.field!==b.rotation.field)return k(a,"Could not convert rotation info: multiple fields in use"),null;switch(c.axis){case "tilt":return D(c,b.rotation,0),b;case "roll":return D(c,b.rotation,1),b;case null:case void 0:case "heading":return D(c,b.rotation,2),b;default:return k(a,'Could not convert rotation info: unknown axis "'+c.axis+'""'),
null}}function E(c,b,a){if(!c)return null;var e=!b.supportedTypes||!!b.supportedTypes.size,f=!b.supportedTypes||!!b.supportedTypes.color,l=!b.supportedTypes||!!b.supportedTypes.rotation,h=!!b.supportedTypes&&!!b.supportedTypes.opacity,d=c.reduce(function(c,d){if(!c)return c;if(d.valueExpression)return k(a,"Could not convert visual variables: arcade expressions not supported"),null;switch(d.type){case "size":return e?H(d,c,b,a):c;case "color":return f?J(d,c,a):c;case "opacity":return h?K(d,c,a):null;
case "rotation":return l?L(d,c,a):c;default:return r.neverReached(d),null}},{size:null,color:null,opacity:null,rotation:null});return 0<c.length&&d&&!d.size&&!d.color&&!d.opacity&&!d.rotation||d&&d.size&&!I(d.size,b,a)?null:d}function B(c,b,a){if(!!c!==!!b||c&&c.field!==b.field)return!1;if(c&&"rotation"===a)for(a=0;3>a;a++)if(c.type[a]!==b.type[a]||c.offset[a]!==b.offset[a]||c.factor[a]!==b.factor[a])return!1;return!0}function F(c,b){var a={vvSizeEnabled:!1,vvSizeMinSize:null,vvSizeMaxSize:null,vvSizeOffset:null,
vvSizeFactor:null,vvSizeValue:null,vvColorEnabled:!1,vvColorValues:null,vvColorColors:null,vvOpacityEnabled:!1,vvOpacityValues:null,vvOpacityOpacities:null,vvSymbolAnchor:null,vvSymbolRotationMatrix:null},e=c&&null!=c.size;c&&c.size?(a.vvSizeEnabled=!0,a.vvSizeMinSize=c.size.minSize,a.vvSizeMaxSize=c.size.maxSize,a.vvSizeOffset=c.size.offset,a.vvSizeFactor=c.size.factor):c&&e&&(a.vvSizeValue=b.transformation.scale);if(c&&e){a.vvSymbolAnchor=b.transformation.anchor;a.vvSymbolRotationMatrix=g.mat3f64.create();
q.mat4.identity(A);var l=b.transformation.rotation[2],e=b.transformation.rotation[0],d=b.transformation.rotation[1];b=A;void 0===b&&(b=f.mat4f64.create());l=l||0;e=e||0;d=d||0;0!==l&&q.mat4.rotateZ(b,b,-l/180*Math.PI);0!==e&&q.mat4.rotateX(b,b,e/180*Math.PI);0!==d&&q.mat4.rotateY(b,b,d/180*Math.PI);v.mat3.fromMat4(a.vvSymbolRotationMatrix,A)}c&&c.color&&(a.vvColorEnabled=!0,a.vvColorValues=c.color.values,a.vvColorColors=c.color.colors);c&&c.opacity&&(a.vvOpacityEnabled=!0,a.vvOpacityValues=c.opacity.values,
a.vvOpacityOpacities=c.opacity.opacityValues);return a}Object.defineProperty(d,"__esModule",{value:!0});d.convertVisualVariables=E;d.initFastSymbolUpdatesState=function(b,a){return!b||n.DISABLE_FAST_UPDATES?{enabled:!1}:(b=E(b.visualVariables,a))?{enabled:!0,visualVariables:b,materialParameters:F(b,a),requiresShaderTransformation:b&&null!=b.size}:{enabled:!1}};d.updateFastSymbolUpdatesState=function(b,a,f){if(!a||!b.enabled)return!1;var c=b.visualVariables;a=E(a.visualVariables,f);if(!(a&&B(c.size,
a.size,"size")&&B(c.color,a.color,"color")&&B(c.rotation,a.rotation,"rotation")&&B(c.opacity,a.opacity,"opacity")))return!1;b.visualVariables=a;b.materialParameters=F(a,f);b.requiresShaderTransformation=a&&null!=a.size;return!0};d.getMaterialParams=F;var C;(function(b){var c=f.mat4f64.create(),l=t.vec3f64.create();b.evaluateModelTransform=function(b,f,e){if(!b.vvSizeEnabled)return e;q.mat4.copy(c,e);e=b.vvSymbolRotationMatrix;q.mat4.set(A,e[0],e[1],e[2],0,e[3],e[4],e[5],0,e[6],e[7],e[8],0,0,0,0,1);
q.mat4.multiply(c,c,A);for(e=0;3>e;++e)l[e]=a.clamp(b.vvSizeOffset[e]+f[0]*b.vvSizeFactor[e],b.vvSizeMinSize[e],b.vvSizeMaxSize[e]);q.mat4.scale(c,c,l);q.mat4.translate(c,c,b.vvSymbolAnchor);return c};b.evaluateModelTransformScale=function(b,c,f){if(!c.vvSizeEnabled)return u.vec3.set(b,1,1,1);for(var e=0;3>e;++e)b[e]=a.clamp(c.vvSizeOffset[e]+f[0]*c.vvSizeFactor[e],c.vvSizeMinSize[e],c.vvSizeMaxSize[e]);return b}})(C||(C={}));var A=f.mat4f64.create();d.evaluateModelTransform=C.evaluateModelTransform;
d.evaluateModelTransformScale=C.evaluateModelTransformScale})},"esri/core/libs/gl-matrix-2/mat3f64":function(){define(["require","exports","./factories/mat3f64"],function(p,d,r){Object.defineProperty(d,"__esModule",{value:!0});d.mat3f64=r})},"esri/core/libs/gl-matrix-2/factories/mat3f64":function(){define(["require","exports"],function(p,d){Object.defineProperty(d,"__esModule",{value:!0});d.create=function(){return[1,0,0,0,1,0,0,0,1]};d.clone=function(d){return[d[0],d[1],d[2],d[3],d[4],d[5],d[6],
d[7],d[8]]};d.fromValues=function(d,a,p,g,q,f,u,t,x){return[d,a,p,g,q,f,u,t,x]};d.createView=function(d,a){return new Float64Array(d,a,9)}})},"esri/core/libs/gl-matrix-2/mat4f64":function(){define(["require","exports","./factories/mat4f64"],function(p,d,r){Object.defineProperty(d,"__esModule",{value:!0});d.mat4f64=r})},"esri/core/libs/gl-matrix-2/factories/mat4f64":function(){define(["require","exports"],function(p,d){function r(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}Object.defineProperty(d,"__esModule",
{value:!0});d.create=r;d.clone=function(a){return[a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]]};d.fromValues=function(a,d,g,q,f,u,p,x,n,l,b,y,k,w,m,r){return[a,d,g,q,f,u,p,x,n,l,b,y,k,w,m,r]};d.createView=function(a,d){return new Float64Array(a,d,16)};d.IDENTITY=r()})},"esri/views/3d/support/debugFlags":function(){define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Accessor ../../../core/accessorSupport/decorators".split(" "),
function(p,d,r,a,v,g){return new (function(d){function f(){var a=null!==d&&d.apply(this,arguments)||this;a.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1;a.SCENEVIEW_LOCKING_LOG=!1;a.HIGHLIGHTS_GRID_OPTIMIZATION_DISABLED=!1;a.HIGHLIGHTS_PROFILE_TO_CONSOLE=!1;a.DECONFLICTOR_SHOW_OUTLINES=!1;a.DECONFLICTOR_SHOW_OUTLINES_INVISIBLE=!1;a.DECONFLICTOR_SHOW_GRID=!1;a.LABELS_SHOW_BORDER=!1;a.OVERLAY_DRAW_DEBUG_TEXTURE=!1;a.OVERLAY_SHOW_CENTER=!1;a.TERRAIN_DEBUG_POPUP=!1;a.TESTS_DISABLE_UPDATE_THRESHOLDS=!1;a.DISABLE_DECONFLICTOR_VISIBILITY_OFFSET=
!1;a.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES=!1;a.DRAW_MESH_GEOMETRY_NORMALS=!1;a.FEATURE_TILE_FETCH_SHOW_TILES=!1;a.FEATURE_TILE_TREE_SHOW_TILES=!1;a.I3S_TREE_SHOW_TILES=!1;a.ENABLE_PROFILE_DEPTH_RANGE=!1;a.DISABLE_FAST_UPDATES=!1;a.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1;a.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1;a.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1;return a}r(f,d);a([g.property()],f.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0);a([g.property()],f.prototype,"SCENEVIEW_LOCKING_LOG",
void 0);a([g.property()],f.prototype,"HIGHLIGHTS_GRID_OPTIMIZATION_DISABLED",void 0);a([g.property()],f.prototype,"HIGHLIGHTS_PROFILE_TO_CONSOLE",void 0);a([g.property()],f.prototype,"DECONFLICTOR_SHOW_OUTLINES",void 0);a([g.property()],f.prototype,"DECONFLICTOR_SHOW_OUTLINES_INVISIBLE",void 0);a([g.property()],f.prototype,"DECONFLICTOR_SHOW_GRID",void 0);a([g.property()],f.prototype,"LABELS_SHOW_BORDER",void 0);a([g.property()],f.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0);a([g.property()],f.prototype,
"OVERLAY_SHOW_CENTER",void 0);a([g.property()],f.prototype,"TERRAIN_DEBUG_POPUP",void 0);a([g.property()],f.prototype,"TESTS_DISABLE_UPDATE_THRESHOLDS",void 0);a([g.property()],f.prototype,"DISABLE_DECONFLICTOR_VISIBILITY_OFFSET",void 0);a([g.property()],f.prototype,"DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES",void 0);a([g.property()],f.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0);a([g.property()],f.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0);a([g.property()],f.prototype,"FEATURE_TILE_TREE_SHOW_TILES",
void 0);a([g.property()],f.prototype,"I3S_TREE_SHOW_TILES",void 0);a([g.property()],f.prototype,"ENABLE_PROFILE_DEPTH_RANGE",void 0);a([g.property()],f.prototype,"DISABLE_FAST_UPDATES",void 0);a([g.property()],f.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0);a([g.property()],f.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0);a([g.property()],f.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0);return f=a([g.subclass("esri.views.3d.support.DebugFlags")],f)}(g.declared(v)))})},
"esri/views/2d/layers/features/tileRenderers/support/WGLFeatureView":function(){define("require exports ../../../../../../core/tsSupport/assignHelper ../../../../../../core/tsSupport/extendsHelper ../../../../../../core/tsSupport/generatorHelper ../../../../../../core/tsSupport/awaiterHelper ../../../../../../core/promiseUtils ../../../../engine ../../../../engine/FeatureContainer ../../../../engine/webgl/enums".split(" "),function(p,d,r,a,v,g,q,f,u,t){Object.defineProperty(d,"__esModule",{value:!0});
p=function(d){function g(a,b,f){a=d.call(this,a,b.clips)||this;a._pointToCallbacks=new Map;a._layer=f;a._layerView=b;return a}a(g,d);g.prototype.renderChildren=function(a){this.hasAnimation&&a.painter.effects.integrate.draw(a,a.attributeView);d.prototype.renderChildren.call(this,a)};g.prototype.hitTest=function(a,b){a=[a,b];b=q.createResolver();this._pointToCallbacks.set(a,b);this.requestRender();return b.promise};g.prototype.doRender=function(a){var b=this._layer,f=b.maxScale,l=a.state.scale;l<=
(b.minScale||Infinity)&&l>=f&&d.prototype.doRender.call(this,a)};Object.defineProperty(g.prototype,"hasAnimation",{get:function(){return this.hasLabels},enumerable:!0,configurable:!0});Object.defineProperty(g.prototype,"hasLabels",{get:function(){return!(!this._layer.labelingInfo||!this._layer.labelingInfo.length)},enumerable:!0,configurable:!0});Object.defineProperty(g.prototype,"labelsVisible",{get:function(){return this._layer.labelsVisible},enumerable:!0,configurable:!0});g.prototype.prepareRenderPasses=
function(a){var b=this,l=a.registerRenderPass({name:"label",brushes:[f.brushes.Label],target:function(){return b._layer.labelsVisible?b.children:null},drawPhase:t.WGLDrawPhase.LABEL|t.WGLDrawPhase.LABEL_ALPHA}),g=a.registerRenderPass({name:"geometry",brushes:[f.brushes.Fill,f.brushes.Line,f.brushes.Marker,f.brushes.Text],target:function(){return b.children},effects:[{apply:a.effects.highlight,enable:function(){return!!b._layerView.hasHighlight()}},{apply:a.effects.hittest,enable:function(){return!!b._pointToCallbacks.size},
args:function(){return b._pointToCallbacks}}]});return d.prototype.prepareRenderPasses.call(this,a).concat([g,l])};return g}(u.FeatureContainer);d.WGLFeatureView=p})},"esri/views/2d/engine/FeatureContainer":function(){define("require exports ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/assignHelper ../../../core/promiseUtils ../../../core/promiseUtils ../../../geometry/support/aaBoundingRect ../engine".split(" "),
function(p,d,r,a,v,g,q,f,u,t){Object.defineProperty(d,"__esModule",{value:!0});p=function(d){function n(a,b){a=d.call(this,a,b)||this;a._rendererInfo=new t.WGLRendererInfo;a.attributeView=new t.AttributeStoreView;return a}v(n,d);n.prototype.destroy=function(){this.removeAllChildren();this.children.forEach(function(a){return a.destroy()});this.attributeView.destroy()};n.prototype.whenAttached=function(){var a=this;return this.attached?q.resolve():q.create(function(b){return a.once("attached",function(){return b()})})};
n.prototype.setRendererInfo=function(a,b,d){this._rendererInfo.setInfo(a,b,d);this.requestRender()};n.prototype.getMaterialItems=function(d,b){return a(this,void 0,void 0,function(){var a,g,l,m;return r(this,function(w){switch(w.label){case 0:return d&&0!==d.length?[4,this.whenAttached()]:[2,null];case 1:return w.sent(),a=this.stage.painter.textureManager,g=d.map(function(d){return a.rasterizeItem(d.symbol,d.glyphIds,b)}),[4,f.all(g)];case 2:return l=w.sent(),m=l.map(function(a,b){return{id:d[b].id,
mosaicItem:a}}),[2,m]}})})};n.prototype.onTileData=function(a,b){if(!(b.addOrUpdate&&"tileDisplayData"in b.addOrUpdate)){var d=b.addOrUpdate&&t.TileData.decode(b.addOrUpdate);b=g({},b,{addOrUpdate:d})}a.setData(b,this.hasLabels,this.labelsVisible);this.contains(a)||this.addChild(a);this.requestRender()};n.prototype.onTileError=function(a){a.clear();this.contains(a)||this.addChild(a)};n.prototype.renderChildren=function(a){this._rendererInfo.update(a.state);this.attributeView.bindTextures(this.stage.context);
d.prototype.renderChildren.call(this,a)};n.prototype.createTile=function(a){var b=this._tileInfoView.getTileBounds(u.create(),a);return new t.WGLTile(a,b)};n.prototype.destroyTile=function(a){this.removeChild(a);a.destroy()};n.prototype.attach=function(){this._initializeExtensions();return d.prototype.attach.call(this)};n.prototype.createRenderParams=function(a){return g({},d.prototype.createRenderParams.call(this,a),{rendererInfo:this._rendererInfo,attributeView:this.attributeView})};n.prototype._initializeExtensions=
function(){var a=this.stage.context.capabilities;a.textureFloat;a.vao};return n}(t.TileContainer);d.FeatureContainer=p})},"*noref":1}});
define("require exports ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/decorateHelper ../../../../../core/tsSupport/assignHelper ../../../../../core/tsSupport/generatorHelper ../../../../../core/tsSupport/awaiterHelper ../../../../../core/accessorSupport/decorators ../../../../../geometry/support/aaBoundingRect ../../../engine ../support/rendererUtils ./BaseTileRenderer ./support/visualVariablesUtils ./support/WGLFeatureView".split(" "),function(p,d,r,a,v,g,q,f,u,
t,x,n,l,b){Object.defineProperty(d,"__esModule",{value:!0});p=function(d){function k(){return null!==d&&d.apply(this,arguments)||this}r(k,d);k.prototype.install=function(a){var d=new b.WGLFeatureView(this.tileInfoView,this.layerView,this.layer);this.featuresView=d;a.addChild(d)};k.prototype.uninstall=function(a){a.removeChild(this.featuresView);this.featuresView.destroy()};k.prototype.hitTest=function(a,b){return this.featuresView.hitTest(a,b)};k.prototype.supportsRenderer=function(a){return null!=
a&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(a.type)};k.prototype.onConfigUpdate=function(a){var b=null;"visualVariables"in a&&(b=(x.simplifyVVRenderer(a).visualVariables||[]).map(function(a){var b=a.clone();"normalizationField"in a&&(b.normalizationField=null);a.valueExpression&&"$view.scale"!==a.valueExpression&&(b.valueExpression=null,b.field="nop");return b}),b=l.convertVisualVariables(b));this.featuresView.setRendererInfo(a,b,this.layerView.effects);this.featuresView.setClips(this.layerView.clips)};
k.prototype.onTileData=function(a){var b=this.tiles.get(a.tileKey);if(b)this.featuresView.onTileData(b,a.data);this.layerView.view.labelManager.requestUpdate()};k.prototype.onTileError=function(a){if(a=this.tiles.get(a.tileKey))this.featuresView.onTileError(a)};k.prototype.forceAttributeTextureUpload=function(){this.featuresView.attributeView.forceTextureUpload()};k.prototype.lockAttributeTextureUpload=function(){this.featuresView.attributeView.lockTextureUpload()};k.prototype.unlockAttributeTextureUpload=
function(){this.featuresView.attributeView.unlockTextureUpload()};k.prototype.getMaterialItems=function(a){return q(this,void 0,void 0,function(){return g(this,function(b){return[2,this.featuresView.getMaterialItems(a)]})})};k.prototype.invalidateLabels=function(){this.layer.labelingInfo&&this.layer.labelsVisible&&(this.tiles.forEach(function(a){return a.isDirty=!0}),this.layerView.view.labelManager.requestUpdate())};k.prototype.createTile=function(a){var b=this.tileInfoView.getTileBounds(u.create(),
a);a=new t.WGLTile(a,b);this.layer.labelingInfo&&this.layerView.view.labelManager.addTile(this.layerView,a);return a};k.prototype.disposeTile=function(a){this.featuresView.removeChild(a);this.layer.labelingInfo&&this.layerView.view.labelManager.removeTile(this.layerView,a.key.id);a.destroy();this.layerView.view.labelManager.requestUpdate()};return k=a([f.subclass("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],k)}(f.declared(n.default));d.default=p});