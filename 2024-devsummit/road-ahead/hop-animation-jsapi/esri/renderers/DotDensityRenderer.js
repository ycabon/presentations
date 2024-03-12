// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../Color ../core/lang ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ../layers/support/fieldUtils ./Renderer ./mixins/VisualVariablesMixin ./support/AttributeColorInfo ./support/DotDensityLegendOptions ../symbols/SimpleFillSymbol ../symbols/SimpleLineSymbol".split(" "),function(c,k,d,e,a,w,m,n,p,q,r,t,u,v,l){var h;a=h=class extends r.VisualVariablesMixin(q){constructor(b){super(b);
this.attributes=null;this.backgroundColor=new k([0,0,0,0]);this.dotBlendingEnabled=!0;this.dotShape="square";this.dotSize=1;this.legendOptions=null;this.outline=new l;this.referenceScale=this.dotValue=null;this.seed=1;this.type="dot-density"}calculateDotValue(b){if(null==this.referenceScale)return this.dotValue;b=b/this.referenceScale*this.dotValue;return 1>b?1:b}getSymbol(){return new v({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}getAttributeHash(){return this.attributes?.reduce((b,
g)=>b+g.getAttributeHash(),"")??""}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new h({attributes:d.clone(this.attributes),backgroundColor:d.clone(this.backgroundColor),dotBlendingEnabled:d.clone(this.dotBlendingEnabled),dotShape:d.clone(this.dotShape),dotSize:d.clone(this.dotSize),dotValue:d.clone(this.dotValue),legendOptions:d.clone(this.legendOptions),outline:d.clone(this.outline),referenceScale:d.clone(this.referenceScale),seed:d.clone(this.seed),visualVariables:d.clone(this.visualVariables),
authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}getControllerHash(){const b=this.attributes?.map(f=>f.field||f.valueExpression||""),g=this.outline&&JSON.stringify(this.outline.toJSON())||"";return`${b}-${g}`}async collectRequiredFields(b,g){await this.collectVVRequiredFields(b,g);for(const f of this.attributes??[])f.valueExpression&&await p.collectArcadeFieldNames(b,g,f.valueExpression),f.field&&b.add(f.field)}};c.__decorate([e.property({type:[t],json:{write:!0}})],a.prototype,"attributes",
void 0);c.__decorate([e.property({type:k,json:{write:!0}})],a.prototype,"backgroundColor",void 0);c.__decorate([e.property({type:Boolean,json:{write:!0}})],a.prototype,"dotBlendingEnabled",void 0);c.__decorate([e.property({type:String,json:{write:!1}})],a.prototype,"dotShape",void 0);c.__decorate([e.property({type:Number,json:{write:!0}})],a.prototype,"dotSize",void 0);c.__decorate([e.property({type:u,json:{write:!0}})],a.prototype,"legendOptions",void 0);c.__decorate([e.property({type:l,json:{default:null,
write:!0}})],a.prototype,"outline",void 0);c.__decorate([e.property({type:Number,json:{write:!0}})],a.prototype,"dotValue",void 0);c.__decorate([e.property({type:Number,json:{write:!0}})],a.prototype,"referenceScale",void 0);c.__decorate([e.property({type:Number,json:{write:!0}})],a.prototype,"seed",void 0);c.__decorate([m.enumeration({dotDensity:"dot-density"})],a.prototype,"type",void 0);return a=h=c.__decorate([n.subclass("esri.renderers.DotDensityRenderer")],a)});