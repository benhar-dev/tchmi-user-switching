var TcHmi;!function(s){var t,e,r,o;function _(t,e,o){var _=r.call(this,t,e,o)||this;return _.__toggleLock=!1,_.__onToggleGroupToggledEventDestroyEvent=null,_}t=s.Controls||(s.Controls={}),e=t.Beckhoff||(t.Beckhoff={}),r=e.TcHmiButton,__extends(_,r),_.prototype.__previnit=function(){r.prototype.__previnit.call(this)},_.prototype.__init=function(){r.prototype.__init.call(this)},_.prototype.__attach=function(){r.prototype.__attach.call(this)},_.prototype.__detach=function(){r.prototype.__detach.call(this)},_.prototype.destroy=function(){null!==this.__onToggleGroupToggledEventDestroyEvent&&(this.__onToggleGroupToggledEventDestroyEvent(),this.__onToggleGroupToggledEventDestroyEvent=null),r.prototype.destroy.call(this)},_.prototype.__processState=function(t,e){var o=this;void 0===e&&(e=!0),this.__stateOld=this.__state,this.__state=t,this.__state!==this.__stateOld&&(this.__state?(this.__stateSymbol&&e&&this.__stateSymbol.write(!0,function(t){t.error!==s.Errors.NONE&&t.details&&s.Log.error("[Source=Control, Module=TcHmi.Controls.Beckhoff.TcHmiToggleButton, Id="+o.getId()+", Property=StateSymbol, "+(o.__stateSymbol?"Symbol = "+o.__stateSymbol.getExpression().toString():"")+"] "+s.Log.buildMessage(t.details))}),this.__setToggleState("Active",e,!1),null!==this.__toggleGroup&&s.EventProvider.raise(this.__toggleGroup+".toggled",{ActiveElementId:this.__id}),this.__element.addClass("down"),s.EventProvider.raise(this.getId()+".onStatePressed",{control:this})):(this.__stateSymbol&&e&&this.__stateSymbol.write(!1,function(t){t.error!==s.Errors.NONE&&t.details&&s.Log.error("[Source=Control, Module=TcHmi.Controls.Beckhoff.TcHmiToggleButton, Id="+o.getId()+", Property=StateSymbol, "+(o.__stateSymbol?"Symbol = "+o.__stateSymbol.getExpression().toString():"")+"] "+s.Log.buildMessage(t.details))}),this.__setToggleState("Normal",e,!1),this.__element.removeClass("down"),s.EventProvider.raise(this.getId()+".onStateReleased",{control:this})),s.EventProvider.raise(this.getId()+".onStateChanged",{control:this,state:this.__state,stateOld:this.__stateOld}))},_.prototype.__onFunctionResultChanged=function(){var r=this;return function(t,e){if(e){for(var o=!1,_=0,s=e.length;_<s;_++)if("getIsEnabled"!==e[_]){if(o)break}else o=!0;o&&(!0===r.getIsEnabled()?!r.__destroyStateSymbolWatch&&r.__stateSymbol&&(r.__destroyStateSymbolWatch=r.__stateSymbol.watch(r.__onStateSymbolWatch())):(r.__mousedown=!1,r.__stateLock=!1,r.__touches=[],r.__destroyStateSymbolWatch&&(r.__destroyStateSymbolWatch(),r.__destroyStateSymbolWatch=null)))}}},_.prototype.__onMouseDown=function(){var e=this;return function(t){e.__touchLock||0===t.button&&e.getIsEnabled()&&s.Access.checkAccess(e,"operate")&&!(e.__mousedown=!0)===e.__stateLock&&(!1===e.__state?(e.__toggleLock=!0,e.__stateLock=!0,e.__destroyStateSymbolWatch&&(e.__destroyStateSymbolWatch(),e.__destroyStateSymbolWatch=null),e.__processState(!0,!0)):e.__toggleLock=!1)}},_.prototype.__onMouseUp=function(){var e=this;return function(t){e.__touchLock||0===t.button&&e.__mousedown&&e.getIsEnabled()&&s.Access.checkAccess(e,"operate")&&((e.__mousedown=!1)===e.__toggleLock&&!0===e.__state&&e.__processState(!1,!0),e.__stateLock=!1,!e.__destroyStateSymbolWatch&&e.__stateSymbol&&(e.__destroyStateSymbolWatch=e.__stateSymbol.watch(e.__onStateSymbolWatch())))}},_.prototype.__onMouseEnter=function(){var e=this;return function(t){e.__mousedown&&e.getIsEnabled()&&s.Access.checkAccess(e,"operate")&&!(e.__mousedown=!0)===e.__stateLock&&(!1===e.__state?(e.__toggleLock=!0,e.__stateLock=!0,e.__destroyStateSymbolWatch&&(e.__destroyStateSymbolWatch(),e.__destroyStateSymbolWatch=null),e.__processState(!0,!0)):e.__toggleLock=!1)}},_.prototype.__onMouseLeave=function(){var e=this;return function(t){e.__mousedown&&e.getIsEnabled()&&s.Access.checkAccess(e,"operate")&&((e.__mousedown=!1)===e.__toggleLock&&!0===e.__state&&e.__processState(!1,!0),e.__stateLock=!1,!e.__destroyStateSymbolWatch&&e.__stateSymbol&&(e.__destroyStateSymbolWatch=e.__stateSymbol.watch(e.__onStateSymbolWatch())))}},_.prototype.__onTouchStart=function(){var _=this;return function(e){if(_.getIsEnabled()&&s.Access.checkAccess(_,"operate")){var t=Array.prototype.slice.apply(e.changedTouches).filter(function(t){return t.target===e.target});if(0!==t.length){_.__touches=_.__touches.concat(t.map(function(t){return t})),!1===_.__stateLock&&(!1===_.__state?(_.__toggleLock=!0,_.__stateLock=!0,_.__destroyStateSymbolWatch&&(_.__destroyStateSymbolWatch(),_.__destroyStateSymbolWatch=null),_.__processState(!0,!0)):_.__toggleLock=!1),_.__touchLock=!0;var o=_;setTimeout(function(){o.__touchLock=!1},300)}}}},_.prototype.__onTouchEndOrCancel=function(){var o=this;return function(t){if(0!==o.__touches.length&&o.getIsEnabled()&&s.Access.checkAccess(o,"operate")){var e=Array.prototype.slice.apply(t.changedTouches).map(function(t){return t.identifier});o.__touches=o.__touches.filter(function(t){return-1===e.indexOf(t.identifier)}),0===o.__touches.length&&(!1===o.__toggleLock&&!0===o.__state&&o.__processState(!1,!0),o.__stateLock=!1,!o.__destroyStateSymbolWatch&&o.__stateSymbol&&(o.__destroyStateSymbolWatch=o.__stateSymbol.watch(o.__onStateSymbolWatch())))}}},_.prototype.__onToggleGroupToggled=function(){var o=this;return function(t,e){null!=e&&void 0!==e.ActiveElementId&&null!==e.ActiveElementId&&e.ActiveElementId!==o.__id&&o.__processState(!1,!0)}},_.prototype.setToggleGroup=function(t){var e=s.ValueConverter.toString(t);null===e&&(e=this.getAttributeDefaultValueInternal("ToggleGroup")),e!==this.__toggleGroup&&(this.__toggleGroup=e,s.EventProvider.raise(this.__id+".onFunctionResultChanged",["getToggleGroup"]),this.__processToggleGroup())},_.prototype.getToggleGroup=function(){return this.__toggleGroup},_.prototype.__processToggleGroup=function(){null!==this.__onToggleGroupToggledEventDestroyEvent&&(this.__onToggleGroupToggledEventDestroyEvent(),this.__onToggleGroupToggledEventDestroyEvent=null),null!==this.__toggleGroup&&(this.__onToggleGroupToggledEventDestroyEvent=s.EventProvider.register(this.__toggleGroup+".toggled",this.__onToggleGroupToggled()))},_.prototype.__setToggleState=function(t,e,o){void 0===e&&(e=!0),void 0===o&&(o=!1);var _=s.ValueConverter.toToggleState(t);null===_&&(_=this.getAttributeDefaultValueInternal("ToggleState")),_!==this.__toggleState&&(this.__toggleState=_,s.EventProvider.raise(this.__id+".onFunctionResultChanged",["getToggleState"]),s.EventProvider.raise(this.__id+".onToggleStateChanged"),o&&this.__processToggleState(e))},_.prototype.setToggleState=function(t){this.__setToggleState(t,!0,!0)},_.prototype.getToggleState=function(){return this.__toggleState},_.prototype.__processToggleState=function(t){void 0===t&&(t=!0),"Normal"===this.__toggleState?this.__processState(!1,t):"Active"===this.__toggleState&&this.__processState(!0,t)},o=_,e.TcHmiToggleButton=o,t.register("tchmi-toggle-button",s.Controls.Beckhoff.TcHmiToggleButton,"Beckhoff/TcHmiToggleButton/","Beckhoff/TcHmiButton/Template.html")}(TcHmi=TcHmi||{});