// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/promiseUtils","../../geometry/projection"],function(l,g,m,c){async function n(b){h||=(new Promise((a,d)=>l(["../../portal/support/geometryServiceUtils"],a,d))).then(a=>f=a);await h;m.throwIfAborted(b)}async function k(b,a,d,e){if(!b)return null;const p=b.spatialReference;if(c.isLoaded()||c.canProjectWithoutEngine(p,a))return c.project(b,a);if(f)return f.projectGeometry(b,a,d,e);await Promise.race([n(e),c.load(e)]);return k(b,a,d,e)}let h=null,f;g.projectWithEngineOrService=
k;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});