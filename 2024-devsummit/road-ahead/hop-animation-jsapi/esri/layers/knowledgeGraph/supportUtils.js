// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../request ../../core/Error ../graphics/featureConversionUtils ../graphics/OptimizedGeometry ../../rest/knowledgeGraphService ../../rest/knowledgeGraph/GraphQueryStreaming ../../rest/knowledgeGraph/ProtoFeatureCollection ../../rest/knowledgeGraph/wasmInterface/knowledgeWasmAccess ../../rest/knowledgeGraph/wasmInterface/WasmDataModelWrapperInterfaces ../../rest/knowledgeGraph/wasmInterface/WasmSerializedLayerData ../../rest/knowledgeGraph/wasmInterface/wasmToFeatureFactories".split(" "),
function(n,B,r,M,N,C,D,p,u,E,v,O){async function F(a){var b=await u.getWasmInterface();const d=new b.MapOfObjectIdentifierSets;for(const [c,f]of a.namedTypeDefinitions){if(!f.members||f.useAllData)continue;a=f.members.keys();const e=new b.GlobalIdArray,l=new b.ObjectIdentifierSet;for(const g of a)e.add_globalid(g);l.set_globalid_array(e);e.delete();d.put_identifier_set(c,l);l.delete()}b=new b.MapOfObjectIdentifierSetsEncoder;try{b.set_map_of_identifier_sets(d);b.encode();const c=b.get_encoding_result();
if(0!==c.error.error_code)throw new r("knowledge-graph:layer-support-utils",c.error.error_message);const f=structuredClone(c.get_byte_buffer());b.delete();return f}finally{d.delete()}}function G(a,b,d,c,f,e){a.version="";const l=new b.QueryResult,g=new b.FeatureResult,k="entities"===c?p.ProtoOutboundEntityFeatureCollectionAttributionIndexes:p.ProtoOutboundRelationshipFeatureCollectionAttributionIndexes;g.unique_id_field={name:k[k.ELEMENTUID],isSystemMaintained:!1};g.globalid_field_name=k[k.ELEMENTUID];
g.geohash_field_name="";g.geometry_properties={shapeAreaFieldName:"",shapeLengthFieldName:"",units:""};g.spatial_reference={wkid:4326,latestWkid:4326,vcsWkid:0,latestVcsWkid:0,wkt:""};g.exceeded_transfer_limit=!1;g.has_z=!1;g.has_m=!1;g.transform={quantizeOriginPosition:{value:v.WasmQuantizeOriginPositionTypeCode.upperLeft},scale:{xScale:1E-9,yScale:1E-9,mScale:1E-4,zScale:1E-4},translate:{xTranslate:-400,yTranslate:-400,mTranslate:-1E5,zTranslate:-1E5}};for(var m of Object.keys(k).filter(h=>isNaN(Number(h)))){const h=
new b.Field;h.name=m;h.alias=m;h.sql_type={value:v.SqlTypeCode.sqlTypeBigInt};if("entities"===c)switch(m){case k[k.ELEMENTUID]:case k[k.TYPENAME]:h.field_type={value:E.EsriFieldTypes.esriFieldTypeString}}else switch(m){case k[k.ELEMENTUID]:case k[k.TYPENAME]:case p.ProtoOutboundRelationshipFeatureCollectionAttributionIndexes[p.ProtoOutboundRelationshipFeatureCollectionAttributionIndexes.FROMUID]:case p.ProtoOutboundRelationshipFeatureCollectionAttributionIndexes[p.ProtoOutboundRelationshipFeatureCollectionAttributionIndexes.TOUID]:h.field_type=
{value:E.EsriFieldTypes.esriFieldTypeString}}h.domain="";g.add_field(h);h.delete()}m=new Map;for(const h of f.dataModel.entityTypes)m.set(h.name,"entities");for(const h of f.dataModel.relationshipTypes)m.set(h.name,"relationships");for(const [h,w]of d.namedTypeDefinitions)if(c===m.get(h))for(const q of w.members.values()){d=new b.Feature;for(const H of Object.keys(k).filter(P=>isNaN(Number(P))))if("entities"===c)switch(H){case k[k.ELEMENTUID]:d.add_attribute(q.id,b.esriFieldType.esriFieldTypeString);
break;case k[k.TYPENAME]:d.add_attribute(h,b.esriFieldType.esriFieldTypeString)}else switch(H){case k[k.ELEMENTUID]:d.add_attribute(q.id,b.esriFieldType.esriFieldTypeString);break;case p.ProtoOutboundRelationshipFeatureCollectionAttributionIndexes[p.ProtoOutboundRelationshipFeatureCollectionAttributionIndexes.FROMUID]:d.add_attribute(e.has(q.id)?e.get(q.id)[0]:"",b.esriFieldType.esriFieldTypeString);break;case p.ProtoOutboundRelationshipFeatureCollectionAttributionIndexes[p.ProtoOutboundRelationshipFeatureCollectionAttributionIndexes.TOUID]:d.add_attribute(e.has(q.id)?
e.get(q.id)[1]:"",b.esriFieldType.esriFieldTypeString);break;case k[k.TYPENAME]:d.add_attribute(h,b.esriFieldType.esriFieldTypeString)}let t;q.linkChartLocation&&"x"in q.linkChartLocation?t=M.convertFromGeometry(q.linkChartLocation):q.linkChartLocation&&(t=q.linkChartLocation);if(q.linkChartLocation&&t){f=new b.FeatureCollectionGeometry;switch(c){case "entities":f.geometry_type=b.esriGeometryType.esriGeometryPoint;break;case "relationships":f.geometry_type=b.esriGeometryType.esriGeometryPolyline}f.coords=
new Float64Array(t.coords);f.lengths=new Uint32Array(t.lengths);d.set_compressed_geometry(f);f.delete()}g.add_feature(d);d.delete()}switch(c){case "entities":g.geometry_type=b.esriGeometryType.esriGeometryPoint;break;case "relationships":g.geometry_type=b.esriGeometryType.esriGeometryPolyline}l.set_feature_result(g);a.set_query_result(l);g.delete();l.delete();return a}async function x(a){a=await (await B(a,{responseType:"array-buffer"})).data;return I(a)}async function I(a){const b=new ((await u.getWasmInterface()).FeatureCollectionDecoder);
a=b.decode(new Uint8Array(a));if(0!==a.error_code)throw new r("knowledge-graph:layer-support-utils",a.error_message);a=b.get_feature_collection();a=O.wasmToProtoFeatureCollection(a);b.delete();return a}async function y(a){a=await (await B(a,{responseType:"array-buffer"})).data;return J(new Uint8Array(a))}async function J(a){const b=new ((await u.getWasmInterface()).MapOfObjectIdentifierSetsDecoder);var d=b.decode(new Uint8Array(a));a=new Map;if(0!==d.error_code)throw new r("knowledge-graph:layer-support-utils",
d.error_message);d=b.get_map_of_identifier_sets();const c=d.keys,f=c.size();for(let k=0;k<f;k++){const m=c.get(k);var e=d.query_identifier_set(m);const h=[];if(e.id_array_type.value===v.IdArrayType.GLOBALID_ARRAY){e=e.get_globalid_array();var l=e.count();for(var g=0;g<l;g++)h.push(e.get_globalid_at(g))}else if(e.id_array_type.value===v.IdArrayType.IDENTIFIER_ARRAY)for(e=e.get_identifier_array(),l=e.count(),g=0;g<l;g++)h.push(e.get_identifier_at(g).toString());else throw new r("knowledge-graph:layer-support-utils",
"Tried to encode an unexpected ID Array type.");a.set(m,h)}b.delete();return a}function z(a,b,d){if(!a?.queryResult?.featureResult)return b;for(const c of a.queryResult.featureResult.features){a=K(b.namedTypeDefinitions,c.attributes["entities"===d?p.ProtoInboundEntityFeatureCollectionAttributionIndexes.TYPENAME:p.ProtoInboundRelationshipFeatureCollectionAttributionIndexes.TYPENAME],()=>({useAllData:!1,members:new Map}));const f=c.attributes["entities"===d?p.ProtoInboundEntityFeatureCollectionAttributionIndexes.ELEMENTUID:
p.ProtoInboundRelationshipFeatureCollectionAttributionIndexes.ELEMENTUID];c.compressedGeometry.coords&&0<c.compressedGeometry.coords.length?a.members.set(f,{id:f,linkChartLocation:new N(c.compressedGeometry.lengths,c.compressedGeometry.coords)}):a.members.set(f,{id:f})}return b}function A(a,b){for(const [d,c]of a){a=K(b.namedTypeDefinitions,d,()=>({useAllData:!1,members:new Map}));for(const f of c)a.members.has(f)||a.members.set(f,{id:f})}return b}const K=(a,b,d)=>{a.has(b)||a.set(b,d());return a.get(b)},
L=(a,b)=>{b.set_feature_collection(a);b.encode();a=b.get_encoding_result();if(0!==a.error.error_code)throw new r("knowledge-graph:layer-support-utils",a.error.error_message);return a.get_byte_buffer()};n.addFeatureCollectionToInclusionDefinition=z;n.addIdMapToInclusionDefinition=A;n.deserializeFeatureCollection=I;n.deserializeIdCollectionMap=J;n.extentToInBoundsRings=function(a){if(!a.spatialReference.isWGS84)throw new r("knowledge-graph:layer-support-utils","The extentToInBoundsRings function only supports WGS84 spatial references.");
return 180<a.xmax&&180>a.xmin?[[[a.xmin,a.ymin],[a.xmin,a.ymax],[180,a.ymax],[180,a.ymin],[a.xmin,a.ymin]],[[-180,a.ymin],[-180,a.ymax],[a.xmax-360,a.ymax],[a.xmax-360,a.ymin],[-180,a.ymin]]]:180<a.xmax&&180<a.xmin?[[[a.xmin-360,a.ymin],[a.xmin-360,a.ymax],[a.xmax-360,a.ymax],[a.xmax-360,a.ymin],[a.xmin-360,a.ymin]]]:-180<a.xmax&&-180>a.xmin?[[[a.xmin+360,a.ymin],[a.xmin+360,a.ymax],[180,a.ymax],[180,a.ymin],[a.xmin+360,a.ymin]],[[-180,a.ymin],[-180,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[-180,a.ymin]]]:
-180>a.xmax&&-180>a.xmin?[[[a.xmin+360,a.ymin],[a.xmin+360,a.ymax],[a.xmax+360,a.ymax],[a.xmax+360,a.ymin],[a.xmin+360,a.ymin]]]:[[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]]]};n.fetchAndConvertSerializedKgIdMap=async function(a){const b={generateAllSublayers:!1,namedTypeDefinitions:new Map};await y(a).then(d=>{A(d,b)});return b};n.fetchAndConvertSerializedLinkChart=async function(a){const b=[],d={generateAllSublayers:!1,namedTypeDefinitions:new Map};a.entitiesUrl&&
b.push(x(a.entitiesUrl).then(c=>{z(c,d,"entities")}));a.relationshipsUrl&&b.push(x(a.relationshipsUrl).then(c=>{z(c,d,"relationships")}));a.idCollectionsUrl&&b.push(y(a.idCollectionsUrl).then(c=>{A(c,d)}));await Promise.all(b);return d};n.fetchAndDeserializeFeatureCollection=x;n.fetchAndDeserializeIdCollectionMap=y;n.getRelationshipEndNodeIds=async function(a,b){const d=[],c=new Map,f=[];if(b.dataModel?.relationshipTypes)for(const e of b.dataModel.relationshipTypes)e.name&&c.set(e.name,[]);for(const e of a)c.has(e.typeName)&&
c.get(e.typeName)?.push(e.id);for(const [e,l]of c)1>l.length||(a=new D({openCypherQuery:`MATCH (n)-[r:${e}]->(m) WHERE id(r) in $ids RETURN id(n), labels(n)[0], id(m), labels(m)[0]`,bindParameters:{ids:l}}),f.push(C.executeQueryStreaming(b,a).then(async g=>{for(g=g.resultRowsStream.getReader();;){const {done:k,value:m}=await g.read();if(k)break;for(const h of m)d.push({id:h[0],typeName:h[1]}),d.push({id:h[2],typeName:h[3]})}})));await Promise.all(f);return d};n.getRelationshipEndNodeMap=async function(a,
b){const d=new Map,c=new Map,f=[];if(b.dataModel?.relationshipTypes)for(const e of b.dataModel.relationshipTypes)e.name&&c.set(e.name,[]);for(const e of a)c.has(e.typeName)&&c.get(e.typeName)?.push(e.id);for(const [e,l]of c)1>l.length||(a=new D({openCypherQuery:`MATCH (n)-[r:${e}]->(m) WHERE id(r) in $ids RETURN id(r), id(n), id(m)`,bindParameters:{ids:l}}),f.push(C.executeQueryStreaming(b,a).then(async g=>{for(g=g.resultRowsStream.getReader();;){const {done:k,value:m}=await g.read();if(k)break;for(const h of m)d.set(h[0],
[h[1],h[2]])}})));await Promise.all(f);return d};n.serializeInclusionDefinitionToAllPbf=async function(a,b,d){const c=await u.getWasmInterface(),f=new c.FeatureCollection,e=new c.FeatureCollection;try{G(f,c,a,"entities",b,d);G(e,c,a,"relationships",b,d);const l=new c.FeatureCollectionEncoder,g=new c.FeatureCollectionEncoder,k=L(f,l),m=structuredClone(k),h=L(e,g),w=structuredClone(h),q={entitiesFC:m,relationshipsFC:w,idCollections:await F(a)};l.delete();g.delete();return q}finally{f.delete(),e.delete()}};
n.serializeInclusionDefinitionToIdCollectionsMapPbf=F;Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});