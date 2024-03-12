// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/PooledArray"],function(a,c){class e{constructor(){this.adds=new c;this.removes=new c;this.updates=new c({allocator:b=>b||new d,deallocator:b=>{b.renderGeometry=null;return b}})}clear(){this.adds.clear();this.removes.clear();this.updates.clear()}prune(){this.adds.prune();this.removes.prune();this.updates.prune()}get empty(){return 0===this.adds.length&&0===this.removes.length&&0===this.updates.length}}class d{}class f{constructor(){this.adds=[];this.removes=[];this.updates=
[]}}a.ChangeSet=e;a.MaterialChangeSet=f;a.RenderGeometryUpdate=d;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});