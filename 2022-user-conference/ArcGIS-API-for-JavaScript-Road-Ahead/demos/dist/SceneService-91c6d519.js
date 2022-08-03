import { jT as t, a5 as E$1, aB as f, s, km as b, Z as s$1, B as e, C as d, w8 as v, R as k, mr as o, w as w$1, mZ as v$1, m_ as f$1, cS as r, D as n$1, N as x, w9 as y, a8 as m, r as r$1, wa as h, wb as L$1, wc as b$1, z as j, h as L$2, a7 as b$2, $ as B, _ as i } from './_virtual_index-9b831d4a.js';
import { n as n$2 } from './I3SIndexInfo-aea5d059.js';
import { getSiblingOfSameTypeI as w } from './resourceUtils-924e3654.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function a(r,a,u){if(!a||!a.resources)return;const h=a.portalItem===r.portalItem?new Set(r.paths):new Set;r.paths.length=0,r.portalItem=a.portalItem;const i=new Set(a.resources.toKeep.map((r=>r.resource.path))),f$1=new Set,m=[];i.forEach((e=>{h.delete(e),r.paths.push(e);}));for(const e of a.resources.toUpdate)if(h.delete(e.resource.path),i.has(e.resource.path)||f$1.has(e.resource.path)){const{resource:o,content:t$1,finish:a,error:p}=e,h=w(o,t());r.paths.push(h.path),m.push(n({resource:h,content:t$1,finish:a,error:p},u));}else r.paths.push(e.resource.path),m.push(p(e,u)),f$1.add(e.resource.path);for(const e of a.resources.toAdd)m.push(n(e,u)),r.paths.push(e.resource.path);if(h.forEach((r=>{const e=a.portalItem.resourceFromPath(r);m.push(e.portalItem.removeResource(e).catch((()=>{})));})),0===m.length)return;const l=await E$1(m);f(u);const d=l.filter((r=>"error"in r)).map((r=>r.error));if(d.length>0)throw new s("save:resources","Failed to save one or more resources",{errors:d})}async function n(e,o){const t=await b(e.resource.portalItem.addResource(e.resource,e.content,o));if(!0!==t.ok)throw e.error&&e.error(t.error),t.error;e.finish&&e.finish(e.resource);}async function p(e,o){const t=await b(e.resource.update(e.content,o));if(!0!==t.ok)throw e.error(t.error),t.error;e.finish(e.resource);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const R="esri.layers.mixins.SceneService",A=s$1.getLogger(R),N=i$1=>{let N=class extends i$1{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=x((async(e,t,r)=>{switch(e){case L.SAVE:return this._save(t);case L.SAVE_AS:return this._saveAs(r,t)}}));}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return k.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,i=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=i?new k(i):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const i=null==e.spatialReference?{...e,spatialReference:this._readSpatialReference(t)}:e;return w$1.fromJSON(i,r)}const i=t.store,o=this._readSpatialReference(t);return null==o||null==i||null==i.extent||!Array.isArray(i.extent)||i.extent.some((e=>e<E))?null:new w$1({xmin:i.extent[0],ymin:i.extent[1],xmax:i.extent[2],ymax:i.extent[3],spatialReference:o})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,i=null!=r.version?r.version.toString():"";return this.parseVersionString(i)}readTitlePortalItem(e){return "item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return y(this.url,t.name);let i=t.name;if(!i&&this.url){const e=m(this.url);r$1(e)&&(i=e.title);}return "item-title-and-service-name"===this.sublayerTitleMode&&r&&(i=r+" - "+i),h(i)}set url(e){const t=L$1({layer:this,url:e,nonStandardUrlAllowed:!1,logger:A});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId);}writeUrl(e,t,r,i){b$1(this,e,"layers",t,i);}get parsedUrl(){const e=this._get("url");if(!e)return null;const t=j(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=n$2(this.parsedUrl.path,this.rootNode,e,this.apiKey,A,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo);}_updateExtent(e){if("page"===e?.type){const t=e.rootIndex%e.pageSize,i=e.rootPage?.nodes?.[t];if(null==i||null==i.obb||null==i.obb.center||null==i.obb.halfSize)throw new s("sceneservice:invalid-node-page","Invalid node page.");if(i.obb.center[0]<E||null==this.fullExtent||this.fullExtent.hasZ)return;const o=i.obb.halfSize,s$1=i.obb.center[2],a=Math.sqrt(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]);this.fullExtent.zmin=s$1-a,this.fullExtent.zmax=s$1+a;}else if("node"===e?.type){const t=e.rootNode?.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<E)return;const r=t[2],i=t[3];this.fullExtent.zmin=r-i,this.fullExtent.zmax=r+i;}}async _fetchService(e){if(null==this.url)throw new s("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t);}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const r=await L$2(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(r.data&&Array.isArray(r.data.layers)&&r.data.layers.length>0)return r.data.layers[0].id}async _fetchServiceLayer(e){const r=await L$2(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});r.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let i=!1;if(r.data.layerType&&"Voxel"===r.data.layerType&&(i=!0),i)return this._fetchVoxelServiceLayer();const o=r.data;this.read(o,{origin:"service",url:this.parsedUrl}),this.validateLayer(o);}async _fetchVoxelServiceLayer(e){const r=(await L$2(this.parsedUrl.path+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r);}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave();}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const i=t.getTypeKeywords();for(const o of i)e.typeKeywords.push(o);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===T.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))));}async _saveAs(e,t){const i$1={...K,...t};let o=b$2.from(e);o||(A.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new s("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),o.id&&(o=o.clone(),o.id=null);const s$1=o.portal||B.getDefault();await this._ensureLoadBeforeSave(),o.type=O,o.portal=s$1;const a$1={origin:"portal-item",url:null,messages:[],portal:s$1,portalItem:o,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},n={layers:[this.write({},a$1)]};return await Promise.all(a$1.resources.pendingOperations),await this._validateAgainstJSONSchema(n,a$1,i$1),o.url=this.url,o.title||(o.title=this.title),this._updateTypeKeywords(o,i$1,T.newItem),await s$1._signIn(),await s$1.user.addItem({item:o,folder:i$1&&i$1.folder,data:n}),await a(this.resourceReferences,a$1,null),this.portalItem=o,i(a$1),a$1.portalItem=o,o}async _save(e){const t={...K,...e};this.portalItem||(A.error("_save(): requires the .portalItem property to be set"),await Promise.reject(new s("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==O&&(A.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+O),await Promise.reject(new s("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${O}"`))),await this._ensureLoadBeforeSave();const i$1={origin:"portal-item",url:this.portalItem.itemUrl&&j(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||B.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write({},i$1)]};return await Promise.all(i$1.resources.pendingOperations),await this._validateAgainstJSONSchema(o,i$1,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,T.existingItem),await this.portalItem.update({data:o}),await a(this.resourceReferences,i$1,null),i(i$1),this.portalItem}async _validateAgainstJSONSchema(e,t,i){let o=t.messages.filter((e=>"error"===e.type)).map((e=>new s(e.name,e.message,e.details)));if(i&&i.validationOptions.ignoreUnsupported&&(o=o.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name))),i.validationOptions.enabled||U){const t=(await import('./schemaValidator-518edab2.js')).validate(e,i.portalItemLayerType);if(t.length>0){const e=`Layer item did not validate:\n${t.join("\n")}`;if(A.error(`_validateAgainstJSONSchema(): ${e}`),"throw"===i.validationOptions.failPolicy){const e=t.map((e=>new s("sceneservice:schema-validation",e))).concat(o);throw new s("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(o.length>0)throw new s("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:o})}};return e([d(v)],N.prototype,"id",void 0),e([d({type:k})],N.prototype,"spatialReference",void 0),e([o("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],N.prototype,"readSpatialReference",null),e([d({type:w$1})],N.prototype,"fullExtent",void 0),e([o("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],N.prototype,"readFullExtent",null),e([d({readOnly:!0,type:v$1})],N.prototype,"heightModelInfo",void 0),e([d({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],N.prototype,"minScale",void 0),e([d({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],N.prototype,"maxScale",void 0),e([d({readOnly:!0})],N.prototype,"version",void 0),e([o("version",["store.version"])],N.prototype,"readVersion",null),e([d({type:String,json:{read:{source:"copyrightText"}}})],N.prototype,"copyright",void 0),e([d({type:String,json:{read:!1}})],N.prototype,"sublayerTitleMode",void 0),e([d({type:String})],N.prototype,"title",void 0),e([o("portal-item","title")],N.prototype,"readTitlePortalItem",null),e([o("service","title",["name"])],N.prototype,"readTitleService",null),e([d({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],N.prototype,"layerId",void 0),e([d(f$1)],N.prototype,"url",null),e([r("url")],N.prototype,"writeUrl",null),e([d()],N.prototype,"parsedUrl",null),e([d({readOnly:!0})],N.prototype,"store",void 0),e([d({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],N.prototype,"rootNode",void 0),N=e([n$1(R)],N),N},E=-1e38,U=!1;var T;!function(e){e[e.existingItem=0]="existingItem",e[e.newItem=1]="newItem";}(T||(T={}));const O="Scene Service",K={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var L;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS";}(L||(L={}));

export { L, N };