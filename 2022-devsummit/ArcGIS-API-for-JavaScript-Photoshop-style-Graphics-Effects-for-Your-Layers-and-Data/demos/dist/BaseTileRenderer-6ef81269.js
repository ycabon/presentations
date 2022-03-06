import { ac as e, ad as d, ae as i$1, gL as d$1 } from './_virtual_index-49b2bc11.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i=class extends d$1{constructor(e){super(e),this.tiles=new Map;}destroy(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null;}get updating(){return this.isUpdating()}acquireTile(e){const t=this.createTile(e);return t.once("isReady",(()=>this.notifyChange("updating"))),this.tiles.set(e.id,t),t}forceAttributeTextureUpload(){}forEachTile(e){this.tiles.forEach(e);}releaseTile(e){this.tiles.delete(e.key.id),this.disposeTile(e);}isUpdating(){let e=!0;return this.tiles.forEach((t=>{e=e&&t.isReady;})),!e}setHighlight(){}invalidateLabels(){}requestUpdate(){this.layerView.requestUpdate();}};e([d()],i.prototype,"layer",void 0),e([d()],i.prototype,"layerView",void 0),e([d()],i.prototype,"tileInfoView",void 0),e([d()],i.prototype,"updating",null),i=e([i$1("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],i);const o=i;

export { o };
