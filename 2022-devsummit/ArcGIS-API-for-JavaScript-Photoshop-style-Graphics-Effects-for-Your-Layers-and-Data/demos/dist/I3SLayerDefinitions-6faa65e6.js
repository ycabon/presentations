import { ac as e, ad as d$1, ae as i$1, dc as r, d7 as a$1 } from './_virtual_index-3ad07138.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=class extends a$1{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null;}};e([d$1({type:Number})],s.prototype,"nodesPerPage",void 0),e([d$1({type:Number})],s.prototype,"rootIndex",void 0),e([d$1({type:String})],s.prototype,"lodSelectionMetricType",void 0),s=e([i$1("esri.layer.support.I3SNodePageDefinition")],s);let i=class extends a$1{constructor(){super(...arguments),this.factor=1;}};e([d$1({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],i.prototype,"id",void 0),e([d$1({type:Number})],i.prototype,"factor",void 0),i=e([i$1("esri.layer.support.I3SMaterialTexture")],i);let a=class extends a$1{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1;}};e([d$1({type:[Number]})],a.prototype,"baseColorFactor",void 0),e([d$1({type:i})],a.prototype,"baseColorTexture",void 0),e([d$1({type:i})],a.prototype,"metallicRoughnessTexture",void 0),e([d$1({type:Number})],a.prototype,"metallicFactor",void 0),e([d$1({type:Number})],a.prototype,"roughnessFactor",void 0),a=e([i$1("esri.layer.support.I3SMaterialPBRMetallicRoughness")],a);let l=class extends a$1{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null;}};e([r({opaque:"opaque",mask:"mask",blend:"blend"})],l.prototype,"alphaMode",void 0),e([d$1({type:Number})],l.prototype,"alphaCutoff",void 0),e([d$1({type:Boolean})],l.prototype,"doubleSided",void 0),e([r({none:"none",back:"back",front:"front"})],l.prototype,"cullFace",void 0),e([d$1({type:i})],l.prototype,"normalTexture",void 0),e([d$1({type:i})],l.prototype,"occlusionTexture",void 0),e([d$1({type:i})],l.prototype,"emissiveTexture",void 0),e([d$1({type:[Number]})],l.prototype,"emissiveFactor",void 0),e([d$1({type:a})],l.prototype,"pbrMetallicRoughness",void 0),l=e([i$1("esri.layer.support.I3SMaterialDefinition")],l);let n=class extends a$1{};e([d$1({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],n.prototype,"name",void 0),e([r({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],n.prototype,"format",void 0),n=e([i$1("esri.layer.support.I3STextureFormat")],n);let u=class extends a$1{constructor(){super(...arguments),this.atlas=!1;}};e([d$1({type:[n]})],u.prototype,"formats",void 0),e([d$1({type:Boolean})],u.prototype,"atlas",void 0),u=e([i$1("esri.layer.support.I3STextureSetDefinition")],u);let y=class extends a$1{};e([r({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],y.prototype,"type",void 0),e([d$1({type:Number})],y.prototype,"component",void 0),y=e([i$1("esri.layer.support.I3SGeometryAttribute")],y);let d=class extends a$1{};e([r({draco:"draco"})],d.prototype,"encoding",void 0),e([d$1({type:[String]})],d.prototype,"attributes",void 0),d=e([i$1("esri.layer.support.I3SGeometryCompressedAttributes")],d);let c=class extends a$1{constructor(){super(...arguments),this.offset=0;}};e([d$1({type:Number})],c.prototype,"offset",void 0),e([d$1({type:y})],c.prototype,"position",void 0),e([d$1({type:y})],c.prototype,"normal",void 0),e([d$1({type:y})],c.prototype,"uv0",void 0),e([d$1({type:y})],c.prototype,"color",void 0),e([d$1({type:y})],c.prototype,"uvRegion",void 0),e([d$1({type:y})],c.prototype,"featureId",void 0),e([d$1({type:y})],c.prototype,"faceRange",void 0),e([d$1({type:d})],c.prototype,"compressedAttributes",void 0),c=e([i$1("esri.layer.support.I3SGeometryBuffer")],c);let m=class extends a$1{};e([r({triangle:"triangle"})],m.prototype,"topology",void 0),e([d$1()],m.prototype,"geometryBuffers",void 0),m=e([i$1("esri.layer.support.I3SGeometryDefinition")],m);

export { l, m, s, u };
