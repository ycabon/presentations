// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../core/mathUtils ../../core/unitUtils ../ellipsoidUtils ../support/Ellipsoid ../support/geodesicConstants ../support/spatialReferenceUtils ../support/SupportedGCSWkids".split(" "),function(a,F,ea,G,m,fa,B,ha){function R(b,c,d=J()){return null==b||null==c?null:S(b,c,d).projector}function H(b,c){if(!b)return a.ProjectionID.UNKNOWN;if(c.spatialReference===b)return c.spatialReferenceId;c.spatialReference=b;"metersPerUnit"in c&&(c.metersPerUnit=ea.getMetersPerUnitForSR(b,1));return G.isSphericalECEF(b)?
c.spatialReferenceId=a.ProjectionID.SPHERICAL_ECEF:B.isWGS84(b)?c.spatialReferenceId=a.ProjectionID.WGS84:B.isWebMercator(b)?c.spatialReferenceId=a.ProjectionID.WEB_MERCATOR:B.isPlateCarree(b)?c.spatialReferenceId=a.ProjectionID.PLATE_CARREE:b.wkt===G.WGS84ECEFSpatialReferenceLike.wkt?c.spatialReferenceId=a.ProjectionID.WGS84_ECEF:b.wkid===ha.SupportedGCSWkids.CGCS2000?c.spatialReferenceId=a.ProjectionID.CGCS2000:b.wkt===G.SphericalPCPFMarsLike.wkt?c.spatialReferenceId=a.ProjectionID.SPHERICAL_MARS_PCPF:
b.wkt===G.SphericalPCPFMoonLike.wkt?c.spatialReferenceId=a.ProjectionID.SPHERICAL_MOON_PCPF:B.isMars(b)?c.spatialReferenceId=a.ProjectionID.GCSMARS2000:B.isMoon(b)?c.spatialReferenceId=a.ProjectionID.GCSMOON2000:c.spatialReferenceId=a.ProjectionID.UNKNOWN}function f(b,c,d,e){b!==d&&(d[e++]=b[c++],d[e++]=b[c++],d[e]=b[c])}function x(b,c,d,e){d[e++]=C*(b[c++]/m.earth.radius);d[e++]=C*(Math.PI/2-2*Math.atan(Math.exp(-b[c++]/m.earth.radius)));d[e]=b[c]}function T(b,c,d,e){x(b,c,d,e);r(d,e,d,e)}function U(b,
c,d,e){x(b,c,d,e);t(d,e,d,e)}function V(b,c,d,e,g){var k=.4999999*Math.PI;k=F.clamp(D*b[c+1],-k,k);k=Math.sin(k);d[e++]=D*b[c]*g.radius;d[e++]=g.halfSemiMajorAxis*Math.log((1+k)/(1-k));d[e]=b[c+2]}function y(b,c,d,e){V(b,c,d,e,m.earth)}function u(b,c,d,e){d[e]=b[c]*W;d[e+1]=b[c+1]*W;d[e+2]=b[c+2]}function z(b,c,d,e){d[e]=b[c]*K;d[e+1]=b[c+1]*K;d[e+2]=b[c+2]}function X(b,c,d,e){x(b,c,d,e);u(d,e,d,e)}function L(b,c,d,e,g){g+=b[c+2];const k=D*b[c+1];b=D*b[c];c=Math.cos(k);d[e++]=Math.cos(b)*c*g;d[e++]=
Math.sin(b)*c*g;d[e]=Math.sin(k)*g}function M(b,c,d,e){L(b,c,d,e,m.moon.radius)}function N(b,c,d,e){L(b,c,d,e,m.mars.radius)}function r(b,c,d,e){L(b,c,d,e,m.earth.radius)}function I(b,c,d,e,g){var k=b[c];const h=b[c+1];c=b[c+2];b=Math.sqrt(k*k+h*h+c*c);c=F.asinClamped(c/(0===b?1:b));k=Math.atan2(h,k);d[e++]=C*k;d[e++]=C*c;d[e]=b-g}function O(b,c,d,e){I(b,c,d,e,m.moon.radius)}function P(b,c,d,e){I(b,c,d,e,m.mars.radius)}function v(b,c,d,e){I(b,c,d,e,m.earth.radius)}function Y(b,c,d,e){v(b,c,d,e);y(d,
e,d,e)}function Z(b,c,d,e){v(b,c,d,e);t(d,e,d,e)}function t(b,c,d,e){var g=m.earth;const k=D*b[c];var h=D*b[c+1];b=b[c+2];c=Math.sin(h);h=Math.cos(h);const A=g.radius/Math.sqrt(1-g.eccentricitySquared*c*c);d[e++]=(A+b)*h*Math.cos(k);d[e++]=(A+b)*h*Math.sin(k);d[e++]=(A*(1-g.eccentricitySquared)+b)*c}function w(b,c,d,e){var g=fa.earthEllipsoidConstants,k=b[c],h=b[c+1];b=b[c+2];let A;c=Math.abs(b);var q=k*k+h*h;var E=Math.sqrt(q);var l=q+b*b;var n=Math.sqrt(l);k=Math.atan2(h,k);var p=b*b/l;l=q/l;h=
g.a2/n;q=g.a3-g.a4/n;.3<l?(p=c/n*(1+l*(g.a1+h+p*q)/n),n=Math.asin(p),h=p*p,l=Math.sqrt(1-h)):(l=E/n*(1-p*(g.a5-h-l*q)/n),n=Math.acos(l),h=1-l*l,p=Math.sqrt(h));A=1-m.earth.eccentricitySquared*h;h=m.earth.radius/Math.sqrt(A);g=g.a6*h;h=E-h*l;q=c-g*p;c=l*h+p*q;E=l*q-p*h;g=E/(g/A+c);n+=g;0>b&&(n=-n);d[e++]=C*k;d[e++]=C*n;d[e]=c+E*g/2}function aa(b,c,d,e){w(b,c,d,e);r(d,e,d,e)}function ba(b,c,d,e){w(b,c,d,e);y(d,e,d,e)}function S(b,c,d){if(null==b||null==c||d.source.spatialReference===b&&d.dest.spatialReference===
c)return d;const e=H(b,d.source),g=H(c,d.dest);e===a.ProjectionID.UNKNOWN&&g===a.ProjectionID.UNKNOWN?B.equals(b,c)?d.projector=f:d.projector=null:d.projector=Q[e][g];return d}function J(){return{source:{spatialReference:null,spatialReferenceId:a.ProjectionID.UNKNOWN,metersPerUnit:1},dest:{spatialReference:null,spatialReferenceId:a.ProjectionID.UNKNOWN,metersPerUnit:1},projector:f}}a.ProjectionID=void 0;(function(b){b[b.UNKNOWN=0]="UNKNOWN";b[b.SPHERICAL_ECEF=1]="SPHERICAL_ECEF";b[b.WGS84=2]="WGS84";
b[b.WEB_MERCATOR=3]="WEB_MERCATOR";b[b.WGS84_ECEF=4]="WGS84_ECEF";b[b.CGCS2000=5]="CGCS2000";b[b.WGS84_COMPARABLE_LON_LAT=6]="WGS84_COMPARABLE_LON_LAT";b[b.SPHERICAL_MARS_PCPF=7]="SPHERICAL_MARS_PCPF";b[b.GCSMARS2000=8]="GCSMARS2000";b[b.SPHERICAL_MOON_PCPF=9]="SPHERICAL_MOON_PCPF";b[b.GCSMOON2000=10]="GCSMOON2000";b[b.LON_LAT=11]="LON_LAT";b[b.PLATE_CARREE=12]="PLATE_CARREE"})(a.ProjectionID||(a.ProjectionID={}));const Q={[a.ProjectionID.WGS84]:{[a.ProjectionID.CGCS2000]:null,[a.ProjectionID.GCSMARS2000]:null,
[a.ProjectionID.GCSMOON2000]:null,[a.ProjectionID.LON_LAT]:f,[a.ProjectionID.WGS84_COMPARABLE_LON_LAT]:f,[a.ProjectionID.SPHERICAL_ECEF]:r,[a.ProjectionID.SPHERICAL_MARS_PCPF]:null,[a.ProjectionID.SPHERICAL_MOON_PCPF]:null,[a.ProjectionID.UNKNOWN]:null,[a.ProjectionID.WEB_MERCATOR]:y,[a.ProjectionID.PLATE_CARREE]:u,[a.ProjectionID.WGS84]:f,[a.ProjectionID.WGS84_ECEF]:t},[a.ProjectionID.CGCS2000]:{[a.ProjectionID.CGCS2000]:f,[a.ProjectionID.GCSMARS2000]:null,[a.ProjectionID.GCSMOON2000]:null,[a.ProjectionID.LON_LAT]:f,
[a.ProjectionID.WGS84_COMPARABLE_LON_LAT]:f,[a.ProjectionID.SPHERICAL_ECEF]:r,[a.ProjectionID.SPHERICAL_MARS_PCPF]:null,[a.ProjectionID.SPHERICAL_MOON_PCPF]:null,[a.ProjectionID.UNKNOWN]:null,[a.ProjectionID.WEB_MERCATOR]:null,[a.ProjectionID.PLATE_CARREE]:u,[a.ProjectionID.WGS84]:null,[a.ProjectionID.WGS84_ECEF]:t},[a.ProjectionID.GCSMARS2000]:{[a.ProjectionID.CGCS2000]:null,[a.ProjectionID.GCSMARS2000]:f,[a.ProjectionID.GCSMOON2000]:null,[a.ProjectionID.LON_LAT]:f,[a.ProjectionID.WGS84_COMPARABLE_LON_LAT]:null,
[a.ProjectionID.SPHERICAL_ECEF]:null,[a.ProjectionID.SPHERICAL_MARS_PCPF]:N,[a.ProjectionID.SPHERICAL_MOON_PCPF]:null,[a.ProjectionID.UNKNOWN]:null,[a.ProjectionID.WEB_MERCATOR]:null,[a.ProjectionID.PLATE_CARREE]:null,[a.ProjectionID.WGS84]:null,[a.ProjectionID.WGS84_ECEF]:null},[a.ProjectionID.GCSMOON2000]:{[a.ProjectionID.CGCS2000]:null,[a.ProjectionID.GCSMARS2000]:null,[a.ProjectionID.GCSMOON2000]:f,[a.ProjectionID.LON_LAT]:f,[a.ProjectionID.WGS84_COMPARABLE_LON_LAT]:null,[a.ProjectionID.SPHERICAL_ECEF]:null,
[a.ProjectionID.SPHERICAL_MARS_PCPF]:null,[a.ProjectionID.SPHERICAL_MOON_PCPF]:M,[a.ProjectionID.UNKNOWN]:null,[a.ProjectionID.WEB_MERCATOR]:null,[a.ProjectionID.PLATE_CARREE]:null,[a.ProjectionID.WGS84]:null,[a.ProjectionID.WGS84_ECEF]:null},[a.ProjectionID.WEB_MERCATOR]:{[a.ProjectionID.CGCS2000]:null,[a.ProjectionID.GCSMARS2000]:null,[a.ProjectionID.GCSMOON2000]:null,[a.ProjectionID.LON_LAT]:x,[a.ProjectionID.WGS84_COMPARABLE_LON_LAT]:x,[a.ProjectionID.SPHERICAL_ECEF]:T,[a.ProjectionID.SPHERICAL_MARS_PCPF]:null,
[a.ProjectionID.SPHERICAL_MOON_PCPF]:null,[a.ProjectionID.UNKNOWN]:null,[a.ProjectionID.WEB_MERCATOR]:f,[a.ProjectionID.PLATE_CARREE]:X,[a.ProjectionID.WGS84]:x,[a.ProjectionID.WGS84_ECEF]:U},[a.ProjectionID.WGS84_ECEF]:{[a.ProjectionID.CGCS2000]:w,[a.ProjectionID.GCSMARS2000]:null,[a.ProjectionID.GCSMOON2000]:null,[a.ProjectionID.LON_LAT]:w,[a.ProjectionID.WGS84_COMPARABLE_LON_LAT]:w,[a.ProjectionID.SPHERICAL_ECEF]:aa,[a.ProjectionID.SPHERICAL_MARS_PCPF]:null,[a.ProjectionID.SPHERICAL_MOON_PCPF]:null,
[a.ProjectionID.UNKNOWN]:null,[a.ProjectionID.WEB_MERCATOR]:ba,[a.ProjectionID.PLATE_CARREE]:function(b,c,d,e){w(b,c,d,e);u(d,e,d,e)},[a.ProjectionID.WGS84]:w,[a.ProjectionID.WGS84_ECEF]:f},[a.ProjectionID.SPHERICAL_ECEF]:{[a.ProjectionID.CGCS2000]:v,[a.ProjectionID.GCSMARS2000]:null,[a.ProjectionID.GCSMOON2000]:null,[a.ProjectionID.LON_LAT]:v,[a.ProjectionID.WGS84_COMPARABLE_LON_LAT]:v,[a.ProjectionID.SPHERICAL_ECEF]:f,[a.ProjectionID.SPHERICAL_MARS_PCPF]:null,[a.ProjectionID.SPHERICAL_MOON_PCPF]:null,
[a.ProjectionID.UNKNOWN]:null,[a.ProjectionID.WEB_MERCATOR]:Y,[a.ProjectionID.PLATE_CARREE]:function(b,c,d,e){v(b,c,d,e);u(d,e,d,e)},[a.ProjectionID.WGS84]:v,[a.ProjectionID.WGS84_ECEF]:Z},[a.ProjectionID.SPHERICAL_MARS_PCPF]:{[a.ProjectionID.CGCS2000]:null,[a.ProjectionID.GCSMARS2000]:P,[a.ProjectionID.GCSMOON2000]:null,[a.ProjectionID.LON_LAT]:P,[a.ProjectionID.WGS84_COMPARABLE_LON_LAT]:null,[a.ProjectionID.SPHERICAL_ECEF]:null,[a.ProjectionID.SPHERICAL_MARS_PCPF]:f,[a.ProjectionID.SPHERICAL_MOON_PCPF]:null,
[a.ProjectionID.UNKNOWN]:null,[a.ProjectionID.WEB_MERCATOR]:null,[a.ProjectionID.PLATE_CARREE]:null,[a.ProjectionID.WGS84]:null,[a.ProjectionID.WGS84_ECEF]:null},[a.ProjectionID.SPHERICAL_MOON_PCPF]:{[a.ProjectionID.CGCS2000]:null,[a.ProjectionID.GCSMARS2000]:null,[a.ProjectionID.GCSMOON2000]:O,[a.ProjectionID.LON_LAT]:O,[a.ProjectionID.WGS84_COMPARABLE_LON_LAT]:null,[a.ProjectionID.SPHERICAL_ECEF]:null,[a.ProjectionID.SPHERICAL_MARS_PCPF]:null,[a.ProjectionID.SPHERICAL_MOON_PCPF]:f,[a.ProjectionID.UNKNOWN]:null,
[a.ProjectionID.WEB_MERCATOR]:null,[a.ProjectionID.PLATE_CARREE]:null,[a.ProjectionID.WGS84]:null,[a.ProjectionID.WGS84_ECEF]:null},[a.ProjectionID.UNKNOWN]:{[a.ProjectionID.CGCS2000]:null,[a.ProjectionID.GCSMARS2000]:null,[a.ProjectionID.GCSMOON2000]:null,[a.ProjectionID.LON_LAT]:null,[a.ProjectionID.WGS84_COMPARABLE_LON_LAT]:null,[a.ProjectionID.SPHERICAL_ECEF]:null,[a.ProjectionID.SPHERICAL_MARS_PCPF]:null,[a.ProjectionID.SPHERICAL_MOON_PCPF]:null,[a.ProjectionID.UNKNOWN]:f,[a.ProjectionID.WEB_MERCATOR]:null,
[a.ProjectionID.PLATE_CARREE]:null,[a.ProjectionID.WGS84]:null,[a.ProjectionID.WGS84_ECEF]:null},[a.ProjectionID.LON_LAT]:{[a.ProjectionID.CGCS2000]:f,[a.ProjectionID.GCSMARS2000]:f,[a.ProjectionID.GCSMOON2000]:f,[a.ProjectionID.LON_LAT]:f,[a.ProjectionID.WGS84_COMPARABLE_LON_LAT]:f,[a.ProjectionID.SPHERICAL_ECEF]:r,[a.ProjectionID.SPHERICAL_MARS_PCPF]:N,[a.ProjectionID.SPHERICAL_MOON_PCPF]:M,[a.ProjectionID.UNKNOWN]:null,[a.ProjectionID.WEB_MERCATOR]:y,[a.ProjectionID.PLATE_CARREE]:u,[a.ProjectionID.WGS84]:f,
[a.ProjectionID.WGS84_ECEF]:t},[a.ProjectionID.WGS84_COMPARABLE_LON_LAT]:{[a.ProjectionID.CGCS2000]:null,[a.ProjectionID.GCSMARS2000]:null,[a.ProjectionID.GCSMOON2000]:null,[a.ProjectionID.LON_LAT]:f,[a.ProjectionID.WGS84_COMPARABLE_LON_LAT]:f,[a.ProjectionID.SPHERICAL_ECEF]:r,[a.ProjectionID.SPHERICAL_MARS_PCPF]:null,[a.ProjectionID.SPHERICAL_MOON_PCPF]:null,[a.ProjectionID.UNKNOWN]:null,[a.ProjectionID.WEB_MERCATOR]:null,[a.ProjectionID.PLATE_CARREE]:u,[a.ProjectionID.WGS84]:f,[a.ProjectionID.WGS84_ECEF]:t},
[a.ProjectionID.PLATE_CARREE]:{[a.ProjectionID.CGCS2000]:z,[a.ProjectionID.GCSMARS2000]:null,[a.ProjectionID.GCSMOON2000]:null,[a.ProjectionID.LON_LAT]:z,[a.ProjectionID.WGS84_COMPARABLE_LON_LAT]:z,[a.ProjectionID.SPHERICAL_ECEF]:function(b,c,d,e){z(b,c,d,e);r(d,e,d,e)},[a.ProjectionID.SPHERICAL_MARS_PCPF]:null,[a.ProjectionID.SPHERICAL_MOON_PCPF]:null,[a.ProjectionID.UNKNOWN]:null,[a.ProjectionID.WEB_MERCATOR]:function(b,c,d,e){z(b,c,d,e);y(d,e,d,e)},[a.ProjectionID.PLATE_CARREE]:f,[a.ProjectionID.WGS84]:z,
[a.ProjectionID.WGS84_ECEF]:function(b,c,d,e){z(b,c,d,e);t(d,e,d,e)}}},W=m.earth.radius*Math.PI/180,K=180/(m.earth.radius*Math.PI),ca={spatialReference:null,spatialReferenceId:a.ProjectionID.UNKNOWN},ia={spatialReference:null,spatialReferenceId:a.ProjectionID.UNKNOWN},da=J(),D=F.deg2rad(1),C=F.rad2deg(1);a.classifySpatialReference=H;a.copy3=f;a.createEmptyProjectorCache=J;a.destClassificationCache=ia;a.getProjector=R;a.getProjectorName=function(b,c){switch(R(b,c,da)){case f:return"copy3";case r:return"wgs84ToSphericalECEF";
case y:return"wgs84ToWebMercator";case u:return"wgs84ToPlateCarree";case t:return"wgs84ToWGS84ECEF";case x:return"webMercatorToWGS84";case T:return"webMercatorToSphericalECEF";case U:return"webMercatorToWGS84ECEF";case X:return"webMercatorToPlateCarree";case w:return"wgs84ECEFToWGS84";case aa:return"wgs84ECEFToSphericalECEF";case ba:return"wgs84ECEFToWebMercator";case v:return"sphericalECEFToWGS84";case Y:return"sphericalECEFToWebMercator";case P:return"sphericalMarsPCPFToMars2000";case O:return"sphericalMoonPCPFToMoon2000";
case Z:return"sphericalECEFToWGS84ECEF";case N:return"mars2000ToSphericalPCPF";case M:return"moon2000ToSphericalPCPF";default:return null}};a.getWGS84ComparableLonLatProjector=function(b){b=H(b,ca);return Q[b][a.ProjectionID.WGS84_COMPARABLE_LON_LAT]};a.invPlateCarreeScale=K;a.lonLatToWebMercatorComparable=V;a.populateProjectorCache=S;a.projectionTable=Q;a.projectorCache=da;a.sourceClassificationCache=ca;a.sphericalPCPFtoLonLatElevation=I;a.wgs84ToWebMercator=y;Object.defineProperty(a,Symbol.toStringTag,
{value:"Module"})});