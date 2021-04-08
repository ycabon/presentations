import { j as e, k as i$1 } from './_virtual_index-634cbc09.js';
import { n } from './BitmapTileContainer-b7db1a7f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const i=i=>{let s=class extends i{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new n(this._tileInfoView),this.container.addChild(this._bitmapView);}detach(){this.container.removeChild(this._bitmapView),this._bitmapView.removeAllChildren();}};return s=e([i$1("esri.views.2d.layers.BitmapTileLayerView2D")],s),s};

export { i };
