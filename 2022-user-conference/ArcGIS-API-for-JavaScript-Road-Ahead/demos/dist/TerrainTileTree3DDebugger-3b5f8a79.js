import { b3 as l, b4 as h, r, bF as v, ph as f, B as e, D as n } from './_virtual_index-9b831d4a.js';
import { b } from './TileTreeDebugger-14f174e9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let m=class extends b{constructor(e){super(e),this.enablePolygons=!1;}initialize(){l((()=>this.enabled),(e=>this.view.basemapTerrain.renderPatchBorders=e),h);}getTiles(){const e=r(this.view.basemapTerrain.spatialReference)?this.view.basemapTerrain.spatialReference:null;return this.view.basemapTerrain.test.getRenderedTiles().map((r=>({...r,geometry:v.fromExtent(f(r.extent,e))})))}};m=e([n("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],m);

export { m as TerrainTileTree3DDebugger };
