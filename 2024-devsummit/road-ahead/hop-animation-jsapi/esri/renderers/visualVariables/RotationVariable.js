// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Error ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ./VisualVariable".split(" "),function(b,g,c,a,m,n,h,k,l){var d;a=d=class extends l{constructor(f){super(f);this.axis=null;this.type="rotation";this.rotationType="geographic";this.valueExpressionTitle=null}get cache(){return{hasExpression:!!this.valueExpression,
compiledFunc:null}}writeValueExpressionTitleWebScene(f,p,q,e){e?.messages&&e.messages.push(new g("property:unsupported",this.type+"VisualVariable.valueExpressionTitle is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:`visualVariables[${this.index}]`+".valueExpressionTitle",context:e}))}clone(){return new d({axis:this.axis,rotationType:this.rotationType,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,
legendOptions:this.legendOptions?.clone()})}};b.__decorate([c.property({readOnly:!0})],a.prototype,"cache",null);b.__decorate([c.property({type:["heading","tilt","roll"],json:{origins:{"web-scene":{default:"heading",write:!0}}}})],a.prototype,"axis",void 0);b.__decorate([c.property({type:["rotation"],json:{type:["rotationInfo"]}})],a.prototype,"type",void 0);b.__decorate([c.property({type:["geographic","arithmetic"],json:{write:!0,origins:{"web-document":{write:!0,default:"geographic"}}}})],a.prototype,
"rotationType",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"valueExpressionTitle",void 0);b.__decorate([k.writer("web-scene","valueExpressionTitle")],a.prototype,"writeValueExpressionTitleWebScene",null);return a=d=b.__decorate([h.subclass("esri.renderers.visualVariables.RotationVariable")],a)});