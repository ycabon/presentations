// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/_base/lang ../core/lang ../core/accessorSupport/decorators ./PointCloudRenderer ./support/LegendOptions ./support/pointCloud/StopInfo".split(" "),function(n,p,h,c,k,d,b,e,l,m){return function(g){function a(a){a=g.call(this)||this;a.type="point-cloud-stretch";a.field=null;a.legendOptions=null;a.fieldTransformType=null;a.stops=null;return a}h(a,g);f=a;a.prototype.clone=function(){return new f(k.mixin(this.cloneProperties(),
{field:d.clone(this.field),fieldTransformType:d.clone(this.fieldTransformType),stops:d.clone(this.stops),legendOptions:d.clone(this.legendOptions)}))};c([b.property()],a.prototype,"type",void 0);c([b.property({json:{write:!0},type:String})],a.prototype,"field",void 0);c([b.property({type:l.default,json:{write:!0}})],a.prototype,"legendOptions",void 0);c([b.property({json:{read:e.fieldTransformTypeKebabDict.read,write:e.fieldTransformTypeKebabDict.write},type:String})],a.prototype,"fieldTransformType",
void 0);c([b.property({type:[m.default],json:{write:!0}})],a.prototype,"stops",void 0);return a=f=c([b.subclass("esri.renderers.PointCloudStretchRenderer")],a);var f}(b.declared(e))});