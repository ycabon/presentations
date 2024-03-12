/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function o(o,l,c,r){const e=o.clone(),n=1<<e.level,t=e.col+l,w=e.row+c;return r&&t<0?(e.col=t+n,e.world-=1):t>=n?(e.col=t-n,e.world+=1):e.col=t,e.row=w,e}export{o as g};
