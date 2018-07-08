// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["dojo/date/locale","../../core/JSONSupport"],function(b,a){return a.createSubclass({declaredClass:"esri.tasks.support.Date",properties:{date:{type:Date,json:{read:function(a,c){return b.parse(a,{selector:"date",datePattern:c.format||this.format})}}},format:"EEE MMM dd HH:mm:ss zzz yyyy"},toJSON:function(){return{date:b.format(this.date,{selector:"date",datePattern:this.format}),format:this.format}}})});