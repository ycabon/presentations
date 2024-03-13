// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/Error ../core/MultiOriginJSONSupport ../core/scheduling ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass ./Layer ./mixins/PortalLayer".split(" "),function(c,h,a,k,e,p,q,r,l,m,n){a=class extends n.PortalLayer(a.MultiOriginJSONMixin(m)){constructor(b){super(b);this.resourceInfo=null;this.type="unknown"}initialize(){this.addResolvingPromise(new Promise((b,d)=>{k.schedule(()=>{const f=
this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let g="Unknown layer type";f&&(g+=" "+f);d(new h("layer:unknown-layer-type",g,{layerType:f}))})}))}read(b,d){super.read({resourceInfo:b},d)}write(b,d){return null}};c.__decorate([e.property({readOnly:!0})],a.prototype,"resourceInfo",void 0);c.__decorate([e.property({type:["show","hide"]})],a.prototype,"listMode",void 0);c.__decorate([e.property({json:{read:!1},readOnly:!0,value:"unknown"})],a.prototype,"type",void 0);return a=
c.__decorate([l.subclass("esri.layers.UnknownLayer")],a)});