// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/awaiterHelper ../../../core/tsSupport/generatorHelper ../../../request ../../../core/promiseUtils ../../webgl ../engine".split(" "),function(q,g,t,u,v,r,w,n,p){Object.defineProperty(g,"__esModule",{value:!0});var x=p.enums.WGLDrawPhase,y=function(g){function c(){var a=g.call(this)||this;a.visible=!1;return a}t(c,g);c.prototype.destroy=function(){this._readbackTexture&&(this._readbackTexture.dispose(),this._readbackTexture=
null,this._maskTexture.dispose(),this._maskTexture=null,this._overlayTexture.dispose(),this._overlayTexture=null,this._vertexArrayObject.dispose(),this._vertexArrayObject=null,this._program.dispose(),this._resourcesPromise=this._program=null)};Object.defineProperty(c.prototype,"magnifier",{get:function(){return this._magnifier},set:function(a){var d=this;this._magnifier=a;this._handle&&this._handle.remove();this._handle=a.watch("version",function(){d.visible=a.visible});this.visible=a.visible},enumerable:!0,
configurable:!0});c.prototype.doRender=function(a){var d=this.stage.context;if(!this._resourcesPromise)this._resourcesPromise=this._loadResources(q.toUrl("../../../images/magnifier/mask.png"),q.toUrl("../../../images/magnifier/overlay.png"));else if(a.drawPhase===x.MAP&&this._canRender()){this._updateResources(d);var m=this._magnifier,f=1/m.factor,e=Math.ceil(f*this.overlay.width),c=Math.ceil(f*this.overlay.height),b=a.state.size,h=a.pixelRatio,f=h*b[0];a=h*b[1];var k=m.position||{x:.5*b[0],y:.5*
b[1]},b=h*k.x,h=a-h*k.y,k=.5*e,l=.5*c;k>b?b=k:b>=f-k&&(b=f-k-1);l>h?h=l:h>=a-l&&(h=a-l-1);var k=b-k,l=h-l,g=this._readbackTexture;d.bindTexture(g,0);d.gl.copyTexImage2D(g.descriptor.target,0,g.descriptor.pixelFormat,k,l,e,c,0);e=(e=this.stage.background&&this.stage.background.color)?[e.a*e.r/255,e.a*e.g/255,e.a*e.b/255,e.a]:[1,1,1,1];c=-1+(b+m.offsetX)/f*2;m=-1+(h-m.offsetY)/a*2;f=this.overlay.width/f*2;a=this.overlay.height/a*2;b=this._program;d.bindVAO(this._vertexArrayObject);d.bindTexture(this._overlayTexture,
6);d.bindTexture(this._maskTexture,7);d.bindProgram(b);b.setUniform4fv("u_background",e);b.setUniform1i("u_readbackTexture",0);b.setUniform1i("u_overlyTexture",6);b.setUniform1i("u_maskTexture",7);b.setUniform2f("u_drawPos",c,m);b.setUniform1f("u_width",f);b.setUniform1f("u_height",a);d.setStencilTestEnabled(!1);d.drawArrays(5,0,4);d.bindVAO()}};c.prototype._canRender=function(){return this.mask&&this.overlay&&null!=this._magnifier};c.prototype._loadResources=function(a,d){return u(this,void 0,void 0,
function(){var c,f,e;return v(this,function(g){switch(g.label){case 0:return[4,w.all([r(a,{responseType:"image"}),r(d,{responseType:"image"})])];case 1:return c=g.sent(),f=c[0].data,e=c[1].data,this.mask=f,this.overlay=e,this.requestRender(),[2]}})})};c.prototype._updateResources=function(a){if(!this._readbackTexture){var d=1/this._magnifier.factor,c=Math.ceil(d*this.overlay.width),d=Math.ceil(d*this.overlay.height);this._program=p.createMagnifierProgram(a);var f=new Uint16Array([0,1,0,0,1,1,1,0]);
this._vertexArrayObject=new n.VertexArrayObject(a,p.magnifier.attributes,{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1,divisor:0}]},{geometry:n.BufferObject.createVertex(a,35044,f)});this._overlayTexture=new n.Texture(a,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!0},this.overlay);this._maskTexture=new n.Texture(a,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,
flipped:!0},this.mask);this._readbackTexture=new n.Texture(a,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:c,height:d})}};return c}(p.DisplayObject);g.default=y});