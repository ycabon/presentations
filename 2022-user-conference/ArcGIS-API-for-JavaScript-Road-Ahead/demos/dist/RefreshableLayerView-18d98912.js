import { B as e, C as d, D as n, g2 as a, aA as j, Z as s } from './_virtual_index-9b831d4a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const i=i=>{let c=class extends i{initialize(){this.handles.add(a((()=>this.layer),"refresh",(r=>{this.doRefresh(r.dataChanged).catch((r=>{j(r)||s.getLogger(this.declaredClass).error(r);}));})),"RefreshableLayerView");}};return e([d()],c.prototype,"layer",void 0),c=e([n("esri.layers.mixins.RefreshableLayerView")],c),c};

export { i };
