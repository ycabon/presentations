// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Accessor ../../core/Error ../../core/Logger ../../core/accessorSupport/decorators/property ../../core/has ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(f,e,l,m,g,p,q,n){e=class extends e{constructor(a){super(a);this.precision=4;this.thumbsConstrained=!0}set effectiveMax(a){this.setEffectiveMax(a)}set effectiveMin(a){this.setEffectiveMin(a)}set labelFormatFunction(a){this._set("labelFormatFunction",a)}set inputFormatFunction(a){this._set("inputFormatFunction",
a)}set inputParseFunction(a){this._set("inputParseFunction",a)}get labels(){const {max:a,min:c,values:b}=this,d=b?.length?b.map((h,k)=>this.getLabelForValue(h,"value",k)):[];return{max:this.getLabelForValue(a,"max"),min:this.getLabelForValue(c,"min"),values:d}}set max(a){this.setMax(a)}set min(a){this.setMin(a)}get state(){const {max:a,min:c}=this;return null!=a&&null!=c&&a>c?"ready":"disabled"}set values(a){const {max:c,min:b}=this,d=this.values;d&&a&&d.length===a.length&&d.every((h,k)=>h===a[k])||
(this._set("values",null),a?.length&&(null!=b&&a.some(h=>h<b)&&(this.min=Math.min(...a)),null!=c&&a.some(h=>h>c)&&(this.max=Math.max(...a))),this._set("values",a))}toPrecision(a){return parseFloat(a.toFixed(this.precision))}defaultLabelFormatFunction(a){const {max:c,min:b,precision:d}=this;return parseFloat(a.toFixed(null!=c&&null!=b&&10<c-b?2:d)).toString()}defaultInputFormatFunction(a){return a.toString()}defaultInputParseFunction(a){return parseFloat(a)}getBounds(){const {effectiveMax:a,effectiveMin:c,
max:b,min:d}=this;return{min:null!=c&&null!=d?Math.max(d,c):d,max:null!=a&&null!=b?Math.min(b,a):b}}getBoundsForValueAtIndex(a){const {thumbsConstrained:c,values:b}=this,{min:d,max:h}=this.getBounds();if(c&&b){const k=a-1;a+=1;return{min:null!=b[k]?b[k]:d,max:null!=b[a]?b[a]:h}}return{min:d,max:h}}getLabelForValue(a,c,b){return null==a?null:this.labelFormatFunction?this.labelFormatFunction(a,c,b):this.defaultLabelFormatFunction(a)}setMax(a){const {max:c,values:b}=this;if(null==a)this._set("max",null);
else if(isNaN(a))this._logError("slider:invalid-value","Supplied value for property 'max' is NaN.");else if(a=this.toPrecision(a),c!==a&&(this._set("max",a),b?.length))for(let d=0;d<b.length;d++)a<b[d]&&this.setValue(d,a)}setMin(a){const {min:c,values:b}=this;if(null==a)this._set("min",null);else if(isNaN(a))this._logError("slider:invalid-value","Supplied value for property 'min' is NaN.");else if(a=this.toPrecision(a),c!==a&&(this._set("min",a),b?.length))for(let d=0;d<b.length;d++)a>b[d]&&this.setValue(d,
a)}setEffectiveMax(a){null==a?this._set("effectiveMax",null):isNaN(a)?this._logError("slider:invalid-value","Supplied value for property 'effectiveMax' is NaN."):(a=this.toPrecision(a),this.effectiveMax!==a&&this._set("effectiveMax",this._applyBoundsToValue(a)))}setEffectiveMin(a){null==a?this._set("effectiveMin",null):isNaN(a)?this._logError("slider:invalid-value","Supplied value for property 'effectiveMin' is NaN."):(a=this.toPrecision(a),this.effectiveMin!==a&&this._set("effectiveMin",this._applyBoundsToValue(a)))}setValue(a,
c){if(isNaN(c))this._logError("slider:invalid-value","Supplied value for member of property 'values' is NaN.");else{var {values:b}=this;if(null==b)this._logError("slider:invalid-value","Supplied value for member of property 'values' is null.");else{var d=b[a];c=this.toPrecision(c);d!==c&&(b=[...b],b[a]=c,this._set("values",b),this.notifyChange("labels"))}}}_applyBoundsToValue(a){const {max:c,min:b}=this;return null!=b&&a<b?b:null!=c&&a>c?c:a}_logError(a,c,b){m.getLogger(this).error(new l(a,c,b))}};
f.__decorate([g.property()],e.prototype,"effectiveMax",null);f.__decorate([g.property()],e.prototype,"effectiveMin",null);f.__decorate([g.property()],e.prototype,"labelFormatFunction",null);f.__decorate([g.property()],e.prototype,"inputFormatFunction",null);f.__decorate([g.property()],e.prototype,"inputParseFunction",null);f.__decorate([g.property({readOnly:!0})],e.prototype,"labels",null);f.__decorate([g.property()],e.prototype,"max",null);f.__decorate([g.property()],e.prototype,"min",null);f.__decorate([g.property()],
e.prototype,"precision",void 0);f.__decorate([g.property({readOnly:!0})],e.prototype,"state",null);f.__decorate([g.property()],e.prototype,"thumbsConstrained",void 0);f.__decorate([g.property()],e.prototype,"values",null);return e=f.__decorate([n.subclass("esri.widgets.Slider.SliderViewModel")],e)});