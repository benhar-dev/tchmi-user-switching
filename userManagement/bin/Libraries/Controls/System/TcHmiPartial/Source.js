var TcHmi;!function(t){var e,o,i,l;function n(t,e,o){return i.call(this,t,e,o)||this}e=t.Controls||(t.Controls={}),o=e.System||(e.System={}),i=t.Controls.System.TcHmiContainerControl,__extends(n,i),n.prototype.__previnit=function(){if(this.__elementTemplateRoot=this.__element.find(".tchmi-partial-template"),0===this.__elementTemplateRoot.length)throw new Error("Invalid Template.html");i.prototype.__previnit.call(this)},n.prototype.__init=function(){i.prototype.__init.call(this);for(var t=0,e=this.__children.length;t<e;t++)this.__elementTemplateRoot.append(this.__children[t].getElement())},n.prototype.__attach=function(){i.prototype.__attach.call(this)},n.prototype.__detach=function(){i.prototype.__detach.call(this)},n.prototype.destroy=function(){i.prototype.destroy.call(this)},n.prototype.addChild=function(t,e){this.__addChild(t,e)},n.prototype.__addChild=function(t,e){if(i.prototype.__addChild.call(this,t,e),null==e||e<0)this.__elementTemplateRoot.append(t.getElement());else if(0!==e){var o=this.__elementTemplateRoot.children().eq(e-1);0===o.length?this.__elementTemplateRoot.append(t.getElement()):o.after(t.getElement())}else this.__elementTemplateRoot.prepend(t.getElement())},n.prototype.removeChild=function(t){this.__removeChild(t)},n.prototype.__removeChild=function(t){i.prototype.__removeChild.call(this,t)},l=n,o.TcHmiPartial=l,e.register("tchmi-partial",t.Controls.System.TcHmiPartial,"System/TcHmiPartial/","System/TcHmiPartial/Template.html")}(TcHmi=TcHmi||{});