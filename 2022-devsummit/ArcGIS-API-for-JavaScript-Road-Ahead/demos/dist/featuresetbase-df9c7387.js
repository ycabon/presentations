import { ec as s$1, e9 as x, fP as ke, cz as y$1 } from './_virtual_index-2683c931.js';
import { J as J$1, M as O, K as K$1, s, i as h, l as k, W as ee, Z, F, X, E, k as g, ah as ge, ai as M, a3 as s$2, aj as l } from './arcadeUtils-d726c21d.js';
import { b, D, r, q as q$1, y, _ as _$1, e, a, c as a$1, A, j, T, k as k$1, d as T$1, C, v, E as E$1, w } from './featureSetUtils-a9366208.js';
import { WhereClause as f } from './WhereClause-aedb8c74.js';
import { c as n, E as E$2 } from './SpatialFilter-797f3f84.js';
import './number-b1bf087b.js';
import './FeatureSetReader-c8b784f1.js';
import './centroid-395619b0.js';
import './MD5-a554c7d9.js';
import './_commonjsHelpers-3f70742c.js';
import './geometryEngineAsync-1e55fb8b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function V(e,t,n,r){if(1===r.length){if(Z(r[0]))return l(e,r[0],-1);if(E(r[0]))return l(e,r[0].toArray(),-1)}return l(e,r,-1)}function z(n,r,i){const a=n.getVariables();if(a.length>0){const t=[];for(let e=0;e<a.length;e++){const n={name:a[e]};t.push(r.evaluateIdentifier(i,n));}return s$1(t).then((e=>{const t={};for(let n=0;n<a.length;n++)t[a[n]]=e[n];return n.parameters=t,n}))}return x(n)}function H(e,t,n=null){for(const r in e)if(r.toLowerCase()===t.toLowerCase())return e[r];return n}function U(e){if(null===e)return null;const t={type:H(e,"type",""),name:H(e,"name","")};if("range"===t.type)t.range=H(e,"range",[]);else {t.codedValues=[];for(const n of H(e,"codedValues",[]))t.codedValues.push({name:H(n,"name",""),code:H(n,"code",null)});}return t}function W(e){if(null===e)return null;const t={},n=H(e,"wkt",null);null!==n&&(t.wkt=n);const r=H(e,"wkid",null);return null!==r&&(t.wkid=r),t}function _(e){if(null===e)return null;const t={hasZ:H(e,"hasz",!1),hasM:H(e,"hasm",!1)},n=H(e,"spatialreference",null);n&&(t.spatialReference=W(n));const r=H(e,"x",null);if(null!==r)return t.x=r,t.y=H(e,"y",null),t;const i=H(e,"rings",null);if(null!==i)return t.rings=i,t;const a=H(e,"paths",null);if(null!==a)return t.paths=a,t;const s=H(e,"points",null);if(null!==s)return t.points=s,t;for(const l of ["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const n=H(e,l,null);null!==n&&(t[l]=n);}return t}function J(e,t){for(const n of t)if(n===e)return !0;return !1}function q(e){return !!e.layerDefinition&&(!!e.featureSet&&(!1!==J(e.layerDefinition.geometryType,["","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])&&(null!==e.layerDefinition.objectIdField&&""!==e.layerDefinition.objectIdField&&(!1!==Z(e.layerDefinition.fields)&&!1!==Z(e.featureSet.features)))))}function K(F$1){"async"===F$1.mode&&(F$1.functions.getuser=function(e,t){return F$1.standardFunctionAsync(e,t,((t,n,l)=>{J$1(l,1,2);let o=O(l[1],""),f=!0===o;if(o=!0===o||!1===o?"":K$1(o),l[0]instanceof s){let t=null;return e.services&&e.services.portal&&(t=e.services.portal),t=b(l[0],t),D(t,o,f).then((e=>{if(e){const t=JSON.parse(JSON.stringify(e));for(const e of ["lastLogin","created","modified"])void 0!==t[e]&&null!==t[e]&&(t[e]=new Date(t[e]));return h.convertObjectToArcadeDictionary(t)}return null}))}let u=null;if(k(l[0])&&(u=l[0]),u)return f=!1,o?null:u.load().then((()=>u.getOwningSystemUrl())).then((t=>{if(!t)return o?null:u.getIdentityUser().then((e=>e?h.convertObjectToArcadeDictionary({username:e}):null));let n=null;return e.services&&e.services.portal&&(n=e.services.portal),n=b(new s(t),n),D(n,o,f).then((e=>{if(e){const t=JSON.parse(JSON.stringify(e));for(const e of ["lastLogin","created","modified"])void 0!==t[e]&&null!==t[e]&&(t[e]=new Date(t[e]));return h.convertObjectToArcadeDictionary(t)}return null}))}));throw new Error("Invalid Parameter")}))},F$1.signatures.push({name:"getuser",min:"1",max:"2"}),F$1.functions.featuresetbyid=function(e,t){return F$1.standardFunctionAsync(e,t,((e,t,n)=>{if(J$1(n,2,4),n[0]instanceof r){const e=K$1(n[1]);let t=O(n[2],null);const r=ee(O(n[3],!0));if(null===t&&(t=["*"]),!1===Z(t))throw new Error("Invalid Parameter");return n[0].featureSetById(e,r,t)}throw new Error("Invalid Parameter")}))},F$1.signatures.push({name:"featuresetbyid",min:"2",max:"4"}),F$1.functions.featuresetbyportalitem=function(e,t){return F$1.standardFunctionAsync(e,t,((t,n,s$1)=>{if(J$1(s$1,2,5),null===s$1[0])throw new Error("Portal is required");if(s$1[0]instanceof s){const t=K$1(s$1[1]),n=K$1(s$1[2]);let r=O(s$1[3],null);const f=ee(O(s$1[4],!0));if(null===r&&(r=["*"]),!1===Z(r))throw new Error("Invalid Parameter");let u=null;return e.services&&e.services.portal&&(u=e.services.portal),u=b(s$1[0],u),q$1(t,n,e.spatialReference,r,f,u,e.lrucache,e.interceptor)}if(!1===F(s$1[0]))throw new Error("Portal is required");const u=K$1(s$1[0]),c=K$1(s$1[1]);let d=O(s$1[2],null);const m=ee(O(s$1[3],!0));if(null===d&&(d=["*"]),!1===Z(d))throw new Error("Invalid Parameter");if(e.services&&e.services.portal)return q$1(u,c,e.spatialReference,d,m,e.services.portal,e.lrucache,e.interceptor);throw new Error("Portal is required")}))},F$1.signatures.push({name:"featuresetbyportalitem",min:"2",max:"5"}),F$1.functions.featuresetbyname=function(e,t){return F$1.standardFunctionAsync(e,t,((e,t,n)=>{if(J$1(n,2,4),n[0]instanceof r){const e=K$1(n[1]);let t=O(n[2],null);const r=ee(O(n[3],!0));if(null===t&&(t=["*"]),!1===Z(t))throw new Error("Invalid Parameter");return n[0].featureSetByName(e,r,t)}throw new Error("Invalid Parameter")}))},F$1.signatures.push({name:"featuresetbyname",min:"2",max:"4"}),F$1.functions.featureset=function(e,t){return F$1.standardFunction(e,t,((t,n,i)=>{J$1(i,1,1);let a=i[0];const s={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(F(a))a=JSON.parse(a),void 0!==a.layerDefinition?(s.layerDefinition=a.layerDefinition,s.featureSet=a.featureSet,a.layerDefinition.spatialReference&&(s.layerDefinition.spatialReference=a.layerDefinition.spatialReference)):(s.featureSet.features=a.features,s.featureSet.geometryType=a.geometryType,s.layerDefinition.geometryType=s.featureSet.geometryType,s.layerDefinition.objectIdField=a.objectIdFieldName,s.layerDefinition.typeIdField=a.typeIdFieldName,s.layerDefinition.globalIdField=a.globalIdFieldName,s.layerDefinition.fields=a.fields,a.spatialReference&&(s.layerDefinition.spatialReference=a.spatialReference));else {if(!(i[0]instanceof h))throw new Error("Invalid Parameter");{a=JSON.parse(i[0].castToText());const e=H(a,"layerdefinition");if(null!==e){s.layerDefinition.geometryType=H(e,"geometrytype",""),s.featureSet.geometryType=s.layerDefinition.geometryType,s.layerDefinition.globalIdField=H(e,"globalidfield",""),s.layerDefinition.objectIdField=H(e,"objectidfield",""),s.layerDefinition.typeIdField=H(e,"typeidfield","");const t=H(e,"spatialreference",null);t&&(s.layerDefinition.spatialReference=W(t));for(const r of H(e,"fields",[])){const e={name:H(r,"name",""),alias:H(r,"alias",""),type:H(r,"type",""),nullable:H(r,"nullable",!0),editable:H(r,"editable",!0),length:H(r,"length",null),domain:U(H(r,"domain"))};s.layerDefinition.fields.push(e);}const n=H(a,"featureset",null);if(n){const e={};for(const t of s.layerDefinition.fields)e[t.name.toLowerCase()]=t.name;for(const t of H(n,"features",[])){const n={},r=H(t,"attributes",{});for(const t in r)n[e[t.toLowerCase()]]=r[t];s.featureSet.features.push({attributes:n,geometry:_(H(t,"geometry",null))});}}}else {s.layerDefinition.geometryType=H(a,"geometrytype",""),s.featureSet.geometryType=s.layerDefinition.geometryType,s.layerDefinition.objectIdField=H(a,"objectidfieldname",""),s.layerDefinition.typeIdField=H(a,"typeidfieldname","");const e=H(a,"spatialreference",null);e&&(s.layerDefinition.spatialReference=W(e));for(const n of H(a,"fields",[])){const e={name:H(n,"name",""),alias:H(n,"alias",""),type:H(n,"type",""),nullable:H(n,"nullable",!0),editable:H(n,"editable",!0),length:H(n,"length",null),domain:U(H(n,"domain"))};s.layerDefinition.fields.push(e);}const t={};for(const n of s.layerDefinition.fields)t[n.name.toLowerCase()]=n.name;for(const n of H(a,"features",[])){const e={},r=H(n,"attributes",{});for(const n in r)e[t[n.toLowerCase()]]=r[n];s.featureSet.features.push({attributes:e,geometry:_(H(n,"geometry",null))});}}}}if(!1===q(s))throw new Error("Invalid Parameter");return y.create(s,e.spatialReference)}))},F$1.signatures.push({name:"featureset",min:"1",max:"1"}),F$1.functions.filter=function(n,i){return F$1.standardFunctionAsync(n,i,((i,a,l)=>(J$1(l,2,2),k(l[0])?l[0].load().then((r=>{const i=f.create(l[1],r.getFieldsIndex()),a=i.getVariables();if(a.length>0){const t=[];for(let e=0;e<a.length;e++){const r={name:a[e]};t.push(F$1.evaluateIdentifier(n,r));}return s$1(t).then((e=>{const t={};for(let n=0;n<a.length;n++)t[a[n]]=e[n];return i.parameters=t,new _$1({parentfeatureset:l[0],whereclause:i})}))}return x(new _$1({parentfeatureset:l[0],whereclause:i}))})):F$1.failDefferred("Filter cannot accept this parameter type"))))},F$1.signatures.push({name:"filter",min:"2",max:"2"}),F$1.functions.orderby=function(e$1,n){return F$1.standardFunctionAsync(e$1,n,((e$1,n,i)=>{if(J$1(i,2,2),k(i[0])){const e$1=new e(i[1]);return x(new a({parentfeatureset:i[0],orderbyclause:e$1}))}return F$1.failDefferred("Order cannot accept this parameter type")}))},F$1.signatures.push({name:"orderby",min:"2",max:"2"}),F$1.functions.top=function(e,n){return F$1.standardFunctionAsync(e,n,((e,n,i)=>(J$1(i,2,2),k(i[0])?x(new a$1({parentfeatureset:i[0],topnum:i[1]})):Z(i[0])?X(i[1])>=i[0].length?i[0].slice(0):i[0].slice(0,X(i[1])):E(i[0])?X(i[1])>=i[0].length()?i[0].slice(0):i[0].slice(0,X(i[1])):F$1.failDefferred("Top cannot accept this parameter type"))))},F$1.signatures.push({name:"top",min:"2",max:"2"}),F$1.functions.first=function(e,n){return F$1.standardFunctionAsync(e,n,((e,n,i)=>(J$1(i,1,1),k(i[0])?i[0].first(e.abortSignal).then((e=>{if(null!==e){const t=g.createFromGraphicLikeObject(e.geometry,e.attributes,i[0]);t._underlyingGraphic=e,e=t;}return e})):Z(i[0])?0===i[0].length?x(null):x(i[0][0]):E(i[0])?0===i[0].length()?x(null):x(i[0].get(0)):null)))},F$1.signatures.push({name:"first",min:"1",max:"1"}),F$1.functions.attachments=function(e,t){return F$1.standardFunctionAsync(e,t,((t,n,i)=>{J$1(i,1,2);const a={minsize:-1,maxsize:-1,types:null};if(i.length>1)if(i[1]instanceof h){if(i[1].hasField("minsize")&&(a.minsize=X(i[1].field("minsize"))),i[1].hasField("maxsize")&&(a.maxsize=X(i[1].field("maxsize"))),i[1].hasField("types")){const e=ge(i[1].field("types"),!1);e.length>0&&(a.types=e);}}else if(null!==i[1])throw new Error("Invalid Parameter");if(i[0]instanceof g){let t=i[0]._layer;return t instanceof ke&&(t=A(t,e.spatialReference,["*"],!0,e.lrucache,e.interceptor)),null===t||!1===k(t)?[]:t.load().then((()=>t.queryAttachments(i[0].field(t.objectIdField),a.minsize,a.maxsize,a.types)))}if(null===i[0])return [];throw new Error("Invalid Parameter")}))},F$1.signatures.push({name:"attachments",min:"1",max:"2"}),F$1.functions.featuresetbyrelationshipname=function(e,t){return F$1.standardFunctionAsync(e,t,((t,n$1,f$1)=>{J$1(f$1,2,4);const u=f$1[0],c=K$1(f$1[1]);let d=O(f$1[2],null);const m=ee(O(f$1[3],!0));if(null===d&&(d=["*"]),!1===Z(d))throw new Error("Invalid Parameter");if(null===f$1[0])return null;if(!(f$1[0]instanceof g))throw new Error("Invalid Parameter");let p=u._layer;return p instanceof ke&&(p=A(p,e.spatialReference,["*"],!0,e.lrucache,e.interceptor)),null===p||!1===k(p)?null:p.load().then((t=>{const n$1=t.relationshipMetaData().filter((e=>e.name===c));if(0===n$1.length)return null;if(void 0!==n$1[0].relationshipTableId&&null!==n$1[0].relationshipTableId&&n$1[0].relationshipTableId>-1)return j(t,n$1[0],u.field(t.objectIdField),t.spatialReference,d,m,e.lrucache,e.interceptor);let r=t.serviceUrl();return r?(r="/"===r.charAt(r.length-1)?r+n$1[0].relatedTableId.toString():r+"/"+n$1[0].relatedTableId.toString(),T(r,t.spatialReference,d,m,e.lrucache,e.interceptor).then((e=>e.load().then((()=>e.relationshipMetaData())).then((r=>{if(r=r.filter((e=>e.id===n$1[0].id)),!1===u.hasField(n$1[0].keyField)||null===u.field(n$1[0].keyField))return t.getFeatureByObjectId(u.field(t.objectIdField),[n$1[0].keyField]).then((t=>{if(t){const i=f.create(r[0].keyField+"= @id",e.getFieldsIndex());return i.parameters={id:t.attributes[n$1[0].keyField]},e.filter(i)}return new n({parentfeatureset:e})}));const i=f.create(r[0].keyField+"= @id",e.getFieldsIndex());return i.parameters={id:u.field(n$1[0].keyField)},e.filter(i)}))))):null}))}))},F$1.signatures.push({name:"featuresetbyrelationshipname",min:"2",max:"4"}),F$1.functions.featuresetbyassociation=function(e,t){return F$1.standardFunctionAsync(e,t,((t,l,o)=>{J$1(o,2,3);const u=o[0],c=K$1(O(o[1],"")).toLowerCase(),d=F(o[2])?K$1(o[2]):null;if(null===o[0])return null;if(!(o[0]instanceof g))throw new Error("Invalid Parameter");let p=u._layer;return p instanceof ke&&(p=A(p,e.spatialReference,["*"],!0,e.lrucache,e.interceptor)),null===p||!1===k(p)?null:p.load().then((()=>{const t=p.serviceUrl();return k$1(t,e.spatialReference)})).then((e=>{let t=null,r=null,i=!1;if(null!==d&&""!==d&&void 0!==d){for(const t of e.terminals)t.terminalName===d&&(r=t.terminalId);null===r&&(i=!0);}const a=e.associations.getFieldsIndex(),s=a.get("TOGLOBALID").name,l=a.get("FROMGLOBALID").name,o=a.get("TOTERMINALID").name,f$1=a.get("FROMTERMINALID").name,y=a.get("FROMNETWORKSOURCEID").name,h=a.get("TONETWORKSOURCEID").name,F=a.get("ASSOCIATIONTYPE").name,I=a.get("ISCONTENTVISIBLE").name,D=a.get("OBJECTID").name;for(const n of p.fields)if("global-id"===n.type){t=u.field(n.name);break}let w$1=null,$=new T$1(new y$1({name:"percentalong",alias:"percentalong",type:"double"}),f.create("0",e.associations.getFieldsIndex())),T=new T$1(new y$1({name:"side",alias:"side",type:"string"}),f.create("''",e.associations.getFieldsIndex()));const L="globalid",v$1="globalId",j={};for(const n in e.lkp)j[n]=e.lkp[n].sourceId;const O=new C(new y$1({name:"classname",alias:"classname",type:"string"}),null,j);let R="";switch(c){case"midspan":{R=`((${s}='${t}') OR ( ${l}='${t}')) AND (${F} IN (5))`,O.codefield=f.create(`CASE WHEN (${s}='${t}') THEN ${y} ELSE ${h} END`,e.associations.getFieldsIndex());const r=s$2(E$1.findField(e.associations.fields,l));r.name=L,r.alias=L,w$1=new T$1(r,f.create(`CASE WHEN (${l}='${t}') THEN ${s} ELSE ${l} END`,e.associations.getFieldsIndex())),$=e.unVersion>=4?new w(E$1.findField(e.associations.fields,a.get("PERCENTALONG").name)):new T$1(new y$1({name:"percentalong",alias:"percentalong",type:"double"}),f.create("0",e.associations.getFieldsIndex()));break}case"junctionedge":{R=`((${s}='${t}') OR ( ${l}='${t}')) AND (${F} IN (4,6))`,O.codefield=f.create(`CASE WHEN (${s}='${t}') THEN ${y} ELSE ${h} END`,e.associations.getFieldsIndex());const r=s$2(E$1.findField(e.associations.fields,l));r.name=L,r.alias=L,w$1=new T$1(r,f.create(`CASE WHEN (${l}='${t}') THEN ${s} ELSE ${l} END`,e.associations.getFieldsIndex())),T=new T$1(new y$1({name:"side",alias:"side",type:"string"}),f.create(`CASE WHEN (${F}=4) THEN 'from' ELSE 'to' END`,e.associations.getFieldsIndex()));break}case"connected":{let n=`${s}='@T'`,i=`${l}='@T'`;null!==r&&(n+=` AND ${o}=@A`,i+=` AND ${f$1}=@A`),R="(("+n+") OR ("+i+"))",R=M(R,"@T",t),n=M(n,"@T",t),null!==r&&(n=M(n,"@A",r.toString()),R=M(R,"@A",r.toString())),O.codefield=f.create("CASE WHEN "+n+` THEN ${y} ELSE ${h} END`,e.associations.getFieldsIndex());const a=s$2(E$1.findField(e.associations.fields,l));a.name=L,a.alias=L,w$1=new T$1(a,f.create("CASE WHEN "+n+` THEN ${l} ELSE ${s} END`,e.associations.getFieldsIndex()));break}case"container":R=`${s}='${t}' AND ${F} = 2`,null!==r&&(R+=` AND ${o} = `+r.toString()),O.codefield=y,R="( "+R+" )",w$1=new v(E$1.findField(e.associations.fields,l),L,L);case"content":R=`(${l}='${t}' AND ${F} = 2)`,null!==r&&(R+=` AND ${f$1} = `+r.toString()),O.codefield=h,R="( "+R+" )",w$1=new v(E$1.findField(e.associations.fields,s),L,L);break;case"structure":R=`(${s}='${t}' AND ${F} = 3)`,null!==r&&(R+=` AND ${o} = `+r.toString()),O.codefield=y,R="( "+R+" )",w$1=new v(E$1.findField(e.associations.fields,l),L,v$1);break;case"attached":R=`(${l}='${t}' AND ${F} = 3)`,null!==r&&(R+=` AND ${f$1} = `+r.toString()),O.codefield=h,R="( "+R+" )",w$1=new v(E$1.findField(e.associations.fields,s),L,v$1);break;default:throw new Error("Invalid Parameter")}i&&(R="1 <> 1");return new E$1({parentfeatureset:e.associations,adaptedFields:[new w(E$1.findField(e.associations.fields,D)),new w(E$1.findField(e.associations.fields,I)),w$1,T,O,$],extraFilter:R?f.create(R,e.associations.getFieldsIndex()):null})}))}))},F$1.signatures.push({name:"featuresetbyassociation",min:"2",max:"6"}),F$1.functions.groupby=function(n,i){return F$1.standardFunctionAsync(n,i,((i,l,u)=>(J$1(u,3,3),k(u[0])?u[0].load().then((r=>{const i=[],s=[];let l=!1,d=[];if(F(u[1]))d.push(u[1]);else if(u[1]instanceof h)d.push(u[1]);else if(Z(u[1]))d=u[1];else {if(!E(u[1]))return F$1.failDefferred("Illegal Value: GroupBy");d=u[1].toArray();}for(const e of d)if(F(e)){const t=f.create(K$1(e),r.getFieldsIndex()),n=!0===E$2(t)?K$1(e):"%%%%FIELDNAME";i.push({name:n,expression:t}),"%%%%FIELDNAME"===n&&(l=!0);}else {if(!(e instanceof h))return F$1.failDefferred("Illegal Value: GroupBy");{const t=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",n=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===t&&(l=!0),!t)return F$1.failDefferred("Illegal Value: GroupBy");i.push({name:t,expression:f.create(n||t,r.getFieldsIndex())});}}if(d=[],F(u[2]))d.push(u[2]);else if(Z(u[2]))d=u[2];else if(E(u[2]))d=u[2].toArray();else {if(!(u[2]instanceof h))return F$1.failDefferred("Illegal Value: GroupBy");d.push(u[2]);}for(const e of d){if(!(e instanceof h))return F$1.failDefferred("Illegal Value: GroupBy");{const t=e.hasField("name")?e.field("name"):"",n=e.hasField("statistic")?e.field("statistic"):"",i=e.hasField("expression")?e.field("expression"):"";if(!t||!n||!i)return F$1.failDefferred("Illegal Value: GroupBy");s.push({name:t,statistic:n.toLowerCase(),expression:f.create(i,r.getFieldsIndex())});}}if(l){const e={};for(const n of r.fields)e[n.name.toLowerCase()]=1;for(const n of i)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);for(const n of s)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let t=0;for(const n of i)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString();}}const m=[];for(const e of i)m.push(z(e.expression,F$1,n));for(const e of s)m.push(z(e.expression,F$1,n));return m.length>0?s$1(m).then((()=>x(u[0].groupby(i,s)))):x(u[0].groupby(i,s))})):F$1.failDefferred("Illegal Value: GroupBy"))))},F$1.signatures.push({name:"groupby",min:"3",max:"3"}),F$1.functions.distinct=function(n,i){return F$1.standardFunctionAsync(n,i,((i,l,u)=>k(u[0])?(J$1(u,2,2),u[0].load().then((r=>{const i=[];let s=[];if(F(u[1]))s.push(u[1]);else if(u[1]instanceof h)s.push(u[1]);else if(Z(u[1]))s=u[1];else {if(!E(u[1]))return F$1.failDefferred("Illegal Value: GroupBy");s=u[1].toArray();}let l=!1;for(const e of s)if(F(e)){const t=f.create(K$1(e),r.getFieldsIndex()),n=!0===E$2(t)?K$1(e):"%%%%FIELDNAME";i.push({name:n,expression:t}),"%%%%FIELDNAME"===n&&(l=!0);}else {if(!(e instanceof h))return F$1.failDefferred("Illegal Value: GroupBy");{const t=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",n=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===t&&(l=!0),!t)return F$1.failDefferred("Illegal Value: GroupBy");i.push({name:t,expression:f.create(n||t,r.getFieldsIndex())});}}if(l){const e={};for(const n of r.fields)e[n.name.toLowerCase()]=1;for(const n of i)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let t=0;for(const n of i)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString();}}const d=[];for(const e of i)d.push(z(e.expression,F$1,n));return d.length>0?s$1(d).then((()=>x(u[0].groupby(i,[])))):x(u[0].groupby(i,[]))}))):V("distinct",i,l,u)))});}

export { K as registerFunctions };