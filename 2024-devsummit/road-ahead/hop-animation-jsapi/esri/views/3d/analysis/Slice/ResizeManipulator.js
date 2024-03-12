// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../Color ../../../../core/reactiveUtils ../../../../core/libs/gl-matrix-2/factories/vec3f64 ./sliceToolConfig ./sliceToolUtils ../../interactive/Manipulator3D ../../interactive/manipulatorUtils ../../interactive/RenderObject ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/lib/Material ../../webgl-engine/materials/RibbonLineMaterial ../../../interactive/interfaces".split(" "),function(q,x,r,c,a,d,y,z,k,l,A,m,t){function B({isCorner:e,unfocusedMaterial:f,focusedMaterial:h,
outlineMaterial:n}){const b=e?[c.fromValues(1,0,0),c.fromValues(0,0,0),c.fromValues(0,1,0)]:[c.fromValues(1,0,0),c.fromValues(-1,0,0)];return{renderObjects:[new k.RenderObject(l.createPolylineGeometry(f,b),t.ManipulatorStateFlags.Unfocused|d.resizeNormal),new k.RenderObject(l.createPolylineGeometry(h,b),t.ManipulatorStateFlags.Focused|d.resizeNormal),new k.RenderObject(l.createPolylineGeometry(n,b),d.resizeOutlineOnly)],collisionType:{type:"line",paths:[b]},radius:e?a.resizeHandleCornerInputRadius:
a.resizeHandleEdgeInputRadius,state:d.resizeNormal}}class C extends y.Manipulator3D{constructor(e,f){const h=(f=d.isDiagonalResizeHandle(f))?a.resizeHandleCornerWidth:a.resizeHandleEdgeWidth,n=h*a.displayFocusMultiplier,b=a.resizeHandleEdgeWidth,p={renderOccluded:A.RenderOccludedFlag.OccludeAndTransparent,isDecoration:!0},u=new m.RibbonLineMaterial({...p,width:h}),v=new m.RibbonLineMaterial({...p,width:n}),w=new m.RibbonLineMaterial({...p,width:b});super({view:e,...z.worldScaledManipulatorSettings,
...B({isCorner:f,unfocusedMaterial:u,focusedMaterial:v,outlineMaterial:w})});this._themeHandle=r.watch(()=>e.effectiveTheme.accentColor,g=>{g=x.toUnitRGBA(g);u.setParameters({color:g});v.setParameters({color:g});w.setParameters({color:g})},r.initial)}destroy(){this._themeHandle.remove();super.destroy()}}q.ResizeManipulator=C;Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});