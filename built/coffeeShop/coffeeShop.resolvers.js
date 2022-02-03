"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolver = {
    Category: {
        totalShops: function (_a, _, _b) {
            var id = _a.id;
            var client = _b.client;
            return client.coffeeShop.count({
                where: {
                    categories: {
                        some: {
                            coffeeShopId: id
                        }
                    }
                }
            });
        }
    }
};
exports.default = resolver;
