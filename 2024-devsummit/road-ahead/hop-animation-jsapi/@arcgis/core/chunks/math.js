/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.3.0
 */
const t=(t,n,a)=>Math.max(n,Math.min(t,a)),n=new RegExp(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/),a=t=>{const a=(""+t).match(n);return a&&0!==parseInt(a[1])?Math.max(0,(a[1]?a[1].length:0)-(a[2]?+a[2]:0)):0};function r(t){return a(t)>0&&t>0?parseFloat(`0.${t.toString().split(".")[1]}`):t}function e(t,n,a,r,e){return(t-n)*(e-r)/(a-n)+r}function s(t,n,a){return t<a?-1:t>n-a?1:0}export{s as a,t as c,a as d,r as g,e as r};
