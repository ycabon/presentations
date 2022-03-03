import { ac as e, ae as i$1 } from './_virtual_index-3ad07138.js';
import { o as o$1, e as e$1 } from './heatmapUtils-e1554829.js';
import { n } from './BitmapTileContainer-30b7c574.js';
import { o as o$2 } from './BaseTileRenderer-7181cd18.js';
import './Bitmap-6fb4c9a4.js';
import './Container-0ea8b7c2.js';
import './Texture-970325f3.js';
import './TileContainer-d98cb7c6.js';
import './Utils-ba2d87f4.js';
import './WGLContainer-bec6b82e.js';
import './VertexArrayObject-3beb5624.js';
import './ShaderCompiler-9e67e52b.js';
import './config-3e6df72b.js';
import './GeometryUtils-8e9bb139.js';
import './MaterialKey-8a7bcdbb.js';
import './earcut-211aa720.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i{constructor(){this.gradient=null,this.height=512,this.width=512;}render(i){o$1(i,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let o=class extends o$2{constructor(e){super(e),this._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new n(e.tileInfoView);}createTile(e){const t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}onConfigUpdate(){const e=this.layer.renderer;if("heatmap"===e.type){const{minPixelIntensity:t,maxPixelIntensity:r}=e;this._intensityInfo.minPixelIntensity=t,this._intensityInfo.maxPixelIntensity=r,this._gradient=e$1(e.toJSON()),this.tiles.forEach((e=>{const i=e.bitmap.source;i&&(i.minPixelIntensity=t,i.maxPixelIntensity=r,i.gradient=this._gradient,e.bitmap.invalidateTexture());}));}}hitTest(){return Promise.resolve([])}install(e){e.addChild(this._container);}uninstall(e){this._container.removeAllChildren(),e.removeChild(this._container);}disposeTile(e){this._container.removeChild(e),e.destroy();}supportsRenderer(e){return e&&"heatmap"===e.type}onTileData(e){const t=this.tiles.get(e.tileKey);if(!t)return;const i$1=e.intensityInfo,{minPixelIntensity:r,maxPixelIntensity:s}=this._intensityInfo,o=t.bitmap.source||new i;o.intensities=i$1&&i$1.matrix||null,o.minPixelIntensity=r,o.maxPixelIntensity=s,o.gradient=this._gradient,t.bitmap.source=o,this._container.addChild(t),this._container.requestRender(),this.requestUpdate();}onTileError(e){console.error(e);}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(e,t){return console.error(e),Promise.reject()}};o=e([i$1("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);const a=o;

export { a as default };
