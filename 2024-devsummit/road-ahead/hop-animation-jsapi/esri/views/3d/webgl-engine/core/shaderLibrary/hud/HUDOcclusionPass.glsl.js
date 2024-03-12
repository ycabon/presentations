// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./AlignPixel.glsl","../shading/MultipassGeometryTest.glsl","../shading/MultipassTerrainTest.glsl","../../shaderModules/interfaces"],function(e,f,g,h,b){e.HUDOcclusionPass=function(c,a){const {vertex:d,fragment:k}=c;d.include(f.AlignPixel);a.multipassEnabled&&(d.include(g.multipassGeometryTest),c.varyings.add("depth","float"));d.code.add(b.glsl`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${a.multipassEnabled?b.glsl`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${a.multipassEnabled?"depth \x3d projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `);c.include(h.multipassTerrainTest,a);k.code.add(b.glsl`
  void main() {
    fragColor = vec4(1);
    ${a.multipassEnabled?b.glsl`
        if(terrainDepthTest(depth)) {
          fragColor.g = 0.5;
        }`:""}
  }
  `)};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});