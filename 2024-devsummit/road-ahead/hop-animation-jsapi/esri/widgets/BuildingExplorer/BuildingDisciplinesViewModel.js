// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Accessor ../../core/Collection ../../core/collectionUtils ../../core/promiseUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ./support/buildingLayerUtils ./support/LayerTreeNode ./support/layerUtils".split(" "),function(h,d,m,p,q,k,v,w,x,r,t,l,u){d=class extends d{constructor(a){super(a);this.root=new l.LayerTreeNode;this.state="disabled";this._loadLayers=
u.createLoadLayersFunction();this.layers=new m}initialize(){this.addHandles(this.layers.on("change",()=>this._onLayersChange()));this._onLayersChange()}destroy(){this._set("state","disabled");this.root.destroy()}set layers(a){const b=this._get("layers");this._set("layers",p.referenceSetter(a,b))}_updateLayerTree(){this.root.destroy();this._set("root",new l.LayerTreeNode({collapsed:!1}));const a=new Map,b=1<this.layers.length?"modelName":"id";this.layers.forEach(c=>{const e=t.findFullModelSublayer(c);
this._addNodesForSublayers(e??c,this.root,a,b)});return this}_addNodeForLayer(a,b,c,e){const g=String(a[e]).toLowerCase();if(null!=g&&!a.isEmpty){var n=`${b.id}/${g}`,f=c.get(n);f||(f=new l.LayerTreeNode({id:g,level:b.level+1}),c.set(n,f));f.layers.push(a);b.children.push(f);this._addNodesForSublayers(a,f,c,e)}}_addNodesForSublayers(a,b,c,e){("building-scene"===a.type||"building-group"===a.type&&!a.isEmpty)&&a.sublayers.forEach(g=>this._addNodeForLayer(g,b,c,e))}async _onLayersChange(){this._set("state",
"loading");if(0!==this.layers.length)try{await this._loadLayers(this.layers),this._updateLayerTree(),this._set("state","ready")}catch(a){q.isAbortError(a)||this._set("state","failed")}}};h.__decorate([k.property({readOnly:!0})],d.prototype,"root",void 0);h.__decorate([k.property({type:m,nonNullable:!0})],d.prototype,"layers",null);h.__decorate([k.property({readOnly:!0,nonNullable:!0})],d.prototype,"state",void 0);return d=h.__decorate([r.subclass("esri.widgets.BuildingExplorer.BuildingDisciplineViewModel")],
d)});