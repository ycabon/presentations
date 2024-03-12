// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../arcade/featureset/support/errorsupport ./DateOnly ./SqlInterval ./SqlTimestampOffset ./TimeOnly ./UnknownTimeZone ../../chunks/datetime".split(" "),function(g,c,v,y,t,r,p,k){function w(a,d,b){b=z.exec(a);if(null!==b){const [,e,f,h,l,m,q,n]=b;a=k.DateTime.fromObject({year:parseInt(e,10),month:parseInt(f,10),day:parseInt(h,10),hour:parseInt(l,10),minute:parseInt(m,10),second:parseInt(q,10),millisecond:n?parseInt(n.replace(".",""),10):0},{zone:p.substituteUnknownTimezone(d)});if(!1===
a.isValid)throw new c.SqlError(c.SqlErrorCodes.InvalidTimeStamp);return a}b=A.exec(a);if(null!==b){const [,e,f,h,l,m,q,n,u,B,C]=b;a=t.SqlTimeStampOffset.fromParts(parseInt(e,10),parseInt(f,10),parseInt(h,10),parseInt(l,10),parseInt(m,10),parseInt(q,10),n?parseInt(n.replace(".",""),10):0,"-"===u,parseInt(B,10),parseInt(C,10));if(!1===a.isValid)throw new c.SqlError(c.SqlErrorCodes.InvalidTimeStamp);return a}b=D.exec(a);if(null!==b){const [,e,f,h,l,m,q,n,u]=b;a=t.SqlTimeStampOffset.fromParts(parseInt(e,
10),parseInt(f,10),parseInt(h,10),parseInt(l,10),parseInt(m,10),0,0,"-"===q,parseInt(n,10),parseInt(u,10));if(!1===a.isValid)throw new c.SqlError(c.SqlErrorCodes.InvalidTimeStamp);return a}b=E.exec(a);if(null!==b){const [,e,f,h,l,m]=b;a=k.DateTime.fromObject({year:parseInt(e,10),month:parseInt(f,10),day:parseInt(h,10),hour:parseInt(l,10),minute:parseInt(m,10),second:0},{zone:p.substituteUnknownTimezone(d)});if(!1===a.isValid)throw new c.SqlError(c.SqlErrorCodes.InvalidTimeStamp);return a}b=x.exec(a);
if(null!==b){const [,e,f,h]=b;a=k.DateTime.fromObject({year:parseInt(e,10),month:parseInt(f,10),day:parseInt(h,10),hour:0,minute:0,second:0},{zone:p.substituteUnknownTimezone(d)});if(!1===a.isValid)throw new c.SqlError(c.SqlErrorCodes.InvalidTimeStamp);return a}throw new c.SqlError(c.SqlErrorCodes.InvalidTimeStamp);}const F=/^(\d{1,2}):(\d{1,2}):(\d{1,2})$/,G=/^(\d{1,2}):(\d{1,2})$/,H=/^(\d{1,2}):(\d{1,2}):(\d{1,2}).([0-9]+)$/,x=/^(\d{4})-(\d{1,2})-(\d{1,2})$/,z=/^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?$/,
A=/^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?[ ]{0,1}(\+|\-)(\d{1,2}):(\d{1,2})$/,D=/^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})?[ ]{0,1}(\+|\-)(\d{1,2}):(\d{1,2})$/,E=/^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})$/;g.convertToExecutingTimeZone=function(a,d){if(d instanceof k.Zone)return d===p.UnknownTimeZone.instance?k.DateTime.fromMillis(a.getTime(),{zone:p.UnknownTimeZone.instance}):k.DateTime.fromJSDate(a,{zone:d});switch(d){case "system":case "local":case null:return k.DateTime.fromJSDate(a);
default:return"unknown"===d?.toLowerCase()?k.DateTime.fromMillis(a.getTime(),{zone:p.UnknownTimeZone.instance}):k.DateTime.fromJSDate(a,{zone:d})}};g.isDate=function(a){return a instanceof Date};g.isDateOnly=function(a){return a instanceof v.DateOnly};g.isDateTime=function(a){return a instanceof k.DateTime};g.isNumber=function(a){return"number"===typeof a};g.isSqlInterval=function(a){return a instanceof y.SqlInterval};g.isString=function(a){return"string"===typeof a||a instanceof String};g.isTimeOnly=
function(a){return a instanceof r.TimeOnly};g.isTimestampOffset=function(a){return a instanceof t.SqlTimeStampOffset};g.parseDate=function(a,d){const b=x.exec(a);if(null===b)try{return w(a,d)}catch{throw new c.SqlError(c.SqlErrorCodes.InvalidDate);}const [,e,f,h]=b;a=v.DateOnly.fromParts(parseInt(e,10),parseInt(f,10),parseInt(h,10));if(null===a)throw new c.SqlError(c.SqlErrorCodes.InvalidDate);return a};g.parseTime=function(a){let d=F.exec(a);if(null!==d){const [,b,e,f]=d;a=r.TimeOnly.fromParts(parseInt(b,
10),parseInt(e,10),parseInt(f,10),0);if(null!==a)return a;throw new c.SqlError(c.SqlErrorCodes.InvalidTime);}d=G.exec(a);if(null!==d){const [,b,e]=d;a=r.TimeOnly.fromParts(parseInt(b,10),parseInt(e,10),0,0);if(null!==a)return a;throw new c.SqlError(c.SqlErrorCodes.InvalidTime);}d=H.exec(a);if(null!==d){const [,b,e,f,h]=d;a=r.TimeOnly.fromParts(parseInt(b,10),parseInt(e,10),parseInt(f,10),parseInt(h,10));if(null!==a)return a}throw new c.SqlError(c.SqlErrorCodes.InvalidTime);};g.parseTimestamp=w;Object.defineProperty(g,
Symbol.toStringTag,{value:"Module"})});