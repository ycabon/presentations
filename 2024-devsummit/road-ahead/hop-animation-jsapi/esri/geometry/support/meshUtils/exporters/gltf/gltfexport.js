// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/urlUtils ./index ./node ./asset ./scene".split(" "),function(c,h,d,k,l,m){class n{constructor(a,b){this._file={type:"model/gltf-binary",data:a};this.origin=b}buffer(){return Promise.resolve(this._file)}download(a){h.downloadBlobAsFile(new Blob([this._file.data],{type:this._file.type}),a)}}c.toBinaryGLTF=function(a,b){const e=new l.Asset,f=new m.Scene;e.addScene(f);f.addNode(new k.Node(a));return d.exportGLB(e,b).then(g=>new n(g[d.modelNameGlb],g.origin))};Object.defineProperty(c,
Symbol.toStringTag,{value:"Module"})});