// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper dojo/_base/lang ./DefaultVertexAttributeLocations ./Util ../../../webgl/Program".split(" "),function(r,t,u,n,p,h,q){return function(){function m(a,b,c,f,k,d){this.variables=[];this.sealed=!1;this.programCache={};h.assert(2===b.length,"you must specify shader snippet prefixes for vertex and fragment shaders");this.programNamePrefix=a;this.shaderSnippetPrefixes=b;this.baseDefines=c;this.programRep=f;this.snippets=k;this.rctx=d;this.baseDefines=
c?c.slice():[]}m.prototype.addDefine=function(a,b,c,f){h.assert(!this.sealed,"you cannot add another variable after the first program has been generated");h.assert(!!a,"you must specify a program name suffix");this.variables.push({programNameSuffixes:["",a],shaderNameSuffixes:f||a,defineStr:b,affectsShaderTypes:c||[!0,!0]})};m.prototype.addBinaryShaderSnippetSuffix=function(a,b,c){h.assert(!this.sealed,"you cannot add another variable after the first program has been generated");h.assert(!!a,"you must specify a program name suffix");
this.variables.push({programNameSuffixes:["",a],shaderSnippetSuffixes:["",b],affectsShaderTypes:c||[!0,!0]})};m.prototype.addNaryShaderSnippetSuffix=function(a,b){h.assert(!this.sealed,"you cannot add another variable after the first program has been generated");var c=a.map(function(a){h.assert(null!=a.value,"value must always be specified");return a.value});this.variables.push({values:c,programNameSuffixes:a.map(function(a,b){return null!=a.programNameSuffix?a.programNameSuffix:c[b]}),shaderSnippetSuffixes:a.map(function(a,
b){return null!=a.shaderSnippetSuffix?a.shaderSnippetSuffix:c[b]}),affectsShaderTypes:b||[!0,!0]})};m.prototype.getShaderVariation=function(a){h.assert(a.length===this.variables.length,"you must specify a value for each variable");for(var b=this.programNamePrefix,c=n.clone(this.shaderSnippetPrefixes),f=n.clone(this.shaderSnippetPrefixes),k=n.clone(this.baseDefines),d=0;d<this.variables.length;d++){var e=this.variables[d],g=a[d],l=void 0;e.values?(l=e.values.indexOf(g.toString()),h.assert(0<=l,"invalid value "+
g+" for variable "+d)):l=g?1:0;b+=e.programNameSuffixes[l];for(g=0;2>g;g++)e.affectsShaderTypes[g]&&(e.shaderSnippetSuffixes&&(c[g]+=e.shaderSnippetSuffixes[l],f[g]+=e.shaderSnippetSuffixes[l]),e.defineStr&&l&&(k.push(e.defineStr),f[g]+=e.shaderNameSuffixes))}return{programName:b,shaderSnippetNames:c,shaderNames:f,defines:k}};m.prototype.getProgram=function(a,b,c,f){void 0===b&&(b=this.snippets);void 0===c&&(c=this.rctx);void 0===f&&(f=p.Default3D);this.sealed=!0;var k=a.reduce(function(a,b){return a+
b.toString()},"");if(this.programCache[k])return this.programCache[k];a=this.getShaderVariation(a);var d=this.programRep.get(a.programName);if(d)return d;var e=a.shaderSnippetNames[0],d=b[e];h.assert(null!=d,"shader snippet '"+e+"' does not exist");e=a.shaderSnippetNames[1];b=b[e];h.assert(null!=b,"shader snippet '"+e+"' does not exist");d=new q(c,d,b,f,a.defines);this.programCache[k]=d;this.programRep.add(a.programName,d);return d};return m}()});