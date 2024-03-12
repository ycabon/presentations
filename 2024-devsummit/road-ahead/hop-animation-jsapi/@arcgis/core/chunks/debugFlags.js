/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as o}from"./tslib.es6.js";import r from"../core/Accessor.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";let e=class extends r{constructor(){super(...arguments),this.SCHEDULER_LOG_SLOW_TASKS=!1,this.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES=!1}};o([s()],e.prototype,"SCHEDULER_LOG_SLOW_TASKS",void 0),o([s()],e.prototype,"FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES",void 0),e=o([t("esri.views.support.DebugFlags")],e);const E=new e;export{E as d};
