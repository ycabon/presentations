// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../Color","../../../../core/colorUtils"],function(b,a,d){class e{constructor(){this.glowWidth=8;this.innerWidth=.75}}const f=new e;class g{constructor(){this.size=.5}}const h=new g;class k{constructor(){this.size=.5;this.visibleColor=new a([3,252,111,.75]);this.occludedColor=new a([252,3,69,.75]);this.undefinedColor=new a([127,127,127,.75])}}const l=new k;class m{constructor(){this.innerWidth=2;this.outerWidth=8;this.visibleInnerColor=new a([3,252,111,1]);this.visibleOuterColor=
new a([3,252,111,.15]);this.occludedInnerColor=new a([252,3,69,1]);this.occludedOuterColor=new a([252,3,69,.1]);this.undefinedInnerColor=new a([255,255,255,1]);this.undefinedOuterColor=new a([127,127,127,.2])}}const n=new m;b.getLaserLineColors=function(c){c=c.accentColor;const p=d.getContrast(c);return{glowColor:c,innerColor:p,globalAlpha:.75*c.a}};b.getObserverRGBA=function(c){return d.multiplyOpacityToUnitRGBA(c.accentColor,.75)};b.laserLineConfiguration=f;b.lineOfSightConfiguration=n;b.observerConfiguration=
h;b.targetConfiguration=l;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});