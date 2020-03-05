// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(f,h){f=function(){function d(b,a){this.userId=this.token=this.ssl=this.expires=this.storage=this.oAuthInfo=null;this.oAuthInfo=b;this.storage=a;this._init()}d.prototype.isValid=function(){var b=!1;if(this.oAuthInfo&&this.token&&this.userId){var a=Date.now();this.expires>a&&(this.expires-a)/1E3>60*this.oAuthInfo.minTimeUntilExpiration&&(b=!0)}return b};d.prototype.save=function(){if(this.storage){var b=this._load(),a=this.oAuthInfo;if(a&&a.authNamespace&&a.portalUrl){var c=
b[a.authNamespace];c||(c=b[a.authNamespace]={});c[a.portalUrl]={expires:this.expires,ssl:this.ssl,token:this.token,userId:this.userId};try{this.storage.setItem("esriJSAPIOAuth",JSON.stringify(b))}catch(e){console.log(e)}}}};d.prototype.destroy=function(){var b=this._load(),a=this.oAuthInfo;if(a&&a.appId&&a.portalUrl&&this.token&&this.expires>Date.now()){var c=a.portalUrl.replace(/^http:/i,"https:")+"/sharing/rest/oauth2/revokeToken",e=new FormData;e.append("f","json");e.append("auth_token",this.token);
e.append("client_id",a.appId);e.append("token_type_hint","access_token");if("function"===typeof navigator.sendBeacon)navigator.sendBeacon(c,e);else{var d=new XMLHttpRequest;d.open("POST",c);d.send(e)}}if(a&&a.authNamespace&&a.portalUrl&&this.storage&&(c=b[a.authNamespace])){delete c[a.portalUrl];try{this.storage.setItem("esriJSAPIOAuth",JSON.stringify(b))}catch(g){console.log(g)}}a&&(this.oAuthInfo=a._oAuthCred=null)};d.prototype._init=function(){var b=this._load(),a=this.oAuthInfo;a&&a.authNamespace&&
a.portalUrl&&(b=b[a.authNamespace])&&(b=b[a.portalUrl])&&(this.expires=b.expires,this.ssl=b.ssl,this.token=b.token,this.userId=b.userId)};d.prototype._load=function(){var b={};if(this.storage){var a=this.storage.getItem("esriJSAPIOAuth");if(a)try{b=JSON.parse(a)}catch(c){console.log(c)}}return b};return d}();f.prototype.declaredClass="esri.identity.OAuthCredential";return f});