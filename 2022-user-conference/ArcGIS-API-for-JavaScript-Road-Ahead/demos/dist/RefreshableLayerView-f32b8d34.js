import { u as e, y, z as n, gD as a, aC as j, $ as s } from './_virtual_index-1ea2035a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const i=i=>{let c=class extends i{initialize(){this.handles.add(a((()=>this.layer),"refresh",(r=>{this.doRefresh(r.dataChanged).catch((r=>{j(r)||s.getLogger(this.declaredClass).error(r);}));})),"RefreshableLayerView");}};return e([y()],c.prototype,"layer",void 0),c=e([n("esri.layers.mixins.RefreshableLayerView")],c),c};

export { i };
