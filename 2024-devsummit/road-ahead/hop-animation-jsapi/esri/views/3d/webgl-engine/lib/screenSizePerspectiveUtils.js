// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/mathUtils","../../../ViewingMode"],function(k,f,y){function q(a,c,b){b=b.parameters;m.scale=Math.min(b.divisor/(c-b.offset),1);m.factor=Math.abs(a*a*a);return m}function n(a,c){return f.lerp(a*Math.max(c.scale,c.minScaleFactor),a,c.factor)}class p{get minScaleFactor(){return null!=this._fontHeight?Math.min(this._description.minPixelSize/this._fontHeight,1):0}constructor(a,c,b,d={camera:{distance:0,fovY:0},divisor:0,offset:0},e){this._viewingMode=a;this._description=
c;this._ellipsoidRadius=b;this.parameters=d;this._fontHeight=e;this._viewingMode===y.ViewingMode.Local?(this._coverageCompensation=this._surfaceCoverageCompensationLocal,this._calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersLocal):(this._coverageCompensation=this._surfaceCoverageCompensationGlobal,this._calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersGlobal)}update(a){if(this.parameters&&this.parameters.camera.fovY===a.fovY&&this.parameters.camera.distance===
a.distance)return!1;this._calculateParameters(a,this._ellipsoidRadius,this.parameters);return!0}overrideFontHeight(a){return a!==this._fontHeight?new p(this._viewingMode,this._description,this._ellipsoidRadius,this.parameters,a):this}_calculateParameters(a,c,b){const {scaleStart:d,scaleFallOffRange:e}=this._description,{fovY:g,distance:l}=a;var h=this._calculateCurvatureDependentParameters(a,c);c=this._coverageCompensation(a,c,h);const {tiltAngle:r,scaleFallOffFactor:t}=h,u=Math.sin(r)*l,v=.5*Math.PI-
r-g*(.5-d*c);h=u/Math.cos(v);c=(h-u/Math.cos(v+g*e*c)*t)/(1-t);b.camera.fovY=a.fovY;b.camera.distance=a.distance;b.offset=c;b.divisor=h-c;return b}_calculateCurvatureDependentParametersLocal(a,c,b=w){b.tiltAngle=this._description.curvatureDependent.min.tiltAngle;b.scaleFallOffFactor=this._description.curvatureDependent.min.scaleFallOffFactor;return b}_calculateCurvatureDependentParametersGlobal(a,c,b=w){const d=this._description.curvatureDependent;a=1+a.distance/c;a=Math.sqrt(a*a-1);const [e,g]=[d.min.curvature,
d.max.curvature];a=f.clamp((a-e)/(g-e),0,1);const [l,h]=[d.min,d.max];b.tiltAngle=f.lerp(l.tiltAngle,h.tiltAngle,a);b.scaleFallOffFactor=f.lerp(l.scaleFallOffFactor,h.scaleFallOffFactor,a);return b}_surfaceCoverageCompensationLocal(a,c,b){return(a.fovY-b.tiltAngle)/a.fovY}_surfaceCoverageCompensationGlobal(a,c,b){const d=c*c;b=b.tiltAngle+.5*Math.PI;const {fovY:e,distance:g}=a;a=g*g+d-2*Math.cos(b)*g*c;const l=Math.sqrt(a);return(Math.acos(Math.sqrt(a-d)/l)-Math.asin(c/(l/Math.sin(b)))+.5*e)/e}}const x=
{curvatureDependent:{min:{curvature:f.deg2rad(10),tiltAngle:f.deg2rad(12),scaleFallOffFactor:.5},max:{curvature:f.deg2rad(70),tiltAngle:f.deg2rad(40),scaleFallOffFactor:.8}},scaleStart:.3,scaleFallOffRange:.65,minPixelSize:0},m={scale:0,factor:0,minScaleFactor:0},w={tiltAngle:0,scaleFallOffFactor:0};k.applyPrecomputedScaleFactor=function(a,c,b=[0,0]){c=Math.min(Math.max(c.scale,c.minScaleFactor),1);b[0]=a[0]*c;b[1]=a[1]*c;return b};k.applyScaleFactor=n;k.getLabelSettings=function(a,c){const {curvatureDependent:b,
scaleStart:d,scaleFallOffRange:e}=x;return new p(a,{curvatureDependent:{min:{curvature:b.min.curvature,tiltAngle:b.min.tiltAngle,scaleFallOffFactor:.7},max:{curvature:b.max.curvature,tiltAngle:b.max.tiltAngle,scaleFallOffFactor:.95}},scaleStart:d,scaleFallOffRange:e,minPixelSize:14},c)};k.getSettings=function(a,c){return new p(a,x,c)};k.precomputeScaleFactor=function(a,c,b,d){a=q(a,c,b);a.minScaleFactor=0;a=n(1,a);d.scale=a;d.factor=0;d.minScaleFactor=b.minScaleFactor};k.scale=function(a,c,b,d){return n(a,
q(c,b,d))};Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});