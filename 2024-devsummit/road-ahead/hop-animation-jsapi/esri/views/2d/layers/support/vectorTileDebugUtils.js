// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./DebugOverlay"],function(u,n){const v=()=>[1,.5,0,1,1,0,0,1,0,1,.5,1,0,.5,0,1],w=()=>[.05,.01,.15,.2];u.showCollisionBoxes=function(t,x){t.container.addChild(new n({getMesh:a=>{const {pixelRatio:p}=a.state;a=0;const k=[],l=[];for(var f of t._vectorTileContainer.children)if(f.symbols)for(var [,q]of f.symbols)for(var m of q)for(const h of m.colliders){const c=(h.xScreen+h.dxScreen)*p,b=(h.yScreen+h.dyScreen)*p,e=h.width*p,g=h.height*p;var d=.5<m.unique.parts[h.partIndex].targetOpacity;
if(!d&&"all"!==x)continue;const r=n.makeFlags(d?2:0,d?3:0);k.push(c,b,r,c+e,b,r,c,b+g,r,c+e,b+g,r);l.push(a,a+1,a+2,a+1,a+3,a+2);a+=4;d=n.makeFlags(d?3:1,d?3:0);k.push(c,b,d,c+e,b,d,c,b+1,d,c+e,b+1,d);l.push(a,a+1,a+2,a+1,a+3,a+2);a+=4;k.push(c,b+g-1,d,c+e,b+g-1,d,c,b+g,d,c+e,b+g,d);l.push(a,a+1,a+2,a+1,a+3,a+2);a+=4;k.push(c,b,d,c+1,b,d,c,b+g,d,c+1,b+g,d);l.push(a,a+1,a+2,a+1,a+3,a+2);a+=4;k.push(c+e-1,b,d,c+e,b,d,c+e-1,b+g,d,c+e,b+g,d);l.push(a,a+1,a+2,a+1,a+3,a+2);a+=4}({symbolFader:f}=t._vectorTileContainer);
if(f){const [h,c]=f.decluttererOffset;f=n.makeFlags(2,3);q=256+h;m=256+c;for(const b of[-3,3])for(const e of[-3,3])k.push(256,256,f,256+b,256+e,f,q,m,f,q+b,m+e,f),l.push(a,a+1,a+2,a+1,a+3,a+2),a+=4}return{vertexData:new Int16Array(k),indexData:new Uint32Array(l)}},getColors:v,getOpacities:w}))};Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});