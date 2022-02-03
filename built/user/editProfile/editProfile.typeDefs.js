"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
exports.default = (0, apollo_server_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  \n  type Mutation {\n    editProfile(\n      id:Int!\n      name:String\n      password:String\n      location:String\n      avatarURL:Upload\n      githubUsername:String\n    ):MutationResult!\n  }\n"], ["\n  \n  type Mutation {\n    editProfile(\n      id:Int!\n      name:String\n      password:String\n      location:String\n      avatarURL:Upload\n      githubUsername:String\n    ):MutationResult!\n  }\n"])));
var templateObject_1;
