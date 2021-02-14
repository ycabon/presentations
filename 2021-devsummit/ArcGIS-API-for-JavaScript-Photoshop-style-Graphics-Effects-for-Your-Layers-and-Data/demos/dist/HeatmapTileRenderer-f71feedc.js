import { y as e, A as i$1, U } from './_virtual:index-3cfe80ed.js';
import { a as a$1, r } from './heatmapUtils-911e3e5f.js';
import { o as o$1 } from './BitmapTileContainer-ac2323ff.js';
import { o } from './BaseTileRenderer-c3706a86.js';
import './Utils-7b430d1d.js';
import './WGLContainer-1770bca0.js';
import './Container-77c0b40a.js';
import './mat4f32-a4d1c0af.js';
import './ShaderCompiler-0e5c709a.js';
import './Program-57fde19e.js';
import './earcut-54ba3d1d.js';
import './GeometryUtils-83dd86c8.js';
import './MaterialKey-493fae21.js';
import './TileContainer-657d3bf9.js';
import './Bitmap-ce9d1e89.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class i{constructor(){this.gradient=null,this.height=512,this.width=512;}render(i){a$1(i,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let a=class extends o{constructor(e){super(e),this._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new o$1(e.tileInfoView);}createTile(e){const t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}onConfigUpdate(){const e=this.layer.renderer;if("heatmap"===e.type){const{minPixelIntensity:t,maxPixelIntensity:i}=e;this._intensityInfo.minPixelIntensity=t,this._intensityInfo.maxPixelIntensity=i,this._gradient=r(e.toJSON()),this.tiles.forEach((e=>{const r=e.bitmap.source;r&&(r.minPixelIntensity=t,r.maxPixelIntensity=i,r.gradient=this._gradient,e.bitmap.invalidateTexture());}));}}hitTest(){return U([])}install(e){e.addChild(this._container);}uninstall(e){this._container.removeAllChildren(),e.removeChild(this._container);}disposeTile(e){this._container.removeChild(e),e.destroy();}supportsRenderer(e){return e&&"heatmap"===e.type}onTileData(e){const t=this.tiles.get(e.tileKey);if(!t)return;const i$1=e.intensityInfo,{minPixelIntensity:r,maxPixelIntensity:s}=this._intensityInfo,n=t.bitmap.source||new i;n.intensities=i$1&&i$1.matrix||null,n.minPixelIntensity=r,n.maxPixelIntensity=s,n.gradient=this._gradient,t.bitmap.source=n,this._container.addChild(t),this.requestUpdate();}onTileError(e){console.error(e);}lockGPUUploads(){}unlockGPUUploads(){}};a=e([i$1("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],a);var l=a;

export default l;
