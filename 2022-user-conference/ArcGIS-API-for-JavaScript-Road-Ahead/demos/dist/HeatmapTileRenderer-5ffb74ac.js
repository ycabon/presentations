import { yz as l, u as e, z as n, cj as u } from './_virtual_index-1ea2035a.js';
import { n as n$1 } from './BitmapTileContainer-ef52b9ed.js';
import { o as o$1 } from './BaseTileRenderer-88e51f6a.js';
import './Bitmap-c8e15fa6.js';
import './WGLContainer-be6ebd59.js';
import './WGLBrushVTLSymbol-5326d98d.js';
import './definitions-a784b44f.js';
import './enums-4e1a5b11.js';
import './number-7d0da80b.js';
import './StyleDefinition-98114241.js';
import './enums-3e26cf0d.js';
import './GeometryUtils-07c7843a.js';
import './Utils-7b2ac961.js';
import './ShaderCompiler-4879c29c.js';
import './ProgramTemplate-192f2ab9.js';
import './MaterialKey-8672cbbb.js';
import './alignmentUtils-d4b065e2.js';
import './utils-94e6680e.js';
import './EffectView-de5a8347.js';
import './heatmapTextureUtils-076ceaf2.js';
import './TileContainer-18a96df2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class i{constructor(){this.gradient=null,this.height=512,this.width=512;}render(i){l(i,512,this.intensities,this.gradient,this.minDensity,this.maxDensity);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let o=class extends o$1{constructor(e){super(e),this._intensityInfo={minDensity:0,maxDensity:0},this.type="heatmap",this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new n$1(e.tileInfoView);}createTile(e){const t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}onConfigUpdate(){const e=this.layer.renderer;if("heatmap"===e.type){const{minDensity:t,maxDensity:r,colorStops:s}=e;this._intensityInfo.minDensity=t,this._intensityInfo.maxDensity=r,this._gradient=u(s),this.tiles.forEach((e=>{const i=e.bitmap.source;i&&(i.minDensity=t,i.maxDensity=r,i.gradient=this._gradient,e.bitmap.invalidateTexture());}));}}hitTest(){return Promise.resolve([])}install(e){e.addChild(this._container);}uninstall(e){this._container.removeAllChildren(),e.removeChild(this._container);}disposeTile(e){this._container.removeChild(e),e.destroy();}supportsRenderer(e){return e&&"heatmap"===e.type}onTileData(e){const t=this.tiles.get(e.tileKey);if(!t)return;const i$1=e.intensityInfo,{minDensity:r,maxDensity:s}=this._intensityInfo,o=t.bitmap.source||new i;o.intensities=i$1&&i$1.matrix||null,o.minDensity=r,o.maxDensity=s,o.gradient=this._gradient,t.bitmap.source=o,this._container.addChild(t),this._container.requestRender(),this.requestUpdate();}onTileError(e){console.error(e);}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(e,t){return console.error(e),Promise.reject()}};o=e([n("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);const a=o;

export { a as default };
