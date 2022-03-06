import { ax as u$1, g as t, ac as e, ae as i$1 } from './_virtual_index-49b2bc11.js';
import { l, u } from './LayerView-9194fd82.js';
import { i } from './GraphicContainer-f578401c.js';
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
let h=class extends(l(u)){constructor(){super(...arguments),this._handles=new u$1,this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,s){if(!this.graphicsViews.length)return null;return (await Promise.all(this.graphicsViews.map((s=>s.hitTest(e))))).flat().filter(((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))}update(e){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(e);}attach(){t(this.layer.featureCollections)||this.layer.featureCollections.forEach((e=>{const s=new it({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate(),container:new i(this.view.featuresTilingScheme)});s.renderer=e.renderer,this._popupTemplates.set(s,e.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container);}));}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};h=e([i$1("esri.views.2d.layers.RouteLayerView2D")],h);const c=h;

export { c as default };
