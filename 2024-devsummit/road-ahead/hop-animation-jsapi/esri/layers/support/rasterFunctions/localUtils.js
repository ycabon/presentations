// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../PixelBlock","../rasterFunctionConstants","../rasterFormats/pixelRangeUtils"],function(u,k,p,y){function O(a,d=!1){var b=a.map(c=>c.mask);const e=b.filter(c=>null!=c);a=a[0].pixels[0].length;if(0===e.length||d&&e.length!==b.length)return(new Uint8Array(a)).fill(255);b=new Uint8Array(e[0]);if(1===e.length)return b;if(!d){for(d=1;d<e.length;d++){a=e[d];for(var f=0;f<b.length;f++)b[f]&&(b[f]=a[f]?255:0)}return b}for(d=1;d<e.length;d++)for(a=e[d],f=0;f<b.length;f++)0===b[f]&&(b[f]=
a[f]?255:0);return b}function P(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]+f[c];return b}function Q(a,d,b){[a]=a;d=k.createEmptyBand("f32",a.length);d.set(a);return d}function R(a,d,b){[a]=a;const e=a.length;b=k.createEmptyBand(b,e);for(let f=0;f<e;f++)if(!d||d[f])b[f]=a[f]*a[f];return b}function S(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]-f[c];return b}function T(a,d,b){const [e,f]=a;
a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]*f[c];return b}function U(a,d,b){[a]=a;const e=a.length;b=k.createEmptyBand(b,e);for(let f=0;f<e;f++)if(!d||d[f])b[f]=Math.sign(a[f])*Math.floor(Math.abs(a[f]));return b}function z(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]/f[c];return b}function V(a,d,b){return z(a,d,"f32")}function W(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||
d[c])b[c]=Math.floor(e[c]/f[c]);return b}function X(a,d,b,e){a=a[0];const f=a.length;b=k.createEmptyBand(b,f);if(e===p.localTrigonometricOperation.atanh){for(e=0;e<f;e++)if(d[e]){var c=a[e];1<=Math.abs(c)?d[e]=0:b[e]=Math.atanh(c)}return b}e=e===p.localTrigonometricOperation.asin?Math.asin:Math.acos;for(c=0;c<f;c++)if(d[c]){const g=a[c];1<Math.abs(g)?d[c]=0:b[c]=e(g)}return b}function Y(a,d,b,e){[a]=a;const f=a.length;b=k.createEmptyBand(b,f);for(let c=0;c<f;c++)if(!d||d[c])b[c]=e(a[c]);return b}
function Z(a,d,b,e){const [f,c]=a;a=f.length;b=k.createEmptyBand(b,a);for(let g=0;g<a;g++)if(!d||d[g])b[g]=e(f[g],c[g]);return b}function aa(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]&f[c];return b}function ba(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]<<f[c];return b}function ca(a,d,b){[a]=a;const e=a.length;b=k.createEmptyBand(b,e);for(let f=0;f<e;f++)if(!d||d[f])b[f]=~a[f];return b}function da(a,
d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]|f[c];return b}function ea(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]>>f[c];return b}function fa(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]^f[c];return b}function ha(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]&&f[c]?1:0;return b}function ia(a,
d,b){[a]=a;const e=a.length;b=k.createEmptyBand(b,e);for(let f=0;f<e;f++)if(!d||d[f])b[f]=a[f]?0:1;return b}function ja(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]||f[c]?1:0;return b}function ka(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=(e[c]?1:0)^(f[c]?1:0);return b}function la(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]===f[c]?1:0;return b}
function w(a,d,b,e){[a]=a;const f=a.length;b=k.createEmptyBand(b,f);const c=e===Math.E;for(let g=0;g<f;g++)if(!d||d[g])b[g]=c?Math.exp(a[g]):e**a[g];return b}function ma(a,d,b){return w(a,d,b,10)}function na(a,d,b){return w(a,d,b,2)}function oa(a,d,b){return w(a,d,b,Math.E)}function x(a,d,b,e){[a]=a;const f=a.length;b=k.createEmptyBand(b,f);for(let c=0;c<f;c++)if(!d||d[c])0>=a[c]?d[c]=0:b[c]=e(a[c]);return b}function pa(a,d,b){return x(a,d,b,Math.log10)}function qa(a,d,b){return x(a,d,b,Math.log2)}
function ra(a,d,b){return x(a,d,b,Math.log)}function sa(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]>f[c]?1:0;return b}function ta(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]>=f[c]?1:0;return b}function ua(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]<f[c]?1:0;return b}function va(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);
for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]<=f[c]?1:0;return b}function wa(a,d,b){[a]=a;a=a.length;b=k.createEmptyBand(b,a);if(!d)return b;for(let e=0;e<a;e++)b[e]=d[e]?0:1;return b}function xa(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=0;c<a;c++)if(!d||d[c])b[c]=e[c]%f[c];return b}function ya(a,d,b){[a]=a;const e=a.length;b=k.createEmptyBand(b,e);for(let f=0;f<e;f++)if(!d||d[f])b[f]=-a[f];return b}function za(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);for(let c=
0;c<a;c++)if(!d||d[c])b[c]=e[c]===f[c]?0:1;return b}function Aa(a,d,b){const [e,f]=a;a=e.length;b=k.createEmptyBand(b,a);const c=new Uint8Array(a);for(let g=0;g<a;g++)null!=d&&!d[g]||0!==e[g]||(b[g]=f[g],c[g]=255);return{band:b,mask:c}}function A(a,d,b){const [e,f,c]=a;a=e.length;b=k.createEmptyBand(b,a);for(let g=0;g<a;g++)if(!d||d[g])b[g]=e[g]?f[g]:c[g];return b}function B(a,d,b){const e=a.length;if(2>e)return a[0];const [f]=a,c=f.length;b=k.createEmptyBand(b,c);for(let g=0;g<c;g++)if(!d||d[g]){let h=
f[g];for(let l=1;l<e;l++){const n=a[l][g];h<n&&(h=n)}b[g]=h}return b}function C(a,d,b){const e=a.length;if(2>e)return a[0];const [f]=a,c=f.length;b=k.createEmptyBand(b,c);for(let g=0;g<c;g++)if(!d||d[g]){let h=f[g];for(let l=1;l<e;l++){const n=a[l][g];h>n&&(h=n)}b[g]=h}return b}function D(a,d,b){const e=a.length;if(2>e)return a[0];const [f]=a,c=f.length;b=k.createEmptyBand(b,c);for(let g=0;g<c;g++)if(!d||d[g]){let h=f[g],l=h;for(let n=1;n<e;n++){const t=a[n][g];l<t?l=t:h>t&&(h=t)}b[g]=l-h}return b}
function E(a,d,b){const e=a.length;if(2>e)return a[0];var [f]=a;f=f.length;b=k.createEmptyBand(b,f);for(let c=0;c<f;c++)if(!d||d[c]){let g=0;for(let h=0;h<e;h++)g+=a[h][c];b[c]=g/e}return b}function F(a,d,b){const e=a.length;if(2>e)return a[0];var [f]=a;f=f.length;b=k.createEmptyBand(b,f);for(let c=0;c<f;c++)if(!d||d[c])for(let g=0;g<e;g++)b[c]+=a[g][c];return b}function G(a,d,b){const e=a.length;if(2>e)return a[0];var [f]=a;f=f.length;b=k.createEmptyBand(b,f);for(let h=0;h<f;h++)if(!d||d[h]){const l=
new Float32Array(e);let n=0;for(var c=0;c<e;c++){var g=a[c];n+=g[h];l[c]=g[h]}n/=e;c=0;for(g=0;g<e;g++)c+=(l[g]-n)**2;b[h]=Math.sqrt(c/e)}return b}function H(a,d,b){const e=a.length;if(2>e)return a[0];const f=Math.floor(e/2);var [c]=a;c=c.length;b=k.createEmptyBand(b,c);const g=new Float32Array(e),h=1===e%2;for(let l=0;l<c;l++)if(!d||d[l]){for(let n=0;n<e;n++)g[n]=a[n][l];g.sort();b[l]=h?g[f]:(g[f]+g[f-1])/2}return b}function I(a,d,b){const [e,f]=a;if(null==f)return e;a=e.length;b=k.createEmptyBand(b,
a);for(let c=0;c<a;c++)d[c]&&(e[c]===f[c]?b[c]=e[c]:d[c]=0);return b}function J(a,d,b){const e=a.length;if(2>=e)return I(a,d,b);const f=a[0].length;b=k.createEmptyBand(b,f);const c=new Map;for(let h=0;h<f;h++)if(!d||d[h]){c.clear();let l;for(var g=0;g<e;g++)l=a[g][h],c.set(l,c.has(l)?c.get(l)+1:1);let n=g=0;for(const t of c.keys())g=c.get(t),g>n&&(n=g,l=t);b[h]=l}return b}function K(a,d,b){const e=a.length;if(2>=e)return I(a,d,b);const f=a[0].length;b=k.createEmptyBand(b,f);const c=new Map;for(let h=
0;h<f;h++)if(!d||d[h]){c.clear();let l;for(var g=0;g<e;g++)l=a[g][h],c.set(l,c.has(l)?c.get(l)+1:1);g=0;let n=a.length;for(const t of c.keys())g=c.get(t),g<n&&(n=g,l=t);b[h]=l}return b}function L(a,d,b){const e=a.length;if(2>e)return a[0];var [f]=a;f=f.length;b=k.createEmptyBand(b,f);const c=new Set;for(let g=0;g<f;g++)if(!d||d[g]){c.clear();let h;for(let l=0;l<e;l++)h=a[l][g],c.add(h);b[g]=c.size}return b}function Ba(a,d,b,e){let [f,c]=y.getPixelValueRange(b);if(b=y.isIntegerPixelType(b))f-=1E-5,
c+=1E-5;for(let g=0;g<d.length;g++)if(d[g]){const h=a[g];isNaN(h)||h<f||h>c?d[g]=0:e[g]=b?Math.round(h):h}}function M(a,d,b={}){r.size||(r.set(4,Math.sqrt),r.set(6,Math.acos),r.set(7,Math.asin),r.set(8,Math.atan),r.set(9,Math.atanh),r.set(10,Math.abs),r.set(21,Math.cos),r.set(22,Math.cosh),r.set(48,Math.floor),r.set(49,Math.ceil),r.set(51,Math.sin),r.set(52,Math.sinh),r.set(56,Math.tan),r.set(57,Math.tanh),r.set(59,Math.acosh),r.set(60,Math.asinh),r.set(65,Math.floor),v.set(5,Math.pow),v.set(61,Math.atan2),
m.set(1,P),m.set(2,S),m.set(3,T),m.set(11,aa),m.set(12,ba),m.set(13,ca),m.set(14,da),m.set(15,ea),m.set(16,fa),m.set(17,ha),m.set(18,ia),m.set(19,ja),m.set(20,ka),m.set(23,z),m.set(24,la),m.set(25,oa),m.set(26,ma),m.set(27,na),m.set(28,sa),m.set(29,ta),m.set(30,U),m.set(31,wa),m.set(32,Q),m.set(33,ua),m.set(34,va),m.set(35,ra),m.set(36,pa),m.set(37,qa),m.set(44,xa),m.set(45,ya),m.set(46,za),m.set(53,R),m.set(64,V),m.set(65,W),m.set(76,A),m.set(78,A),q.set(38,J),q.set(39,B),q.set(40,E),q.set(41,H),
q.set(42,C),q.set(43,K),q.set(47,D),q.set(54,G),q.set(55,F),q.set(58,L),q.set(66,J),q.set(67,B),q.set(68,E),q.set(69,H),q.set(70,C),q.set(71,K),q.set(72,D),q.set(73,G),q.set(74,F),q.set(75,L));var e=O(a,66<=d&&75>=d);const {outputPixelType:f="f32"}=b,c=!q.has(d)||b.processAsMultiband,g=c?a[0].pixels.length:1;b=[];for(let n=0;n<g;n++){var h=q.has(d)&&!c?a.flatMap(t=>t.pixels):a.map(t=>t.pixels[n]),l=!0;d===p.localConditionalOperation.setNull?(e=Aa(h,e,f),h=e.band,e=e.mask,l=!1):m.has(d)?h=m.get(d)(h,
e,"f64"):r.has(d)?h=d===p.localTrigonometricOperation.asin||d===p.localTrigonometricOperation.acos||d===p.localTrigonometricOperation.atanh?X(h,e,"f64",d):Y(h,e,"f64",r.get(d)):v.has(d)?h=Z(h,e,"f64",v.get(d)):q.has(d)?h=q.get(d)(h,e,"f64"):(h=h[0],l=!1);l&&d!==p.localLogicalOperation.isNull&&!N.has(d)&&(l=k.createEmptyBand(f,h.length),e||=(new Uint8Array(h.length)).fill(255),Ba(h,e,f,l),h=l);b.push(h)}a=a[0];return new k({width:a.width,height:a.height,pixelType:f,mask:d===p.localLogicalOperation.isNull?
null:e,pixels:b})}const N=new Map([[p.localTrigonometricOperation.acos,{domain:[0,Math.PI],isInteger:!1}],[p.localTrigonometricOperation.asin,{domain:[-Math.PI/2,Math.PI/2],isInteger:!1}],[p.localTrigonometricOperation.atan,{domain:[-Math.PI/2,Math.PI/2],isInteger:!1}],[p.localTrigonometricOperation.cos,{domain:[-1,1],isInteger:!1}],[p.localTrigonometricOperation.sin,{domain:[-1,1],isInteger:!1}],[p.localLogicalOperation.booleanAnd,{domain:[0,1],isInteger:!0}],[p.localLogicalOperation.booleanNot,
{domain:[0,1],isInteger:!0}],[p.localLogicalOperation.booleanOr,{domain:[0,1],isInteger:!0}],[p.localLogicalOperation.booleanXOr,{domain:[0,1],isInteger:!0}],[p.localLogicalOperation.equalTo,{domain:[0,1],isInteger:!0}],[p.localLogicalOperation.notEqual,{domain:[0,1],isInteger:!0}],[p.localLogicalOperation.greaterThan,{domain:[0,1],isInteger:!0}],[p.localLogicalOperation.greaterThanEqual,{domain:[0,1],isInteger:!0}],[p.localLogicalOperation.lessThan,{domain:[0,1],isInteger:!0}],[p.localLogicalOperation.lessThanEqual,
{domain:[0,1],isInteger:!0}],[p.localLogicalOperation.isNull,{domain:[0,1],isInteger:!0}]]),r=new Map,v=new Map,m=new Map,q=new Map;u.arithmetic=function(a,d,b){d=[null,1,2,3,23,5,44][d]??1;return M(a,d,{outputPixelType:b})};u.getOutputDomain=function(a){return N.get(a)};u.local=M;u.operandsCount=[0,2,2,2,1,2,1,1,1,1,1,2,2,1,2,2,2,2,1,2,2,1,1,2,2,1,1,1,2,2,1,1,1,2,2,1,1,1,999,999,999,999,999,999,2,1,2,999,1,1,2,1,1,1,999,999,1,1,999,1,1,2,999,999,2,2,999,999,999,999,999,999,999,999,999,999,3,999,
3];Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});