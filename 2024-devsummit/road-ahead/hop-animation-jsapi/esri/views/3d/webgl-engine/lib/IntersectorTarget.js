// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/libs/gl-matrix-2/factories/vec3f64"],function(b,k){class e{constructor(a,c,d){this.object=a;this.geometryId=c;this.triangleNr=d}}class f extends e{constructor(a,c,d,g){super(a,c,d);this.center=null!=g?k.clone(g):null}}class l extends f{}class h{constructor(a){this.layerUid=a}}class m extends h{constructor(a,c){super(a);this.graphicUid=c}}b.Graphic3DTarget=m;b.HudTarget=f;b.LayerTarget=h;b.ObjectTarget=e;b.ValidHudTarget=l;Object.defineProperty(b,Symbol.toStringTag,
{value:"Module"})});