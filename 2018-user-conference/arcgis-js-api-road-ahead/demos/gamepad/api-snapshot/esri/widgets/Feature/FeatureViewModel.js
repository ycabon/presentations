// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/assignHelper dojo/i18n!dojo/cldr/nls/number ../../Graphic ../../core/date ../../core/Error ../../core/Handles ../../core/lang ../../core/Logger ../../core/promiseUtils ../../core/watchUtils ../../core/accessorSupport/decorators ../../support/arcadeUtils ./support/featureUtils ./support/RelatedFeatures ../support/widget".split(" "),function(N,O,F,q,P,v,G,x,H,I,g,J,r,K,n,t,p,L,
y){function w(g,c){return g&&"feature"===g.type?g.getField(c):null}function M(g){return g.replace(/[\u00A0-\u99999<>\&]/gim,function(c){return"\x26#"+c.charCodeAt(0)+";"})}var A=J.getLogger("esri.widgets.FeatureViewModel"),B=/^\s*expression\//i,C="/"+v.group+"/g",D=new H("cancelled-query","cancelled feature query"),E=x.getFormat("short-date-short-time"),u="DateFormat"+E;return function(z){function c(a){a=z.call(this)||this;a._handles=new I;a._featurePromise=void 0;a._layerDateFields=[];a.content=
null;a.contentEnabled=!0;a.formattedAttributes=null;a.title="";a.view=null;return a}F(c,z);c.prototype.destroy=function(){this._clear();this._handles.destroy();this.graphic=this.view=this._handles=null};Object.defineProperty(c.prototype,"graphic",{get:function(){return this._get("graphic")||null},set:function(a){if(a){var b=p.getSourceLayer(a);this._layerDateFields=b?this._getDateFields(b):[]}this._set("graphic",a);this._graphicChanged(a)},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,
"waitingForContent",{get:function(){var a=this._featurePromise;return a?!a.isFulfilled():!1},enumerable:!0,configurable:!0});c.prototype._clear=function(){this._cancelFeatureQuery();this._set("title","");this._set("content",null);this._set("formattedAttributes",null)};c.prototype._graphicChanged=function(a){var b=this,d=this._handles;d&&(d.remove("graphic"),this._clear(),a&&(d.add(K.watch(this,["graphic.popupTemplate.title","graphic.popupTemplate.content","graphic.popupTemplate.fieldInfos","contentEnabled"],
function(){b._graphicChanged(b.graphic)}),"graphic"),this._featurePromise=this._queryFeature().then(function(){b.notifyChange("waitingForContent")}).catch(function(a){b.notifyChange("waitingForContent");a!==D&&A.log("error","error loading template",a);throw a;}),this.notifyChange("waitingForContent")))};c.prototype._cancelFeatureQuery=function(){var a=this._featurePromise;a&&!a.isFulfilled()&&a.cancel(D)};c.prototype._compileContent=function(a,b){var d=this;if(a&&(a.nodeName||a&&y.isWidgetBase(a)||
y.isWidget(a)))return a;if("string"===typeof a)return this._compileText({type:"text",text:a}).text;if(Array.isArray(a))return a.map(function(a,f){f=(f=b&&b[f])&&f.value;var e=a.type;if("attachments"===e)return d._compileAttachments(a,f);if("fields"===e)return d._compileFields(a);if("media"===e)return d._compileMedia(a);if("text"===e)return d._compileText(a)});a&&A.warn("invalid content type.")};c.prototype._compileFields=function(a){var b=this,d=this.graphic;a=g.clone(a);var e=d.get("popupTemplate.expressionInfos"),
d=a.fieldInfos?void 0:d.get("popupTemplate.fieldInfos"),d=a.fieldInfos||g.clone(d),f=[];d&&d.forEach(function(a){var d=a.fieldName.toLowerCase();if(!a.hasOwnProperty("visible")||a.visible)d=b._isExpressionField(d)?b._getExpressionInfo(e,d):null,a.label=d?d.title:a.label,f.push(a)});a.fieldInfos=f;return a};c.prototype._setImageValue=function(a){var b=a.value,d=a.formattedAttributes;a=a.layer;var e=b.linkURL,f=b.sourceURL;f&&(b.sourceURL=g.substitute(d,this._fixTokens(f,a)));e&&(b.linkURL=(""+g.substitute(d,
this._fixTokens(e,a))).trim())};c.prototype._compileMedia=function(a){var b=this,d=this._layerDateFields,e=this.graphic;a=g.clone(a);var f=a.mediaInfos||[],c=e.attributes,m=p.getSourceLayer(e),k=this.formattedAttributes.global,l={dateFormat:{properties:d,formatter:u}};a.mediaInfos=f.map(function(a){if(a=g.clone(a)){var d=a.value,e=a.type,f=a.title?b._processFieldsInLinks(b._fixTokens(a.title,m),c):"",h=a.caption?b._processFieldsInLinks(b._fixTokens(a.caption,m),c):"";a.title=f?(""+g.substitute(k,
f,l)).trim():"";a.caption=h?(""+g.substitute(k,h,l)).trim():"";if("image"===e)return b._setImageValue({value:d,formattedAttributes:k,layer:m}),a.value.sourceURL?a:void 0;if("pie-chart"===e||"line-chart"===e||"column-chart"===e||"bar-chart"===e)return b._setChartValue({value:d,attributes:c,formattedAttributes:k,layer:m}),a}}).filter(Boolean);return a};c.prototype._compileText=function(a){var b=this._layerDateFields,d=this.graphic;if((a=g.clone(a))&&a.text){var e=p.getSourceLayer(d),f=d.attributes,
d=this.formattedAttributes.global,b={dateFormat:{properties:b,formatter:u}},e=this._processFieldsInLinks(this._fixTokens(a.text,e),f);a.text=(""+g.substitute(d,e,b)).trim()}return a};c.prototype._compileTitle=function(){var a=this._layerDateFields,b=this.graphic,d=b.get("popupTemplate.title"),e=b.attributes,f=p.getSourceLayer(b),a={dateFormat:{properties:a,formatter:u}},c=this.formattedAttributes.global;return"function"===typeof d?d.call(null,{graphic:b}):"string"===typeof d&&d?(b=this._processFieldsInLinks(this._fixTokens(d,
f),e),(""+g.substitute(c,b,a)).trim()):""};c.prototype._getExpressionInfo=function(a,b){if(this._isExpressionField(b)){var d=b.replace(B,"").toLowerCase(),e;a.some(function(a){if(a.name.toLowerCase()===d)return e=a,!0});return e}};c.prototype._fixTokens=function(a,b){return a.replace(/(\{([^\{\r\n]+)\})/g,function(a,e,f){return(a=w(b,f))?"{"+a.name+"}":e})};c.prototype._encodeAttributes=function(a){var b=a?g.clone(a):{};Object.keys(b).forEach(function(a){var d=b[a];"string"===typeof d&&(d=encodeURIComponent(d).replace(/\'/g,
"\x26apos;"),b[a]=d)});return b};c.prototype._formatAttributesToFieldInfos=function(a,b,d){var e=this,f=g.clone(this._layerDateFields);a.forEach(function(c){var h=e._getFixedFieldName(c.fieldName,b);c.fieldName=h;d[h]=e._formatValue(d[h],{fieldInfos:a,fieldName:h,layer:b});f&&c.format&&c.format.dateFormat&&(c=f.indexOf(h),-1<c&&f.splice(c,1))})};c.prototype._getArcadeViewingMode=function(a){return a&&"local"===a.viewingMode?"localScene":"globalScene"};c.prototype._getViewInfo=function(){var a=this.view;
if(a){var b="3d"===a.type?this._getArcadeViewingMode(a):"map";return t.getViewInfo({viewingMode:b,scale:a.scale,spatialReference:a.spatialReference})}};c.prototype._formatAttributes=function(a,b,d){var e=this,f=this.graphic,c=f.attributes,m=p.getSourceLayer(f),k=c?g.clone(c):{};b&&b.forEach(function(a){var b="expression/"+a.name;a=d.get(a.name);var c=e._getViewInfo();a=t.executeFunction(a,t.createExecContext(f,c));k[b]="string"===typeof a?M(a):a});this.addRelatedFeatureAttributes(k);a&&this._formatAttributesToFieldInfos(a,
m,k);if(m){var l=m.typeIdField;c&&Object.keys(c).forEach(function(a){if(!e.isRelatedField(a)){var b=c[a];g.isDefined(b)&&(b=e._getDomainName(a,b),g.isDefined(b)?k[a]=b:a===l&&(b=e._getTypeName(),g.isDefined(b)&&(k[a]=b)))}})}return k};c.prototype._formatValue=function(a,b){var d={dateFormat:{properties:this._layerDateFields,formatter:u}},e=b.fieldName,c=this._getFieldInfo(b.fieldInfos,e),h=g.clone(c),c=b.preventPlacesFormatting;(b=w(b.layer,e))&&"date"===b.type&&(b=h.format||{},b.dateFormat=b.dateFormat||
"short-date-short-time",h.format=b);e=h&&h.format;if(!g.isDefined(a)||!h||!g.isDefined(e))return a;var m=[],h=e.hasOwnProperty("places")||e.hasOwnProperty("digitSeparator");b=e.hasOwnProperty("digitSeparator")?e.digitSeparator:!0;c=g.isDefined(e.places)&&(!c||0<e.places);h&&c&&m.push("places: "+Number(e.places));c=h?c?"NumberFormat("+m.join(",")+")":"NumberFormat":e.dateFormat?"DateFormat"+(x.getFormat(e.dateFormat)||E):void 0;if(!c)return a;a=g.substitute({myKey:a},"{myKey:"+c+"}",d)||"";return h&&
!b&&v.group?a.replace(C,""):a};c.prototype._getDomainName=function(a,b){var d=this.graphic,c=p.getSourceLayer(d);return c&&"feature"===c.type?(a=c.getFieldDomain(a,{feature:d}))&&"coded-value"===a.type?a.getName(b):null:null};c.prototype._getFieldInfo=function(a,b){if(a&&a.length&&b){var d=b.toLowerCase(),c=void 0;a.some(function(a){if(a.fieldName&&a.fieldName.toLowerCase()===d)return c=a,!0});return c}};c.prototype._getTypeName=function(){var a=this.graphic,b=p.getSourceLayer(a);if(b&&"feature"===
b.type&&(a=b.getFeatureType(a)))return a.name};c.prototype._processFieldsInLinks=function(a,b){var d=this._encodeAttributes(b),c=/href\s*=\s*(?:\"([^\"]+)\"|\'([^\']+)\')/gi;return a?a.replace(c,function(a,c,e){c=(""+(c||e)).trim();return g.substitute(c&&"{"===c[0]?b:d,a)}):a};c.prototype._compileAttachments=function(a,b){a=g.clone(a);if(!b)return a;a.attachmentInfos=b;return a};c.prototype._queryAttachments=function(){var a=this.graphic,b=p.getSourceLayer(a);return b?(b="scene"===b.type&&b.associatedLayer?
b.associatedLayer:b)&&"feature"===b.type?b.queryFeatureAttachments(a):r.resolve([]):r.resolve([])};c.prototype._queryContentElements=function(a){var b=this;if(!Array.isArray(a))return r.resolve();var d={};a.forEach(function(a,c){"attachments"===a.type&&(a=b._queryAttachments())&&(d[c]=a)});return Object.keys(d).length?r.eachAlways(d):r.resolve()};c.prototype._getContent=function(){var a=this.graphic;if(!this.contentEnabled)return r.resolve();var b=a.get("popupTemplate.content"),a="function"===typeof b?
b.call(null,{graphic:a}):b;return r.isThenable(a)?a:r.resolve(a)};c.prototype._queryFeature=function(){var a=this;return this._getContent().then(function(b){return a._checkForRelatedFeatures(b).then(function(){a._set("formattedAttributes",a._createFormattedAttributes(b));a._set("title",a._compileTitle());return a._queryContentElements(b).then(function(d){d=a._compileContent(b,d);a._set("content",d||null);return d})})})};c.prototype._isExpressionField=function(a){return B.test(a)};c.prototype._createCompiledExpressionDictionary=
function(a){var b=new Map;if(!a)return b;a.forEach(function(a){return b.set(a.name,t.createFunction(a.expression))});return b};c.prototype._getDateFields=function(a){return(a=a.fields)?a.filter(function(a){return"date"===a.type}).map(function(a){return a.name}):[]};c.prototype._createFormattedAttributes=function(a){var b=this,d=this.graphic,c=d.get("popupTemplate.fieldInfos"),f=d.get("popupTemplate.expressionInfos"),h=this._createCompiledExpressionDictionary(f),g={global:this._formatAttributes(c,
f,h),content:[]};Array.isArray(a)&&a.forEach(function(a,d){"fields"===a.type&&a.fieldInfos&&(g.content[d]=b._formatAttributes(a.fieldInfos,f,h))});return g};c.prototype._getAllFieldInfos=function(a){var b=[],d=this.graphic.get("popupTemplate.fieldInfos");d&&b.push.apply(b,d);if(!a||!Array.isArray(a))return b;a.forEach(function(a){b.push.apply(b,a&&a.fieldInfos)});return b};c.prototype._checkForRelatedFeatures=function(a){var b=this.graphic;a=this._getAllFieldInfos(a);return this.queryRelatedInfos(b,
a)};c.prototype._getChartOption=function(a){var b=a.value,d=a.attributes,c=a.formattedAttributes,f=a.fieldName,h=a.relatedFieldName,g=a.fieldInfos;a=p.getSourceLayer(this.graphic);var k=b.normalizeField,l=b.tooltipField,k=k?this.isRelatedField(k)?d[this.getRelatedFieldInfo(k).fieldName]:d[k]:null,b=h&&void 0!==d[h]?d[h]:void 0!==d[f]?d[f]:c[f],b="string"===typeof b&&v.group?parseFloat(b.replace(C,"")):b,n=void 0===b?null:b&&k?b/k:b,b={y:n};if(this.isRelatedField(f))return c=this.getRelatedFieldInfo(f),
f=(f=this.getRelatedFieldInfo(l))?f.fieldName:null,a=this._formatValue(n,{fieldInfos:g,fieldName:h,layer:a,preventPlacesFormatting:!!k}),h=c?c.label||c.fieldName:h,b.tooltip=(f&&void 0!==d[f]?d[f]:h)+": "+a,b;d=this._getFieldInfo(g,f);h=this._getFixedFieldName(f,a);d=d?d.label||d.fieldName:f;b.tooltip=(l&&void 0!==c[l]?c[l]:d)+": "+c[h];return b};c.prototype._getFixedFieldName=function(a,b){return(b=w(b,a))?b.name:a};c.prototype._getFixedFieldNames=function(a,b){var c=this;return a&&a.map(function(a){return c._getFixedFieldName(a,
b)})};c.prototype._setChartValue=function(a){var b=this,c=a.value,e=a.attributes,f=a.formattedAttributes;a=a.layer;var h=this.graphic,m=this.relatedInfoCount,k=c.fields,l=c.normalizeField;c.fields=this._getFixedFieldNames(k,a);l&&(c.normalizeField=this._getFixedFieldName(l,a));if(k.some(function(a){return!!(g.isDefined(f[a])||b.isRelatedField(a)&&m)})){var n=h.get("popupTemplate.fieldInfos");c.chartOptions=c.chartOptions||[];k.forEach(function(a){b.isRelatedField(a)?c.chartOptions=c.chartOptions.concat(b._getRelatedChartInfos({fieldInfos:n,
fieldName:a,formattedAttributes:f,value:c})):(a=b._getChartOption({value:c,attributes:e,formattedAttributes:f,fieldName:a,fieldInfos:n}),c.chartOptions.push(a))})}};c.prototype._getRelatedChartInfos=function(a){var b=this,c=a.fieldInfos,e=a.fieldName,f=a.formattedAttributes,g=a.value,m=[];a=this.getRelatedFieldInfo(e);var k=a.fieldName,l=this.getRelatedInfo(a.layerId);if(!l)return m;a=l.relatedFeatures;l=l.relation;if(!l||!a)return m;l=l.cardinality;a.forEach(function(a){var d=a.attributes;d&&Object.keys(d).forEach(function(a){a===
k&&m.push(b._getChartOption({value:g,attributes:d,formattedAttributes:f,fieldName:e,relatedFieldName:a,fieldInfos:c}))})});return"one-to-many"===l||"many-to-many"===l?m:[m[0]]};q([n.property({readOnly:!0})],c.prototype,"content",void 0);q([n.property()],c.prototype,"contentEnabled",void 0);q([n.property({readOnly:!0})],c.prototype,"formattedAttributes",void 0);q([n.property({type:G})],c.prototype,"graphic",null);q([n.property({readOnly:!0})],c.prototype,"title",void 0);q([n.property()],c.prototype,
"view",void 0);q([n.property({readOnly:!0})],c.prototype,"waitingForContent",null);return c=q([n.subclass("esri.widgets.FeatureViewModel")],c)}(n.declared(L))});