// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../Graphic ../../core/Accessor ../../core/HandleOwner ../../core/promiseUtils ../../core/watchUtils ../../core/accessorSupport/decorators ../../symbols/support/symbolUtils".split(" "),function(f,v,n,d,k,l,p,q,r,g,t,c,u){return function(m){function b(a){a=m.call(this,a)||this;a.description=null;a.label=null;a.layer=null;a.template=
null;a.thumbnail=null;return a}n(b,m);h=b;b.prototype.initialize=function(){var a=this;this.handles.add(t.init(this,["layer.renderer","template"],function(){return a._set("thumbnail",null)}))};b.prototype.clone=function(){var a=this.thumbnail?this.thumbnail.cloneNode(!0):null,e=new h({layer:this.layer,template:this.template});e._set("thumbnail",a);return e};b.prototype.fetchThumbnail=function(){return l(this,void 0,void 0,function(){var a,e;return k(this,function(b){switch(b.label){case 0:return this._get("thumbnail")?
[2,g.resolve()]:[4,this._getPreviewSymbol()];case 1:return a=b.sent(),[4,u.renderPreviewHTML(a,{maxSize:36})];case 2:return e=b.sent(),this._set("thumbnail",e),[2]}})})};b.prototype._getPreviewSymbol=function(){return l(this,void 0,void 0,function(){var a,e,b,c,d,g;return k(this,function(f){switch(f.label){case 0:a=this;e=a.layer;b=a.template;c=a.layer.renderer;if(!c)return[3,2];d=new p({attributes:b.prototype.attributes});return[4,c.getSymbolAsync(d)];case 1:if(g=f.sent())return[2,g];f.label=2;case 2:return[2,
this._getFallbackSymbolFromGeometry(e)]}})})};b.prototype._getFallbackSymbolFromGeometry=function(a){a=a.geometryType;if("point"===a||"multipoint"===a)return g.create(function(a){return f(["../../symbols/SimpleMarkerSymbol"],a)}).then(function(a){return new a});if("polyline"===a)return g.create(function(a){return f(["../../symbols/SimpleLineSymbol"],a)}).then(function(a){return new a});if("polygon"===a||"mesh"===a||"multipatch"===a)return g.create(function(a){return f(["../../symbols/SimpleFillSymbol"],
a)}).then(function(a){return new a})};var h;d([c.property({aliasOf:"template.description"})],b.prototype,"description",void 0);d([c.property({aliasOf:"template.name"})],b.prototype,"label",void 0);d([c.property()],b.prototype,"layer",void 0);d([c.property()],b.prototype,"template",void 0);d([c.property({readOnly:!0})],b.prototype,"thumbnail",void 0);return b=h=d([c.subclass("esri.widgets.FeatureTemplates.TemplateItem")],b)}(c.declared(r.HandleOwnerMixin(q)))});