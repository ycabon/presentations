// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/declareExtendsHelper ../../../core/lang ../../../core/accessorSupport/decorators ../../../renderers/visualVariables/SizeVariable ../../../renderers/visualVariables/support/sizeVariableUtils".split(" "),function(f,g,d,k,l,b,m,h){Object.defineProperty(g,"__esModule",{value:!0});f=function(c){function a(){return null!==c&&c.apply(this,arguments)||this}k(a,c);e=a;a.prototype.writeLevels=function(a,b,d){for(var c in a){b.stops=
this.levels[c];break}};a.prototype.clone=function(){return new e({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:h.isSizeVariable(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:h.isSizeVariable(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map(function(a){return a.clone()}),target:this.target,
useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:l.clone(this.levels)})};var e;d([b.property()],a.prototype,"levels",void 0);d([b.writer("levels")],a.prototype,"writeLevels",null);return a=e=d([b.subclass("esri.views.2d.engine.LevelDependentSizeVariable")],a)}(b.declared(m));g.LevelDependentSizeVariable=f});