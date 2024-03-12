/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{d as t}from"./calcite-input-time-picker.js";import"../widgets/Widget.js";import"./tslib.es6.js";import"../intl.js";import"./date.js";import"./jsonMap.js";import"../config.js";import"../core/lang.js";import"./locale.js";import"./handleUtils.js";import"./timeZoneUtils.js";import"./datetime.js";import"./Logger.js";import"./messages.js";import"../core/Error.js";import"../core/promiseUtils.js";import"./maybe.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"./assets.js";import"./domUtils.js";import"../core/Evented.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"./asyncUtils.js";import"../core/Collection.js";import"./shared.js";import"./SimpleObservable.js";import"./uuid.js";import"../core/accessorSupport/decorators/cast.js";import"./projector.js";import"./widgetUtils.js";import"./jsxWidgetSupport.js";import"./legacyIcon.js";import"./form.js";import"./dom.js";import"./guid.js";import"./interactive.js";import"./key.js";import"./label2.js";import"./component.js";import"./loadable.js";import"./locale2.js";import"./observers.js";import"./focusTrapComponent.js";import"./t9n.js";import"./math.js";import"./icon.js";import"./openCloseComponent.js";import"./Validation.js";import"./action.js";import"./loader.js";import"./input-message.js";import"./input-text.js";import"./progress.js";import"./popover2.js";import"./floating-ui.js";import"./debounce.js";import"./Heading2.js";import"./FloatingArrow.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.3.0
 */
function r(t){return t%10<5&&t%10>1&&~~(t/10)%10!=1}function i(t,i,o){var s=t+" ";switch(o){case"m":return i?"minuta":"minutę";case"mm":return s+(r(t)?"minuty":"minut");case"h":return i?"godzina":"godzinę";case"hh":return s+(r(t)?"godziny":"godzin");case"MM":return s+(r(t)?"miesiące":"miesięcy");case"yy":return s+(r(t)?"lata":"lat")}}var o="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),s="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),e=/D MMMM/,m=function(t,r){return e.test(r)?o[t.month()]:s[t.month()]};m.s=s,m.f=o;var p={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:m,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(t){return t+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:i,mm:i,h:i,hh:i,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:i,y:"rok",yy:i},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};t.locale(p,null,!0);export{p as default};
