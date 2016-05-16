System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Question, QuestionSet, Questionnaire;
    return {
        setters:[],
        execute: function() {
            Question = (function () {
                function Question(s, text, m) {
                    this.content = text;
                    this.serial = s;
                    this.marks = m;
                }
                return Question;
            }());
            exports_1("Question", Question);
            QuestionSet = (function () {
                function QuestionSet() {
                    this.list = [];
                }
                return QuestionSet;
            }());
            exports_1("QuestionSet", QuestionSet);
            Questionnaire = (function () {
                function Questionnaire() {
                    this.sections = [];
                }
                return Questionnaire;
            }());
            exports_1("Questionnaire", Questionnaire);
        }
    }
});
//# sourceMappingURL=question.js.map