self.webpackChunkRemoteClient([159],{550:function(e,t,s){"use strict";s.r(t),s.d(t,"execute",(function(){return a}));var r=s(1),n=s(17);let o;function a(e,t={}){let s=t.responseType;s?"json"!==s&&"text"!==s&&"blob"!==s&&"array-buffer"!==s&&(s="text"):s="json";const a=t&&t.signal;return delete t.signal,r.a.invokeStaticMessage("request",{url:e,options:t},{signal:a}).then(r=>{const a=r.data;let l,u,c,i;if(a&&!("json"!==s&&"text"!==s&&"blob"!==s||(l=new Blob([a]),"json"!==s&&"text"!==s||(o||(o=new FileReaderSync),u=o.readAsText(l),"json"!==s)))){try{c=JSON.parse(u||null)}catch(s){const r={...s,url:e,requestOptions:t};throw new n.a("request:server",s.message,r)}if(c.error){const s={...c.error,url:e,requestOptions:t};throw new n.a("request:server",c.error.message,s)}}switch(s){case"json":i=c;break;case"text":i=u;break;case"blob":i=l;break;default:i=a}return{data:i,requestOptions:t,ssl:r.ssl,url:e}})}}});