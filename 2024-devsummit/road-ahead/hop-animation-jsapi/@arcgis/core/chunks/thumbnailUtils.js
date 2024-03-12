/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const h={width:600,height:400},t=1.5;function i(i,e){e=e||h;let{width:d,height:g}=e;const n=d/g;return n<t?g=d/t:n>t&&(d=g*t),d>i.width&&(g*=i.width/d,d=i.width),g>i.height&&(d*=i.height/g,g=i.height),{width:Math.round(d),height:Math.round(g)}}export{i as g};
