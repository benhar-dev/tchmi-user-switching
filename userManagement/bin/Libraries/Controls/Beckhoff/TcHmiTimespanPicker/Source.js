var TcHmi;!function(T){var e,t,u,n;function o(e,t,n){var o=u.call(this,e,t,n)||this;return o.__onMousedownYearUpDestroyEvent=null,o.__onMousedownYearDownDestroyEvent=null,o.__onMousedownMonthUpDestroyEvent=null,o.__onMousedownMonthDownDestroyEvent=null,o.__onMousedownDayUpDestroyEvent=null,o.__onMousedownDayDownDestroyEvent=null,o.__onMousedownHourUpDestroyEvent=null,o.__onMousedownHourDownDestroyEvent=null,o.__onMousedownMinuteUpDestroyEvent=null,o.__onMousedownMinuteDownDestroyEvent=null,o.__onMousedownSecondUpDestroyEvent=null,o.__onMousedownSecondDownDestroyEvent=null,o.__onMousedownMillisecondUpDestroyEvent=null,o.__onMousedownMillisecondDownDestroyEvent=null,o.__onPressedOkDestroyEvent=null,o.__onPressedCancelDestroyEvent=null,o.__onTextChangedYearDestroyEvent=null,o.__onTextChangedMonthDestroyEvent=null,o.__onTextChangedDayDestroyEvent=null,o.__onTextChangedHourDestroyEvent=null,o.__onTextChangedMinuteDestroyEvent=null,o.__onTextChangedSecondDestroyEvent=null,o.__onTextChangedMillisecondDestroyEvent=null,o.__onUserInteractionFinishedYearDestroyEvent=null,o.__onUserInteractionFinishedMonthDestroyEvent=null,o.__onUserInteractionFinishedDayDestroyEvent=null,o.__onUserInteractionFinishedHourDestroyEvent=null,o.__onUserInteractionFinishedMinuteDestroyEvent=null,o.__onUserInteractionFinishedSecondDestroyEvent=null,o.__onUserInteractionFinishedMillisecondDestroyEvent=null,o.__baseControls={},o.__isPressed=!1,o.__intervalTimer=0,o.__mousedownHandler=o.__onMousedown(),o.__mouseupHandler=o.__onMouseup(),o}e=T.Controls||(T.Controls={}),t=e.Beckhoff||(e.Beckhoff={}),u=T.Controls.System.TcHmiControl,__extends(o,u),o.prototype.__previnit=function(){this.__elementTSTemplate=$('<div class="tchmi-timespan-picker-template-overlay tchmi-box"></div>'),this.__elementTSFirstBlockTemplate=$('<div class="tchmi-timespan-picker-template-first-block tchmi-box"></div>'),this.__elementTSSecondBlockTemplate=$('<div class="tchmi-timespan-picker-template-second-block tchmi-box"></div>');var e=$('<div class="tchmi-timespan-picker-year-template tchmi-timespan-picker-template-editable-area"></div>'),t=this.__addControls("Year","0000");e.append(t),this.__elementTSFirstBlockTemplate.append(e);var n=$('<div class="tchmi-timespan-picker-month-template tchmi-timespan-picker-template-editable-area"></div>'),o=this.__addControls("Month","00");n.append(o),this.__elementTSFirstBlockTemplate.append(n);var s=$('<div class="tchmi-timespan-picker-day-template tchmi-timespan-picker-template-editable-area"></div>');s.append(this.__addControls("Day","00")),this.__elementTSFirstBlockTemplate.append(s);var i=$('<div class="tchmi-timespan-picker-hour-template tchmi-timespan-picker-template-editable-area"></div>');i.append(this.__addControls("Hour","00")),this.__elementTSSecondBlockTemplate.append(i);var r=$('<div class="tchmi-timespan-picker-minute-template tchmi-timespan-picker-template-editable-area"></div>');r.append(this.__addControls("Minute","00")),this.__elementTSSecondBlockTemplate.append(r);var a=$('<div class="tchmi-timespan-picker-second-template tchmi-timespan-picker-template-editable-area"></div>');a.append(this.__addControls("Second","00")),this.__elementTSSecondBlockTemplate.append(a);var _=$('<div class="tchmi-timespan-picker-millisecond-template tchmi-timespan-picker-template-editable-area"></div>'),l=this.__addControls("Millisecond","000");l.firstChild.style.width="70px",_.append(l),this.__elementTSTemplate.append(this.__elementTSFirstBlockTemplate),this.__elementTSTemplate.append(this.__elementTSSecondBlockTemplate),this.__elementTSTemplate.append(_);var d=T.ControlFactory.createEx("tchmi-button",this.__id+"_cancelButton",{"data-tchmi-text":"Cancel"},this);if(void 0===d)throw new Error("Needed Button could not be instantiated");d.getElement().addClass("tchmi-timespan-picker-template-action-button"),this.__elementTSTemplate.append(d.getElement()[0]),d.getElement()[0].style.clear="both",this.__baseControls[this.__id+"_cancelButton"]=d;var h=T.ControlFactory.createEx("tchmi-button",this.__id+"_okButton",{"data-tchmi-text":"Ok"},this);if(void 0===h)throw new Error("Needed Button could not be instantiated");h.getElement().addClass("tchmi-timespan-picker-template-action-button"),this.__elementTSTemplate.append(h.getElement()[0]),this.__baseControls[this.__id+"_okButton"]=h,u.prototype.__previnit.call(this)},o.prototype.__init=function(){u.prototype.__init.call(this)},o.prototype.__attach=function(){u.prototype.__attach.call(this);var e={passive:!0,capture:!1};this.__element[0].addEventListener("mousedown",this.__mousedownHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&e),document.addEventListener("mouseup",this.__mouseupHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&e),this.__onMousedownYearUpDestroyEvent=T.EventProvider.register(this.__id+"_yearUpButton.onMouseDown",this.__onMousedownTimeButtons()),this.__onMousedownYearDownDestroyEvent=T.EventProvider.register(this.__id+"_yearDownButton.onMouseDown",this.__onMousedownTimeButtons()),this.__onMousedownMonthUpDestroyEvent=T.EventProvider.register(this.__id+"_monthUpButton.onMouseDown",this.__onMousedownTimeButtons()),this.__onMousedownMonthDownDestroyEvent=T.EventProvider.register(this.__id+"_monthDownButton.onMouseDown",this.__onMousedownTimeButtons()),this.__onMousedownDayUpDestroyEvent=T.EventProvider.register(this.__id+"_dayUpButton.onMouseDown",this.__onMousedownTimeButtons()),this.__onMousedownDayDownDestroyEvent=T.EventProvider.register(this.__id+"_dayDownButton.onMouseDown",this.__onMousedownTimeButtons()),this.__onMousedownHourUpDestroyEvent=T.EventProvider.register(this.__id+"_hourUpButton.onMouseDown",this.__onMousedownTimeButtons()),this.__onMousedownHourDownDestroyEvent=T.EventProvider.register(this.__id+"_hourDownButton.onMouseDown",this.__onMousedownTimeButtons()),this.__onMousedownMinuteUpDestroyEvent=T.EventProvider.register(this.__id+"_minuteUpButton.onMouseDown",this.__onMousedownTimeButtons()),this.__onMousedownMinuteDownDestroyEvent=T.EventProvider.register(this.__id+"_minuteDownButton.onMouseDown",this.__onMousedownTimeButtons()),this.__onMousedownSecondUpDestroyEvent=T.EventProvider.register(this.__id+"_secondUpButton.onMouseDown",this.__onMousedownTimeButtons()),this.__onMousedownSecondDownDestroyEvent=T.EventProvider.register(this.__id+"_secondDownButton.onMouseDown",this.__onMousedownTimeButtons()),this.__onMousedownMillisecondUpDestroyEvent=T.EventProvider.register(this.__id+"_millisecondUpButton.onMouseDown",this.__onMousedownTimeButtons()),this.__onMousedownMillisecondDownDestroyEvent=T.EventProvider.register(this.__id+"_millisecondDownButton.onMouseDown",this.__onMousedownTimeButtons()),this.__onPressedOkDestroyEvent=T.EventProvider.register(this.__id+"_okButton.onPressed",this.__onPressed()),this.__onPressedCancelDestroyEvent=T.EventProvider.register(this.__id+"_cancelButton.onPressed",this.__onPressed()),this.__onTextChangedYearDestroyEvent=T.EventProvider.register(this.__id+"_yearValueTextbox.onTextChanged",this.__onTextChanged()),this.__onTextChangedMonthDestroyEvent=T.EventProvider.register(this.__id+"_monthValueTextbox.onTextChanged",this.__onTextChanged()),this.__onTextChangedDayDestroyEvent=T.EventProvider.register(this.__id+"_dayValueTextbox.onTextChanged",this.__onTextChanged()),this.__onTextChangedHourDestroyEvent=T.EventProvider.register(this.__id+"_hourValueTextbox.onTextChanged",this.__onTextChanged()),this.__onTextChangedMinuteDestroyEvent=T.EventProvider.register(this.__id+"_minuteValueTextbox.onTextChanged",this.__onTextChanged()),this.__onTextChangedSecondDestroyEvent=T.EventProvider.register(this.__id+"_secondValueTextbox.onTextChanged",this.__onTextChanged()),this.__onTextChangedMillisecondDestroyEvent=T.EventProvider.register(this.__id+"_millisecondValueTextbox.onTextChanged",this.__onTextChanged()),this.__onUserInteractionFinishedYearDestroyEvent=T.EventProvider.register(this.__id+"_yearValueTextbox.onUserInteractionFinished",this.__onUserInteractionFinished()),this.__onUserInteractionFinishedMonthDestroyEvent=T.EventProvider.register(this.__id+"_monthValueTextbox.onUserInteractionFinished",this.__onUserInteractionFinished()),this.__onUserInteractionFinishedDayDestroyEvent=T.EventProvider.register(this.__id+"_dayValueTextbox.onUserInteractionFinished",this.__onUserInteractionFinished()),this.__onUserInteractionFinishedHourDestroyEvent=T.EventProvider.register(this.__id+"_hourValueTextbox.onUserInteractionFinished",this.__onUserInteractionFinished()),this.__onUserInteractionFinishedMinuteDestroyEvent=T.EventProvider.register(this.__id+"_minuteValueTextbox.onUserInteractionFinished",this.__onUserInteractionFinished()),this.__onUserInteractionFinishedSecondDestroyEvent=T.EventProvider.register(this.__id+"_secondValueTextbox.onUserInteractionFinished",this.__onUserInteractionFinished()),this.__onUserInteractionFinishedMillisecondDestroyEvent=T.EventProvider.register(this.__id+"_millisecondValueTextbox.onUserInteractionFinished",this.__onUserInteractionFinished())},o.prototype.__detach=function(){u.prototype.__detach.call(this),this.__intervalTimer&&(clearInterval(this.__intervalTimer),this.__intervalTimer=0);var e={passive:!0,capture:!1};this.__element[0].removeEventListener("mousedown",this.__mousedownHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&e),document.removeEventListener("mouseup",this.__mouseupHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&e),null!==this.__onMousedownYearUpDestroyEvent&&(this.__onMousedownYearUpDestroyEvent(),this.__onMousedownYearUpDestroyEvent=null),null!==this.__onMousedownYearDownDestroyEvent&&(this.__onMousedownYearDownDestroyEvent(),this.__onMousedownYearDownDestroyEvent=null),null!==this.__onMousedownMonthUpDestroyEvent&&(this.__onMousedownMonthUpDestroyEvent(),this.__onMousedownMonthUpDestroyEvent=null),null!==this.__onMousedownMonthDownDestroyEvent&&(this.__onMousedownMonthDownDestroyEvent(),this.__onMousedownMonthDownDestroyEvent=null),null!==this.__onMousedownDayUpDestroyEvent&&(this.__onMousedownDayUpDestroyEvent(),this.__onMousedownDayUpDestroyEvent=null),null!==this.__onMousedownDayDownDestroyEvent&&(this.__onMousedownDayDownDestroyEvent(),this.__onMousedownDayDownDestroyEvent=null),null!==this.__onMousedownHourUpDestroyEvent&&(this.__onMousedownHourUpDestroyEvent(),this.__onMousedownHourUpDestroyEvent=null),null!==this.__onMousedownHourDownDestroyEvent&&(this.__onMousedownHourDownDestroyEvent(),this.__onMousedownHourDownDestroyEvent=null),null!==this.__onMousedownMinuteUpDestroyEvent&&(this.__onMousedownMinuteUpDestroyEvent(),this.__onMousedownMinuteUpDestroyEvent=null),null!==this.__onMousedownMinuteDownDestroyEvent&&(this.__onMousedownMinuteDownDestroyEvent(),this.__onMousedownMinuteDownDestroyEvent=null),null!==this.__onMousedownSecondUpDestroyEvent&&(this.__onMousedownSecondUpDestroyEvent(),this.__onMousedownSecondUpDestroyEvent=null),null!==this.__onMousedownSecondDownDestroyEvent&&(this.__onMousedownSecondDownDestroyEvent(),this.__onMousedownSecondDownDestroyEvent=null),null!==this.__onMousedownMillisecondUpDestroyEvent&&(this.__onMousedownMillisecondUpDestroyEvent(),this.__onMousedownMillisecondUpDestroyEvent=null),null!==this.__onMousedownMillisecondDownDestroyEvent&&(this.__onMousedownMillisecondDownDestroyEvent(),this.__onMousedownMillisecondDownDestroyEvent=null),null!==this.__onPressedOkDestroyEvent&&(this.__onPressedOkDestroyEvent(),this.__onPressedOkDestroyEvent=null),null!==this.__onPressedCancelDestroyEvent&&(this.__onPressedCancelDestroyEvent(),this.__onPressedCancelDestroyEvent=null),null!==this.__onTextChangedYearDestroyEvent&&(this.__onTextChangedYearDestroyEvent(),this.__onTextChangedYearDestroyEvent=null),null!==this.__onTextChangedMonthDestroyEvent&&(this.__onTextChangedMonthDestroyEvent(),this.__onTextChangedMonthDestroyEvent=null),null!==this.__onTextChangedDayDestroyEvent&&(this.__onTextChangedDayDestroyEvent(),this.__onTextChangedDayDestroyEvent=null),null!==this.__onTextChangedHourDestroyEvent&&(this.__onTextChangedHourDestroyEvent(),this.__onTextChangedHourDestroyEvent=null),null!==this.__onTextChangedMinuteDestroyEvent&&(this.__onTextChangedMinuteDestroyEvent(),this.__onTextChangedMinuteDestroyEvent=null),null!==this.__onTextChangedSecondDestroyEvent&&(this.__onTextChangedSecondDestroyEvent(),this.__onTextChangedSecondDestroyEvent=null),null!==this.__onTextChangedMillisecondDestroyEvent&&(this.__onTextChangedMillisecondDestroyEvent(),this.__onTextChangedMillisecondDestroyEvent=null),null!==this.__onUserInteractionFinishedYearDestroyEvent&&(this.__onUserInteractionFinishedYearDestroyEvent(),this.__onUserInteractionFinishedYearDestroyEvent=null),null!==this.__onUserInteractionFinishedMonthDestroyEvent&&(this.__onUserInteractionFinishedMonthDestroyEvent(),this.__onUserInteractionFinishedMonthDestroyEvent=null),null!==this.__onUserInteractionFinishedDayDestroyEvent&&(this.__onUserInteractionFinishedDayDestroyEvent(),this.__onUserInteractionFinishedDayDestroyEvent=null),null!==this.__onUserInteractionFinishedHourDestroyEvent&&(this.__onUserInteractionFinishedHourDestroyEvent(),this.__onUserInteractionFinishedHourDestroyEvent=null),null!==this.__onUserInteractionFinishedMinuteDestroyEvent&&(this.__onUserInteractionFinishedMinuteDestroyEvent(),this.__onUserInteractionFinishedMinuteDestroyEvent=null),null!==this.__onUserInteractionFinishedSecondDestroyEvent&&(this.__onUserInteractionFinishedSecondDestroyEvent(),this.__onUserInteractionFinishedSecondDestroyEvent=null),null!==this.__onUserInteractionFinishedMillisecondDestroyEvent&&(this.__onUserInteractionFinishedMillisecondDestroyEvent(),this.__onUserInteractionFinishedMillisecondDestroyEvent=null)},o.prototype.destroy=function(){u.prototype.destroy.call(this)},o.prototype.__addControls=function(e,t){var n=document.createDocumentFragment(),o=T.ControlFactory.createEx("tchmi-textblock",this.__id+"_"+e.toLowerCase()+"Label",{"data-tchmi-text-horizontal-alignment":"Center","data-tchmi-text-vertical-alignment":"Center","data-tchmi-text-font-size":15,"data-tchmi-text":e},this);if(void 0===o)throw new Error("Needed Textblock could not be instantiated");o.getElement().addClass("tchmi-timespan-picker-template-label"),n.appendChild(o.getElement()[0]);var s=T.ControlFactory.createEx("tchmi-button",this.__id+"_"+e.toLowerCase()+"UpButton",{"data-tchmi-zindex":1},this);if(void 0===s)throw new Error("Needed Button could not be instantiated");s.getElement().addClass("tchmi-timespan-picker-template-button tchmi-timespan-picker-template-up-button"),n.appendChild(s.getElement()[0]),this.__baseControls[this.__id+"_"+e.toLowerCase()+"UpButton"]=s;var i=T.ControlFactory.createEx("tchmi-textbox",this.__id+"_"+e.toLowerCase()+"ValueTextbox",{"data-tchmi-text":t,"data-tchmi-text-horizontal-alignment":"Center","data-tchmi-box-shadow":[{blur:5,blurUnit:"px",color:{color:"rgba(0, 0, 0, 0.6)"},offsetX:0,offsetXUnit:"px",offsetY:0,offsetYUnit:"px",spread:0,spreadUnit:"px"}],"data-tchmi-auto-focus-out":!0},this);if(void 0===i)throw new Error("Needed Textbox could not be instantiated");i.getElement().addClass("tchmi-timespan-picker-template-textbox"),n.appendChild(i.getElement()[0]),this.__baseControls[this.__id+"_"+e.toLowerCase()+"Value"]=i;var r=T.ControlFactory.createEx("tchmi-button",this.__id+"_"+e.toLowerCase()+"DownButton",{},this);if(void 0===r)throw new Error("Needed Button could not be instantiated");return r.getElement().addClass("tchmi-timespan-picker-template-button tchmi-timespan-picker-template-down-button"),n.appendChild(r.getElement()[0]),this.__baseControls[this.__id+"_"+e.toLowerCase()+"DownButton"]=r,n},o.prototype.__timespanObjectToIso=function(e){var t="";return t+="P",0<e.years&&(t+=e.years+"Y"),0<e.months&&(t+=e.months+"M"),0<e.days&&(t+=e.days+"D"),(0<e.hours||0<e.minutes||0<e.seconds||0<e.milliseconds)&&(t+="T"),0<e.hours&&(t+=e.hours+"H"),0<e.minutes&&(t+=e.minutes+"M"),(0<e.seconds||0===e.years&&0===e.months&&0===e.days&&0===e.hours&&0===e.minutes)&&(t+=e.seconds),0<e.milliseconds&&(t+="."+("00"+e.milliseconds).slice(-3).replace(/\.?0+$/,"")),(0<e.milliseconds||0<e.seconds)&&(t+="S"),t},o.prototype.__isoToTimespanObject=function(e){for(var t={years:0,months:0,days:0,hours:0,minutes:0,seconds:0,milliseconds:0},n=0,o=0,s=0,i=0,r=0,a=0,_=!1,l=e.split(""),d=0,h=l.length;d<h;d++){for(var u=0,m="";"0"<=l[d]&&l[d]<="9"||"."===l[d];)m+=l[d],d++,u=parseFloat(m);switch(l[d]){case"Y":a=u;break;case"D":i=u;break;case"T":_=!0;break;case"H":s=u;break;case"M":_?o=u:r=u;break;case"S":n=u}}t.years=a,t.months=r,t.days=i,t.hours=s,t.minutes=o;var v=n.toString().split(".");if(1<v.length){t.seconds=parseInt(v[0],10);var c=1e3*parseFloat("0."+v[1]);t.milliseconds=c}else t.seconds=parseInt(v[0],10),t.milliseconds=0;return t},o.prototype.__onMousedown=function(){var t=this;return function(e){t.getIsEnabled()&&T.Access.checkAccess(t,"operate")&&t.openTimespanPicker()}},o.prototype.openTimespanPicker=function(){var t=this;T.TopMostLayer.add(this,this.__elementTSTemplate,{centerHorizontal:!0,centerVertical:!0,removeCb:function(e){e.canceled&&(T.EventProvider.raise(t.__id+".onCancel"),t.__processValue())}})},o.prototype.closeTimespanPicker=function(){T.TopMostLayer.remove(this,this.__elementTSTemplate),T.EventProvider.raise(this.__id+".onCancel"),this.__processValue()},o.prototype.__onMousedownTimeButtons=function(){var V=this;return function(e){if(V.__isPressed=!0,-1!==e.name.search("yearUp")){if(void 0!==(I=V.__baseControls[V.__id+"_yearValue"])){var t=I;if(void 0!==(U=t.getText())){var n=U.trim();if(new RegExp("^-?[0-9]*$").test(n)){var o=parseInt(U,10);o++,t.setText(o.toString()),V.__intervalTimer=setInterval(function(){V.__isPressed&&(o=parseInt(t.getText(),10),o++,t.setText(o.toString()))},150)}}}}else if(-1!==e.name.search("yearDown")){if(void 0!==(I=V.__baseControls[V.__id+"_yearValue"])){var s=I;if(void 0!==(U=s.getText())&&(n=U.trim(),new RegExp("^-?[0-9]*$").test(n))){var i=parseInt(U,10);0<i&&(i--,s.setText(i.toString())),V.__intervalTimer=setInterval(function(){V.__isPressed&&0<(i=parseInt(s.getText(),10))&&(i--,s.setText(i.toString()))},150)}}}else if(-1!==e.name.search("monthUp")){if(void 0!==(I=V.__baseControls[V.__id+"_monthValue"])){var r=I;if(void 0!==(U=r.getText())&&(n=U.trim(),new RegExp("^-?[0-9]*$").test(n))){var a=parseInt(U,10);a++,r.setText(a.toString()),V.__intervalTimer=setInterval(function(){V.__isPressed&&(a=parseInt(r.getText(),10),a++,r.setText(a.toString()))},150)}}}else if(-1!==e.name.search("monthDown")){if(void 0!==(I=V.__baseControls[V.__id+"_monthValue"])){var _=I;if(void 0!==(U=_.getText())&&(n=U.trim(),new RegExp("^-?[0-9]*$").test(n))){var l=parseInt(U,10);0<l&&(l--,_.setText(l.toString())),V.__intervalTimer=setInterval(function(){V.__isPressed&&0<(l=parseInt(_.getText(),10))&&(l--,_.setText(l.toString()))},150)}}}else if(-1!==e.name.search("dayUp")){if(void 0!==(I=V.__baseControls[V.__id+"_dayValue"])){var d=I;if(void 0!==(U=d.getText())&&(n=U.trim(),new RegExp("^-?[0-9]*$").test(n))){var h=parseInt(U,10);h++,d.setText(h.toString()),V.__intervalTimer=setInterval(function(){V.__isPressed&&(h=parseInt(d.getText(),10),h++,d.setText(h.toString()))},150)}}}else if(-1!==e.name.search("dayDown")){if(void 0!==(I=V.__baseControls[V.__id+"_dayValue"])){var u=I;if(void 0!==(U=u.getText())&&(n=U.trim(),new RegExp("^-?[0-9]*$").test(n))){var m=parseInt(U,10);0<m&&(m--,u.setText(m.toString())),V.__intervalTimer=setInterval(function(){V.__isPressed&&0<(m=parseInt(u.getText(),10))&&(m--,u.setText(m.toString()))},150)}}}else if(-1!==e.name.search("hourUp")){if(void 0!==(I=V.__baseControls[V.__id+"_hourValue"])){var v=I;if(void 0!==(U=v.getText())&&(n=U.trim(),new RegExp("^-?[0-9]*$").test(n))){var c=parseInt(U,10);c++,v.setText(c.toString()),V.__intervalTimer=setInterval(function(){V.__isPressed&&(c=parseInt(v.getText(),10),c++,v.setText(c.toString()))},150)}}}else if(-1!==e.name.search("hourDown")){if(void 0!==(I=V.__baseControls[V.__id+"_hourValue"])){var p=I;if(void 0!==(U=p.getText())&&(n=U.trim(),new RegExp("^-?[0-9]*$").test(n))){var x=parseInt(U,10);0<x&&(x--,p.setText(x.toString())),V.__intervalTimer=setInterval(function(){V.__isPressed&&0<(x=parseInt(p.getText(),10))&&(x--,p.setText(x.toString()))},150)}}}else if(-1!==e.name.search("minuteUp")){if(void 0!==(I=V.__baseControls[V.__id+"_minuteValue"])){var T=I;if(void 0!==(U=T.getText())&&(n=U.trim(),new RegExp("^-?[0-9]*$").test(n))){var E=parseInt(U,10);E++,T.setText(E.toString()),V.__intervalTimer=setInterval(function(){V.__isPressed&&(E=parseInt(T.getText(),10),E++,T.setText(E.toString()))},150)}}}else if(-1!==e.name.search("minuteDown")){if(void 0!==(I=V.__baseControls[V.__id+"_minuteValue"])){var g=I;if(void 0!==(U=g.getText())&&(n=U.trim(),new RegExp("^-?[0-9]*$").test(n))){var y=parseInt(U,10);0<y&&(y--,g.setText(y.toString())),V.__intervalTimer=setInterval(function(){V.__isPressed&&0<(y=parseInt(g.getText(),10))&&(y--,g.setText(y.toString()))},150)}}}else if(-1!==e.name.search("millisecondUp")){if(void 0!==(I=V.__baseControls[V.__id+"_millisecondValue"])){var D=I;if(void 0!==(U=D.getText())&&(n=U.trim(),new RegExp("^-?[0-9]*$").test(n))){var w=parseInt(U,10);w<999&&(0<=++w?D.setText(("000"+w).substring(Math.min((""+w).length,3))):D.setText(w.toString())),V.__intervalTimer=setInterval(function(){V.__isPressed&&(w=parseInt(D.getText(),10))<999&&(0<=++w?D.setText(("000"+w).substring(Math.min((""+w).length,3))):D.setText(w.toString()))},150)}}}else if(-1!==e.name.search("millisecondDown")){if(void 0!==(I=V.__baseControls[V.__id+"_millisecondValue"])){var C=I;if(void 0!==(U=C.getText())&&(n=U.trim(),new RegExp("^-?[0-9]*$").test(n))){var M=parseInt(U,10);0<M&&(M--,C.setText(("000"+M).substring(Math.min((""+M).length,3)))),V.__intervalTimer=setInterval(function(){V.__isPressed&&0<(M=parseInt(C.getText(),10))&&(M--,C.setText(("000"+M).substring(Math.min((""+M).length,3))))},150)}}}else if(-1!==e.name.search("secondUp")){if(void 0!==(I=V.__baseControls[V.__id+"_secondValue"])){var b=I;if(void 0!==(U=b.getText())&&(n=U.trim(),new RegExp("^-?[0-9]*$").test(n))){var f=parseInt(U,10);f++,b.setText(f.toString()),V.__intervalTimer=setInterval(function(){V.__isPressed&&(f=parseInt(b.getText(),10),f++,b.setText(f.toString()))},150)}}}else if(-1!==e.name.search("secondDown")){var I;if(void 0!==(I=V.__baseControls[V.__id+"_secondValue"])){var U,k=I;if(void 0!==(U=k.getText())&&(n=U.trim(),new RegExp("^-?[0-9]*$").test(n))){var S=parseInt(U,10);0<S&&(S--,k.setText(S.toString())),V.__intervalTimer=setInterval(function(){V.__isPressed&&0<(S=parseInt(k.getText(),10))&&(S--,k.setText(S.toString()))},150)}}}}},o.prototype.__onMouseup=function(){var t=this;return function(e){t.__isPressed=!1,t.__intervalTimer&&(clearInterval(t.__intervalTimer),t.__intervalTimer=0)}},o.prototype.__onPressed=function(){var x=this;return function(e){if(-1!==e.name.search("ok")){var t={years:0,months:0,days:0,hours:0,minutes:0,seconds:0,milliseconds:0},n=x.__baseControls[x.__id+"_yearValue"];if(void 0!==n){var o=n;t.years=parseInt(o.getText(),10)}var s=x.__baseControls[x.__id+"_monthValue"];if(void 0!==s){var i=s;t.months=parseInt(i.getText(),10)}var r=x.__baseControls[x.__id+"_dayValue"];if(void 0!==r){var a=r;t.days=parseInt(a.getText(),10)}var _=x.__baseControls[x.__id+"_hourValue"];if(void 0!==_){var l=_;t.hours=parseInt(l.getText(),10)}var d=x.__baseControls[x.__id+"_minuteValue"];if(void 0!==d){var h=d;t.minutes=parseInt(h.getText(),10)}var u=x.__baseControls[x.__id+"_secondValue"];if(void 0!==u){var m=u;t.seconds=parseInt(m.getText(),10)}var v=x.__baseControls[x.__id+"_millisecondValue"];if(void 0!==v){var c=v;t.milliseconds=parseInt(c.getText(),10)}var p=x.__timespanObjectToIso(t);x.setValue(p,!1),T.TopMostLayer.remove(x,x.__elementTSTemplate)}else-1!==e.name.search("cancel")&&(T.TopMostLayer.remove(x,x.__elementTSTemplate),T.EventProvider.raise(x.__id+".onCancel"),x.__processValue())}},o.prototype.__onTextChanged=function(){var r=this;return function(e){if(-1!==e.name.search("yearValueTextbox")){if(void 0!==(n=r.__baseControls[r.__id+"_yearValue"])&&void 0!==(s=(o=n).getText())){var t=s.trim();new RegExp("^[0-9]*$").test(t)?o.getElement().removeClass("tchmi-timespan-picker-template-textbox-error"):o.getElement().addClass("tchmi-timespan-picker-template-textbox-error")}}else if(-1!==e.name.search("monthValueTextbox"))void 0!==(n=r.__baseControls[r.__id+"_monthValue"])&&void 0!==(s=(o=n).getText())&&(t=s.trim(),new RegExp("^[0-9]*$").test(t)?o.getElement().removeClass("tchmi-timespan-picker-template-textbox-error"):o.getElement().addClass("tchmi-timespan-picker-template-textbox-error"));else if(-1!==e.name.search("dayValueTextbox"))void 0!==(n=r.__baseControls[r.__id+"_dayValue"])&&void 0!==(s=(o=n).getText())&&(t=s.trim(),new RegExp("^[0-9]*$").test(t)?o.getElement().removeClass("tchmi-timespan-picker-template-textbox-error"):o.getElement().addClass("tchmi-timespan-picker-template-textbox-error"));else if(-1!==e.name.search("hourValueTextbox"))void 0!==(n=r.__baseControls[r.__id+"_hourValue"])&&void 0!==(s=(o=n).getText())&&(t=s.trim(),new RegExp("^[0-9]*$").test(t)?o.getElement().removeClass("tchmi-timespan-picker-template-textbox-error"):o.getElement().addClass("tchmi-timespan-picker-template-textbox-error"));else if(-1!==e.name.search("minuteValueTextbox"))void 0!==(n=r.__baseControls[r.__id+"_minuteValue"])&&void 0!==(s=(o=n).getText())&&(t=s.trim(),new RegExp("^[0-9]*$").test(t)?o.getElement().removeClass("tchmi-timespan-picker-template-textbox-error"):o.getElement().addClass("tchmi-timespan-picker-template-textbox-error"));else if(-1!==e.name.search("millisecondValueTextbox"))void 0!==(n=r.__baseControls[r.__id+"_millisecondValue"])&&void 0!==(s=(o=n).getText())&&(t=s.trim(),new RegExp("^[0-9]*$").test(t)&&(""===t?0:parseInt(t,10))<=999?o.getElement().removeClass("tchmi-timespan-picker-template-textbox-error"):o.getElement().addClass("tchmi-timespan-picker-template-textbox-error"));else if(-1!==e.name.search("secondValueTextbox")){var n,o,s;void 0!==(n=r.__baseControls[r.__id+"_secondValue"])&&void 0!==(s=(o=n).getText())&&(t=s.trim(),new RegExp("^[0-9]*$").test(t)?o.getElement().removeClass("tchmi-timespan-picker-template-textbox-error"):o.getElement().addClass("tchmi-timespan-picker-template-textbox-error"))}var i=r.__baseControls[r.__id+"_okButton"];void 0!==i&&(0<r.__elementTSTemplate.find(".tchmi-timespan-picker-template-textbox-error").length?i.setIsEnabled(!1):i.setIsEnabled(!0))}},o.prototype.__onUserInteractionFinished=function(){var a=this;return function(e){if(-1!==e.name.search("yearValueTextbox")){if(void 0!==(s=a.__baseControls[a.__id+"_yearValue"])&&void 0!==(r=(i=s).getText())){var t=r.trim();if(new RegExp("^[0-9]*$").test(t)){var n=void 0;(o=(n=""===t?0:parseInt(t,10)).toString())!==r&&i.setText(o)}}}else if(-1!==e.name.search("monthValueTextbox"))void 0!==(s=a.__baseControls[a.__id+"_monthValue"])&&void 0!==(r=(i=s).getText())&&(t=r.trim(),new RegExp("^[0-9]*$").test(t)&&(n=void 0,(o=(n=""===t?0:parseInt(t,10)).toString())!==r&&i.setText(o)));else if(-1!==e.name.search("dayValueTextbox"))void 0!==(s=a.__baseControls[a.__id+"_dayValue"])&&void 0!==(r=(i=s).getText())&&(t=r.trim(),new RegExp("^[0-9]*$").test(t)&&(n=void 0,(o=(n=""===t?0:parseInt(t,10)).toString())!==r&&i.setText(o)));else if(-1!==e.name.search("hourValueTextbox"))void 0!==(s=a.__baseControls[a.__id+"_hourValue"])&&void 0!==(r=(i=s).getText())&&(t=r.trim(),new RegExp("^[0-9]*$").test(t)&&(n=void 0,(o=(n=""===t?0:parseInt(t,10)).toString())!==r&&i.setText(o)));else if(-1!==e.name.search("minuteValueTextbox"))void 0!==(s=a.__baseControls[a.__id+"_minuteValue"])&&void 0!==(r=(i=s).getText())&&(t=r.trim(),new RegExp("^[0-9]*$").test(t)&&(n=void 0,(o=(n=""===t?0:parseInt(t,10)).toString())!==r&&i.setText(o)));else if(-1!==e.name.search("millisecondValueTextbox")){if(void 0!==(s=a.__baseControls[a.__id+"_millisecondValue"])&&void 0!==(r=(i=s).getText())&&(t=r.trim(),new RegExp("^[0-9]*$").test(t)&&(n=void 0,(n=""===t?0:parseInt(t,10))<=999))){var o=n.toString();i.setText(("000"+o).substring(Math.min((""+o).length,3)))}}else if(-1!==e.name.search("secondValueTextbox")){var s,i,r;void 0!==(s=a.__baseControls[a.__id+"_secondValue"])&&void 0!==(r=(i=s).getText())&&(t=r.trim(),new RegExp("^[0-9]*$").test(t)&&(n=void 0,(o=(n=""===t?0:parseInt(t,10)).toString())!==r&&i.setText(o)))}}},o.prototype.setValue=function(e,t){void 0===t&&(t=!0);var n=T.ValueConverter.toString(e);null===n&&(n=this.getAttributeDefaultValueInternal("Value")),n!==this.__value&&(this.__value=n,T.EventProvider.raise(this.__id+".onFunctionResultChanged",["getValue"]),T.EventProvider.raise(this.__id+".onValueChanged",this.__value),t&&this.__processValue())},o.prototype.getValue=function(){return this.__value},o.prototype.__processValue=function(){var e={years:0,months:0,days:0,hours:0,minutes:0,seconds:0,milliseconds:0};null!==this.__value&&void 0!==this.__value&&(e=this.__isoToTimespanObject(this.__value));var t=this,n=t.__baseControls[t.__id+"_yearValue"];if(void 0!==n){var o=n;e.minutes<0?o.getElement().addClass("tchmi-timespan-picker-template-textbox-error"):o.getElement().removeClass("tchmi-timespan-picker-template-textbox-error"),o.setText(e.years.toString())}var s=t.__baseControls[t.__id+"_monthValue"];if(void 0!==s){var i=s;e.minutes<0?i.getElement().addClass("tchmi-timespan-picker-template-textbox-error"):i.getElement().removeClass("tchmi-timespan-picker-template-textbox-error"),i.setText(e.months.toString())}var r=t.__baseControls[t.__id+"_dayValue"];if(void 0!==r){var a=r;e.minutes<0?a.getElement().addClass("tchmi-timespan-picker-template-textbox-error"):a.getElement().removeClass("tchmi-timespan-picker-template-textbox-error"),a.setText(e.days.toString())}var _=t.__baseControls[t.__id+"_hourValue"];if(void 0!==_){var l=_;e.hours<0?l.getElement().addClass("tchmi-timespan-picker-template-textbox-error"):l.getElement().removeClass("tchmi-timespan-picker-template-textbox-error"),l.setText(e.hours.toString())}var d=t.__baseControls[t.__id+"_minuteValue"];if(void 0!==d){var h=d;e.minutes<0?h.getElement().addClass("tchmi-timespan-picker-template-textbox-error"):h.getElement().removeClass("tchmi-timespan-picker-template-textbox-error"),h.setText(e.minutes.toString())}var u=t.__baseControls[t.__id+"_secondValue"];if(void 0!==u){var m=u;e.seconds<0?m.getElement().addClass("tchmi-timespan-picker-template-textbox-error"):m.getElement().removeClass("tchmi-timespan-picker-template-textbox-error"),m.setText(e.seconds.toString())}var v=t.__baseControls[t.__id+"_millisecondValue"];if(void 0!==v){var c=v;999<e.milliseconds||e.milliseconds<0?c.getElement().addClass("tchmi-timespan-picker-template-textbox-error"):c.getElement().removeClass("tchmi-timespan-picker-template-textbox-error"),c.setText(("000"+e.milliseconds).slice(-3))}var p=t.__baseControls[t.__id+"_okButton"];void 0!==p&&(0<t.__elementTSTemplate.find(".tchmi-timespan-picker-template-textbox-error").length?p.setIsEnabled(!1):p.setIsEnabled(!0))},o.prototype.__processIsEnabled=function(){u.prototype.__processIsEnabled.call(this),this.__isEnabled||(T.TopMostLayer.remove(this,this.__elementTSTemplate),T.EventProvider.raise(this.__id+".onCancel"))},n=o,t.TcHmiTimespanPicker=n,e.register("tchmi-timespan-picker",T.Controls.Beckhoff.TcHmiTimespanPicker,"Beckhoff/TcHmiTimespanPicker/","Beckhoff/TcHmiTimespanPicker/Template.html")}(TcHmi=TcHmi||{});