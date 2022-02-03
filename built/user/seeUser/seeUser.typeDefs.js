"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
exports.default = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type SeeUserResult {\n    ok:Boolean!\n    error:String\n    wantFollowers:Boolean\n    user:User\n    cursor:Int\n    followers:[User]\n    following:[User]\n  }\n  type Query {\n    seeUser(\n      id:Int!,\n      wantFollowers:Boolean!,\n      cursor:Int\n    ):SeeUserResult!\n  }\n  # type Query {\n  #   seeUser(\n  #     id:Int!,\n  #     wantFollowers:Boolean!,\n  #     cursor:Int\n  #   ):User\n  # }\n"], ["\n  type SeeUserResult {\n    ok:Boolean!\n    error:String\n    wantFollowers:Boolean\n    user:User\n    cursor:Int\n    followers:[User]\n    following:[User]\n  }\n  type Query {\n    seeUser(\n      id:Int!,\n      wantFollowers:Boolean!,\n      cursor:Int\n    ):SeeUserResult!\n  }\n  # type Query {\n  #   seeUser(\n  #     id:Int!,\n  #     wantFollowers:Boolean!,\n  #     cursor:Int\n  #   ):User\n  # }\n"])));
var templateObject_1;
