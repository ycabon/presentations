// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/libs/gl-matrix-2/factories/vec2f64 ./PositionAttribute.glsl ../../shaderModules/Float2PassUniform ../../shaderModules/Float3PassUniform ../../shaderModules/Float4sPassUniform ../../shaderModules/FloatsPassUniform ../../shaderModules/interfaces ../../../lib/VertexAttribute ../../../materials/VisualVariablePassParameters".split(" "),function(k,n,p,q,f,r,l,c,g,h){class t extends h.VisualVariablePassParameters{constructor(){super(...arguments);this.size=n.fromValues(1,
1)}}k.PathVertexPosition=function(d,m){const e=g.VertexAttribute.FEATUREVALUE;d.attributes.add(e,"vec4");const a=d.vertex;a.code.add(c.glsl`
  bool isCapVertex() {
    return ${e}.w == 1.0;
  }
  `);a.uniforms.add(new q.Float2PassUniform("size",b=>b.size));m.vvSize?(a.uniforms.add(new f.Float3PassUniform("vvSizeMinSize",b=>b.vvSize.minSize),new f.Float3PassUniform("vvSizeMaxSize",b=>b.vvSize.maxSize),new f.Float3PassUniform("vvSizeOffset",b=>b.vvSize.offset),new f.Float3PassUniform("vvSizeFactor",b=>b.vvSize.factor)),a.code.add(c.glsl`
    vec2 getSize() {
      return size * clamp(vvSizeOffset + ${e}.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).xz;
    }
    `)):a.code.add(c.glsl`vec2 getSize(){
return size;
}`);m.vvOpacity?(a.constants.add("vvOpacityNumber","int",8),a.uniforms.add(new l.FloatsPassUniform("vvOpacityValues",b=>b.vvOpacity.values,8),new l.FloatsPassUniform("vvOpacityOpacities",b=>b.vvOpacity.opacityValues,8)),a.code.add(c.glsl`
    vec4 applyOpacity(vec4 color) {
      float value = ${e}.z;
      if (value <= vvOpacityValues[0]) {
        return vec4( color.xyz, vvOpacityOpacities[0]);
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return vec4( color.xyz, mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f));
        }
      }

      return vec4( color.xyz, vvOpacityOpacities[vvOpacityNumber - 1]);
    }
    `)):a.code.add(c.glsl`vec4 applyOpacity(vec4 color){
return color;
}`);m.vvColor?(a.constants.add("vvColorNumber","int",h.vvColorNumber),a.uniforms.add(new l.FloatsPassUniform("vvColorValues",b=>b.vvColor.values,h.vvColorNumber),new r.Float4sPassUniform("vvColorColors",b=>b.vvColor.colors,h.vvColorNumber)),a.code.add(c.glsl`
    vec4 getColor() {
      float value = ${e}.y;
      if (value <= vvColorValues[0]) {
        return applyOpacity(vvColorColors[0]);
      }

      for (int i = 1; i < vvColorNumber; ++i) {
        if (vvColorValues[i] >= value) {
          float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
          return applyOpacity(mix(vvColorColors[i-1], vvColorColors[i], f));
        }
      }

      return applyOpacity(vvColorColors[vvColorNumber - 1]);
    }
    `)):a.code.add(c.glsl`vec4 getColor(){
return applyOpacity(vec4(1, 1, 1, 1));
}`);d.include(p.PositionAttribute);d.attributes.add(g.VertexAttribute.PROFILERIGHT,"vec4");d.attributes.add(g.VertexAttribute.PROFILEUP,"vec4");d.attributes.add(g.VertexAttribute.PROFILEVERTEXANDNORMAL,"vec4");a.code.add(c.glsl`vec3 calculateVPos() {
vec2 size = getSize();
vec3 origin = position;
vec3 right = profileRight.xyz;
vec3 up = profileUp.xyz;
vec3 forward = cross(up, right);
vec2 profileVertex = profileVertexAndNormal.xy * size;
vec2 profileNormal = profileVertexAndNormal.zw;
float positionOffsetAlongProfilePlaneNormal = 0.0;
float normalOffsetAlongProfilePlaneNormal = 0.0;`);a.code.add(c.glsl`if(!isCapVertex()) {
vec2 rotationRight = vec2(profileRight.w, profileUp.w);
float maxDistance = length(rotationRight);`);a.code.add(c.glsl`rotationRight = maxDistance > 0.0 ? normalize(rotationRight) : vec2(0, 0);
float rx = dot(profileVertex, rotationRight);
if (abs(rx) > maxDistance) {
vec2 rotationUp = vec2(-rotationRight.y, rotationRight.x);
float ry = dot(profileVertex, rotationUp);
profileVertex = rotationRight * maxDistance * sign(rx) + rotationUp * ry;
}
}else{
positionOffsetAlongProfilePlaneNormal = profileRight.w * size[0];
normalOffsetAlongProfilePlaneNormal = profileUp.w;
}
vec3 offset = right * profileVertex.x + up * profileVertex.y + forward * positionOffsetAlongProfilePlaneNormal;
return origin + offset;
}`);a.code.add(c.glsl`vec3 localNormal() {
vec3 right = profileRight.xyz;
vec3 up = profileUp.xyz;
vec3 forward = cross(up, right);
vec2 profileNormal = profileVertexAndNormal.zw;
vec3 normal = right * profileNormal.x + up * profileNormal.y;
if(isCapVertex()) {
normal += forward * profileUp.w;
}
return normal;
}`)};k.PathVertexPositionPassParameters=t;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});