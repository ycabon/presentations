"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1798],{15173:(e,n,t)=>{t.d(n,{Q:()=>i});var r=t(6540),s=t(89914);class i{constructor(e=(e=>e.values().next().value)){this._peeker=e,this._observable=new s.S,this._items=new Set}get length(){return(0,r.t)(this._observable),this._items.size}clear(){0!==this.length&&(this._items.clear(),this._observable.notify())}last(){if(0===this.length)return;let e;for(e of this._items);return e}peek(){if(0!==this.length)return this._peeker(this._items)}push(e){this.contains(e)||(this._items.add(e),this._observable.notify())}contains(e){return(0,r.t)(this._observable),this._items.has(e)}pop(){if(0===this.length)return;const e=this.peek();return this._items.delete(e),this._observable.notify(),e}popLast(){if(0===this.length)return;const e=this.last();return this._items.delete(e),this._observable.notify(),e}remove(e){this.contains(e)&&(this._items.delete(e),this._observable.notify())}filter(e){const n=this.length;return this._items.forEach((n=>{e(n)||this._items.delete(n)})),n!==this._items.size&&this._observable.notify(),this}*[Symbol.iterator](){(0,r.t)(this._observable),yield*this._items}}},39052:(e,n,t)=>{t.r(n),t.d(n,{registerFunctions:()=>A});var r=t(88762),s=t(94056),i=t(48675),a=t(20625),o=t(53785),l=t(21801),c=t(73796),u=t(42870),f=t(84069),d=t(91597),h=t(44567),g=t(92896),m=t(32422),p=t(49900),w=t(95204);function y(e){return 0===r.i8.indexOf("4.")?h.Z.fromExtent(e):new h.Z({spatialReference:e.spatialReference,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]})}function b(e,n,t){if((0,s.p)(e,2,2,n,t),e[0]instanceof c.Z&&e[1]instanceof c.Z);else if(e[0]instanceof c.Z&&null===e[1]);else if(e[1]instanceof c.Z&&null===e[0]);else if(null!==e[0]||null!==e[1])throw new s.A(n,s.E.InvalidParameter,t)}async function v(e,n){if("polygon"!==e.type&&"polyline"!==e.type&&"extent"!==e.type)return 0;let t=1;(e.spatialReference.vcsWkid||e.spatialReference.latestVcsWkid)&&(t=(0,s._)(e.spatialReference)/(0,o.g)(e.spatialReference));let r=0;if("polyline"===e.type)for(const n of e.paths)for(let e=1;e<n.length;e++)r+=(0,s.$)(n[e],n[e-1],t);else if("polygon"===e.type)for(const n of e.rings){for(let e=1;e<n.length;e++)r+=(0,s.$)(n[e],n[e-1],t);(n[0][0]!==n[n.length-1][0]||n[0][1]!==n[n.length-1][1]||void 0!==n[0][2]&&n[0][2]!==n[n.length-1][2])&&(r+=(0,s.$)(n[0],n[n.length-1],t))}else"extent"===e.type&&(r+=2*(0,s.$)([e.xmin,e.ymin,0],[e.xmax,e.ymin,0],t),r+=2*(0,s.$)([e.xmin,e.ymin,0],[e.xmin,e.ymax,0],t),r*=2,r+=4*Math.abs((0,s.Q)(e.zmax,0)*t-(0,s.Q)(e.zmin,0)*t));const i=new g.Z({hasZ:!1,hasM:!1,spatialReference:e.spatialReference,paths:[[0,0],[0,r]]});return(0,u.sz)(i,n)}function A(e){"async"===e.mode&&(e.functions.disjoint=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>(b(i=(0,s.L)(i),n,t),null===i[0]||null===i[1]||(0,u.ED)(i[0],i[1]))))},e.functions.intersects=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>(b(i=(0,s.L)(i),n,t),null!==i[0]&&null!==i[1]&&(0,u.kK)(i[0],i[1]))))},e.functions.touches=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>(b(i=(0,s.L)(i),n,t),null!==i[0]&&null!==i[1]&&(0,u.W4)(i[0],i[1]))))},e.functions.crosses=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>(b(i=(0,s.L)(i),n,t),null!==i[0]&&null!==i[1]&&(0,u.jU)(i[0],i[1]))))},e.functions.within=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>(b(i=(0,s.L)(i),n,t),null!==i[0]&&null!==i[1]&&(0,u.uh)(i[0],i[1]))))},e.functions.contains=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>(b(i=(0,s.L)(i),n,t),null!==i[0]&&null!==i[1]&&(0,u.r3)(i[0],i[1]))))},e.functions.overlaps=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>(b(i=(0,s.L)(i),n,t),null!==i[0]&&null!==i[1]&&(0,u.Nm)(i[0],i[1]))))},e.functions.equals=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>((0,s.p)(i,2,2,n,t),i[0]===i[1]||(i[0]instanceof c.Z&&i[1]instanceof c.Z?(0,u.fS)(i[0],i[1]):((0,s.M)(i[0])&&(0,s.M)(i[1])||!!((0,s.O)(i[0])&&(0,s.O)(i[1])||(0,s.P)(i[0])&&(0,s.P)(i[1])))&&i[0].equals(i[1])))))},e.functions.relate=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>{if(i=(0,s.L)(i),(0,s.p)(i,3,3,n,t),i[0]instanceof c.Z&&i[1]instanceof c.Z)return(0,u.LV)(i[0],i[1],(0,s.B)(i[2]));if(i[0]instanceof c.Z&&null===i[1])return!1;if(i[1]instanceof c.Z&&null===i[0])return!1;if(null===i[0]&&null===i[1])return!1;throw new s.A(n,s.E.InvalidParameter,t)}))},e.functions.intersection=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>(b(i=(0,s.L)(i),n,t),null===i[0]||null===i[1]?null:(0,u.wf)(i[0],i[1]))))},e.functions.union=function(n,t){return e.standardFunctionAsync(n,t,((e,r,a)=>{const o=[];if(0===(a=(0,s.L)(a)).length)throw new s.A(n,s.E.WrongNumberOfParameters,t);if(1===a.length)if((0,s.f)(a[0])){const e=(0,s.L)(a[0]);for(let r=0;r<e.length;r++)if(null!==e[r]){if(!(e[r]instanceof c.Z))throw new s.A(n,s.E.InvalidParameter,t);o.push(e[r])}}else{if(!(0,s.e)(a[0])){if(a[0]instanceof c.Z)return(0,s.G)((0,i.c)(a[0]),n.spatialReference);if(null===a[0])return null;throw new s.A(n,s.E.InvalidParameter,t)}{const e=(0,s.L)(a[0].toArray());for(let r=0;r<e.length;r++)if(null!==e[r]){if(!(e[r]instanceof c.Z))throw new s.A(n,s.E.InvalidParameter,t);o.push(e[r])}}}else for(let e=0;e<a.length;e++)if(null!==a[e]){if(!(a[e]instanceof c.Z))throw new s.A(n,s.E.InvalidParameter,t);o.push(a[e])}return 0===o.length?null:(0,u.G0)(o)}))},e.functions.difference=function(n,t){return e.standardFunctionAsync(n,t,((e,r,a)=>(b(a=(0,s.L)(a),n,t),null!==a[0]&&null===a[1]?(0,i.c)(a[0]):null===a[0]?null:(0,u.e5)(a[0],a[1]))))},e.functions.symmetricdifference=function(n,t){return e.standardFunctionAsync(n,t,((e,r,a)=>(b(a=(0,s.L)(a),n,t),null===a[0]&&null===a[1]?null:null===a[0]?(0,i.c)(a[1]):null===a[1]?(0,i.c)(a[0]):(0,u.Sp)(a[0],a[1]))))},e.functions.clip=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>{if(i=(0,s.L)(i),(0,s.p)(i,2,2,n,t),!(i[1]instanceof l.Z)&&null!==i[1])throw new s.A(n,s.E.InvalidParameter,t);if(null===i[0])return null;if(!(i[0]instanceof c.Z))throw new s.A(n,s.E.InvalidParameter,t);return null===i[1]?null:(0,u.oq)(i[0],i[1])}))},e.functions.cut=function(n,t){return e.standardFunctionAsync(n,t,((e,r,a)=>{if(a=(0,s.L)(a),(0,s.p)(a,2,2,n,t),!(a[1]instanceof g.Z)&&null!==a[1])throw new s.A(n,s.E.InvalidParameter,t);if(null===a[0])return[];if(!(a[0]instanceof c.Z))throw new s.A(n,s.E.InvalidParameter,t);return null===a[1]?[(0,i.c)(a[0])]:(0,u.z7)(a[0],a[1])}))},e.functions.area=function(n,t){return e.standardFunctionAsync(n,t,(async(e,r,a)=>{if((0,s.p)(a,1,2,n,t),null===(a=(0,s.L)(a))[0])return 0;if((0,s.y)(a[0])){const e=await a[0].sumArea((0,i.a)((0,s.Q)(a[1],-1)),!1,n.abortSignal);if(n.abortSignal.aborted)throw new s.A(n,s.E.Cancelled,t);return e}if((0,s.f)(a[0])||(0,s.e)(a[0])){const e=(0,s.R)(a[0],n.spatialReference);return null===e?0:(0,u.CJ)(e,(0,i.a)((0,s.Q)(a[1],-1)))}if(!(a[0]instanceof c.Z))throw new s.A(n,s.E.InvalidParameter,t);return(0,u.CJ)(a[0],(0,i.a)((0,s.Q)(a[1],-1)))}))},e.functions.areageodetic=function(n,t){return e.standardFunctionAsync(n,t,(async(e,r,a)=>{if((0,s.p)(a,1,2,n,t),null===(a=(0,s.L)(a))[0])return 0;if((0,s.y)(a[0])){const e=await a[0].sumArea((0,i.a)((0,s.Q)(a[1],-1)),!0,n.abortSignal);if(n.abortSignal.aborted)throw new s.A(n,s.E.Cancelled,t);return e}if((0,s.f)(a[0])||(0,s.e)(a[0])){const e=(0,s.R)(a[0],n.spatialReference);return null===e?0:(0,u.Y4)(e,(0,i.a)((0,s.Q)(a[1],-1)))}if(!(a[0]instanceof c.Z))throw new s.A(n,s.E.InvalidParameter,t);return(0,u.Y4)(a[0],(0,i.a)((0,s.Q)(a[1],-1)))}))},e.functions.length=function(n,t){return e.standardFunctionAsync(n,t,(async(e,r,a)=>{if((0,s.p)(a,1,2,n,t),null===(a=(0,s.L)(a))[0])return 0;if((0,s.y)(a[0])){const e=await a[0].sumLength((0,i.b)((0,s.Q)(a[1],-1)),!1,n.abortSignal);if(n.abortSignal.aborted)throw new s.A(n,s.E.Cancelled,t);return e}if((0,s.f)(a[0])||(0,s.e)(a[0])){const e=(0,s.T)(a[0],n.spatialReference);return null===e?0:(0,u.sz)(e,(0,i.b)((0,s.Q)(a[1],-1)))}if(!(a[0]instanceof c.Z))throw new s.A(n,s.E.InvalidParameter,t);return(0,u.sz)(a[0],(0,i.b)((0,s.Q)(a[1],-1)))}))},e.functions.length3d=function(n,t){return e.standardFunctionAsync(n,t,((e,r,a)=>{if((0,s.p)(a,1,2,n,t),null===(a=(0,s.L)(a))[0])return 0;if((0,s.f)(a[0])||(0,s.e)(a[0])){const e=(0,s.T)(a[0],n.spatialReference);return null===e?0:!0===e.hasZ?v(e,(0,i.b)((0,s.Q)(a[1],-1))):(0,u.sz)(e,(0,i.b)((0,s.Q)(a[1],-1)))}if(!(a[0]instanceof c.Z))throw new s.A(n,s.E.InvalidParameter,t);return!0===a[0].hasZ?v(a[0],(0,i.b)((0,s.Q)(a[1],-1))):(0,u.sz)(a[0],(0,i.b)((0,s.Q)(a[1],-1)))}))},e.functions.lengthgeodetic=function(n,t){return e.standardFunctionAsync(n,t,(async(e,r,a)=>{if((0,s.p)(a,1,2,n,t),null===(a=(0,s.L)(a))[0])return 0;if((0,s.y)(a[0])){const e=await a[0].sumLength((0,i.b)((0,s.Q)(a[1],-1)),!0,n.abortSignal);if(n.abortSignal.aborted)throw new s.A(n,s.E.Cancelled,t);return e}if((0,s.f)(a[0])||(0,s.e)(a[0])){const e=(0,s.T)(a[0],n.spatialReference);return null===e?0:(0,u.kQ)(e,(0,i.b)((0,s.Q)(a[1],-1)))}if(!(a[0]instanceof c.Z))throw new s.A(n,s.E.InvalidParameter,t);return(0,u.kQ)(a[0],(0,i.b)((0,s.Q)(a[1],-1)))}))},e.functions.distance=function(n,t){return e.standardFunctionAsync(n,t,((e,r,a)=>{a=(0,s.L)(a),(0,s.p)(a,2,3,n,t);let o=a[0];((0,s.f)(a[0])||(0,s.e)(a[0]))&&(o=(0,s.U)(a[0],n.spatialReference));let l=a[1];if(((0,s.f)(a[1])||(0,s.e)(a[1]))&&(l=(0,s.U)(a[1],n.spatialReference)),!(o instanceof c.Z))throw new s.A(n,s.E.InvalidParameter,t);if(!(l instanceof c.Z))throw new s.A(n,s.E.InvalidParameter,t);return(0,u.TE)(o,l,(0,i.b)((0,s.Q)(a[2],-1)))}))},e.functions.distancegeodetic=function(n,t){return e.standardFunctionAsync(n,t,((e,r,a)=>{a=(0,s.L)(a),(0,s.p)(a,2,3,n,t);const o=a[0],l=a[1];if(!(o instanceof d.Z))throw new s.A(n,s.E.InvalidParameter,t);if(!(l instanceof d.Z))throw new s.A(n,s.E.InvalidParameter,t);const c=new g.Z({paths:[],spatialReference:o.spatialReference});return c.addPath([o,l]),(0,u.kQ)(c,(0,i.b)((0,s.Q)(a[2],-1)))}))},e.functions.densify=function(n,t){return e.standardFunctionAsync(n,t,((e,r,a)=>{if(a=(0,s.L)(a),(0,s.p)(a,2,3,n,t),null===a[0])return null;if(!(a[0]instanceof c.Z))throw new s.A(n,s.E.InvalidParameter,t);const o=(0,s.z)(a[1]);if(isNaN(o))throw new s.A(n,s.E.InvalidParameter,t);if(o<=0)throw new s.A(n,s.E.InvalidParameter,t);return a[0]instanceof h.Z||a[0]instanceof g.Z?(0,u.Cz)(a[0],o,(0,i.b)((0,s.Q)(a[2],-1))):a[0]instanceof l.Z?(0,u.Cz)(y(a[0]),o,(0,i.b)((0,s.Q)(a[2],-1))):a[0]}))},e.functions.densifygeodetic=function(n,t){return e.standardFunctionAsync(n,t,((e,r,a)=>{if(a=(0,s.L)(a),(0,s.p)(a,2,3,n,t),null===a[0])return null;if(!(a[0]instanceof c.Z))throw new s.A(n,s.E.InvalidParameter,t);const o=(0,s.z)(a[1]);if(isNaN(o))throw new s.A(n,s.E.InvalidParameter,t);if(o<=0)throw new s.A(n,s.E.InvalidParameter,t);return a[0]instanceof h.Z||a[0]instanceof g.Z?(0,u.j2)(a[0],o,(0,i.b)((0,s.Q)(a[2],-1))):a[0]instanceof l.Z?(0,u.j2)(y(a[0]),o,(0,i.b)((0,s.Q)(a[2],-1))):a[0]}))},e.functions.generalize=function(n,t){return e.standardFunctionAsync(n,t,((e,r,a)=>{if(a=(0,s.L)(a),(0,s.p)(a,2,4,n,t),null===a[0])return null;if(!(a[0]instanceof c.Z))throw new s.A(n,s.E.InvalidParameter,t);const o=(0,s.z)(a[1]);if(isNaN(o))throw new s.A(n,s.E.InvalidParameter,t);return(0,u.D$)(a[0],o,(0,s.V)((0,s.Q)(a[2],!0)),(0,i.b)((0,s.Q)(a[3],-1)))}))},e.functions.buffer=function(n,t){return e.standardFunctionAsync(n,t,((e,r,a)=>{if(a=(0,s.L)(a),(0,s.p)(a,2,3,n,t),null===a[0])return null;if(!(a[0]instanceof c.Z))throw new s.A(n,s.E.InvalidParameter,t);const o=(0,s.z)(a[1]);if(isNaN(o))throw new s.A(n,s.E.InvalidParameter,t);return 0===o?(0,i.c)(a[0]):(0,u.f3)(a[0],o,(0,i.b)((0,s.Q)(a[2],-1)))}))},e.functions.buffergeodetic=function(n,t){return e.standardFunctionAsync(n,t,((e,r,a)=>{if(a=(0,s.L)(a),(0,s.p)(a,2,3,n,t),null===a[0])return null;if(!(a[0]instanceof c.Z))throw new s.A(n,s.E.InvalidParameter,t);const o=(0,s.z)(a[1]);if(isNaN(o))throw new s.A(n,s.E.InvalidParameter,t);return 0===o?(0,i.c)(a[0]):(0,u.rd)(a[0],o,(0,i.b)((0,s.Q)(a[2],-1)))}))},e.functions.offset=function(n,t){return e.standardFunctionAsync(n,t,((e,r,a)=>{if(a=(0,s.L)(a),(0,s.p)(a,2,6,n,t),null===a[0])return null;if(!(a[0]instanceof h.Z||a[0]instanceof g.Z))throw new s.A(n,s.E.InvalidParameter,t);const o=(0,s.z)(a[1]);if(isNaN(o))throw new s.A(n,s.E.InvalidParameter,t);const l=(0,s.z)((0,s.Q)(a[4],10));if(isNaN(l))throw new s.A(n,s.E.InvalidParameter,t);const c=(0,s.z)((0,s.Q)(a[5],0));if(isNaN(c))throw new s.A(n,s.E.InvalidParameter,t);return(0,u.cv)(a[0],o,(0,i.b)((0,s.Q)(a[2],-1)),(0,s.B)((0,s.Q)(a[3],"round")).toLowerCase(),l,c)}))},e.functions.rotate=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>{i=(0,s.L)(i),(0,s.p)(i,2,3,n,t);let a=i[0];if(null===a)return null;if(!(a instanceof c.Z))throw new s.A(n,s.E.InvalidParameter,t);a instanceof l.Z&&(a=h.Z.fromExtent(a));const o=(0,s.z)(i[1]);if(isNaN(o))throw new s.A(n,s.E.InvalidParameter,t);const f=(0,s.Q)(i[2],null);if(null===f)return(0,u.U1)(a,o);if(f instanceof d.Z)return(0,u.U1)(a,o,f);throw new s.A(n,s.E.InvalidParameter,t)}))},e.functions.centroid=function(n,t){return e.standardFunctionAsync(n,t,((e,r,a)=>{if(a=(0,s.L)(a),(0,s.p)(a,1,1,n,t),null===a[0])return null;let o=a[0];if(((0,s.f)(a[0])||(0,s.e)(a[0]))&&(o=(0,s.U)(a[0],n.spatialReference)),null===o)return null;if(!(o instanceof c.Z))throw new s.A(n,s.E.InvalidParameter,t);return o instanceof d.Z?(0,s.G)((0,i.c)(a[0]),n.spatialReference):o instanceof h.Z?o.centroid:o instanceof g.Z?(0,s.W)(o):o instanceof f.Z?(0,s.X)(o):o instanceof l.Z?o.center:null}))},e.functions.multiparttosinglepart=function(n,t){return e.standardFunctionAsync(n,t,(async(e,r,a)=>{a=(0,s.L)(a),(0,s.p)(a,1,1,n,t);const o=[];if(null===a[0])return null;if(!(a[0]instanceof c.Z))throw new s.A(n,s.E.InvalidParameter,t);if(a[0]instanceof d.Z)return[(0,s.G)((0,i.c)(a[0]),n.spatialReference)];if(a[0]instanceof l.Z)return[(0,s.G)((0,i.c)(a[0]),n.spatialReference)];const p=await(0,u.og)(a[0]);if(p instanceof h.Z){const e=[],n=[];for(let t=0;t<p.rings.length;t++)if(p.isClockwise(p.rings[t])){const n=(0,m.im)({rings:[p.rings[t]],hasZ:!0===p.hasZ,hazM:!0===p.hasM,spatialReference:p.spatialReference.toJSON()});e.push(n)}else n.push({ring:p.rings[t],pt:p.getPoint(t,0)});for(let t=0;t<n.length;t++)for(let r=0;r<e.length;r++)if(e[r].contains(n[t].pt)){e[r].addRing(n[t].ring);break}return e}if(p instanceof g.Z){const e=[];for(let n=0;n<p.paths.length;n++){const t=(0,m.im)({paths:[p.paths[n]],hasZ:!0===p.hasZ,hazM:!0===p.hasM,spatialReference:p.spatialReference.toJSON()});e.push(t)}return e}if(a[0]instanceof f.Z){const e=(0,s.G)((0,i.c)(a[0]),n.spatialReference);for(let n=0;n<e.points.length;n++)o.push(e.getPoint(n));return o}return null}))},e.functions.issimple=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>{if(i=(0,s.L)(i),(0,s.p)(i,1,1,n,t),null===i[0])return!0;if(!(i[0]instanceof c.Z))throw new s.A(n,s.E.InvalidParameter,t);return(0,u.Gg)(i[0])}))},e.functions.simplify=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>{if(i=(0,s.L)(i),(0,s.p)(i,1,1,n,t),null===i[0])return null;if(!(i[0]instanceof c.Z))throw new s.A(n,s.E.InvalidParameter,t);return(0,u.og)(i[0])}))},e.functions.convexhull=function(n,t){return e.standardFunctionAsync(n,t,((e,r,i)=>{if(i=(0,s.L)(i),(0,s.p)(i,1,1,n,t),null===i[0])return null;if(!(i[0]instanceof c.Z))throw new s.A(n,s.E.InvalidParameter,t);return(0,u.JI)(i[0])}))},e.functions.getuser=function(n,t){return e.standardFunctionAsync(n,t,(async(e,r,i)=>{(0,s.p)(i,0,2,n,t);let o=(0,s.Q)(i[1],""),l=!0===o;if(o=!0===o||!1===o?"":(0,s.B)(o),0===i.length||i[0]instanceof s.Y){let e=null;e=n.services?.portal?n.services.portal:p.Z.getDefault(),i.length>0&&(e=(0,a.g)(i[0],e));const t=await(0,w.l)(e,o,l);if(t){const e=JSON.parse(JSON.stringify(t));for(const n of["lastLogin","created","modified"])void 0!==e[n]&&null!==e[n]&&(e[n]=new Date(e[n]));return s.F.convertObjectToArcadeDictionary(e,(0,s.Z)(n))}return null}let c=null;if((0,s.y)(i[0])&&(c=i[0]),c){if(l=!1,o)return null;await c.load();const e=await c.getOwningSystemUrl();if(!e){if(!o){const e=await c.getIdentityUser();return e?s.F.convertObjectToArcadeDictionary({username:e},(0,s.Z)(n)):null}return null}let t=null;t=n.services?.portal?n.services.portal:p.Z.getDefault(),t=(0,a.g)(new s.Y(e),t);const r=await(0,w.l)(t,o,l);if(r){const e=JSON.parse(JSON.stringify(r));for(const n of["lastLogin","created","modified"])void 0!==e[n]&&null!==e[n]&&(e[n]=new Date(e[n]));return s.F.convertObjectToArcadeDictionary(e,(0,s.Z)(n))}return null}throw new s.A(n,s.E.InvalidParameter,t)}))}),e.functions.nearestcoordinate=function(n,t){return e.standardFunctionAsync(n,t,(async(e,r,i)=>{if(i=(0,s.L)(i),(0,s.p)(i,2,2,n,t),!(i[0]instanceof c.Z||null===i[0]))throw new s.A(n,s.E.InvalidParameter,t);if(!(i[1]instanceof d.Z||null===i[1]))throw new s.A(n,s.E.InvalidParameter,t);if(null===i[0]||null===i[1])return null;const a=await(0,u.FH)(i[0],i[1]);return null===a?null:s.F.convertObjectToArcadeDictionary({coordinate:a.coordinate,distance:a.distance,sideOfLine:0===a.distance?"straddle":a.isRightSide?"right":"left"},(0,s.Z)(n),!1,!0)}))},e.functions.nearestvertex=function(n,t){return e.standardFunctionAsync(n,t,(async(e,r,i)=>{if(i=(0,s.L)(i),(0,s.p)(i,2,2,n,t),!(i[0]instanceof c.Z||null===i[0]))throw new s.A(n,s.E.InvalidParameter,t);if(!(i[1]instanceof d.Z||null===i[1]))throw new s.A(n,s.E.InvalidParameter,t);if(null===i[0]||null===i[1])return null;const a=await(0,u._L)(i[0],i[1]);return null===a?null:s.F.convertObjectToArcadeDictionary({coordinate:a.coordinate,distance:a.distance,sideOfLine:0===a.distance?"straddle":a.isRightSide?"right":"left"},(0,s.Z)(n),!1,!0)}))}}t(76506),t(32101),t(31450),t(60991),t(92143),t(12047),t(29768),t(21972),t(17533),t(86656),t(66396),t(22723),t(6540),t(91306),t(34250),t(62062),t(6906),t(50406),t(74569),t(60947),t(2906),t(57251),t(73173),t(82058),t(22781),t(35132),t(97714),t(86787),t(63685),t(89034),t(98380),t(92482),t(82426),t(72836),t(66106),t(29794),t(97546),t(59465),t(9801),t(53523),t(42911),t(46826),t(45433),t(54732),t(36097),t(33921),t(3482),t(40267),t(53326),t(1709),t(35154),t(14249),t(66284),t(8925),t(76131),t(87239),t(65514),t(46987),t(15173),t(89914),t(37453),t(81184),t(33101),t(58943),t(67477),t(78533),t(74653),t(91091)},20625:(e,n,t)=>{t.d(n,{g:()=>s});var r=t(49900);function s(e,n){return null===e?n:new r.Z({url:e.field("url")})}},95204:(e,n,t)=>{t.d(n,{l:()=>i});var r=t(88762),s=t(82058);async function i(e,n,t){const i=r.id?.findCredential(e.restUrl);if(!i)return null;if("loaded"===e.loadStatus&&""===n&&e.user?.sourceJSON&&!1===t)return e.user.sourceJSON;const a={responseType:"json",query:{f:"json"}};if(t&&(a.query.returnUserLicenseTypeExtensions=!0),""===n){const n=await(0,s.Z)(e.restUrl+"/community/self",a);if(n.data){const e=n.data;if(e?.username)return e}return null}const o=await(0,s.Z)(e.restUrl+"/community/users/"+n,a);if(o.data){const e=o.data;return e.error?null:e}return null}},46987:(e,n,t)=>{t.d(n,{Z:()=>c,r:()=>l});var r=t(22723),s=t(50406),i=t(15173),a=t(37453);t(60991),t(76506),t(92143),t(31450),t(6540),t(66396),t(89914),t(62062),t(88762),t(32101),t(12047),t(29768),t(21972),t(17533),t(86656),t(91306),t(34250),t(6906);const o=new FinalizationRegistry((e=>{e.close()}));function l(e,n){o.register(e,n,n)}class c{constructor(){this._inUseClients=new Array,this._clients=new Array,this._clientPromises=new Array,this._ongoingJobsQueue=new i.Q}destroy(){this.close()}get closed(){return!this._clients?.length}open(e,n){return new Promise(((t,r)=>{let i=!0;const o=e=>{(0,s.k_)(n.signal),i&&(i=!1,e())};this._clients.length=e.length,this._clientPromises.length=e.length,this._inUseClients.length=e.length;for(let i=0;i<e.length;++i){const l=e[i];(0,s.y8)(l)?this._clientPromises[i]=l.then((e=>(this._clients[i]=new a.default(e,n,this._ongoingJobsQueue),o(t),this._clients[i])),(()=>(o(r),null))):(this._clients[i]=new a.default(l,n,this._ongoingJobsQueue),this._clientPromises[i]=Promise.resolve(this._clients[i]),o(t))}}))}broadcast(e,n,t){const r=new Array(this._clientPromises.length);for(let s=0;s<this._clientPromises.length;++s){const i=this._clientPromises[s];r[s]=i.then((r=>r?.invoke(e,n,t)))}return r}close(){let e;for(;e=this._ongoingJobsQueue.pop();)e.resolver.reject((0,s.zE)(`Worker closing, aborting job calling '${e.methodName}'`));for(const e of this._clientPromises)e.then((e=>e?.close()));this._clients.length=0,this._clientPromises.length=0,this._inUseClients.length=0,o.unregister(this)}invoke(e,n,t){return this.apply(e,[n],t)}apply(e,n,t){const r=(0,s.hh)();this._ongoingJobsQueue.push({methodName:e,data:n,invokeOptions:t,resolver:r});for(let e=0;e<this._clientPromises.length;e++){const n=this._clients[e];n?n.jobAdded():this._clientPromises[e].then((e=>e?.jobAdded()))}return r.promise}createInvokeProxy(e){return(0,a.c)(this,e)}on(e,n){return Promise.all(this._clientPromises).then((()=>(0,r.h)(this._clients.map((t=>t.on(e,n))))))}openPorts(){return new Promise((e=>{const n=new Array(this._clientPromises.length);let t=n.length;for(let r=0;r<this._clientPromises.length;++r)this._clientPromises[r].then((s=>{s&&(n[r]=s.openPort()),0==--t&&e(n)}))}))}get test(){return{numClients:this._clients.length}}}},65514:(e,n,t)=>{t.d(n,{bA:()=>z});var r=t(60991),s=t(76506),i=t(50406),a=t(46987),o=t(37453),l=t(92143),c=t(71252),u=t(82058),f=t(32101),d=t(31450),h=(t(66284),t(88762)),g=t(73173),m=t(6906),p=t(3482);t(22723),t(15173),t(6540),t(66396),t(89914),t(62062),t(12047),t(29768),t(21972),t(17533),t(86656),t(91306),t(34250),t(8925),t(57251),t(76131),t(36097),t(87239);const w={async request(e,n){const t=e.options,r=t.responseType;t.signal=n?.signal,t.responseType="native"===r||"native-request-init"===r?"native-request-init":r&&["blob","json","text"].includes(r)&&(0,f.oh)(e.url)?.after?r:"array-buffer";const s=await(0,u.Z)(e.url,t),i={data:s.data,httpStatus:s.httpStatus,ssl:s.ssl};switch(s.requestOptions?.responseType){case"native-request-init":return delete i.data.signal,i;case"blob":i.data=await i.data.arrayBuffer();break;case"json":i.data=(new TextEncoder).encode(JSON.stringify(i.data)).buffer;break;case"text":i.data=(new TextEncoder).encode(i.data).buffer}return{result:i,transferList:[i.data]}}};let y=null;y=(0,f.hF)((0,g.g)("esri/core/workers/init.js"));const b={};b.baseUrl=(0,f.hF)((0,g.g)("dojo/")),b.packages=[{name:"esri",location:"../esri"}];class v{constructor(){const e=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach((n=>{this[n]=(...t)=>e[n](...t)}))}}class A{constructor(){this._dispatcher=new v,this._workerPostMessage({type:o.M.HANDSHAKE})}terminate(){}get onmessage(){return this._onmessageHandler}set onmessage(e){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),this._onmessageHandler=e,e&&this.addEventListener("message",e)}get onmessageerror(){return this._onmessageerrorHandler}set onmessageerror(e){this._onmessageerrorHandler&&this.removeEventListener("messageerror",this._onmessageerrorHandler),this._onmessageerrorHandler=e,e&&this.addEventListener("messageerror",e)}get onerror(){return this._onerrorHandler}set onerror(e){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),this._onerrorHandler=e,e&&this.addEventListener("error",e)}postMessage(e){(0,m.n)((()=>{this._workerMessageHandler(new MessageEvent("message",{data:e}))}))}dispatchEvent(e){return this._dispatcher.dispatchEvent(e)}addEventListener(e,n,t){this._dispatcher.addEventListener(e,n,t)}removeEventListener(e,n,t){this._dispatcher.removeEventListener(e,n,t)}_workerPostMessage(e){(0,m.n)((()=>{this.dispatchEvent(new MessageEvent("message",{data:e}))}))}async _workerMessageHandler(e){const n=(0,o.r)(e);if(n&&n.type===o.M.OPEN){const{modulePath:e,jobId:t}=n;let r=await o.default.loadWorker(e);r||(r=await import(e));const s=o.default.connect(r);this._workerPostMessage({type:o.M.OPENED,jobId:t,data:s})}}}const E=()=>l.L.getLogger("esri.core.workers.workerFactory"),{HANDSHAKE:k}=o.M;let P,_;const Z="Failed to create Worker. Fallback to execute module in main thread";async function I(e){return new Promise((n=>{function t(s){const i=(0,o.r)(s);i&&i.type===k&&(e.removeEventListener("message",t),e.removeEventListener("error",r),n(e))}function r(n){n.preventDefault(),e.removeEventListener("message",t),e.removeEventListener("error",r),E().warn("Failed to create Worker. Fallback to execute module in main thread",n),(e=new A).addEventListener("message",t),e.addEventListener("error",r)}e.addEventListener("message",t),e.addEventListener("error",r)}))}let L=0;const{ABORT:N,INVOKE:O,OPEN:S,OPENED:R,RESPONSE:F}=o.M;class C{static async create(e){const n=await async function(){if(!(0,s.h)("esri-workers"))return I(new A);if(!P&&!_)try{const e='let globalId=0;const outgoing=new Map,configuration=JSON.parse("{CONFIGURATION}");self.esriConfig=configuration.esriConfig;const workerPath=self.esriConfig.workers.workerPath,HANDSHAKE=0,OPEN=1,OPENED=2,RESPONSE=3,INVOKE=4,ABORT=5;function createAbortError(){const e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,o,r){const t=r&&r.signal,n=globalId++;return new Promise(((r,s)=>{if(t){if(t.aborted)return s(createAbortError());t.addEventListener("abort",(()=>{outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:ABORT,jobId:n}),s(createAbortError()))}))}outgoing.set(n,{resolve:r,reject:s}),self.postMessage({type:INVOKE,jobId:n,methodName:e,abortable:null!=t,data:o})}))}let workerRevisionChecked=!1;function checkWorkerRevision(e){if(!workerRevisionChecked&&e.kernelInfo){workerRevisionChecked=!0;const{revision:o,fullVersion:r}=configuration.kernelInfo,{revision:t,fullVersion:n,version:s}=e.kernelInfo;esriConfig.assetsPath!==esriConfig.defaultAssetsPath&&o!==t&&console.warn(`Version mismatch detected between ArcGIS Maps SDK for JavaScript modules and assets. For more information visit https://bit.ly/3QnsuSo.\\nModules version: ${r}\\nAssets version: ${n??s}\\nAssets path: ${esriConfig.assetsPath}`)}}function messageHandler(e){const o=receiveMessage(e);if(!o)return;const r=o.jobId;switch(o.type){case OPEN:let n;function t(e){const o=n.connect(e);self.postMessage({type:OPENED,jobId:r,data:o},[o])}"function"==typeof define&&define.amd?require([workerPath],(e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||new Promise((e=>{require([o.modulePath],e)})))).then(t)})):"System"in self&&"function"==typeof System.import?System.import(workerPath).then((e=>(n=e.default,checkWorkerRevision(n),n.loadWorker(o.modulePath)))).then((e=>e||System.import(o.modulePath))).then(t):esriConfig.workers.useDynamicImport?import(workerPath).then((e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||import(o.modulePath))).then(t)})):(self.RemoteClient||importScripts(workerPath),n=self.RemoteClient.default||self.RemoteClient,checkWorkerRevision(n),n.loadWorker(o.modulePath).then(t));break;case RESPONSE:if(outgoing.has(r)){const s=outgoing.get(r);outgoing.delete(r),o.error?s.reject(JSON.parse(o.error)):s.resolve(o.data)}}}self.dojoConfig=configuration.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});'.split('"{CONFIGURATION}"').join(`'${function(){let e;if(null!=d.default.default){const n={...d.default};delete n.default,e=JSON.parse(JSON.stringify(n))}else e=JSON.parse(JSON.stringify(d.default));e.assetsPath=(0,f.hF)(e.assetsPath),e.defaultAssetsPath=e.defaultAssetsPath?(0,f.hF)(e.defaultAssetsPath):void 0,e.request.interceptors=[],e.log.interceptors=[],e.locale=(0,p.g)(),e.has={"esri-csp-restrictions":(0,s.h)("esri-csp-restrictions"),"esri-2d-debug":!1,"esri-2d-update-debug":(0,s.h)("esri-2d-update-debug"),"esri-2d-log-updating":(0,s.h)("esri-2d-log-updating"),"featurelayer-pbf":(0,s.h)("featurelayer-pbf"),"featurelayer-fast-triangulation-enabled":(0,s.h)("featurelayer-fast-triangulation-enabled"),"featurelayer-simplify-thresholds":(0,s.h)("featurelayer-simplify-thresholds"),"featurelayer-simplify-payload-size-factors":(0,s.h)("featurelayer-simplify-payload-size-factors"),"featurelayer-simplify-mobile-factor":(0,s.h)("featurelayer-simplify-mobile-factor"),"featurelayer-query-max-depth":(0,s.h)("featurelayer-query-max-depth"),"featurelayer-query-pausing-enabled":(0,s.h)("featurelayer-query-pausing-enabled"),"featurelayer-snapshot-enabled":(0,s.h)("featurelayer-snapshot-enabled"),"esri-atomics":(0,s.h)("esri-atomics"),"esri-shared-array-buffer":(0,s.h)("esri-shared-array-buffer"),"esri-tiles-debug":(0,s.h)("esri-tiles-debug"),"esri-workers-arraybuffer-transfer":(0,s.h)("esri-workers-arraybuffer-transfer"),"feature-polyline-generalization-factor":(0,s.h)("feature-polyline-generalization-factor"),"host-webworker":1},e.workers.loaderUrl?e.workers.loaderUrl=(0,f.hF)(e.workers.loaderUrl):y&&(e.workers.loaderUrl=y),e.workers.workerPath?e.workers.workerPath=(0,f.hF)(e.workers.workerPath):e.workers.workerPath="esri/core/workers/RemoteClient",e.workers.useDynamicImport=!1;const n=d.default.workers.loaderConfig,t=function(e){const n={async:e.async,isDebug:e.isDebug,locale:e.locale,baseUrl:e.baseUrl,has:{...e.has},map:{...e.map},packages:e.packages?.concat()||[],paths:{...e.paths}};return e.hasOwnProperty("async")||(n.async=!0),e.hasOwnProperty("isDebug")||(n.isDebug=!1),e.baseUrl||(n.baseUrl=b.baseUrl),b.packages?.forEach((e=>{!function(e,n){for(const t of e)if(t.name===n.name)return;e.push(n)}(n.packages??[],e)})),n}({baseUrl:n?.baseUrl,locale:(0,p.g)(),has:{"csp-restrictions":1,"dojo-test-sniff":0,"host-webworker":1,...n?.has},map:{...n?.map},paths:{...n?.paths},packages:n?.packages||[]}),r={buildDate:h.rh,fullVersion:h.bR,revision:h.LB};return JSON.stringify({esriConfig:e,loaderConfig:t,kernelInfo:r})}()}'`);P=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}catch(e){_=e||{}}let e;if(P)try{e=new Worker(P,{name:"esri-worker-"+L++})}catch(n){E().warn(Z,_),e=new A}else E().warn(Z,_),e=new A;return I(e)}();return new C(n,e)}constructor(e,n){this._outJobs=new Map,this._inJobs=new Map,this.worker=e,this.id=n,e.addEventListener("message",this._onMessage.bind(this)),e.addEventListener("error",(e=>{e.preventDefault(),l.L.getLogger("esri.core.workers.WorkerOwner").error(e)}))}terminate(){this.worker.terminate()}async open(e,n={}){const{signal:t}=n,r=(0,o.n)();return new Promise(((n,s)=>{const a={resolve:n,reject:s,abortHandle:(0,i.$F)(t,(()=>{this._outJobs.delete(r),this._post({type:N,jobId:r})}))};this._outJobs.set(r,a),this._post({type:S,jobId:r,modulePath:e})}))}_onMessage(e){const n=(0,o.r)(e);if(n)switch(n.type){case R:this._onOpenedMessage(n);break;case F:this._onResponseMessage(n);break;case N:this._onAbortMessage(n);break;case O:this._onInvokeMessage(n)}}_onAbortMessage(e){const n=this._inJobs,t=e.jobId,r=n.get(t);r&&(r.controller&&r.controller.abort(),n.delete(t))}_onInvokeMessage(e){const{methodName:n,jobId:t,data:r,abortable:s}=e,a=s?new AbortController:null,l=this._inJobs,c=w[n];let u;try{if("function"!=typeof c)throw new TypeError(`${n} is not a function`);u=c.call(null,r,{signal:a?a.signal:null})}catch(e){return void this._post({type:F,jobId:t,error:(0,o.t)(e)})}(0,i.y8)(u)?(l.set(t,{controller:a,promise:u}),u.then((e=>{l.has(t)&&(l.delete(t),this._post({type:F,jobId:t},e))}),(e=>{l.has(t)&&(l.delete(t),e||(e={message:"Error encountered at method"+n}),(0,i.D_)(e)||this._post({type:F,jobId:t,error:(0,o.t)(e||{message:`Error encountered at method ${n}`})}))}))):this._post({type:F,jobId:t},u)}_onOpenedMessage(e){const{jobId:n,data:t}=e,r=this._outJobs.get(n);r&&(this._outJobs.delete(n),(0,c.r)(r.abortHandle),r.resolve(t))}_onResponseMessage(e){const{jobId:n,error:t,data:s}=e,i=this._outJobs.get(n);i&&(this._outJobs.delete(n),(0,c.r)(i.abortHandle),t?i.reject(r.Z.fromJSON(JSON.parse(t))):i.resolve(s))}_post(e,n,t){return(0,o.p)(this.worker,e,n,t)}}const j=(0,s.h)("host-browser")?Math.min(navigator.hardwareConcurrency-1,(0,s.h)("workers-pool-size")):0;let x=(0,s.h)("esri-mobile")?Math.min(j,3):j;x||(x=(0,s.h)("safari")&&(0,s.h)("mac")?7:2);let M=0;const Q=[];async function J(e,n){const t=new a.Z,{registryTarget:r,...s}=n;return await t.open(e,s),r&&(0,a.r)(r,t),t}async function z(e,n={}){if("string"!=typeof e)throw new r.Z("workers:undefined-module","modulePath is missing");let t=n.strategy||"distributed";if((0,s.h)("host-webworker")&&!(0,s.h)("esri-workers")&&(t="local"),"local"===t){let t=await o.default.loadWorker(e);t||(t=await import(e)),(0,i.k_)(n.signal);const r=n.client||t;return J([o.default.connect(t)],{...n,client:r})}if(await async function(){if(D)return D;U=new AbortController;const e=[];for(let n=0;n<x;n++){const t=C.create(n).then((e=>(Q[n]=e,e)));e.push(t)}return D=Promise.all(e),D}(),(0,i.k_)(n.signal),"dedicated"===t){const t=M++%x;return J([await Q[t].open(e,n)],n)}if(n.maxNumWorkers&&n.maxNumWorkers>0){const t=Math.min(n.maxNumWorkers,x);if(t<x){const r=new Array(t);for(let s=0;s<t;++s){const t=M++%x;r[s]=Q[t].open(e,n)}return J(r,n)}}return J(Q.map((t=>t.open(e,n))),n)}let U,D=null},42870:(e,n,t)=>{t.d(n,{CJ:()=>J,Cz:()=>M,D$:()=>x,ED:()=>v,FH:()=>F,G0:()=>N,Gg:()=>k,JI:()=>_,LV:()=>E,Nm:()=>A,Sp:()=>I,TE:()=>m,U1:()=>j,W4:()=>y,Y4:()=>U,_L:()=>C,cv:()=>O,e5:()=>Z,f3:()=>S,fS:()=>p,j2:()=>Q,jU:()=>g,kK:()=>w,kQ:()=>D,og:()=>P,oq:()=>f,r3:()=>h,rd:()=>R,sz:()=>z,uh:()=>b,wf:()=>L,z7:()=>d}),t(74569);var r=t(65514),s=t(91597),i=t(32422);function a(e){return Array.isArray(e)?e[0]?.spatialReference:e?.spatialReference}function o(e){return e?Array.isArray(e)?e.map(o):e.toJSON?e.toJSON():e:e}function l(e){return Array.isArray(e)?e.map((e=>(0,i.im)(e))):(0,i.im)(e)}let c;async function u(e,n){return(await async function(){return c||(c=(0,r.bA)("geometryEngineWorker",{strategy:"distributed"})),c}()).invoke("executeGEOperation",{operation:e,parameters:o(n)})}async function f(e,n){return l(await u("clip",[a(e),e,n]))}async function d(e,n){return l(await u("cut",[a(e),e,n]))}function h(e,n){return u("contains",[a(e),e,n])}function g(e,n){return u("crosses",[a(e),e,n])}function m(e,n,t){return u("distance",[a(e),e,n,t])}function p(e,n){return u("equals",[a(e),e,n])}function w(e,n){return u("intersects",[a(e),e,n])}function y(e,n){return u("touches",[a(e),e,n])}function b(e,n){return u("within",[a(e),e,n])}function v(e,n){return u("disjoint",[a(e),e,n])}function A(e,n){return u("overlaps",[a(e),e,n])}function E(e,n,t){return u("relate",[a(e),e,n,t])}function k(e){return u("isSimple",[a(e),e])}async function P(e){return l(await u("simplify",[a(e),e]))}async function _(e,n=!1){return l(await u("convexHull",[a(e),e,n]))}async function Z(e,n){return l(await u("difference",[a(e),e,n]))}async function I(e,n){return l(await u("symmetricDifference",[a(e),e,n]))}async function L(e,n){return l(await u("intersect",[a(e),e,n]))}async function N(e,n=null){const t=function(e,n){let t;return Array.isArray(e)?t=e:(t=[],t.push(e),null!=n&&t.push(n)),t}(e,n);return l(await u("union",[a(t),t]))}async function O(e,n,t,r,s,i){return l(await u("offset",[a(e),e,n,t,r,s,i]))}async function S(e,n,t,r=!1){const s=[a(e),e,n,t,r];return l(await u("buffer",s))}async function R(e,n,t,r,s,i){const o=[a(e),e,n,t,r,s,i];return l(await u("geodesicBuffer",o))}async function F(e,n,t=!0){const r=await u("nearestCoordinate",[a(e),e,n,t]);return{...r,coordinate:s.Z.fromJSON(r.coordinate)}}async function C(e,n){const t=await u("nearestVertex",[a(e),e,n]);return{...t,coordinate:s.Z.fromJSON(t.coordinate)}}async function j(e,n,t){if(null==e)throw new H;const r=e.spatialReference;if(null==(t=t??function(e){return"xmin"in e?e.center:"x"in e?e:e.extent?.center}(e)))throw new H;const s=e.constructor.fromJSON(await u("rotate",[r,e,n,t]));return s.spatialReference=r,s}async function x(e,n,t,r){return l(await u("generalize",[a(e),e,n,t,r]))}async function M(e,n,t){return l(await u("densify",[a(e),e,n,t]))}async function Q(e,n,t,r=0){return l(await u("geodesicDensify",[a(e),e,n,t,r]))}function J(e,n){return u("planarArea",[a(e),e,n])}function z(e,n){return u("planarLength",[a(e),e,n])}function U(e,n,t){return u("geodesicArea",[a(e),e,n,t])}function D(e,n,t){return u("geodesicLength",[a(e),e,n,t])}t(91306),t(76506),t(92143),t(31450),t(21801),t(29768),t(34250),t(66396),t(22723),t(86656),t(60991),t(17533),t(6540),t(73796),t(12047),t(21972),t(62062),t(6906),t(50406),t(97714),t(60947),t(53785),t(57251),t(73173),t(82058),t(88762),t(32101),t(2906),t(35132),t(84069),t(86787),t(44567),t(63685),t(89034),t(98380),t(92482),t(82426),t(72836),t(66106),t(29794),t(92896),t(22781),t(46987),t(15173),t(89914),t(37453),t(66284),t(8925),t(3482),t(76131),t(36097),t(87239);class H extends Error{constructor(){super("Illegal Argument Exception")}}}}]);