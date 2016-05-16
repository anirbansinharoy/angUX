System.register(['angular2/core', 'angular2/platform/browser', 'angular2/common', 'ng2-datepicker'], function(exports_1, context_1) {
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
    var core_1, browser_1, common_1, ng2_datepicker_1;
    var FancyButton, Panel, App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_datepicker_1_1) {
                ng2_datepicker_1 = ng2_datepicker_1_1;
            }],
        execute: function() {
            FancyButton = (function () {
                function FancyButton() {
                }
                FancyButton = __decorate([
                    core_1.Component({
                        selector: 'fancy-button',
                        template: '<button><ng-content></ng-content></button>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], FancyButton);
                return FancyButton;
            }());
            Panel = (function () {
                function Panel() {
                }
                Panel = __decorate([
                    core_1.Component({
                        selector: 'panel',
                        styles: [
                            ".panel {\n      width: auto;\n      display: inline-block;\n      border: 1px solid black;\n    }\n    .panel-title {\n      border-bottom: 1px solid black;\n      background-color: #eee;\n    }\n    .panel-content,\n    .panel-title {\n      padding: 5px;\n    }"
                        ],
                        template: "\n    <div class=\"panel\">\n      <div class=\"panel-title\">\n        <ng-content select=\"panel-title\"></ng-content>\n      </div>\n      <div class=\"panel-content\">\n        <ng-content select=\"panel-content\"></ng-content>\n      </div>\n    </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Panel);
                return Panel;
            }());
            App = (function () {
                function App() {
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n\n    <br/>\n    <panel>\n      <panel-title>Sample title</panel-title>\n      <panel-content>Content</panel-content>\n    </panel>\n    <panel>\n      <panel-title>Sample title</panel-title>\n      <panel-content>Content</panel-content>\n    </panel>\n    <br/>\n    <datepicker view-value=\"DD.MM.YYYY\" model-value=\"DD.MM.YYYY\" init-date=\"12.5.2017\"></datepicker>\n    <fancy-button>\n      <span>I will <i>be</i> projected</span>\n    </fancy-button>\n  ",
                        directives: [FancyButton, Panel, ng2_datepicker_1.DatePicker, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            exports_1("App", App);
            browser_1.bootstrap(App);
        }
    }
});
//# sourceMappingURL=app.js.map