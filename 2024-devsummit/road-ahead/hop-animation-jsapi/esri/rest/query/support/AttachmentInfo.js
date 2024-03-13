// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/RandomLCG ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../../layers/support/exifUtils".split(" "),function(b,a,c,f,l,m,g,h){var e;const k={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,
rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};a=e=class extends a.JSONSupport{constructor(d){super(d);this.url=this.size=this.parentObjectId=this.parentGlobalId=this.name=this.keywords=this.globalId=this.id=this.exifInfo=this.contentType=null}get orientationInfo(){var {exifInfo:d}=this;d=h.getExifValue({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:d});return k[d]||null}clone(){return new e({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,
globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};b.__decorate([c.property({type:String})],a.prototype,"contentType",void 0);b.__decorate([c.property()],a.prototype,"exifInfo",void 0);b.__decorate([c.property({readOnly:!0})],a.prototype,"orientationInfo",null);b.__decorate([c.property({type:f.Integer})],a.prototype,"id",void 0);b.__decorate([c.property({type:String})],a.prototype,"globalId",
void 0);b.__decorate([c.property({type:String})],a.prototype,"keywords",void 0);b.__decorate([c.property({type:String})],a.prototype,"name",void 0);b.__decorate([c.property({json:{read:!1}})],a.prototype,"parentGlobalId",void 0);b.__decorate([c.property({json:{read:!1}})],a.prototype,"parentObjectId",void 0);b.__decorate([c.property({type:f.Integer})],a.prototype,"size",void 0);b.__decorate([c.property({json:{read:!1}})],a.prototype,"url",void 0);return a=e=b.__decorate([g.subclass("esri.layers.support.AttachmentInfo")],
a)});