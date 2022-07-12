"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1408],{88387:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Q});var i,n=r(43697),s=(r(66577),r(51773)),o=(r(16050),r(12501),r(28756),r(92271),r(72529),r(5499),r(84382)),l=r(30687),a=r(91423),p=r(32400),d=r(3172),u=r(78223),c=r(20102),f=r(92604),y=r(70586),h=r(16453),m=r(95330),b=r(5600),v=(r(67676),r(80442),r(75215)),g=r(71715),w=r(52011),S=r(63213),x=r(86973),I=r(87085),_=r(17287),C=r(71612),P=r(17017),E=r(69637),L=r(38009),j=r(16859),F=r(34760),N=r(72965),Z=r(28294),O=r(21506),D=r(2075),R=r(53518),$=r(35671),k=r(2319),A=r(30707),T=r(96674);let U=i=class extends T.wq{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new i({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};(0,n._)([(0,b.Cb)({type:Number,json:{write:!0}})],U.prototype,"age",void 0),(0,n._)([(0,b.Cb)({type:Number,json:{write:!0}})],U.prototype,"ageReceived",void 0),(0,n._)([(0,b.Cb)({type:Number,json:{write:!0}})],U.prototype,"displayCount",void 0),(0,n._)([(0,b.Cb)({type:Number,json:{write:!0}})],U.prototype,"maxObservations",void 0),U=i=(0,n._)([(0,w.j)("esri.layers.support.PurgeOptions")],U);const z=U;var V=r(40555),J=r(57444),B=r(32163),q=r(86787),M=r(82971),G=r(6570);const H=(0,R.v)();let W=class extends((0,E.b)((0,C.h)((0,Z.n)((0,N.M)((0,F.Q)((0,_.Y)((0,L.q)((0,j.I)((0,h.R)((0,P.N)(I.Z))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new z,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=M.Z.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new c.Z("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const t=(0,y.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(m.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){(0,$.YN)(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,r){const i=(t=t.layerDefinition||t).drawingInfo&&t.drawingInfo.renderer||void 0;if(i){const e=(0,a.a)(i,t,r)||void 0;return e||f.Z.getLogger(this.declaredClass).error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),e}if(t.defaultSymbol)return t.types&&t.types.length?new l.Z({defaultSymbol:Y(t.defaultSymbol,t,r),field:t.typeIdField,uniqueValueInfos:t.types.map((e=>({id:e.id,symbol:Y(e.symbol,e,r)})))}):new o.Z({symbol:Y(t.defaultSymbol,t,r)})}createPopupTemplate(e){return(0,B.eZ)(this,e)}createQuery(){const e=new J.Z;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,t){if(!this.fields)return null;let r=null;return this.fields.some((t=>(t.name===e&&(r=t.domain),!!r))),r}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}async _fetchService(e){if(this.webSocketUrl){if(!this.timeInfo?.trackIdField)throw new c.Z("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new c.Z("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new c.Z("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new c.Z("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:t}=await(0,d.default)(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=t}return this.sourceJSON={...this.sourceJSON??{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),(0,$.YN)(this.renderer,this.fieldsIndex),(0,$.UF)(this.timeInfo,this.fieldsIndex),(0,V.y)(this,{origin:"service"})}};(0,n._)([(0,b.Cb)({type:String})],W.prototype,"copyright",void 0),(0,n._)([(0,b.Cb)({readOnly:!0})],W.prototype,"defaultPopupTemplate",null),(0,n._)([(0,b.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],W.prototype,"definitionExpression",void 0),(0,n._)([(0,b.Cb)({type:String})],W.prototype,"displayField",void 0),(0,n._)([(0,b.Cb)({type:q.Z})],W.prototype,"elevationInfo",void 0),(0,n._)([(0,b.Cb)(D.d)],W.prototype,"featureReduction",void 0),(0,n._)([(0,b.Cb)(H.fields)],W.prototype,"fields",void 0),(0,n._)([(0,b.Cb)(H.fieldsIndex)],W.prototype,"fieldsIndex",void 0),(0,n._)([(0,b.Cb)({type:G.Z})],W.prototype,"geometryDefinition",void 0),(0,n._)([(0,b.Cb)({type:x.Mk.apiValues,json:{read:{reader:x.Mk.read}}})],W.prototype,"geometryType",void 0),(0,n._)([(0,b.Cb)(O.iR)],W.prototype,"labelsVisible",void 0),(0,n._)([(0,b.Cb)({type:[k.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:A.r},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],W.prototype,"labelingInfo",void 0),(0,n._)([(0,b.Cb)(O.rn)],W.prototype,"legendEnabled",void 0),(0,n._)([(0,b.Cb)({type:["show","hide"]})],W.prototype,"listMode",void 0),(0,n._)([(0,b.Cb)({type:v.z8})],W.prototype,"maxReconnectionAttempts",void 0),(0,n._)([(0,b.Cb)({type:v.z8})],W.prototype,"maxReconnectionInterval",void 0),(0,n._)([(0,b.Cb)(O.u1)],W.prototype,"maxScale",void 0),(0,n._)([(0,b.Cb)(O.rO)],W.prototype,"minScale",void 0),(0,n._)([(0,b.Cb)({type:String})],W.prototype,"objectIdField",void 0),(0,n._)([(0,b.Cb)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],W.prototype,"operationalLayerType",void 0),(0,n._)([(0,b.Cb)(O.C_)],W.prototype,"popupEnabled",void 0),(0,n._)([(0,b.Cb)({type:s.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],W.prototype,"popupTemplate",void 0),(0,n._)([(0,b.Cb)({type:z})],W.prototype,"purgeOptions",void 0),(0,n._)([(0,b.Cb)({types:p.A,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:p.o,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],W.prototype,"renderer",null),(0,n._)([(0,g.r)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),(0,g.r)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],W.prototype,"readRenderer",null),(0,n._)([(0,b.Cb)(O.YI)],W.prototype,"screenSizePerspectiveEnabled",void 0),(0,n._)([(0,b.Cb)()],W.prototype,"sourceJSON",void 0),(0,n._)([(0,b.Cb)({type:M.Z,json:{origins:{service:{read:{source:"spatialReference"}}}}})],W.prototype,"spatialReference",void 0),(0,n._)([(0,b.Cb)({json:{read:!1}})],W.prototype,"type",void 0),(0,n._)([(0,b.Cb)(O.HQ)],W.prototype,"url",void 0),(0,n._)([(0,b.Cb)({type:Number})],W.prototype,"updateInterval",void 0),(0,n._)([(0,b.Cb)({type:String})],W.prototype,"webSocketUrl",void 0),W=(0,n._)([(0,w.j)("esri.layers.StreamLayer")],W);const Y=(0,S.d)({types:u.QT}),Q=W},17287:(e,t,r)=>{r.d(t,{Y:()=>p});var i=r(43697),n=r(92604),s=r(70586),o=r(5600),l=(r(67676),r(80442),r(75215),r(52011)),a=r(66677);const p=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,a.Qc)(this.url);if((0,s.pC)(e)&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,a.Nm)(e,n.Z.getLogger(this.declaredClass)))}};return(0,i._)([(0,o.Cb)()],t.prototype,"title",null),(0,i._)([(0,o.Cb)({type:String})],t.prototype,"url",null),t=(0,i._)([(0,l.j)("esri.layers.mixins.ArcGISService")],t),t}},17017:(e,t,r)=>{r.d(t,{N:()=>o});var i=r(43697),n=r(5600),s=(r(67676),r(80442),r(75215),r(52011));const o=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return(0,i._)([(0,n.Cb)({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],t.prototype,"customParameters",void 0),t=(0,i._)([(0,s.j)("esri.layers.mixins.CustomParametersMixin")],t),t}},16859:(e,t,r)=>{r.d(t,{I:()=>g});var i=r(43697),n=r(40330),s=r(3172),o=r(66643),l=r(20102),a=r(92604),p=r(70586),d=r(95330),u=r(17452),c=r(5600),f=(r(67676),r(80442),r(75215),r(71715)),y=r(52011),h=r(30556),m=r(65587),b=r(15235),v=r(86082);const g=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0}destroy(){this.portalItem?.destroy(),this.portalItem=null}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new b.default({id:t.itemId,portal:r&&r.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const i=await r.e(8062).then(r.bind(r,18062));return(0,d.k_)(t),await i.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)}catch(e){throw(0,d.D_)(e)||a.Z.getLogger(this.declaredClass).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,d.r9)(e),!0))))}async _fetchUserHasEditingPrivileges(e){const t=this.url?n.id?.findCredential(this.url):null;if(!t)return!0;const r=w.credential===t?w.user:await this._fetchEditingUser(e);return w.credential=t,w.user=r,(0,p.Wi)(r)||null==r.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const r=n.id.findServerInfo(this.url);if(!r?.owningSystemUrl)return null;const i=`${r.owningSystemUrl}/sharing/rest`,l=m.Z.getDefault();if(l&&l.loaded&&(0,u.Fv)(l.restUrl)===(0,u.Fv)(i))return l.user;const a=`${i}/community/self`,d=(0,p.pC)(e)?e.signal:null,c=await(0,o.q6)((0,s.default)(a,{authMode:"no-prompt",query:{f:"json"},signal:d}));return c.ok?v.default.fromJSON(c.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t&&t.portal,i=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||m.Z.getDefault());return r&&i&&!(0,u.tm)(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new l.Z("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,i._)([(0,c.Cb)({type:b.default})],t.prototype,"portalItem",null),(0,i._)([(0,f.r)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,i._)([(0,h.c)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,i._)([(0,c.Cb)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),t=(0,i._)([(0,y.j)("esri.layers.mixins.PortalLayer")],t),t},w={credential:null,user:null}},34760:(e,t,r)=>{r.d(t,{Q:()=>b});var i=r(43697),n=r(92604),s=r(95330),o=r(5600),l=(r(67676),r(80442),r(75215),r(52011)),a=r(46791),p=(r(20102),r(26258),r(87538));const d=new a.Z,u=new WeakMap;function c(e){return e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e}function f(e,t){return Number.isFinite(e)&&Number.isFinite(t)?t<=0?e:f(t,e%t):0}let y=0,h=0;function m(){const e=Date.now();for(const t of d)t.refreshInterval&&e-(u.get(t)??0)+5>=6e4*t.refreshInterval&&(u.set(t,e),t.refresh(e))}(0,p.EH)((()=>{const e=Date.now();let t=0;for(const r of d)t=f(Math.round(6e4*r.refreshInterval),t),r.refreshInterval?u.get(r)||u.set(r,e):u.delete(r);if(t!==h){if(h=t,clearInterval(y),0===h)return void(y=0);y=setInterval(m,h)}}));const b=e=>{let t=class extends e{constructor(...e){super(...e),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=(0,s.Ds)((()=>this.hasDataChanged())),this.when().then((()=>{!function(e){c(e)&&d.push(e)}(this)}),(()=>{}))}destroy(){c(this)&&d.includes(this)&&d.remove(this)}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(e=Date.now()){(0,s.R8)(this._debounceHasDataChanged()).then((t=>{t&&this._set("refreshTimestamp",e),this.emit("refresh",{dataChanged:t})}),(e=>{n.Z.getLogger(this.declaredClass).error(e),this.emit("refresh",{dataChanged:!1,error:e})}))}async hasDataChanged(){return!0}};return(0,i._)([(0,o.Cb)({type:Number,cast:e=>e>=.1?e:e<=0?0:.1,json:{write:!0}})],t.prototype,"refreshInterval",void 0),(0,i._)([(0,o.Cb)({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),(0,i._)([(0,o.Cb)()],t.prototype,"refreshParameters",null),t=(0,i._)([(0,l.j)("esri.layers.mixins.RefreshableLayer")],t),t}},2319:(e,t,r)=>{r.d(t,{Z:()=>j});var i,n=r(43697),s=r(78223),o=r(35454),l=r(96674),a=r(22974),p=r(62357),d=r(5600),u=(r(75215),r(71715)),c=r(52011),f=r(30556),y=(r(67676),r(80442),r(8813));let h=i=class extends l.wq{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(e,t){return t.value?(0,y.dI)(t.value):e}writeExpression(e,t,r){null!=this.value&&(e=(0,y.dI)(this.value)),null!=e&&(t[r]=e)}clone(){return new i({expression:this.expression,title:this.title,value:this.value})}};(0,n._)([(0,d.Cb)({type:String,json:{write:{writerEnsuresNonNull:!0}}})],h.prototype,"expression",void 0),(0,n._)([(0,u.r)("expression",["expression","value"])],h.prototype,"readExpression",null),(0,n._)([(0,f.c)("expression")],h.prototype,"writeExpression",null),(0,n._)([(0,d.Cb)({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],h.prototype,"title",void 0),(0,n._)([(0,d.Cb)({json:{read:!1,write:!1}})],h.prototype,"value",void 0),h=i=(0,n._)([(0,c.j)("esri.layers.support.LabelExpressionInfo")],h);const m=h;var b=r(20256),v=r(4095),g=r(77987),w=r(78724),S=r(58333);g.Z.fromJSON(S.I4),v.Z.fromJSON(S.ET),b.Z.fromJSON(S.lF);const x=w.Z.fromJSON(S.qP);g.Z.fromJSON(S.eG),v.Z.fromJSON(S.wW),b.Z.fromJSON(S.lj);var I,_=r(21878);const C=new o.X({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function P(e){return!e||"service"!==e.origin&&!("map-image"===e.layer?.type)}function E(e){return!!function(e){return"map-image"===e?.type}(e)&&!!e.capabilities?.exportMap?.supportsArcadeExpressionForLabeling}let L=I=class extends l.wq{constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=x,this.useCodedValues=void 0,this.where=null}static evaluateWhere(e,t){const r=(e,t,r)=>{switch(t){case"=":return e==r;case"<>":return e!=r;case">":return e>r;case">=":return e>=r;case"<":return e<r;case"<=":return e<=r}return!1};try{if(null==e)return!0;const i=e.split(" ");if(3===i.length)return r(t[i[0]],i[1],i[2]);if(7===i.length){const e=r(t[i[0]],i[1],i[2]),n=i[3],s=r(t[i[4]],i[5],i[6]);switch(n){case"AND":return e&&s;case"OR":return e||s}}return!1}catch(t){console.log("Error.: can't parse = "+e)}}readLabelExpression(e,t){const r=t.labelExpressionInfo;if(!r||!r.value&&!r.expression)return e}writeLabelExpression(e,t,r){if(this.labelExpressionInfo)if(null!=this.labelExpressionInfo.value)e=(0,y.z7)(this.labelExpressionInfo.value);else if(null!=this.labelExpressionInfo.expression){const t=(0,y.el)(this.labelExpressionInfo.expression);t&&(e="["+t+"]")}null!=e&&(t[r]=e)}writeLabelExpressionInfo(e,t,r,i){if(null==e&&null!=this.labelExpression&&P(i))e=new m({expression:this.getLabelExpressionArcade()});else if(!e)return;const n=e.toJSON(i);n.expression&&(t[r]=n)}writeMaxScale(e,t){(e||this.minScale)&&(t.maxScale=e)}writeMinScale(e,t){(e||this.maxScale)&&(t.minScale=e)}getLabelExpression(){return(0,y.hV)(this)}getLabelExpressionArcade(){return(0,y.YI)(this)}getLabelExpressionSingleField(){return(0,y.UO)(this)}hash(){return JSON.stringify(this)}clone(){return new I({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:(0,a.d9)(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:(0,a.d9)(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};(0,n._)([(0,d.Cb)({type:String,json:{write:!0}})],L.prototype,"name",void 0),(0,n._)([(0,d.Cb)({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1}}}})],L.prototype,"allowOverrun",void 0),(0,n._)([(0,d.Cb)({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1}}}})],L.prototype,"deconflictionStrategy",void 0),(0,n._)([(0,d.Cb)({type:String,json:{write:{overridePolicy(e,t,r){return this.labelExpressionInfo&&"service"===r?.origin&&E(r.layer)?{enabled:!1}:{allowNull:!0}}}}})],L.prototype,"labelExpression",void 0),(0,n._)([(0,u.r)("labelExpression")],L.prototype,"readLabelExpression",null),(0,n._)([(0,f.c)("labelExpression")],L.prototype,"writeLabelExpression",null),(0,n._)([(0,d.Cb)({type:m,json:{write:{overridePolicy:(e,t,r)=>function(e){return P(e)||E(e.layer)}(r)?{allowNull:!0}:{enabled:!1}}}})],L.prototype,"labelExpressionInfo",void 0),(0,n._)([(0,f.c)("labelExpressionInfo")],L.prototype,"writeLabelExpressionInfo",null),(0,n._)([(0,d.Cb)({type:C.apiValues,json:{type:C.jsonValues,read:C.read,write:C.write}})],L.prototype,"labelPlacement",void 0),(0,n._)([(0,d.Cb)({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],L.prototype,"labelPosition",void 0),(0,n._)([(0,d.Cb)({type:Number})],L.prototype,"maxScale",void 0),(0,n._)([(0,f.c)("maxScale")],L.prototype,"writeMaxScale",null),(0,n._)([(0,d.Cb)({type:Number})],L.prototype,"minScale",void 0),(0,n._)([(0,f.c)("minScale")],L.prototype,"writeMinScale",null),(0,n._)([(0,d.Cb)({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:!1}}}})],L.prototype,"repeatLabel",void 0),(0,n._)([(0,d.Cb)({type:Number,cast:p.t_,json:{write:!0,origins:{"web-scene":{write:!1}}}})],L.prototype,"repeatLabelDistance",void 0),(0,n._)([(0,d.Cb)({types:s.yK,json:{origins:{"web-scene":{types:s.S6,write:_.vX,default:null}},write:_.vX,default:null}})],L.prototype,"symbol",void 0),(0,n._)([(0,d.Cb)({type:Boolean,json:{write:!0}})],L.prototype,"useCodedValues",void 0),(0,n._)([(0,d.Cb)({type:String,json:{write:!0}})],L.prototype,"where",void 0),L=I=(0,n._)([(0,c.j)("esri.layers.support.LabelClass")],L);const j=L},8813:(e,t,r)=>{r.d(t,{UO:()=>f,YI:()=>c,dI:()=>y,el:()=>g,hV:()=>u,z7:()=>d});var i=r(19153);const n="__begin__",s="__end__",o=new RegExp(n,"ig"),l=new RegExp(s,"ig"),a=new RegExp("^"+n,"i"),p=new RegExp(s+"$","i");function d(e){return e.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]")}function u(e){const t={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(t.expression=e.labelExpressionInfo.value,t.type="conventional"):e.labelExpressionInfo.expression&&(t.expression=e.labelExpressionInfo.expression,t.type="arcade"):null!=e.labelExpression&&(t.expression=function(e){return e.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}")}(e.labelExpression),t.type="conventional"),t}function c(e){const t=u(e);if(!t)return null;switch(t.type){case"conventional":return y(t.expression);case"arcade":return t.expression}return null}function f(e){const t=u(e);if(!t)return null;switch(t.type){case"conventional":return function(e){const t=e.match(h);return t&&t[1].trim()||null}(t.expression);case"arcade":return g(t.expression)}return null}function y(e){let t;return e?(t=(0,i.gx)(e,(e=>n+'$feature["'+e+'"]'+s)),t=a.test(t)?t.replace(a,""):'"'+t,t=p.test(t)?t.replace(p,""):t+'"',t=t.replace(o,'" + ').replace(l,' + "')):t='""',t}const h=/^\s*\{([^}]+)\}\s*$/i,m=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,b=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,v=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function g(e){if(!e)return null;let t=m.exec(e)||b.exec(e);return t?t[1]||t[3]:(t=v.exec(e),t?t[2]:null)}},30707:(e,t,r)=>{r.d(t,{a:()=>u,r:()=>p});var i=r(20102),n=r(22974),s=r(92604),o=r(2319);const l=s.Z.getLogger("esri.layers.support.labelingInfo"),a=/\[([^\[\]]+)\]/gi;function p(e,t,r){return e?e.map((e=>{const i=new o.Z;if(i.read(e,r),i.labelExpression){const e=t.fields||t.layerDefinition&&t.layerDefinition.fields||this.fields;i.labelExpression=i.labelExpression.replace(a,((t,r)=>`[${function(e,t){if(!t)return e;const r=e.toLowerCase();for(let e=0;e<t.length;e++){const i=t[e].name;if(i.toLowerCase()===r)return i}return e}(r,e)}]`))}return i})):null}const d={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function u(e,t){const r=(0,n.d9)(e);return r.some((e=>function(e,t){const r=e.labelPlacement,n=d[t];if(!e.symbol)return l.warn("No ILabelClass symbol specified."),!0;if(!n)return l.error(new i.Z("labeling:unsupported-geometry-type",`Unable to create labels for layer, geometry type '${t}' is not supported`)),!0;if(!n.includes(r)){const i=n[0];r&&l.warn(`Found invalid label placement type ${r} for ${t}. Defaulting to ${i}`),e.labelPlacement=i}return!1}(e,t)))?[]:r}},40555:(e,t,r)=>{r.d(t,{y:()=>o});var i=r(66643),n=r(95330),s=r(20941);async function o(e,t,r){const o=e&&e.getAtOrigin&&e.getAtOrigin("renderer",t.origin);if(o&&"unique-value"===o.type&&o.styleOrigin){const l=await(0,i.q6)(o.populateFromStyle());if((0,n.k_)(r),!1===l.ok){const r=l.error;t&&t.messages&&t.messages.push(new s.Z("renderer:style-reference",`Failed to create unique value renderer from style reference: ${r.message}`,{error:r,context:t})),e.clear("renderer",t.origin)}}}},51706:(e,t,r)=>{var i,n;function s(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function o(e){return null!=e&&!isNaN(e)&&isFinite(e)}function l(e){return e.valueExpression?i.Expression:e.field&&"string"==typeof e.field?i.Field:i.Unknown}function a(e,t){const r=t||l(e),s=e.valueUnit||"unknown";return r===i.Unknown?n.Constant:e.stops?n.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?n.ClampedLinear:"unknown"===s?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?n.Proportional:n.Additive:n.Identity:n.RealWorldSize}r.d(t,{PS:()=>l,QW:()=>a,RY:()=>i,hL:()=>n,iY:()=>s,qh:()=>o}),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(i||(i={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(n||(n={}))},32163:(e,t,r)=>{r.d(t,{eZ:()=>u});var i=r(51773),n=r(35671),s=r(84649),o=(r(63801),r(48074),r(38745),r(9190)),l=(r(10214),r(44951),r(422)),a=r(63061);const p=["oid","global-id"],d=["oid","global-id","guid"];function u({displayField:e,editFieldsInfo:t,fields:r,objectIdField:a,title:p},d){if(!r)return null;const u=function({editFieldsInfo:e,fields:t,objectIdField:r},i){return function(e,t){const r=e;return t&&(e=e.filter((e=>!t.includes(e.type)))),e===r&&(e=e.slice()),e.sort(y),e}(t,i?.ignoreFieldTypes||g).map((t=>new l.Z({fieldName:t.name,isEditable:m(t,e),label:t.alias,format:b(t),visible:f(t,{editFieldsInfo:e,objectIdField:r,visibleFieldNames:i?.visibleFieldNames})})))}({editFieldsInfo:t,fields:r,objectIdField:a},d);if(!u.length)return null;const c=function(e){const t=(0,n.O5)(e),{titleBase:r}=e;return t?`${r}: {${t.trim()}}`:r}({titleBase:p,fields:r,displayField:e}),h=[new o.Z,new s.Z];return new i.Z({title:c,content:h,fieldInfos:u})}const c=[/^fnode_$/i,/^tnode_$/i,/^lpoly_$/i,/^rpoly_$/i,/^poly_$/i,/^subclass$/i,/^subclass_$/i,/^rings_ok$/i,/^rings_nok$/i,/shape/i,/perimeter/i,/objectid/i,/_i$/i],f=(e,{editFieldsInfo:t,objectIdField:r,visibleFieldNames:i})=>i?i.has(e.name):!(h(e.name,t)||r&&e.name===r||p.includes(e.type)||c.some((t=>t.test(e.name))));function y(e,t){return"oid"===e.type?-1:"oid"===t.type?1:v(e)?-1:v(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function h(e,t){if(!e||!t)return!1;const{creationDateField:r,creatorField:i,editDateField:n,editorField:s}=t;return[r&&r.toLowerCase(),i&&i.toLowerCase(),n&&n.toLowerCase(),s&&s.toLowerCase()].includes(e.toLowerCase())}function m(e,t){return e.editable&&!d.includes(e.type)&&!h(e.name,t)}function b(e){switch(e.type){case"small-integer":case"integer":case"single":return new a.Z({digitSeparator:!0,places:0});case"double":return new a.Z({digitSeparator:!0,places:2});case"date":return new a.Z({dateFormat:"long-month-day-year"});default:return"string"===e.type&&(0,n.Ec)(e.name)?new a.Z({digitSeparator:!0,places:0}):null}}function v(e){return"name"===(e.name&&e.name.toLowerCase())||"name"===(e.alias&&e.alias.toLowerCase())||void 0}const g=["geometry","blob","raster","guid","xml"]}}]);