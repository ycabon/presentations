//>>built
define(["dojo/_base/declare","./common"],function(b,c){return b(null,{_setTextDirAttr:function(a){this._created&&this.textDir===a||(this._set("textDir",a),c.setTextDirForButtons(this))}})});