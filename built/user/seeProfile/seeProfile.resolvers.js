"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../../client");
var resolvers = {
    Query: {
        seeProfile: function (_, _a) {
            var id = _a.id;
            try {
                return client_1.default.user.findUnique({
                    where: {
                        id: id
                    }
                });
            }
            catch (e) {
                console.log(e);
                return null;
            }
        }
    }
};
exports.default = resolvers;
