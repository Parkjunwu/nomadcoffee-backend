import { Resolver } from "../../type";

const resolver: Resolver = {
  Query: {
    seeCoffeeShops:(_,{cursor},{client}) => client.coffeeShop.findMany({
      take:10,
      ...(cursor && {
        cursor:{
          id:cursor
        },
        skip:1,
      })
    })
  }
}

export default resolver;