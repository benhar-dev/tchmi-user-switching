var TcHmi;!function(s){var e,c;e=s.Functions||(s.Functions={}),(c=e.System||(e.System={})).TeachAsNewRecipe=function(c,i,e,r){i&&e?s.Server.RecipeManagement.teachAsNewRecipe(i,null,e,r,function(e){return e.error?void c.error(e.error,{code:e.error,message:s.Errors[e.error],reason:"Function: TeachAsNewRecipe, Recipe "+i+" teaching failed",domain:"Function",errors:e.details?[e.details]:void 0}):(s.Log.info("Recipe "+i+" teached successfull."),void c.success())}):c.success()},e.registerFrameworkFunction("TeachAsNewRecipe",c.TeachAsNewRecipe,"System/TeachAsNewRecipe/TeachAsNewRecipe.function.json")}(TcHmi=TcHmi||{});