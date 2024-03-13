// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../Color ../core/Collection ../core/lang ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./IconSymbol3DLayer ./ObjectSymbol3DLayer ./Symbol3D ./TextSymbol3DLayer ./callouts/calloutUtils ./callouts/LineCallout3D ./support/Symbol3DVerticalOffset".split(" "),function(e,p,d,f,h,c,w,q,r,g,t,u,l,k,v,m){var b;const n=d.ofType({base:null,key:"type",typeMap:{icon:g,
object:t,text:l}});c=b=class extends u{constructor(a){super(a);this.callout=this.verticalOffset=null;this.symbolLayers=new n;this.type="point-3d"}supportsCallout(){if(1>(this.symbolLayers?this.symbolLayers.length:0))return!1;for(const a of this.symbolLayers.items)switch(a.type){case "icon":case "text":case "object":continue;default:return!1}return!0}hasVisibleCallout(){return k.hasVisibleCallout(this)}hasVisibleVerticalOffset(){return k.hasVisibleVerticalOffset(this)}clone(){return new b({verticalOffset:f.clone(this.verticalOffset),
callout:f.clone(this.callout),styleOrigin:f.clone(this.styleOrigin),symbolLayers:f.clone(this.symbolLayers),thumbnail:f.clone(this.thumbnail)})}static fromSimpleMarkerSymbol(a){return new b({symbolLayers:new d([g.fromSimpleMarkerSymbol(a)])})}static fromPictureMarkerSymbol(a){return new b({symbolLayers:new d([g.fromPictureMarkerSymbol(a)])})}static fromCIMSymbol(a){return"CIMPointSymbol"!==a.data?.symbol?.type?null:a.data.symbol?.callout?new b({symbolLayers:new d([g.fromCIMSymbol(a)]),callout:new v({size:.5,
color:new p([0,0,0])}),verticalOffset:new m({screenLength:40})}):new b({symbolLayers:new d([g.fromCIMSymbol(a)])})}static fromTextSymbol(a){return new b({symbolLayers:new d([l.fromTextSymbol(a)])})}};e.__decorate([h.property({type:m,json:{write:!0}})],c.prototype,"verticalOffset",void 0);e.__decorate([h.property(k.calloutProperty)],c.prototype,"callout",void 0);e.__decorate([h.property({type:n,json:{origins:{"web-scene":{write:!0}}}})],c.prototype,"symbolLayers",void 0);e.__decorate([q.enumeration({PointSymbol3D:"point-3d"},
{readOnly:!0})],c.prototype,"type",void 0);return c=b=e.__decorate([r.subclass("esri.symbols.PointSymbol3D")],c)});