System.register(['angular2/core', '../widget/panel', '../widget/datepicker'], function(exports_1, context_1) {
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
    var core_1, panel_1, datepicker_1;
    var SamplePage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (panel_1_1) {
                panel_1 = panel_1_1;
            },
            function (datepicker_1_1) {
                datepicker_1 = datepicker_1_1;
            }],
        execute: function() {
            SamplePage = (function () {
                function SamplePage() {
                    this.selDate = 'MM/DD/YYYY';
                    this.minDate = '01/01/2016';
                    this.maxDate = '12/31/2017';
                    this.disableDays = [0, 6];
                    this.toContainPrevMonth = false;
                    this.toContainNextMonth = false;
                    this.value = '';
                }
                SamplePage.prototype.setInputDate = function (event) {
                    this.value = event.target.value;
                };
                SamplePage.prototype.setDate = function (date) {
                    this.selDate = date;
                };
                SamplePage = __decorate([
                    core_1.Component({
                        selector: 'sample-page',
                        template: "\n\n    <br/>\n    <panel>\n      <panel-title>Sample title</panel-title>\n      <panel-content>Content</panel-content>\n    </panel>\n    <panel>\n      <panel-title>Sample title</panel-title>\n      <panel-content>Content</panel-content>\n    </panel>\n    <br/>\n    <input #dateText type='text' value={{selDate}} (change)=\"setInputDate($event)\"/>\n    <date-picker \n                [value]=\"value\"\n                [minDate]=\"minDate\" \n                [maxDate]=\"maxDate\"\n                [disableDays]=\"disableDays\"\n                [toContainPrevMonth]=\"toContainPrevMonth\"\n                [toContainNextMonth]=\"toContainNextMonth\"\n                (selectedDate)='setDate($event)'></date-picker>\n  ",
                        directives: [panel_1.Panel, datepicker_1.DatePickerComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SamplePage);
                return SamplePage;
            }());
            exports_1("SamplePage", SamplePage);
        }
    }
});
//# sourceMappingURL=sample.js.map