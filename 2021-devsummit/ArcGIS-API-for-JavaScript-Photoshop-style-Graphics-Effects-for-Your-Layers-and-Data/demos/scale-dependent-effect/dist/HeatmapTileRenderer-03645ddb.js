import { n as e, p as i$1, U } from './index.js';
import { a as a$1, r } from './heatmapUtils-3fa6b620.js';
import { o as o$1 } from './BitmapTileContainer-f41c7a5b.js';
import { o } from './BaseTileRenderer-bc02a609.js';
import './Utils-663f8528.js';
import './RenderingContext-788faf24.js';
import './_commonjsHelpers-34398bae.js';
import './WGLContainer-f0f1d734.js';
import './Container-5ea5ac3f.js';
import './mat4f32-a4d1c0af.js';
import './definitions-6994070a.js';
import './VertexArrayObject-4122ce3c.js';
import './ShaderCompiler-3037272a.js';
import './earcut-54ba3d1d.js';
import './GeometryUtils-83dd86c8.js';
import './MaterialKey-953814d9.js';
import './TileContainer-d4afd138.js';
import './Bitmap-2fff74a8.js';

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
