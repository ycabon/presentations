// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/Evented ../../../core/Identifiable ../../../core/Promise ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass".split(" "),function(e,b,g,h,k,c,m,n,p,l){e.BuildingSublayerView3DMixin=(a,q)=>{a=class extends k.EsriPromiseMixin(h.IdentifiableMixin(g.EventedMixin(a))){constructor(d){super(d);this.view=this.parent=this.sublayer=null}initialize(){}get suspended(){return!this.canResume()}get updating(){return!this.suspended&&
this.isUpdating()}get visible(){return!!this.sublayer?.visible}set visible(d){this._overrideIfSome("visible",d)}get fullOpacity(){var d=this.sublayer?.opacity,f=this.parent?.fullOpacity;return(null!=d?d:1)*(null!=f?f:1)}canResume(){return!this.parent?.suspended&&this.view?.ready&&this.visible||!1}isUpdating(){return!1}};b.__decorate([c.property()],a.prototype,"sublayer",void 0);b.__decorate([c.property()],a.prototype,"parent",void 0);b.__decorate([c.property({readOnly:!0})],a.prototype,"suspended",
null);b.__decorate([c.property({type:Boolean,readOnly:!0})],a.prototype,"updating",null);b.__decorate([c.property()],a.prototype,"view",void 0);b.__decorate([c.property()],a.prototype,"visible",null);b.__decorate([c.property()],a.prototype,"fullOpacity",null);return a=b.__decorate([l.subclass("esri.views.3d.layers.BuildingSublayerView3D")],a)};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});