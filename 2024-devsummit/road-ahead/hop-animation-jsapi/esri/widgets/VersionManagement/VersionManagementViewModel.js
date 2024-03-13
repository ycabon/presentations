// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../intl ../../core/Accessor ../../core/Error ../../core/Logger ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../core/support/UpdatingHandles ../../portal/Portal ../../portal/support/utils ../../rest/featureService/utils ../../versionManagement/VersionManagementService ../../intl/locale ../../intl/messages".split(" "),function(f,e,p,n,q,l,g,A,B,r,t,u,v,w,
x,y,z){e=class extends p{constructor(a){super(a);this._currentVersionIdentifiers=new Map;this._hasAdvancedEditingUserTypeExtension=new Map;this._initialValidationsFinished=!1;this._portals=new Map;this._serverVersions=new Map;this._updatingHandles=new t.UpdatingHandles;this._userForUrl=new Map;this._validConstructProperties=!0;this.executionError=null;this.featureServices=new Map;this.loadError=this.layers=null;this.serviceNames=new Map;this.userInfos=new Map;this.versionInfos=new Map;this.versionManagementServices=
new Map}initialize(){const a=async()=>{this.messages=await z.fetchMessageBundle("esri/widgets/VersionManagement/t9n/VersionManagement")};a().then(()=>{this.addHandles([l.watch(()=>this.layers,async()=>{await this._onLayersChange()},l.initial),l.on(()=>this.layers,"change",async()=>{await this._onLayersChange()}),y.onLocaleChange(a)])})}destroy(){this._updatingHandles.destroy()}get state(){return this.loadError||!this._validConstructProperties?"disabled":this.executionError?"failed":this._updatingHandles.updating?
"executing":this._initialValidationsFinished?"ready":"loading"}async alterVersion(a){if("disabled"===this.state)this._logError("execution-error",this.loadError);else{var {messages:{info:{noAdvancedEditingUserTypeExtension:d,notValidEnterpriseVersion:c}}}=this,b=this.versionManagementServices.get(a.featureServerUrl);if(b)if(!this._serverVersions.has(a.featureServerUrl)||11.1>=this._serverVersions.get(a.featureServerUrl))this._logError("execution-error",c);else if(this._hasAdvancedEditingUserTypeExtension.get(a.featureServerUrl)){var h=
Object.assign({},a.versionIdentifier),k={...a};delete k.featureServerUrl;delete k.versionIdentifier;this._setExecutionError();await this._updatingHandles.addPromise(b.alterVersion(h,k).catch(m=>{this._logExecutionError(m)}));"failed"!==this.state&&await this._updatingHandles.addPromise(this.getVersionInfos(a.featureServerUrl,!0)).catch(m=>{this._logExecutionError(m)})}else this._logError("execution-error",d);else this._logNoVersionManagementServiceFoundError()}}async changeVersion(a,d,c){if("disabled"===
this.state)this._logError("execution-error",this.loadError);else{var b=this.versionManagementServices.get(a);if(b){var h=this._currentVersionIdentifiers.get(a)??{name:b.defaultVersionIdentifier.name,guid:b.defaultVersionIdentifier.guid};d={name:d,guid:c};this._setExecutionError();await this._updatingHandles.addPromise(b.changeVersion(this.featureServices.get(a)?.layers,h,d)).catch(k=>{this._logExecutionError(k)})&&this._currentVersionIdentifiers.set(a,d)}else this._logNoVersionManagementServiceFoundError()}}async createVersion(a){if("disabled"===
this.state)this._logError("execution-error",this.loadError);else{var d=a.featureServerUrl,c=this.versionManagementServices.get(d);c?(this._setExecutionError(),c=await this._updatingHandles.addPromise(c.createVersion({versionName:a.versionName,access:a.access,description:a.description})),a.versionOwner&&a.versionOwner!==this._userForUrl.get(d)&&(a={featureServerUrl:d,versionIdentifier:{guid:c.versionIdentifier.guid,name:c.versionIdentifier.name},ownerName:a.versionOwner??this._userForUrl.get(d)},await this._updatingHandles.addPromise(this.alterVersion(a))),
"failed"!==this.state&&await this._updatingHandles.addPromise(this.getVersionInfos(d,!0))):this._logNoVersionManagementServiceFoundError()}}async deleteVersion(a,d,c){if("disabled"===this.state)this._logError("execution-error",this.loadError);else{var b=this.versionManagementServices.get(a);b?(d={name:d,guid:c},this._setExecutionError(),await this._updatingHandles.addPromise(b.deleteVersion(d)).catch(h=>{this._logExecutionError(h)})&&await this.getVersionInfos(a,!0)):this._logNoVersionManagementServiceFoundError()}}async getVersionInfos(a,
d){if("disabled"===this.state)this._logError("execution-error",this.loadError);else{var {messages:{info:{noFeatureServiceFound:c}}}=this,b=this.featureServices.get(a)?.featureService;if(b){this._setExecutionError();b.loaded||(await this._updatingHandles.addPromise(b.load()).catch(h=>{this._logExecutionError(h)}),c=b.url,this._serverVersions.set(c,b.sourceJSON?.currentVersion??0),11.1>=this._serverVersions.get(c)&&this._hasAdvancedEditingUserTypeExtension.set(c,!1),this._portals.get(a)&&this._userForUrl.get(a)?
this._hasAdvancedEditingUserTypeExtension.set(c,await v.hasUserTypeExtension(this._portals.get(a),this._userForUrl.get(a),"advediting")):this._hasAdvancedEditingUserTypeExtension.set(c,!1));b.versionManagementServiceUrl&&this.versionManagementServices.set(b.url,new x({url:b.versionManagementServiceUrl}));if(b=this.versionManagementServices.get(a)){b.loaded||await this._updatingHandles.addPromise(b.load()).catch(h=>{this._logExecutionError(h)});if(!this.versionInfos.get(a)||d)d=await this._updatingHandles.addPromise(b.getVersionInfos()).catch(h=>
{this._logExecutionError(h)}),this.versionInfos.set(a,d),this._currentVersionIdentifiers.set(a,b.defaultVersionIdentifier);return this.versionInfos.get(a)}this._logNoVersionManagementServiceFoundError()}else this._logError("execution-error",c)}}_logError(a,d,c){"missing-property"!==a&&"no-feature-services"!==a||this._setLoadError(d);"execution-error"===a&&this._setExecutionError(d);q.getLogger(this).error(new n(a,d,c))}_logExecutionError(a){a instanceof n?this._logError("execution-error",a.message,
a.details):this._logError("execution-error",`Error: ${a}`)}_logNoVersionManagementServiceFoundError(){this._logError("execution-error",this.messages.info.noVersionManagementServiceFound)}_setExecutionError(a){this._set("executionError",a)}_setLoadError(a){this._set("loadError",a)}async _onLayersChange(){const {messages:{info:{noFeatureServices:a,noLayersProperty:d}}}=this;this._initialValidationsFinished=!1;this._setLoadError();this._validConstructProperties=!0;if(this.layers)if(this.featureServices=
w.createFeatureServices(this.layers),this.featureServices.size){for(const b of this.featureServices.keys())if(!this.serviceNames.has(b)){this.serviceNames.set(b,b.split("/").at(-2));var c=new u({authMode:"immediate",url:(new URL(b)).origin+"/portal"});await c.load();this._portals.set(b,c);(c=c?.user?.username)&&this._userForUrl.set(b,c)}this._initialValidationsFinished=!0}else this._logError("no-feature-services",a),this._validConstructProperties=!1;else this._logError("missing-property",d),this._validConstructProperties=
!1}};f.__decorate([g.property()],e.prototype,"_initialValidationsFinished",void 0);f.__decorate([g.property({readOnly:!0})],e.prototype,"executionError",void 0);f.__decorate([g.property()],e.prototype,"featureServices",void 0);f.__decorate([g.property()],e.prototype,"layers",void 0);f.__decorate([g.property()],e.prototype,"loadError",void 0);f.__decorate([g.property()],e.prototype,"messages",void 0);f.__decorate([g.property()],e.prototype,"serviceNames",void 0);f.__decorate([g.property({readOnly:!0})],
e.prototype,"state",null);f.__decorate([g.property()],e.prototype,"userInfos",void 0);f.__decorate([g.property()],e.prototype,"versionInfos",void 0);f.__decorate([g.property()],e.prototype,"versionManagementServices",void 0);return e=f.__decorate([r.subclass("esri.widgets.VersionManagement.VersionManagementViewModel")],e)});