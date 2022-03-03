import { W as i, d8 as g, S, io as B, ip as t, c8 as p, ac as e, ae as i$2 } from './_virtual_index-3ad07138.js';
import { l, u } from './LayerView-ccf9971d.js';
import { i as i$1 } from './GraphicContainer-f108ffc8.js';
import { i as it } from './BaseGraphicContainer-e75c5940.js';
import './Container-0ea8b7c2.js';
import './Utils-ba2d87f4.js';
import './Texture-970325f3.js';
import './CIMSymbolHelper-62ceca89.js';
import './BidiEngine-1d3a0a6d.js';
import './projectionSupport-f3b66f92.js';
import './json-2bf9d675.js';
import './VertexArrayObject-3beb5624.js';
import './FeatureContainer-c3691c35.js';
import './TileContainer-d98cb7c6.js';
import './WGLContainer-bec6b82e.js';
import './ShaderCompiler-9e67e52b.js';
import './config-3e6df72b.js';
import './GeometryUtils-8e9bb139.js';
import './MaterialKey-8a7bcdbb.js';
import './earcut-211aa720.js';
import './visualVariablesUtils-c0918cfa.js';
import './visualVariablesUtils-b2bf8e17.js';
import './Matcher-f07858c6.js';
import './tileUtils-84582c2d.js';
import './TileClipper-f06c223a.js';
import './cimSymbolUtils-12bccbc7.js';
import './quantizationUtils-cc435f69.js';
import './devEnvironmentUtils-a78265ea.js';
import './schemaUtils-05c05689.js';
import './MD5-a16a7511.js';
import './util-af29771e.js';
import './ComputedAttributeStorage-64438d2c.js';
import './FeatureSetReader-25593c0a.js';
import './centroid-3bf097a6.js';
import './vec3f32-c4a8e2ae.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let m=class extends(l(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.graphicsViews.reverse().map((r=>r.hitTest(e)));return (await Promise.all(s)).flat().filter(((e,r)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[r]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.handles.add([i(this.layer,"featureCollections",(e=>{this._clear();for(const{popupInfo:i,featureSet:t$1,layerDefinition:o}of e){const e=g.fromJSON(t$1),l=new S(e.features),c=o.drawingInfo,m=i?B.fromJSON(i):null,y=t(c.renderer),g$1=new it({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:l,renderer:y,container:new i$1(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g$1,this._popupTemplates.set(g$1,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g$1),this.container.addChild(g$1.container);}})),i(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new p({symbol:e});})),i(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new p({symbol:e});})),i(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new p({symbol:e});}))],"georsslayerview");}detach(){this.handles.remove("georsslayerview"),this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};m=e([i$2("esri.views.2d.layers.GeoRSSLayerView2D")],m);const y=m;

export { y as default };
