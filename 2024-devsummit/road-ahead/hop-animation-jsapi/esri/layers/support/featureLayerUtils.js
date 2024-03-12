// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("require exports ../../kernel ../../symbols ../../core/asyncUtils ../../core/Error ../../core/jsonMap ../../core/sql ../../core/accessorSupport/extensions/serializableProperty/reader ./featureQueryAll ./layerUtils ../../renderers/SimpleRenderer ../../renderers/UniqueValueRenderer ../../rest/support/AttachmentQuery ../../rest/support/Query ../../rest/support/RelationshipQuery".split(" "),function(w,g,m,A,B,h,q,C,D,E,F,G,H,I,n,x){function r(a,b,c){const {attributes:d}=b,{objectIdField:e}=a;return a.capabilities?.data?.supportsAttachment?
b?d?e&&d[e]?Promise.resolve():Promise.reject(new h(c,`feature is missing the identifying attribute ${e}`)):Promise.reject(new h(c,"'attributes' are required on a feature to query attachments")):Promise.reject(new h(c,"A feature is required to add/delete/update attachments")):Promise.reject(new h(c,"this layer doesn't support attachments"))}async function l(a){return(await a.load()).source}async function J(a,b){if(m.id&&!m.id.findCredential(a)){var c;try{const d=await F.getOwningPortalUrl(a,b);d&&
(c=await m.id.checkSignInStatus(`${d}/sharing`))}catch(d){}if(c)try{await m.id.getCredential(a,{signal:null!=b?b.signal:null})}catch(d){}}}async function y(a,b,c){if(null==b)return null;const d=[],{objectIdField:e}=a;b.forEach(f=>{let k=null;"attributes"in f?({attributes:f}=f,k={globalId:f[c],objectId:null!=f[e]&&-1!==f[e]?f[e]:null}):k={globalId:f.globalId,objectId:null!=f.objectId&&-1!==f.objectId?f.objectId:null};null!=k.globalId&&(null!=k.objectId&&-1!==k.objectId||d.push(k.globalId))});if(0===
d.length)return null;b=a.createQuery();b.where=d.map(f=>`${c}='${f}'`).join(" OR ");b.returnGeometry=!1;b.outFields=[e,c];b.cacheHint=!1;b=await B.resultOrAbort(E.queryAllJSON(a,b));if(!b.ok)return null;a=new Map;b=b.value.features;for(const f of b){b=f.attributes[c];const k=f.attributes[e];null!=b&&null!=k&&-1!==k&&a.set(b,k)}return a}q=new q.JSONMap({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"});
const t=D.createTypeReader({types:A.symbolTypesRenderer});g.addAttachment=async function(a,b,c,d){const e=await l(a);await r(a,b,d);if(!e.addAttachment)throw new h(d,"Layer source does not support addAttachment capability");return e.addAttachment(b,c)};g.applyEdits=async function(a,b,c){const {applyEdits:d}=await new Promise((u,v)=>w(["../graphics/editingSupport"],u,v)),e=await a.load(),{source:f,globalIdField:k}=e;let p=c;"feature"===e.type&&e.infoFor3D&&null!=b.deleteFeatures&&null!=k&&(p={...p,
globalIdToObjectId:await y(a,b.deleteFeatures,k)});return d(e,f,b,c)};g.computeEffectiveEditingEnabled=function(a){return a.sourceJSON?.isMultiServicesView?!1:a.userHasUpdateItemPrivileges||a.editingEnabled};g.createDefaultRenderer=function(a,b){if(a.defaultSymbol)return a.types?.length?new H({defaultSymbol:t(a.defaultSymbol,a,b),field:a.typeIdField,uniqueValueInfos:a.types.map(c=>({id:c.id,symbol:t(c.symbol,c,b)}))}):new G({symbol:t(a.defaultSymbol,a,b)})};g.createQuery=function(a){const b=new n,
c=a.capabilities?.data,d=a.capabilities?.query;b.historicMoment=a.historicMoment;b.gdbVersion=a.gdbVersion;b.returnGeometry=!0;d&&(b.compactGeometryEnabled=d.supportsCompactGeometry,b.defaultSpatialReferenceEnabled=d.supportsDefaultSpatialReference);c&&(c.supportsZ&&null!=a.returnZ&&(b.returnZ=a.returnZ),c.supportsM&&null!=a.returnM&&(b.returnM=a.returnM));b.outFields=["*"];const {timeOffset:e,timeExtent:f}=a;b.timeExtent=null!=e&&null!=f?f.offset(-e.value,e.unit):f||null;b.multipatchOption="multipatch"===
a.geometryType?"xyFootprint":null;return b};g.deleteAttachments=async function(a,b,c,d){const e=await l(a);await r(a,b,d);if(!e.deleteAttachments)throw new h(d,"Layer source does not support deleteAttachments capability");return e.deleteAttachments(b,c)};g.ensureLayerCredential=async function(a,b,c){const d=a.parsedUrl?.path;d&&a.authenticationTriggerEvent===b&&await J(d,c)};g.fetchRecomputedExtents=async function(a,b,c){a=(await a.load({signal:b?.signal})).source;if(!a.fetchRecomputedExtents)throw new h(c,
"Layer source does not support fetchUpdates capability");return a.fetchRecomputedExtents(b)};g.geometryTypeKebabDict=q;g.getGlobalIdToObjectIdMap=y;g.hasDataChanged=async function(a){const b=a.source;if(b?.refresh)try{const {dataChanged:c,updates:d}=await b.refresh();null!=d&&(a.sourceJSON={...a.sourceJSON,...d},a.read(d,{origin:"service",url:a.parsedUrl}));if(c)return!0}catch{}if(a.definitionExpression)try{return(await C.parseWhereClause(a.definitionExpression,a.fieldsIndex)).hasDateFunctions}catch{}return!1};
g.isLayerCacheStale=function(a){let b=a.sourceJSON?.cacheMaxAge;if(!b)return!1;a=a.editingInfo?.lastEditDate?.getTime();if(null==a)return!0;b*=1E3;return Date.now()-a<b};g.queryAttachments=async function(a,b,c,d){b=I.from(b);await a.load();c=a.source;a=a.capabilities;if(!a?.data?.supportsAttachment)throw new h(d,"this layer doesn't support attachments");const {attachmentTypes:e,objectIds:f,globalIds:k,num:p,size:u,start:v,where:z}=b;if(!a?.operations?.supportsQueryAttachments&&(0<e?.length||0<k?.length||
0<u?.length||p||v||z))throw new h(d,"when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",b);if(!(f?.length||k?.length||z))throw new h(d,"'objectIds', 'globalIds', or 'where' are required to perform attachment query",b);if(!c.queryAttachments)throw new h(d,"Layer source does not support queryAttachments capability",b);return c.queryAttachments(b)};g.queryExtent=async function(a,b,c,d){const e=await l(a);if(!e.queryExtent)throw new h(d,"Layer source does not support queryExtent capability");
return e.queryExtent(n.from(b)??a.createQuery(),c)};g.queryFeatureCount=async function(a,b,c,d){const e=await l(a);if(!e.queryFeatureCount)throw new h(d,"Layer source does not support queryFeatureCount capability");return e.queryFeatureCount(n.from(b)??a.createQuery(),c)};g.queryObjectIds=async function(a,b,c,d){const e=await l(a);if(!e.queryObjectIds)throw new h(d,"Layer source does not support queryObjectIds capability");return e.queryObjectIds(n.from(b)??a.createQuery(),c)};g.queryRelatedFeatures=
async function(a,b,c,d){a=await l(a);if(!a.queryRelatedFeatures)throw new h(d,"Layer source does not support queryRelatedFeatures capability");return a.queryRelatedFeatures(x.from(b),c)};g.queryRelatedFeaturesCount=async function(a,b,c,d){a=await l(a);if(!a.queryRelatedFeaturesCount)throw new h(d,"Layer source does not support queryRelatedFeaturesCount capability");return a.queryRelatedFeaturesCount(x.from(b),c)};g.readGlobalIdField=function(a){const {globalIdField:b,fields:c}=a;if(b)return b;if(c)for(const d of c)if("esriFieldTypeGlobalID"===
d.type)return d.name};g.readObjectIdField=function(a){const {objectIdField:b,fields:c}=a;if(b)return b;if(c)for(const d of c)if("esriFieldTypeOID"===d.type)return d.name};g.readVersion=function(a){return a.currentVersion?a.currentVersion:a.hasOwnProperty("capabilities")||a.hasOwnProperty("drawingInfo")||a.hasOwnProperty("hasAttachments")||a.hasOwnProperty("htmlPopupType")||a.hasOwnProperty("relationships")||a.hasOwnProperty("timeInfo")||a.hasOwnProperty("typeIdField")||a.hasOwnProperty("types")?10:
9.3};g.updateAttachment=async function(a,b,c,d,e){const f=await l(a);await r(a,b,e);if(!f.updateAttachment)throw new h(e,"Layer source does not support updateAttachment capability");return f.updateAttachment(b,c,d)};g.uploadAssets=async function(a,b,c){const {uploadAssets:d}=await new Promise((e,f)=>w(["../graphics/editingSupport"],e,f));a=await a.load();return d(a,a.source,b,c)};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});