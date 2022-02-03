"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolver = {
    Query: {
        seeCoffeeShop: function (_, _a, _b) {
            var id = _a.id;
            var client = _b.client;
            return client.coffeeShop.findUnique({
                where: {
                    id: id
                },
                // include:{
                //   user:{
                //     select:{
                //       id:true,
                //     },
                //   },
                //   photos:{
                //     select:{
                //       url:true,
                //       id:true,
                //     },
                //   },
                //   categories:{
                //     select:{
                //       id:true,
                //       name:true,
                //     },
                //   },
                // }
            });
        }
    }
};
exports.default = resolver;
