// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/extendsHelper ../core/tsSupport/decorateHelper ../core/typescript ./core/ExtensionBase ../tasks/support/FeatureSet".split(" "),function(l,m,e,f,g,h,k){return new (function(c){function a(){return c.call(this)||this}e(a,c);a.prototype._messageReceived=function(b){var a=this;"execute"===b.functionName.toLowerCase()&&this.getDataSourceProxy(b.args.dataSourceId).then(function(d){a._execute(d,new k(b.args.featureSet),b.args.configuration||b.args.config)})};a.prototype._execute=
function(a,c,d){this.emit("execute",{dataSourceProxy:a,features:c,config:d})};return a=f([g.subclass()],a)}(h))});