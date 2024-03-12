// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/deprecate ../core/Logger ../core/reactiveUtils ../core/screenUtils ../core/accessorSupport/decorators/property ../core/has ../core/RandomLCG ../core/accessorSupport/decorators/subclass ../intl/number ../properties/defaultUnit ./Widget ./ScaleBar/css ./ScaleBar/ScaleBarViewModel ./support/globalCss ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory".split(" "),function(g,r,t,u,v,k,e,D,w,x,y,z,b,A,p,E,B,d){function q(a,c){return x.formatNumber(a,
{style:"unit",unit:c,unitDisplay:"short"})}e=class extends z{constructor(a,c){super(a,c);this.messages=null;this.style="line";this.viewModel=new A}initialize(){this.addHandles(u.watch(()=>{const {view:a}=this;return[a?.stationary,a?.center,a?.scale,a?.zoom]},([a])=>{a&&this.scheduleRender()}))}get label(){return this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",a)}get unit(){return this._defaultUnit}set unit(a){"non-metric"===a&&r.deprecatedProperty(t.getLogger(this),"unit",
{replacement:"Please use 'imperial' instead of 'non-metric'.",see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-ScaleBar.html#unit",version:"4.27",warnOnce:!0});this._overrideIfSome("unit",a)}get view(){return this.viewModel.view}set view(a){this.viewModel.view=a}render(){var a="disabled"===this.viewModel.state;const c={[p.globalCss.disabled]:a};let l,m;if(!a){const {unit:f,style:C}=this;var h="metric"===f||"dual"===f;a="dual"===f?"line":C;if("imperial"===f||"non-metric"===
f||"dual"===f){const n=this.viewModel.getScaleBarProperties(100,"imperial");n&&(m="ruler"===a?this._renderRuler(n):this._renderLine(n,"bottom"))}h&&(h=this.viewModel.getScaleBarProperties(100,"metric"))&&(l="ruler"===a?this._renderRuler(h):this._renderLine(h,"top"))}return d.tsx("div",{afterCreate:this._handleRootCreateOrUpdate,afterUpdate:this._handleRootCreateOrUpdate,bind:this,class:this.classes(b.css.base,p.globalCss.widget,c)},l,m)}_renderRuler(a){const {length:c,unit:l,value:m}=a;a=Math.round(c);
const h=q(m,l);return d.tsx("div",{class:this.classes(b.css.barContainer,b.css.rulerBarContainer),key:b.css.rulerBarContainer},d.tsx("div",{class:b.css.ruler,styles:{width:`${a}px`}},d.tsx("div",{class:b.css.rulerBlock}),d.tsx("div",{class:b.css.rulerBlock}),d.tsx("div",{class:b.css.rulerBlock}),d.tsx("div",{class:b.css.rulerBlock})),d.tsx("div",{class:this.classes(b.css.labelContainer,b.css.rulerLabelContainer)},d.tsx("div",{class:b.css.label},"0"),d.tsx("div",{class:b.css.label},h)))}_renderLine(a,
c){const {length:l,unit:m,value:h}=a;a=Math.round(l);var f=q(h,m);f=d.tsx("div",{class:this.classes(b.css.labelContainer,b.css.lineLabelContainer,{[b.css.topLabelContainer]:"top"===c,[b.css.bottomLabelContainer]:"bottom"===c}),key:b.css.labelContainer},d.tsx("div",{class:b.css.label},f));c=d.tsx("div",{class:this.classes(b.css.line,{[b.css.topLine]:"top"===c,[b.css.bottomLine]:"bottom"===c}),key:b.css.line,styles:{width:`${a}px`}});return d.tsx("div",{class:this.classes(b.css.barContainer,b.css.lineBarContainer),
key:b.css.lineBarContainer},[c,f])}_handleRootCreateOrUpdate(a){if(this.viewModel){var {scaleComputedFrom:c}=this.viewModel;a=a.getBoundingClientRect();a=v.createScreenPoint(a.left+window.pageXOffset,a.top+window.pageYOffset);if(a.x!==c.x||a.y!==c.y)this.viewModel.scaleComputedFrom=a}}};g.__decorate([k.property(y.defaultUnitPropertyMetadata)],e.prototype,"_defaultUnit",void 0);g.__decorate([k.property()],e.prototype,"label",null);g.__decorate([k.property(),B.messageBundle("esri/widgets/ScaleBar/t9n/ScaleBar")],
e.prototype,"messages",void 0);g.__decorate([k.property({type:["ruler","line"]})],e.prototype,"style",void 0);g.__decorate([k.property({type:["metric","imperial","dual","non-metric"]})],e.prototype,"unit",null);g.__decorate([k.property()],e.prototype,"view",null);g.__decorate([k.property()],e.prototype,"viewModel",void 0);return e=g.__decorate([w.subclass("esri.widgets.ScaleBar")],e)});