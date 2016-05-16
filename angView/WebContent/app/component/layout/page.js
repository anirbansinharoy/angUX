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
    var _2ColumnLayout, _3ColumnLayout, _2RowLayout;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            _2ColumnLayout = (function () {
                function _2ColumnLayout() {
                }
                _2ColumnLayout = __decorate([
                    core_1.Component({
                        selector: '2ColLayout',
                        template: "\n        <table>\n            <tr><td><ng-content select='left'/></td><td><ng-content select='right'/></td></tr>\n        </table>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], _2ColumnLayout);
                return _2ColumnLayout;
            }());
            exports_1("_2ColumnLayout", _2ColumnLayout);
            _3ColumnLayout = (function () {
                function _3ColumnLayout() {
                }
                _3ColumnLayout = __decorate([
                    core_1.Component({
                        selector: '3ColLayout',
                        template: "\n        <table>\n            <tr><td><ng-content select='left'/></td><td><ng-content select='center'/></td><td><ng-content select='right'/></td></tr>\n        </table>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], _3ColumnLayout);
                return _3ColumnLayout;
            }());
            exports_1("_3ColumnLayout", _3ColumnLayout);
            _2RowLayout = (function () {
                function _2RowLayout() {
                }
                _2RowLayout = __decorate([
                    core_1.Component({
                        selector: '2RowLayout',
                        template: "\n        <table>\n            <tr><td><ng-content select='top'/></td></tr>\n            <tr><td><ng-content select='middle'/></td></tr>\n        </table>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], _2RowLayout);
                return _2RowLayout;
            }());
            exports_1("_2RowLayout", _2RowLayout);
        }
    }
});
//# sourceMappingURL=page.js.map