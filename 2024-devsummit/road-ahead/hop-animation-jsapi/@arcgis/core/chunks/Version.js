/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import t from"../core/Error.js";let r=class r{constructor(t,r,o=""){this.major=t,this.minor=r,this._context=o}lessThan(t,r){return this.major<t||t===this.major&&this.minor<r}since(t,r){return!this.lessThan(t,r)}validate(r){if(this.major!==r.major){const o=this._context&&this._context+":",s=this._context&&this._context+" ";throw new t(o+"unsupported-version",`Required major ${s}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:r})}}clone(){return new r(this.major,this.minor,this._context)}static parse(o,s=""){const[e,i]=o.split("."),n=/^\s*\d+\s*$/;if(!e?.match||!n.test(e))throw new t((s&&s+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:o});if(!i?.match||!n.test(i))throw new t((s&&s+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:o});const a=parseInt(e,10),h=parseInt(i,10);return new r(a,h,s)}};export{r as V};
