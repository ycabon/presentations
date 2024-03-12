// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/Error ../core/MultiOriginJSONSupport ../core/scheduling ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass ./Layer ./mixins/PortalLayer".split(" "),function(d,h,b,k,e,p,q,r,l,m,n){b=class extends n.PortalLayer(b.MultiOriginJSONMixin(m)){constructor(a){super(a);this.resourceInfo=null;this.persistenceEnabled=!0;this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((a,
f)=>{k.schedule(()=>{const c=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let g="Unsupported layer type";c&&(g+=" "+c);f(new h("layer:unsupported-layer-type",g,{layerType:c}))})}))}read(a,f){const c={resourceInfo:a};null!=a.id&&(c.id=a.id);null!=a.title&&(c.title=a.title);super.read(c,f)}write(a,f){return Object.assign(a||{},this.resourceInfo,{id:this.id})}};d.__decorate([e.property({readOnly:!0})],b.prototype,"resourceInfo",void 0);d.__decorate([e.property({type:["show",
"hide"]})],b.prototype,"listMode",void 0);d.__decorate([e.property({type:Boolean,readOnly:!1})],b.prototype,"persistenceEnabled",void 0);d.__decorate([e.property({json:{read:!1},readOnly:!0,value:"unsupported"})],b.prototype,"type",void 0);return b=d.__decorate([l.subclass("esri.layers.UnsupportedLayer")],b)});