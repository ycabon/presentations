// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["../core/declare","dojo/_base/lang","../core/lang","../core/screenUtils","./LineSymbol"],function(l,d,e,g,m){var a={STYLE_SOLID:"solid",STYLE_DASH:"dash",STYLE_DOT:"dot",STYLE_DASHDOT:"dash-dot",STYLE_DASHDOTDOT:"long-dash-dot-dot",STYLE_NULL:"none",STYLE_SHORTDASH:"short-dash",STYLE_SHORTDOT:"short-dot",STYLE_SHORTDASHDOT:"short-dash-dot",STYLE_SHORTDASHDOTDOT:"short-dash-dot-dot",STYLE_LONGDASH:"long-dash",STYLE_LONGDASHDOT:"long-dash-dot",CAP_BUTT:"butt",CAP_ROUND:"round",CAP_SQUARE:"square",
JOIN_MITER:"miter",JOIN_ROUND:"round",JOIN_BEVEL:"bevel"},f={color:[0,0,0,1],style:a.STYLE_SOLID,width:.75,cap:a.CAP_BUTT,join:a.JOIN_MITER,miterLimit:7.5},c=l(m,{declaredClass:"esri.symbols.SimpleLineSymbol",properties:{type:"simple-line",style:{value:a.STYLE_SOLID,json:{read:function(h,a){return e.valueOf(this._jsonStyles,h)||void 0},write:function(h,a){a.style=this._jsonStyles[h]}}},cap:{value:a.CAP_BUTT,json:{read:!1,write:!1}},join:{value:a.JOIN_MITER,json:{read:!1,write:!1}},miterLimit:{value:7.5,
cast:g.toPt,json:{read:!1,write:!1}}},_jsonStyles:{solid:"esriSLSSolid",dash:"esriSLSDash",dot:"esriSLSDot","dash-dot":"esriSLSDashDot","long-dash-dot-dot":"esriSLSDashDotDot",none:"esriSLSNull","inside-frame":"esriSLSInsideFrame","short-dash":"esriSLSShortDash","short-dot":"esriSLSShortDot","short-dash-dot":"esriSLSShortDashDot","short-dash-dot-dot":"esriSLSShortDashDotDot","long-dash":"esriSLSLongDash","long-dash-dot":"esriSLSLongDashDot"},getDefaults:function(){return d.mixin(this.inherited(arguments),
f)},normalizeCtorArgs:function(a,c,d,e,f,k){if(a&&"string"!==typeof a)return a;var b={};null!=a&&(b.style=a);null!=c&&(b.color=c);null!=d&&(b.width=g.toPt(d));null!=e&&(b.cap=e);null!=f&&(b.join=f);null!=k&&(b.miterLimit=g.toPt(k));return b},clone:function(){return new c({color:e.clone(this.color),style:this.style,width:this.width,cap:this.cap,join:this.join,miterLimit:this.miterLimit})}});d.mixin(c,a);c.defaultProps=f;return c});