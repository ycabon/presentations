// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../collections/Component/Material/shader/ComponentData.glsl ../../../core/shaderLibrary/attributes/NormalAttribute.glsl ../../../core/shaderLibrary/util/DoublePrecision.glsl ../../../core/shaderLibrary/util/RgbaFloatEncoding.glsl ../../../core/shaderModules/Float3DrawUniform ../../../core/shaderModules/Float3PassUniform ../../../core/shaderModules/FloatPassUniform ../../../core/shaderModules/interfaces ../../../core/shaderModules/Matrix3DrawUniform ../../../core/shaderModules/Matrix3PassUniform ../../../core/shaderModules/Matrix4PassUniform ../../../core/shaderModules/Texture2DDrawUniform ../../../lib/VertexAttribute".split(" "),
function(d,m,n,p,q,g,h,r,e,k,t,u,v,l){d.EdgeUtilMode=void 0;(function(a){a[a.SOLID=0]="SOLID";a[a.SKETCH=1]="SKETCH";a[a.MIXED=2]="MIXED";a[a.COUNT=3]="COUNT"})(d.EdgeUtilMode||(d.EdgeUtilMode={}));d.EdgeSilhouette=void 0;(function(a){a[a.REGULAR=0]="REGULAR";a[a.SILHOUETTE=1]="SILHOUETTE"})(d.EdgeSilhouette||(d.EdgeSilhouette={}));d.EdgeUtil=function(a,f){const b=a.vertex;b.include(q.RgbaFloatEncoding);a.include(n.NormalAttribute,f);b.uniforms.add(new r.FloatPassUniform("distanceFalloffFactor",c=>
c.distanceFalloffFactor));b.code.add(e.glsl`float distanceBasedPerspectiveFactor(float distance) {
return clamp(sqrt(distanceFalloffFactor / distance), 0.0, 1.0);
}`);b.uniforms.add(new v.Texture2DDrawUniform("componentDataTex",c=>c.componentDataTexture));a.attributes.add(l.VertexAttribute.COMPONENTINDEX,"float");b.constants.add("componentColorFieldOffset","float",0);b.constants.add("componentOtherFieldOffset","float",1);b.constants.add("componentVerticalOffsetFieldOffset","float",2);b.constants.add("componentFieldCount","float",3);b.constants.add("lineWidthFractionFactor","float",8);b.constants.add("extensionLengthOffset","float",128);b.constants.add("verticalOffsetScale",
"float",2*m.maxElevationOffset);b.code.add(e.glsl`
    vec2 _componentTextureCoords(float componentIndex, float fieldOffset) {
      float fieldIndex = componentFieldCount * componentIndex + fieldOffset;
      float texSize = float(textureSize(componentDataTex, 0).x);
      float colIndex = mod(fieldIndex, texSize);
      float rowIndex = floor(fieldIndex / texSize);

      return vec2(colIndex, rowIndex) + 0.5;
    }

    struct ComponentData {
      vec4 color;
      vec3 normal;
      vec3 normal2;
      float lineWidth;
      float extensionLength;
      float type;
      float verticalOffset;
    };

    ComponentData readComponentData() {
      vec2 colorIndex = _componentTextureCoords(componentIndex, componentColorFieldOffset);
      vec2 otherIndex = _componentTextureCoords(componentIndex, componentOtherFieldOffset);
      vec2 verticalOffsetIndex = _componentTextureCoords(componentIndex, componentVerticalOffsetFieldOffset);
      vec3 normal = normalModel();
      vec3 normal2 = ${f.silhouette?e.glsl`decompressNormal(normal2Compressed)`:e.glsl`normal`};

      vec4 colorValue = texelFetch(componentDataTex, ivec2(colorIndex), 0);
      vec4 otherValue = texelFetch(componentDataTex, ivec2(otherIndex), 0);
      float verticalOffset = (rgba2float(texelFetch(componentDataTex, ivec2(verticalOffsetIndex), 0)) - 0.5) * verticalOffsetScale;

      return ComponentData(
        vec4(colorValue.rgb, colorValue.a * otherValue.w), // otherValue.w stores separate opacity
        normal, normal2,
        otherValue.x * (255.0 / lineWidthFractionFactor),
        otherValue.y * 255.0 - extensionLengthOffset,
        -(otherValue.z * 255.0) + 0.5, // SOLID (=0/255) needs to be > 0.0, SKETCHY (=1/255) needs to be <= 0;
        verticalOffset
      );
    }
  `);f.legacy?b.code.add(e.glsl`vec3 _modelToWorldNormal(vec3 normal) {
return (model * vec4(normal, 0.0)).xyz;
}
vec3 _modelToViewNormal(vec3 normal) {
return (localView * model * vec4(normal, 0.0)).xyz;
}`):(b.uniforms.add(new k.Matrix3DrawUniform("transformNormalGlobalFromModel",c=>c.transformNormalGlobalFromModel)),b.code.add(e.glsl`vec3 _modelToWorldNormal(vec3 normal) {
return transformNormalGlobalFromModel * normal;
}`));f.silhouette?(a.attributes.add(l.VertexAttribute.NORMAL2COMPRESSED,"vec2"),b.code.add(e.glsl`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(normalize(data.normal + data.normal2));
}`)):b.code.add(e.glsl`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(data.normal);
}`);f.legacy?b.code.add(e.glsl`void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
worldPos = (model * vec4(modelPos, 1.0)).xyz;
viewPos = (localView * vec4(worldPos, 1.0)).xyz;
}`):(b.include(p.DoublePrecision,f),b.uniforms.add(new t.Matrix3PassUniform("transformViewFromCameraRelativeRS",c=>c.transformViewFromCameraRelativeRS),new k.Matrix3DrawUniform("transformWorldFromModelRS",c=>c.transformWorldFromModelRS),new g.Float3DrawUniform("transformWorldFromModelTL",c=>c.transformWorldFromModelTL),new g.Float3DrawUniform("transformWorldFromModelTH",c=>c.transformWorldFromModelTH),new h.Float3PassUniform("transformWorldFromViewTL",c=>c.transformWorldFromViewTL),new h.Float3PassUniform("transformWorldFromViewTH",
c=>c.transformWorldFromViewTH)),b.code.add(e.glsl`
      void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
        vec3 rotatedModelPosition = transformWorldFromModelRS * modelPos;

        vec3 transformCameraRelativeFromModel = dpAdd(
          transformWorldFromModelTL,
          transformWorldFromModelTH,
          -transformWorldFromViewTL,
          -transformWorldFromViewTH
        );

        worldPos = transformCameraRelativeFromModel + rotatedModelPosition;

        if (verticalOffset != 0.0) {
          vec3 vUp = ${f.spherical?e.glsl`normalize(transformWorldFromModelTL + rotatedModelPosition);`:e.glsl`vec3(0.0, 0.0, 1.0);`}
          worldPos += verticalOffset * vUp;
        }

        viewPos = transformViewFromCameraRelativeRS * worldPos;
      }
    `));b.uniforms.add(new u.Matrix4PassUniform("transformProjFromView",(c,w)=>w.camera.projectionMatrix));b.code.add(e.glsl`vec4 projFromViewPosition(vec3 position) {
return transformProjFromView * vec4(position, 1.0);
}`);b.code.add(e.glsl`float calculateExtensionLength(float extensionLength, float lineLength) {
return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
}`)};d.usesSketchLogic=function(a){return a.mode===d.EdgeUtilMode.SKETCH||a.mode===d.EdgeUtilMode.MIXED};d.usesSolidLogic=function(a){return a.mode===d.EdgeUtilMode.SOLID||a.mode===d.EdgeUtilMode.MIXED};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});