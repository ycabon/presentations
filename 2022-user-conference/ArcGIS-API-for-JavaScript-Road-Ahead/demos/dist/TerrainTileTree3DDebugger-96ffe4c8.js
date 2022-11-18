import { b7 as l, b8 as h, m as r, bJ as v, ox as f, u as e, z as n } from './_virtual_index-1ea2035a.js';
import { b } from './TileTreeDebugger-53267901.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let m=class extends b{constructor(e){super(e),this.enablePolygons=!1;}initialize(){l((()=>this.enabled),(e=>this.view.basemapTerrain.renderPatchBorders=e),h);}getTiles(){const e=r(this.view.basemapTerrain.spatialReference)?this.view.basemapTerrain.spatialReference:null;return this.view.basemapTerrain.test.getRenderedTiles().map((r=>({...r,geometry:v.fromExtent(f(r.extent,e))})))}};m=e([n("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],m);

export { m as TerrainTileTree3DDebugger };
