// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ./Symbol3DLayer ./support/Symbol3DMaterial ./support/symbolLayerUtils3D".split(" "),function(b,c,a,p,q,k,g,l,m,n,h){var f;a=f=class extends m{constructor(d){super(d);this.material=null;this.castShadows=!0;this.type="path";this.profile="circle";this.join=
"miter";this.cap="butt";this.height=this.width=void 0;this.anchor="center";this.profileRotation="all"}readWidth(d,e){return null!=d?d:null==e.height&&null!=e.size?e.size:void 0}readHeight(d,e){return null!=d?d:null==e.width&&null!=e.size?e.size:void 0}clone(){return new f({enabled:this.enabled,material:null!=this.material?this.material.clone():null,castShadows:this.castShadows,profile:this.profile,join:this.join,cap:this.cap,width:this.width,height:this.height,profileRotation:this.profileRotation,
anchor:this.anchor})}};b.__decorate([c.property({type:n.Symbol3DMaterial,json:{write:!0}})],a.prototype,"material",void 0);b.__decorate([c.property({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],a.prototype,"castShadows",void 0);b.__decorate([k.enumeration({Path:"path"},{readOnly:!0})],a.prototype,"type",void 0);b.__decorate([c.property({type:["circle","quad"],json:{write:!0,default:"circle"}})],a.prototype,"profile",void 0);b.__decorate([c.property({type:h.lineJoins,json:{write:!0,default:"miter"}})],
a.prototype,"join",void 0);b.__decorate([c.property({type:h.pathCaps,json:{write:!0,default:"butt"}})],a.prototype,"cap",void 0);b.__decorate([c.property({type:Number,json:{write:{enabled:!0,target:{width:{type:Number},size:{type:Number}}}}})],a.prototype,"width",void 0);b.__decorate([g.reader("width",["width","size","height"])],a.prototype,"readWidth",null);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"height",void 0);b.__decorate([g.reader("height",["height","size","width"])],
a.prototype,"readHeight",null);b.__decorate([c.property({type:["center","bottom","top"],json:{write:!0,default:"center"}})],a.prototype,"anchor",void 0);b.__decorate([c.property({type:["heading","all"],json:{write:!0,default:"all"}})],a.prototype,"profileRotation",void 0);return a=f=b.__decorate([l.subclass("esri.symbols.PathSymbol3DLayer")],a)});