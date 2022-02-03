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
        seeCategory: function (_, _a, _b) {
            var categoryId = _a.categoryId, cursor = _a.cursor;
            var client = _b.client;
            return client.coffeeShop.findMany(__assign({ where: {
                    categories: {
                        some: {
                            id: categoryId
                        }
                    }
                }, take: 10 }, (cursor && {
                cursor: {
                    id: cursor
                },
                skip: 1,
            })));
        }
    }
};
exports.default = resolver;
