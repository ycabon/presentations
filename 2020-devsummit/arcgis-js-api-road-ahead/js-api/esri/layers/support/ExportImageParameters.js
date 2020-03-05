// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/accessorSupport/decorators ./sublayerUtils ./timeUtils ../../views/View".split(" "),function(f,h,k,l,d,m,c,n,p,q){Object.defineProperty(h,"__esModule",{value:!0});var r={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",
maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};f=function(e){function b(){var a=null!==e&&e.apply(this,arguments)||this;a._scale=null;a.view=null;return a}l(b,e);Object.defineProperty(b.prototype,"dynamicLayers",{get:function(){if(!this.hasDynamicLayers)return null;var a=this.visibleSublayers.map(function(a){return a.toExportImageJSON()});return a.length?JSON.stringify(a):null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hasDynamicLayers",
{get:function(){return this.layer&&n.isExportDynamic(this.visibleSublayers,this.layer.serviceSublayers,this.layer)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"layer",{set:function(a){var b=this;this._get("layer")!==a&&(this._set("layer",a),this._layerHandles&&(this._layerHandles.forEach(function(a){return a.remove()}),this._layerHandles.length=0),a&&(this._layerHandles=[a.allSublayers.on("change",function(){return b.notifyChange("visibleSublayers")}),a.on("sublayer-update",
function(a){return b.notifyChange(r[a.propertyName])})]))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"layers",{get:function(){var a=this.visibleSublayers;return a?a.length?"show:"+a.map(function(a){return a.id}).join(","):"show:-1":null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"layerDefs",{get:function(){var a=this.visibleSublayers.filter(function(a){return null!=a.definitionExpression});return a.length?JSON.stringify(a.reduce(function(a,b){a[b.id]=
b.definitionExpression;return a},{})):null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"scale",{get:function(){return null!=this._scale?this._scale:this.view&&this.view.scale||0},set:function(a){this.view||(this._scale=a,this.notifyChange("scale"))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"version",{get:function(){this.layers;this.layerDefs;this.dynamicLayers;this.timeExtent;var a=this.layer;a&&(a.dpi,a.imageFormat,a.imageTransparency,a.gdbVersion);
return(this._get("version")||0)+1},set:function(a){this._set("version",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"visibleSublayers",{get:function(){var a=this,b=[];if(!this.layer)return b;var c=this.layer.sublayers,d=function(c){var g=a.scale,e=0===c.minScale||g<=c.minScale,f=0===c.maxScale||g>=c.maxScale;c.visible&&(0===g||e&&f)&&(c.sublayers?c.sublayers.forEach(d):b.unshift(c))};c&&c.forEach(d);c=this._get("visibleSublayers");return!c||c.length!==b.length||c.some(function(a,
c){return b[c]!==a})?b:c},enumerable:!0,configurable:!0});b.prototype.toJSON=function(){var a=this.layer,a={dpi:a.dpi,format:a.imageFormat,transparent:a.imageTransparency,gdbVersion:a.gdbVersion||null};this.hasDynamicLayers&&this.dynamicLayers?a.dynamicLayers=this.dynamicLayers:a=k({},a,{layers:this.layers,layerDefs:this.layerDefs});return a};d([c.property({readOnly:!0,dependsOn:["hasDynamicLayers","visibleSublayers"]})],b.prototype,"dynamicLayers",null);d([c.property({readOnly:!0,dependsOn:["visibleSublayers",
"layer.serviceSublayers","layer.capabilities"]})],b.prototype,"hasDynamicLayers",null);d([c.property()],b.prototype,"layer",null);d([c.property({readOnly:!0,dependsOn:["visibleSublayers"]})],b.prototype,"layers",null);d([c.property({readOnly:!0,dependsOn:["visibleSublayers"]})],b.prototype,"layerDefs",null);d([c.property({type:Number,dependsOn:["view.scale"]})],b.prototype,"scale",null);d([c.property(p.combinedViewLayerTimeExtentProperty)],b.prototype,"timeExtent",void 0);d([c.property({dependsOn:"layers layerDefs dynamicLayers layer.dpi layer.imageFormat layer.imageTransparency layer.gdbVersion timeExtent".split(" ")})],
b.prototype,"version",null);d([c.property({type:q})],b.prototype,"view",void 0);d([c.property({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],b.prototype,"visibleSublayers",null);return b=d([c.subclass("esri.layers.mixins.ExportImageParameters")],b)}(c.declared(m));h.ExportImageParameters=f});