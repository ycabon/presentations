// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/i18n!./nls/Daylight","../../intl/locale","../../views/3d/lib/SunCalc"],function(n,d,a,k,m){function l(a,b){b=new Date(b);b.setUTCFullYear(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate());return b}function f(a,b){a=new Date(a.getTime());a.setUTCHours(a.getUTCHours()+b);return a}Object.defineProperty(d,"__esModule",{value:!0});d.makeTime=l;d.dateAddHours=f;d.sliderPosToDateTime=function(a,b){return l(a,6E4*b)};d.localDateToDateTime=function(a,b){a=new Date(a.getTime());
a.setUTCFullYear(b.getFullYear(),b.getMonth(),b.getDate());return a};d.dateTimeToSliderPos=function(a){var b=a.getUTCHours(),c=a.getUTCMinutes(),e=a.getUTCSeconds();a=a.getUTCMilliseconds();return 60*b+c+e/60+a/6E4};d.dateTimeToLocalDate=function(a){var b=new Date(0);b.setHours(0);b.setMinutes(0);b.setSeconds(0);b.setMilliseconds(0);b.setFullYear(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate());return b};d.getGMTOffsets=function(){var e=[{name:"UTC-12",abbr:-12,label:["UTC-12",a.timezoneDateline]},
{name:"UTC-11",abbr:-11,label:["UTC-11",a.timezoneSamoa]},{name:a.timezoneHAST,abbr:-10,label:["UTC-10 ("+a.timezoneHAST+")",a.timezoneHawaii]},{name:a.timezoneAKST,abbr:-9,label:["UTC-9 ("+a.timezoneAKST+")",a.timezoneAlaska]},{name:a.timezonePST,abbr:-8,label:["UTC-8 ("+a.timezonePST+")",a.timezoneBaja]},{name:a.timezoneMST,abbr:-7,label:["UTC-7 ("+a.timezoneMST+")",a.timezoneMountain]},{name:a.timezoneMST,abbr:-7,label:["UTC-7 ("+a.timezoneMST+")",a.timezoneLaPaz]},{name:a.timezoneMST,abbr:-7,
label:["UTC-7 ("+a.timezoneMST+")",a.timezoneArizona]},{name:a.timezoneCST,abbr:-6,label:["UTC-6 ("+a.timezoneCST+")",a.timezoneSaskatchewan]},{name:a.timezoneCST,abbr:-6,label:["UTC-6 ("+a.timezoneCST+")",a.timezoneCentralAmerica]},{name:a.timezoneCST,abbr:-6,label:["UTC-6 ("+a.timezoneCST+")",a.timezoneCentralTime]},{name:a.timezoneCST,abbr:-6,label:["UTC-6 ("+a.timezoneCST+")",a.timezoneMexico]},{name:a.timezoneEST,abbr:-5,label:["UTC-5 ("+a.timezoneEST+")",a.timezoneEasternUS]},{name:a.timezoneEST,
abbr:-5,label:["UTC-5 ("+a.timezoneEST+")",a.timezoneLima]},{name:a.timezoneEST,abbr:-5,label:["UTC-5 ("+a.timezoneEST+")",a.timezoneIndiana]},{name:"UTC-4",abbr:-4,label:["UTC-4",a.timezoneAtlantic]},{name:"UTC-4",abbr:-4,label:["UTC-4",a.timezoneCuiaba]},{name:"UTC-4",abbr:-4,label:["UTC-4",a.timezoneSantiago]},{name:"UTC-4",abbr:-4,label:["UTC-4",a.timezoneManaus]},{name:"UTC-4",abbr:-4,label:["UTC-4",a.timezoneAsuncion]},{name:"UTC-3",abbr:-3,label:["UTC-3",a.timezoneBrasilia]},{name:"UTC-3",
abbr:-3,label:["UTC-3",a.timezoneGreenland]},{name:"UTC-3",abbr:-3,label:["UTC-3",a.timezoneMontevideo]},{name:"UTC-3",abbr:-3,label:["UTC-3",a.timezoneCayenne]},{name:"UTC-3",abbr:-3,label:["UTC-3",a.timezoneBuenosAires]},{name:"UTC-2",abbr:-2,label:["UTC-2",a.timezoneMidAtlantic]},{name:"UTC-1",abbr:-1,label:["UTC-1",a.timezoneAzores]},{name:"UTC-1",abbr:-1,label:["UTC-1",a.timezoneCaboVerde]},{name:"GMT",abbr:0,label:["UTC (GMT)",a.timezoneDublin]},{name:"GMT",abbr:0,label:["UTC (GMT)",a.timezoneReykjavik]},
{name:"GMT",abbr:0,label:["UTC (GMT)",a.timezoneCasablanca]},{name:a.timezoneCET,abbr:1,label:["UTC+1 ("+a.timezoneCET+")",a.timezoneBelgrade]},{name:a.timezoneCET,abbr:1,label:["UTC+1 ("+a.timezoneCET+")",a.timezoneSarajevo]},{name:a.timezoneCET,abbr:1,label:["UTC+1 ("+a.timezoneCET+")",a.timezoneBrussels]},{name:a.timezoneCET,abbr:1,label:["UTC+1 ("+a.timezoneCET+")",a.timezoneWCAfrica]},{name:a.timezoneCET,abbr:1,label:["UTC+1 ("+a.timezoneCET+")",a.timezoneAmsterdam]},{name:a.timezoneCET,abbr:1,
label:["UTC+1 ("+a.timezoneCET+")",a.timezoneWindhoek]},{name:a.timezoneEET,abbr:2,label:["UTC+2 ("+a.timezoneEET+")",a.timezoneMinsk]},{name:a.timezoneEET,abbr:2,label:["UTC+2 ("+a.timezoneEET+")",a.timezoneCairo]},{name:a.timezoneEET,abbr:2,label:["UTC+2 ("+a.timezoneEET+")",a.timezoneHelsinki]},{name:a.timezoneEET,abbr:2,label:["UTC+2 ("+a.timezoneEET+")",a.timezoneAthens]},{name:a.timezoneEET,abbr:2,label:["UTC+2 ("+a.timezoneEET+")",a.timezoneJerusalem]},{name:a.timezoneEET,abbr:2,label:["UTC+2 ("+
a.timezoneEET+")",a.timezoneAmman]},{name:a.timezoneEET,abbr:2,label:["UTC+2 ("+a.timezoneEET+")",a.timezoneBeirut]},{name:a.timezoneEET,abbr:2,label:["UTC+2 ("+a.timezoneEET+")",a.timezoneHarare]},{name:a.timezoneEET,abbr:2,label:["UTC+2 ("+a.timezoneEET+")",a.timezoneDamascus]},{name:a.timezoneEET,abbr:2,label:["UTC+2 ("+a.timezoneEET+")",a.timezoneIstanbul]},{name:a.timezoneMSK,abbr:3,label:["UTC+3 ("+a.timezoneMSK+")",a.timezoneKuwait]},{name:a.timezoneMSK,abbr:3,label:["UTC+3 ("+a.timezoneMSK+
")",a.timezoneBaghdad]},{name:a.timezoneMSK,abbr:3,label:["UTC+3 ("+a.timezoneMSK+")",a.timezoneNairobi]},{name:a.timezoneMSK,abbr:3,label:["UTC+3 ("+a.timezoneMSK+")",a.timezoneKaliningrad]},{name:a.timezoneGST,abbr:4,label:["UTC+4 ("+a.timezoneGST+")",a.timezoneMoscow]},{name:a.timezoneGST,abbr:4,label:["UTC+4 ("+a.timezoneGST+")",a.timezoneMuscat]},{name:a.timezoneGST,abbr:4,label:["UTC+4 ("+a.timezoneGST+")",a.timezoneBaku]},{name:a.timezoneGST,abbr:4,label:["UTC+4 ("+a.timezoneGST+")",a.timezoneYerevan]},
{name:a.timezoneGST,abbr:4,label:["UTC+4 ("+a.timezoneGST+")",a.timezoneTbilisi]},{name:a.timezoneGST,abbr:4,label:["UTC+4 ("+a.timezoneGST+")",a.timezonePortLouis]},{name:"UTC+5",abbr:5,label:["UTC+5",a.timezoneTashkent]},{name:"UTC+5",abbr:5,label:["UTC+5",a.timezoneIslamabad]},{name:"UTC+6",abbr:6,label:["UTC+6",a.timezoneEkaterinburg]},{name:"UTC+6",abbr:6,label:["UTC+6",a.timezoneAstana]},{name:"UTC+6",abbr:6,label:["UTC+6",a.timezoneDhaka]},{name:a.timezoneICT,abbr:7,label:["UTC+7 ("+a.timezoneICT+
")",a.timezoneNovosibirsk]},{name:a.timezoneICT,abbr:7,label:["UTC+7 ("+a.timezoneICT+")",a.timezoneBangkok]},{name:a.timezoneCCT,abbr:8,label:["UTC+8 ("+a.timezoneCCT+")",a.timezoneKrasnoyarsk]},{name:a.timezoneCCT,abbr:8,label:["UTC+8 ("+a.timezoneCCT+")",a.timezoneBeijing]},{name:a.timezoneCCT,abbr:8,label:["UTC+8 ("+a.timezoneCCT+")",a.timezoneSingapore]},{name:a.timezoneCCT,abbr:8,label:["UTC+8 ("+a.timezoneCCT+")",a.timezoneTaipei]},{name:a.timezoneCCT,abbr:8,label:["UTC+8 ("+a.timezoneCCT+
")",a.timezonePerth]},{name:a.timezoneCCT,abbr:8,label:["UTC+8 ("+a.timezoneCCT+")",a.timezoneUlaanbaatar]},{name:a.timezoneJST,abbr:9,label:["UTC+9 ("+a.timezoneJST+")",a.timezoneIrkutsk]},{name:a.timezoneJST,abbr:9,label:["UTC+9 ("+a.timezoneJST+")",a.timezoneSeoul]},{name:a.timezoneJST,abbr:9,label:["UTC+9 ("+a.timezoneJST+")",a.timezoneOsaka]},{name:a.timezoneAEST,abbr:10,label:["UTC+10 ("+a.timezoneAEST+")",a.timezoneYakutsk]},{name:a.timezoneAEST,abbr:10,label:["UTC+10 ("+a.timezoneAEST+")",
a.timezoneCanberra]},{name:a.timezoneAEST,abbr:10,label:["UTC+10 ("+a.timezoneAEST+")",a.timezoneBrisbane]},{name:a.timezoneAEST,abbr:10,label:["UTC+10 ("+a.timezoneAEST+")",a.timezoneHobart]},{name:a.timezoneAEST,abbr:10,label:["UTC+10 ("+a.timezoneAEST+")",a.timezoneGuam]},{name:"UTC+11",abbr:11,label:["UTC+11",a.timezoneVladivostok]},{name:"UTC+11",abbr:11,label:["UTC+11",a.timezoneSolomon]},{name:a.timezoneNZST,abbr:12,label:["UTC+12 ("+a.timezoneNZST+")",a.timezoneMagadan]},{name:a.timezoneNZST,
abbr:12,label:["UTC+12 ("+a.timezoneNZST+")",a.timezoneFiji]},{name:a.timezoneNZST,abbr:12,label:["UTC+12 ("+a.timezoneNZST+")",a.timezoneAuckland]},{name:a.timezoneNZST,abbr:12,label:["UTC+12 ("+a.timezoneNZST+")",a.timezoneNukualofa]}];e.sort(function(a,c){return a.abbr<c.abbr?-1:a.abbr>c.abbr?1:0});return e};d.calculatePlaySpeed=function(a,b,c){if(isNaN(a.getTime())&&isNaN(b.getTime()))return 3E5;c=c.getTime();a=a.getTime();b=b.getTime();var e=a-36E5,d=a+36E5,f=b-48E5,h=b+24E5,g=3E5;if(c>=e&&c<=
d)g=12E5>=c-e?18E5-(c-e)/12E5*16E5:6E5>=d-c?3E5-(d-c)/12E5*2E5:2E5;else if(c>=f&&c<=h)g=6E5>=c-f?3E5-(c-f)/12E5*2E5:12E5>=h-c?18E5-(h-c)/12E5*16E5:2E5;else if(c<a||c>b)g=18E5;return g};d.getSunriseAndSunsetTimes=function(a,b,c,d){c=m.getTimes(a,b,c);b=c.sunrise;c=c.sunset;a=f(a,d);var e=f(b,d);d=f(c,d);if(a.getUTCDate()!==e.getUTCDate()||a.getUTCDate()!==d.getUTCDate())d=0<a.getTime()-e.getTime()?1:-1,b.setUTCDate(b.getUTCDate()+d),c.setUTCDate(c.getUTCDate()+d);return{sunrise:b,sunset:c}};d.formatSliderLabel=
function(a,b){var c=new Date(36E5*Math.round(a/60));"tick"!==b&&(c=new Date(6E4*a));a=Intl.DateTimeFormat(k.getLocale(),{hour:"2-digit",minute:"2-digit",timeZone:"UTC"}).format(c);"tick"===b&&-1!==a.indexOf(" ")&&(a=Intl.DateTimeFormat(k.getLocale(),{hour:"numeric",timeZone:"UTC"}).format(c),a=a.replace(":00",""));return a}});