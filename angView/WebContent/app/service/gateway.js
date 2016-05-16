System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var ServiceGateway;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            ServiceGateway = (function () {
                function ServiceGateway(http) {
                    this.http = http;
                    this.url = "http://localhost:8090/";
                }
                ServiceGateway.prototype.fetchQuestionnaireList = function () {
                    var qlist = [];
                    var observable = this.http.get(this.url + "/questionnaires")
                        .map(function (response) {
                        return response.json();
                    });
                    return observable;
                };
                ServiceGateway.prototype.saveQuestionnaire = function (questionnaire) {
                    var observable = this.http.put(this.url + "/questionnaires/add", questionnaire)
                        .map(function (response) {
                        return response.json();
                    });
                    return observable;
                };
                ServiceGateway = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], ServiceGateway);
                return ServiceGateway;
                var _a;
            }());
            exports_1("ServiceGateway", ServiceGateway);
        }
    }
});
//# sourceMappingURL=gateway.js.map