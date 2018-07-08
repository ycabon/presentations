// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require ../core/Collection ../core/lang ../core/promiseUtils ./Layer ./mixins/ScaleRangeLayer ./graphics/controllers/MemoryController ../Graphic ../symbols/support/ElevationInfo".split(" "),function(f,g,h,e,k,l,m,n,p){return k.createSubclass([l],{declaredClass:"esri.layers.GraphicsLayer",getDefaults:function(a){return h.mixin(this.inherited(arguments),{graphics:[]})},destroy:function(){this.removeAll()},_gfxHdl:null,properties:{elevationInfo:{type:p,value:null},graphics:{type:g.ofType(n),
set:function(a){var b=this._get("graphics");b||(a.forEach(function(a){a.layer=this},this),this._gfxHdl=a.on("change",function(a){var b,c,d;d=a.added;for(b=0;c=d[b];b++)c.layer=this;d=a.removed;for(b=0;c=d[b];b++)c.layer=null}.bind(this)),this._set("graphics",a),b=a);b.removeAll();b.addMany(a)}},screenSizePerspectiveEnabled:!0,type:{readOnly:!0,value:"graphics"}},add:function(a){this.graphics.add(a);return this},addMany:function(a){this.graphics.addMany(a);return this},removeAll:function(){this.graphics.removeAll();
return this},createGraphicsController:function(a){return e.resolve(new m({layer:this,layerView:a.layerView,graphics:this.graphics}))},remove:function(a){this.graphics.remove(a)},removeMany:function(a){this.graphics.removeMany(a)},importLayerViewModule:function(a){switch(a.type){case "2d":return e.create(function(a){f(["../views/2d/layers/GraphicsLayerView2D"],a)});case "3d":return e.create(function(a){f(["../views/3d/layers/GraphicsLayerView3D"],a)})}},graphicChanged:function(a){this.emit("graphic-update",
a)}})});