/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as o}from"./tslib.es6.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";const s=s=>{let e=class extends s{constructor(){super(...arguments),this.make=null,this.model=null,this.focalLength=null,this.pixelSize=null,this.rows=null,this.cols=null}};return o([r({json:{write:!0}})],e.prototype,"make",void 0),o([r({json:{write:!0}})],e.prototype,"model",void 0),o([r({json:{write:!0}})],e.prototype,"focalLength",void 0),o([r({json:{write:!0}})],e.prototype,"pixelSize",void 0),o([r({json:{write:!0}})],e.prototype,"rows",void 0),o([r({json:{write:!0}})],e.prototype,"cols",void 0),e=o([t("esri.rest.support.CameraInfoMixin")],e),e};export{s as C};
