import { aA as u, U, E as f, y as e, A as i } from './_virtual:index-1982596a.js';
import { l, p } from './LayerView2D-650a20fa.js';
import { Q } from './GraphicsView2D-529b81eb.js';
import './Container-5f0afd2d.js';
import './mat4f32-a4d1c0af.js';
import './quantizationUtils-00a9c519.js';
import './json-dc26b8a4.js';
import './quickselect-09389b48.js';
import './shapingUtils-426b1f2c.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-86534e09.js';
import './MaterialKey-e4d75cc1.js';
import './visualVariablesUtils-9d9ec070.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-023c6781.js';
import './VertexBuffer-ee5a6553.js';
import './CircularArray-c3928fdf.js';
import './TurboLine-605e6be5.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-9565bd8a.js';
import './TileContainer-3521582d.js';
import './WGLContainer-c81de169.js';
import './ShaderCompiler-a1cbc8fc.js';
import './Program-cb13ad60.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-8ec45f04.js';
import './FeatureSetReader-c9109446.js';
import './centroid-6105d00e.js';
import './graphicsUtils-e5e1146f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let h=class extends(l(p)){constructor(){super(...arguments),this._handles=new u,this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,s){if(this.suspended||!this.graphicsViews.length)return U();const i=this.graphicsViews.map((r=>r.hitTest(e,s)));return f(i).then((e=>e.filter(((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(e);}attach(){this.layer.featureCollections.forEach((e=>{const s=new Q({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate()});s.renderer=e.renderer,this._popupTemplates.set(s,e.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container);}));}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy(),e.view=null,e.renderer=null;this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};h=e([i("esri.views.2d.layers.RouteLayerView2D")],h);var c=h;

export default c;
