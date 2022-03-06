import { W as i, da as g, S, iw as B, ix as t, c8 as p, ac as e, ae as i$2 } from './_virtual_index-49b2bc11.js';
import { l, u } from './LayerView-9194fd82.js';
import { i as i$1 } from './GraphicContainer-f578401c.js';
import { i as it } from './BaseGraphicContainer-aff65f18.js';
import './Container-905526e1.js';
import './Utils-8759b086.js';
import './Texture-7f200883.js';
import './CIMSymbolHelper-bfef80ee.js';
import './BidiEngine-1d3a0a6d.js';
import './projectionSupport-f94b815a.js';
import './json-2bf9d675.js';
import './VertexArrayObject-fabb4101.js';
import './FeatureContainer-ead96078.js';
import './TileContainer-7b06a76e.js';
import './WGLContainer-0a7b434f.js';
import './ShaderCompiler-17283eff.js';
import './config-3e6df72b.js';
import './GeometryUtils-8e9bb139.js';
import './MaterialKey-67bb5654.js';
import './earcut-211aa720.js';
import './visualVariablesUtils-d152fc61.js';
import './visualVariablesUtils-9beed5ec.js';
import './Matcher-098afb59.js';
import './tileUtils-e14c76f8.js';
import './TileClipper-0109d9ce.js';
import './cimSymbolUtils-634dbb78.js';
import './quantizationUtils-65d5f437.js';
import './devEnvironmentUtils-a78265ea.js';
import './schemaUtils-54c0b4c1.js';
import './MD5-a16a7511.js';
import './util-2e9ee3aa.js';
import './ComputedAttributeStorage-39bb9c65.js';
import './FeatureSetReader-c99e2aca.js';
import './centroid-15412c9b.js';
import './vec3f32-c4a8e2ae.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let m=class extends(l(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.graphicsViews.reverse().map((r=>r.hitTest(e)));return (await Promise.all(s)).flat().filter(((e,r)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[r]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.handles.add([i(this.layer,"featureCollections",(e=>{this._clear();for(const{popupInfo:i,featureSet:t$1,layerDefinition:o}of e){const e=g.fromJSON(t$1),l=new S(e.features),c=o.drawingInfo,m=i?B.fromJSON(i):null,y=t(c.renderer),g$1=new it({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:l,renderer:y,container:new i$1(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g$1,this._popupTemplates.set(g$1,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g$1),this.container.addChild(g$1.container);}})),i(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new p({symbol:e});})),i(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new p({symbol:e});})),i(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new p({symbol:e});}))],"georsslayerview");}detach(){this.handles.remove("georsslayerview"),this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};m=e([i$2("esri.views.2d.layers.GeoRSSLayerView2D")],m);const y=m;

export { y as default };
