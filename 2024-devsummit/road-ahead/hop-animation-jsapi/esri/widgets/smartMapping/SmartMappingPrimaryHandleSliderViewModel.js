// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ./SmartMappingSliderViewModel".split(" "),function(m,n,l,u,v,p,q){l=class extends q{constructor(a){super(a);this.handlesSyncedToPrimary=!0}set primaryHandleEnabled(a){this._set("primaryHandleEnabled",a)}get primaryHandleEnabled(){var {stops:a}=this;if(!a?.length)return!1;a=a.length;return 3===a||5===a?this._get("primaryHandleEnabled"):
!1}get values(){const {primaryHandleEnabled:a,stops:b}=this;if(!b?.length||2>b.length)return[];const d=this.getValuesFromStops();return a?3===d.length?[d[0],d[1],d[2]]:[d[0],d[2],d[4]]:[d[0],d[d.length-1]]}setValue(a,b){const {max:d,min:k,values:e}=this;var h=e[a];if(!(isNaN(b)||h===b||b>d||b<k)){b=this.toPrecision(b);if(h=this.primaryHandleEnabled&&this.handlesSyncedToPrimary){var c=e.slice().sort((f,g)=>f>g?1:-1)[1];0===a&&b>c?b=c:2===a&&b<c&&(b=c)}c=this.getStopChanges(a,b);this.updateStops(c);
h?this.notifyChange("values"):(e[a]=b,this._set("values",[...e]));this.notifyChange("labels")}}getStopIndexFromValueIndex(a){const {handlesSyncedToPrimary:b,primaryHandleEnabled:d}=this;if(d){const {values:k}=this,e=k[a];if(b)return a;a=k.slice().sort((c,f)=>c>f?1:-1);const h=a.indexOf(e);return k.some((c,f)=>c===e&&f!==h)?a.lastIndexOf(e):h}return super.getStopIndexFromValueIndex(a)}getStopChanges(a,b){return this.primaryHandleEnabled?this._getStopChanges(a,b):super.getStopChanges(a,b)}_getStopChanges(a,
b){const {max:d,min:k,stops:e,values:h}=this;var c=this.handlesSyncedToPrimary&&1===a,f=h[a],g=h.slice();c||(g[a]=b);g=g.sort((r,t)=>r>t?1:-1);a=c?b:g[1];f=b-f;b=c?this.toPrecision(Math.max(Math.min(g[0]+f,d),k)):g[0];c=c?this.toPrecision(Math.max(Math.min(g[2]+f,d),k)):g[2];return 5===e.length?[{index:0,value:b},{index:1,value:this.toPrecision((a+b)/2)},{index:2,value:a},{index:3,value:this.toPrecision((a+c)/2)},{index:4,value:c}]:[{index:0,value:b},{index:1,value:a},{index:2,value:c}]}};m.__decorate([n.property()],
l.prototype,"handlesSyncedToPrimary",void 0);m.__decorate([n.property()],l.prototype,"primaryHandleEnabled",null);m.__decorate([n.property({dependsOn:["handlesSyncedToPrimary"],readOnly:!0})],l.prototype,"values",null);return l=m.__decorate([p.subclass("esri.widgets.smartMapping.SmartMappingPrimaryHandleSliderViewModel")],l)});