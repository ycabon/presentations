// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/assignHelper ../core/tsSupport/generatorHelper ../core/tsSupport/awaiterHelper ../Color ../core/lang ../core/accessorSupport/decorators ../layers/support/fieldUtils ./Renderer ./mixins/VisualVariablesMixin ./support/AttributeColorInfo ./support/DotDensityLegendOptions ../symbols/SimpleFillSymbol ../symbols/SimpleLineSymbol".split(" "),function(x,y,p,d,z,h,k,l,e,c,q,r,t,u,v,w,m){return function(n){function a(b){b=
n.call(this,b)||this;b.attributes=null;b.backgroundColor=new l([0,0,0,0]);b.blendDots=!0;b.dotBlendingEnabled=!0;b.dotShape="square";b.dotSize=1;b.legendOptions=null;b.outline=new m;b.dotValue=null;b.referenceDotValue=null;b.referenceScale=null;b.seed=1;b.type="dot-density";return b}p(a,n);g=a;a.prototype.calculateDotValue=function(b){if(null==this.referenceScale)return this.dotValue;b=b/this.referenceScale*this.dotValue;return 1>b?1:b};a.prototype.getSymbol=function(){return new w({outline:this.outline})};
a.prototype.getSymbolAsync=function(){return k(this,void 0,void 0,function(){return h(this,function(b){return[2,this.getSymbol()]})})};a.prototype.getSymbols=function(){return[this.getSymbol()]};a.prototype.getAttributeHash=function(){return this.attributes&&this.attributes.reduce(function(b,a){return b+a.getAttributeHash()},"")};a.prototype.getMeshHash=function(){return JSON.stringify(this.outline)};a.prototype.clone=function(){return new g({attributes:e.clone(this.attributes),backgroundColor:e.clone(this.backgroundColor),
dotBlendingEnabled:e.clone(this.dotBlendingEnabled),dotShape:e.clone(this.dotShape),dotSize:e.clone(this.dotSize),dotValue:e.clone(this.dotValue),legendOptions:e.clone(this.legendOptions),outline:e.clone(this.outline),referenceScale:e.clone(this.referenceScale),visualVariables:e.clone(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})};a.prototype.getControllerHash=function(){var b=this.attributes.map(function(a){return a.field||a.valueExpression||""}),a=this.outline&&
JSON.stringify(this.outline.toJSON())||"";return b+"-"+a};a.prototype.collectRequiredFields=function(a,c){return k(this,void 0,void 0,function(){var b,d,e;return h(this,function(f){switch(f.label){case 0:return[4,this.collectVVRequiredFields(a,c)];case 1:f.sent(),b=0,d=this.attributes,f.label=2;case 2:if(!(b<d.length))return[3,6];e=d[b];return e.valueExpression?[4,q.collectArcadeFieldNames(a,c,e.valueExpression)]:[3,4];case 3:f.sent(),f.label=4;case 4:e.field&&a.add(e.field),f.label=5;case 5:return b++,
[3,2];case 6:return[2]}})})};var g;d([c.property({type:[u],json:{write:!0}})],a.prototype,"attributes",void 0);d([c.property({type:l,json:{write:!0}})],a.prototype,"backgroundColor",void 0);d([c.property({type:Boolean}),c.aliasOf("dotBlendingEnabled")],a.prototype,"blendDots",void 0);d([c.property({type:Boolean,json:{write:!0}})],a.prototype,"dotBlendingEnabled",void 0);d([c.property({type:String,json:{write:!0}})],a.prototype,"dotShape",void 0);d([c.property({type:Number,json:{write:!0}})],a.prototype,
"dotSize",void 0);d([c.property({type:v,json:{write:!0}})],a.prototype,"legendOptions",void 0);d([c.property({type:m,json:{default:null,write:!0}})],a.prototype,"outline",void 0);d([c.property({type:Number,json:{write:!0}})],a.prototype,"dotValue",void 0);d([c.property({type:Number}),c.aliasOf("dotValue")],a.prototype,"referenceDotValue",void 0);d([c.property({type:Number,json:{write:!0}})],a.prototype,"referenceScale",void 0);d([c.property({type:Number,json:{write:!0}})],a.prototype,"seed",void 0);
d([c.enumeration.serializable()({dotDensity:"dot-density"})],a.prototype,"type",void 0);return a=g=d([c.subclass("esri.renderers.DotDensityRenderer")],a)}(c.declared(t.VisualVariablesMixin(r)))});