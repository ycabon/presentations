// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ./tsSupport/assignHelper ../config ./Error ./promiseUtils ../geometry/Point ../geometry/support/webMercatorUtils ../portal/Portal ../tasks/GeometryService ../tasks/support/ProjectParameters".split(" "),function(u,e,v,g,h,d,k,l,m,n,p){function q(a,c){var b=c.spatialReference;return b.isWGS84?d.resolve(a):b.isWebMercator?d.resolve(l.geographicToWebMercator(a)):r().then(function(f){if(!f)return d.reject(new h("geometry-service:missing-url","Geometry service URL is missing"));
f=new n({url:f});var c=new p({geometries:[a],outSR:b});return f.project(c).then(function(a){return a[0]})})}function r(){if(g.geometryServiceUrl)return d.resolve(g.geometryServiceUrl);var a=m.getDefault();return a.load().always(function(){return a.get("helperServices.geometry.url")})}Object.defineProperty(e,"__esModule",{value:!0});var t={maximumAge:0,timeout:15E3,enableHighAccuracy:!0};e.supported=function(){var a=!!navigator.geolocation;a||console.log("geolocation: unsupported.");a&&((a=(a=window.hasOwnProperty("isSecureContext"))&&
window.isSecureContext||!a&&"https:"===window.location.protocol)||console.log("geolocation: requires a secure origin."));return a};e.getCurrentPosition=function(a){a||(a=t);var c=d.create(function(b,c){navigator.geolocation.getCurrentPosition(b,c,a)});return d.timeout(c,15E3,void 0)};e.positionToPoint=function(a,c){var b=a&&a.coords||{},b={accuracy:b.accuracy,altitude:b.altitude,altitudeAccuracy:b.altitudeAccuracy,heading:b.heading,latitude:b.latitude,longitude:b.longitude,speed:b.speed};a=a?{coords:b,
timestamp:a.timestamp}:a;a=(a=a&&a.coords)?new k({longitude:a.longitude,latitude:a.latitude,z:a.altitude||null,spatialReference:{wkid:4326}}):null;return q(a,c)}});