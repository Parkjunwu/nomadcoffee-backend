import { Resolver } from "../../type";

const resolver: Resolver = {
  Query: {
    seeCoffeeShop:(_,{id},{client}) => client.coffeeShop.findUnique({
      where:{
        id
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
    })
  }
}

export default resolver;