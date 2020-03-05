// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ./DynamicLayerView3D ../../layers/ImageryLayerView".split(" "),function(u,v,p,m,f,g,n,q,c,r,t){return function(d){function b(){var a=null!==d&&d.apply(this,arguments)||this;a.updateWhenStationary=!0;a.redrawDebounced=n.debounce(function(l){return g(a,
void 0,void 0,function(){var a=this;return f(this,function(b){this.redraw(function(b,l){return a.redrawImage(b,{signal:l})},l);return[2]})})},2E3);return a}p(b,d);b.prototype.initialize=function(){var a=this;this.handles.add([q.whenOnce(this.view.basemapTerrain,"ready",function(){return a.initializeMaximumDataResolution()}),this.layer.on("redraw",function(){return a.redrawDebounced()})]);this.updatingHandles.add(this.layer,"exportImageServiceParameters.version",function(){a.updatingHandles.addPromise(a.refreshDebounced())});
this.updatingHandles.add(this,"timeExtent",function(){return a.updatingHandles.addPromise(a.refreshDebounced())})};b.prototype.initializeMaximumDataResolution=function(){var a=this.view.basemapTerrain.spatialReference,b=this.layer.fullExtent;b&&a.equals(b.spatialReference)&&(this.maximumDataResolution={x:this.layer.pixelSizeX,y:this.layer.pixelSizeY})};b.prototype.getFetchOptions=function(){return{timeExtent:this.timeExtent}};b.prototype.processResult=function(a,b,h){return g(this,void 0,void 0,function(){return f(this,
function(e){switch(e.label){case 0:if(!b.imageElement)return[3,1];a.image=b.imageElement;return[3,3];case 1:return a.image=document.createElement("canvas"),a.pixelData=b.pixelData,[4,this.redrawImage(a,{signal:h})];case 2:e.sent(),e.label=3;case 3:return[2]}})})};b.prototype.redrawImage=function(a,b){return g(this,void 0,void 0,function(){var h,e,g,c,k,d;return f(this,function(f){switch(f.label){case 0:if(!(a.image instanceof HTMLCanvasElement&&a.pixelData))return[2,n.reject()];h=a.image;e=h.getContext("2d");
return[4,this.layer.applyRenderer(a.pixelData,b)];case 1:return g=f.sent(),c=this.layer.applyFilter(g),k=c.pixelBlock,h.width=k.width,h.height=k.height,d=e.createImageData(k.width,k.height),d.data.set(c.pixelBlock.getAsRGBA()),e.putImageData(d,0,0),[2]}})})};m([c.property()],b.prototype,"layer",void 0);return b=m([c.subclass("esri.views.3d.layers.ImageryLayerView3D")],b)}(c.declared(t.ImageryLayerView(r)))});