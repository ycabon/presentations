// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper dojo/_base/kernel @dojo/framework/shim/Promise".split(" "),function(g,b,k,l,p){function e(){var c=p.locale;if(!c)return"en_US";var d;if(!(d=b.locales[c])){c=c.split("-")[0].toLowerCase();d=null;for(var a=0,m=Object.keys(b.locales);a<m.length;a++){var n=m[a];if(-1<n.indexOf(c)){d=b.locales[n];break}}}return d||"en_US"}Object.defineProperty(b,"__esModule",{value:!0});b.locales={ar:"ar","bs-ba":"bs_BA","ca-es":"ca_ES",
"cs-cz":"cs_CZ","da-dk":"da_DK","de-ch":"de_CH","de-de":"de_DE","el-gr":"el_GR","en-ca":"en_CA","en-us":"en_US","es-es":"es_ES","et-ee":"et_EE","fi-fi":"fi_FI","fr-fr":"fr_FR","he-il":"he_IL","hr-hr":"hr_HR","hu-hu":"hu_HU","id-id":"id_ID","it-it":"it_IT","ja-jp":"ja_JP","ko-kr":"ko_KR","lt-lt":"lt_LT","lv-lv":"lv_LV","nb-no":"nb_NO","nl-nl":"nl_NL","pl-pl":"pl_PL","pt-br":"pt_BR","pt-pt":"pt_PT","ro-ro":"ro_RO","ru-ru":"ru_RU","sl-sl":"sl_SL","sr-rs":"sr_RS","sv-se":"sv_SE","th-th":"th_TH","tr-tr":"tr_TR",
"uk-ua":"uk_UA","vi-vn":"vi_VN","zh-cn":"zh_Hans","zh-hk":"zh_Hant","zh-tw":"zh_Hant"};b.getChartLocale=e;var a,f;b.loadChartsModule=function(c){void 0===c&&(c=e());return l(this,void 0,void 0,function(){var b=this;return k(this,function(d){if(a&&c===f)return[2,a];f=c;a=Promise.all([new Promise(function(c,b){g(["../../libs/amcharts4/index"],c,b)}),new Promise(function(b,a){g(["../../libs/amcharts4/lang/"+c],b,a)})]).then(function(a){var d=a[0],e=a[1];return l(b,void 0,void 0,function(){var a,b;return k(this,
function(h){switch(h.label){case 0:return a=d.am4core,f===c&&(a.options.defaultLocale=e.default),"function"===typeof Object.assign?[3,2]:[4,new Promise(function(a,b){g(["@dojo/framework/shim/object"],a,b)})];case 1:b=h.sent(),Object.defineProperty(Object,"assign",{value:b.assign,writable:!0,configurable:!0}),h.label=2;case 2:return[2,d]}})})},function(){return f=a=null});return[2,a]})})}});