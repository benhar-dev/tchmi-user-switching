var TcHmi;!function(i){var e,c;e=i.Functions||(i.Functions={}),(c=e.System||(e.System={})).TeachRecipe=function(c,r){r?i.Server.RecipeManagement.teach(r,null,function(e){return e.error?void c.error(e.error,{code:e.error,message:i.Errors[e.error],reason:"Function: TeachRecipe, Recipe "+r+" teaching failed",domain:"Function",errors:e.details?[e.details]:void 0}):(i.Log.info("Recipe "+r+" teached successfull."),void c.success())}):c.success()},e.registerFrameworkFunction("TeachRecipe",c.TeachRecipe,"System/TeachRecipe/TeachRecipe.function.json")}(TcHmi=TcHmi||{});