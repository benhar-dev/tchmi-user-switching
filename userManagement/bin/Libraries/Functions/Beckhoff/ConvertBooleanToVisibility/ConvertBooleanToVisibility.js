var TcHmi;!function(n){var o,i;o=n.Functions||(n.Functions={}),(i=o.Beckhoff||(o.Beckhoff={})).ConvertBooleanToVisibility=function(o,i){return void 0===i&&(i="Hidden"),!0===n.ValueConverter.toBoolean(o)?"Visible":("string"==typeof i&&0===i.length&&(i="Hidden"),i)},o.registerFrameworkFunction("ConvertBooleanToVisibility",i.ConvertBooleanToVisibility,"Beckhoff/ConvertBooleanToVisibility/ConvertBooleanToVisibility.function.json")}(TcHmi=TcHmi||{});