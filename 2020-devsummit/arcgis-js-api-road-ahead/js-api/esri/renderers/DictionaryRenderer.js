// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/assignHelper ../core/tsSupport/generatorHelper ../core/tsSupport/awaiterHelper ../Color ../request ../core/Error ../core/lang ../core/Logger ../core/LRUCache ../core/maybe ../core/promiseUtils ../core/SetUtils ../core/accessorSupport/decorators ../layers/support/fieldUtils ./Renderer ./mixins/VisualVariablesMixin ../support/arcadeOnDemand ../symbols/CIMSymbol".split(" "),function(W,X,
L,f,n,B,l,M,C,N,g,O,P,p,I,Q,e,R,S,T,J,U){var V=O.getLogger("esri.renderers.DictionaryRenderer");return function(K){function b(a){a=K.call(this,a)||this;a._ongoingRequests=new Map;a._symbolCache=new P(100);a.config=null;a.description=null;a.fieldMap=null;a.label=null;a.scaleExpression=null;a.url=null;a.type="dictionary";return a}L(b,K);w=b;b.prototype.clone=function(){return new w({config:g.clone(this.config),scaleExpression:g.clone(this.scaleExpression),description:g.clone(this.description),fieldMap:g.clone(this.fieldMap),
label:g.clone(this.label),url:g.clone(this.url),visualVariables:g.clone(this.visualVariables)})};b.prototype.collectRequiredFields=function(a,b){return l(this,void 0,void 0,function(){var t,c;return B(this,function(d){switch(d.label){case 0:return[4,this.collectVVRequiredFields(a,b)];case 1:return d.sent(),this.scaleExpression?[4,R.collectArcadeFieldNames(a,b,this.scaleExpression)]:[3,3];case 2:d.sent(),d.label=3;case 3:t=b.map(function(a){return a.name});for(c in this.fieldMap)0>t.indexOf(this.fieldMap[c])||
a.add(this.fieldMap[c]);return[2]}})})};Object.defineProperty(b.prototype,"arcadeRequired",{get:function(){return!0},enumerable:!0,configurable:!0});b.prototype.fetchResources=function(a){return l(this,void 0,void 0,function(){var b,t,c,d,x,m,e,h,E,f,q,g,y,u,k,r,A;return B(this,function(z){switch(z.label){case 0:if(!this.url)return V.error("no valid URL!"),[2,void 0];b=p.isSome(a)?a.abortOptions:null;t=C(this.url+"/resources/styles/dictionary-info.json",n({responseType:"json",query:{f:"json"}},b));
return[4,I.all([t,J.loadArcade()])];case 1:c=z.sent()[0].data;if(!c)throw new N("esri.renderers.DictionaryRenderer","Bad dictionary data!");d=c.expression;x=c.authoringInfo;this._refSymbolUrlTemplate=this.url+"/"+c.cimRefTemplateUrl;this._itemNames=Q.createSetFromValues(c.itemsNames);this._symbolAttributes=x.symbol;m={};if(this.config)for(h in e=this.config,e)m[h]=e[h];E=0;for(f=x.configuration;E<f.length;E++)h=f[E],m.hasOwnProperty(h.name)||(m[h.name]=h.value);q=[];if(p.isSome(a)&&a.fields)for(g=
function(b){var c=y.fieldMap[b],d=a.fields.filter(function(a){return a.name===c});0<d.length&&q.push(n({},d[0],{name:b}))},y=this,u=0,k=this._symbolAttributes;u<k.length;u++)h=k[u],g(h);return[4,J.createDictionaryExpression(d,p.isSome(a)?a.spatialReference:null,q,m)];case 2:return r=z.sent(),A={scale:0},[2,function(a,b){a=r.repurposeFeature({geometry:null,attributes:a});A.scale=p.isSome(b)?b.scale:void 0;return r.evaluate({$feature:a,$view:A})}]}})})};b.prototype.getSymbol=function(){return null};
b.prototype.getSymbolAsync=function(a,b){return l(this,void 0,void 0,function(){var t,c,d,x,m,e,z,f,g,q,l,y,u,k,r,A,n,v,D,p,w,F,G,C,H;return B(this,function(h){switch(h.label){case 0:return this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(b)),[4,this._dictionaryPromise];case 1:t=h.sent();c={};d=0;for(x=this._symbolAttributes;d<x.length;d++)m=x[d],(e=this.fieldMap[m])&&null!==a.attributes[e]&&void 0!==a.attributes[e]?(z=""+a.attributes[e],c[m]=z):c[m]="";f=t(c,b);if(!f||"string"!==
typeof f)return[2,null];g=f.split(";");q=[];l=[];y=0;for(u=g;y<u.length;y++)if((k=u[y])&&0!==k.length)if(-1!==k.indexOf("po:"))r=k.substr(3).split("|"),3===r.length&&(A=r[0],n=r[1],v=r[2],"DashTemplate"===n?v=v.split(" ").map(function(a){return Number(a)}):"Color"===n?(D=(new M(v)).toRgba(),v=[D[0],D[1],D[2],255*D[3]]):v=Number(v),l.push({primitiveName:A,propertyName:n,value:v}));else if(-1!==k.indexOf("|"))for(p=0,w=k.split("|");p<w.length;p++)F=w[p],this._itemNames.has(F)&&q.push(F);else this._itemNames.has(k)&&
q.push(k);G=q.join(";")+l.map(function(a){return a.primitiveName+";"+a.propertyName+";"+a.value});if(C=this._symbolCache.get(G))return[2,C];H=this._cimPartsToCIMSymbol(q,l,b);this._symbolCache.put(G,H,1);return[2,H]}})})};b.prototype.getSymbols=function(){return[]};b.prototype.getAttributeHash=function(){return this.visualVariables&&this.visualVariables.reduce(function(a,b){return a+b.getAttributeHash()},"")};b.prototype.getMeshHash=function(){return this.url+"-"+JSON.stringify(this.fieldMap)};b.prototype._getSymbolPart=
function(a,b){return l(this,void 0,void 0,function(){var e,c,d;return B(this,function(f){switch(f.label){case 0:if(this._ongoingRequests.has(a))return[2,this._ongoingRequests.get(a).then(function(a){return a.data})];e=this._refSymbolUrlTemplate.replace(/\{itemName\}/gi,a);c=C(e,n({responseType:"json",query:{f:"json"}},b));this._ongoingRequests.set(a,c);return[4,c];case 1:return d=f.sent(),[2,d.data]}})})};b.prototype._combineSymbolParts=function(a,b){var e;if(!a||0===a.length)return null;if(1===a.length)return{type:"CIMSymbolReference",
symbol:a[0],primitiveOverrides:b};var c=n({},a[0]);c.symbolLayers=[];for(var d=0;d<a.length;d++){var f=a[d];(e=c.symbolLayers).unshift.apply(e,f.symbolLayers)}return{type:"CIMSymbolReference",symbol:c,primitiveOverrides:b}};b.prototype._cimPartsToCIMSymbol=function(a,b,e){return l(this,void 0,void 0,function(){var c,d,f;return B(this,function(g){switch(g.label){case 0:c=Array(a.length);for(d=0;d<a.length;d++)c[d]=this._getSymbolPart(a[d],e);return[4,I.eachAlwaysValues(c)];case 1:return f=g.sent(),
[2,new U({data:this._combineSymbolParts(f,b)})]}})})};var w;f([e.property({type:Object,json:{write:!0}})],b.prototype,"config",void 0);f([e.property({type:String,json:{write:!0}})],b.prototype,"description",void 0);f([e.property({type:Object,json:{write:!0}})],b.prototype,"fieldMap",void 0);f([e.property({type:String,json:{write:!0}})],b.prototype,"label",void 0);f([e.property({type:String,json:{write:!0}})],b.prototype,"scaleExpression",void 0);f([e.property({type:String,json:{write:!0}})],b.prototype,
"url",void 0);return b=w=f([e.subclass("esri.renderers.DictionaryRenderer")],b)}(e.declared(T.VisualVariablesMixin(S)))});