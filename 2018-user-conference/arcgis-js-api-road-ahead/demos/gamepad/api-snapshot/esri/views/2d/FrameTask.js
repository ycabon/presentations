// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/scheduling"],function(k,l,h){return function(){function d(a){var b=this;this.view=a;this._frameTaskHandle=null;this.updateEnabled=this.stationary=!0;this.prepare=function(){b._updateParameters.state=b.view.state;b._updateParameters.stationary=b.view.stationary;b._updateParameters.pixelRatio=window.devicePixelRatio};this.update=function(){if(b.updateEnabled){for(var c=b.view,a=c.allLayerViews.toArray().filter(function(a){return a.isFulfilled()&&null==a.layerViews}),
d=a.length,f=c.state,e=0;e<a.length;e++)if(c=a[e],c.attached){var g=b._layerViewsState[c.uid];if(null==g||!b.stationary&&!c.moving)c.moving=!0,c.moveStart();g!==f.id&&c.viewChange();b.stationary&&c.moving&&(c.moving=!1,c.moveEnd());b._layerViewsState[c.uid]=f.id}f=b._layerViewsTrash;for(e=0;e<f.length;e++)c=f[e],b._detachLayerView(c);for(e=f.length=0;e<d;e++)c=a[e],c.isFulfilled()&&!c.attached&&b._attachLayerView(c);a=b._layerViewsToUpdate;d=a.slice();e=b._updateParameters;for(g=a.length=0;g<d.length;g++)c=
d[g],c.processUpdate(e);0===a.length&&0===f.length&&b._frameTaskHandle.pause()}};a.watch("ready",function(a){a?b.start():b.stop()})}d.prototype.destroy=function(){this.stop()};d.prototype.start=function(){var a=this;this._updateParameters={state:this.view.state,pixelRatio:window.devicePixelRatio,stationary:!0};this._layerViewsTrash=[];this._layerViewsToUpdate=[];this._layerViewsState={};this._allLayerViewsChangeHandle=this.view.allLayerViews.on("change",function(b){Array.prototype.push.apply(a._layerViewsTrash,
b.removed);a.requestFrame()});this._stationaryHandle=this.view.watch("stationary",function(b){a.stationary=b;a.requestFrame()});this._frameTaskHandle=h.addFrameTask(this)};d.prototype.stop=function(){var a=this;this._frameTaskHandle&&(this.view.allLayerViews.forEach(function(b){return a._detachLayerView(b)}),this._stationaryHandle.remove(),this._allLayerViewsChangeHandle.remove(),this._frameTaskHandle.remove(),this._updateParameters=this._stationaryHandle=this._allLayerViewsChangeHandle=this._frameTaskHandle=
this._layerViewsTrash=this._layerViewsToUpdate=this._layerViewsState=null,this.stationary=!0)};d.prototype.requestLayerViewUpdate=function(a){this._layerViewsToUpdate.push(a);this.requestFrame()};d.prototype.requestFrame=function(){this._frameTaskHandle&&this._frameTaskHandle.resume()};d.prototype._attachLayerView=function(a){a.attached||(a.attached=!0,a.moving=!1,a.attach())};d.prototype._detachLayerView=function(a){a.attached&&(a.detach(),a.attached=!1,a.moving=!1)};return d}()});