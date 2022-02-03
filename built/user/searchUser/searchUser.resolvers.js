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
        searchUser: function (_, _a, _b) {
            var keyword = _a.keyword, cursor = _a.cursor;
            var client = _b.client;
            return client.user.findMany(__assign({ where: {
                    username: {
                        contains: keyword
                    }
                }, take: 10 }, (cursor && { skip: 1, cursor: { id: cursor } })));
        }
    }
};
exports.default = resolver;
