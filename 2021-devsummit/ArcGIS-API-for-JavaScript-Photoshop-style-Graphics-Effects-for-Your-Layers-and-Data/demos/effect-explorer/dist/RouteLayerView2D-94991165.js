import { as as u, U, w as f, q as e, r as i } from './index.js';
import { l, p } from './LayerView2D-972bfc62.js';
import { Q } from './GraphicsView2D-c640ad67.js';
import './Container-8aa3a7d5.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './quantizationUtils-525c06e0.js';
import './json-dc26b8a4.js';
import './quickselect-1f1691b9.js';
import './shapingUtils-8e28639c.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-71c67510.js';
import './RenderingContext-8eac4936.js';
import './MaterialKey-5f2277a7.js';
import './visualVariablesUtils-a5616d7a.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-0a8dd192.js';
import './VertexBuffer-99d317bf.js';
import './CircularArray-615878d8.js';
import './TurboLine-0769667b.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-1fbeefb8.js';
import './TileContainer-6fbb3aac.js';
import './WGLContainer-57c1077a.js';
import './VertexArrayObject-8d58b309.js';
import './ShaderCompiler-7f3be066.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-acd4f4a3.js';
import './FeatureSetReader-592a63f4.js';
import './centroid-6105d00e.js';
import './graphicsUtils-2cd49833.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let h=class extends(l(p)){constructor(){super(...arguments),this._handles=new u,this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,s){if(this.suspended||!this.graphicsViews.length)return U();const i=this.graphicsViews.map((r=>r.hitTest(e,s)));return f(i).then((e=>e.filter(((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(e);}attach(){this.layer.featureCollections.forEach((e=>{const s=new Q({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate()});s.renderer=e.renderer,this._popupTemplates.set(s,e.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container);}));}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy(),e.view=null,e.renderer=null;this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};h=e([i("esri.views.2d.layers.RouteLayerView2D")],h);var c=h;

export default c;
