// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/asyncUtils ../../../core/maybe ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass".split(" "),function(k,b,l,p,q,e,m,n,r,u,v,w,t){b.ElevationProfileView=class extends p{constructor(a){super(a);this._loadingTask=this._implementation=null}initialize(){this.addHandles(n.watch(()=>
({tool:this.tool,view:this.tool.viewModel.view,visible:this.tool.visible&&!!this.tool.viewModel.view?.ready}),({tool:a,view:c,visible:d})=>{null!=c&&d?this._show(c,a):this._hide()},n.syncAndInitial))}destroy(){this._hide()}_show(a,c){this._loadingTask=e.abortMaybe(this._loadingTask);this._loadingTask=q.createTask(async d=>{if("2d"===a.type){var h=new Promise((f,g)=>k(["./ElevationProfileView2D"],f,g));this._implementation=new ((await m.whenOrAbort(h,d)).ElevationProfileView2D)(a,c)}else"3d"===a.type&&
(h=new Promise((f,g)=>k(["./ElevationProfileView3D"],f,g)),this._implementation=new ((await m.whenOrAbort(h,d)).ElevationProfileView3D)(a,c))})}_hide(){this._loadingTask=e.abortMaybe(this._loadingTask);this._implementation=e.destroyMaybe(this._implementation)}};l.__decorate([r.property()],b.ElevationProfileView.prototype,"tool",void 0);b.ElevationProfileView=l.__decorate([t.subclass("esri.widgets.ElevationProfile.support.ElevationProfileView")],b.ElevationProfileView);Object.defineProperty(b,Symbol.toStringTag,
{value:"Module"})});