/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{i as t,m as s,g as e,n as i,k as a,T as h,d as r}from"./Theme.js";export{D as DarkThemeAm5,R as ResponsiveThemeAm5}from"./ResponsiveTheme.js";import{R as n,B as o}from"./Button2.js";export{T as TooltipAm5}from"./Tooltip2.js";export{C as ColorSetAm5}from"./ColorSet.js";import"./tslib.es6.js";class u extends t{constructor(){super(...arguments),Object.defineProperty(this,"thumb",{enumerable:!0,configurable:!0,writable:!0,value:this._makeThumb()}),Object.defineProperty(this,"startGrip",{enumerable:!0,configurable:!0,writable:!0,value:this._makeButton()}),Object.defineProperty(this,"endGrip",{enumerable:!0,configurable:!0,writable:!0,value:this._makeButton()}),Object.defineProperty(this,"_thumbBusy",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_startDown",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_endDown",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_thumbDown",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_gripDown",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}_addOrientationClass(){this._settings.themeTags=s(this._settings.themeTags,["scrollbar",this._settings.orientation]),this._settings.background||(this._settings.background=n.new(this._root,{themeTags:s(this._settings.themeTags,["main","background"])}))}_makeButton(){return this.children.push(o.new(this._root,{themeTags:["resize","button",this.get("orientation")],icon:e.new(this._root,{themeTags:["icon"]})}))}_makeThumb(){return this.children.push(n.new(this._root,{themeTags:["thumb",this.get("orientation")]}))}_handleAnimation(t){t&&this._disposers.push(t.events.on("stopped",(()=>{this.setPrivateRaw("isBusy",!1),this._thumbBusy=!1})))}_afterNew(){this._addOrientationClass(),super._afterNew();const t=this.startGrip,s=this.endGrip,e=this.thumb,a=this.get("background");a&&this._disposers.push(a.events.on("click",(t=>{this.setPrivateRaw("isBusy",!0);const s=this._display.toLocal(t.point),i=this.width(),a=this.height(),h=this.get("orientation");let r,n,o;r="vertical"==h?(s.y-e.height()/2)/a:(s.x-e.width()/2)/i,"vertical"==h?(n=r*a,o="y"):(n=r*i,o="x");const u=this.get("animationDuration",0);u>0?(this._thumbBusy=!0,this._handleAnimation(this.thumb.animate({key:o,to:n,duration:u,easing:this.get("animationEasing")}))):(this.thumb.set(o,n),this._root.events.once("frameended",(()=>{this.setPrivateRaw("isBusy",!1)})))}))),this._disposers.push(e.events.on("dblclick",(t=>{if(!i(t.originalEvent,this))return;const s=this.get("animationDuration",0),e=this.get("animationEasing");this.animate({key:"start",to:0,duration:s,easing:e}),this.animate({key:"end",to:1,duration:s,easing:e})}))),this._disposers.push(t.events.on("pointerdown",(()=>{this.setPrivateRaw("isBusy",!0),this._startDown=!0,this._gripDown="start"}))),this._disposers.push(s.events.on("pointerdown",(()=>{this.setPrivateRaw("isBusy",!0),this._endDown=!0,this._gripDown="end"}))),this._disposers.push(e.events.on("pointerdown",(()=>{this.setPrivateRaw("isBusy",!0),this._thumbDown=!0,this._gripDown=void 0}))),this._disposers.push(t.events.on("globalpointerup",(()=>{this._startDown&&this.setPrivateRaw("isBusy",!1),this._startDown=!1}))),this._disposers.push(s.events.on("globalpointerup",(()=>{this._endDown&&this.setPrivateRaw("isBusy",!1),this._endDown=!1}))),this._disposers.push(e.events.on("globalpointerup",(()=>{this._thumbDown&&this.setPrivateRaw("isBusy",!1),this._thumbDown=!1}))),this._disposers.push(t.on("x",(()=>{this._updateThumb()}))),this._disposers.push(s.on("x",(()=>{this._updateThumb()}))),this._disposers.push(t.on("y",(()=>{this._updateThumb()}))),this._disposers.push(s.on("y",(()=>{this._updateThumb()}))),this._disposers.push(e.events.on("positionchanged",(()=>{this._updateGripsByThumb()}))),"vertical"==this.get("orientation")?(t.set("x",0),s.set("x",0),this._disposers.push(e.adapters.add("y",(t=>Math.max(Math.min(Number(t),this.height()-e.height()),0)))),this._disposers.push(e.adapters.add("x",(t=>this.width()/2))),this._disposers.push(t.adapters.add("x",(t=>this.width()/2))),this._disposers.push(s.adapters.add("x",(t=>this.width()/2))),this._disposers.push(t.adapters.add("y",(t=>Math.max(Math.min(Number(t),this.height()),0)))),this._disposers.push(s.adapters.add("y",(t=>Math.max(Math.min(Number(t),this.height()),0))))):(t.set("y",0),s.set("y",0),this._disposers.push(e.adapters.add("x",(t=>Math.max(Math.min(Number(t),this.width()-e.width()),0)))),this._disposers.push(e.adapters.add("y",(t=>this.height()/2))),this._disposers.push(t.adapters.add("y",(t=>this.height()/2))),this._disposers.push(s.adapters.add("y",(t=>this.height()/2))),this._disposers.push(t.adapters.add("x",(t=>Math.max(Math.min(Number(t),this.width()),0)))),this._disposers.push(s.adapters.add("x",(t=>Math.max(Math.min(Number(t),this.width()),0)))))}_updateChildren(){super._updateChildren(),(this.isDirty("end")||this.isDirty("start")||this._sizeDirty)&&this.updateGrips()}_changed(){if(super._changed(),this.isDirty("start")||this.isDirty("end")){const t="rangechanged";this.events.isEnabled(t)&&this.events.dispatch(t,{type:t,target:this,start:this.get("start",0),end:this.get("end",1),grip:this._gripDown})}}updateGrips(){const t=this.startGrip,s=this.endGrip,e=this.get("orientation"),i=this.height(),a=this.width();"vertical"==e?(t.set("y",i*this.get("start",0)),s.set("y",i*this.get("end",1))):(t.set("x",a*this.get("start",0)),s.set("x",a*this.get("end",1)));const h=this.getPrivate("positionTextFunction"),r=Math.round(100*this.get("start",0)),n=Math.round(100*this.get("end",0));let o,u;h?(o=h.call(this,this.get("start",0)),u=h.call(this,this.get("end",0))):(o=r+"%",u=n+"%"),t.set("ariaLabel",this._t("From %1",void 0,o)),t.set("ariaValueNow",""+r),t.set("ariaValueText",r+"%"),t.set("ariaValueMin","0"),t.set("ariaValueMax","100"),s.set("ariaLabel",this._t("To %1",void 0,u)),s.set("ariaValueNow",""+n),s.set("ariaValueText",n+"%"),s.set("ariaValueMin","0"),s.set("ariaValueMax","100")}_updateThumb(){const t=this.thumb,s=this.startGrip,e=this.endGrip,i=this.height(),h=this.width();let r=s.x(),n=e.x(),o=s.y(),u=e.y(),d=0,p=1;"vertical"==this.get("orientation")?a(o)&&a(u)&&(this._thumbBusy||t.isDragging()||(t.set("height",u-o),t.set("y",o)),d=o/i,p=u/i):a(r)&&a(n)&&(this._thumbBusy||t.isDragging()||(t.set("width",n-r),t.set("x",r)),d=r/h,p=n/h),!this.getPrivate("isBusy")||this.get("start")==d&&this.get("end")==p||(this.set("start",d),this.set("end",p));const l=this.getPrivate("positionTextFunction"),m=Math.round(100*this.get("start",0)),g=Math.round(100*this.get("end",0));let b,_;l?(b=l.call(this,this.get("start",0)),_=l.call(this,this.get("end",0))):(b=m+"%",_=g+"%"),t.set("ariaLabel",this._t("From %1 to %2",void 0,b,_)),t.set("ariaValueNow",""+m),t.set("ariaValueText",m+"%")}_updateGripsByThumb(){const t=this.thumb,s=this.startGrip,e=this.endGrip;if("vertical"==this.get("orientation")){const i=t.height();s.set("y",t.y()),e.set("y",t.y()+i)}else{const i=t.width();s.set("x",t.x()),e.set("x",t.x()+i)}}}Object.defineProperty(u,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Scrollbar"}),Object.defineProperty(u,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:t.classNames.concat([u.className])});class d extends h{setupDefaultRules(){super.setupDefaultRules(),this.rule("Component").setAll({interpolationDuration:600}),this.rule("Hierarchy").set("animationDuration",600),this.rule("Scrollbar").set("animationDuration",600),this.rule("Tooltip").set("animationDuration",300),this.rule("MapChart").set("animationDuration",1e3),this.rule("MapChart").set("wheelDuration",300),this.rule("Entity").setAll({stateAnimationDuration:600}),this.rule("Sprite").states.create("default",{stateAnimationDuration:600}),this.rule("Tooltip",["axis"]).setAll({animationDuration:200}),this.rule("WordCloud").set("animationDuration",500),this.rule("Polygon").set("animationDuration",600),this.rule("ArcDiagram").set("animationDuration",600)}}const p=["#2888B8","#EB7028","#48A375","#9370B1","#e55035","#3d9ccc","#DC7B04","#b87bb0","#3fa681","#EE6386"].map((t=>r(t)));export{d as AnimatedThemeAm5,u as ScrollbarAm5,h as ThemeAm5,r as colorAm5,p as esriChartColorSet};
