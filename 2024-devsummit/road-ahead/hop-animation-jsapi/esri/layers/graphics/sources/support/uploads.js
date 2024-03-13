// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../request ../../../../core/promiseUtils ../../../../core/urlUtils ../../../support/arcgisLayerUrl ../../../../support/progressUtils".split(" "),function(t,f,k,a,A,u){t.uploadItem=async function({data:b,name:d,description:B},v,g){var c=null;try{const h=a.join(v,"uploads"),C=a.join(h,"info"),{data:D}=await f(C,{query:{f:"json"},responseType:"json"});k.throwIfAborted(g);const w=A.isHostedAgolService(v),x=1E6*D.maxUploadFileSize;var e=w?Math.min(2E7,x):2E7;if(b.size>(w?2E9:x))throw Error("Data too large");
const E=a.join(h,"register"),{data:y}=await f(E,{query:{f:"json",itemName:d.replaceAll("/","_").replaceAll("\\","_"),description:B},responseType:"json",method:"post"});k.throwIfAborted(g);if(!y.success)throw Error("Registration failed");const {itemID:F}=y.item;c=a.join(h,F);const G=a.join(c,"uploadPart");var l=Math.ceil(b.size/e);const m=[];for(d=0;d<l;++d)m.push(b.slice(d*e,Math.min((d+1)*e,b.size)));const n=m.slice().reverse();b=[];const H=u.makeProgressManager(l,g?.onProgress,"uploadItem");l=async()=>
{for(;0!==n.length;){const r=m.length-n.length,p=n.pop(),q=new FormData,I=H.simulate(r,u.estimatedTransferTime(p.size));try{q.append("f","json");q.append("file",p);q.append("partId",`${r}`);const {data:J}=await f(G,{timeout:0,body:q,responseType:"json",method:"post"});k.throwIfAborted(g);if(!J.success)throw Error("Part upload failed");}finally{I.remove()}}};for(e=0;3>e&&0!==n.length;++e)b.push(l());await Promise.all(b);const K=a.join(c,"commit"),{data:z}=await f(K,{query:{f:"json",parts:m.map((r,
p)=>p).join(",")},responseType:"json",method:"post"});k.throwIfAborted(g);if(!z.success)throw Error("Commit failed");return z.item}catch(h){throw null!=c&&(c=a.join(c,"delete"),await f(c,{query:{f:"json"},responseType:"json",method:"post"})),h;}};Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});