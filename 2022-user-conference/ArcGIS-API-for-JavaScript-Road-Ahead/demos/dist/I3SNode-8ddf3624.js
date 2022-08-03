import { oQ as E } from './_virtual_index-9b831d4a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class t{constructor(t,i){this.id=t,this.mbs=i,this.renderMbs=E(0,0,0,-1),this.elevationRange=null;}}class i{constructor(){this.min=1/0,this.max=-1/0,this.valid=!1;}}var n,o,s,a,c;!function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked";}(n||(n={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked";}(o||(o={}));class h extends t{constructor(e,t,i,n,a,c,h,d,r,l){super(e,i),this.index=t,this.childCount=n,this.level=a,this.resources=c,this.version=h,this.lodMetric=d,this.maxError=r,this.numFeatures=l,this.failed=!1,this.cacheState=s.Unknown,this.vertexCount=0,this.memory=0,this.childrenLoaded=0,this.hasModifications=!1,this.imModificationImpact=o.NotChecked;}}!function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached";}(s||(s={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera";}(a||(a={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf";}(c||(c={}));class d{constructor(e,t,i,n){this.nodeHasLOD=e,this.isChosen=t,this.lodLevel=i,this.version=n;}}

export { a, c, d, h, i, n, o, s, t };
