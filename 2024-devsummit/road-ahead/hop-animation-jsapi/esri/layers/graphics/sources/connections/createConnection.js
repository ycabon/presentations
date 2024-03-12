// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./GeoEventConnection","./WebSocketConnection","../../../support/ClientSideConnection"],function(f,g,h,k){f.createConnection=function(c,b,l,m,a,d,n,p,q){if(null==a&&null==d)a=null;else{var e={};null!=d&&(e.geometry=d);null!=a&&(e.where=a);a=e}b={source:c,sourceSpatialReference:b,spatialReference:l,geometryType:m,filter:a,maxReconnectionAttempts:n,maxReconnectionInterval:p,customParameters:q};return c?c.path.startsWith("wss://")||c.path.startsWith("ws://")?new h.WebSocketConnection(b):
new g(b):new k.ClientSideConnection(b)};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});