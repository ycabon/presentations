// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./calcite-input-time-picker"],function(a,d){var c={name:"fr",weekdays:"dimanche lundi mardi mercredi jeudi vendredi samedi".split(" "),weekdaysShort:"dim. lun. mar. mer. jeu. ven. sam.".split(" "),weekdaysMin:"di lu ma me je ve sa".split(" "),months:"janvier f\u00e9vrier mars avril mai juin juillet ao\u00fbt septembre octobre novembre d\u00e9cembre".split(" "),monthsShort:"janv. f\u00e9vr. mars avr. mai juin juil. ao\u00fbt sept. oct. nov. d\u00e9c.".split(" "),weekStart:1,yearStart:4,
formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinal:function(b){return""+b+(1===b?"er":"")}};d.d.locale(c,null,!0);a.default=c;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});