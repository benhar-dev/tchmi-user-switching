var TcHmi;!function(i){var n,e;n=i.Functions||(i.Functions={}),(e=n.System||(n.System={})).RemoveBinding=function(n,e){if(!n)throw new Error("Invalid value: '"+n+"' for parameter: 'control'.");if(!e)throw new Error("Invalid value: '"+e+"' for parameter: 'propertyName'.");i.Binding.removeEx2(null,e,n)},n.registerFrameworkFunction("RemoveBinding",e.RemoveBinding,"System/RemoveBinding/RemoveBinding.function.json")}(TcHmi=TcHmi||{});