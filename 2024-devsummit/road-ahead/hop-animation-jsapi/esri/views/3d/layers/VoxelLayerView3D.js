// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../geometry ../../../core/Error ../../../core/Logger ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../chunks/vec32 ../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../geometry/projection/projectVectorToVector ../../../geometry/support/aaBoundingBox ../../../geometry/support/spatialReferenceUtils ./LayerView3D ./VoxelWasm ./support/LayerViewPerformanceInfo ./support/PopupSceneLayerView ../../layers/LayerView ../../support/layerViewUtils ../../../geometry/SpatialReference".split(" "),
function(n,l,m,r,f,p,G,H,x,q,t,y,u,z,A,e,B,C,D,E,F){var d;(function(b){b[b.API=1]="API";b[b.VerboseAPI=2]="VerboseAPI";b[b.Error=3]="Error"})(d||={});const k=t.create(),v=t.create();l=class extends C.PopupSceneLayerView(A.LayerView3D(D)){constructor(){super(...arguments);this._suspendedHandle=null;this._futureMemory=this._usedMemory=0;this.type="voxel-3d";this.slicePlaneEnabled=!1;this._wasmLayerId=-1;this.ignoresMemoryFactor=!0;this._dbgFlags=new Set}get baseUrl(){return this.layer.parsedUrl?.path??
""}get wasmLayerId(){return this._wasmLayerId}initialize(){this._dbgFlags.add(d.Error);if("local"!==this.view.viewingMode)throw new m("voxel:unsupported-viewingMode","Voxel layers support local viewingMode only.",{});if(!this.view._stage.renderView.renderingContext.capabilities.colorBufferFloat?.textureFloat)throw new m("voxel:missing-color-buffer-float","Voxel layers require the WebGL2 extension EXT_color_buffer_float",{});if(!z.equals(this.layer.spatialReference,this.view.spatialReference))throw new m("layerview:spatial-reference-incompatible",
"The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});var b=this.layer.currentVariableId,a=this.layer.getVolume(b);b=this.layer.getVariable(b);if(null!=a&&null!=b){var g=a.dimensions[0];const h=a.dimensions[1],c=a.zDimension;if(1<c){a=g.size*h.size*a.dimensions[c].size;g=1;switch(b.renderingFormat.type){case "Int16":case "UInt16":g=2;break;case "Int32":case "UInt32":case "Float32":g=4}this._futureMemory=g*a}}b=e.addLayerViewToWasm(this).then(h=>{this._wasmLayerId=
h;this._suspendedHandle=f.watch(()=>this.suspended,c=>{const w=e.getVoxelWasm(this.view);w&&w.setEnabled(this,!c)},f.initial);this.addHandles([f.watch(()=>this.layer.renderMode,c=>this._pushRenderModeToWasm(c)),f.watch(()=>this.layer.currentVariableId,c=>this._pushCurrentVariableIdToWasm(c)),f.watch(()=>this.layer.getSections(),c=>this._pushSectionsToWasm(c)),f.watch(()=>this.layer.getVariableStyles(),c=>this._pushVariableStylesToWasm(c)),f.watch(()=>this.layer.getVolumeStyles(),c=>this._pushVolumeStylesToWasm(c)),
f.watch(()=>this.layer.enableDynamicSections,c=>this._pushEnableDynamicSectionsToWasm(c)),f.watch(()=>this.layer.enableIsosurfaces,c=>this._pushEnableIsosurfacesToWasm(c)),f.watch(()=>this.layer.enableSections,c=>this._pushEnableSectionsToWasm(c)),f.watch(()=>this.layer.enableSlices,c=>this._pushEnableSlicesToWasm(c)),f.watch(()=>this.slicePlaneEnabled,c=>this._pushAnalysisSliceToWasm(c,this.view.slicePlane)),f.watch(()=>this.view.slicePlane,c=>this._pushAnalysisSliceToWasm(this.slicePlaneEnabled,
c)),f.watch(()=>this.layer.minScale,c=>this._onScaleUpdated(this.view.scale,c,this.layer.maxScale),f.initial),f.watch(()=>this.layer.maxScale,c=>this._onScaleUpdated(this.view.scale,this.layer.minScale,c),f.initial),f.watch(()=>this.view.scale,c=>this._onScaleUpdated(c,this.layer.minScale,this.layer.maxScale),f.initial)])}).catch(h=>{e.removeLayerViewFromWasm(this);this._wasmLayerId=-1;if(-1===h)throw new m("voxel:addLayer-failure","The voxel layer description was invalid.",{});if(-2===h)throw new m("voxel:addLayer-failure",
"The voxel layer web assembly module failed to download.",{});});this.addResolvingPromise(b)}destroy(){e.removeLayerViewFromWasm(this);this._suspendedHandle&&(this._suspendedHandle.remove(),this._suspendedHandle=null)}isUpdating(){const b=e.getVoxelWasm(this.view);return 0>this._wasmLayerId||null==b?!1:b.isUpdating(this._wasmLayerId)}updatingFlagChanged(){this.notifyChange("updating")}get usedMemory(){return this._usedMemory}get unloadedMemory(){return this._futureMemory}get performanceInfo(){return new B.LayerViewPerformanceInfo(this.usedMemory)}whenGraphicBounds(b,
a){if(a=b.attributes["Voxel.WorldPosition"])if(b=u.empty(),a=JSON.parse(a),y.projectVectorToVector(a,this.view.renderSpatialReference,v,this.view.spatialReference||F.WGS84))return u.expandWithVec3(b,v),Promise.resolve({boundingBox:b,screenSpaceObjects:[]});return Promise.reject()}setUsedMemory(b){this._usedMemory=b;this._futureMemory=0}captureFrustum(){e.getVoxelWasm(this.view)?.captureFrustum()}toggleFullVolumeExtentDraw(){e.getVoxelWasm(this.view)?.toggleFullVolumeExtentDraw(this)}getLayerTimes(){return e.getVoxelWasm(this.view)?.getLayerTimes(this)??
[]}getCurrentLayerTimeIndex(){return e.getVoxelWasm(this.view)?.getCurrentLayerTimeIndex(this)??0}_pushRenderModeToWasm(b){const a=e.getVoxelWasm(this.view);this._dbg(d.VerboseAPI,`VoxelLayerView3D._pushRenderModeToWasm() called, ${a?"have WASM":"don't have WASM!!!"}`);a?.setRenderMode(this,b)||this._dbg(d.Error,"VoxelLayerView3D._pushRenderModeToWasm() failed!")}_pushSectionsToWasm(b){const a=e.getVoxelWasm(this.view);this._dbg(d.VerboseAPI,`VoxelLayerView3D._pushSectionsToWasm() called, ${a?"have WASM":
"don't have WASM!!!"}`);a?.setStaticSections(this,b)||this._dbg(d.Error,"VoxelLayerView3D._pushSectionsToWasm() failed!")}_pushCurrentVariableIdToWasm(b){const a=e.getVoxelWasm(this.view);this._dbg(d.VerboseAPI,`VoxelLayerView3D._pushCurrentVariableIdToWasm() called!, ${a?"have WASM":"don't have WASM!!!"}`);a?.setCurrentVariable(this,b)||this._dbg(d.Error,"VoxelLayerView3D._pushCurrentVariableIdToWasm() failed!")}_pushVariableStylesToWasm(b){const a=e.getVoxelWasm(this.view);this._dbg(d.VerboseAPI,
`VoxelLayerView3D._pushVariableStylesToWasm() called, ${a?"have WASM":"don't have WASM!!!"}`);a?.setVariableStyles(this,b)||this._dbg(d.Error,"VoxelLayerView3D._pushVariableStylesToWasm() failed!")}_accountForEnableSlices(b,a){a=null!=a?a:this.layer.enableSlices;for(let g=0;g<b.length;++g){const h=b[g];for(const c of h.slices)c.enabled=c.enabled&&a}}_pushVolumeStylesToWasm(b){const a=e.getVoxelWasm(this.view);this._dbg(d.VerboseAPI,`VoxelLayerView3D._pushVolumeStylesToWasm() called, ${a?"have WASM":
"don't have WASM!!!"}`);a&&(this._accountForEnableSlices(b,null),a.setVolumeStyles(this,b)||this._dbg(d.Error,"VoxelLayerView3D._pushVolumeStylesToWasm() failed!"))}_pushAnalysisSliceToWasm(b,a){const g=e.getVoxelWasm(this.view);this._dbg(d.VerboseAPI,`VoxelLayerView3D._pushAnalysisSliceToWasm() called, ${g?"have WASM":"don't have WASM!!!"}`);var h=!1;g&&(a?(h=a.origin,q.cross(k,a.basis1,a.basis2),q.normalize(k,k),h=g.setAnalysisSlice(this,b,h,k)):(q.set(k,0,0,1),h=g.setAnalysisSlice(this,!1,k,k)),
h||this._dbg(d.Error,"VoxelLayerView3D._pushAnalysisSliceToWasm() failed!"))}_pushEnableDynamicSectionsToWasm(b){const a=e.getVoxelWasm(this.view);this._dbg(d.VerboseAPI,`VoxelLayerView3D._pushEnableDynamicSectionsToWasm() called, ${a?"have WASM":"don't have WASM!!!"}`);a?.setEnableDynamicSections(this,b)||this._dbg(d.Error,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() failed!")}_pushEnableSlicesToWasm(b){const a=e.getVoxelWasm(this.view);this._dbg(d.VerboseAPI,`VoxelLayerView3D._pushEnableSlicesToWasm() called, ${a?
"have WASM":"don't have WASM!!!"}`);if(a){const g=this.layer.getVolumeStyles();this._accountForEnableSlices(g,b);a.setVolumeStyles(this,g)||this._dbg(d.Error,"VoxelLayerView3D._pushEnableSlicesToWasm() failed!")}}_pushEnableIsosurfacesToWasm(b){const a=e.getVoxelWasm(this.view);this._dbg(d.VerboseAPI,`VoxelLayerView3D._pushEnableIsosurfacesToWasm() called, ${a?"have WASM":"don't have WASM!!!"}`);a?.setEnableIsosurfaces(this,b)||this._dbg(d.Error,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() failed!")}_pushEnableSectionsToWasm(b){const a=
e.getVoxelWasm(this.view);this._dbg(d.VerboseAPI,`VoxelLayerView3D._pushEnableSectionsToWasm() called, ${a?"have WASM":"don't have WASM!!!"}`);a?.setEnableSections(this,b)||this._dbg(d.Error,"VoxelLayerView3D._pushEnableSectionsToWasm() failed!")}_onScaleUpdated(b,a,g){b=E.scaleBoundsPredicate(b,a,g);(a=e.getVoxelWasm(this.view))&&a.setIsInScaleRange(this,b)}async whenGraphicAttributes(b,a){return b}_dbg(b,a){this._dbgFlags.has(b)&&(b===d.Error?r.getLogger(this).error(a):r.getLogger(this).warn(a))}};
n.__decorate([p.property()],l.prototype,"layer",void 0);n.__decorate([p.property()],l.prototype,"baseUrl",null);n.__decorate([p.property({type:Boolean})],l.prototype,"slicePlaneEnabled",void 0);return l=n.__decorate([x.subclass("esri.views.3d.layers.VoxelLayerView3D")],l)});