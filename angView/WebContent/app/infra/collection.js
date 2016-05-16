System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var List, Map;
    return {
        setters:[],
        execute: function() {
            List = (function () {
                function List() {
                    this.items = [];
                }
                List.prototype.size = function () {
                    return this.items.length;
                };
                List.prototype.add = function (value) {
                    this.items.push(value);
                };
                List.prototype.addAll = function (value) {
                    for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                        var item = value_1[_i];
                        this.items.push(item);
                    }
                };
                List.prototype.get = function (index) {
                    return this.items[index];
                };
                List.prototype.sort = function () {
                    return this.items.sort();
                };
                return List;
            }());
            exports_1("List", List);
            Map = (function () {
                function Map() {
                    this.items = {};
                }
                Map.prototype.add = function (key, value) {
                    this.items[key] = value;
                };
                Map.prototype.has = function (key) {
                    return key in this.items;
                };
                Map.prototype.get = function (key) {
                    return this.items[key];
                };
                return Map;
            }());
            exports_1("Map", Map);
        }
    }
});
//# sourceMappingURL=collection.js.map