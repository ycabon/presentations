// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["./Dictionary"],function(b){class a extends b{constructor(c,d,e,f,g,h,k){super();this.attachmentUrl=g;this.declaredClass="esri.arcade.Attachment";this.immutable=!1;this.setField("id",c);this.setField("name",d);this.setField("contenttype",e);this.setField("size",f);this.setField("exifinfo",h);this.setField("keywords",k);this.immutable=!0}deepClone(){return new a(this.field("id"),this.field("name"),this.field("contenttype"),this.field("size"),this.attachmentUrl,this.field("exifinfo")?.deepClone()??
null,this.field("keywords"))}}return a});