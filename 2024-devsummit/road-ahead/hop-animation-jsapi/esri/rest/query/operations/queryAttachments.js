// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../kernel ../../../request ../../../core/urlUtils ../../operations/urlUtils ../support/AttachmentInfo".split(" "),function(f,n,l,p,q,r){function t(a){a=a.toJSON();a.attachmentTypes&&(a.attachmentTypes=a.attachmentTypes.join(","));a.keywords&&(a.keywords=a.keywords.join(","));a.globalIds&&(a.globalIds=a.globalIds.join(","));a.objectIds&&(a.objectIds=a.objectIds.join(","));a.size&&(a.size=a.size.join(","));return a}f.executeAttachmentQuery=function(a,b,c){b={query:q.mapParameters({...a.query,
f:"json",...t(b)})};c&&(b={...c,...b,query:{...c.query,...b.query}});return l(a.path+"/queryAttachments",b).then(e=>e.data.attachmentGroups)};f.fetchAttachments=async function(a,b,c){const {objectIds:e}=b;b=[];for(const d of e)b.push(l(a.path+"/"+d+"/attachments",c));return Promise.all(b).then(d=>e.map((g,h)=>({parentObjectId:g,attachmentInfos:d[h].data.attachmentInfos})))};f.processAttachmentQueryResult=function(a,b){const c={};for(const e of b){const {parentObjectId:d,parentGlobalId:g,attachmentInfos:h}=
e;for(const m of h){({id:b}=m);b=p.addProxy(n.addTokenParameter(`${a.path}/${d}/attachments/${b}`));const k=r.fromJSON(m);k.set({url:b,parentObjectId:d,parentGlobalId:g});c[d]?c[d].push(k):c[d]=[k]}}return c};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});