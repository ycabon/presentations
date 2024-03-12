// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("require ../../chunks/tslib.es6 ../../intl ../../core/a11yUtils ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../renderers/support/utils ../Widget ./FeatureMedia/FeatureMediaViewModel ./support/FeatureElementInfo ./support/featureUtils ../../chunks/componentsUtils ../support/widgetUtils ../support/decorators/messageBundle ../support/jsxFactory ../../support/themeUtils ../../intl/substitute".split(" "),
function(q,w,r,F,B,x,P,Q,R,G,H,I,D,J,K,L,E,M,t,N,O){r=class extends I{constructor(a,b){super(a,b);this._featureElementInfo=this._refreshIntervalInfo=this._refreshTimer=null;this._chartRootMap=new WeakMap;this.viewModel=new D;this.messages=null;this._disposeChart=c=>{this._chartRootMap.get(c)?.dispose();this._chartRootMap.delete(c)};this._createChart=async c=>{const {destroyed:e,viewModel:d}=this;if(!e&&d&&c){var {createRoot:g}=await new Promise((m,h)=>q(["../support/chartUtilsAm5"],m,h));g=await g(c);
this._chartRootMap.set(c,g);this._renderChart({mediaInfo:d.activeMediaInfo,root:g})}}}initialize(){this._featureElementInfo=new J;this.addHandles([B.watch(()=>[this.viewModel?.activeMediaInfo,this.viewModel?.activeMediaInfoIndex],()=>this._setupMediaRefreshTimer(),B.initial),B.watch(()=>[this.viewModel?.description,this.viewModel?.title],()=>this._setupFeatureElementInfo(),B.initial)])}loadDependencies(){return L.loadCalciteComponents({icon:()=>new Promise((a,b)=>q(["../../chunks/calcite-icon"],a,
b))})}destroy(){this._clearMediaRefreshTimer();this._featureElementInfo?.destroy()}get attributes(){return this.viewModel.attributes}set attributes(a){this.viewModel.attributes=a}get activeMediaInfoIndex(){return this.viewModel.activeMediaInfoIndex}set activeMediaInfoIndex(a){this.viewModel.activeMediaInfoIndex=a}get description(){return this.viewModel.description}set description(a){this.viewModel.description=a}get fieldInfoMap(){return this.viewModel.fieldInfoMap}set fieldInfoMap(a){this.viewModel.fieldInfoMap=
a}get layer(){return this.viewModel.layer}set layer(a){this.viewModel.layer=a}get mediaInfos(){return this.viewModel.mediaInfos}set mediaInfos(a){this.viewModel.mediaInfos=a}get popupTemplate(){return this.viewModel.popupTemplate}set popupTemplate(a){this.viewModel.popupTemplate=a}get relatedInfos(){return this.viewModel.relatedInfos}set relatedInfos(a){this.viewModel.relatedInfos=a}get title(){return this.viewModel.title}set title(a){this.viewModel.title=a}render(){return t.tsx("div",{bind:this,
class:"esri-feature-media",onkeyup:this._handleMediaKeyup},this._featureElementInfo?.render(),this._renderMedia())}_renderMedia(){const {formattedMediaInfoCount:a,activeMediaInfoIndex:b}=this.viewModel,c=this._renderMediaText();return a?t.tsx("div",{class:"esri-feature-media__container",key:"media-element-container"},this._renderMediaInfo(),t.tsx("div",{class:"esri-feature-media__item-navigation"},c,1<a?t.tsx("div",{class:"esri-feature-media__pagination"},this._renderMediaPageButton("previous"),t.tsx("span",
{class:"esri-feature-media__pagination-text"},O.substitute(this.messages.pageText,{index:b+1,total:a})),this._renderMediaPageButton("next")):null)):null}_renderMediaText(){var {activeMediaInfo:a}=this.viewModel;if(!a)return null;const b=a&&a.title?t.tsx("div",{class:"esri-feature-media__item-title",innerHTML:a.title,key:"media-title"}):null;a=a&&a.caption?t.tsx("div",{class:"esri-feature-media__item-caption",innerHTML:a.caption,key:"media-caption"}):null;return b||a?t.tsx("div",{class:"esri-feature-media__item-text",
key:"media-text"},b,a):null}_renderImageMediaInfo(a){var {_refreshIntervalInfo:b}=this;const {activeMediaInfoIndex:c,formattedMediaInfoCount:e}=this.viewModel,{value:d,refreshInterval:g,altText:m,title:h,type:u}=a,{sourceURL:v,linkURL:p}=d;a=K.shouldOpenInNewTab(p??void 0)?"_blank":"_self";const f="_blank"===a?"noreferrer":"";b=g?b:null;b=t.tsx("img",{alt:m||h,key:`media-${u}-${c}-${e}-${b?b.timestamp:0}`,src:(b?b.sourceURL:v)??void 0});return(p?t.tsx("a",{href:p,rel:f,target:a,title:h},b):null)??
b}_renderChartMediaInfo(a){const {activeMediaInfoIndex:b,formattedMediaInfoCount:c}=this.viewModel;return t.tsx("div",{afterCreate:this._createChart,afterRemoved:this._disposeChart,bind:this,class:"esri-feature-media__chart",key:`media-${a.type}-${b}-${c}`})}_renderMediaInfoType(){const {activeMediaInfo:a}=this.viewModel;return a?"image"===a.type?this._renderImageMediaInfo(a):a.type.includes("chart")?this._renderChartMediaInfo(a):null:null}_renderMediaInfo(){const {activeMediaInfo:a}=this.viewModel;
return a?t.tsx("div",{class:"esri-feature-media__item-container",key:"media-container"},t.tsx("div",{class:"esri-feature-media__item",key:"media-item-container"},this._renderMediaInfoType())):null}_renderMediaPageButton(a){if(2>this.viewModel.formattedMediaInfoCount)return null;const b=(a="previous"===a)?this.messages.previous:this.messages.next;return t.tsx("button",{"aria-label":b,bind:this,class:"esri-feature-media__pagination-button",key:a?"media-previous":"media-next",onclick:a?this._previous:
this._next,tabIndex:0,title:b,type:"button"},t.tsx("calcite-icon",{class:"esri-feature-media__pagination-icon",icon:a?"chevron-left":"chevron-right",scale:"s"}))}_setupFeatureElementInfo(){const {description:a,title:b}=this;this._featureElementInfo?.set({description:a,title:b})}_next(){this.viewModel.next()}_previous(){this.viewModel.previous()}_getRenderer(){if(this.viewModel){var {isAggregate:a,layer:b}=this.viewModel;return a&&b?.featureReduction&&"renderer"in b.featureReduction?b.featureReduction.renderer:
b?.renderer}}async _getSeriesColors(a){const {colorAm5:b}=await new Promise((e,d)=>q(["./FeatureMedia/chartCommon"],e,d)),c=new Map;a.forEach(e=>{e.color&&c.set(e,b(e.color.toCss(!0)))});return c}async _getRendererColors(){const {colorAm5:a}=await new Promise((d,g)=>q(["./FeatureMedia/chartCommon"],d,g)),b=new Map,c=this._getRenderer();if(!c)return b;const e=await H.getColorsFromRenderer(c);e.delete("default");if(!Array.from(e.values()).every(d=>1===d?.length))return b;Array.from(e.keys()).forEach(d=>
{const g=e.get(d)?.[0]?.toCss(!0);g&&b.set(d,a(g))});return b}_handleMediaKeyup(a){const {key:b}=a;"ArrowLeft"===b&&(a.stopPropagation(),this.viewModel.previous());"ArrowRight"===b&&(a.stopPropagation(),this.viewModel.next())}_canAnimateChart(){return this.viewModel?!!this.viewModel.abilities.chartAnimation&&!F.prefersReducedMotion():!1}_getChartAnimationMS(){return this._canAnimateChart()?250:0}_getChartSeriesAnimationMS(){return this._canAnimateChart()?500:0}async _renderChart(a){const {root:b,
mediaInfo:c}=a,{value:e,type:d}=c,{ResponsiveThemeAm5:g,DarkThemeAm5:m,AnimatedThemeAm5:h,ColorSetAm5:u,ThemeAm5:v,esriChartColorSet:p}=await new Promise((l,n)=>q(["./FeatureMedia/chartCommon"],l,n));var f=v.new(b);f.rule("ColorSet").set("colors",p);f.rule("ColorSet").set("reuse",!0);f=[g.new(b),f];N.isDarkTheme()&&f.push(m.new(b));this._canAnimateChart()&&f.push(h.new(b));b.setThemes(f);const z=await this._getRendererColors(),A=await this._getSeriesColors(e.series),k=u.new(b,{}),y=(f=A.get(e.series[0]))?
{lineSettings:{stroke:f}}:void 0;f=e.series.map((l,n)=>{n=A.get(l)||z.get(l.fieldName)||k.getIndex(n);return{category:l.tooltip,value:l.value,columnSettings:{fill:n,stroke:n},...y}}).filter(l=>"pie-chart"===d?null!=l.value&&0<l.value:!0);"pie-chart"===d?this._createPieChart(a,f):this._createXYChart(a,f)}_getDirection(){return E.isRTL(this.container)?"rtl":"ltr"}_isInversed(){return!!E.isRTL(this.container)}async _customizeChartTooltip(a,b="horizontal"){const {colorAm5:c}=await new Promise((e,d)=>
q(["./FeatureMedia/chartCommon"],e,d));a.setAll({pointerOrientation:b});a.get("background")?.setAll({stroke:c("rgba(50, 50, 50, 1)")});a.label.setAll({direction:this._getDirection(),oversizedBehavior:"wrap",maxWidth:200})}async _createPieChart(a,b){var {TooltipAm5:c}=await new Promise((u,v)=>q(["./FeatureMedia/chartCommon"],u,v));const {PieChartAm5:e,PieSeriesAm5:d}=await new Promise((u,v)=>q(["./FeatureMedia/pieChart"],u,v)),{mediaInfo:g,root:m}=a;var {title:h}=g;a=m.container.children.push(e.new(m,
{ariaLabel:g?.altText||g?.title||"",focusable:!0,paddingBottom:5,paddingTop:5,paddingLeft:5,paddingRight:5}));c=c.new(m,{labelText:"{category}: {valuePercentTotal.formatNumber('0.00')}%\n ({value})"});h=a.series.push(d.new(m,{name:h,valueField:"value",categoryField:"category",tooltip:c}));h.ticks.template.set("forceHidden",!0);h.labels.template.set("forceHidden",!0);h.slices.template.states.create("active",{shiftRadius:5});this._customizeChartTooltip(c);h.slices.template.setAll({ariaLabel:"{category}: {valuePercentTotal.formatNumber('0.00')}%\n ({value})",
focusable:!0,templateField:"columnSettings"});h.data.setAll(b);h.appear(this._getChartSeriesAnimationMS());a.appear(this._getChartAnimationMS());a.root.dom.classList.toggle("esri-feature-media__chart--rendered",!0)}_getMinSeriesValue(a){let b=0;a.forEach(c=>b=Math.min(c.value,b));return b}async _createColumnChart(a,b,c){const {TooltipAm5:e,ScrollbarAm5:d}=await new Promise((l,n)=>q(["./FeatureMedia/chartCommon"],l,n)),{CategoryAxisAm5:g,AxisRendererXAm5:m,ValueAxisAm5:h,AxisRendererYAm5:u,ColumnSeriesAm5:v}=
await new Promise((l,n)=>q(["./FeatureMedia/xyChart"],l,n)),{mediaInfo:p,root:f}=b,{value:z,title:A}=p;a.setAll({wheelX:"panX",wheelY:"zoomX"});b=a.xAxes.push(g.new(f,{renderer:m.new(f,{inversed:this._isInversed()}),categoryField:"category"}));b.get("renderer").labels.template.setAll({forceHidden:!0});var k=a.yAxes.push(h.new(f,{renderer:u.new(f,{inside:!1}),min:this._getMinSeriesValue(z.series)}));k.get("renderer").labels.template.setAll({direction:this._getDirection()});const y=e.new(f,{labelText:"{categoryX}"});
k=a.series.push(v.new(f,{name:A,xAxis:b,yAxis:k,valueYField:"value",categoryXField:"category",tooltip:y}));this._customizeChartTooltip(y);k.columns.template.setAll({ariaLabel:"{categoryX}",focusable:!0,templateField:"columnSettings"});15<z.series.length&&a.set("scrollbarX",d.new(f,{orientation:"horizontal"}));b.data.setAll(c);k.data.setAll(c);k.appear(this._getChartSeriesAnimationMS());a.appear(this._getChartAnimationMS())}async _createBarChart(a,b,c){const {TooltipAm5:e,ScrollbarAm5:d}=await new Promise((l,
n)=>q(["./FeatureMedia/chartCommon"],l,n)),{CategoryAxisAm5:g,AxisRendererXAm5:m,ValueAxisAm5:h,AxisRendererYAm5:u,ColumnSeriesAm5:v}=await new Promise((l,n)=>q(["./FeatureMedia/xyChart"],l,n)),{mediaInfo:p,root:f}=b,{value:z,title:A}=p;a.setAll({wheelX:"panY",wheelY:"zoomY"});b=a.yAxes.push(g.new(f,{renderer:u.new(f,{inversed:!0}),categoryField:"category"}));b.get("renderer").labels.template.setAll({forceHidden:!0});var k=a.xAxes.push(h.new(f,{renderer:m.new(f,{inside:!1,inversed:this._isInversed()}),
min:this._getMinSeriesValue(z.series)}));k.get("renderer").labels.template.setAll({direction:this._getDirection()});const y=e.new(f,{labelText:"{categoryY}"});k=a.series.push(v.new(f,{name:A,xAxis:k,yAxis:b,valueXField:"value",categoryYField:"category",tooltip:y}));this._customizeChartTooltip(y,"vertical");k.columns.template.setAll({ariaLabel:"{categoryY}",focusable:!0,templateField:"columnSettings"});15<z.series.length&&a.set("scrollbarY",d.new(f,{orientation:"vertical"}));b.data.setAll(c);k.data.setAll(c);
k.appear(this._getChartSeriesAnimationMS());a.appear(this._getChartAnimationMS())}async _createLineChart(a,b,c){const {TooltipAm5:e,ScrollbarAm5:d}=await new Promise((n,C)=>q(["./FeatureMedia/chartCommon"],n,C)),{CategoryAxisAm5:g,AxisRendererXAm5:m,ValueAxisAm5:h,AxisRendererYAm5:u,LineSeriesAm5:v}=await new Promise((n,C)=>q(["./FeatureMedia/xyChart"],n,C)),{root:p,mediaInfo:f}=b,{value:z,title:A}=f;a.setAll({wheelX:"panX",wheelY:"zoomX"});b=a.xAxes.push(g.new(p,{renderer:m.new(p,{inversed:this._isInversed()}),
categoryField:"category"}));b.get("renderer").labels.template.setAll({forceHidden:!0});var k=a.yAxes.push(h.new(p,{renderer:u.new(p,{inside:!1}),min:this._getMinSeriesValue(z.series)}));k.get("renderer").labels.template.setAll({direction:this._getDirection()});const y=c[0]?.lineSettings?.stroke,l=e.new(p,{getFillFromSprite:!y,labelText:"{categoryX}"});y&&l.get("background")?.setAll({fill:y});k=a.series.push(v.new(p,{name:A,xAxis:b,yAxis:k,valueYField:"value",categoryXField:"category",tooltip:l}));
k.strokes.template.setAll({templateField:"lineSettings"});this._customizeChartTooltip(l,"vertical");15<z.series.length&&a.set("scrollbarX",d.new(p,{orientation:"horizontal"}));b.data.setAll(c);k.data.setAll(c);k.appear(this._getChartSeriesAnimationMS());a.appear(this._getChartAnimationMS())}async _createXYChart(a,b){const {XYChartAm5:c,XYCursorAm5:e}=await new Promise((u,v)=>q(["./FeatureMedia/xyChart"],u,v)),{root:d,mediaInfo:g}=a,{type:m}=g,h=d.container.children.push(c.new(d,{ariaLabel:g?.altText||
g?.title||"",focusable:!0,panX:!0,panY:!0}));h.set("cursor",e.new(d,{}));"column-chart"===m&&await this._createColumnChart(h,a,b);"bar-chart"===m&&await this._createBarChart(h,a,b);"line-chart"===m&&await this._createLineChart(h,a,b);h.root.dom.classList.toggle("esri-feature-media__chart--rendered",!0)}_clearMediaRefreshTimer(){const {_refreshTimer:a}=this;a&&(clearTimeout(a),this._refreshTimer=null)}_updateMediaInfoTimestamp(a){const b=Date.now();this._refreshIntervalInfo={timestamp:b,sourceURL:a&&
this._getImageSource(a,b)}}_setupMediaRefreshTimer(){this._clearMediaRefreshTimer();const {activeMediaInfo:a}=this.viewModel;a&&"image"===a.type&&a.refreshInterval&&this._setRefreshTimeout(a)}_setRefreshTimeout(a){const {refreshInterval:b,value:c}=a;b&&(a=6E4*b,this._updateMediaInfoTimestamp(c.sourceURL),this._refreshTimer=setInterval(()=>{this._updateMediaInfoTimestamp(c.sourceURL)},a))}_getImageSource(a,b){const c=a.includes("?")?"\x26":"?",[e,d=""]=a.split("#");return`${e}${c}timestamp=${b}${d?
"#":""}${d}`}};w.__decorate([x.property()],r.prototype,"_refreshIntervalInfo",void 0);w.__decorate([x.property()],r.prototype,"attributes",null);w.__decorate([x.property()],r.prototype,"activeMediaInfoIndex",null);w.__decorate([x.property()],r.prototype,"description",null);w.__decorate([x.property()],r.prototype,"fieldInfoMap",null);w.__decorate([x.property()],r.prototype,"layer",null);w.__decorate([x.property()],r.prototype,"mediaInfos",null);w.__decorate([x.property()],r.prototype,"popupTemplate",
null);w.__decorate([x.property()],r.prototype,"relatedInfos",null);w.__decorate([x.property()],r.prototype,"title",null);w.__decorate([x.property({type:D})],r.prototype,"viewModel",void 0);w.__decorate([x.property(),M.messageBundle("esri/widgets/Feature/t9n/Feature")],r.prototype,"messages",void 0);return r=w.__decorate([G.subclass("esri.widgets.Feature.FeatureMedia")],r)});