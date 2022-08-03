import { xv as m, B as e, D as n, dB as s } from './_virtual_index-9b831d4a.js';
import { n as n$1 } from './BitmapTileContainer-57cb0f6a.js';
import { o as o$1 } from './BaseTileRenderer-8e061573.js';
import './Bitmap-04f84dc2.js';
import './brushes-0ba66925.js';
import './definitions-94cbc2bf.js';
import './Utils-0ee32720.js';
import './number-7d0da80b.js';
import './enums-11126df6.js';
import './ProgramTemplate-fb419b93.js';
import './MaterialKey-7b48d630.js';
import './alignmentUtils-d4b065e2.js';
import './utils-bc8fd4f8.js';
import './heatmapTextureUtils-0da3eb14.js';
import './StyleDefinition-8bdfb2b8.js';
import './GeometryUtils-0c093176.js';
import './TileContainer-d62dd38b.js';
import './WGLContainer-c474bc93.js';
import './Container-38939417.js';
import './EffectView-280fbeb4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class i{constructor(){this.gradient=null,this.height=512,this.width=512;}render(i){m(i,512,this.intensities,this.gradient,this.minDensity,this.maxDensity);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let o=class extends o$1{constructor(e){super(e),this._intensityInfo={minDensity:0,maxDensity:0},this.type="heatmap",this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new n$1(e.tileInfoView);}createTile(e){const t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}onConfigUpdate(){const e=this.layer.renderer;if("heatmap"===e.type){const{minDensity:t,maxDensity:r,colorStops:s$1}=e;this._intensityInfo.minDensity=t,this._intensityInfo.maxDensity=r,this._gradient=s(s$1),this.tiles.forEach((e=>{const i=e.bitmap.source;i&&(i.minDensity=t,i.maxDensity=r,i.gradient=this._gradient,e.bitmap.invalidateTexture());}));}}hitTest(){return Promise.resolve([])}install(e){e.addChild(this._container);}uninstall(e){this._container.removeAllChildren(),e.removeChild(this._container);}disposeTile(e){this._container.removeChild(e),e.destroy();}supportsRenderer(e){return e&&"heatmap"===e.type}onTileData(e){const t=this.tiles.get(e.tileKey);if(!t)return;const i$1=e.intensityInfo,{minDensity:r,maxDensity:s}=this._intensityInfo,o=t.bitmap.source||new i;o.intensities=i$1&&i$1.matrix||null,o.minDensity=r,o.maxDensity=s,o.gradient=this._gradient,t.bitmap.source=o,this._container.addChild(t),this._container.requestRender(),this.requestUpdate();}onTileError(e){console.error(e);}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(e,t){return console.error(e),Promise.reject()}};o=e([n("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);const a=o;

export { a as default };
