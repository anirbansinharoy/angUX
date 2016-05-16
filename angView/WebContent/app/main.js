System.register(["angular2/platform/browser", 'app/view/questionpaper', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, questionpaper_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (questionpaper_1_1) {
                questionpaper_1 = questionpaper_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(questionpaper_1.QuestionPaper, [http_1.HTTP_BINDINGS], [http_1.HTTP_PROVIDERS]).catch(console.error);
        }
    }
});
//# sourceMappingURL=main.js.map