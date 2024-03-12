// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../support/debugFlags"],function(m,n){function u(a,d,f,k,g){h&&(h(),h=null);const c=e.height,b=l;b.beginPath();b.lineWidth=1;b.strokeStyle=g;b.moveTo(a,c-f);b.lineTo(d,c-f);b.stroke();b.lineTo(d,c-k);b.stroke();b.lineTo(d,c-f);b.stroke();b.lineTo(a,c-f);b.stroke();b.lineTo(a,c-f);b.stroke();b.closePath()}let p=!1,q=!1,r=!1,t=!1,h=null,e,l;m.drawAccelerationStruct=function(a,d){if(q&&l){h&&(h(),h=null);var f=l,k=0;for(let g=0;g<a.accBinsNumX;g++)for(let c=0;c<a.accBinsNumY;c++){const b=
a.accBins[g][a.accBinsNumY-1-c];k+=b.length;const v=g*a.accBinsSizeX,x=(g+1)*a.accBinsSizeX,w=c*a.accBinsSizeY,y=(c+1)*a.accBinsSizeY;f.fillText(b.length.toFixed(),v+5,w+15);u(v,x,w,y,"blue")}f.fillText("total totalShownLabels: "+k,70,40);f.fillText("total visible labels: "+d.size,70,50);f.fillText("total numTests: "+a.accNumTests,70,30)}};m.drawPoly=function(a,d){p&&(d&&r||!d&&t)&&u(a.aabr[0],a.aabr[2],a.aabr[1],a.aabr[3],d?"green":"red")};m.prepare=function(a){r=n.debugFlags.DECONFLICTOR_SHOW_VISIBLE;
t=n.debugFlags.DECONFLICTOR_SHOW_INVISIBLE;p=r||t;q=n.debugFlags.DECONFLICTOR_SHOW_GRID;h=null;p||q?h=()=>{null==e&&(e=document.createElement("canvas"),e.setAttribute("id","debugCanvas2d"),a.surface.parentElement.style.position="relative",a.surface.parentElement.appendChild(e));var {state:d}=a;const {camera:f,pixelRatio:k}=d,{width:g,height:c}=f;d=c*k;e.setAttribute("width",`${g*k}px`);e.setAttribute("height",`${d}px`);e.setAttribute("style",`position:absolute;left:0px;top:0px;display:block;pointer-events:none;width:${g}px;height:${c}px`);
l=e.getContext("2d");l.clearRect(0,0,g,c);l.font="12px Arial"}:e&&(e.parentElement.removeChild(e),e=null)};Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});