import './_virtual_index-4b72c57d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class o{constructor(t){this.message=t;}toString(){return `AssertException: ${this.message}`}}function e(t,n){if(!t)throw n=n||"assert",console.log(new Error(n).stack),new o(n)}function c(t,n,r,a){let o,e=(r[0]-t[0])/n[0],s=(a[0]-t[0])/n[0];e>s&&(o=e,e=s,s=o);let c=(r[1]-t[1])/n[1],u=(a[1]-t[1])/n[1];if(c>u&&(o=c,c=u,u=o),e>u||c>s)return !1;c>e&&(e=c),u<s&&(s=u);let i=(r[2]-t[2])/n[2],f=(a[2]-t[2])/n[2];return i>f&&(o=i,i=f,f=o),!(e>f||i>s)&&(f<s&&(s=f),!(s<0))}

export { c, e };
