// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/assignHelper ../../Color ../../core/maybe ../../core/accessorSupport/decorators ./MeshMaterial ./MeshTexture".split(" "),function(p,q,k,d,l,m,g,c,n,e){return function(h){function a(b){b=h.call(this,b)||this;b.emissiveColor=null;b.emissiveTexture=null;b.occlusionTexture=null;b.metallic=1;b.roughness=1;b.metallicRoughnessTexture=null;return b}k(a,h);f=a;a.prototype.clone=function(){return this.cloneWithDeduplication(null,
new Map)};a.prototype.cloneWithDeduplication=function(b,a){var c=g.isSome(b)?b.get(this):null;if(c)return c;a=new f(this.clonePropertiesWithDeduplication(a));g.isSome(b)&&b.set(this,a);return a};a.prototype.clonePropertiesWithDeduplication=function(a){return l({},this.inherited(arguments),{emissiveColor:this.emissiveColor?this.emissiveColor.clone():null,emissiveTexture:this.emissiveTexture?this.emissiveTexture.cloneWithDeduplication(a):null,occlusionTexture:this.occlusionTexture?this.occlusionTexture.cloneWithDeduplication(a):
null,metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:this.metallicRoughnessTexture?this.metallicRoughnessTexture.cloneWithDeduplication(a):null})};var f;d([c.property({type:m,json:{write:!0}})],a.prototype,"emissiveColor",void 0);d([c.property({type:e,json:{write:!0}})],a.prototype,"emissiveTexture",void 0);d([c.property({type:e,json:{write:!0}})],a.prototype,"occlusionTexture",void 0);d([c.property({type:Number,json:{write:!0},range:{min:0,max:1}})],a.prototype,"metallic",
void 0);d([c.property({type:Number,json:{write:!0},range:{min:0,max:1}})],a.prototype,"roughness",void 0);d([c.property({type:e,json:{write:!0}})],a.prototype,"metallicRoughnessTexture",void 0);return a=f=d([c.subclass("esri.geometry.support.MeshMaterialMetallicRoughness")],a)}(c.declared(n))});