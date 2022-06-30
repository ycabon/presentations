import { j as e, k as i$1 } from './_virtual_index-2683c931.js';
import { a as a$1, n as n$1 } from './heatmapUtils-85504e5d.js';
import { n } from './BitmapTileContainer-8a9313b8.js';
import { o as o$1 } from './BaseTileRenderer-9f05c85b.js';
import './Utils-0b584b8b.js';
import './FramebufferObject-c19fef9d.js';
import './_commonjsHelpers-3f70742c.js';
import './WGLContainer-0b2e4b10.js';
import './Container-c9657d6c.js';
import './mat4f32-8dd9e37a.js';
import './definitions-12783a0f.js';
import './vec4f32-1b47f233.js';
import './ShaderCompiler-8b82754c.js';
import './Program-9cec60fc.js';
import './earcut-cd592b7a.js';
import './GeometryUtils-58fe63b9.js';
import './MaterialKey-2936dc4b.js';
import './TileContainer-f32af6bf.js';
import './Bitmap-c19e22e5.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class i{constructor(){this.gradient=null,this.height=512,this.width=512;}render(i){a$1(i,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let o=class extends o$1{constructor(e){super(e),this._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new n(e.tileInfoView);}createTile(e){const t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}onConfigUpdate(){const e=this.layer.renderer;if("heatmap"===e.type){const{minPixelIntensity:t,maxPixelIntensity:r}=e;this._intensityInfo.minPixelIntensity=t,this._intensityInfo.maxPixelIntensity=r,this._gradient=n$1(e.toJSON()),this.tiles.forEach((e=>{const i=e.bitmap.source;i&&(i.minPixelIntensity=t,i.maxPixelIntensity=r,i.gradient=this._gradient,e.bitmap.invalidateTexture());}));}}hitTest(){return Promise.resolve([])}install(e){e.addChild(this._container);}uninstall(e){this._container.removeAllChildren(),e.removeChild(this._container);}disposeTile(e){this._container.removeChild(e),e.destroy();}supportsRenderer(e){return e&&"heatmap"===e.type}onTileData(e){const t=this.tiles.get(e.tileKey);if(!t)return;const i$1=e.intensityInfo,{minPixelIntensity:r,maxPixelIntensity:s}=this._intensityInfo,o=t.bitmap.source||new i;o.intensities=i$1&&i$1.matrix||null,o.minPixelIntensity=r,o.maxPixelIntensity=s,o.gradient=this._gradient,t.bitmap.source=o,this._container.addChild(t),this.requestUpdate();}onTileError(e){console.error(e);}lockGPUUploads(){}unlockGPUUploads(){}};o=e([i$1("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);var a=o;

export default a;
