import { g as g$1, j, B as e, C as d, D as n } from './_virtual_index-9b831d4a.js';
import { f } from './LayerView2D-bd5847a4.js';
import { i } from './GraphicContainer-dd1c7914.js';
import { o as oe } from './BaseGraphicContainer-bd052543.js';
import { u } from './LayerView-e26ca8f9.js';
import './Container-38939417.js';
import './EffectView-280fbeb4.js';
import './Utils-0ee32720.js';
import './number-7d0da80b.js';
import './enums-11126df6.js';
import './CIMSymbolHelper-6ee7aec0.js';
import './BidiEngine-d3dd902c.js';
import './alignmentUtils-d4b065e2.js';
import './definitions-94cbc2bf.js';
import './GeometryUtils-10c98655.js';
import './FeatureContainer-b528cf81.js';
import './visualVariablesUtils-e83355ec.js';
import './visualVariablesUtils-3a3b1834.js';
import './TileContainer-d62dd38b.js';
import './WGLContainer-c474bc93.js';
import './brushes-0ba66925.js';
import './ProgramTemplate-fb419b93.js';
import './MaterialKey-7b48d630.js';
import './utils-bc8fd4f8.js';
import './heatmapTextureUtils-0da3eb14.js';
import './StyleDefinition-8bdfb2b8.js';
import './GeometryUtils-0c093176.js';
import './Matcher-1541592c.js';
import './tileUtils-2aab94aa.js';
import './TileClipper-42f55302.js';
import './Geometry-bc69b0c8.js';
import './cimAnalyzer-320e051b.js';
import './ExpandedCIM-aa105730.js';
import './schemaUtils-c67b468a.js';
import './createSymbolSchema-aa6ae1a4.js';
import './MD5-efff06bc.js';
import './util-301a8acd.js';
import './ComputedAttributeStorage-559bdb74.js';
import './centroid-3313e4f0.js';
import './GraphicsView-d48dcc3f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const g={remove(){},pause(){},resume(){}};let c=class extends(f(u)){constructor(){super(...arguments),this._highlightIds=new Map;}attach(){this.graphicsView=new oe({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new i(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.graphicsView=null,this.handles.remove("graphicslayerview2d");}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((e=>({type:"graphic",graphic:e,mapPoint:i,layer:this.layer}))):null}async fetchPopupFeatures(i){if(this.graphicsView)return this.graphicsView.hitTest(i).filter((i=>!!i.popupTemplate))}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i){let s;return "number"==typeof i?s=[i]:i instanceof g$1?s=[i.uid]:Array.isArray(i)&&i.length>0?s="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):j.isCollection(i)&&i.length>0&&(s=i.map((i=>i&&i.uid)).toArray()),s=s?.filter((i=>null!=i)),s.length?(this._addHighlight(s),{remove:()=>this._removeHighlight(s)}):g}_addHighlight(i){for(const e of i)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1);}else this._highlightIds.set(e,1);this._updateHighlight();}_removeHighlight(i){for(const e of i)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;0===i?this._highlightIds.delete(e):this._highlightIds.set(e,i);}this._updateHighlight();}_updateHighlight(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()));}};e([d()],c.prototype,"graphicsView",void 0),c=e([n("esri.views.2d.layers.GraphicsLayerView2D")],c);const l=c;

export { l as default };
