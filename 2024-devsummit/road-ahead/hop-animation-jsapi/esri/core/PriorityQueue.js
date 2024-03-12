// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(function(){class m{constructor(a=n){this._data=[];this._compare=a}get size(){return this._data.length}enqueue(a){if(null!=a){var {_data:b,_compare:h}=this;b.push(a);a=b.length-1>>>0;for(var c=b[a];0<a;){const e=a-1>>1,f=b[e];if(0>=h(f,c))b[e]=c,b[a]=f,a=e;else break}}}dequeue(){const {_data:a,_compare:b}=this,h=a[0];var c=a.pop();if(0===a.length)return h;a[0]=c;c=0;const e=a.length,f=a[0];let k;let d=null;for(;;){var g=2*c+1;const l=2*c+2;d=null;g<e&&(k=a[g],0<b(k,f)&&(d=g));l<e&&(g=a[l],null===
d&&0>=b(g,f)||null!==d&&0>=b(g,k))&&(d=l);if(null===d)break;a[c]=a[d];a[d]=f;c=d}return h}}const n=(a,b)=>a<b?-1:a>b?1:0;return m});