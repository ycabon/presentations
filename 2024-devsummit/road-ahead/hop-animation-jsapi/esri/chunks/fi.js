// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./calcite-input-time-picker"],function(e,g){function a(b,c,d,h){var k={s:"muutama sekunti",m:"minuutti",mm:"%d minuuttia",h:"tunti",hh:"%d tuntia",d:"p\u00e4iv\u00e4",dd:"%d p\u00e4iv\u00e4\u00e4",M:"kuukausi",MM:"%d kuukautta",y:"vuosi",yy:"%d vuotta",numbers:"nolla yksi kaksi kolme nelj\u00e4 viisi kuusi seitsem\u00e4n kahdeksan yhdeks\u00e4n".split(" ")},l={s:"muutaman sekunnin",m:"minuutin",mm:"%d minuutin",h:"tunnin",hh:"%d tunnin",d:"p\u00e4iv\u00e4n",dd:"%d p\u00e4iv\u00e4n",
M:"kuukauden",MM:"%d kuukauden",y:"vuoden",yy:"%d vuoden",numbers:"nollan yhden kahden kolmen nelj\u00e4n viiden kuuden seitsem\u00e4n kahdeksan yhdeks\u00e4n".split(" ")};c=h&&!c?l:k;d=c[d];return 10>b?d.replace("%d",c.numbers[b]):d.replace("%d",b)}var f={name:"fi",weekdays:"sunnuntai maanantai tiistai keskiviikko torstai perjantai lauantai".split(" "),weekdaysShort:"su ma ti ke to pe la".split(" "),weekdaysMin:"su ma ti ke to pe la".split(" "),months:"tammikuu helmikuu maaliskuu huhtikuu toukokuu kes\u00e4kuu hein\u00e4kuu elokuu syyskuu lokakuu marraskuu joulukuu".split(" "),
monthsShort:"tammi helmi maalis huhti touko kes\u00e4 hein\u00e4 elo syys loka marras joulu".split(" "),ordinal:function(b){return b+"."},weekStart:1,yearStart:4,relativeTime:{future:"%s p\u00e4\u00e4st\u00e4",past:"%s sitten",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a},formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM[ta] YYYY",LLL:"D. MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, D. MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"D. MMM YYYY",lll:"D. MMM YYYY, [klo] HH.mm",llll:"ddd, D. MMM YYYY, [klo] HH.mm"}};
g.d.locale(f,null,!0);e.default=f;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});