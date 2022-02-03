"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var resolver = {
    Query: {
        seeCategories: function (_, _a, _b) {
            var categoryId = _a.categoryId, cursor = _a.cursor;
            var client = _b.client;
            if (!categoryId) {
                return client.category.findMany(__assign({ take: 3 }, (cursor && {
                    cursor: {
                        id: cursor
                    },
                    skip: 1
                })));
            }
            else {
                return client.coffeeShop.findMany(__assign({ take: 5 }, (cursor && {
                    cursor: {
                        id: cursor
                    },
                    skip: 1
                })));
            }
        }
    }
};
exports.default = resolver;
