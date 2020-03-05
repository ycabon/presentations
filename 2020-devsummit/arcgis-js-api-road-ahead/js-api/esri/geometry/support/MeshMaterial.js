// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../Color ../../core/JSONSupport ../../core/lang ../../core/maybe ../../core/accessorSupport/decorators ./MeshTexture".split(" "),function(p,q,k,d,l,m,n,f,c,g){return function(h){function a(b){b=h.call(this,b)||this;b.color=null;b.colorTexture=null;b.normalTexture=null;b.alphaMode="auto";b.alphaCutoff=.5;b.doubleSided=!0;return b}k(a,h);e=a;a.prototype.clone=function(){return this.cloneWithDeduplication(null,
new Map)};a.prototype.cloneWithDeduplication=function(b,a){var c=f.isSome(b)?b.get(this):null;if(c)return c;a=new e(this.clonePropertiesWithDeduplication(a));f.isSome(b)&&b.set(this,a);return a};a.prototype.clonePropertiesWithDeduplication=function(a){return{color:n.clone(this.color),colorTexture:this.colorTexture?this.colorTexture.cloneWithDeduplication(a):null,normalTexture:this.normalTexture?this.normalTexture.cloneWithDeduplication(a):null,alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,
doubleSided:this.doubleSided}};var e;d([c.property({type:l,json:{write:!0}})],a.prototype,"color",void 0);d([c.property({type:g,json:{write:!0}})],a.prototype,"colorTexture",void 0);d([c.property({type:g,json:{write:!0}})],a.prototype,"normalTexture",void 0);d([c.property({json:{write:!0}})],a.prototype,"alphaMode",void 0);d([c.property({json:{write:!0}})],a.prototype,"alphaCutoff",void 0);d([c.property({json:{write:!0}})],a.prototype,"doubleSided",void 0);return a=e=d([c.subclass("esri.geometry.support.MeshMaterial")],
a)}(c.declared(m.JSONSupport))});