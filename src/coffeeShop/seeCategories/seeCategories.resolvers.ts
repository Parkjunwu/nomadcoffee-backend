import { Resolver } from "../../type";

const resolver: Resolver = {
  Query: {
    seeCategories:(_,{categoryId,cursor},{client}) => {
      if (!categoryId) { 
        return client.category.findMany({
          take:3,
          ...(cursor && {
            cursor:{
              id:cursor
            },
            skip:1
          })
        });
      } else {
        return client.coffeeShop.findMany({
          take:5,
          ...(cursor && {
            cursor:{
              id:cursor
            },
            skip:1
          })
        });
      }
    }
  }
};

export default resolver;