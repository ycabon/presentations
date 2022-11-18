import { ck as l } from './_virtual_index-1ea2035a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function e(r){let{r:n,g:a,b:o,a:e}=r;return e<1&&(n=Math.round(e*n+255*(1-e)),a=Math.round(e*a+255*(1-e)),o=Math.round(e*o+255*(1-e))),new l({r:n,g:a,b:o})}function u(t){const{r,g:n,b:a}=e(t);return .2126*r+.7152*n+.0722*a}

export { u };
