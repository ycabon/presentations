// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/generatorHelper ../../../../../core/tsSupport/awaiterHelper ../../../../../core/promiseUtils ../../utils ../../../../support/heatmapUtils ../../../../../support/arcadeOnDemand ../../../../../tasks/support/ClassBreaksDefinition ../../../../../tasks/support/generateRendererUtils".split(" "),function(W,e,u,v,G,w,H,O,P,Q){function I(a,b,c){b=null==b?-Infinity:b;c=null==c?Infinity:c;return a.filter(function(a){return null!=a&&p(a)&&a>=b&&a<=c})}function t(a,
b){return v(this,void 0,void 0,function(){var c,d,f,g,m,k,l,h,C,e,r;return u(this,function(n){switch(n.label){case 0:return c=a.field,d="function"===typeof c,f=a.valueExpression,g=a.normalizationType,m=a.normalizationField,k=a.normalizationTotal,l=[],h=a.view,e=C=null,f?q?[3,2]:[4,O.loadArcade()]:[3,3];case 1:q=r=n.sent().arcadeUtils,n.label=2;case 2:C=q.createFunction(f),e=h&&q.getViewInfo({viewingMode:"2d"===h.type?"map":h.viewingMode,scale:h.scale,spatialReference:h.spatialReference}),n.label=
3;case 3:if(!b)return[2,l];b.forEach(function(a){var b=a.attributes,h;f?(h=q.createExecContext(a,e),h=q.executeFunction(C,h)):d?h=c.call(null,a):b&&(h=b[c]);g&&null!=h&&p(h)&&(b=b&&parseFloat(b[m]),"log"===g&&0!==h?h=Math.log(h)*Math.LOG10E:"percent-of-total"===g&&p(k)&&0!==k?h=h/k*100:"field"===g&&p(b)&&0!==b&&(h/=b));l.push(h)});return[2,l]}})})}function R(a,b){for(var c=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY,f=null,g=null,m=null,k=null,l=0;l<a.length;l++)var h=a[l],f=f+h,c=Math.min(c,
h),d=Math.max(d,h);if(l=a.length){g=f/l;for(k=m=0;k<a.length;k++)h=a[k],m+=Math.pow(h-g,2);k=b?1<l?m/(l-1):0:0<l?m/l:0;m=Math.sqrt(k)}else d=c=null;return{avg:g,count:l,max:d,min:c,stddev:m,sum:f,variance:k}}function J(a){var b=a.field,c=a.classificationMethod||"equal-interval",d=a.normalizationType,f=a.normalizationField,g=new P;g.classificationField=b;g.breakCount=a.breakCount;g.classificationMethod=c;g.standardDeviationInterval="standard-deviation"===c?a.standardDeviationInterval||1:void 0;g.normalizationType=
d;g.normalizationField="field"===d?f:void 0;return g}function K(a,b){var c=b.classBreaks,d=c[0].minValue,f=c[c.length-1].maxValue,g="standard-deviation"===a.classificationMethod,m=S,c=c.map(function(a){var b=a.label;a={minValue:a.minValue,maxValue:a.maxValue,label:b};if(g&&b){var c=b.match(m).map(function(a){return+a.trim()});2===c.length?(a.minStdDev=c[0],a.maxStdDev=c[1],0>c[0]&&0<c[1]&&(a.hasAvg=!0)):1===c.length&&(-1<b.indexOf("\x3c")?(a.minStdDev=null,a.maxStdDev=c[0]):-1<b.indexOf("\x3e")&&
(a.minStdDev=c[0],a.maxStdDev=null))}return a});return{minValue:d,maxValue:f,classBreakInfos:c,normalizationTotal:b.normalizationTotal}}function D(a,b,c){b=(b-a)/c;for(var d=[],f,g=1;g<=c;g++)f=a+b,f=Number(f.toFixed(16)),d.push([a,f]),a=f;return d}function L(a){var b=a.field,c=a.normalizationType,d=a.normalizationField,f=a.normalizationTotal;a=w.isIntegerField(a.layer,b);var g=b;"percent-of-total"===c?g="(("+(a?w.castIntegerFieldToFloat(b):b)+" / "+f+") * 100)":"log"===c?g="(log("+b+") * "+T+")":
"field"===c&&(g="("+(a?w.castIntegerFieldToFloat(b):b)+" / "+d+")");return g}function U(a,b){for(var c=-1,d=a.length-1;0<=d;d--)if(b>=a[d][0]){c=d;break}return c}function M(a,b){var c;b=b.toLowerCase();if(a)for(var d in a)if(d.toLowerCase()!==b){c=a[d];break}return c}function E(a,b){var c;b=b.toLowerCase();if(a)for(var d in a)if(d.toLowerCase()===b){c=a[d];break}return c}function F(a,b){if(b)for(var c in a)a[c].label=b[c];return{count:a}}function N(a,b,c){var d=a.count;a=[];c&&b&&"coded-value"===
b.type&&b.codedValues.forEach(function(a){a=a.code;d.hasOwnProperty(a)||(d[a]={data:a,count:0})});for(var f in d)b=d[f],a.push({value:b.data,count:b.count,label:b.label});return{uniqueValueInfos:a}}function p(a){return"number"===typeof a&&!isNaN(a)&&Infinity!==a&&-Infinity!==a}Object.defineProperty(e,"__esModule",{value:!0});var V=/_value$/i,S=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,T=Math.LOG10E;e.statisticTypes="min max avg stddev count sum variance".split(" ");var q=null;e.getSummaryStatisticsFromFeatureSet=
function(a,b){a=(a=a&&a.features)&&a[0]&&a[0].attributes;var c={},d;for(d in a)c[d.replace(V,"").toLowerCase()]=a[d];c.min===c.max&&null!=c.min&&null==c.stddev&&(c.stddev=c.variance=0);b&&("min max avg stddev sum variance".split(" ").forEach(function(a){null!=c[a]&&(c[a]=Math.ceil(c[a]))}),c.min===c.max&&null!=c.min&&(c.avg=c.min,c.stddev=c.variance=0));return c};e.calculateStatsFromMemory=function(a,b,c){return v(this,void 0,void 0,function(){var d,f;return u(this,function(g){switch(g.label){case 0:return[4,
t(a,b)];case 1:return d=g.sent(),d=I(d,a.minValue,a.maxValue),f=R(d,!a.normalizationType),c&&["avg","stddev","variance"].forEach(function(a){null!=f[a]&&(f[a]=Math.ceil(f[a]))}),[2,f]}})})};e.getDataValues=t;e.processSummaryStatisticsResult=function(a){for(var b in a)-1<e.statisticTypes.indexOf(b)&&(p(a[b])||(a[b]=null));return a};e.createCBDefn=J;e.calculateHeatmapStats=function(a,b,c,d,f,g){void 0===b&&(b=10);var m=new Float64Array(f*g),k=H.createKernel(b);b=Math.round(3*b);var l=Number.POSITIVE_INFINITY,
h=Number.NEGATIVE_INFINITY,e=0,y=0,r=0,n=0;c=H.createValueFunction(d,c);for(d=0;d<a.length;d++)for(var A=a[d],x=A.geometry,p=x.x-b,q=x.y-b,u=Math.max(0,p),e=Math.max(0,q),v=Math.min(g,x.y+b),x=Math.min(f,x.x+b),A=+c(A.attributes),t=e;t<v;t++)for(var w=k[t-q],B=u;B<x;B++){var e=t*f+B,z=m[e],e=m[e]+=w*k[B-p]*A,z=e-z,y=y+z,r=r+z*z;e<l&&(l=e);e>h&&(h=e);n++}return n?{mean:y/n,stdDev:Math.sqrt((r-y*y/n)/n),min:l,max:h,mid:(h-l)/2,count:n}:{mean:0,stddev:0,min:0,max:0,mid:0,count:0}};e.calculateClassBreaksFromMemory=
function(a,b){return v(this,void 0,void 0,function(){var c,d,f,g;return u(this,function(e){switch(e.label){case 0:return c=a.normalizationTotal,d=J({field:a.field,normalizationType:a.normalizationType,normalizationField:a.normalizationField,classificationMethod:a.classificationMethod,standardDeviationInterval:a.standardDeviationInterval,breakCount:a.numClasses||5}),[4,t(a,b)];case 1:return f=e.sent(),f=I(f,a.minValue,a.maxValue),g=Q.createGenerateRendererClassBreaks({definition:d,values:f,normalizationTotal:c}),
[2,K(a,g)]}})})};e.resolveCBResult=K;e.getEqualIntervalBins=D;e.generateBinParams=function(a){var b=[],c=a.classBreaks,d=c[0].minValue,f=c[c.length-1].maxValue;c.forEach(function(a){b.push([a.minValue,a.maxValue])});return{min:d,max:f,intervals:b,sqlExpr:L({field:a.field,normalizationType:a.normalizationType,normalizationField:a.normalizationField,normalizationTotal:a.normalizationTotal,layer:a.layer}),excludeZerosExpr:a.where,normTotal:a.normalizationTotal}};e.getFieldExpr=L;e.calculateHistogramFromMemory=
function(a,b,c){return v(this,void 0,void 0,function(){var d,f,g,e,k,l,h,p,q,r,n;return u(this,function(m){switch(m.label){case 0:return d=b.min,f=b.max,g=b.normTotal,e=a.numBins||10,k=b.intervals||D(d,f,e),l=k.map(function(a,c){return{minValue:k[c][0],maxValue:k[c][1],count:0}}),[4,t(a,c)];case 1:h=m.sent();p=0;for(q=h;p<q.length;p++)r=q[p],null!=r&&r>=d&&r<=f&&(n=U(k,r),-1<n&&l[n].count++);return[2,{bins:l,minValue:d,maxValue:f,normalizationTotal:g}]}})})};e.getHistogramFromFeatureSet=function(a,
b,c,d,f){var g={};a&&a.features&&a.features.forEach(function(a){var c=a.attributes;a=M(c,"countOFExpr");c=E(c,"countOFExpr");0!==a&&(g[a]=c)});var e=[];D(b,c,d).forEach(function(a,c){c=(c+1).toString();e.push({minValue:a[0],maxValue:a[1],count:g.hasOwnProperty(c)?g[c]:0})});return{bins:e,minValue:b,maxValue:c,normalizationTotal:f}};e.getUniqueValuesFromFeatureSet=function(a,b,c,d,f){var g="countOF"+(c||"Expr"),e={},k=!1;(a&&a.features).forEach(function(a){var b=a.attributes;a=E(b,g);b=c?E(b,c):M(b,
g);null===b&&0===a&&(k=!0);if(null==b||"string"===typeof b&&""===b.trim())b=null;null==e[b]?e[b]={count:a,data:b}:e[b].count+=a});return c&&k?b.queryFeatureCount(c+" is NULL",f).then(function(a){e["null"].count+=a||0;return F(e,d)}).catch(function(){G.throwIfAborted(f);return F(e,d)}):G.resolve(F(e,d))};e.createUVResult=N;e.calculateUniqueValuesFromMemory=function(a,b,c){return v(this,void 0,void 0,function(){var d,e,g,m,k;return u(this,function(f){switch(f.label){case 0:return[4,t(a,b)];case 1:d=
f.sent();e={};g=0;for(m=d;g<m.length;g++){k=m[g];if(null==k||"string"===typeof k&&""===k.trim())k=null;null==e[k]?e[k]={count:1,data:k}:e[k].count++}return[2,N({count:e},c,a.returnAllCodedValues)]}})})};e.msSinceUnixEpochSQL=function(a,b){return w.getDateDiffSQL(a,new Date(0),b,"milliseconds").sqlExpression};e.isValidNumber=p});