// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../kernel ../../request ../../core/colorUtils ../../core/Error ../../core/has ../../libs/maquette/projection ../../libs/maquette/projector ./svgUtils ./utils".split(" "),function(t,y,z,u,A,B,H,C,D,E){function w(e,d){x.append(e,d);x.detach(d)}function F(e,d,b){return e?z(e,{responseType:"image"}).then(g=>{g=g.data;const q=g.width,a=g.height,l=q/a;let h=d;b&&(h=Math.min(h,Math.max(q,a)));return{image:g,width:1>=l?Math.ceil(h*l):h,height:1>=l?h:Math.ceil(h/l)}}):Promise.reject(new A("renderUtils: imageDataSize",
"href not provided."))}const x=C.createProjector();t.renderOnce=w;t.renderSymbol=function(e,d,b){const g=Math.ceil(d[0]),q=Math.ceil(d[1]);if(!e.some(a=>!!a.length))return null;d=b?.node||document.createElement("div");null!=b.opacity&&(d.style.opacity=b.opacity.toString());null!=b.effectView&&(d.style.filter=E.getCSSFilterFromEffectList(b.effectView));w(d,()=>D.renderSVG(e,g,q,b));return d};t.tintImageWithColor=function(e,d,b,g,q){return F(e,d,q).then(a=>{const l=a.width??d,h=a.height??d;var f;if(f=
a.image)f=b&&"ignore"!==g?"multiply"===g&&255===b.r&&255===b.g&&255===b.b&&1===b.a?!1:!0:!1;if(f){var c=a.image.width,m=a.image.height;B("edge")&&/\.svg$/i.test(e)&&(--c,--m);f=Math.ceil(l);var n=Math.ceil(h);var k=document.createElement("canvas");k.width=f;k.height=n;k.style.width=f+"px";k.style.height=n+"px";k=k.getContext("2d");k.clearRect(0,0,f,n);f=k;f.drawImage(a.image,0,0,c,m,0,0,l,h);n=f.getImageData(0,0,l,h);k=[b.r/255,b.g/255,b.b/255,b.a];const G=u.toHSV(b);for(let v=0;v<n.data.length;v+=
4){a=n.data;c=v;m=k;var p=G;switch(g){case "multiply":a[c]*=m[0];a[c+1]*=m[1];a[c+2]*=m[2];a[c+3]*=m[3];break;default:const r=u.toHSV({r:a[c],g:a[c+1],b:a[c+2]});r.h=p.h;r.s=p.s;r.v=r.v/100*p.v;p=u.toRGB(r);a[c]=p.r;a[c+1]=p.g;a[c+2]=p.b;a[c+3]*=m[3]}}f.putImageData(n,0,0);e=f.canvas.toDataURL("image/png")}else f=y.id?.findCredential(e),f?.token&&(a=e.includes("?")?"\x26":"?",e=`${e}${a}token=${f.token}`);return{url:e,width:l,height:h}}).catch(()=>({url:e,width:d,height:d}))};Object.defineProperty(t,
Symbol.toStringTag,{value:"Module"})});