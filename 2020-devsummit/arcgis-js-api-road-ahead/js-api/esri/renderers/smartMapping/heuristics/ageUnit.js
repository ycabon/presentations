// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/tsSupport/assignHelper ../../../core/Error ../statistics/summaryStatisticsForAge ../statistics/support/ageUtils ../support/utils".split(" "),function(t,u,l,m,n,h,k,p,q){function r(e){var c=Math.abs(e.avg),a=null;p.supportedAgeUnits.some(function(b){c>2*q.unitValueInDays[b]&&(a=b);return!!a});return a}return function(e){return m(this,void 0,void 0,function(){var c,a,b,d,f;return l(this,
function(g){switch(g.label){case 0:return c="days",a=n({},e,{unit:c}),[4,k(a)];case 1:b=g.sent();if(null==b.avg)throw new h("age-unit:insufficient-info","'avg' statistics is invalid");d=r(b);if(d===c)return[2,{unit:d,statistics:b}];a.unit=d;return[4,k(a)];case 2:f=g.sent();if(null==f.avg)throw new h("age-unit:insufficient-info","'avg' statistics is invalid");return[2,{unit:d,statistics:f}]}})})}});