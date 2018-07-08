// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ./core/tsSupport/assignHelper ./core/tsSupport/declareExtendsHelper ./core/tsSupport/decorateHelper ./core/Collection ./core/date ./core/JSONSupport ./core/kebabDictionary ./core/lang ./core/accessorSupport/decorators ./layers/support/fieldUtils ./support/Action ./support/arcadeUtils".split(" "),function(x,y,z,r,e,t,m,u,n,f,d,g,v,w){var p=n({richtext:"rich-text",textarea:"text-area",textbox:"text-box"}),q=n({barchart:"bar-chart",columnchart:"column-chart",linechart:"line-chart",
piechart:"pie-chart"});return function(h){function b(){var a=null!==h&&h.apply(this,arguments)||this;a.actions=null;a.content="";a.expressionInfos=null;a.fieldInfos=null;a.layerOptions=null;a.overwriteActions=!1;a.title="";a.relatedRecordsInfo=null;return a}r(b,h);l=b;b.prototype.readContent=function(a,c){var b=this,k=c.description,d=c.mediaInfos;a=c.showAttachments;if((c=c.popupElements)&&c.length)return c.map(function(a){"text"!==a.type||a.text?"media"===a.type&&(a.mediaInfos||d)&&(a.mediaInfos||
(a.mediaInfos=d),a.mediaInfos=b._readMediaInfos(a.mediaInfos)):a.text=k;return a});c=[];k?c.push({type:"text",text:k}):c.push({type:"fields"});d&&d.length&&c.push({type:"media",mediaInfos:this._readMediaInfos(d)});a&&c.push({type:"attachments",displayType:"list"});return c.length?c:k};b.prototype.writeContent=function(a,c){var b=this;c.showAttachments=!1;"string"===typeof a?c.description=a:Array.isArray(a)&&(c.popupElements=f.clone(a),c.popupElements.forEach(function(a){"attachments"!==a.type||c.showAttachments?
"media"!==a.type||c.mediaInfos?"text"!==a.type||c.description?"fields"!==a.type||c.fieldInfos||(a.fieldInfos&&(c.fieldInfos=b._writeFieldInfos(f.clone(a.fieldInfos))),delete a.fieldInfos):(a.text&&(c.description=a.text),delete a.text):(a.mediaInfos&&(c.mediaInfos=f.clone(a.mediaInfos),c.mediaInfos.forEach(function(a){a.type=q.toJSON(a.type)})),delete a.mediaInfos):c.showAttachments=!0;return a}))};b.prototype.writeExpressionInfos=function(a,c){c.expressionInfos=a||null};b.prototype.readFieldInfos=
function(a){if(a)return a.forEach(function(a){var c=a.format&&a.format.dateFormat,b=a.stringFieldOption;c&&(a.format.dateFormat=m.fromJSON(c));b&&(a.stringFieldOption=p.fromJSON(b))}),a};b.prototype.writeFieldInfos=function(a,c){c.fieldInfos=a?this._writeFieldInfos(f.clone(a)):a};b.prototype.writeLayerOptions=function(a,c){c.layerOptions=a||null};b.prototype.writeTitle=function(a,c){c.title=a||""};b.prototype.writeRelatedRecordsInfo=function(a,c){c.relatedRecordsInfo=a||null};Object.defineProperty(b.prototype,
"requiredFields",{get:function(){return this.collectRequiredFields()},enumerable:!0,configurable:!0});b.prototype.clone=function(){var a=this.actions,a=a?f.clone(a.toArray()):[];return new l({actions:a,content:Array.isArray(this.content)?f.clone(this.content):this.content,fieldInfos:this.fieldInfos?f.clone(this.fieldInfos):null,layerOptions:this.layerOptions?f.clone(this.layerOptions):null,overwriteActions:this.overwriteActions,relatedRecordsInfo:this.relatedRecordsInfo?f.clone(this.relatedRecordsInfo):
null,title:this.title})};b.prototype.collectRequiredFields=function(){return this._getActionsFields(this.actions).concat(this._getTitleFields(this.title),this._getContentFields(this.content),this._getExpressionInfoFields(this.expressionInfos)).filter(function(a,c,b){return c===b.indexOf(a)})};b.prototype._getContentElementFields=function(a){var c=this;if(!a||"attachments"===a.type)return[];if("fields"===a.type)return this._getFieldInfoFields(a.fieldInfos||this.fieldInfos);if("media"===a.type)return(a.mediaInfos||
[]).reduce(function(a,b){return a.concat(c._getMediaInfoFields(b))},[]);if("text"===a.type)return g.extractFieldNames(a.text)};b.prototype._getMediaInfoFields=function(a){var c=a.caption,b=a.value||{},d=b.fields,e=void 0===d?[]:d,d=b.normalizeField,f=b.tooltipField,h=b.sourceURL,b=b.linkURL;a=g.extractFieldNames(a.title).concat(g.extractFieldNames(c),g.extractFieldNames(h),g.extractFieldNames(b),e);d&&a.push(d);f&&a.push(f);return a};b.prototype._getContentFields=function(a){var c=this;return"string"===
typeof a?g.extractFieldNames(a):Array.isArray(a)?a.reduce(function(a,b){return a.concat(c._getContentElementFields(b))},[]):[]};b.prototype._getExpressionInfoFields=function(a){return a?a.reduce(function(a,b){return a.concat(w.extractFieldNames(b.expression))},[]):[]};b.prototype._getFieldInfoFields=function(a){return a?a.filter(function(a){return"undefined"===typeof a.visible?!0:!!a.visible}).map(function(a){return a.fieldName}).filter(function(a){return-1===a.indexOf("relationships/")&&-1===a.indexOf("expression/")}):
[]};b.prototype._getActionsFields=function(a){var b=this;return a?a.toArray().reduce(function(a,c){return a.concat(b._getActionFields(c))},[]):[]};b.prototype._getActionFields=function(a){return g.extractFieldNames(a.title).concat(g.extractFieldNames(a.className),g.extractFieldNames(a.image))};b.prototype._getTitleFields=function(a){return"string"===typeof a?g.extractFieldNames(a):[]};b.prototype._readMediaInfos=function(a){a.forEach(function(a){a.type=q.fromJSON(a.type)});return a};b.prototype._writeFieldInfos=
function(a){a.forEach(function(a){var b=a.format&&a.format.dateFormat,c=a.stringFieldOption;b&&(a.format.dateFormat=m.toJSON(b));c&&(a.stringFieldOption=p.toJSON(c));a.format||delete a.format});return a};e([d.property({type:t.ofType(v)})],b.prototype,"actions",void 0);e([d.property()],b.prototype,"content",void 0);e([d.reader("content",["description","popupElements","mediaInfos","showAttachments"])],b.prototype,"readContent",null);e([d.writer("content")],b.prototype,"writeContent",null);e([d.property()],
b.prototype,"expressionInfos",void 0);e([d.writer("expressionInfos")],b.prototype,"writeExpressionInfos",null);e([d.property()],b.prototype,"fieldInfos",void 0);e([d.reader("fieldInfos")],b.prototype,"readFieldInfos",null);e([d.writer("fieldInfos")],b.prototype,"writeFieldInfos",null);e([d.property()],b.prototype,"layerOptions",void 0);e([d.writer("layerOptions")],b.prototype,"writeLayerOptions",null);e([d.property()],b.prototype,"overwriteActions",void 0);e([d.property()],b.prototype,"title",void 0);
e([d.writer("title")],b.prototype,"writeTitle",null);e([d.property()],b.prototype,"relatedRecordsInfo",void 0);e([d.writer("relatedRecordsInfo")],b.prototype,"writeRelatedRecordsInfo",null);e([d.property({dependsOn:["actions","title","content","fieldInfos","expressionInfos"],readOnly:!0})],b.prototype,"requiredFields",null);return b=l=e([d.subclass("esri.PopupTemplate")],b);var l}(d.declared(u))});