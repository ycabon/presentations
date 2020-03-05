// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define({title:"\u0415\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435",directShadow:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0442\u0435\u043d\u0438",notSupportedInHW:"\u042d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0434\u0430\u043d\u043d\u044b\u043c \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043e\u043c.",
unsupported:"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0414\u043d\u0435\u0432\u043d\u043e\u0433\u043e \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e SceneView.",datePattern:"\u041c\u041c\u041c\u041c \u0434, \u0433\u0433\u0433\u0433",playDay:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0430\u043d\u0438\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441\u043e\u043b\u043d\u0446\u0430 \u0438 \u0442\u0435\u043d\u0435\u0439 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u0434\u043d\u044f",
playYear:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0430\u043d\u0438\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441\u043e\u043b\u043d\u0446\u0430 \u0438 \u0442\u0435\u043d\u0435\u0439 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u0433\u043e\u0434\u0430",pause:"\u041f\u0430\u0443\u0437\u0430",season:"\u0421\u0435\u0437\u043e\u043d",spring:"\u0412\u0435\u0441\u043d\u0430",summer:"\u041b\u0435\u0442\u043e",
winter:"\u0417\u0438\u043c\u0430",fall:"\u041e\u0441\u0435\u043d\u044c",timezoneHAST:"HAST",timezoneAKST:"AKST",timezonePST:"PST",timezoneMST:"MST",timezoneCST:"CST",timezoneEST:"EST",timezoneCET:"CET",timezoneEET:"EET",timezoneMSK:"MSK",timezoneGST:"GST",timezoneICT:"ICT",timezoneCCT:"CCT",timezoneJST:"JST",timezoneAEST:"AEST",timezoneNZST:"NZST",timezoneDateline:"\u041c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u0430\u044f \u043b\u0438\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u044b \u0434\u0430\u0442, \u0417\u0430\u043f\u0430\u0434",
timezoneHawaii:"\u0413\u0430\u0432\u0430\u0439\u0438",timezoneAlaska:"\u0410\u043b\u044f\u0441\u043a\u0430",timezoneBaja:"\u041d\u0438\u0436\u043d\u044f\u044f \u041a\u0430\u043b\u0438\u0444\u043e\u0440\u043d\u0438\u044f",timezoneMountain:"\u0413\u043e\u0440\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f (\u0421\u0428\u0410 \u0438 \u041a\u0430\u043d\u0430\u0434\u0430)",timezoneLaPaz:"\u0427\u0438\u0445\u0443\u0430\u0445\u0443\u0430, \u041b\u0430-\u041f\u0430\u0441, \u041c\u0430\u0437\u0430\u0442\u043b\u0430\u043d",
timezoneArizona:"\u0410\u0440\u0438\u0437\u043e\u043d\u0430",timezoneSaskatchewan:"\u0421\u0430\u0441\u043a\u0430\u0447\u0435\u0432\u0430\u043d",timezoneCentralAmerica:"\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0410\u043c\u0435\u0440\u0438\u043a\u0430",timezoneCentralTime:"\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f (\u0421\u0428\u0410 \u0438 \u041a\u0430\u043d\u0430\u0434\u0430)",timezoneMexico:"\u0413\u0432\u0430\u0434\u0430\u043b\u0430\u0445\u0430\u0440\u0430, \u041c\u0435\u0445\u0438\u043a\u043e, \u041c\u043e\u043d\u0442\u0435\u0440\u0440\u0435\u0439",
timezoneEasternUS:"\u0412\u043e\u0441\u0442\u043e\u0447\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f (\u0421\u0428\u0410 \u0438 \u041a\u0430\u043d\u0430\u0434\u0430)",timezoneLima:"\u0411\u043e\u0433\u043e\u0442\u0430, \u041b\u0438\u043c\u0430, \u041a\u0438\u0442\u043e",timezoneIndiana:"\u0418\u043d\u0434\u0438\u0430\u043d\u0430 (\u0412\u043e\u0441\u0442\u043e\u043a) ",timezoneAtlantic:"\u0410\u0442\u043b\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0432\u0440\u0435\u043c\u044f (\u041a\u0430\u043d\u0430\u0434\u0430)",
timezoneCuiaba:"\u041a\u0443\u044f\u0431\u0430",timezoneSantiago:"\u0421\u0430\u043d\u0442\u044c\u044f\u0433\u043e",timezoneManaus:"\u0414\u0436\u043e\u0440\u0434\u0436\u0442\u0430\u0443\u043d, \u041b\u0430-\u041f\u0430\u0441, \u041c\u0430\u043d\u0430\u0443\u0441, \u0421\u0430\u043d-\u0425\u0443\u0430\u043d",timezoneAsuncion:"\u0410\u0441\u0443\u043d\u0441\u044c\u043e\u043d",timezoneBrasilia:"\u0411\u0440\u0430\u0437\u0438\u043b\u0438\u044f",timezoneGreenland:"\u0413\u0440\u0435\u043d\u043b\u0430\u043d\u0434\u0438\u044f",
timezoneMontevideo:"\u041c\u043e\u043d\u0442\u0435\u0432\u0438\u0434\u0435\u043e",timezoneCayenne:"\u041a\u0430\u0439\u0435\u043d\u043d\u0430, \u0424\u043e\u0440\u0442\u0430\u043b\u0435\u0437\u0430",timezoneBuenosAires:"\u0411\u0443\u044d\u043d\u043e\u0441-\u0410\u0439\u0440\u0435\u0441",timezoneMidAtlantic:"\u0421\u0440\u0435\u0434\u043d\u0435-\u0410\u0442\u043b\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435",timezoneAzores:"\u0410\u0437\u043e\u0440\u0441\u043a\u0438\u0435 \u043e\u0441\u0442\u0440\u043e\u0432\u0430",
timezoneCaboVerde:"\u043e\u0441\u0442\u0440\u043e\u0432\u0430 \u041a\u0430\u0431\u043e-\u0412\u0435\u0440\u0434\u0435",timezoneDublin:"\u0414\u0443\u0431\u043b\u0438\u043d, \u042d\u0434\u0438\u043d\u0431\u0443\u0440\u0433, \u041b\u0438\u0441\u0441\u0430\u0431\u043e\u043d, \u041b\u043e\u043d\u0434\u043e\u043d",timezoneReykjavik:"\u041c\u043e\u043d\u0440\u043e\u0432\u0438\u044f, \u0420\u0435\u0439\u043a\u044c\u044f\u0432\u0438\u043a",timezoneCasablanca:"\u041a\u0430\u0441\u0430\u0431\u043b\u0430\u043d\u043a\u0430",
timezoneBelgrade:"\u0411\u0435\u043b\u0433\u0440\u0430\u0434, \u0411\u0440\u0430\u0442\u0438\u0441\u043b\u0430\u0432\u0430, \u0411\u0443\u0434\u0430\u043f\u0435\u0448\u0442, \u041b\u044e\u0431\u043b\u044f\u043d\u0430, \u041f\u0440\u0430\u0433\u0430",timezoneSarajevo:"\u0421\u0430\u0440\u0430\u0435\u0432\u043e, \u0421\u043a\u043e\u043f\u044c\u0435, \u0412\u0430\u0440\u0448\u0430\u0432\u0430, \u0417\u0430\u0433\u0440\u0435\u0431",timezoneBrussels:"\u0411\u0440\u044e\u0441\u0441\u0435\u043b\u044c, \u041a\u043e\u043f\u0435\u043d\u0433\u0430\u0433\u0435\u043d, \u041c\u0430\u0434\u0440\u0438\u0434, \u041f\u0430\u0440\u0438\u0436",
timezoneWCAfrica:"\u0417\u0430\u043f\u0430\u0434 \u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u0439 \u0410\u0444\u0440\u0438\u043a\u0438",timezoneAmsterdam:"\u0410\u043c\u0441\u0442\u0435\u0440\u0434\u0430\u043c, \u0411\u0435\u0440\u043b\u0438\u043d, \u0411\u0435\u0440\u043d, \u0420\u0438\u043c, \u0421\u0442\u043e\u043a\u0433\u043e\u043b\u044c\u043c, \u0412\u0435\u043d\u0430",timezoneWindhoek:"\u0412\u0438\u043d\u0434\u0445\u0443\u043a",timezoneMinsk:"\u041c\u0438\u043d\u0441\u043a",
timezoneCairo:"\u041a\u0430\u0438\u0440",timezoneHelsinki:"\u0425\u0435\u043b\u044c\u0441\u0438\u043d\u043a\u0438, \u041a\u0438\u0435\u0432, \u0420\u0438\u0433\u0430, \u0421\u043e\u0444\u0438\u044f, \u0422\u0430\u043b\u043b\u0438\u043d, \u0412\u0438\u043b\u044c\u043d\u044e\u0441",timezoneAthens:"\u0410\u0444\u0438\u043d\u044b, \u0411\u0443\u0445\u0430\u0440\u0435\u0441\u0442",timezoneJerusalem:"\u0418\u0435\u0440\u0443\u0441\u0430\u043b\u0438\u043c",timezoneAmman:"\u0410\u043c\u043c\u0430\u043d",
timezoneBeirut:"\u0411\u0435\u0439\u0440\u0443\u0442",timezoneHarare:"\u0425\u0430\u0440\u0430\u0440\u0435, \u041f\u0440\u0435\u0442\u043e\u0440\u0438\u044f",timezoneDamascus:"\u0414\u0430\u043c\u0430\u0441\u043a",timezoneIstanbul:"\u0421\u0442\u0430\u043c\u0431\u0443\u043b",timezoneKuwait:"\u041a\u0443\u0432\u0435\u0439\u0442, \u042d\u0440-\u0420\u0438\u044f\u0434",timezoneBaghdad:"\u0411\u0430\u0433\u0434\u0430\u0434",timezoneNairobi:"\u041d\u0430\u0439\u0440\u043e\u0431\u0438",timezoneKaliningrad:"\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434",
timezoneMoscow:"\u041c\u043e\u0441\u043a\u0432\u0430, \u0421\u0430\u043d\u043a\u0442- \u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434",timezoneMuscat:"\u0410\u0431\u0443-\u0414\u0430\u0431\u0438, \u041c\u0430\u0441\u043a\u0430\u0442",timezoneBaku:"\u0411\u0430\u043a\u0443",timezoneYerevan:"\u0415\u0440\u0435\u0432\u0430\u043d",timezoneTbilisi:"\u0422\u0431\u0438\u043b\u0438\u0441\u0438",timezonePortLouis:"\u041f\u043e\u0440\u0442-\u041b\u0443\u0438",
timezoneTashkent:"\u0422\u0430\u0448\u043a\u0435\u043d\u0442",timezoneIslamabad:"\u0418\u0441\u043b\u0430\u043c\u0430\u0431\u0430\u0434, \u041a\u0430\u0440\u0430\u0447\u0438",timezoneEkaterinburg:"\u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433",timezoneAstana:"\u041d\u0443\u0440\u0441\u0443\u043b\u0442\u0430\u043d",timezoneDhaka:"\u0414\u0430\u043a\u043a\u0430",timezoneNovosibirsk:"\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a",timezoneBangkok:"\u0411\u0430\u043d\u0433\u043a\u043e\u043a, \u0425\u0430\u043d\u043e\u0439, \u0414\u0436\u0430\u043a\u0430\u0440\u0442\u0430",
timezoneKrasnoyarsk:"\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a",timezoneBeijing:"\u041f\u0435\u043a\u0438\u043d, \u0427\u0443\u043d\u0446\u0438\u043d, \u0413\u043e\u043d\u043a\u043e\u043d\u0433, \u0423\u0440\u0443\u043c\u0447\u0438",timezoneSingapore:"\u041a\u0443\u0430\u043b\u0430-\u041b\u0443\u043c\u043f\u0443\u0440, \u0421\u0438\u043d\u0433\u0430\u043f\u0443\u0440",timezoneTaipei:"\u0422\u0430\u0439\u0431\u044d\u0439",timezonePerth:"\u041f\u0435\u0440\u0442",timezoneUlaanbaatar:"\u0423\u043b\u0430\u043d-\u0411\u0430\u0442\u043e\u0440",
timezoneIrkutsk:"\u0418\u0440\u043a\u0443\u0442\u0441\u043a",timezoneSeoul:"\u0421\u0435\u0443\u043b",timezoneOsaka:"\u041e\u0441\u0430\u043a\u0430, \u0421\u0430\u043f\u043f\u043e\u0440\u043e, \u0422\u043e\u043a\u0438\u043e",timezoneYakutsk:"\u042f\u043a\u0443\u0442\u0441\u043a",timezoneCanberra:"\u041a\u0430\u043d\u0431\u0435\u0440\u0440\u0430, \u041c\u0435\u043b\u044c\u0431\u0443\u0440\u043d, \u0421\u0438\u0434\u043d\u0435\u0439",timezoneBrisbane:"\u0411\u0440\u0438\u0441\u0431\u0435\u043d",timezoneHobart:"\u0425\u043e\u0431\u0430\u0440\u0442",
timezoneGuam:"\u0413\u0443\u0430\u043c, \u041f\u043e\u0440\u0442-\u041c\u043e\u0440\u0441\u0431\u0438",timezoneVladivostok:"\u0412\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a",timezoneSolomon:"\u0421\u043e\u043b\u043e\u043c\u043e\u043d\u043e\u0432\u044b \u043e\u0441\u0442\u0440\u043e\u0432\u0430, \u041d\u043e\u0432\u0430\u044f \u041a\u0430\u043b\u0435\u0434\u043e\u043d\u0438\u044f",timezoneMagadan:"\u041c\u0430\u0433\u0430\u0434\u0430\u043d",timezoneFiji:"\u0424\u0438\u0434\u0436\u0438",
timezoneAuckland:"\u041e\u043a\u043b\u0435\u043d\u0434, \u0412\u0435\u043b\u043b\u0438\u043d\u0433\u0442\u043e\u043d",timezoneNukualofa:"\u041d\u0443\u043a\u0443\u0430\u043b\u043e\u0444\u0430",timezoneSamoa:"\u0421\u0430\u043c\u043e\u0430",chooseTimezone:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0447\u0430\u0441\u043e\u0432\u043e\u0439 \u043f\u043e\u044f\u0441"});