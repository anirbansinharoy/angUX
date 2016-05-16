System.register(['angular2/core', 'app/model/question', 'app/component/widget/panel', 'app/view/question-set', "app/service/gateway"], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, question_1, panel_1, question_set_1, gateway_1;
    var QuestionnaireForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (question_1_1) {
                question_1 = question_1_1;
            },
            function (panel_1_1) {
                panel_1 = panel_1_1;
            },
            function (question_set_1_1) {
                question_set_1 = question_set_1_1;
            },
            function (gateway_1_1) {
                gateway_1 = gateway_1_1;
            }],
        execute: function() {
            QuestionnaireForm = (function () {
                function QuestionnaireForm() {
                }
                QuestionnaireForm.prototype.onClick = function () {
                    this.content.sections.push(new question_1.QuestionSet());
                };
                QuestionnaireForm.prototype.saveChanges = function (service) {
                    console.log(this.content);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', question_1.Questionnaire)
                ], QuestionnaireForm.prototype, "content", void 0);
                __decorate([
                    __param(0, core_1.Inject(gateway_1.ServiceGateway)), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [gateway_1.ServiceGateway]), 
                    __metadata('design:returntype', void 0)
                ], QuestionnaireForm.prototype, "saveChanges", null);
                QuestionnaireForm = __decorate([
                    core_1.Component({
                        selector: 'questionnaire',
                        template: "\n    <form action=\"#\">\n    <panel>\n        <panel-title>\n            <div class=\"row\">\n                <div class=\"btn-group col-md-1\">\n                  <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <span class=\"glyphicon glyphicon-menu-hamburger\" aria-hidden=\"true\"></span>\n                  </button>\n                   \n                  <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\" (click)=\"onClick()\">Add new question set</a></li>\n                    <li><a href=\"#\" (click)=\"saveChanges()\">Save this questionnaire</a></li>\n                  </ul>                   \n                </div>\n                <div class=\"col-md-11\"><h4>{{content.topic}}</h4></div>\n\n            </div>\n        </panel-title>        \n        <panel-content *ngFor=\"#section of content.sections\">\n            <question-set [ref]=\"section\"></question-set>            \n        </panel-content>\n        <!--\n        <panel-content>\n            <br>\n                <button class=\"mdl-button\" (click)=\"onClick()\">Add new question set</button>\n                <button class=\"mdl-button\" (click)=\"saveChanges()\">Save this questionnaire</button>\n            <br>\n        </panel-content>\n        -->\n    </panel>\n    </form>\n\n    ",
                        directives: [panel_1.Panel, question_set_1.QuestionSetForm]
                    }), 
                    __metadata('design:paramtypes', [])
                ], QuestionnaireForm);
                return QuestionnaireForm;
            }());
            exports_1("QuestionnaireForm", QuestionnaireForm);
        }
    }
});
//# sourceMappingURL=questionnaire.js.map