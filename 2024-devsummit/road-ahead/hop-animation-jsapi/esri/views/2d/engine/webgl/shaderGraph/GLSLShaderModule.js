// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/string","./typed/TypedShaderProgram"],function(g,h,k){class l{constructor(){this.computeAttributes={}}get locationsMap(){const d=new Map;for(const e in this.locations)d.set(e,this.locations[e].index);return d}get optionPropertyKeys(){this._optionPropertyKeys||(this._optionPropertyKeys=new Set(Object.keys(this.options)));return this._optionPropertyKeys}get _transformFeedbackBindings(){return[]}get locationInfo(){if(!this._locationInfo){const d=this.locationsMap,
e=Array.from(d.entries()).map(([b,a])=>`${b}.${a}`).join(".");this._locationInfo={hash:h.numericHash(e),locations:d}}return this._locationInfo}getShaderKey(d,e,b){const a=Object.keys(b).filter(c=>b[c]).map(c=>`${c}_${b[c].toString()}`).join(".");e=Object.keys(e).filter(c=>this.optionPropertyKeys.has(c)).join(".");return`${d.hash}.${a}.${e}`}getProgram(d,e,b,a){a=d="";for(const c in b)if(b[c]){const f="boolean"===typeof b[c]?`#define ${c}\n`:`#define ${c} ${b[c]}\n`;d+=f;a+=f}d+=this.vertexShader;
a+=this.fragmentShader;return new k.TypedShaderProgram(d,a,this.locationsMap,this.locationInfo,this._getUniformBindings(e),this._transformFeedbackBindings)}_getUniformBindings(d){const e=[];for(var b in this.required){var a=this.required[b];e.push({uniformHydrated:null,shaderModulePath:b,uniformName:b,uniformType:a.type,uniformArrayElementType:"array"===a.type?a.elementType?.type:void 0,uniformArrayLength:"array"===a.type?a.size:void 0})}for(const c in d)if(b=this.options[c],d[c])for(const f in b)a=
b[f],e.push({uniformHydrated:null,shaderModulePath:`${c}.${f}`,uniformName:f,uniformType:a.type,uniformArrayElementType:"array"===a.type?a.elementType?.type:void 0,uniformArrayLength:"array"===a.type?a.size:void 0});return e}}g.GLSLShaderModule=l;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});