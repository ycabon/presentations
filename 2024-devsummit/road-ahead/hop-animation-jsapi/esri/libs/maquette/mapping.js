// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(k){k.createMapping=(r,t,l)=>{let d=[],b=[];return{results:b,map:e=>{let m=e.map(r),f=b.slice(),c=0;for(let a=0;a<e.length;a++){let n=e[a],p=m[a];if(p===d[c])b[a]=f[c],l(n,f[c],a),c++;else{let q=!1;for(let h=1;h<d.length+1;h++){let g=(c+h)%d.length;if(d[g]===p){b[a]=f[g];l(e[a],f[g],a);c=g+1;q=!0;break}}q||(b[a]=t(n,a))}}b.length=e.length;d=m}}};Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});