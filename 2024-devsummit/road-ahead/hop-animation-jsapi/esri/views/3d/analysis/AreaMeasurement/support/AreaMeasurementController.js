// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/tslib.es6 ../../../../../core/Accessor ../../../../../core/reactiveUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/has ../../../../../core/Logger ../../../../../core/RandomLCG ../../../../../core/accessorSupport/decorators/subclass ../../../../../geometry/projection ../../../../../geometry/spatialReferenceEllipsoidUtils ./MeasurementData ../../support/UnitNormalizer".split(" "),function(c,d,h,e,f,q,r,t,k,l,g,m,n){c.AreaMeasurementController=
class extends h{constructor(a){super(a)}initialize(){var a=this.view.spatialReference,b=g.getSphericalPCPF(a);b=b===g.SphericalECEFSpatialReference?g.WGS84ECEFSpatialReference:b;a=!a||l.canProjectWithoutEngine(a,b)?b:a;a=new n.UnitNormalizer(a);this._measurementDataManager=new m.MeasurementDataManager(this.view,a);this.addHandles([this.analysisViewData.path.on("change",()=>this._update()),e.watch(()=>this.analysisViewData.stagedPoint,()=>this._update(),e.sync),e.watch(()=>this.analysisViewData.mode,
()=>this._update(),e.sync)]);this._update()}_update(a=!1){const {analysisViewData:b,view:p}=this;this._measurementDataManager.update(b.path,b.stagedPoint,p,{maxRelativeErrorCoplanar:.005,maxRelativeErrorAlmostCoplanar:.01,verticalAngleThreshold:80},b.mode,a)&&(b.measurementData=this._measurementDataManager.getData())}};d.__decorate([f.property({constructOnly:!0})],c.AreaMeasurementController.prototype,"view",void 0);d.__decorate([f.property({constructOnly:!0})],c.AreaMeasurementController.prototype,
"analysis",void 0);d.__decorate([f.property({constructOnly:!0})],c.AreaMeasurementController.prototype,"analysisViewData",void 0);c.AreaMeasurementController=d.__decorate([k.subclass("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurementController")],c.AreaMeasurementController);Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});