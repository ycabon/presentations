import { j as e, y, k as i, fF as f, r, o as t, fG as x, U, fH as l, bz as M, dc as d, fI as a, s, el as i$1, fJ as o, t as t$1, cV as p, cI as V } from './_virtual_index-2683c931.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function b(e){if("string"==typeof e){const t=V(e);return t||{data:e}}return new Promise(((t,r)=>{const a=new FileReader;a.readAsDataURL(e),a.onload=()=>t(V(a.result)),a.onerror=e=>r(e);}))}const F=new Set(["Feature Layer","Table"]);let R=class extends f{constructor(){super(...arguments),this.type="feature-layer";}load(e){const t=r(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:e}},parsedUrl:r,dynamicDataSource:a,gdbVersion:s,spatialReference:o,fieldsIndex:i}=this.layer,u=t("featurelayer-pbf")&&e?"pbf":"json";return new x({url:r.path,format:u,fieldsIndex:i,dynamicDataSource:a,gdbVersion:s,sourceSpatialReference:o})}async addAttachment(e,t){await this.load();const r=e.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+r+"/addAttachment",s=this._getLayerRequestOptions(),o=this._getFormDataForAttachment(t,s.query);try{const e=await U(a,{body:o});return this._createFeatureEditResult(e.data.addAttachmentResult)}catch(i){throw this._createAttachmentErrorResult(r,i)}}async updateAttachment(e,t,r){await this.load();const a=e.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+a+"/updateAttachment",o=this._getLayerRequestOptions({query:{attachmentId:t}}),i=this._getFormDataForAttachment(r,o.query);try{const e=await U(s,{body:i});return this._createFeatureEditResult(e.data.updateAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(a,u)}}async applyEdits(e,t){await this.load();const r=e.addFeatures.map(this._serializeFeature,this),a=e.updateFeatures.map(this._serializeFeature,this),s=this._getFeatureIds(e.deleteFeatures,null==t?void 0:t.globalIdUsed);l(r,a,this.layer.spatialReference);const o=[],i=[],u=[...e.deleteAttachments];for(const c of e.addAttachments)o.push(await this._serializeAttachment(c));for(const c of e.updateAttachments)i.push(await this._serializeAttachment(c));const n=o.length||i.length||u.length?{adds:o,updates:i,deletes:u}:null,l$1=this._getLayerRequestOptions({method:"post",query:{adds:r.length?JSON.stringify(r):null,updates:a.length?JSON.stringify(a):null,deletes:s.length?null!=t&&t.globalIdUsed?JSON.stringify(s):s.join(","):null,gdbVersion:(null==t?void 0:t.gdbVersion)||this.layer.gdbVersion,rollbackOnFailure:null==t?void 0:t.rollbackOnFailureEnabled,useGlobalIds:null==t?void 0:t.globalIdUsed,attachments:n&&JSON.stringify(n)}}),d=await U(this.layer.parsedUrl.path+"/applyEdits",l$1);return this._createEditsResult(d)}async deleteAttachments(e,t){await this.load();const r=e.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+r+"/deleteAttachments";try{return (await U(a,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(s){throw this._createAttachmentErrorResult(r,s)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:r,url:a}=this.layer,{data:s}=await U(`${a}/${r}`,t),{id:o,extent:i,fullExtent:u,timeExtent:n}=s,l=i||u;return {id:o,fullExtent:l&&M.fromJSON(l),timeExtent:n&&d.fromJSON({start:n[0],end:n[1]})}}))}async queryAttachments(e,t={}){const{parsedUrl:r}=this.layer,a$1=r.path;await this.load();const s=this._getLayerRequestOptions(t);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:t}=e,r=[];for(const e of t){const t=a$1+"/"+e+"/attachments";r.push(U(t,s));}return Promise.all(r).then((e=>t.map(((t,r)=>({parentObjectId:t,attachmentInfos:e[r].data.attachmentInfos}))))).then((e=>a(e,a$1)))}return this.queryTask.executeAttachmentQuery(e,s)}async queryFeatures(e,t){return await this.load(),this.queryTask.execute(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async _fetchService(e){let r=this.layer.sourceJSON;if(!r){const{data:a}=await U(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:t("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:e}));r=a;}this.sourceJSON=this._patchServiceJSON(r);const a=r.type;if(!F.has(a))throw new s("feature-layer-source:unsupported-type",`Source type "${a}" is not supported`)}_patchServiceJSON(e){var t;if("Table"!==e.type&&e.geometryType&&(null==e||null==(t=e.drawingInfo)||!t.renderer)&&!e.defaultSymbol){const t=i$1(e.geometryType).renderer;o("drawingInfo.renderer",t,e);}return e}_serializeFeature(e){const{geometry:t,attributes:r}=e;return t$1(t)?{attributes:r}:"mesh"===t.type||"extent"===t.type?null:{geometry:t.toJSON(),attributes:r}}async _serializeAttachment(e){const{feature:t,attachment:r}=e,{globalId:a,name:s,contentType:o,data:i,uploadId:u}=r,n={globalId:a,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(t&&(n.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),u)n.uploadId=u;else if(i){const e=await b(i);n.contentType=e.mediaType,n.data=e.data,i instanceof File&&(n.name=i.name);}return s&&(n.name=s),o&&(n.contentType=o),n}_getFeatureIds(e,t){const r=e[0];return r?this._canUseGlobalIds(t,e)?this._getGlobalIdsFromFeatureIdentifier(e):"objectId"in r?this._getObjectIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}_getIdsFromFeatures(e){const t=this.layer.objectIdField;return e.map((e=>e.attributes&&e.attributes[t]))}_canUseGlobalIds(e,t){return e&&"globalId"in t[0]}_getObjectIdsFromFeatureIdentifier(e){return e.map((e=>e.objectId))}_getGlobalIdsFromFeatureIdentifier(e){return e.map((e=>e.globalId))}_createEditsResult(e){const t=e.data,r=e.data&&e.data.attachments;return {addFeatureResults:t.addResults?t.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:t.updateResults?t.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:t.deleteResults?t.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:r&&r.addResults?r.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:r&&r.updateResults?r.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:r&&r.deleteResults?r.deleteResults.map(this._createFeatureEditResult,this):[]}}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return {objectId:e.objectId,globalId:e.globalId,error:t?new s("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_createAttachmentErrorResult(e,t){const r=t.details.messages&&t.details.messages[0]||t.message,a=t.details.httpStatus||t.details.messageCode;return {objectId:e,globalId:null,error:new s("feature-layer-source:attachment-failure",r,{code:a})}}_getFormDataForAttachment(e,t){const r=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(r)for(const a in t){const e=t[a];null!=e&&(r.set?r.set(a,e):r.append(a,e));}return r}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:a,dynamicDataSource:s}=this.layer;return {...e,query:p({gdbVersion:a,layer:s?JSON.stringify({source:s}):void 0,...t.query,f:"json",...this.layer.customParameters,...null==e?void 0:e.query}),responseType:"json"}}};e([y()],R.prototype,"type",void 0),e([y({constructOnly:!0})],R.prototype,"layer",void 0),e([y({readOnly:!0})],R.prototype,"queryTask",null),R=e([i("esri.layers.graphics.sources.FeatureLayerSource")],R);var q=R;

export default q;