import { ax as u$1, g as t, ac as e, ae as i$1 } from './_virtual_index-3ad07138.js';
import { l, u } from './LayerView-ccf9971d.js';
import { i } from './GraphicContainer-f108ffc8.js';
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
let h=class extends(l(u)){constructor(){super(...arguments),this._handles=new u$1,this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,s){if(!this.graphicsViews.length)return null;return (await Promise.all(this.graphicsViews.map((s=>s.hitTest(e))))).flat().filter(((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))}update(e){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(e);}attach(){t(this.layer.featureCollections)||this.layer.featureCollections.forEach((e=>{const s=new it({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate(),container:new i(this.view.featuresTilingScheme)});s.renderer=e.renderer,this._popupTemplates.set(s,e.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container);}));}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};h=e([i$1("esri.views.2d.layers.RouteLayerView2D")],h);const c=h;

export { c as default };
