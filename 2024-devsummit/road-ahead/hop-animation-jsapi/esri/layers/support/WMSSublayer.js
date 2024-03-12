// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Collection ../../core/Identifiable ../../core/MultiOriginJSONSupport ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/RandomLCG ../../core/has ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/ensureType ../../geometry/Extent".split(" "),function(d,l,b,m,f,e,n,v,w,p,q,r,t){var k;let u=0;b=k=class extends b.IdentifiableMixin(m.MultiOriginJSONSupport){constructor(a){super(a);
this.legendUrl=this.fullExtents=this.fullExtent=this.dimensions=this.description=null;this.legendEnabled=!0;this.layer=null;this.minScale=this.maxScale=0;this.parent=this.name=null;this.queryable=this.popupEnabled=!1;this.title=this.spatialReferences=this.sublayers=null;this.addHandles([f.on(()=>this.sublayers,"after-add",({item:c})=>{c.parent=this;c.layer=this.layer},f.sync),f.on(()=>this.sublayers,"after-remove",({item:c})=>{c.layer=c.parent=null},f.sync),f.watch(()=>this.sublayers,(c,g)=>{if(g)for(const h of g)h.layer=
h.parent=null;if(c)for(const h of c)h.parent=this,h.layer=this.layer},f.sync),f.watch(()=>this.layer,c=>{if(this.sublayers)for(const g of this.sublayers)g.layer=c},f.sync)])}get id(){const a=this._get("id");return null==a?u++:a}set id(a){this._set("id",a)}readLegendUrl(a,c){return c.legendUrl??c.legendURL??null}get effectiveScaleRange(){const {minScale:a,maxScale:c}=this;return{minScale:a,maxScale:c}}castSublayers(a){return r.ensureType(l.ofType(k),a)}set visible(a){this._setAndNotifyLayer("visible",
a)}clone(){const a=new k;this.hasOwnProperty("description")&&(a.description=this.description);this.hasOwnProperty("fullExtent")&&(a.fullExtent=this.fullExtent.clone());this.hasOwnProperty("fullExtents")&&(a.fullExtents=this.fullExtents?.map(c=>c.clone())??null);this.hasOwnProperty("legendUrl")&&(a.legendUrl=this.legendUrl);this.hasOwnProperty("legendEnabled")&&(a.legendEnabled=this.legendEnabled);this.hasOwnProperty("layer")&&(a.layer=this.layer);this.hasOwnProperty("name")&&(a.name=this.name);this.hasOwnProperty("parent")&&
(a.parent=this.parent);this.hasOwnProperty("queryable")&&(a.queryable=this.queryable);this.hasOwnProperty("sublayers")&&(a.sublayers=this.sublayers?.map(c=>c.clone()));this.hasOwnProperty("spatialReferences")&&(a.spatialReferences=this.spatialReferences?.map(c=>c));this.hasOwnProperty("visible")&&(a.visible=this.visible);this.hasOwnProperty("title")&&(a.title=this.title);return a}_setAndNotifyLayer(a,c){const g=this.layer;this._get(a)!==c&&(this._set(a,c),g&&g.emit("wms-sublayer-update",{propertyName:a,
id:this.id}))}};d.__decorate([e.property()],b.prototype,"description",void 0);d.__decorate([e.property({readOnly:!0})],b.prototype,"dimensions",void 0);d.__decorate([e.property({type:t,json:{name:"extent"}})],b.prototype,"fullExtent",void 0);d.__decorate([e.property()],b.prototype,"fullExtents",void 0);d.__decorate([e.property({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],b.prototype,"id",null);d.__decorate([e.property({type:String,json:{name:"legendUrl",
write:{ignoreOrigin:!0}}})],b.prototype,"legendUrl",void 0);d.__decorate([p.reader("legendUrl",["legendUrl","legendURL"])],b.prototype,"readLegendUrl",null);d.__decorate([e.property({type:Boolean,json:{name:"showLegend",origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],b.prototype,"legendEnabled",void 0);d.__decorate([e.property()],b.prototype,"layer",void 0);d.__decorate([e.property()],b.prototype,"maxScale",void 0);d.__decorate([e.property()],b.prototype,"minScale",void 0);
d.__decorate([e.property({readOnly:!0})],b.prototype,"effectiveScaleRange",null);d.__decorate([e.property({type:String,json:{write:{ignoreOrigin:!0}}})],b.prototype,"name",void 0);d.__decorate([e.property()],b.prototype,"parent",void 0);d.__decorate([e.property({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],b.prototype,"popupEnabled",void 0);d.__decorate([e.property({type:Boolean,json:{write:{ignoreOrigin:!0}}})],b.prototype,"queryable",void 0);d.__decorate([e.property()],
b.prototype,"sublayers",void 0);d.__decorate([n.cast("sublayers")],b.prototype,"castSublayers",null);d.__decorate([e.property({type:[Number],json:{read:{source:"spatialReferences"}}})],b.prototype,"spatialReferences",void 0);d.__decorate([e.property({type:String,json:{write:{ignoreOrigin:!0}}})],b.prototype,"title",void 0);d.__decorate([e.property({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],b.prototype,"visible",null);return b=k=d.__decorate([q.subclass("esri.layers.support.WMSSublayer")],
b)});