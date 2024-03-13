// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Accessor ../../core/arrayUtils ../../core/Collection ../../core/collectionUtils ../../core/promiseUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/accessorSupport/decorators/subclass ./support/layerUtils ./support/validation".split(" "),function(c,b,m,l,n,p,d,t,u,q,r,f){b=class extends b{constructor(a){super(a);this.state="disabled";this._valueBeforeReady=null;this._domainInfo=f.getDomainInfo([]);this._loadLayers=
r.createLoadLayersFunction();this.layers=new l}initialize(){this.addHandles(this.layers.on("change",()=>this._onLayersChange()));this._onLayersChange()}destroy(){this._set("state","disabled")}get enabled(){return 0<this.allowedValues.length&&this._get("enabled")}set enabled(a){a!==this.enabled&&0<this.allowedValues.length&&this._set("enabled",a)}get value(){return("ready"===this.state?this._get("value"):this._valueBeforeReady)??0}set value(a){"ready"!==this.state?this._valueBeforeReady=a:a!==this.value&&
(a=f.getValidNumber(a,this),null!=a&&this._set("value",a))}get min(){return f.getMin(this.allowedValues)}get max(){return f.getMax(this.allowedValues)}get allowedValues(){return this._domainInfo.allowedValues}get hasNext(){if(!this.enabled)return!0;const a=this._valueIndex;return 0<=a&&a<this.allowedValues.length-1}get hasPrevious(){return this.enabled?0<this._valueIndex:!0}set layers(a){const e=this._get("layers");this._set("layers",n.referenceSetter(a,e))}get filterExpressions(){return{solid:null,
xRay:null}}get _valueIndex(){return m.binaryIndexOf(this.allowedValues,this.value)}select(a){"ready"!==this.state?this._valueBeforeReady=a:null!=f.getValidNumber(a,this)&&(this.enabled=!0,this.value=a)}clear(){"ready"!==this.state?this._valueBeforeReady=null:this.enabled=!1}next(){const {state:a,allowedValues:e,enabled:g,hasNext:h,_valueIndex:k}=this;"ready"!==a&&null!=this._valueBeforeReady?this._valueBeforeReady++:0!==e.length&&(g?h&&(this.value=e[k+1]):(this.enabled=!0,this.value=e[0]))}previous(){const {state:a,
allowedValues:e,enabled:g,hasPrevious:h,_valueIndex:k}=this;"ready"!==a&&null!=this._valueBeforeReady?this._valueBeforeReady++:0!==e.length&&(g?h&&(this.value=e[k-1]):(this.enabled=!0,this.value=e[e.length-1]))}getValueLabel(a){return 0===this.layers.length?null:this._domainInfo.fieldValueMap.get(a)??null}async _onLayersChange(){this._set("state","loading");this._domainInfo=f.getDomainInfo([]);if(0!==this.layers.length)try{await this._loadLayers(this.layers),this._setup()}catch(a){p.isAbortError(a)||
this._set("state","failed")}}};c.__decorate([d.property({value:!1,nonNullable:!0})],b.prototype,"enabled",null);c.__decorate([d.property({nonNullable:!0})],b.prototype,"value",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"min",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"max",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"allowedValues",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"hasNext",null);c.__decorate([d.property({readOnly:!0})],b.prototype,
"hasPrevious",null);c.__decorate([d.property({type:l,nonNullable:!0})],b.prototype,"layers",null);c.__decorate([d.property({nonNullable:!0})],b.prototype,"state",void 0);c.__decorate([d.property()],b.prototype,"_valueBeforeReady",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"_valueIndex",null);c.__decorate([d.property()],b.prototype,"_domainInfo",void 0);return b=c.__decorate([q.subclass("esri.widgets.BuildingExplorer.BuildingNumericFilterViewModel")],b)});