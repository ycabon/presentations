/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import{JSONSupport as o}from"../core/JSONSupport.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../config.js";import"../chunks/ensureType.js";let s=class extends o{constructor(r){super(r),this.adminTokenServiceUrl=null,this.currentVersion=null,this.hasPortal=null,this.hasServer=null,this.owningSystemUrl=null,this.owningTenant=null,this.server=null,this.shortLivedTokenValidity=null,this.tokenServiceUrl=null,this.webTierAuth=null}};r([t({json:{write:!0}})],s.prototype,"adminTokenServiceUrl",void 0),r([t({json:{write:!0}})],s.prototype,"currentVersion",void 0),r([t({json:{write:!0}})],s.prototype,"hasPortal",void 0),r([t({json:{write:!0}})],s.prototype,"hasServer",void 0),r([t({json:{write:!0}})],s.prototype,"owningSystemUrl",void 0),r([t({json:{write:!0}})],s.prototype,"owningTenant",void 0),r([t({json:{write:!0}})],s.prototype,"server",void 0),r([t({json:{write:!0}})],s.prototype,"shortLivedTokenValidity",void 0),r([t({json:{write:!0}})],s.prototype,"tokenServiceUrl",void 0),r([t({json:{write:!0}})],s.prototype,"webTierAuth",void 0),s=r([e("esri.identity.ServerInfo")],s);const i=s;export{i as default};
