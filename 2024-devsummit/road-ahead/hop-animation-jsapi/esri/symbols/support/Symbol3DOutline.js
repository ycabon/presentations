// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../Color ../../core/JSONSupport ../../core/screenUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../patterns/utils ./materialUtils ./symbolLayerUtils3D".split(" "),function(a,b,g,h,k,c,p,q,r,l,m,f,n){var d;a.Symbol3DOutline=d=class extends h.JSONSupport{constructor(e){super(e);this.color=new g([0,0,0,1]);this.size=k.px2pt(1);this.pattern=null;this.patternCap=
"butt"}clone(){const e={color:null!=this.color?this.color.clone():null,size:this.size,pattern:null!=this.pattern?this.pattern.clone():null,patternCap:this.patternCap};return new d(e)}};b.__decorate([c.property(f.colorAndTransparencyProperty)],a.Symbol3DOutline.prototype,"color",void 0);b.__decorate([c.property(f.screenSizeProperty)],a.Symbol3DOutline.prototype,"size",void 0);b.__decorate([c.property(m.symbol3dLinePatternProperty)],a.Symbol3DOutline.prototype,"pattern",void 0);b.__decorate([c.property({type:n.lineCaps,
json:{default:"butt",write:{overridePolicy(){return{enabled:null!=this.pattern}}}}})],a.Symbol3DOutline.prototype,"patternCap",void 0);a.Symbol3DOutline=d=b.__decorate([l.subclass("esri.symbols.support.Symbol3DOutline")],a.Symbol3DOutline);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});