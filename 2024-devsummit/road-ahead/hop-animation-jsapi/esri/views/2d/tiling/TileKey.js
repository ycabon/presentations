// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["../../../core/ObjectPool"],function(f){class e{static getId(a,b,c,d){return"object"===typeof a?`${a.level}/${a.row}/${a.col}/${a.world}`:`${a}/${b}/${c}/${d}`}constructor(a,b,c,d){this.set(a,b,c,d)}get key(){return this}get id(){return this.toString()}set id(a){this.set(a)}get hash(){return(this.world&3)<<30|(this.col&4095)<<22|(this.row&4095)<<8|this.level&63}acquire(a,b,c,d){this.set(a,b,c,d)}contains(a){const b=a.level-this.level;return 0<=b&&this.row===a.row>>b&&this.col===a.col>>b&&
this.world===a.world}containsChild(a){const b=a.level-this.level;return 0<b&&this.row===a.row>>b&&this.col===a.col>>b&&this.world===a.world}equals(a){return this.level===a.level&&this.row===a.row&&this.col===a.col&&this.world===a.world}clone(){return new e(this)}release(){this.world=this.col=this.row=this.level=0}set(a,b,c,d){if(null==a)this.world=this.col=this.row=this.level=0;else if("object"===typeof a)this.level=a.level||0,this.row=a.row||0,this.col=a.col||0,this.world=a.world||0;else if("string"===
typeof a){const [g,h,k,l]=a.split("/");this.level=parseFloat(g);this.row=parseFloat(h);this.col=parseFloat(k);this.world=parseFloat(l)}else this.level=+a,this.row=+b,this.col=+c,this.world=+d||0;return this}toString(){return`${this.level}/${this.row}/${this.col}/${this.world}`}getParentKey(){return 0>=this.level?null:new e(this.level-1,this.row>>1,this.col>>1,this.world)}getNeighborId(a,b){return`${this.level}/${this.row+b}/${this.col+a}/${this.world}`}getChildKeys(){const a=this.level+1,b=this.row<<
1,c=this.col<<1,d=this.world;return[new e(a,b,c,d),new e(a,b,c+1,d),new e(a,b+1,c,d),new e(a,b+1,c+1,d)]}compareRowMajor(a){return this.row<a.row?-1:this.row>a.row?1:this.col<a.col?-1:this.col>a.col?1:0}}e.pool=new f(e,null,null,25,50);return e});