// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/tsSupport/assignHelper ../../../core/tsSupport/restHelper ../../../core/Error ../../../core/maybe ../../../core/promiseUtils ./support/utils ../support/utils".split(" "),function(v,w,f,a,p,h,k,q,r,t,l){function u(b){return a(this,void 0,void 0,function(){var d,m,g,c,e,a,n;return f(this,function(f){switch(f.label){case 0:if(!(b&&b.layer&&b.view&&b.fields))throw new k("predominant-categories:missing-parameters",
"'layer', 'view' and 'fields' parameters are required");d=[0,2,1,3,4];m=b.layer;g=h(b,["layer"]);c=l.createLayerAdapter(m,d);e=p({layerAdapter:c},g);if(!c)throw new k("predominant-categories:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(d).join(", "));a=q.isSome(e.signal)?{signal:e.signal}:null;return[4,r.all([e.view.when(),c.load(a)])];case 1:f.sent();if(n=t.verifyBasicFieldValidity(c,e.fields,"predominant-categories:invalid-parameters"))throw n;return[2,e]}})})}
return function(b){return a(this,void 0,void 0,function(){var d,a,g;return f(this,function(c){switch(c.label){case 0:return[4,u(b)];case 1:return d=c.sent(),a=d.layerAdapter,g=h(d,["layerAdapter"]),[2,a.predominantCategories(g)]}})})}});