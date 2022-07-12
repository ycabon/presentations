import { a as e, n, a3 as n$1, _ as f, O as t, ae as c, g5 as q, eh as u, dF as x, kw as E$1, eF as t$1 } from './_virtual_index-64b818a8.js';
import { v, l, d } from './lineSegment-ce9a3f78.js';
import { k, N, R } from './sphere-c6f59b54.js';
import { G } from './Octree-87247213.js';
import { a } from './edgeProcessing-7ab69ead.js';
import './vectorStacks-2787eca4.js';
import './mat4f64-2ebd3575.js';
import './quatf64-808fd6fd.js';
import './plane-c0acacc4.js';
import './Util-3ab6582c.js';
import './deduplicate-365f71f3.js';
import './InterleavedLayout-45b3d520.js';
import './BufferView-e399da5f.js';
import './types-d9a1fe4a.js';
import './VertexAttribute-f7d7a686.js';
import './glUtil-2dc26fa6.js';
import './enums-fb707d37.js';
import './VertexElementDescriptor-b07b83f4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let j=class{constructor(){this._idToComponent=new Map,this._components=new G((e=>e.bounds)),this._edges=new G((e=>e.bounds)),this._tmpLineSegment=v(),this._tmpP1=n$1(),this._tmpP2=n$1(),this._tmpP3=n$1(),this.remoteClient=null;}async fetchCandidates(e,t){await Promise.resolve(),f(t),await this._ensureEdgeLocations(e,t);const s=[];return this._edges.forEachNeighbor((t=>this._addCandidates(e,t,s)),e.bounds),{result:{candidates:s}}}async _ensureEdgeLocations(e,o){const n=[];if(this._components.forEachNeighbor((e=>{if(t(e.info)){const{id:t,uid:s}=e;n.push({id:t,uid:s});}}),e.bounds),!n.length)return;const i={components:n},r=await this.remoteClient.invoke("fetchAllEdgeLocations",i,c(o,{}));for(const t of r.components)this._setFetchEdgeLocations(t);}async add(e){const t=new C(e.id,e.bounds);return this._idToComponent.set(t.id,t),this._components.add([t]),{result:{}}}async remove(e){const t=this._idToComponent.get(e.id);if(t){const e=[];this._edges.forEachNeighbor((s=>{s.component===t&&e.push(s);}),t.bounds),this._edges.remove(e),this._components.remove([t]),this._idToComponent.delete(t.id);}return {result:{}}}_setFetchEdgeLocations(e){const s=this._idToComponent.get(e.id);if(t(s)||e.uid!==s.uid)return;const o=a.createView(e.locations),n=new Array(o.count),a$1=n$1(),p=n$1();for(let t=0;t<o.count;t++){const c=R(),m=k(c);o.position0.getVec(t,a$1),o.position1.getVec(t,p),q(m,m,a$1,.5),q(m,m,p,.5),u(m,m,e.origin),c[3]=x(m,a$1);const u$1=new E(s,t,c);n[t]=u$1;}this._edges.add(n);const{objectIds:m,origin:u$1}=e;s.info={locations:o,objectIds:m,origin:u$1};}_addCandidates(e,t,s){const{locations:o,origin:n,objectIds:i}=t.component.info,d=o.position0.getVec(t.index,this._tmpP1),c=o.position1.getVec(t.index,this._tmpP2);u(d,d,n),u(c,c,n);const a=i[o.componentIndex.get(t.index)];this._addEdgeCandidate(e,a,d,c,s),this._addVertexCandidate(e,a,d,s),this._addVertexCandidate(e,a,c,s);}_addEdgeCandidate(e,t,s,o,n){if(!(e.types&E$1.EDGE))return;const i=k(e.bounds),r=l(s,o,this._tmpLineSegment),c=d(r,i,this._tmpP3);if(!N(e.bounds,c))return null;n.push({type:"edge",objectId:t,target:t$1(c),distance:x(i,c),start:t$1(s),end:t$1(o)});}_addVertexCandidate(e,t,s,o){if(!(e.types&E$1.VERTEX))return;const n=k(e.bounds);if(!N(e.bounds,s))return null;o.push({type:"vertex",objectId:t,target:t$1(s),distance:x(n,s)});}};j=e([n("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],j);const y=j;class C{constructor(e,t){this.id=e,this.bounds=t,this.info=null,this.uid=++C.uid;}}C.uid=0;class E{constructor(e,t,s){this.component=e,this.index=t,this.bounds=s;}}

export { y as default };
