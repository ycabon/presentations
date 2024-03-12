// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){b.ProfileGenerationErrorCause=void 0;(function(a){a.TooComplex="too-complex";a.InvalidGeometry="invalid-geometry";a.InvalidElevationInfo="invalid-elevation-info";a.ElevationQueryError="elevation-query-error"})(b.ProfileGenerationErrorCause||(b.ProfileGenerationErrorCause={}));class c extends Error{constructor(a){super("profile could not be generated",{cause:a});this.type="ProfileGenerationError"}}b.ProfileGenerationError=c;b.isProfileGenerationError=function(a){return"ProfileGenerationError"===
a.type};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});