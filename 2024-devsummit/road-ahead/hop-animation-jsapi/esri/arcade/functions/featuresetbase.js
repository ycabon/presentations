// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../ArcadeDate ../ArcadePortal ../Dictionary ../executionError ../Feature ../featureSetCollection ../featureSetUtils ../ImmutableArray ../../chunks/languageUtils ../portalUtils ../featureset/actions/Adapted ../featureset/actions/AttributeFilter ../featureset/actions/OrderBy ../featureset/actions/Top ../featureset/sources/Empty ../featureset/sources/FeatureLayerMemory ../featureset/support/OrderbyClause ../featureset/support/shared ../featureset/support/sqlUtils ./fieldStats ../../core/promiseUtils ../../core/sql/WhereClause ../../layers/FeatureLayer ../../layers/support/Field ../../portal/Portal".split(" "),
function(N,U,V,y,k,W,O,z,X,e,Y,t,P,Z,aa,ba,ca,da,H,Q,I,ea,u,J,D,R){async function K(h,c,d){const b=h.getVariables();if(0<b.length){const f=[];for(let a=0;a<b.length;a++)f.push(await c.evaluateIdentifier(d,{name:b[a]}));c={};for(d=0;d<b.length;d++)c[b[d]]=f[d];h.parameters=c}return h}function q(h,c,d=null){for(const b in h)if(b.toLowerCase()===c.toLowerCase())return h[b];return d}function S(h){if(null===h)return null;const c={type:q(h,"type",""),name:q(h,"name","")};if("range"===c.type)c.range=q(h,
"range",[]);else{c.codedValues=[];for(const d of q(h,"codedValues",[]))c.codedValues.push({name:q(d,"name",""),code:q(d,"code",null)})}return c}function L(h){if(null===h)return null;const c={},d=q(h,"wkt",null);null!==d&&(c.wkt=d);h=q(h,"wkid",null);null!==h&&(c.wkid=h);return c}function T(h){if(null===h)return null;const c={hasZ:q(h,"hasz",!1),hasM:q(h,"hasm",!1)};var d=q(h,"spatialreference",null);d&&(c.spatialReference=L(d));d=q(h,"x",null);if(null!==d)return c.x=d,c.y=q(h,"y",null),c;d=q(h,"rings",
null);if(null!==d)return c.rings=d,c;d=q(h,"paths",null);if(null!==d)return c.paths=d,c;d=q(h,"points",null);if(null!==d)return c.points=d,c;for(const b of"xmin xmax ymin ymax zmin zmax mmin mmax".split(" "))d=q(h,b,null),null!==d&&(c[b]=d);return c}function C(h){return"utc"===h?.toLowerCase()?"UTC":"unknown"===h?.toLowerCase()?"Unknown":h}N.registerFunctions=function(h){"async"===h.mode&&(h.functions.timezone=function(c,d){return h.standardFunctionAsync(c,d,async(b,f,a)=>{e.pcCheck(a,1,2,c,d);if(e.isTime(a[0])||
e.isDateOnly(a[0]))return"Unknown";if(e.isFeatureSet(a[0])){await a[0].load();if(1===a.length||null===a[1])return a[0].datesInUnknownTimezone?C("unknown"):C(a[0].dateFieldsTimeZone);if(!(a[1]instanceof y)||!1===a[1].hasField("type"))throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);b=a[1].field("type");if(!1===e.isString(b))throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);switch(e.toString(b).toLowerCase()){case "preferredtimezone":return C(a[0].preferredTimeZone);
case "editfieldsinfo":return C(a[0].editFieldsInfo?.timeZone??null);case "timeinfo":return C(a[0].timeInfo?.timeZone??null);case "field":if(a[1].hasField("fieldname")&&e.isString(a[1].field("fieldname")))return C(a[0].fieldTimeZone(e.toString(a[1].field("fieldname"))))}throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);}a=e.toDate(a[0],e.defaultTimeZone(c));if(null===a)return null;a=a.timeZone;return"system"===a?U.ArcadeDate.systemTimeZoneCanonicalName:"utc"===a.toLowerCase()?
"UTC":"unknown"===a.toLowerCase()?"Unknown":a})},h.functions.sqltimestamp=function(c,d){return h.standardFunctionAsync(c,d,async(b,f,a)=>{e.pcCheck(a,1,3,c,d);b=a[0];if(e.isDate(b)){if(1===a.length)return b.toSQLWithKeyword();if(2===a.length)return b.changeTimeZone(e.toString(a[1])).toSQLWithKeyword();throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);}if(e.isDateOnly(b))return b.toSQLWithKeyword();if(e.isFeatureSet(b)){if(3!==a.length)throw new k.ArcadeExecutionError(c,
k.ExecutionErrorCodes.InvalidParameter,d);await b.load();f=e.toString(a[1]);if(e.isDateOnly(a[2]))return a[2].toSQLWithKeyword();if(!1===e.isDate(a[2]))throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);b=b.fieldTimeZone(f);return null===b?a[2].toSQLWithKeyword():a[2].changeTimeZone(b).toSQLWithKeyword()}throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);})},h.signatures.push({name:"sqltimestamp",min:2,max:4}),h.functions.featuresetbyid=function(c,
d){return h.standardFunctionAsync(c,d,(b,f,a)=>{e.pcCheck(a,2,4,c,d);if(a[0]instanceof O){b=e.toString(a[1]);f=e.defaultUndefined(a[2],null);const m=e.toBoolean(e.defaultUndefined(a[3],!0));null===f&&(f=["*"]);if(!1===e.isArray(f))throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);return a[0].featureSetById(b,m,f)}throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);})},h.signatures.push({name:"featuresetbyid",min:2,max:4}),h.functions.getfeatureset=
function(c,d){return h.standardFunctionAsync(c,d,(b,f,a)=>{e.pcCheck(a,1,2,c,d);if(e.isFeature(a[0]))return b=e.defaultUndefined(a[1],"datasource"),null===b&&(b="datasource"),b=e.toString(b).toLowerCase(),z.convertToFeatureSet(a[0].fullSchema(),b,c.lrucache,c.interceptor,c.spatialReference);throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);})},h.signatures.push({name:"getfeatureset",min:1,max:2}),h.functions.featuresetbyportalitem=function(c,d){return h.standardFunctionAsync(c,
d,(b,f,a)=>{e.pcCheck(a,2,5,c,d);if(null===a[0])throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.PortalRequired,d);if(a[0]instanceof V){b=e.toString(a[1]);f=e.toString(a[2]);var m=e.defaultUndefined(a[3],null);const n=e.toBoolean(e.defaultUndefined(a[4],!0));null===m&&(m=["*"]);if(!1===e.isArray(m))throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);let g=null;g=c.services?.portal?c.services.portal:R.getDefault();g=Y.getPortal(a[0],g);return z.constructFeatureSetFromPortalItem(b,
f,c.spatialReference,m,n,g,c.lrucache,c.interceptor)}if(!1===e.isString(a[0]))throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.PortalRequired,d);b=e.toString(a[0]);f=e.toString(a[1]);m=e.defaultUndefined(a[2],null);a=e.toBoolean(e.defaultUndefined(a[3],!0));null===m&&(m=["*"]);if(!1===e.isArray(m))throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);return z.constructFeatureSetFromPortalItem(b,f,c.spatialReference,m,a,c.services?.portal??R.getDefault(),c.lrucache,c.interceptor)})},
h.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),h.functions.featuresetbyname=function(c,d){return h.standardFunctionAsync(c,d,(b,f,a)=>{e.pcCheck(a,2,4,c,d);if(a[0]instanceof O){b=e.toString(a[1]);f=e.defaultUndefined(a[2],null);const m=e.toBoolean(e.defaultUndefined(a[3],!0));null===f&&(f=["*"]);if(!1===e.isArray(f))throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);return a[0].featureSetByName(b,m,f)}throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,
d);})},h.signatures.push({name:"featuresetbyname",min:2,max:4}),h.functions.featureset=function(c,d){return h.standardFunction(c,d,(b,f,a)=>{e.pcCheck(a,1,1,c,d);f=a[0];b={layerDefinition:{geometryType:"",objectIdField:"",hasM:!1,hasZ:!1,globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(e.isString(f))f=JSON.parse(f),void 0!==f.layerDefinition?(b.layerDefinition=f.layerDefinition,b.featureSet=f.featureSet,f.layerDefinition.spatialReference&&(b.layerDefinition.spatialReference=
f.layerDefinition.spatialReference)):(b.featureSet.features=f.features,b.featureSet.geometryType=f.geometryType,b.layerDefinition.geometryType=b.featureSet.geometryType,b.layerDefinition.objectIdField=f.objectIdFieldName??"",b.layerDefinition.typeIdField=f.typeIdFieldName,b.layerDefinition.globalIdField=f.globalIdFieldName,b.layerDefinition.fields=f.fields,f.spatialReference&&(b.layerDefinition.spatialReference=f.spatialReference));else if(a[0]instanceof y)if(f=JSON.parse(a[0].castToText(!0)),a=q(f,
"layerdefinition"),null!==a){b.layerDefinition.geometryType=q(a,"geometrytype","");b.featureSet.geometryType=b.layerDefinition.geometryType;b.layerDefinition.globalIdField=q(a,"globalidfield","");b.layerDefinition.objectIdField=q(a,"objectidfield","");b.layerDefinition.typeIdField=q(a,"typeidfield","");b.layerDefinition.hasZ=!0===q(a,"hasz",!1);b.layerDefinition.hasM=!0===q(a,"hasm",!1);var m=q(a,"spatialreference",null);m&&(b.layerDefinition.spatialReference=L(m));for(const p of q(a,"fields",[]))m=
{name:q(p,"name",""),alias:q(p,"alias",""),type:q(p,"type",""),nullable:q(p,"nullable",!0),editable:q(p,"editable",!0),length:q(p,"length",null),domain:S(q(p,"domain"))},b.layerDefinition.fields.push(m);var n=q(f,"featureset",null);if(n){m={};for(const p of b.layerDefinition.fields)m[p.name.toLowerCase()]=p.name;for(var g of q(n,"features",[])){n={};f=q(g,"attributes",{});for(var l in f)n[m[l.toLowerCase()]]=f[l];b.featureSet.features.push({attributes:n,geometry:T(q(g,"geometry",null))})}}}else{b.layerDefinition.hasZ=
!0===q(f,"hasz",!1);b.layerDefinition.hasM=!0===q(f,"hasm",!1);b.layerDefinition.geometryType=q(f,"geometrytype","");b.featureSet.geometryType=b.layerDefinition.geometryType;b.layerDefinition.objectIdField=q(f,"objectidfieldname","");b.layerDefinition.typeIdField=q(f,"typeidfieldname","");if(g=q(f,"spatialreference",null))b.layerDefinition.spatialReference=L(g);g=q(f,"fields",null);if(e.isArray(g))for(const p of g)g={name:q(p,"name",""),alias:q(p,"alias",""),type:q(p,"type",""),nullable:q(p,"nullable",
!0),editable:q(p,"editable",!0),length:q(p,"length",null),domain:S(q(p,"domain"))},b.layerDefinition.fields.push(g);else b.layerDefinition.fields=null;g={};for(const p of b.layerDefinition.fields)g[p.name.toLowerCase()]=p.name;l=q(f,"features",null);if(e.isArray(l))for(m of l){l={};f=q(m,"attributes",{});for(n in f)l[g[n.toLowerCase()]]=f[n];b.featureSet.features.push({attributes:l,geometry:T(q(m,"geometry",null))})}else b.featureSet.features=null}else throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,
d);if(b.layerDefinition&&b.featureSet){b:{m=["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"];for(r of m)if(r===b.layerDefinition.geometryType){var r=!0;break b}r=!1}r=!1===r||!1===e.isArray(b.layerDefinition.fields)||!1===e.isArray(b.featureSet.features)?!1:!0}else r=!1;if(!1===r)throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);b.layerDefinition.geometryType||(b.layerDefinition.geometryType=
"esriGeometryNull");return ca.create(b,c.spatialReference)})},h.signatures.push({name:"featureset",min:1,max:1}),h.functions.filter=function(c,d){return h.standardFunctionAsync(c,d,async(b,f,a)=>{e.pcCheck(a,2,2,c,d);if(e.isArray(a[0])||e.isImmutableArray(a[0])){b=[];var m=a[0];m instanceof X&&(m=m.toArray());f=null;if(e.isFunctionParameter(a[1]))f=a[1].createFunction(c);else throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);for(var n of m)a=f(n),ea.isPromiseLike(a)?!0===
await a&&b.push(n):!0===a&&b.push(n);return b}if(e.isFeatureSet(a[0])){n=await a[0].load();n=u.WhereClause.create(a[1],n.getFieldsIndex(),n.dateFieldsTimeZoneDefaultUTC);b=n.getVariables();if(0<b.length){f=[];for(m=0;m<b.length;m++)f.push(await h.evaluateIdentifier(c,{name:b[m]}));m={};for(let g=0;g<b.length;g++)m[b[g]]=f[g];n.parameters=m}return new P({parentfeatureset:a[0],whereclause:n})}throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);})},h.signatures.push({name:"filter",
min:2,max:2}),h.functions.orderby=function(c,d){return h.standardFunctionAsync(c,d,async(b,f,a)=>{e.pcCheck(a,2,2,c,d);if(e.isFeatureSet(a[0]))return b=new da(a[1]),new Z({parentfeatureset:a[0],orderbyclause:b});throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);})},h.signatures.push({name:"orderby",min:2,max:2}),h.functions.top=function(c,d){return h.standardFunctionAsync(c,d,async(b,f,a)=>{e.pcCheck(a,2,2,c,d);if(e.isFeatureSet(a[0]))return new aa({parentfeatureset:a[0],
topnum:a[1]});if(e.isArray(a[0]))return e.toNumber(a[1])>=a[0].length?a[0].slice(0):a[0].slice(0,e.toNumber(a[1]));if(e.isImmutableArray(a[0]))return e.toNumber(a[1])>=a[0].length()?a[0].slice(0):a[0].slice(0,e.toNumber(a[1]));throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);})},h.signatures.push({name:"top",min:2,max:2}),h.functions.first=function(c,d){return h.standardFunctionAsync(c,d,async(b,f,a)=>{e.pcCheck(a,1,1,c,d);return e.isFeatureSet(a[0])?(b=await a[0].first(b.abortSignal),
null!==b?(a=W.createFromGraphicLikeObject(b.geometry,b.attributes,a[0],c.timeZone),a._underlyingGraphic=b,a):b):e.isArray(a[0])?0===a[0].length?null:a[0][0]:e.isImmutableArray(a[0])?0===a[0].length()?null:a[0].get(0):null})},h.signatures.push({name:"first",min:1,max:1}),h.functions.attachments=function(c,d){return h.standardFunctionAsync(c,d,async(b,f,a)=>{e.pcCheck(a,1,2,c,d);f=b=-1;var m=null,n=!1;if(1<a.length)if(a[1]instanceof y){if(a[1].hasField("minsize")&&(b=e.toNumber(a[1].field("minsize"))),
a[1].hasField("metadata")&&(n=e.toBoolean(a[1].field("metadata"))),a[1].hasField("maxsize")&&(f=e.toNumber(a[1].field("maxsize"))),a[1].hasField("types")){var g=e.toStringArray(a[1].field("types"),!1);0<g.length&&(m=g)}}else if(null!==a[1])throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);if(e.isFeature(a[0])){g=a[0]._layer;g instanceof J&&(g=z.constructFeatureSet(g,c.spatialReference,["*"],!0,c.lrucache,c.interceptor));if(null===g||!1===e.isFeatureSet(g))return[];await g.load();
return g.queryAttachments(a[0].field(g.objectIdField),b,f,m,n)}if(null===a[0])return[];throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);})},h.signatures.push({name:"attachments",min:1,max:2}),h.functions.featuresetbyrelationshipname=function(c,d){return h.standardFunctionAsync(c,d,async(b,f,a)=>{e.pcCheck(a,2,4,c,d);b=a[0];const m=e.toString(a[1]);f=e.defaultUndefined(a[2],null);var n=e.toBoolean(e.defaultUndefined(a[3],!0));null===f&&(f=["*"]);if(!1===e.isArray(f))throw new k.ArcadeExecutionError(c,
k.ExecutionErrorCodes.InvalidParameter,d);if(null===a[0])return null;if(!e.isFeature(a[0]))throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);a=b._layer;a instanceof J&&(a=z.constructFeatureSet(a,c.spatialReference,["*"],!0,c.lrucache,c.interceptor));if(null===a||!1===e.isFeatureSet(a))return null;a=await a.load();const g=a.relationshipMetaData().filter(r=>r.name===m);if(0===g.length)return null;if(void 0!==g[0].relationshipTableId&&null!==g[0].relationshipTableId&&-1<g[0].relationshipTableId)return z.constructFeatureSetFromRelationship(a,
g[0],b.field(a.objectIdField),a.spatialReference,f,n,c.lrucache,c.interceptor);let l=a.serviceUrl();if(!l)return null;l="/"===l.charAt(l.length-1)?l+g[0].relatedTableId.toString():l+"/"+g[0].relatedTableId.toString();f=await z.constructFeatureSetFromUrl(l,a.spatialReference,f,n,c.lrucache,c.interceptor);await f.load();n=f.relationshipMetaData();n=n.filter(r=>r.id===g[0].id);if(!1===b.hasField(g[0].keyField)||null===b.field(g[0].keyField))return(b=await a.getFeatureByObjectId(b.field(a.objectIdField),
[g[0].keyField]))?(a=u.WhereClause.create(n[0].keyField+"\x3d @id",f.getFieldsIndex(),f.dateFieldsTimeZoneDefaultUTC),a.parameters={id:b.attributes[g[0].keyField]},f.filter(a)):new ba({parentfeatureset:f});a=u.WhereClause.create(n[0].keyField+"\x3d @id",f.getFieldsIndex(),f.dateFieldsTimeZoneDefaultUTC);a.parameters={id:b.field(g[0].keyField)};return f.filter(a)})},h.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),h.functions.featuresetbyassociation=function(c,d){return h.standardFunctionAsync(c,
d,async(b,f,a)=>{e.pcCheck(a,2,3,c,d);var m=a[0],n=e.toString(e.defaultUndefined(a[1],"")).toLowerCase(),g=e.isString(a[2])?e.toString(a[2]):null;if(null===a[0])return null;if(!e.isFeature(a[0]))throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);var l=m._layer;l instanceof J&&(l=z.constructFeatureSet(l,c.spatialReference,["*"],!0,c.lrucache,c.interceptor));if(null===l||!1===e.isFeatureSet(l))return null;await l.load();a=l.serviceUrl();a=await z.constructAssociationMetaDataFeatureSetFromUrl(a,
c.spatialReference);let r=f=null;b=!1;if(null!==g&&""!==g&&void 0!==g){for(var p of a.terminals)p.terminalName===g&&(r=p.terminalId);null===r&&(b=!0)}var v=a.associations.getFieldsIndex();p=v.get("TOGLOBALID").name;g=v.get("FROMGLOBALID").name;const w=v.get("TOTERMINALID").name,M=v.get("FROMTERMINALID").name,E=v.get("FROMNETWORKSOURCEID").name,F=v.get("TONETWORKSOURCEID").name,B=v.get("ASSOCIATIONTYPE").name,fa=v.get("ISCONTENTVISIBLE").name,ha=v.get("OBJECTID").name;for(var G of l.fields)if("global-id"===
G.type){f=m.field(G.name);break}let A=null;G=new t.SqlExpressionAdapted(new D({name:"percentalong",alias:"percentalong",type:"double"}),u.WhereClause.create("0",a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC));m=new t.SqlExpressionAdapted(new D({name:"side",alias:"side",type:"string"}),u.WhereClause.create("''",a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC));l={};for(var x in a.lkp)l[x]=a.lkp[x].sourceId;x=new t.StringToCodeAdapted(new D({name:"classname",
alias:"classname",type:"string"}),null,l);l="";switch(n){case "midspan":l=`((${p}='${f}') OR ( ${g}='${f}')) AND (${B} IN (5))`;x.codefield=u.WhereClause.create(`CASE WHEN (${p}='${f}') THEN ${E} ELSE ${F} END`,a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC);n=H.cloneField(t.AdaptedFeatureSet.findField(a.associations.fields,g));n.name="globalid";n.alias="globalid";A=new t.SqlExpressionAdapted(n,u.WhereClause.create(`CASE WHEN (${g}='${f}') THEN ${p} ELSE ${g} END`,a.associations.getFieldsIndex(),
a.associations.dateFieldsTimeZoneDefaultUTC));G=4<=a.unVersion?new t.OriginalField(t.AdaptedFeatureSet.findField(a.associations.fields,v.get("PERCENTALONG").name)):new t.SqlExpressionAdapted(new D({name:"percentalong",alias:"percentalong",type:"double"}),u.WhereClause.create("0",a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC));break;case "junctionedge":l=`((${p}='${f}') OR ( ${g}='${f}')) AND (${B} IN (4,6))`;x.codefield=u.WhereClause.create(`CASE WHEN (${p}='${f}') THEN ${E} ELSE ${F} END`,
a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC);n=H.cloneField(t.AdaptedFeatureSet.findField(a.associations.fields,g));n.name="globalid";n.alias="globalid";A=new t.SqlExpressionAdapted(n,u.WhereClause.create(`CASE WHEN (${g}='${f}') THEN ${p} ELSE ${g} END`,a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC));m=new t.SqlExpressionAdapted(new D({name:"side",alias:"side",type:"string"}),u.WhereClause.create(`CASE WHEN (${B}=4) THEN 'from' ELSE 'to' END`,
a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC));break;case "connected":n=`${p}='@T'`;v=`${g}='@T'`;null!==r&&(n+=` AND ${w}=@A`,v+=` AND ${M}=@A`);l="(("+n+") OR ("+v+"))";l=e.multiReplace(l,"@T",f??"");n=e.multiReplace(n,"@T",f??"");null!==r&&(n=e.multiReplace(n,"@A",r.toString()),l=e.multiReplace(l,"@A",r.toString()));x.codefield=u.WhereClause.create("CASE WHEN "+n+` THEN ${E} ELSE ${F} END`,a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC);
f=H.cloneField(t.AdaptedFeatureSet.findField(a.associations.fields,g));f.name="globalid";f.alias="globalid";A=new t.SqlExpressionAdapted(f,u.WhereClause.create("CASE WHEN "+n+` THEN ${g} ELSE ${p} END`,a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC));break;case "container":l=`${p}='${f}' AND ${B} = 2`;null!==r&&(l+=` AND ${w} = `+r.toString());x.codefield=E;l="( "+l+" )";A=new t.FieldRename(t.AdaptedFeatureSet.findField(a.associations.fields,g),"globalid","globalid");
break;case "content":l=`(${g}='${f}' AND ${B} = 2)`;null!==r&&(l+=` AND ${M} = `+r.toString());x.codefield=F;l="( "+l+" )";A=new t.FieldRename(t.AdaptedFeatureSet.findField(a.associations.fields,p),"globalid","globalid");break;case "structure":l=`(${p}='${f}' AND ${B} = 3)`;null!==r&&(l+=` AND ${w} = `+r.toString());x.codefield=E;l="( "+l+" )";A=new t.FieldRename(t.AdaptedFeatureSet.findField(a.associations.fields,g),"globalid","globalId");break;case "attached":l=`(${g}='${f}' AND ${B} = 3)`;null!==
r&&(l+=` AND ${M} = `+r.toString());x.codefield=F;l="( "+l+" )";A=new t.FieldRename(t.AdaptedFeatureSet.findField(a.associations.fields,p),"globalid","globalId");break;default:throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);}b&&(l="1 \x3c\x3e 1");return new t.AdaptedFeatureSet({parentfeatureset:a.associations,adaptedFields:[new t.OriginalField(t.AdaptedFeatureSet.findField(a.associations.fields,ha)),new t.OriginalField(t.AdaptedFeatureSet.findField(a.associations.fields,
fa)),A,m,x,G],extraFilter:l?u.WhereClause.create(l,a.associations.getFieldsIndex(),a.associations.dateFieldsTimeZoneDefaultUTC):null})})},h.signatures.push({name:"featuresetbyassociation",min:2,max:6}),h.functions.groupby=function(c,d){return h.standardFunctionAsync(c,d,async(b,f,a)=>{e.pcCheck(a,3,3,c,d);if(!e.isFeatureSet(a[0]))throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);const m=await a[0].load();b=[];f=[];let n=!1;var g=[];if(e.isString(a[1]))g.push(a[1]);else if(a[1]instanceof
y)g.push(a[1]);else if(e.isArray(a[1]))g=a[1];else if(e.isImmutableArray(a[1]))g=a[1].toArray();else throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);for(var l of g)if(e.isString(l)){g=u.WhereClause.create(e.toString(l),m.getFieldsIndex(),m.dateFieldsTimeZoneDefaultUTC);var r=!0===Q.isSingleField(g)?e.toString(l):"%%%%FIELDNAME";b.push({name:r,expression:g});"%%%%FIELDNAME"===r&&(n=!0)}else if(l instanceof y){g=l.hasField("name")?l.field("name"):"%%%%FIELDNAME";r=l.hasField("expression")?
l.field("expression"):"";"%%%%FIELDNAME"===g&&(n=!0);if(!g)throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);b.push({name:g,expression:u.WhereClause.create(r||g,m.getFieldsIndex(),m.dateFieldsTimeZoneDefaultUTC)})}else throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);g=[];if(e.isString(a[2]))g.push(a[2]);else if(e.isArray(a[2]))g=a[2];else if(e.isImmutableArray(a[2]))g=a[2].toArray();else if(a[2]instanceof y)g.push(a[2]);else throw new k.ArcadeExecutionError(c,
k.ExecutionErrorCodes.InvalidParameter,d);for(var p of g)if(p instanceof y){l=p.hasField("name")?p.field("name"):"";g=p.hasField("statistic")?p.field("statistic"):"";r=p.hasField("expression")?p.field("expression"):"";if(!l||!g||!r)throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);f.push({name:l,statistic:g.toLowerCase(),expression:u.WhereClause.create(r,m.getFieldsIndex(),m.dateFieldsTimeZoneDefaultUTC)})}else throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,
d);if(n){p={};for(var v of m.fields)p[v.name.toLowerCase()]=1;for(const w of b)"%%%%FIELDNAME"!==w.name&&(p[w.name.toLowerCase()]=1);for(const w of f)"%%%%FIELDNAME"!==w.name&&(p[w.name.toLowerCase()]=1);v=0;for(const w of b)if("%%%%FIELDNAME"===w.name){for(;1===p["field_"+v.toString()];)v++;p["field_"+v.toString()]=1;w.name="FIELD_"+v.toString()}}for(const w of b)await K(w.expression,h,c);for(const w of f)await K(w.expression,h,c);return a[0].groupby(b,f)})},h.signatures.push({name:"groupby",min:3,
max:3}),h.functions.distinct=function(c,d){return h.standardFunctionAsync(c,d,async(b,f,a)=>{if(e.isFeatureSet(a[0])){e.pcCheck(a,2,2,c,d);f=await a[0].load();b=[];var m=[];if(e.isString(a[1]))m.push(a[1]);else if(a[1]instanceof y)m.push(a[1]);else if(e.isArray(a[1]))m=a[1];else if(e.isImmutableArray(a[1]))m=a[1].toArray();else throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);let r=!1;for(var n of m)if(e.isString(n)){m=u.WhereClause.create(e.toString(n),f.getFieldsIndex(),
f.dateFieldsTimeZoneDefaultUTC);var g=!0===Q.isSingleField(m)?e.toString(n):"%%%%FIELDNAME";b.push({name:g,expression:m});"%%%%FIELDNAME"===g&&(r=!0)}else if(n instanceof y){m=n.hasField("name")?n.field("name"):"%%%%FIELDNAME";g=n.hasField("expression")?n.field("expression"):"";"%%%%FIELDNAME"===m&&(r=!0);if(!m)throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);b.push({name:m,expression:u.WhereClause.create(g||m,f.getFieldsIndex(),f.dateFieldsTimeZoneDefaultUTC)})}else throw new k.ArcadeExecutionError(c,
k.ExecutionErrorCodes.InvalidParameter,d);if(r){n={};for(var l of f.fields)n[l.name.toLowerCase()]=1;for(const p of b)"%%%%FIELDNAME"!==p.name&&(n[p.name.toLowerCase()]=1);l=0;for(const p of b)if("%%%%FIELDNAME"===p.name){for(;1===n["field_"+l.toString()];)l++;n["field_"+l.toString()]=1;p.name="FIELD_"+l.toString()}}for(const p of b)await K(p.expression,h,c);return a[0].groupby(b,[])}a:{if(1===a.length){if(e.isArray(a[0])){a=I.calculateStat("distinct",a[0],-1);break a}if(e.isImmutableArray(a[0])){a=
I.calculateStat("distinct",a[0].toArray(),-1);break a}}a=I.calculateStat("distinct",a,-1)}return a})});h.functions.getfeaturesetinfo=function(c,d){return h.standardFunctionAsync(c,d,async(b,f,a)=>{e.pcCheck(a,1,1,c,d);return e.isFeatureSet(a[0])?(b=await a[0].getFeatureSetInfo())?y.convertObjectToArcadeDictionary({layerId:b.layerId,layerName:b.layerName,itemId:b.itemId,serviceLayerUrl:b.serviceLayerUrl,webMapLayerId:b.webMapLayerId??null,webMapLayerTitle:b.webMapLayerTitle??null,className:null,objectClassId:null},
e.defaultTimeZone(c),!1,!1):null:null})};h.signatures.push({name:"getfeaturesetinfo",min:1,max:1});h.functions.filterbysubtypecode=function(c,d){return h.standardFunctionAsync(c,d,async(b,f,a)=>{e.pcCheck(a,2,2,c,d);if(e.isFeatureSet(a[0])){b=await a[0].load();if(!e.isInteger(a[1]))throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);if(null===b.typeIdField||""===b.typeIdField)throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.FeatureSetDoesNotHaveSubtypes,d);b=u.WhereClause.create(`${b.typeIdField}= ${a[1]}`,
b.getFieldsIndex(),b.dateFieldsTimeZoneDefaultUTC);return new P({parentfeatureset:a[0],whereclause:b})}throw new k.ArcadeExecutionError(c,k.ExecutionErrorCodes.InvalidParameter,d);})};h.signatures.push({name:"filterbysubtypecode",min:2,max:2})};Object.defineProperty(N,Symbol.toStringTag,{value:"Module"})});