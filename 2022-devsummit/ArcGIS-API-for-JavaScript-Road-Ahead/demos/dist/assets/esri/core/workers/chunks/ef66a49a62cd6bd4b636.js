self.webpackChunkRemoteClient([75,147],{408:function(t,e,r){"use strict";r.r(e);var i=r(14),a=(r(4),r(3),r(6),r(16)),s=r(20),o=r(17),n=(r(24),r(37),r(38),r(43)),l=r(88),c=r(85),p=r(97);let u=class extends(Object(p.a)(Object(c.a)(l.a))){constructor(t){super(t),this.resourceInfo=null,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((t,e)=>{Object(n.a)(()=>{const t=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let r="Unsupported layer type";t&&(r+=" "+t),e(new o.a("layer:unsupported-layer-type",r,{layerType:t}))})}))}read(t,e){const r={resourceInfo:t};null!=t.id&&(r.id=t.id),null!=t.title&&(r.title=t.title),super.read(r,e)}write(t){return Object.assign(t||{},this.resourceInfo,{id:this.id})}};Object(i.a)([Object(a.b)({readOnly:!0})],u.prototype,"resourceInfo",void 0),Object(i.a)([Object(a.b)({type:["show","hide"]})],u.prototype,"listMode",void 0),Object(i.a)([Object(a.b)({json:{read:!1},readOnly:!0,value:"unsupported"})],u.prototype,"type",void 0),u=Object(i.a)([Object(s.a)("esri.layers.UnsupportedLayer")],u);var b=u;e.default=b},85:function(t,e,r){"use strict";r.d(e,"a",(function(){return f})),r.d(e,"b",(function(){return m}));var i=r(14),a=r(8),s=r(20),o=r(28),n=r(26),l=r(82),c=r(0),p=r(115),u=r(7);class b{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(o.a),this._values=new Map}clone(t){const e=new b,r=this._originStores[0];r&&r.forEach((t,r)=>{e.set(r,Object(u.a)(t),0)});for(let r=2;r<o.a;r++){const i=this._originStores[r];i&&i.forEach((i,a)=>{t&&t.has(a)||e.set(a,Object(u.a)(i),r)})}return e}get(t,e){const r=void 0===e?this._values:this._originStores[e];return r?r.get(t):void 0}keys(t){const e=null==t?this._values:this._originStores[t];return e?[...e.keys()]:[]}set(t,e,r=6){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(t,e),!this._values.has(t)||Object(c.b)(this._propertyOriginMap.get(t))<=r){const i=this._values.get(t);return this._values.set(t,e),this._propertyOriginMap.set(t,r),i!==e}return!1}delete(t,e=6){const r=this._originStores[e];if(!r)return;const i=r.get(t);if(r.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===e){this._values.delete(t);for(let r=e-1;r>=0;r--){const e=this._originStores[r];if(e&&e.has(t)){this._values.set(t,e.get(t)),this._propertyOriginMap.set(t,r);break}}}return i}has(t,e){const r=void 0===e?this._values:this._originStores[e];return!!r&&r.has(t)}revert(t,e){for(;e>0&&!this.has(t,e);)--e;const r=this._originStores[e],i=r&&r.get(t),a=this._values.get(t);return this._values.set(t,i),this._propertyOriginMap.set(t,e),a!==i}originOf(t){return this._propertyOriginMap.get(t)||0}forEach(t){this._values.forEach(t)}}var d=b;const h=t=>{let e=class extends t{constructor(...t){super(...t);const e=Object(c.b)(Object(a.a)(this)),r=e.metadatas,i=e.store,s=new d;e.store=s,i.keys().forEach(t=>{s.set(t,i.get(t),0)}),Object.keys(r).forEach(t=>{e.internalGet(t)&&s.set(t,e.internalGet(t),0)})}read(t,e){Object(p.a)(this,t,e)}getAtOrigin(t,e){const r=O(this),i=Object(o.d)(e);if("string"==typeof t)return r.get(t,i);const a={};return t.forEach(t=>{a[t]=r.get(t,i)}),a}originOf(t){return Object(o.b)(this.originIdOf(t))}originIdOf(t){return O(this).originOf(t)}revert(t,e){const r=O(this),i=Object(o.d)(e),s=Object(a.a)(this);let n;n="string"==typeof t?"*"===t?r.keys(i):[t]:t,n.forEach(t=>{s.propertyInvalidated(t),r.revert(t,i),s.propertyCommitted(t)})}};return e=Object(i.a)([Object(s.a)("esri.core.ReadOnlyMultiOriginJSONSupport")],e),e};function O(t){return Object(a.a)(t).store}let y=class extends(h(n.a)){};y=Object(i.a)([Object(s.a)("esri.core.ReadOnlyMultiOriginJSONSupport")],y);const j=t=>{let e=class extends t{constructor(...t){super(...t)}clear(t,e="user"){return g(this).delete(t,Object(o.d)(e))}write(t={},e){return Object(l.b)(this,t=t||{},e),t}setAtOrigin(t,e,r){Object(a.a)(this).setAtOrigin(t,e,Object(o.d)(r))}removeOrigin(t){const e=g(this),r=Object(o.d)(t),i=e.keys(r);for(const t of i)e.originOf(t)===r&&e.set(t,e.get(t,r),6)}updateOrigin(t,e){const r=g(this),i=Object(o.d)(e),a=this.get(t);for(let e=i+1;e<o.a;++e)r.delete(t,e);r.set(t,a,i)}toJSON(t){return this.write({},t)}};return e=Object(i.a)([Object(s.a)("esri.core.WriteableMultiOriginJSONSupport")],e),e.prototype.toJSON.isDefaultToJSON=!0,e};function g(t){return Object(a.a)(t).store}const f=t=>{let e=class extends(j(h(t))){constructor(...t){super(...t)}};return e=Object(i.a)([Object(s.a)("esri.core.MultiOriginJSONSupport")],e),e};let m=class extends(f(n.a)){};m=Object(i.a)([Object(s.a)("esri.core.MultiOriginJSONSupport")],m)},88:function(t,e,r){"use strict";var i=r(14),a=(r(4),r(21)),s=r(3),o=(r(6),r(16)),n=r(20),l=r(17),c=r(24),p=(r(37),r(38),r(2)),u=r(61),b=r(62),d=(r(64),r(108)),h=r(143),O=r(55),y=r(87);let j=0;const g=s.a.getLogger("esri.layers.Layer");let f=class extends(d.a.EventedMixin(Object(h.a)(y.a))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new b.a(-180,-90,180,90,u.a.WGS84),this.id=Date.now().toString(16)+"-layer-"+j++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=u.a.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(t){const e="string"==typeof t?{url:t}:t,i=await r.e(151).then(r.bind(null,192));try{return await i.fromUrl(e)}catch(t){throw g.error("#fromArcGISServerUrl({ url: '"+e.url+"'})","Failed to create layer from arcgis server url",t),t}}static async fromPortalItem(t){const e="portalItem"in t?t:{portalItem:t},i=await r.e(79).then(r.bind(null,173));try{return await i.fromItem(e)}catch(t){const r=e&&e.portalItem,i=r&&r.id||"unset",s=r&&r.portal&&r.portal.url||a.a.portalUrl;throw g.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+s+"', id: '"+i+"')",t),t}}initialize(){this.when().catch(t=>{var e,r;Object(p.l)(t)||s.a.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${null!=(e=this.title)?e:"no title"}', id: '${null!=(r=this.id)?r:"no id"}')`,{error:t})})}destroy(){if(this.parent){const t=this,e=this.parent;"layers"in e&&e.layers.includes(t)?e.layers.remove(t):"tables"in e&&e.tables.includes(t)?e.tables.remove(t):"baseLayers"in e&&e.baseLayers.includes(t)?e.baseLayers.remove(t):"baseLayers"in e&&e.referenceLayers.includes(t)&&e.referenceLayers.remove(t)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){const t=this.url;return t?Object(c.J)(t):null}async fetchAttributionData(){const t=this.attributionDataUrl;if(this.hasAttributionData&&t)return(await Object(O.default)(t,{query:{f:"json"},responseType:"json"})).data;throw new l.a("layer:no-attribution-data","Layer does not have attribution data")}};Object(i.a)([Object(o.b)({type:String})],f.prototype,"attributionDataUrl",void 0),Object(i.a)([Object(o.b)({type:b.a})],f.prototype,"fullExtent",void 0),Object(i.a)([Object(o.b)({readOnly:!0})],f.prototype,"hasAttributionData",null),Object(i.a)([Object(o.b)({type:String})],f.prototype,"id",void 0),Object(i.a)([Object(o.b)({type:Boolean,nonNullable:!0})],f.prototype,"legendEnabled",void 0),Object(i.a)([Object(o.b)({type:["show","hide","hide-children"]})],f.prototype,"listMode",void 0),Object(i.a)([Object(o.b)({type:Number,range:{min:0,max:1},nonNullable:!0})],f.prototype,"opacity",void 0),Object(i.a)([Object(o.b)()],f.prototype,"parent",void 0),Object(i.a)([Object(o.b)({readOnly:!0})],f.prototype,"parsedUrl",null),Object(i.a)([Object(o.b)({type:Boolean})],f.prototype,"popupEnabled",void 0),Object(i.a)([Object(o.b)({type:Boolean})],f.prototype,"attributionVisible",void 0),Object(i.a)([Object(o.b)({type:u.a})],f.prototype,"spatialReference",void 0),Object(i.a)([Object(o.b)({type:String})],f.prototype,"title",void 0),Object(i.a)([Object(o.b)({type:String,readOnly:!0,json:{read:!1}})],f.prototype,"type",void 0),Object(i.a)([Object(o.b)()],f.prototype,"url",void 0),Object(i.a)([Object(o.b)({type:Boolean,nonNullable:!0})],f.prototype,"visible",void 0),f=Object(i.a)([Object(n.a)("esri.layers.Layer")],f);var m=f;e.a=m},97:function(t,e,r){"use strict";r.d(e,"a",(function(){return O}));var i=r(14),a=(r(4),r(3)),s=(r(6),r(16)),o=r(58),n=r(20),l=r(57),c=r(17),p=r(24),u=(r(37),r(38),r(2)),b=r(80),d=r(111);const h=a.a.getLogger("esri.layers.mixins.PortalLayer"),O=t=>{let e=class extends t{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]}}destroy(){var t;null==(t=this.portalItem)||t.destroy(),this.portalItem=null}set portalItem(t){t!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",t))}readPortalItem(t,e,r){if(e.itemId)return new d.default({id:e.itemId,portal:r&&r.portal})}writePortalItem(t,e){t&&t.id&&(e.itemId=t.id)}async loadFromPortal(t,e){if(this.portalItem&&this.portalItem.id)try{const i=await r.e(66).then(r.bind(null,203));return Object(u.t)(e),await i.load({instance:this,supportedTypes:t.supportedTypes,validateItem:t.validateItem,supportsData:t.supportsData},e)}catch(t){throw Object(u.l)(t)||h.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${t}`),t}}read(t,e){e&&(e.layer=this),super.read(t,e)}write(t,e){const r=e&&e.portal,i=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||b.a.getDefault());return r&&i&&!Object(p.r)(i.restUrl,r.restUrl)?(e.messages&&e.messages.push(new c.a("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer`,{layer:this})),null):super.write(t,{...e,layer:this})}};return Object(i.a)([Object(s.b)({type:d.default})],e.prototype,"portalItem",null),Object(i.a)([Object(o.a)("web-document","portalItem",["itemId"])],e.prototype,"readPortalItem",null),Object(i.a)([Object(l.a)("web-document","portalItem",{itemId:{type:String}})],e.prototype,"writePortalItem",null),Object(i.a)([Object(s.b)()],e.prototype,"resourceReferences",void 0),e=Object(i.a)([Object(n.a)("esri.layers.mixins.PortalLayer")],e),e}}});