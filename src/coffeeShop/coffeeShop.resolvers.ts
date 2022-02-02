import { Resolver } from "../type";

const resolver:Resolver = {
  Category:{
    totalShops:({id},_,{client}) => client.coffeeShop.count({
      where:{
        categories:{
          some:{
            coffeeShopId:id
          }
        }
      }
    })
  }
};
export default resolver;