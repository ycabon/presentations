import { ac as e$1, ae as i } from './_virtual_index-49b2bc11.js';
import { n as n$1 } from './BitmapTileContainer-cefcbddf.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r=r=>{let s=class extends r{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new n$1(this._tileInfoView),this.container.addChild(this._bitmapView);}detach(){var e;this.container.removeChild(this._bitmapView),null==(e=this._bitmapView)||e.removeAllChildren();}};return s=e$1([i("esri.views.2d.layers.BitmapTileLayerView2D")],s),s};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}function t(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}function n(n,l,r,u){if(r.level===u.level)return l;const i=n.tileInfo.size,a=n.getTileResolution(r.level),c=n.getTileResolution(u.level);let g=n.getLODInfoAt(u.level);const h=g.getXForColumn(u.col),d=g.getYForRow(u.row);g=n.getLODInfoAt(r.level);const f=g.getXForColumn(r.col),s=g.getYForRow(r.row),m=e(l)/i[0],v=t(l)/i[1],w=Math.round(m*((h-f)/a)),I=Math.round(v*(-(d-s)/a)),M=Math.round(m*i[0]*(c/a)),F=Math.round(v*i[1]*(c/a)),L=o(i);return L.getContext("2d").drawImage(l,w,I,M,F,0,0,i[0],i[1]),L}function o(e){const t=document.createElement("canvas");return [t.width,t.height]=e,t}

export { n, o, r };
