// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/libs/gl-matrix-2/factories/vec3f64"],function(a,b){class e{constructor(c=b.create()){this.intensity=c}}class f{constructor(c=b.create(),d=b.fromValues(.57735,.57735,.57735)){this.intensity=c;this.direction=d}}class g{constructor(c=b.create(),d=b.fromValues(.57735,.57735,.57735),h=!0,k=1,l=1){this.intensity=c;this.direction=d;this.castShadows=h;this.specularStrength=k;this.environmentStrength=l}}class m{constructor(){this.r=[0];this.g=[0];this.b=[0]}}a.AmbientLight=
e;a.FillLight=f;a.MainLight=g;a.SphericalHarmonicsAmbientLight=m;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});