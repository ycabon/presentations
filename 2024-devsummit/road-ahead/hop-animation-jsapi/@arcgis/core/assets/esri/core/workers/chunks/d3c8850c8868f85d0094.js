"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8591],{89231:(e,t,r)=>{r.d(t,{Ey:()=>F,applyEdits:()=>A,aw:()=>b,uploadAssets:()=>E});var a=r(23761),n=r(15324),s=r(60991),i=r(76506),o=r(92143),l=r(50406),u=r(32101),d=r(10279),p=r(95533),c=r(65398),f=r(14249),h=r(13235),y=r(39855);function g(e){return null!=e?.applyEdits}function m(e){return"object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function b(e){return e.every(m)}function w(e){return"object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function F(e){return e.every(w)}async function A(e,t,r,a={}){let u;const p="gdbVersion"in e?e.gdbVersion:null,f=a.gdbVersion??p;if((0,c.b)(e)&&e.url)u=(0,c.e)(e.url,e.layerId,f,"original-and-current-features"===a.returnServiceEditsOption);else{u=(0,l.hh)(),u.promise.then((t=>{(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length)&&e.emit("edits",t)}));const t={result:u.promise};e.emit("apply-edits",t)}try{const{results:l,edits:p}=await async function(e,t,r,a){if(await e.load(),!g(t))throw new s.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!(0,y.h)(e))throw new s.Z(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:i,options:l}=await async function(e,t,r){const a=(0,y.g)(e),i=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),l=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),u=null!=e.infoFor3D;if(function(e,t,r,a,n,i){if(!e||!a&&!n)throw new s.Z(`${i}:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&r?.globalIdUsed)throw new s.Z(`${i}:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&n)throw new s.Z(`${i}:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!r?.globalIdUsed&&n)throw new s.Z(`${i}:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}(t,a,r,!!i,!!l,`${e.type}-layer`),!a.data.isVersioned&&r?.gdbVersion)throw new s.Z(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!a.editing.supportsRollbackOnFailure&&r?.rollbackOnFailureEnabled)throw new s.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const p={...r};if(null!=p.rollbackOnFailureEnabled||a.editing.supportsRollbackOnFailure||(p.rollbackOnFailureEnabled=!0),p.rollbackOnFailureEnabled||"original-and-current-features"!==p.returnServiceEditsOption||(!1===p.rollbackOnFailureEnabled&&o.L.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."),p.rollbackOnFailureEnabled=!0),!a.editing.supportsReturnServiceEditsInSourceSpatialReference&&p.returnServiceEditsInSourceSR)throw new s.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(p.returnServiceEditsInSourceSR&&"original-and-current-features"!==p.returnServiceEditsOption)throw new s.Z(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const c=function(e,t,r){const a=function(e){return{addFeatures:Array.from(e?.addFeatures??[]),updateFeatures:Array.from(e?.updateFeatures??[]),deleteFeatures:e&&n.Z.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}(e);if(a.addFeatures?.length&&!t.operations.supportsAdd)throw new s.Z(`${r}:unsupported-operation`,"Layer does not support adding features.");if(a.updateFeatures?.length&&!t.operations.supportsUpdate)throw new s.Z(`${r}:unsupported-operation`,"Layer does not support updating features.");if(a.deleteFeatures?.length&&!t.operations.supportsDelete)throw new s.Z(`${r}:unsupported-operation`,"Layer does not support deleting features.");return a.addFeatures=a.addFeatures.map(R),a.updateFeatures=a.updateFeatures.map(R),a.addAssetFeatures=[],a}(t,a,`${e.type}-layer`),f=r?.globalIdUsed||u,g=e.fields.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(f){const{globalIdField:t}=e;if(null==t)throw new s.Z(`${e.type}-layer:invalid-parameter`,"Layer does not specify a global id field.");c.addFeatures.forEach((e=>function(e,t){const{attributes:r}=e;null==r[t]&&(r[t]=(0,d.a)())}(e,t)))}return c.addFeatures.forEach((t=>function(e,t,r,a){v(e,t,r,a),Z(e,t)}(t,e,f,g))),c.updateFeatures.forEach((t=>function(e,t,r,a){v(e,t,r,a),Z(e,t);const n=(0,y.g)(t);if("geometry"in e&&null!=e.geometry&&!n?.editing.supportsGeometryUpdate)throw new s.Z(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}(t,e,f,g))),c.deleteFeatures.forEach((t=>function(e,t,r,a){v(e,t,r,a)}(t,e,f,g))),c.addAttachments.forEach((t=>I(t,e))),c.updateAttachments.forEach((t=>I(t,e))),u&&await async function(e,t){if(null==t.infoFor3D)return;const{infoFor3D:r}=t,a=(0,h.a)("model/gltf-binary",r.supportedFormats)??(0,h.b)("glb",r.supportedFormats);if(!a||!r.editFormats.includes(a))throw new s.Z(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??=[];const{addAssetFeatures:n}=e;for(const t of e.addFeatures??[])$(t)&&n.push(t);for(const t of e.updateFeatures??[])$(t)&&n.push(t)}(c,e),{edits:await S(c),options:p}}(e,r,a);return i.addFeatures?.length||i.updateFeatures?.length||i.deleteFeatures?.length||i.addAttachments?.length||i.updateAttachments?.length||i.deleteAttachments?.length?{edits:i,results:await t.applyEdits(i,l)}:{edits:i,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(e,t,r,a),c=e=>e.filter((e=>!e.error)).map(i.d9),f={edits:p,addedFeatures:c(l.addFeatureResults),updatedFeatures:c(l.updateFeatureResults),deletedFeatures:c(l.deleteFeatureResults),addedAttachments:c(l.addAttachmentResults),updatedAttachments:c(l.updateAttachmentResults),deletedAttachments:c(l.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:l.editMoment?new Date(l.editMoment):null,globalIdToObjectId:a.globalIdToObjectId};return l.editedFeatureResults?.length&&(f.editedFeatures=l.editedFeatureResults),u.resolve(f),l}catch(e){throw u.reject(e),e}}function v(e,t,r,a){if(r){if("attributes"in e&&!e.attributes[t.globalIdField])throw new s.Z(`${t.type}-layer:invalid-parameter`,`Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);if(!("attributes"in e)&&!e.globalId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(a.length&&"attributes"in e)for(const r of a){const a=e.attributes[r.name];if(void 0!==a&&!(0,f.d2)(r,a))throw new s.Z(`${t.type}-layer:invalid-parameter`,`Big-integer field '${r.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`,{feature:e})}if("geometry"in e&&null!=e.geometry){if(e.geometry.hasZ&&!1===t.capabilities?.data.supportsZ)throw new s.Z(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities?.data.supportsM)throw new s.Z(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function Z(e,t){if("geometry"in e&&"mesh"===e.geometry?.type&&null!=t.infoFor3D){const{geometry:r}=e;if("georeferenced"===r.vertexSpace.type)throw new s.Z(`${t.type}-layer:georeferenced-mesh-unsupported`,"Uploading georeferenced meshes to a layer is not supported.")}}function I(e,t){const{feature:r,attachment:a}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!a.globalId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!a.data&&!a.uploadId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(a.data instanceof File&&a.data.name||a.name))throw new s.Z(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities?.editing.supportsUploadWithItemId&&a.uploadId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof a.data){const e=(0,u.sJ)(a.data);if(e&&!e.isBase64)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function S(e){const t=e.addFeatures??[],r=e.updateFeatures??[],a=t.concat(r).map((e=>e.geometry)),n=await(0,p.aX)(a),s=t.length,i=r.length;return n.slice(0,s).forEach(((e,r)=>t[r].geometry=e)),n.slice(s,s+i).forEach(((e,t)=>r[t].geometry=e)),e}function R(e){const t=new a.Z;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}function $(e){return"mesh"===e?.geometry?.type}function E(e,t,r,a){if(!g(t))throw new s.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new s.Z(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(r,a)}r(29768),r(74569),r(91306),r(21801),r(34250),r(66396),r(22723),r(86656),r(17533),r(6540),r(31450),r(73796),r(12047),r(21972),r(62062),r(6906),r(97714),r(60947),r(53785),r(57251),r(73173),r(82058),r(88762),r(2906),r(91597),r(86787),r(35132),r(84069),r(44567),r(63685),r(89034),r(98380),r(92482),r(82426),r(72836),r(66106),r(29794),r(92896),r(22781),r(32422),r(86748),r(66122),r(29107),r(30574),r(2157),r(25977),r(58076),r(98242),r(7471),r(54414),r(59465),r(1648),r(8925),r(3482),r(76131),r(36097),r(45154),r(16769),r(93603),r(15438),r(593),r(48027),r(54174),r(85699),r(55531),r(96055),r(47776),r(18033),r(6331),r(62048),r(56890),r(30493),r(4292),r(75626),r(72652),r(29641),r(70821),r(3296),r(34229),r(37029),r(75067),r(89914),r(66284),r(87239),r(96467),r(63571),r(30776),r(63130),r(25696),r(94216),r(42775),r(95834),r(34394),r(57150),r(76726),r(20444),r(76393),r(78548),r(2497),r(49906),r(46527),r(11799),r(48649),r(81731),r(9960),r(30823),r(53326),r(5853),r(39141),r(38742),r(48243),r(34635),r(10401),r(49900),r(81184),r(33101),r(58943),r(67477),r(78533),r(74653),r(91091),r(70737),r(36834),r(8487),r(17817),r(90814),r(15459),r(97189),r(61847),r(28212),r(16955),r(22401),r(48699),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(58085),r(41864),r(5909),r(60669),r(48208),r(51589),r(94751),r(95307),r(20438),r(22572)},94751:(e,t,r)=>{r.d(t,{c:()=>i,g:()=>u,o:()=>o,u:()=>l});var a=r(92896),n=r(60947),s=r(32422);const i={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new a.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:n.Z.WebMercator}),minus180Line:new a.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:n.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new a.Z({paths:[[[180,-180],[180,180]]],spatialReference:n.Z.WGS84}),minus180Line:new a.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:n.Z.WGS84})}};function o(e,t){return Math.ceil((e-t)/(2*t))}function l(e,t){const r=u(e);for(const e of r)for(const r of e)r[0]+=t;return e}function u(e){return(0,s.oU)(e)?e.rings:e.paths}},95307:(e,t,r)=>{r.d(t,{c:()=>u,s:()=>d}),r(74569);var a=r(82058),n=r(32422),s=r(53785),i=r(20438),o=r(32101),l=r(22572);async function u(e,t,r,o){const l=(0,i.p)(e),u=t[0].spatialReference,d={...o,responseType:"json",query:{...l.query,f:"json",sr:(0,s.X)(u),target:JSON.stringify({geometryType:(0,n.Ji)(t[0]),geometries:t}),cutter:JSON.stringify(r)}},p=await(0,a.Z)(l.path+"/cut",d),{cutIndexes:c,geometries:f=[]}=p.data;return{cutIndexes:c,geometries:f.map((e=>{const t=(0,n.im)(e);return t.spatialReference=u,t}))}}async function d(e,t,r){const i="string"==typeof e?(0,o.mN)(e):e,u=t[0].spatialReference,d=(0,n.Ji)(t[0]),p={...r,query:{...i.query,f:"json",sr:(0,s.X)(u),geometries:JSON.stringify((0,l.e)(t))}},{data:c}=await(0,a.Z)(i.path+"/simplify",p);return(0,l.d)(c.geometries,d,u)}},20438:(e,t,r)=>{r.d(t,{a:()=>s,e:()=>o,p:()=>i}),r(31450),r(88762);var a=r(76506),n=r(32101);function s(e,t){return t?{...t,query:{...e??{},...t.query}}:{query:e}}function i(e){return"string"==typeof e?(0,n.mN)(e):(0,a.d9)(e)}function o(e,t,r){const a={};for(const n in e){if("declaredClass"===n)continue;const s=e[n];if(null!=s&&"function"!=typeof s)if(Array.isArray(s))a[n]=s.map((e=>o({item:e},t,r).item));else if("object"==typeof s)if(s.toJSON){const e=s.toJSON(r?.[n]);a[n]=t?e:JSON.stringify(e)}else a[n]=t?s:JSON.stringify(s);else a[n]=s}return a}r(82058)},22572:(e,t,r)=>{r.d(t,{d:()=>s,e:()=>n});var a=r(32422);function n(e){return{geometryType:(0,a.Ji)(e[0]),geometries:e.map((e=>e.toJSON()))}}function s(e,t,r){const n=(0,a.q9)(t);return e.map((e=>{const t=n.fromJSON(e);return t.spatialReference=r,t}))}},95533:(e,t,r)=>{r.d(t,{aX:()=>y});var a=r(31450),n=r(60991),s=r(92143),i=r(44567),o=r(92896),l=r(94751),u=r(53785),d=r(35132),p=r(95307);r(76506),r(29768),r(34250),r(91306),r(66396),r(22723),r(86656),r(17533),r(6540),r(2906),r(21801),r(73796),r(12047),r(21972),r(62062),r(6906),r(50406),r(97714),r(60947),r(57251),r(73173),r(82058),r(88762),r(32101),r(91597),r(86787),r(63685),r(89034),r(98380),r(92482),r(82426),r(72836),r(66106),r(29794),r(32422),r(84069),r(74569),r(22781),r(20438),r(22572);const c=()=>s.L.getLogger("esri.geometry.support.normalizeUtils");function f(e,t,r){if(t){const t=function(e,t){if(!(e instanceof o.Z||e instanceof i.Z)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw c().error(e),new n.Z(e)}const r=(0,l.g)(e),a=[];for(const e of r){const r=[];a.push(r),r.push([e[0][0],e[0][1]]);for(let a=0;a<e.length-1;a++){const n=e[a][0],s=e[a][1],i=e[a+1][0],o=e[a+1][1],l=Math.sqrt((i-n)*(i-n)+(o-s)*(o-s)),u=(o-s)/l,d=(i-n)/l,p=l/t;if(p>1){for(let e=1;e<=p-1;e++){const a=e*t,i=d*a+n,o=u*a+s;r.push([i,o])}const e=(l+Math.floor(p-1)*t)/2,a=d*e+n,i=u*e+s;r.push([a,i])}r.push([i,o])}}return function(e){return"polygon"===e.type}(e)?new i.Z({rings:a,spatialReference:e.spatialReference}):new o.Z({paths:a,spatialReference:e.spatialReference})}(e,1e6);e=(0,d.Sx)(t,!0)}return r&&(e=(0,l.u)(e,r)),e}function h(e,t,r){if(Array.isArray(e)){const a=e[0];if(a>t){const r=(0,l.o)(a,t);e[0]=a+r*(-2*t)}else if(a<r){const t=(0,l.o)(a,r);e[0]=a+t*(-2*r)}}else{const a=e.x;if(a>t){const r=(0,l.o)(a,t);e=e.clone().offset(r*(-2*t),0)}else if(a<r){const t=(0,l.o)(a,r);e=e.clone().offset(t*(-2*r),0)}}return e}async function y(e,t,r){if(!Array.isArray(e))return y([e],t);t&&"string"!=typeof t&&c().warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const n="string"==typeof t?t:t?.url??a.default.geometryServiceUrl;let s,g,m,b,w,F,A,v,Z=0;const I=[],S=[];for(const t of e)if(null!=t)if(s||(s=t.spatialReference,g=(0,u.j)(s),m=s.isWebMercator,F=m?102100:4326,b=l.c[F].maxX,w=l.c[F].minX,A=l.c[F].plus180Line,v=l.c[F].minus180Line),g)if("mesh"===t.type)S.push(t);else if("point"===t.type)S.push(h(t.clone(),b,w));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>h(e,b,w))),S.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,g);S.push(e.rings?new i.Z(e):e)}else if(t.extent){const e=t.extent,r=(0,l.o)(e.xmin,w)*(2*b);let a=0===r?t.clone():(0,l.u)(t.clone(),r);e.offset(r,0),e.intersects(A)&&e.xmax!==b?(Z=e.xmax>Z?e.xmax:Z,a=f(a,m),I.push(a),S.push("cut")):e.intersects(v)&&e.xmin!==w?(Z=e.xmax*(2*b)>Z?e.xmax*(2*b):Z,a=f(a,m,360),I.push(a),S.push("cut")):S.push(a)}else S.push(t.clone());else S.push(t);else S.push(t);let R=(0,l.o)(Z,b),$=-90;const E=R,O=new o.Z;for(;R>0;){const e=360*R-180;O.addPath([[e,$],[e,-1*$]]),$*=-1,R--}if(I.length>0&&E>0){const t=function(e,t){let r=-1;for(let a=0;a<t.cutIndexes.length;a++){const n=t.cutIndexes[a],s=t.geometries[a],i=(0,l.g)(s);for(let e=0;e<i.length;e++){const t=i[e];t.some((r=>{if(r[0]<180)return!0;{let r=0;for(let e=0;e<t.length;e++){const a=t[e][0];r=a>r?a:r}r=Number(r.toFixed(9));const a=-360*(0,l.o)(r,180);for(let r=0;r<t.length;r++){const t=s.getPoint(e,r);s.setPoint(e,r,t.clone().offset(a,0))}return!0}}))}if(n===r){if("polygon"===e[0].type)for(const t of(0,l.g)(s))e[n]=e[n].addRing(t);else if("polyline"===e[0].type)for(const t of(0,l.g)(s))e[n]=e[n].addPath(t)}else r=n,e[n]=s}return e}(I,await(0,p.c)(n,I,O,r)),a=[],s=[];for(let r=0;r<S.length;r++){const n=S[r];if("cut"!==n)s.push(n);else{const n=t.shift(),i=e[r];null!=i&&"polygon"===i.type&&i.rings&&i.rings.length>1&&n.rings.length>=i.rings.length?(a.push(n),s.push("simplify")):s.push(m?(0,d.$)(n):n)}}if(!a.length)return s;const i=await(0,p.s)(n,a,r),o=[];for(let e=0;e<s.length;e++){const t=s[e];"simplify"!==t?o.push(t):o.push(m?(0,d.$)(i.shift()):i.shift())}return o}const x=[];for(let e=0;e<S.length;e++){const t=S[e];if("cut"!==t)x.push(t);else{const e=I.shift();x.push(!0===m?(0,d.$)(e):e)}}return x}}}]);