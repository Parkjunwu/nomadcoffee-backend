"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var User = (0, apollo_server_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type User {\n    id:Int!\n    username:String!\n    email:String!\n    name:String!\n    location:String!\n    avatarURL:String\n    githubUsername:String\n\n    # follower:[User]\n    # following:[User]\n    totalFollowers:Int!\n    totalFollowing:Int!\n\n    isMe:Boolean!\n    isFollowing:Boolean\n\n    coffeeShop:CoffeeShop\n    createdAt:String!\n    updatedAt:String!\n  }\n"], ["\n  type User {\n    id:Int!\n    username:String!\n    email:String!\n    name:String!\n    location:String!\n    avatarURL:String\n    githubUsername:String\n\n    # follower:[User]\n    # following:[User]\n    totalFollowers:Int!\n    totalFollowing:Int!\n\n    isMe:Boolean!\n    isFollowing:Boolean\n\n    coffeeShop:CoffeeShop\n    createdAt:String!\n    updatedAt:String!\n  }\n"])));
exports.default = User;
var templateObject_1;
