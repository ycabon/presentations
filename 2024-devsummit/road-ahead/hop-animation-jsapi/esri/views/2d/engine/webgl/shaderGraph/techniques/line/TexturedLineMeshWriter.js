// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../../geometry/GeometryCursor ../../../definitions ../fill/meshWriterUtils ./LineMeshWriter ../shaders/constants ../../../../../../webgl/enums".split(" "),function(f,n,h,p,k,g,e){const m={createComputedParams:a=>a,attributes:{...k.LineVertexSpec.attributes,bitset:{type:e.DataType.UNSIGNED_BYTE,count:1,pack:({shouldSampleAlphaOnly:a,shouldScaleDash:b,isSDF:c})=>p.packBitset([[g.bitsetGenericConsiderAlphaOnly,a],[g.bitsetLineScaleDash,b],[g.bitsetLineIsSdf,c]])},tlbr:{type:e.DataType.UNSIGNED_SHORT,
count:4,pack:({sprite:a})=>{const {rect:b,width:c,height:d}=a;a=b.x+h.spritePadding;const l=b.y+h.spritePadding;return[a,l,a+c,l+d]}},accumulatedDistance:{type:e.DataType.UNSIGNED_SHORT,count:1,packTessellation:({distance:a})=>a},segmentDirection:{type:e.DataType.BYTE,count:2,packPrecisionFactor:16,packTessellation:({directionX:a,directionY:b})=>[a,b]}}};class q extends k.LineMeshWriter{constructor(a,b,c,d){super(a,b,c,d);this.vertexSpec=m;this._tessellationOptions.textured=!0}_write(a,b,c){if(c=
c??n.GeometryCursor.fromFeatureSetReaderCIM(b)){var {sprite:d}=this.evaluatedMeshParams;this._writeGeometry(a,b,c,d?.textureBinding)}}}f.TexturedLineMeshWriter=q;f.texturedLineVertexSpec=m;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});