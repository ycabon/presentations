// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./treeAnalysis","./lib/arcade-parser","./lib/types"],function(b,d,e,c){b.parseScript=function(a,f=[]){a=e.parse(a);if(null===a.body||void 0===a.body)throw new c.ParsingError({index:0,line:0,column:0,data:null,description:"",code:c.ParsingErrorCodes.InvalidExpression});a.loadedModules={};d.findScriptDependencies(a,f);return a};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});