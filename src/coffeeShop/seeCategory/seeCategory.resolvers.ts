import { Resolver } from "../../type";

const resolver: Resolver = {
  Query: {
    seeCategory:(_,{categoryId,cursor},{client}) => client.coffeeShop.findMany({
      where:{
        categories:{
          some:{
            id:categoryId
          }
        }
      },
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