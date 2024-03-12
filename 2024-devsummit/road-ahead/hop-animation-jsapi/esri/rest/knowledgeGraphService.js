// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../geometry ../kernel ../request ../core/Error ../core/Logger ./knowledgeGraph/GraphQueryResult ./knowledgeGraph/GraphQueryStreamingResult ./knowledgeGraph/KnowledgeGraph ./knowledgeGraph/ServiceDefinition ./knowledgeGraph/wasmInterface/knowledgeWasmAccess ./knowledgeGraph/wasmInterface/queryToWasmEncodedFactories ./knowledgeGraph/wasmInterface/updateToWasmEncodedFactories ./knowledgeGraph/wasmInterface/wasmToDataModelFactories ./knowledgeGraph/wasmInterface/wasmToQueryResponseObjFactories ./knowledgeGraph/wasmInterface/wasmToUpdateResponseFactories ../geometry/Geometry".split(" "),
function(l,S,G,r,f,H,B,C,I,J,n,p,t,K,L,M,N){async function u(a){return m.refreshDataModel(a)}async function D(a){return m.refreshServiceDefinition(a)}async function x(a,c){return m._fetchWrapper(a,c)}async function y(a){G.id?.findCredential(a.url)||(a.dataModel?await E(a):await u(a))}function v(a,c,b){if(0!==a.error_code)throw new f(c,b,{errorCode:a.error_code,errorMessage:a.error_message});}async function O(a,c){c.dataModel||await u(c);if(!c.dataModel)throw new f("knowledge-graph:data-model-undefined",
"Encoding could not proceed because a data model was not provided and it could not be determined from the service");const b=await n.getWasmInterface();c=!!a.options?.cascadeDelete;const d=new b.GraphApplyEditsEncoder(b.SpatialReferenceUtil.WGS84(),a.options?.inputQuantizationParameters?t.inputQuantizationParemetersToWasmFormat(a.options?.inputQuantizationParameters):b.InputQuantizationUtil.WGS84_lossless());d.deleteLater();d.cascade_delete=c;try{let g;a.entityAdds?.forEach(e=>{g=d.add_entity(t.namedObjectToWasm(e,
b));v(g,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - an entity failed to be added to the encoder")});a.relationshipAdds?.forEach(e=>{if(!e.originId||!e.destinationId)throw new f("knowledge-graph:relationship-origin-destination-missing","When adding a new relationship, you must provide both an origin and destination id on the appropriate class property");g=d.add_relationship(t.namedObjectToWasm(e,b));v(g,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - a relationship failed to be added to the encoder")});
a.entityUpdates?.forEach(e=>{if(!e.id)throw new f("knowledge-graph:entity-id-missing","When updating an entity or relationship, you must specify the id on the class level property");g=d.update_entity(t.namedObjectToWasm(e,b));v(g,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - an entity failed to be added to the encoder")});a.relationshipUpdates?.forEach(e=>{if(!e.id)throw new f("knowledge-graph:relationship-id-missing","When updating an entity or relationship, you must specify the id on the class level property");
g=d.update_relationship(t.namedObjectToWasm(e,b));v(g,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - a relationship failed to be added to the encoder")});a.entityDeletes?.forEach(e=>{if(!e.typeName)throw new f("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits - delete");const h=d.make_delete_helper(e.typeName,!0);h.deleteLater();e.ids?.forEach(k=>{h.delete_by_id(k)})});a.relationshipDeletes?.forEach(e=>{if(!e.typeName)throw new f("knowledge-graph:no-type-name",
"You must indicate the entity/relationship named object type to apply edits - delete");const h=d.make_delete_helper(e.typeName,!1);e.ids?.forEach(k=>{h.delete_by_id(k)})});d.encode()}catch(g){throw new f("knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits failed",{error:g});}a=d.get_encoding_result();v(a.error,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits failed");return structuredClone(a.get_byte_buffer())}async function P(a,c){const b=
await n.getWasmInterface(),d=new b.GraphQueryRequestEncoder;d.deleteLater();d.output_spatial_reference=b.SpatialReferenceUtil.WGS84();d.open_cypher_query=a.openCypherQuery;if(a.bindParameters)for(const [w,q]of Object.entries(a.bindParameters)){var g=w,e=q,h=d,k=b;null===e||void 0===e?h.set_param_key_value(g,""):"object"!==typeof e?h.set_param_key_value(g,e):e instanceof Date?h.set_param_key_value(g,e):e instanceof N?h.set_param_key_value(g,p.geometryToWasm(e,k)):e instanceof Array?h.set_param_key_value(g,
p.bindParamArrayToWasm(e,k)):h.set_param_key_value(g,p.bindParamObjectToWasm(e,k))}if(a.bindGeometryQuantizationParameters)p.setInputQuantizationParametersOnEncoder(a.bindGeometryQuantizationParameters,d);else if(c.dataModel||await u(c),4326===c.dataModel?.spatialReference?.wkid)d.input_quantization_parameters=b.InputQuantizationUtil.WGS84_lossless();else throw new f("knowledge-graph:SR-quantization-mismatch","If the DataModel indicates a coordinate system other than WGS84, inputQuantizationParameters must be provided to the query encoder");
a.outputQuantizationParameters&&p.setOutputQuantizationParametersOnEncoder(a.outputQuantizationParameters,d,b);try{d.encode()}catch(w){throw new f("knowledge-graph:query-encoding-failed","Attempting to encode the query failed",{error:w});}a=d.get_encoding_result();if(0!==a.error.error_code)throw new f("knowledge-graph:query-encoding-failed","Attempting to encode the query failed",{errorCode:a.error.error_code,errorMessage:a.error.error_message});return structuredClone(a.get_byte_buffer())}async function Q(a){const c=
await n.getWasmInterface(),b=new c.GraphSearchRequestEncoder;b.deleteLater();b.search_query=a.searchQuery;b.type_category_filter=c.esriNamedTypeCategory[a.typeCategoryFilter];!0===a.returnSearchContext&&(b.return_search_context=a.returnSearchContext);null!=a.start&&0<a.start&&(b.start_index=a.start);null!=a.num&&(b.max_num_results=a.num);if(null!=a.idsFilter&&Array.isArray(a.idsFilter)&&0<a.idsFilter.length)try{b.set_ids_filter(p.bindParamArrayToWasm(a.idsFilter,c))}catch(d){throw new f("knowledge-graph:ids-format-error",
"Attempting to set ids filter failed.  This is usually caused by an incorrectly formatted UUID string",{error:d});}a.namedTypesFilter?.forEach(d=>{b.add_named_type_filter(d)});try{b.encode()}catch(d){throw new f("knowledge-graph:search-encoding-failed","Attempting to encode the search failed",{error:d});}a=b.get_encoding_result();if(0!==a.error.error_code)throw new f("knowledge-graph:search-encoding-failed","Attempting to get encoding result from the query failed",{errorCode:a.error.error_code,errorMessage:a.error.error_message});
return structuredClone(a.get_byte_buffer())}async function z(a,c){return r(a,{responseType:"native-request-init",method:"post",query:{f:"pbf",...c?.query},body:"x",headers:{"Content-Type":"application/octet-stream"},signal:c?.signal,timeout:c?.timeout})}async function R(a){var c=a.headers.get("content-type");if(c?.includes("application/x-protobuf"))return a=await a.arrayBuffer(),c=new ((await n.getWasmInterface()).GraphApplyEditsDecoder),c.deleteLater(),c.decode(new Uint8Array(a)),M.decoderToApplyEditsResponse(c);
throw new f("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:c,data:a.text()});}function A(a,c,b){a.push_buffer(new Uint8Array(c));c=[];let d=0;for(;a.next_row();){d||=a.get_header_keys().size();const g=Array(d);for(let e=0;e<d;e++){const h=a.get_value(e);g[e]=L.decodedWasmObjToQueryResponseObj(h,b)}c.push(g)}if(a.has_error())throw new f("knowledge-graph:stream-decoding-error","One or more result rows were not successfully decoded",{errorCode:a.error.error_code,
errorMessage:a.error.error_message});return c}async function F(a,c){const b=a.headers.get("content-type");a.headers.get("content-length")&&H.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").warnOnce("Found `Content-Length` header when expecting a streaming HTTP response! Please investigate whether all intermediate HTTP proxies and/or load balancers are configured such that they don't forcefully buffer the entire response before returning it to the client. A valid HTTP streaming response should use Chunked Transfer Encoding and not have a Content Length defined.");
if(b?.includes("application/x-protobuf")){const d=a.body?.getReader(),g=new ((await n.getWasmInterface()).GraphQueryDecoder);g.deleteLater();return new ReadableStream({async start(e){function h(){return d?.read().then(({done:k,value:w})=>{if(k){let q;g.has_error()&&(q=new f("knowledge-graph:stream-decoding-error","One or more result rows were not successfully decoded",{errorCode:g.error.error_code,errorMessage:g.error.error_message}));d.releaseLock();if(q)throw e.error(q),q;e.close()}else return k=
A(g,w,c),0<k.length&&e.enqueue(k),h()})}try{return h()}catch(k){d?.releaseLock(),e.error(new f("knowledge-graph:stream-decoding-error","The server returned a valid response, but there was an error decoding the response stream",{error:k})),e.close()}}})}throw new f("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:b,data:a.text()});}async function E(a){a=await r(`${a.url}/dataModel/queryDataModel`,{responseType:"array-buffer",query:{f:"pbf"}});const c=
a.getHeader?.("content-type"),b=a.data;if(c?.includes("application/x-protobuf")){a=(await n.getWasmInterface()).decode_data_model_from_protocol_buffer(new Uint8Array(b));if(!a)throw new f("knowledge-graph:data-model-decode-failure","The server responded to the data model query, but the response failed to be decoded.  This typically occurs when the Knowledge JS API (4.26 or later) is used with an unsupported backend (11.0 or earlier)");return K.wasmToDataModel(a)}throw new f("knowledge-graph:unexpected-server-response",
"server returned an unexpected response",{responseType:c,data:a.data});}const m={fetchKnowledgeGraph:async a=>{a=new I({url:a});const c=[];c.push(u(a));c.push(D(a));await Promise.all(c);return a},refreshDataModel:async a=>{a.dataModel=await E(a)},refreshServiceDefinition:async a=>{const c=(await r(a.url,{query:{f:"json"}})).data;c.capabilities=c?.capabilities?.split(",");c.supportedQueryFormats=c?.supportedQueryFormats?.split(",");a.serviceDefinition=new J(c);return a.serviceDefinition},executeQueryStreaming:async(a,
c,b)=>{const d=`${a.url}/graph/query`;await y(a);b=await z(d,b);b.data.body=await P(c,a);c=await x(b.data.url,b.data);if(a.dataModel)return new C({resultRowsStream:await F(c,a.dataModel)});throw new f("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model");},executeApplyEdits:async(a,c,b)=>{if(a.serviceDefinition?.dataEditingNotSupported)throw new f("knowledge-graph:data-editing-not-supported","The Knowledge Graph Service definition indicated that data editing is not supported");
const d=`${a.url}/graph/applyEdits`;await y(a);b=await z(d,b);b.data.body=await O(c,a);a=await x(b.data.url,b.data);return R(a)},executeQuery:async(a,c,b)=>{b=await r(`${a.url}/graph/query`,{responseType:"array-buffer",query:{f:"pbf",openCypherQuery:c.openCypherQuery,...b?.query},signal:b?.signal,timeout:b?.timeout});const d=b.getHeader?.("content-type");c=b.data;if(d?.includes("application/x-protobuf")){b=new ((await n.getWasmInterface()).GraphQueryDecoder);b.deleteLater();if(a.dataModel)return new B({resultRows:A(b,
c,a.dataModel)});throw new f("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model");}throw new f("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:d,data:b.data});},executeSearch:async(a,c,b)=>{b=await r(`${a.url}/graph/search`,{responseType:"array-buffer",query:{f:"pbf",searchQuery:`"${c.searchQuery}"`,typeCategoryFilter:c.typeCategoryFilter,...b?.query},signal:b?.signal,timeout:b?.timeout});const d=b.getHeader?.("content-type");
c=b.data;if(d?.includes("application/x-protobuf")){b=new ((await n.getWasmInterface()).GraphQueryDecoder);b.deleteLater();if(a.dataModel)return new B({resultRows:A(b,c,a.dataModel)});throw new f("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model");}throw new f("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:d,data:b.data});},executeSearchStreaming:async(a,c,b)=>{const d=`${a.url}/graph/search`;await y(a);
b=await z(d,b);b.data.body=await Q(c);c=await x(b.data.url,b.data);if(a.dataModel)return new C({resultRowsStream:await F(c,a.dataModel)});throw new f("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model");},_fetchWrapper:async(a,c)=>fetch(a,c)};l._fetchWrapper=x;l.executeApplyEdits=async function(a,c,b){return m.executeApplyEdits(a,c,b)};l.executeQuery=async function(a,c,b){return m.executeQuery(a,c,b)};l.executeQueryStreaming=async function(a,c,b){return m.executeQueryStreaming(a,
c,b)};l.executeSearch=async function(a,c,b){return m.executeSearch(a,c,b)};l.executeSearchStreaming=async function(a,c,b){return m.executeSearchStreaming(a,c,b)};l.fetchKnowledgeGraph=async function(a){return m.fetchKnowledgeGraph(a)};l.kgRestServices=m;l.refreshDataModel=u;l.refreshServiceDefinition=D;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});