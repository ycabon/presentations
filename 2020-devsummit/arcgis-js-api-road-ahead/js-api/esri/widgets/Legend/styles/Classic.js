// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper dojo/i18n!../../Legend/nls/Legend ../../../intl ../../../core/accessorSupport/decorators ../../Widget ./support/utils ../support/styleUtils ../../support/widget".split(" "),function(z,A,v,r,t,w,q,x,y,l,f){return function(u){function d(a){a=u.call(this,a)||this;a.activeLayerInfos=null;a.type="classic";return a}v(d,u);d.prototype.render=function(){var a=this,b=this.activeLayerInfos,c=this.classes("esri-legend esri-widget--panel",
"esri-widget"),b=b&&b.toArray().map(function(b){return a._renderLegendForLayer(b)}).filter(function(a){return!!a});return f.tsx("div",{class:c},b&&b.length?b:f.tsx("div",{class:"esri-legend__message"},t.noLegend))};d.prototype._renderLegendForLayer=function(a){var b=this,c;if(!a.ready)return null;var e=!!a.children.length,n="esri-legend__"+a.layer.uid+"-version-"+a.version,h=a.title?f.tsx("h3",{class:this.classes("esri-widget__heading","esri-legend__service-label")},a.title):null;if(e)return c=a.children.map(function(a){return b._renderLegendForLayer(a)}).toArray(),
f.tsx("div",{key:n,class:this.classes("esri-legend__service","esri-legend__group-layer")},h,c);if((e=a.legendElements)&&!e.length)return null;e=e.map(function(c){return b._renderLegendForElement(c,a.layer)}).filter(function(a){return!!a});if(!e.length)return null;var g=(c={},c["esri-legend__group-layer-child"]=!!a.parent,c);return f.tsx("div",{key:n,class:this.classes("esri-legend__service",g)},h,f.tsx("div",{class:"esri-legend__layer"},e))};d.prototype._renderLegendForElement=function(a,b,c){var e=
this,n,h="color-ramp"===a.type,g="opacity-ramp"===a.type,d="size-ramp"===a.type,p=null;if("symbol-table"===a.type||d){var k=a.infos.map(function(c){return e._renderLegendForElementInfo(c,b,d,a.legendType)}).filter(function(a){return!!a});k.length&&(p=f.tsx("div",{class:"esri-legend__layer-body"},k))}else"color-ramp"===a.type||"opacity-ramp"===a.type||"heatmap-ramp"===a.type||"stretch-ramp"===a.type?p=this._renderLegendForRamp(a,b.opacity):"relationship-ramp"===a.type&&(p=y.renderRelationshipRamp(a,
this.id,b.opacity));if(!p)return null;var k=a.title,m=null;"string"===typeof k?m=k:k&&(m=l.getTitle(k,h||g),m=l.isRendererTitle(k,h||g)&&k.title?k.title+" ("+m+")":m);h=c?"esri-legend__layer-child-table":"esri-legend__layer-table";g=m?f.tsx("div",{class:"esri-legend__layer-caption"},m):null;c=(n={},n["esri-legend__layer-table--size-ramp"]=d||!c,n);return f.tsx("div",{class:this.classes(h,c)},g,p)};d.prototype._renderLegendForRamp=function(a,b){var c=this,e=a.infos,d="heatmap-ramp"===a.type,h="stretch-ramp"===
a.type,g=a.preview;g.className="esri-legend__color-ramp "+("opacity-ramp"===a.type?"esri-legend__opacity-ramp":"");null!=b&&(g.style.opacity=b.toString());a=e.map(function(a){return f.tsx("div",{class:a.label?"esri-legend__ramp-label":null},d?t[a.label]:h?c._getStretchStopLabel(a):a.label)});b={height:g.style.height};return f.tsx("div",{class:"esri-legend__layer-row"},f.tsx("div",{class:"esri-legend__layer-cell esri-legend__layer-cell--symbols",styles:{width:"24px"}},f.tsx("div",{class:"esri-legend__ramps",
bind:g,afterCreate:l.attachToNode})),f.tsx("div",{class:"esri-legend__layer-cell esri-legend__layer-cell--info"},f.tsx("div",{class:"esri-legend__ramp-labels",styles:b},a)))};d.prototype._getStretchStopLabel=function(a){return a.label?t[a.label]+": "+w.formatNumber(a.value,{style:"decimal"}):""};d.prototype._renderLegendForElementInfo=function(a,b,c,e){var d,h;if(a.type)return this._renderLegendForElement(a,b,!0);var g=null;e=l.isImageryStretchedLegend(b,e);a.symbol&&a.preview?g=f.tsx("div",{class:"esri-legend__symbol",
bind:a.preview,afterCreate:l.attachToNode}):a.src&&(g=this._renderImage(a,b,e));if(!g)return null;b=(d={},d["esri-legend__imagery-layer-info--stretched"]=e,d);c=(h={},h["esri-legend__imagery-layer-info--stretched"]=e,h["esri-legend__size-ramp"]=!e&&c,h);return f.tsx("div",{class:"esri-legend__layer-row"},f.tsx("div",{class:this.classes("esri-legend__layer-cell esri-legend__layer-cell--symbols",c)},g),f.tsx("div",{class:this.classes("esri-legend__layer-cell esri-legend__layer-cell--info",b)},l.getTitle(a.label,
!1)||""))};d.prototype._renderImage=function(a,b,c){var e,d=a.label,h=a.src,g=a.opacity;c=(e={},e["esri-legend__imagery-layer-image--stretched"]=c,e["esri-legend__symbol"]=!c,e);b={opacity:""+(null!=g?g:b.opacity)};return f.tsx("img",{alt:l.getTitle(d,!1),src:h,border:0,width:a.width,height:a.height,class:this.classes(c),styles:b})};r([f.renderable(),q.property()],d.prototype,"activeLayerInfos",void 0);r([q.property({readOnly:!0})],d.prototype,"type",void 0);return d=r([q.subclass("esri.widgets.Legend.styles.Classic")],
d)}(q.declared(x))});