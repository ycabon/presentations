// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../Graphic ../../core/Accessor ../../core/Collection ../../core/Error ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/RandomLCG ../../core/has ../../core/accessorSupport/decorators/subclass ../../rest/query/support/AttachmentInfo ../../rest/support/AttachmentQuery ../Feature/support/featureUtils".split(" "),function(g,t,e,m,f,n,k,u,A,B,v,w,p,x){const q={editing:!1,operations:{add:!0,update:!0,
delete:!0}},r=m.ofType(w);e=class extends e{constructor(a){super(a);this._attachmentLayer=this._getAttachmentsPromise=null;this.capabilities={...q};this.activeFileInfo=this.activeAttachmentInfo=null;this.attachmentInfos=new r;this.fileInfos=new m;this.graphic=null;this.mode="view";this.filesEnabled=!1;this.addHandles(n.watch(()=>this.graphic,()=>this._graphicChanged(),n.initial))}destroy(){this.graphic=this._attachmentLayer=null}castCapabilities(a){return{...q,...a}}get state(){return this._getAttachmentsPromise?
"loading":this.graphic?"ready":"disabled"}get supportsResizeAttachments(){var {graphic:a}=this;if(!a)return!1;a=a.layer||a.sourceLayer;return a?.loaded&&"capabilities"in a&&a.capabilities&&"operations"in a.capabilities&&"supportsResizeAttachments"in a.capabilities.operations&&a.capabilities.operations.supportsResizeAttachments||!1}async getAttachments(){const {_attachmentLayer:a,attachmentInfos:b}=this;if(!a||"function"!==typeof a.queryAttachments)throw new f("invalid-layer","getAttachments(): A valid layer is required.");
const c=this._getObjectId();var d=new p({objectIds:[c],returnMetadata:!0});const h=[];this._getAttachmentsPromise=d=a.queryAttachments(d).then(l=>l[c]||h).catch(()=>h);this.notifyChange("state");d=await d;b.removeAll();d.length&&b.addMany(d);this._getAttachmentsPromise=null;this.notifyChange("state");return d}async addAttachment(a,b=this.graphic){const {_attachmentLayer:c,attachmentInfos:d,capabilities:h}=this;if(!b)throw new f("invalid-graphic","addAttachment(): A valid graphic is required.",{graphic:b});
if(!a)throw new f("invalid-attachment","addAttachment(): An attachment is required.",{attachment:a});if(!h.operations?.add)throw new f("invalid-capabilities","addAttachment(): add capabilities are required.");if(!c||"function"!==typeof c.addAttachment)throw new f("invalid-layer","addAttachment(): A valid layer is required.");a=await c.addAttachment(b,a).then(l=>this._queryAttachment(l.objectId,b));d.add(a);return a}async deleteAttachment(a){const {_attachmentLayer:b,attachmentInfos:c,graphic:d,capabilities:h}=
this;if(!a)throw new f("invalid-attachment-info","deleteAttachment(): An attachmentInfo is required.",{attachmentInfo:a});if(!h.operations?.delete)throw new f("invalid-capabilities","deleteAttachment(): delete capabilities are required.");if(!b||"function"!==typeof b.deleteAttachments)throw new f("invalid-layer","deleteAttachment(): A valid layer is required.");if(!d)throw new f("invalid-graphic","deleteAttachment(): A graphic is required.");const l=await b.deleteAttachments(d,[a.id]).then(()=>a);
c.remove(l);return l}async updateAttachment(a,b=this.activeAttachmentInfo){const {_attachmentLayer:c,attachmentInfos:d,graphic:h,capabilities:l}=this;if(!a)throw new f("invalid-attachment","updateAttachment(): An attachment is required.",{attachment:a});if(!b)throw new f("invalid-attachment-info","updateAttachment(): An attachmentInfo is required.",{attachmentInfo:b});if(!l.operations?.update)throw new f("invalid-capabilities","updateAttachment(): Update capabilities are required.");const y=d.indexOf(b);
if(!c||"function"!==typeof c.updateAttachment)throw new f("invalid-layer","updateAttachment(): A valid layer is required.");if(!h)throw new f("invalid-graphic","updateAttachment(): A graphic is required.");a=await c.updateAttachment(h,b.id,a).then(z=>this._queryAttachment(z.objectId));d.splice(y,1,a);return a}async commitFiles(){await Promise.all(this.fileInfos.items.map(a=>this.addAttachment(a.form)));this.fileInfos.removeAll();return this.getAttachments()}addFile(a,b){if(!a||!b)return null;a={file:a,
form:b};this.fileInfos.add(a);return a}updateFile(a,b,c=this.activeFileInfo){if(!a||!b||!c)return null;c=this.fileInfos.indexOf(c);-1<c&&this.fileInfos.splice(c,1,{file:a,form:b});return this.fileInfos.items[c]}deleteFile(a){const b=this.fileInfos.find(c=>c.file===a);return b?(this.fileInfos.remove(b),b):null}async _queryAttachment(a,b){const {_attachmentLayer:c}=this;if(!a||!c?.queryAttachments)throw new f("invalid-attachment-id","Could not query attachment.");const d=this._getObjectId(b);a=new p({objectIds:[d],
attachmentsWhere:`AttachmentId=${a}`,returnMetadata:!0});return c.queryAttachments(a).then(h=>h[d][0])}_getObjectId(a=this.graphic){return a?.getObjectId()??null}_graphicChanged(){this.graphic&&(this._setAttachmentLayer(),this.getAttachments().catch(()=>{}))}_setAttachmentLayer(){var {graphic:a}=this;this._attachmentLayer=(a=x.getSourceLayer(a))?"scene"===a.type&&null!=a.associatedLayer?a.associatedLayer:a:null}};g.__decorate([k.property()],e.prototype,"capabilities",void 0);g.__decorate([u.cast("capabilities")],
e.prototype,"castCapabilities",null);g.__decorate([k.property()],e.prototype,"activeAttachmentInfo",void 0);g.__decorate([k.property()],e.prototype,"activeFileInfo",void 0);g.__decorate([k.property({readOnly:!0,type:r})],e.prototype,"attachmentInfos",void 0);g.__decorate([k.property()],e.prototype,"fileInfos",void 0);g.__decorate([k.property({type:t})],e.prototype,"graphic",void 0);g.__decorate([k.property()],e.prototype,"mode",void 0);g.__decorate([k.property({readOnly:!0})],e.prototype,"state",
null);g.__decorate([k.property()],e.prototype,"filesEnabled",void 0);g.__decorate([k.property({readOnly:!0})],e.prototype,"supportsResizeAttachments",null);return e=g.__decorate([v.subclass("esri.widgets.Attachments.AttachmentsViewModel")],e)});