// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/decorateHelper ../../core/tsSupport/declareExtendsHelper ../../core/collectionUtils ../../core/Logger ../../core/accessorSupport/decorators ../../views/3d/interactive/analysisTools/lineOfSight/LineOfSightTool ../support/InteractiveToolViewModel".split(" "),function(n,p,d,k,f,l,c,e,m){var g=l.getLogger("esri.widgets.LineOfSight.LineOfSightViewModel");return function(h){function a(b){b=h.call(this,b)||this;b.supportedViewType="3d";return b}k(a,h);Object.defineProperty(a.prototype,
"state",{get:function(){return this.isDisabled?"disabled":this.tool?this.tool.state:"ready"},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"observer",{get:function(){return this.tool?this.tool.observer:this._get("observer")||null},set:function(b){this.tool?this.tool.observer=b:this._set("observer",b)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"targets",{get:function(){return this.tool?this.tool.targets:this._get("targets")||new e.LineOfSightTargetCollection},
set:function(b){b=f.referenceSetter(b,this.targets,e.LineOfSightTargetCollection);this.tool?this.tool.targets=b:this._set("targets",b)},enumerable:!0,configurable:!0});a.prototype.start=function(){return this.createTool()};a.prototype.clear=function(){this.removeTool();this._set("observer",null);this.targets.removeAll()};a.prototype.continue=function(){this.tool&&this.tool.continue()};a.prototype.stop=function(){this.tool&&this.tool.stop()};a.prototype.createToolParams=function(){var b=this;return{toolConstructor:e.LineOfSightTool,
constructorArguments:function(){return{observer:b.observer,targets:b.targets}}}};a.prototype.logUnsupportedError=function(){this.logError("LineOfSight widget is not implemented for MapView")};a.prototype.logError=function(){for(var b=[],a=0;a<arguments.length;a++)b[a]=arguments[a];g.error.apply(g,b)};d([c.property({dependsOn:["isDisabled","tool.attached","tool.state"],readOnly:!0})],a.prototype,"state",null);d([c.property()],a.prototype,"tool",void 0);d([c.property({dependsOn:["tool.observer"]})],
a.prototype,"observer",null);d([c.property({type:e.LineOfSightTargetCollection,dependsOn:["tool.targets"],cast:f.castForReferenceSetter,nonNullable:!0})],a.prototype,"targets",null);return a=d([c.subclass("esri.widgets.lineOfSight.LineOfSightViewModel")],a)}(c.declared(m.InteractiveToolViewModel))});