var TcHmi;!function(o){var t,e,r,i;function n(t,e,i){var n=r.call(this,t,e,i)||this;return n.__runtimeWidthNeededForHeight=!1,n.__runtimeHeightNeededForWidth=!1,n.__onResizedEventDestroyEvent=null,n.__animationFrameId=0,n.__loadHandler=function(t){!0===n.getIsEnabled()&&("Content"===n.getHeightMode()&&n.__processHeight(),"Content"===n.getWidthMode()&&n.__processWidth(),o.EventProvider.raise(n.__id+".onLoad",t),o.EventProvider.raise(n.__id+".onFunctionResultChanged",["getOriginalWidth","getOriginalHeight"]))},n.__errorHandler=function(t){!0===n.getIsEnabled()&&("Content"===n.getHeightMode()&&n.__processHeight(),"Content"===n.getWidthMode()&&n.__processWidth(),o.EventProvider.raise(n.__id+".onError",t),o.EventProvider.raise(n.__id+".onFunctionResultChanged",["getOriginalWidth","getOriginalHeight"]))},n}t=o.Controls||(o.Controls={}),e=t.Beckhoff||(t.Beckhoff={}),r=o.Controls.System.TcHmiControl,__extends(n,r),n.prototype.__previnit=function(){if(this.__elementImage=this.__element[0].querySelector(".tchmi-image-template-content"),null===this.__elementImage)throw new Error("Invalid Template.html");r.prototype.__previnit.call(this)},n.prototype.__init=function(){r.prototype.__init.call(this)},n.prototype.__attach=function(){r.prototype.__attach.call(this);var t={passive:!0,capture:!1};this.__elementImage.addEventListener("load",this.__loadHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&t),this.__elementImage.addEventListener("error",this.__errorHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&t)},n.prototype.__detach=function(){if(r.prototype.__detach.call(this),this.__elementImage){var t={passive:!0,capture:!1};this.__elementImage.removeEventListener("load",this.__loadHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&t),this.__elementImage.removeEventListener("error",this.__errorHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&t)}null!==this.__onResizedEventDestroyEvent&&(this.__onResizedEventDestroyEvent(),this.__onResizedEventDestroyEvent=null)},n.prototype.destroy=function(){r.prototype.destroy.call(this)},n.prototype.__onResized=function(){var i=this;return function(t,e){!0===i.__runtimeHeightNeededForWidth?i.__processWidth():!0===i.__runtimeWidthNeededForHeight&&i.__processHeight()}},n.prototype.__processWidth=function(){if("Content"===this.getWidthMode()){var t="",e=this.__getContentWidth();null!==e&&(t=e+"px"),o.StyleProvider.setSimpleElementStyle(this.__element,"width",t)}r.prototype.__processWidth.call(this),"Content"===this.getHeightMode()&&"Content"!==this.getWidthMode()&&this.__processHeight()},n.prototype.__processHeight=function(){if("Content"===this.getHeightMode()){this.__intHeight=null;var t=this.__getContentHeight();null!==t&&(this.__intHeight=t+"px")}r.prototype.__processHeight.call(this),"Content"===this.getWidthMode()&&"Content"!==this.getHeightMode()&&this.__processWidth()},n.prototype.setWidthMode=function(t){var e=o.ValueConverter.toSizeModeWithContent(t);null===e&&(e=this.getAttributeDefaultValueInternal("WidthMode")),e!==this.__widthMode&&(this.__widthMode=e,o.EventProvider.raise(this.__id+".onFunctionResultChanged",["getWidthMode"]),this.__processWidthMode(),"Content"===e&&"Content"===this.getHeightMode()&&this.__processHeightMode())},n.prototype.setHeightMode=function(t){var e=o.ValueConverter.toSizeModeWithContent(t);null===e&&(e=this.getAttributeDefaultValueInternal("HeightMode")),e!==this.__heightMode&&(this.__heightMode=e,o.EventProvider.raise(this.__id+".onFunctionResultChanged",["getHeightMode"]),this.__processHeightMode(),"Content"===e&&"Content"===this.getHeightMode()&&this.__processWidthMode())},n.prototype.__getContentWidth=function(){if(this.__runtimeHeightNeededForWidth=!1,"Content"!==this.getWidthMode())return r.prototype.__getContentWidth.call(this);if(!this.__src)return null;if("px"!==this.__widthUnit)return null;var t=this.__elementImage;return 0===t.naturalHeight||0===t.naturalWidth?null:"Content"===this.getHeightMode()?t.naturalWidth:null!==this.__height&&void 0!==this.__height&&"Value"===this.getHeightMode()?this.__height*t.naturalWidth/t.naturalHeight:(this.__runtimeHeightNeededForWidth=!0,null===this.__onResizedEventDestroyEvent&&(this.__onResizedEventDestroyEvent=o.EventProvider.register(this.__id+".onResized",this.__onResized())),!1===this.__isAttached?null:this.__element.height()*t.naturalWidth/t.naturalHeight)},n.prototype.__getContentHeight=function(){if(this.__runtimeWidthNeededForHeight=!1,"Content"!==this.getHeightMode())return r.prototype.__getContentHeight.call(this);if(!this.__src)return null;if("px"!==this.__heightUnit)return null;var t=this.__elementImage;return 0===t.naturalHeight||0===t.naturalWidth?null:"Content"===this.getWidthMode()?t.naturalHeight:null!==this.__width&&void 0!==this.__width&&"Value"===this.getWidthMode()?this.__width*t.naturalHeight/t.naturalWidth:(this.__runtimeWidthNeededForHeight=!0,null===this.__onResizedEventDestroyEvent&&(this.__onResizedEventDestroyEvent=o.EventProvider.register(this.__id+".onResized",this.__onResized())),!1===this.__isAttached?null:this.__element.width()*t.naturalHeight/t.naturalWidth)},n.prototype.getOriginalWidth=function(){return this.__elementImage.naturalWidth},n.prototype.getOriginalHeight=function(){return this.__elementImage.naturalHeight},n.prototype.__processAccessConfig=function(){r.prototype.__processAccessConfig.call(this),this.__processSrc()},n.prototype.__processIsEnabled=function(){r.prototype.__processIsEnabled.call(this),this.__processSrc()},n.prototype.setSrc=function(t){var e=o.ValueConverter.toString(t);null===e&&(e=this.getAttributeDefaultValueInternal("Src")),e!==this.__src&&(this.__src=e,o.EventProvider.raise(this.__id+".onFunctionResultChanged",["getSrc"]),this.__processSrc())},n.prototype.getSrc=function(){return this.__src},n.prototype.__processSrc=function(){var t=this;0!==this.__animationFrameId&&(window.cancelAnimationFrame(this.__animationFrameId),this.__animationFrameId=0),this.__animationFrameId=window.requestAnimationFrame(function(){t.__animationFrameId=0,t.__src&&o.System.Services.accessManager.checkAccess(t,"observe")&&t.getIsEnabled()?t.__elementImage.src=t.__src:t.__elementImage.src=""})},n.prototype.setAlt=function(t){var e=o.ValueConverter.toString(t);null===e&&(e=this.getAttributeDefaultValueInternal("Alt")),e!==this.__alt&&(this.__alt=e,o.EventProvider.raise(this.__id+".onFunctionResultChanged",["getAlt"]),this.__processAlt())},n.prototype.getAlt=function(){return this.__alt},n.prototype.__processAlt=function(){this.__alt?this.__elementImage.alt=this.__alt:this.__elementImage.alt=""},i=n,e.TcHmiImage=i,t.register("tchmi-image",o.Controls.Beckhoff.TcHmiImage,"Beckhoff/TcHmiImage/","Beckhoff/TcHmiImage/Template.html")}(TcHmi=TcHmi||{});