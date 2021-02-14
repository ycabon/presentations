import { aA as u, U, E as f, y as e, A as i } from './_virtual:index-a8a6346c.js';
import { l, p } from './LayerView2D-8aafe765.js';
import { Q } from './GraphicsView2D-3a00af16.js';
import './Container-a6b532ef.js';
import './mat4f32-a4d1c0af.js';
import './quantizationUtils-edd05277.js';
import './json-dc26b8a4.js';
import './quickselect-ee4d9e32.js';
import './shapingUtils-5ac9a0a4.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-69892482.js';
import './MaterialKey-486107c6.js';
import './visualVariablesUtils-77b655f5.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-a89becb5.js';
import './VertexBuffer-7d673970.js';
import './CircularArray-6f9308dc.js';
import './TurboLine-427f7a08.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-e2d97937.js';
import './TileContainer-188fa94d.js';
import './WGLContainer-2078c1c1.js';
import './ShaderCompiler-90eb78ca.js';
import './Program-0bb30dd1.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-b46a79ef.js';
import './FeatureSetReader-430f5a63.js';
import './centroid-6105d00e.js';
import './graphicsUtils-e8bda91b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let h=class extends(l(p)){constructor(){super(...arguments),this._handles=new u,this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,s){if(this.suspended||!this.graphicsViews.length)return U();const i=this.graphicsViews.map((r=>r.hitTest(e,s)));return f(i).then((e=>e.filter(((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(e);}attach(){this.layer.featureCollections.forEach((e=>{const s=new Q({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate()});s.renderer=e.renderer,this._popupTemplates.set(s,e.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container);}));}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy(),e.view=null,e.renderer=null;this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};h=e([i("esri.views.2d.layers.RouteLayerView2D")],h);var c=h;

export default c;
