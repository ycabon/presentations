// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/tsSupport/makeTemplateObjectHelper ../../../../../../core/libs/gl-matrix-2/mat3f64 ../../../../../../core/libs/gl-matrix-2/mat4f64 ../../../../../../core/libs/gl-matrix-2/vec3f64 ./PositionAttribute.glsl ../util/DoublePrecision.glsl ../../shaderModules/interfaces".split(" "),function(r,d,f,g,n,e,p,q,h){function k(a,c){a.include(p.PositionAttribute);a.include(q.DoublePrecision,c);a.varyings.add("vPositionWorldCameraRelative","vec3");a.varyings.add("vPosition_view",
"vec3");a.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3");a.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3");a.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3");a.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3");a.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3");a.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3");a.vertex.uniforms.add("uTransform_ProjFromView","mat4");a.vertex.code.add(h.glsl(l||(l=f(["\n    // compute position in world space orientation, but relative to the camera position\n    vec3 positionWorldCameraRelative() {\n      vec3 rotatedModelPosition \x3d uTransform_WorldFromModel_RS * positionModel();\n\n      vec3 transform_CameraRelativeFromModel \x3d dpAdd(\n        uTransform_WorldFromModel_TL,\n        uTransform_WorldFromModel_TH,\n        -uTransform_WorldFromView_TL,\n        -uTransform_WorldFromView_TH\n      );\n\n      return transform_CameraRelativeFromModel + rotatedModelPosition;\n    }\n\n    // position in view space, that is relative to the camera position and orientation\n    vec3 position_view() {\n      return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();\n    }\n\n    // compute gl_Position and forward related varyings to fragment shader\n    void forwardPosition() {\n      vPositionWorldCameraRelative \x3d positionWorldCameraRelative();\n      vPosition_view \x3d position_view();\n      gl_Position \x3d uTransform_ProjFromView * vec4(vPosition_view, 1.0);\n    }\n  "],
["\n    // compute position in world space orientation, but relative to the camera position\n    vec3 positionWorldCameraRelative() {\n      vec3 rotatedModelPosition \x3d uTransform_WorldFromModel_RS * positionModel();\n\n      vec3 transform_CameraRelativeFromModel \x3d dpAdd(\n        uTransform_WorldFromModel_TL,\n        uTransform_WorldFromModel_TH,\n        -uTransform_WorldFromView_TL,\n        -uTransform_WorldFromView_TH\n      );\n\n      return transform_CameraRelativeFromModel + rotatedModelPosition;\n    }\n\n    // position in view space, that is relative to the camera position and orientation\n    vec3 position_view() {\n      return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();\n    }\n\n    // compute gl_Position and forward related varyings to fragment shader\n    void forwardPosition() {\n      vPositionWorldCameraRelative \x3d positionWorldCameraRelative();\n      vPosition_view \x3d position_view();\n      gl_Position \x3d uTransform_ProjFromView * vec4(vPosition_view, 1.0);\n    }\n  "]))));
a.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3");a.fragment.code.add(h.glsl(m||(m=f(["\n    vec3 positionWorld() {\n      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;\n    }\n  "],["\n    vec3 positionWorld() {\n      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;\n    }\n  "]))))}Object.defineProperty(d,"__esModule",{value:!0});d.VertexPosition=k;(function(a){var c=function(){return function(){this.worldFromModel_RS=g.mat3f64.create();this.worldFromModel_TH=
e.vec3f64.create();this.worldFromModel_TL=e.vec3f64.create()}}();a.ModelTransform=c;c=function(){return function(){this.worldFromView_TH=e.vec3f64.create();this.worldFromView_TL=e.vec3f64.create();this.viewFromCameraRelative_RS=g.mat3f64.create();this.projFromView=n.mat4f64.create()}}();a.ViewProjectionTransform=c;a.bindModelTransform=function(a,b){a.setUniformMatrix3fv("uTransform_WorldFromModel_RS",b.worldFromModel_RS);a.setUniform3fv("uTransform_WorldFromModel_TH",b.worldFromModel_TH);a.setUniform3fv("uTransform_WorldFromModel_TL",
b.worldFromModel_TL)};a.bindViewProjTransform=function(a,b){a.setUniform3fv("uTransform_WorldFromView_TH",b.worldFromView_TH);a.setUniform3fv("uTransform_WorldFromView_TL",b.worldFromView_TL);a.setUniformMatrix4fv("uTransform_ProjFromView",b.projFromView);a.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",b.viewFromCameraRelative_RS)}})(k=d.VertexPosition||(d.VertexPosition={}));var l,m});