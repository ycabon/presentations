// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("require ../chunks/tslib.es6 ../chunks/componentsUtils ../intl ../request ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass ../intl/date ../time/timeZoneUtils ./Widget ./support/globalCss ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory ./TimeZoneLabel/css ./TimeZoneLabel/TimeZoneLabelViewModel ../intl/locale ../intl/substitute ../intl/messages".split(" "),function(n,d,p,c,u,e,E,
F,G,v,w,x,y,q,r,z,k,f,A,t,B,C){c=class extends y{constructor(a,b){super(a,b);this.expanded=this.disabled=!1;this.messages=this.inputTimeZoneMessages=this.icon=null;this.viewModel=new A;this._onExpanderClick=()=>{this.expanded=!this.expanded}}initialize(){this.addHandles(t.onLocaleChange(()=>this._updateMessageBundle()));this._updateMessageBundle()}loadDependencies(){return p.loadCalciteComponents({action:()=>new Promise((a,b)=>n(["../chunks/calcite-action"],a,b)),icon:()=>new Promise((a,b)=>n(["../chunks/calcite-icon"],
a,b))})}get expandDirection(){if(!this.view||!this.container)return"end";const a=r.isRTL();switch(this.view.ui.getPosition(this.container)){case "top-right":case "bottom-right":case "top-trailing":case "bottom-trailing":return a?"end":"start";case "top-left":case "bottom-left":case "top-leading":case "bottom-leading":return a?"start":"end";default:return"end"}}set expandDirection(a){this._overrideIfSome("expandDirection",a)}get formattedTimeZone(){var {timeZoneComponents:a}=this.viewModel;if(!a)return"";
const {timeZone:b}=a;if("area"in a){const {area:g,location:l}=a;if("etc"===g.toLowerCase())return w.getShortOffsetTimeZoneSuffix(b)??b;a=this.messages.area[g.toLowerCase()]??g;const h=Object.entries(this.inputTimeZoneMessages??{}).find(([m])=>m.toLowerCase()===b.toLowerCase())?.[1]??l;return B.substitute(this.messages.locationArea,{area:a,location:h})}return b===x.unknown?this.messages.noAdjustment:b}get interactive(){return!(this.disabled||"disabled"===this.viewModel.state)}get label(){return this.messages.widgetLabel}set label(a){this._overrideIfSome("label",
a)}get view(){return this.viewModel.view}set view(a){this.viewModel.view=a}render(){const {expandDirection:a,interactive:b,label:g}=this,l=this.classes(f.css.base,q.globalCss.widget,!b&&q.globalCss.disabled);var h=this._renderExpander();const m=this._renderName(),D=this._renderBadge();h=[h,m,D];"start"===a&&h.reverse();return k.tsx("div",{"aria-label":g,class:l},h)}_getIcon(){const {expanded:a,expandDirection:b}=this;return a?r.isRTL()?"start"===b?"chevrons-left":"chevrons-right":"start"===b?"chevrons-right":
"chevrons-left":"time-zone"}_renderExpander(){const {interactive:a,label:b}=this,g=this._getIcon();return k.tsx("calcite-action",{active:!1,class:f.css.expander,disabled:!a,icon:g,key:f.css.expander,onclick:this._onExpanderClick,scale:"s",text:b,textEnabled:!1,title:b})}_renderBadge(){const {expanded:a,interactive:b}=this;return k.tsx("div",{class:this.classes(f.css.badge,!a&&f.css.badgeHidden,!b&&f.css.badgeDisabled)},k.tsx("calcite-icon",{class:f.css.badgeIcon,icon:"time-zone",scale:"s"}))}_renderName(){const {expanded:a,
formattedTimeZone:b,interactive:g}=this;return k.tsx("span",{class:this.classes(f.css.name,!a&&f.css.nameHidden,!g&&f.css.nameDisabled),key:f.css.name},b)}async _updateMessageBundle(){var a=p.getAssetPath("assets/input-time-zone/t9n/messages"),b=t.getLocale();b=C.normalizeMessageBundleLocale(b);a=await u(`${a}_${b}.json`,{responseType:"text"}).catch(()=>{});this.inputTimeZoneMessages=JSON.parse(a?.data??{})}};d.__decorate([e.property()],c.prototype,"disabled",void 0);d.__decorate([e.property()],c.prototype,
"expandDirection",null);d.__decorate([e.property()],c.prototype,"expanded",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"formattedTimeZone",null);d.__decorate([e.property()],c.prototype,"icon",void 0);d.__decorate([e.property()],c.prototype,"inputTimeZoneMessages",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"interactive",null);d.__decorate([e.property()],c.prototype,"label",null);d.__decorate([e.property(),z.messageBundle("esri/widgets/TimeZoneLabel/t9n/TimeZoneLabel")],
c.prototype,"messages",void 0);d.__decorate([e.property()],c.prototype,"view",null);d.__decorate([e.property()],c.prototype,"viewModel",void 0);return c=d.__decorate([v.subclass("esri.widgets.TimeZoneLabel")],c)});