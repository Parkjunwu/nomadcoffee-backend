"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
exports.default = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type CoffeeShopPhoto {\n    id:     Int\n    url:    String\n    shop:   CoffeeShop\n  }\n  type CoffeeShop {\n    id:         Int\n    name:       String\n    latitude:   String\n    longitude:  String\n    user:       User\n    photos:     [CoffeeShopPhoto]\n    categories: [Category]\n  }\n  type Category {\n    id:     Int\n    name:   String\n    slug:   String\n    shops:  [CoffeeShop]\n    totalShops: Int\n  }\n"], ["\n  type CoffeeShopPhoto {\n    id:     Int\n    url:    String\n    shop:   CoffeeShop\n  }\n  type CoffeeShop {\n    id:         Int\n    name:       String\n    latitude:   String\n    longitude:  String\n    user:       User\n    photos:     [CoffeeShopPhoto]\n    categories: [Category]\n  }\n  type Category {\n    id:     Int\n    name:   String\n    slug:   String\n    shops:  [CoffeeShop]\n    totalShops: Int\n  }\n"])));
var templateObject_1;
