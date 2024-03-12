// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Logger ../../core/promiseUtils ../../core/reactiveUtils ../../core/has ../../core/RandomLCG ../../core/Error ../../core/accessorSupport/decorators/subclass".split(" "),function(c,d,e,f,k,l,m,g){return a=>{a=class extends a{initialize(){this.addHandles(f.on(()=>this.layer,"refresh",h=>{this.doRefresh(h.dataChanged).catch(b=>{e.isAbortError(b)||d.getLogger(this).error(b)})}),"RefreshableLayerView")}};return a=c.__decorate([g.subclass("esri.layers.mixins.RefreshableLayerView")],
a)}});