// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Collection ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ./FeatureSnappingLayerSource ./Settings".split(" "),function(b,a,d,c,k,l,m,f,g,e){a=class extends a{constructor(h){super(h);this.forceDisabled=this.enabledToggled=this.enabled=!1;this.featureEnabled=this.selfEnabled=!0;this.featureSources=new d;this.distance=
e.defaults.distance;this.touchSensitivityMultiplier=e.defaults.touchSensitivityMultiplier}get effectiveEnabled(){return!this.forceDisabled&&(this.enabledToggled?!this.enabled:this.enabled)}get effectiveSelfEnabled(){return this.effectiveEnabled&&this.selfEnabled}get effectiveFeatureEnabled(){return this.effectiveEnabled&&this.featureEnabled}};b.__decorate([c.property()],a.prototype,"enabled",void 0);b.__decorate([c.property()],a.prototype,"enabledToggled",void 0);b.__decorate([c.property()],a.prototype,
"forceDisabled",void 0);b.__decorate([c.property()],a.prototype,"selfEnabled",void 0);b.__decorate([c.property()],a.prototype,"featureEnabled",void 0);b.__decorate([c.property({type:d.ofType(g)})],a.prototype,"featureSources",void 0);b.__decorate([c.property()],a.prototype,"distance",void 0);b.__decorate([c.property()],a.prototype,"touchSensitivityMultiplier",void 0);b.__decorate([c.property({readOnly:!0})],a.prototype,"effectiveEnabled",null);b.__decorate([c.property({readOnly:!0})],a.prototype,
"effectiveSelfEnabled",null);b.__decorate([c.property({readOnly:!0})],a.prototype,"effectiveFeatureEnabled",null);return a=b.__decorate([f.subclass("esri.views.interactive.snapping.SnappingOptions")],a)});