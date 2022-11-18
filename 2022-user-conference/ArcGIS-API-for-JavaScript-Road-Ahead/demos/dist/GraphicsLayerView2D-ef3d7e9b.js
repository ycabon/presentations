import { P as g$1, e9 as j, u as e, y as y$1, z as n } from './_virtual_index-1ea2035a.js';
import { y } from './LayerView2D-0acb5666.js';
import { i } from './GraphicContainer-0fdd8b97.js';
import { o as oe } from './BaseGraphicContainer-aab27617.js';
import { u } from './LayerView-04d8537b.js';
import './utils-94e6680e.js';
import './EffectView-de5a8347.js';
import './enums-4e1a5b11.js';
import './MaterialKey-8672cbbb.js';
import './alignmentUtils-d4b065e2.js';
import './Utils-7b2ac961.js';
import './number-7d0da80b.js';
import './enums-3e26cf0d.js';
import './definitions-a784b44f.js';
import './cimAnalyzer-32e4ad07.js';
import './fontUtils-49a60944.js';
import './BidiEngine-25d35bf3.js';
import './Rect-1c5846da.js';
import './GeometryUtils-10c98655.js';
import './FeatureContainer-e333c7c0.js';
import './visualVariablesUtils-e0de182e.js';
import './visualVariablesUtils-933d57c8.js';
import './TileContainer-18a96df2.js';
import './WGLContainer-be6ebd59.js';
import './WGLBrushVTLSymbol-5326d98d.js';
import './StyleDefinition-98114241.js';
import './GeometryUtils-07c7843a.js';
import './ShaderCompiler-4879c29c.js';
import './ProgramTemplate-192f2ab9.js';
import './heatmapTextureUtils-076ceaf2.js';
import './Matcher-39feddc4.js';
import './tileUtils-e3849516.js';
import './TileClipper-b7d453c3.js';
import './Geometry-bc69b0c8.js';
import './ExpandedCIM-a44ee24d.js';
import './schemaUtils-15a39169.js';
import './createSymbolSchema-49eb4f50.js';
import './util-b1c4d8f0.js';
import './ComputedAttributeStorage-5652149f.js';
import './centroid-205dc6cf.js';
import './GraphicsView-fce768d1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const g={remove(){},pause(){},resume(){}};let c=class extends(y(u)){constructor(){super(...arguments),this._highlightIds=new Map;}attach(){this.graphicsView=new oe({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new i(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.graphicsView=null,this.handles.remove("graphicslayerview2d");}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((e=>({type:"graphic",graphic:e,mapPoint:i,layer:this.layer}))):null}async fetchPopupFeatures(i){if(this.graphicsView)return this.graphicsView.hitTest(i).filter((i=>!!i.popupTemplate))}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i){let s;return "number"==typeof i?s=[i]:i instanceof g$1?s=[i.uid]:Array.isArray(i)&&i.length>0?s="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):j.isCollection(i)&&i.length>0&&(s=i.map((i=>i&&i.uid)).toArray()),s=s?.filter((i=>null!=i)),s.length?(this._addHighlight(s),{remove:()=>this._removeHighlight(s)}):g}_addHighlight(i){for(const e of i)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1);}else this._highlightIds.set(e,1);this._updateHighlight();}_removeHighlight(i){for(const e of i)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;0===i?this._highlightIds.delete(e):this._highlightIds.set(e,i);}this._updateHighlight();}_updateHighlight(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()));}};e([y$1()],c.prototype,"graphicsView",void 0),c=e([n("esri.views.2d.layers.GraphicsLayerView2D")],c);const l=c;

export { l as default };
