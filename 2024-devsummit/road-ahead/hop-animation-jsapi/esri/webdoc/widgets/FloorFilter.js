// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,e,c,h,k,f){var d;a=d=class extends a.JSONSupport{constructor(g){super(g);this.pinnedLevels=this.minimized=this.longNames=this.enabled=!1;this.level=this.facility=this.site=null}clone(){return new d(e.clone({enabled:this.enabled,longNames:this.longNames,minimized:this.minimized,pinnedLevels:this.pinnedLevels,
site:this.site,facility:this.facility,level:this.level}))}};b.__decorate([c.property({type:Boolean,json:{read:{source:"enabled"},write:{target:"enabled"}}})],a.prototype,"enabled",void 0);b.__decorate([c.property({type:Boolean,json:{read:{source:"longNames"},write:{target:"longNames"}}})],a.prototype,"longNames",void 0);b.__decorate([c.property({type:Boolean,json:{read:{source:"minimized"},write:{target:"minimized"}}})],a.prototype,"minimized",void 0);b.__decorate([c.property({type:Boolean,json:{read:{source:"pinnedLevels"},
write:{target:"pinnedLevels"}}})],a.prototype,"pinnedLevels",void 0);b.__decorate([c.property({type:String,json:{read:{source:"site"},write:{target:"site"}}})],a.prototype,"site",void 0);b.__decorate([c.property({type:String,json:{read:{source:"facility"},write:{target:"facility"}}})],a.prototype,"facility",void 0);b.__decorate([c.property({type:String,json:{read:{source:"level"},write:{target:"level"}}})],a.prototype,"level",void 0);return a=d=b.__decorate([f.subclass("esri.webdoc.widgets.FloorFilter")],
a)});