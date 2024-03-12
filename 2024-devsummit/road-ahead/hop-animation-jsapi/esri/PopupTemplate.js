// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("./chunks/tslib.es6 ./core/Clonable ./core/Collection ./core/JSONSupport ./core/lang ./core/Logger ./core/promiseUtils ./core/accessorSupport/decorators/property ./core/accessorSupport/decorators/cast ./core/accessorSupport/decorators/reader ./core/accessorSupport/decorators/subclass ./core/accessorSupport/decorators/writer ./core/accessorSupport/ensureType ./layers/support/fieldUtils ./popup/content ./popup/ExpressionInfo ./popup/FieldInfo ./popup/LayerOptions ./popup/RelatedRecordsInfo ./popup/content/support/mediaInfoTypes ./support/actions/ActionBase ./support/actions/ActionButton ./support/actions/ActionToggle ./popup/content/MediaContent ./popup/content/TextContent ./popup/content/AttachmentsContent ./popup/content/FieldsContent ./popup/content/ExpressionContent ./popup/content/RelationshipContent ./popup/content/Content ./popup/content/CustomContent".split(" "),
function(h,g,p,A,x,B,C,l,D,E,F,n,G,y,H,I,J,K,L,M,q,N,O,r,t,u,v,z,w,P,Q){q=p.ofType({key:"type",defaultKeyValue:"button",base:q,typeMap:{button:N,toggle:O}});const R={base:P,key:"type",typeMap:{media:r,custom:Q,text:t,attachments:u,fields:v,expression:z,relationship:w}},S=new Set("attachments fields media text expression relationship".split(" "));g=class extends g.ClonableMixin(A.JSONSupport){constructor(){super(...arguments);this.actions=null;this.content="";this.layerOptions=this.fieldInfos=this.expressionInfos=
null;this.lastEditInfoEnabled=!0;this.outFields=null;this.returnGeometry=this.overwriteActions=!1;this.title=""}castContent(a){if(Array.isArray(a))return a.map(b=>G.ensureOneOfType(R,b));if("string"===typeof a||"function"===typeof a||a instanceof HTMLElement||C.isPromiseLike(a))return a;B.getLogger(this).error("content error","unsupported content value",{value:a});return null}readContent(a,b){({popupElements:a}=b);return Array.isArray(a)&&0<a.length?this._readPopupInfoElements(b.description,b.mediaInfos,
a):this._readPopupInfo(b)}writeContent(a,b,c,d){"string"===typeof a?b.description=a:Array.isArray(a)&&(b.popupElements=a.filter(e=>S.has(e.type)).map(e=>e?.toJSON(d)),b.popupElements.forEach(e=>{"attachments"===e.type?this._writeAttachmentContent(b):"media"===e.type?this._writeMediaContent(e,b):"text"===e.type?this._writeTextContent(e,b):"relationship"===e.type&&this._writeRelationshipContent(e,b)}))}writeFieldInfos(a,b,c,d){({content:c}=this);c=Array.isArray(c)?c:null;if(a){const e=c?c.filter(k=>
"fields"===k.type):[],f=e.length&&e.every(k=>k.fieldInfos?.length);b.fieldInfos=a.filter(Boolean).map(k=>{k=k.toJSON(d);f&&(k.visible=!1);return k})}if(c)for(const e of c)"fields"===e.type&&this._writeFieldsContent(e,b)}writeLayerOptions(a,b,c,d){b[c]=!a||null===a.showNoDataRecords&&null===a.returnTopmostRaster?null:a.toJSON(d)}writeTitle(a,b){b.title=a||""}async collectRequiredFields(a,b){const c=this.expressionInfos||[];await this._collectExpressionInfoFields(a,b,[...c,...this._getContentExpressionInfos(this.content,
c)]);y.collectFields(a,b,[...(this.outFields||[]),...this._getActionsFields(this.actions),...this._getTitleFields(this.title),...this._getContentFields(this.content)])}async getRequiredFields(a){const b=new Set;await this.collectRequiredFields(b,a);return[...b].sort()}_writeFieldsContent(a,b){Array.isArray(a.fieldInfos)&&a.fieldInfos.length&&(a=x.clone(a.fieldInfos),Array.isArray(b.fieldInfos)?a.forEach(c=>{const d=b.fieldInfos.find(e=>e.fieldName.toLowerCase()===c.fieldName.toLowerCase());d?d.visible=
!0:b.fieldInfos.push(c)}):b.fieldInfos=a)}_writeAttachmentContent(a){a.showAttachments||(a.showAttachments=!0)}_writeRelationshipContent(a,b){var c=a.orderByFields?.map(d=>this._toFieldOrderJSON(d,a.relationshipId))||[];c=[...(b.relatedRecordsInfo?.orderByFields||[]),...c];b.relatedRecordsInfo={showRelatedRecords:!0,...(c?.length&&{orderByFields:c})}}_writeTextContent(a,b){!b.description&&a.text&&(b.description=a.text)}_writeMediaContent(a,b){Array.isArray(a.mediaInfos)&&a.mediaInfos.length&&(a=x.clone(a.mediaInfos),
Array.isArray(b.mediaInfos)?b.mediaInfos=[...b.mediaInfos,...a]:b.mediaInfos=a)}_readPopupInfoElements(a,b,c){var d=!1,e=!1;return c.map(f=>{if("media"===f.type)return f.mediaInfos||!b||e||(f.mediaInfos=b,e=!0),r.fromJSON(f);if("text"===f.type)return f.text||!a||d||(f.text=a,d=!0),t.fromJSON(f);if("attachments"===f.type)return u.fromJSON(f);if("fields"===f.type)return v.fromJSON(f);if("expression"===f.type)return z.fromJSON(f);if("relationship"===f.type)return w.fromJSON(f)}).filter(Boolean)}_toRelationshipContent(a){const {field:b,
order:c}=a;if(!b?.startsWith("relationships/"))return null;var d=b.replace("relationships/","").split("/");if(2!==d.length)return null;a=parseInt(d[0],10);d=d[1];return"number"===typeof a&&d?w.fromJSON({relationshipId:a,orderByFields:[{field:d,order:c}]}):null}_toFieldOrderJSON(a,b){const {order:c,field:d}=a;return{field:`${"relationships/"}${b}/${d}`,order:c}}_readPopupInfo({description:a,mediaInfos:b,showAttachments:c,relatedRecordsInfo:d={showRelatedRecords:!1}}){const e=[];a?e.push(new t({text:a})):
e.push(new v);Array.isArray(b)&&b.length&&e.push(r.fromJSON({mediaInfos:b}));c&&e.push(u.fromJSON({displayType:"auto"}));const {showRelatedRecords:f,orderByFields:k}=d;f&&k?.length&&k.forEach(m=>{(m=this._toRelationshipContent(m))&&e.push(m)});return e.length?e:a}_getContentElementFields(a){var b=a?.type;return"attachments"===b?[...this._extractFieldNames(a.title),...this._extractFieldNames(a.description)]:"custom"===b?a.outFields||[]:"fields"===b?[...this._extractFieldNames(a.title),...this._extractFieldNames(a.description),
...this._getFieldInfoFields(a.fieldInfos??this.fieldInfos)]:"media"===b?(b=a.mediaInfos||[],[...this._extractFieldNames(a.title),...this._extractFieldNames(a.description),...b.reduce((c,d)=>[...c,...this._getMediaInfoFields(d)],[])]):"text"===b?this._extractFieldNames(a.text):[]}_getMediaInfoFields(a){const {caption:b,title:c,value:d}=a,{fields:e,normalizeField:f,tooltipField:k,sourceURL:m,linkURL:T}=d||{};a=[...this._extractFieldNames(c),...this._extractFieldNames(b),...this._extractFieldNames(m),
...this._extractFieldNames(T),...(e??[])];f&&a.push(f);k&&a.push(k);return a}_getContentExpressionInfos(a,b){return Array.isArray(a)?a.reduce((c,d)=>[...c,...("expression"===d.type&&d.expressionInfo?[d.expressionInfo]:[])],b):[]}_getContentFields(a){return"string"===typeof a?this._extractFieldNames(a):Array.isArray(a)?a.reduce((b,c)=>[...b,...this._getContentElementFields(c)],[]):[]}async _collectExpressionInfoFields(a,b,c){c&&await Promise.all(c.map(d=>y.collectArcadeFieldNames(a,b,d.expression)))}_getFieldInfoFields(a){return a?
a.filter(b=>void 0===b.visible||!!b.visible).map(b=>b.fieldName).filter(b=>!b.startsWith("relationships/")&&!b.startsWith("expression/")):[]}_getActionsFields(a){return a?a.toArray().reduce((b,c)=>[...b,...this._getActionFields(c)],[]):[]}_getActionFields(a){const {className:b,title:c,type:d}=a;a="button"===d||"toggle"===d?a.image:"";return[...this._extractFieldNames(c),...this._extractFieldNames(b),...this._extractFieldNames(a)]}_getTitleFields(a){return"string"===typeof a?this._extractFieldNames(a):
[]}_extractFieldNames(a){if(!a||"string"!==typeof a)return[];a=a.match(/{[^}]*}/g);if(!a)return[];const b=/\{(\w+):.+\}/;return(a=a.filter(c=>!(0===c.indexOf("{relationships/")||0===c.indexOf("{expression/"))).map(c=>c.replace(b,"{$1}")))?a.map(c=>c.slice(1,-1)):[]}};h.__decorate([l.property({type:q})],g.prototype,"actions",void 0);h.__decorate([l.property()],g.prototype,"content",void 0);h.__decorate([D.cast("content")],g.prototype,"castContent",null);h.__decorate([E.reader("content","description fieldInfos popupElements mediaInfos showAttachments relatedRecordsInfo".split(" "))],
g.prototype,"readContent",null);h.__decorate([n.writer("content",{popupElements:{type:p.ofType(H.persistableTypes)},showAttachments:{type:Boolean},mediaInfos:{type:p.ofType(M.types)},description:{type:String},relatedRecordsInfo:{type:L}})],g.prototype,"writeContent",null);h.__decorate([l.property({type:[I],json:{write:!0}})],g.prototype,"expressionInfos",void 0);h.__decorate([l.property({type:[J]})],g.prototype,"fieldInfos",void 0);h.__decorate([n.writer("fieldInfos")],g.prototype,"writeFieldInfos",
null);h.__decorate([l.property({type:K})],g.prototype,"layerOptions",void 0);h.__decorate([n.writer("layerOptions")],g.prototype,"writeLayerOptions",null);h.__decorate([l.property({type:Boolean,json:{read:{source:"showLastEditInfo"},write:{target:"showLastEditInfo"},default:!0}})],g.prototype,"lastEditInfoEnabled",void 0);h.__decorate([l.property()],g.prototype,"outFields",void 0);h.__decorate([l.property()],g.prototype,"overwriteActions",void 0);h.__decorate([l.property()],g.prototype,"returnGeometry",
void 0);h.__decorate([l.property({json:{type:String}})],g.prototype,"title",void 0);h.__decorate([n.writer("title")],g.prototype,"writeTitle",null);return g=h.__decorate([F.subclass("esri.PopupTemplate")],g)});