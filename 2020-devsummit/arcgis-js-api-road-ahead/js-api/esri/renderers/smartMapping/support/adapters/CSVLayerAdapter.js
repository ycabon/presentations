// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/Error ../../../../core/promiseUtils ../../../../core/accessorSupport/decorators ../../statistics/support/utils ../utils ./FeatureLayerAdapter ./support/utils ../../../../tasks/support/generateRendererUtils".split(" "),function(D,E,v,w,x,y,p,z,q,A,B,C,h,r){function t(b){return"esri.tasks.support.ClassBreaksDefinition"===
b.declaredClass}function u(b){return"esri.tasks.support.UniqueValueDefinition"===b.declaredClass}return function(b){function c(a){return b.call(this,a)||this}v(c,b);c.prototype._createGenerateRendererResult=function(a,k,b,d,n){return y(this,void 0,void 0,function(){var f,c,g,m,e;return x(this,function(l){switch(l.label){case 0:c=(f=a&&a.features)&&f.length;if(!c)throw new p("csv-layer-adapter:insufficient-data","No features are available to calculate statistics");g=null;return"percent-of-total"!==
d?[3,2]:[4,h.calculateStatsFromMemory({field:k},f)];case 1:m=l.sent();g=m.sum;if(null==g)throw new p("csv-layer-adapter:invalid","invalid normalizationTotal");l.label=2;case 2:return t(n)?[4,h.getDataValues({field:k,normalizationType:d,normalizationField:b,normalizationTotal:g},f)]:[3,4];case 3:return e=l.sent().filter(function(a){return null!=a&&h.isValidNumber(a)}),[2,r.createGenerateRendererClassBreaks({definition:n,values:e,normalizationTotal:g})];case 4:return u(n)?[4,h.getDataValues({field:k},
f)]:[3,6];case 5:return e=l.sent().filter(function(a){return null!=a&&"string"===typeof a&&""!==a.trim()}),[2,r.createGenerateRendererUniqueValues(e)];case 6:return[2,void 0]}})})};c.prototype.generateRenderer=function(a,k){var c=this,d=a.classificationDefinition,b=null,f=null,h=null;t(d)?(b=d.classificationField,f=d.normalizationField,h=d.normalizationType):u(d)&&(b=d.attributeField);var g=this.layer;return B.getFieldsList({field:b,normalizationField:f}).then(function(m){var e=g.createQuery();e.returnGeometry=
!1;e.outFields=m;e.where=A.mergeWhereClauses(e.where,a.where);return g.queryFeatures(e,{signal:k}).then(function(a){return c._createGenerateRendererResult(a,b,f,h,d)})})};c.prototype.load=function(a){var b=this;a=this.layer.load(a).then(function(a){b.geometryType=a.geometryType;b.objectIdField=a.objectIdField;b.supportsSQLExpression=!0;b._hasLocalSource=!1;b.hasQueryEngine=!0});this.addResolvingPromise(a);return z.resolve(this)};return c=w([q.subclass("esri.renderers.smartMapping.support.adapters.CSVLayerAdapter")],
c)}(q.declared(C))});