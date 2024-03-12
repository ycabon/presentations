// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(k,f){async function g(b){const {BlobReader:c,ZipReader:d,BlobWriter:l}=await new Promise((a,e)=>k(["./zipjs-wrapper"],a,e)),h=[];b=new c(b);(await (new d(b)).getEntries()).forEach(a=>{if(!a.directory&&!/^__MACOS/i.test(a.filename)){var e=new l;(e=a.getData?.(e).then(m=>new File([m],a.filename)))&&h.push(e)}});return Promise.all(h)}f.extractZipFile=g;f.extractZipFiles=async function(b){const c=[];for(const d of b)d.name.toLowerCase().endsWith(".zip")?c.push(g(d)):
c.push(Promise.resolve(d));return(await Promise.all(c)).flat()};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});