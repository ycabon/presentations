// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../core/Error ../../core/Logger ../../core/promiseUtils ../../core/urlUtils ../../core/accessorSupport/decorators ../../portal/Portal ../../portal/PortalItem".split(" "),function(m,c,n,g,p,q,r,t,k,u,f,v,l){Object.defineProperty(c,"__esModule",{value:!0});var w=t.getLogger("esri.layers.mixins.PortalLayer");c.PortalLayer=function(c){return function(c){function a(){return null!==
c&&c.apply(this,arguments)||this}n(a,c);Object.defineProperty(a.prototype,"portalItem",{set:function(h){h!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",h))},enumerable:!0,configurable:!0});a.prototype.readPortalItem=function(h,b,a){if(b.itemId)return new l({id:b.itemId,portal:a&&a.portal})};a.prototype.writePortalItem=function(a,b){a&&a.id&&(b.itemId=a.id)};a.prototype.loadFromPortal=function(a,b){return q(this,void 0,void 0,function(){var c,d;return p(this,function(e){switch(e.label){case 0:if(!this.portalItem||
!this.portalItem.id)return[2];e.label=1;case 1:return e.trys.push([1,4,,5]),[4,k.create(function(a){return m(["../../portal/support/layersLoader"],a)})];case 2:return c=e.sent(),k.throwIfAborted(b),[4,c.load({instance:this,supportedTypes:a.supportedTypes,validateItem:a.validateItem,supportsData:a.supportsData},b)];case 3:return[2,e.sent()];case 4:throw d=e.sent(),w.warn("Failed to load layer ("+this.title+", "+this.id+") portal item ("+this.portalItem.id+")\n  "+d),d;case 5:return[2]}})})};a.prototype.read=
function(a,b){b&&(b.layer=this);this.inherited(arguments)};a.prototype.write=function(a,b){var c=b&&b.portal,d=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||v.getDefault());return c&&d&&!u.hasSamePortal(d.restUrl,c.restUrl)?(b.messages&&b.messages.push(new r("layer:cross-portal","The layer '"+this.title+" ("+this.id+")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer",
{layer:this})),null):this.inherited(arguments)};g([f.property({type:l})],a.prototype,"portalItem",null);g([f.reader("web-document","portalItem",["itemId"])],a.prototype,"readPortalItem",null);g([f.writer("portalItem",{itemId:{type:String}})],a.prototype,"writePortalItem",null);return a=g([f.subclass("esri.layers.mixins.PortalLayer")],a)}(f.declared(c))}});