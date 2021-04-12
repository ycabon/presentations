import { U } from './_virtual_index-2683c931.js';
import { a as h, h as h$1, o, r } from './FramebufferObject-c19fef9d.js';
import { n as n$1 } from './Program-9cec60fc.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function n(n){const a=new Image;if(a.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",a.width=5,a.height=5,await a.decode(),!n.gl)return !0;const s=new h(n,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),p=h$1.createVertex(n,35044,new Uint16Array([0,0,1,0,0,1,1,1])),m=new o(n,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:p}),d=new n$1(n,"\n  precision highp float;\n\n  attribute vec2 a_pos;\n  varying vec2 v_uv;\n\n  void main() {\n    v_uv = a_pos;\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ","\n  precision highp float;\n\n  varying vec2 v_uv;\n  uniform sampler2D u_texture;\n\n  void main() {\n    gl_FragColor = texture2D(u_texture, v_uv);\n  }\n  ",{a_pos:0});n.bindProgram(d);const g=new r(n,{dataType:5121,pixelFormat:6408,preMultiplyAlpha:!1,wrapMode:33071,samplingMode:9729},a);n.bindTexture(g,0),d.setUniform1i("u_texture",0);const c=n.getBoundFramebufferObject(),{x:u,y:f,width:l,height:w}=n.getViewport();n.bindFramebuffer(s),n.setViewport(0,0,1,1),n.bindVAO(m),n.drawArrays(5,0,4);const h$2=new Uint8Array(4);return s.readPixels(0,0,1,1,6408,5121,h$2),d.dispose(),m.dispose(!1),p.dispose(),s.dispose(),g.dispose(),n.setViewport(u,f,l,w),n.bindFramebuffer(c),a.src="",255===h$2[0]}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function t(t,r){const{data:a}=await U(t,{responseType:"image",...r});return a}

export { n, t };
