//>>built
require({cache:{"url:dojox/calendar/templates/Calendar.html":'\x3cdiv\x3e\n\t\x3cdiv data-dojo-attach-point\x3d"buttonContainer" class\x3d"buttonContainer"\x3e\n\t\t\x3cdiv data-dojo-attach-point\x3d"toolbar" data-dojo-type\x3d"dijit.Toolbar" \x3e\n\t\t\t\x3cbutton data-dojo-attach-point\x3d"previousButton" data-dojo-type\x3d"dijit.form.Button" \x3e\x26#x25C0;\x3c/button\x3e\n\t\t\t\x3cbutton data-dojo-attach-point\x3d"nextButton" data-dojo-type\x3d"dijit.form.Button" \x3e\x26#x25B6;\x3c/button\x3e\n\t\t\t\x3cspan data-dojo-type\x3d"dijit.ToolbarSeparator"\x3e\x3c/span\x3e\n\t\t\t\x3cbutton data-dojo-attach-point\x3d"todayButton" data-dojo-type\x3d"dijit.form.Button" \x3eToday\x3c/button\x3e\n\t\t\t\x3cspan data-dojo-type\x3d"dijit.ToolbarSeparator"\x3e\x3c/span\x3e\n\t\t\t\x3cbutton data-dojo-attach-point\x3d"dayButton" data-dojo-type\x3d"dijit.form.Button" \x3eDay\x3c/button\x3e\n\t\t\t\x3cbutton data-dojo-attach-point\x3d"fourDaysButton" data-dojo-type\x3d"dijit.form.Button" \x3e4 Days\x3c/button\x3e\n\t\t\t\x3cbutton data-dojo-attach-point\x3d"weekButton" data-dojo-type\x3d"dijit.form.Button" \x3eWeek\x3c/button\x3e\t\t\t\n\t\t\t\x3cbutton data-dojo-attach-point\x3d"monthButton" data-dojo-type\x3d"dijit.form.Button" \x3eMonth\x3c/button\x3e\n\t\t\x3c/div\x3e\n\t\x3c/div\x3e\n\t\x3cdiv data-dojo-attach-point\x3d"viewContainer" class\x3d"viewContainer"\x3e\x3c/div\x3e\n\x3c/div\x3e\n'}});
define("dojo/_base/declare dojo/_base/lang ./CalendarBase ./ColumnView ./ColumnViewSecondarySheet ./VerticalRenderer ./DecorationRenderer ./MatrixView ./HorizontalRenderer ./LabelRenderer ./ExpandRenderer ./Keyboard ./Mouse dojo/text!./templates/Calendar.html dijit/form/Button dijit/Toolbar dijit/ToolbarSeparator".split(" "),function(b,c,l,m,n,p,d,q,g,r,h,e,f,t){return b("dojox.calendar.Calendar",l,{templateString:t,_createDefaultViews:function(){var a=b([n,e,f]),a=b([m,e,f])(c.mixin({secondarySheetClass:a,
verticalRenderer:p,horizontalRenderer:g,expandRenderer:h,horizontalDecorationRenderer:d,verticalDecorationRenderer:d},this.columnViewProps)),k=b([q,e,f])(c.mixin({horizontalRenderer:g,horizontalDecorationRenderer:d,labelRenderer:r,expandRenderer:h},this.matrixViewProps));this.columnView=a;this.matrixView=k;a=[a,k];this.installDefaultViewsActions(a);return a},installDefaultViewsActions:function(a){this.matrixView.on("rowHeaderClick",c.hitch(this,this.matrixViewRowHeaderClick));this.columnView.on("columnHeaderClick",
c.hitch(this,this.columnViewColumnHeaderClick))}})});