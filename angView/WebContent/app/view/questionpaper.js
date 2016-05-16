System.register(['app/model/question', 'app/view/questionnaire', 'angular2/core', "app/pipe/orderBy", "app/service/gateway"], function(exports_1, context_1) {
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
    var question_1, questionnaire_1, core_1, core_2, orderBy_1, gateway_1;
    var QuestionPaper;
    return {
        setters:[
            function (question_1_1) {
                question_1 = question_1_1;
            },
            function (questionnaire_1_1) {
                questionnaire_1 = questionnaire_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (orderBy_1_1) {
                orderBy_1 = orderBy_1_1;
            },
            function (gateway_1_1) {
                gateway_1 = gateway_1_1;
            }],
        execute: function() {
            QuestionPaper = (function () {
                function QuestionPaper(service) {
                    var _this = this;
                    this.service = service;
                    this.questionnaires = [];
                    this.isNewTopic = false;
                    var qlist = [];
                    var qs;
                    var observable;
                    observable = this.service.fetchQuestionnaireList();
                    if (observable) {
                        observable.subscribe(function (res) {
                            if (_this.isArray(res)) {
                                qlist = res;
                            }
                            else if (_this.isArray(res.questionnaire)) {
                                qlist = res.questionnaire;
                            }
                            else {
                                qlist.push(res.questionnaire);
                            }
                            _this.questionnaires = qlist;
                        });
                    }
                    else {
                        this.questionnaires.push(new question_1.Questionnaire());
                        this.questionnaires[0].topic = "No questionnaire found";
                    }
                }
                QuestionPaper.prototype.onClick = function () {
                    this.isNewTopic = true;
                };
                QuestionPaper.prototype.showTopic = function (currentId) {
                    this.activeId = currentId;
                };
                QuestionPaper.prototype.addNew = function (topicName) {
                    if (topicName.value) {
                        var q = new question_1.Questionnaire();
                        q.sections = [];
                        q.topic = topicName.value;
                        var d = new Date();
                        q.id = d.getDate() + d.getTime() + d.getMilliseconds();
                        this.questionnaires.push(q);
                        this.isNewTopic = false;
                        this.activeId = -1;
                        q = new question_1.Questionnaire();
                        topicName.value = null;
                    }
                };
                QuestionPaper.prototype.cancel = function () {
                    this.isNewTopic = false;
                    this.activeId = -1;
                    q = new question_1.Questionnaire();
                };
                QuestionPaper.prototype.isArray = function (what) {
                    return Object.prototype.toString.call(what) === '[object Array]';
                };
                QuestionPaper = __decorate([
                    core_2.Component({
                        selector: "question-paper",
                        template: "\n<!--\n            <button class=\"mdl-button\" *ngIf=\"!isNewTopic\" (click)=\"onClick()\">\n                Create new questionnaire\n            </button>\n            <div *ngIf=\"isNewTopic\">\n                    <label class=\"mdl-textfield__label\" for=\"topicText\">New topic</label>\n                    <input class=\"mdl-textfield__input\" id=\"topicText\" #newTopic type=\"text\"/>\n                <br>\n                    <button class=\"mdl-button\" (click)=\"addNew(newTopic)\">Done</button>\n                    <button class=\"mdl-button\" (click)=\"cancel()\">Cancel</button>\n            </div>\n-->\n        <div class=\"container-fluid\">\n            <ul class=\"nav nav-tabs\">\n                \n                <li *ngFor=\"#qe of questionnaires\"><a href=\"#\" (click)=\"showTopic(qe.id)\">{{qe.topic}}</a></li>\n                <li ><a href=\"#\" (click)=\"showTopic(0)\">Create New</a></li>\n            </ul>\n            <div [class.hidden]=\"0!=activeId\">\n                <panel>\n                    <panel-title>\n                        <label class=\"\" for=\"topicText\">New topic</label>\n                        <input class=\"\" id=\"topicText\" #newTopic type=\"text\"/>\n                    </panel-title>\n                    <panel-content>\n                        <button class=\"button\" (click)=\"addNew(newTopic)\">Done</button>\n                        <button class=\"button\" (click)=\"cancel()\">Cancel</button>\n                    </panel-content>\n                </panel>\n            </div>\n            <div *ngFor=\"#qe of questionnaires\" [class.hidden]=\"qe.id!=activeId\">\n                <questionnaire [content]=\"qe\"></questionnaire>\n            </div>\n        </div>\n    ",
                        pipes: [orderBy_1.OrderBy],
                        providers: [gateway_1.ServiceGateway],
                        directives: [questionnaire_1.QuestionnaireForm]
                    }),
                    __param(0, core_1.Inject(gateway_1.ServiceGateway)), 
                    __metadata('design:paramtypes', [gateway_1.ServiceGateway])
                ], QuestionPaper);
                return QuestionPaper;
            }());
            exports_1("QuestionPaper", QuestionPaper);
        }
    }
});
//# sourceMappingURL=questionpaper.js.map