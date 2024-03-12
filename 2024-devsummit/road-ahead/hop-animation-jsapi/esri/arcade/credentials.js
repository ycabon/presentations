// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(function(){class c{constructor(){this._password=this._username="";this._token=null}static fromUserName(a,b){const d=new c;d._username=a;d._password=b;d._token=null;return d}static fromArcadeDictionary(a){const b=new c;a.hasField("username")&&(b._username=a.field("username"));a.hasField("password")&&(b._password=a.field("password"));a.hasField("token")&&(b._token=a.field("token"));return b}static fromToken(a){const b=new c;b._token=a;return b}get username(){return this._username}get password(){return this._password}async getToken(){return null===
this._token?"No Token Provided":this._token}}return c});