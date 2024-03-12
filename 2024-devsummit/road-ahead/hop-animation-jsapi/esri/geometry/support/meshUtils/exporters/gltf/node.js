// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/libs/gl-matrix-2/math/quat","../../../../../core/libs/gl-matrix-2/factories/quatf64","../../../../../core/libs/gl-matrix-2/factories/vec3f64"],function(c,d,e,b){class f{constructor(a){this.mesh=a;this.name="";this.translation=b.create();this.rotation=e.create();this.scale=b.clone(b.ONES);this._nodes=[]}addNode(a){if(this._nodes.includes(a))throw Error("Node already added");this._nodes.push(a)}forEachNode(a){this._nodes.forEach(a)}set rotationAngles(a){d.fromEuler(this.rotation,
a[0],a[1],a[2])}}c.Node=f;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});