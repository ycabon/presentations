// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ./BuildingNumericFilterViewModel ./support/buildingLayerUtils ./support/filterUtils ./support/validation".split(" "),function(e,f,c,q,r,k,l,m,n,p){c=class extends l{constructor(){super(...arguments);this._levelFieldName=null;this._parseValueFromFilter=a=>{const d=new RegExp(`${this._levelFieldName}\\s*=\\s*(\\d+)`,"gi"),
b=new RegExp(`${this._levelFieldName}\\s*<\\s*(\\d+)`,"gi");for(const {filterMode:h,filterExpression:g}of a.filterBlocks?.items??[])if(null!=g&&(a=null,"solid"===h.type?a=d.exec(g):"x-ray"===h.type&&(a=b.exec(g)),a))return parseInt(a[1],10);return null}}get filterExpressions(){return this.enabled&&this._levelFieldName?{xRay:`${this._levelFieldName} < ${this.value}`,solid:`${this._levelFieldName} = ${this.value}`}:{solid:null,xRay:null}}get _firstValue(){const a=this.allowedValues;return 0<a.length?
a[0]:0}_setup(){const a=[];this.layers.forEach(b=>{b=m.findFieldInfoByModelName(b,"bldglevel");null!=b&&(this._levelFieldName=b.fieldName,a.push(b))});this._domainInfo=p.getDomainInfo(a);var d=this._valueBeforeReady;this._set("state","ready");this._valueBeforeReady=null;d=d??n.getValueFromFilters(this.layers,this._parseValueFromFilter);null!=d?this.select(d):(this.enabled=!1,this.value=this._firstValue)}};e.__decorate([f.property({readOnly:!0})],c.prototype,"filterExpressions",null);e.__decorate([f.property()],
c.prototype,"_levelFieldName",void 0);e.__decorate([f.property({readOnly:!0})],c.prototype,"_firstValue",null);return c=e.__decorate([k.subclass("esri.widgets.BuildingExplorer.BuildingLevel")],c)});