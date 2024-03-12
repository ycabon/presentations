// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){class e{constructor(c,f,a,b,g,h,k,l,m){this.createQuery=c;this.deleteQuery=f;this.resultAvailable=a;this.getResult=b;this.disjoint=g;this.beginTimeElapsed=h;this.endTimeElapsed=k;this.createTimestamp=l;this.timestampBits=m}}d.hasRunningElapsedTimer=!1;d.DisjointTimerQuery=e;d.createDisjointTimerQuery=function(c,f){if(f.disjointTimerQuery)return null;let a=c.getExtension("EXT_disjoint_timer_query_webgl2");return a?new e(()=>c.createQuery(),b=>{c.deleteQuery(b);d.hasRunningElapsedTimer=
!1},b=>c.getQueryParameter(b,c.QUERY_RESULT_AVAILABLE),b=>c.getQueryParameter(b,c.QUERY_RESULT),()=>c.getParameter(a.GPU_DISJOINT_EXT),b=>{d.hasRunningElapsedTimer||(d.hasRunningElapsedTimer=!0,c.beginQuery(a.TIME_ELAPSED_EXT,b))},()=>{c.endQuery(a.TIME_ELAPSED_EXT);d.hasRunningElapsedTimer=!1},b=>a.queryCounterEXT(b,a.TIMESTAMP_EXT),()=>c.getQuery(a.TIMESTAMP_EXT,a.QUERY_COUNTER_BITS_EXT)):(a=c.getExtension("EXT_disjoint_timer_query"))?new e(()=>a.createQueryEXT(),b=>{a.deleteQueryEXT(b);d.hasRunningElapsedTimer=
!1},b=>a.getQueryObjectEXT(b,a.QUERY_RESULT_AVAILABLE_EXT),b=>a.getQueryObjectEXT(b,a.QUERY_RESULT_EXT),()=>c.getParameter(a.GPU_DISJOINT_EXT),b=>{d.hasRunningElapsedTimer||(d.hasRunningElapsedTimer=!0,a.beginQueryEXT(a.TIME_ELAPSED_EXT,b))},()=>{a.endQueryEXT(a.TIME_ELAPSED_EXT);d.hasRunningElapsedTimer=!1},b=>a.queryCounterEXT(b,a.TIMESTAMP_EXT),()=>a.getQueryEXT(a.TIMESTAMP_EXT,a.QUERY_COUNTER_BITS_EXT)):null};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});