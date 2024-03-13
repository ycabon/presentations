// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../../chunks/tslib.es6 ../../../../Graphic ../../../../core/Accessor ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ./createFlowStyle ./dataUtils ./FlowContainer ./FlowStrategy".split(" "),function(c,m,b,h,d,v,w,x,n,p,l,q,r){b=class extends b{constructor(){super(...arguments);this._loadImagery=(a,e,f,g,k)=>l.loadImagery(this.layer,
a,e,f,g,k);this._createFlowMesh=(a,e,f,g)=>this.layer.createFlowMesh({meshType:a,flowData:f,simulationSettings:e},{signal:g});this.attached=!1;this.type="flow";this.timeExtent=null;this.redrawOrRefetch=async()=>{this._updateVisualization()}}get updating(){return!this.attached||this._strategy.updating}attach(){const {layer:a}=this,e=()=>{this._loadImagery=(f,g,k,t,u)=>l.loadImagery(a,f,g,k,t,u);this._updateVisualization()};"multidimensionalDefinition"in a?this.addHandles(h.watch(()=>a.multidimensionalDefinition,
e)):this.addHandles([h.watch(()=>a.mosaicRule,e),h.watch(()=>a.rasterFunction,e),h.watch(()=>a.definitionExpression,e)]);this.container=new q;this._strategy=new r({flowContainer:this.container});this._updateVisualization()}detach(){this._strategy.destroy();this.container?.removeAllChildren();this.container=null;this.removeHandles()}update(a){a.stationary?this._strategy.update(a):this.layerView.requestUpdate()}hitTest(a){return new m({attributes:{},geometry:a.clone(),layer:this.layer})}moveEnd(){}async doRefresh(){}_updateVisualization(){var a=
this.layer.renderer;null!=a&&"flow"===a.type&&(a=p(a,{loadImagery:this._loadImagery,createFlowMesh:this._createFlowMesh,timeExtent:this.timeExtent}),this.container.flowStyle=a,this.layerView.requestUpdate())}};c.__decorate([d.property()],b.prototype,"_strategy",void 0);c.__decorate([d.property()],b.prototype,"attached",void 0);c.__decorate([d.property()],b.prototype,"container",void 0);c.__decorate([d.property()],b.prototype,"layer",void 0);c.__decorate([d.property()],b.prototype,"layerView",void 0);
c.__decorate([d.property()],b.prototype,"type",void 0);c.__decorate([d.property()],b.prototype,"updating",null);c.__decorate([d.property()],b.prototype,"timeExtent",void 0);return b=c.__decorate([n.subclass("esri.views.2d.engine.flow.FlowView2D")],b)});