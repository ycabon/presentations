/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class e{constructor(e=1/0,a=-1/0){this.elevationRangeMin=e,this.elevationRangeMax=a}get elevationRangeValid(){return!Number.isNaN(this.elevationRangeMin)}invalidateElevationRange(){this.elevationRangeMin=NaN}expandElevationRangeValues(e,a){this.elevationRangeMin=Math.min(this.elevationRangeMin,e),this.elevationRangeMax=Math.max(this.elevationRangeMax,a)}expandElevationRange(e){this.elevationRangeMin=Math.min(this.elevationRangeMin,e.elevationRangeMin),this.elevationRangeMax=Math.max(this.elevationRangeMax,e.elevationRangeMax)}setElevationRange(e){this.elevationRangeMin=e.elevationRangeMin,this.elevationRangeMax=e.elevationRangeMax}}export{e as E};
