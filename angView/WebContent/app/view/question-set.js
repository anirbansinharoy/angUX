System.register(['angular2/core', 'angular2/common', 'app/model/question', "app/pipe/orderBy"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, common_2, question_1, orderBy_1;
    var QuestionSetForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
            },
            function (question_1_1) {
                question_1 = question_1_1;
            },
            function (orderBy_1_1) {
                orderBy_1 = orderBy_1_1;
            }],
        execute: function() {
            QuestionSetForm = (function () {
                function QuestionSetForm(fb) {
                    this.fb = fb;
                    this.newQuestion = new question_1.Question();
                }
                QuestionSetForm.prototype.ngOnInit = function () {
                    this.form = this.fb.group({
                        'serial': new common_1.Control(this.newQuestion.serial, common_2.Validators.required),
                        'marks': new common_1.Control(this.newQuestion.serial, common_2.Validators.required),
                        'content': new common_1.Control(this.newQuestion.content, common_2.Validators.required)
                    });
                };
                QuestionSetForm.prototype.addQuestion = function () {
                    if (this.newQuestion.serial && this.form.valid) {
                        this.ref.list.push(this.newQuestion);
                        this.newQuestion = new question_1.Question();
                    }
                    else {
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', question_1.QuestionSet)
                ], QuestionSetForm.prototype, "ref", void 0);
                QuestionSetForm = __decorate([
                    core_1.Component({
                        selector: 'question-set',
                        template: "\n        \n            <table class=\"table\"> \n                <tr>\n                    <th class=\"\">Sr No</th>\n                    <th class=\"\">Question</th>\n                    <th class=\"\">Marks</th>\n                    <th class=\"\">Overall: {{ref.overallMarks}}</th>\n                </tr>\n                <tr *ngFor=\"#question of ref.list | orderBy:'serial'\">\n                    \n                    <td class=\"\">\n                        <div class=\"input-group\">\n                        <input class=\"form-control\"  type=\"text\" [(ngModel)]=\"question.serial\" pattern=\"-?[0-9]*(.[0-9]+)?\" />\n                        </div>\n                    </td>\n                    <td class=\"\">\n                        <div class=\"input-group\">\n                        <input class=\"form-control\"  type=\"text\" [(ngModel)]=\"question.content\" />\n                        </div>\n                    </td>\n                    <td class=\"\">\n                        <div class=\"input-group\">\n                        <input class=\"form-control\"  type=\"text\" [(ngModel)]=\"question.marks\" pattern=\"-?[0-9]*(.[5])?\"/>\n                        </div>\n                    </td>\n                    \n                </tr>\n            </table>\n    <form [ngFormModel]=\"form\">\n            <table class=\"table\">         \n                <tr >\n                    <td><div class=\"input-group\">\n                        <input class=\"form-control\" ngControl=\"serial\"  type=\"text\" [(ngModel)] = \"newQuestion.serial\" pattern=\"-?[0-9]*(.[0-9]+)?\" placeholder=\"Enter a number\"/>                        \n                        </div>\n                    </td>\n                    <td><div class=\"input-group\">\n                        <input class=\"form-control\" ngControl=\"content\" type=\"text\" [(ngModel)]=\"newQuestion.content\" />\n                        </div>\n                    </td>\n                    <td><div class=\"input-group\">\n                        <input class=\"form-control\" ngControl=\"marks\" type=\"text\" [(ngModel)]=\"newQuestion.marks\" pattern=\"-?[0-9]*(.[5])?\" placeholder=\"Enter a number and/or half, eg 3 or 3.5\"/>\n                        </div>\n                    </td>\n                    <td>\n                        <button type=\"submit\" class=\"btn btn-default\" (click)=\"addQuestion()\" [disabled]=\"!form.valid\">Add</button>\n                    </td>\n                </tr>\n            </table>\n    </form>\n",
                        pipes: [orderBy_1.OrderBy]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object])
                ], QuestionSetForm);
                return QuestionSetForm;
                var _a;
            }());
            exports_1("QuestionSetForm", QuestionSetForm);
        }
    }
});
//# sourceMappingURL=question-set.js.map