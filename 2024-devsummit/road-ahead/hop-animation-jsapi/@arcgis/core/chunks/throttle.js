/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function e(e,t,l,n){let o=null,a=1e3;"number"==typeof t?(a=t,n=l):(o=t??null,a=l);let p,r=0;const u=()=>{r=0,e.apply(n,p)},c=(...e)=>{o&&o.apply(n,e),p=e,a?r||(r=setTimeout(u,a)):u()};return c.remove=()=>{r&&(clearTimeout(r),r=0)},c.forceUpdate=()=>{r&&(clearTimeout(r),u())},c.hasPendingUpdates=()=>!!r,c}export{e as t};
