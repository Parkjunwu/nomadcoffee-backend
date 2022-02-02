import { protectResolver } from "../../shared";
import { Resolver } from "../../type";

const resolver: Resolver = {
  Mutation: {
    createCoffeeShop:protectResolver(async(_,{name,latitude,longitude,photoUrlArr,categories},{client,loggedInUser}) => {
      // photoUrlArr.map((url:string)=>({url}))
      if(!name) {
        return {ok:false, error:"Please write coffee shop's name"}
      }
      if(!latitude || !longitude) {
        return {ok:false, error:"Please write coffee shop's position"}
      }
      try {
        const ok = await client.coffeeShop.create({
          data:{
            name,
            latitude,
            longitude,
            user:{
              connect:{
                id:loggedInUser?.id
              }
            },
            ...( photoUrlArr && {
              photos:{
                create: photoUrlArr.map((url:string) => ({url}) )
              }
            }),
            ...(categories && {
              categories:{
                connectOrCreate:{
                  where:{
                    name:categories
                  },
                  create:{
                    name:categories,
                    //// slug name 전부 다 들어온거 그대로 씀.
                    slug:categories,
                  }
                }
              }
            })
          }
        })
        if(ok){
          return {ok:true}
        } else {
          return {ok:false, error: "Cannot create CoffeeShop"}
        }
      } catch (e) {
        console.log(e);
        return {ok:false, error: "Unknown Server Error"}
      }
    })
  }
}
export default resolver;