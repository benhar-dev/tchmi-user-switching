var TcHmi;!function(o){var t,e,s,r;function _(t,e,o){var r=s.call(this,t,e,o)||this;return r.__loadHandler=r.__onLoad(),r}t=o.Controls||(o.Controls={}),e=t.Beckhoff||(t.Beckhoff={}),s=o.Controls.System.TcHmiControl,__extends(_,s),_.prototype.__previnit=function(){if(this.__elementTemplateRoot=this.__element.find(".tchmi-iframe-template"),this.__elementFrame=this.__elementTemplateRoot.find(".tchmi-iframe-template-frame"),0===this.__elementTemplateRoot.length||0===this.__elementFrame.length)throw new Error("Invalid Template.html");s.prototype.__previnit.call(this)},_.prototype.__init=function(){s.prototype.__init.call(this)},_.prototype.__attach=function(){s.prototype.__attach.call(this),this.__elementFrame[0].addEventListener("load",this.__loadHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&{passive:!0,capture:!1}),this.__processSrc()},_.prototype.__detach=function(){s.prototype.__detach.call(this),this.__elementFrame[0].removeEventListener("load",this.__loadHandler,!!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED&&{passive:!0,capture:!1})},_.prototype.destroy=function(){s.prototype.destroy.call(this)},_.prototype.setSrc=function(t){var e=o.ValueConverter.toString(t);null===e&&(e=this.getAttributeDefaultValueInternal("Src")),e!==this.__src&&(this.__src=e,o.EventProvider.raise(this.__id+".onFunctionResultChanged",["getSrc"]),this.__processSrc())},_.prototype.getSrc=function(){return this.__src},_.prototype.__processSrc=function(){var t=this.__elementFrame[0];TCHMI_ENABLE_DESIGNER_MODE_MASTER?this.__isAttached&&t.contentDocument&&(this.__src?t.contentDocument.body.innerHTML=this.__src:t.contentDocument.body.innerHTML=""):this.__src&&o.Access.checkAccess(this,"observe")&&this.getIsEnabled()?t.src=this.__src:t.src=""},_.prototype.__processAccessConfig=function(){s.prototype.__processAccessConfig.call(this),this.__processSrc()},_.prototype.__processIsEnabled=function(){s.prototype.__processIsEnabled.call(this),this.__processSrc()},_.prototype.__onLoad=function(){var e=this;return function(t){!0===e.getIsEnabled()&&(e.__processWidth(),e.__processHeight(),o.EventProvider.raise(e.__id+".onLoad",t))}},r=_,e.TcHmiIFrame=r,t.register("tchmi-iframe",o.Controls.Beckhoff.TcHmiIFrame,"Beckhoff/TcHmiIFrame/","Beckhoff/TcHmiIFrame/Template.html")}(TcHmi=TcHmi||{});