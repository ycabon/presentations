// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Accessor ../../../core/accessorSupport/decorators ../../../layers/support/LOD".split(" "),function(v,w,r,h,t,g,u){return function(k){function b(){var a=null!==k&&k.apply(this,arguments)||this;a._lodByScale={};a._scales=[];a.effectiveLODs=null;a.effectiveMinZoom=-1;a.effectiveMaxZoom=-1;a.effectiveMinScale=0;a.effectiveMaxScale=0;a.enabled=!0;a.lods=null;a.minZoom=-1;a.maxZoom=
-1;a.minScale=0;a.maxScale=0;a.snapToZoom=!0;return a}r(b,k);l=b;b.prototype.initialize=function(){var a=this,c=this.lods,d=this.minScale,b=this.maxScale,e=this.minZoom,f=this.maxZoom,g=-1,h=-1,k=!1,l=!1;0!==d&&0!==b&&d<b&&(b=[b,d],d=b[0],b=b[1]);if(c&&c.length){c=c.map(function(a){return a.clone()});c.sort(function(a,c){return c.scale-a.scale});c.forEach(function(a,c){return a.level=c});for(var n,p=0,q=c;p<q.length;p++){var m=q[p];!k&&0<d&&d>=m.scale&&(g=m.level,k=!0);!l&&0<b&&b>=m.scale&&(h=n?n.level:
-1,l=!0);n=m}-1===e&&(e=0===d?0:g);-1===f&&(f=0===b?c.length-1:h);e=Math.max(e,0);e=Math.min(e,c.length-1);f=Math.max(f,0);f=Math.min(f,c.length-1);e>f&&(d=[f,e],e=d[0],f=d[1]);d=c[e].scale;b=c[f].scale;c.splice(0,e);c.splice(f-e+1,c.length);c.forEach(function(c,d){a._lodByScale[c.scale]=c;a._scales[d]=c.scale});this._set("effectiveLODs",c);this._set("effectiveMinZoom",e);this._set("effectiveMaxZoom",f)}this._set("effectiveMinScale",d);this._set("effectiveMaxScale",b)};b.prototype.constrain=function(a,
c){if(!this.enabled||c&&a.scale===c.scale)return a;var d=this.effectiveMinScale,b=this.effectiveMaxScale,e=a.targetGeometry,f=c&&c.targetGeometry,g=0!==d&&a.scale>d;if(0!==b&&a.scale<b||g)d=g?d:b,f&&(c=(d-c.scale)/(a.scale-c.scale),e.x=f.x+(e.x-f.x)*c,e.y=f.y+(e.y-f.y)*c),a.scale=d;this.snapToZoom&&this.effectiveLODs&&(a.scale=this._getClosestScale(a.scale));return a};b.prototype.fit=function(a){if(!this.effectiveLODs)return this.constrain(a,null);var c=a.scale,b=this.scaleToZoom(c);a.scale=.99<Math.abs(b-
Math.round(b))?this.snapToPreviousScale(c):this.zoomToScale(Math.round(b));return a};b.prototype.zoomToScale=function(a){if(!this.effectiveLODs)return 0;a-=this.effectiveMinZoom;a=Math.max(0,a);var c=this._scales;if(0>=a)return c[0];if(a>=c.length)return c[c.length-1];var b=Math.round(a);return c[b]+(b-a)*(c[Math.round(a-.5)]-c[b])};b.prototype.scaleToZoom=function(a){if(!this.effectiveLODs)return-1;var c=this._scales,b=0,g=c.length-1,e,f;for(b;b<g;b++){e=c[b];f=c[b+1];if(e<=a)return b+this.effectiveMinZoom;
if(f===a)return b+1+this.effectiveMinZoom;if(e>a&&f<a)return b+1-(a-f)/(e-f)+this.effectiveMinZoom}return b};b.prototype.snapToClosestScale=function(a){if(!this.effectiveLODs)return a;a=this.scaleToZoom(a);return this.zoomToScale(Math.round(a))};b.prototype.snapToNextScale=function(a,b){void 0===b&&(b=.5);if(!this.effectiveLODs)return a*b;a=Math.round(this.scaleToZoom(a));return this.zoomToScale(a+1)};b.prototype.snapToPreviousScale=function(a,b){void 0===b&&(b=2);if(!this.effectiveLODs)return a*
b;a=Math.round(this.scaleToZoom(a));return this.zoomToScale(a-1)};b.prototype.clone=function(){return new l({enabled:this.enabled,lods:this.lods,minZoom:this.minZoom,maxZoom:this.maxZoom,minScale:this.minScale,maxScale:this.maxScale})};b.prototype._getClosestScale=function(a){if(this._lodByScale[a])return this._lodByScale[a].scale;a=this._scales.reduce(function(b,d,g,e){return Math.abs(d-a)<=Math.abs(b-a)?d:b},this._scales[0]);return this._lodByScale[a].scale};h([g.property({readOnly:!0})],b.prototype,
"effectiveLODs",void 0);h([g.property({readOnly:!0})],b.prototype,"effectiveMinZoom",void 0);h([g.property({readOnly:!0})],b.prototype,"effectiveMaxZoom",void 0);h([g.property({readOnly:!0})],b.prototype,"effectiveMinScale",void 0);h([g.property({readOnly:!0})],b.prototype,"effectiveMaxScale",void 0);h([g.property()],b.prototype,"enabled",void 0);h([g.property({type:[u]})],b.prototype,"lods",void 0);h([g.property()],b.prototype,"minZoom",void 0);h([g.property()],b.prototype,"maxZoom",void 0);h([g.property()],
b.prototype,"minScale",void 0);h([g.property()],b.prototype,"maxScale",void 0);h([g.property()],b.prototype,"snapToZoom",void 0);return b=l=h([g.subclass("esri.views.2d.constraints.ZoomConstraint")],b);var l}(g.declared(t))});