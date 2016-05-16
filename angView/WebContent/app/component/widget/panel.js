System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Panel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Panel = (function () {
                function Panel() {
                }
                Panel = __decorate([
                    core_1.Component({
                        selector: 'panel',
                        styles: [
                            ".panel {\n      width: auto;\n      display: inline-block;\n    #  border: 1px solid black;\n    }\n    .panel-title {\n      border-bottom: 1px solid black;\n      background-color: #eee;\n    }\n    .panel-content,\n    .panel-title {\n      padding: 5px;\n    }"
                        ],
                        template: "\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <ng-content select=\"panel-title\"></ng-content>\n      </div>\n      <div class=\"panel-body\">\n        <ng-content select=\"panel-content\"></ng-content>\n      </div>\n    </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Panel);
                return Panel;
            }());
            exports_1("Panel", Panel);
        }
    }
});
//# sourceMappingURL=panel.js.map