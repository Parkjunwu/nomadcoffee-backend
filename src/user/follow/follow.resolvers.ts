import { protectResolver } from "../../shared";
import { Resolver } from "../../type";

const resolver: Resolver = {
  Mutation:{
    follow:protectResolver(async(_,{id},{client,loggedInUser}) => {
      try{
        const ok = await client.user.findUnique({
          where:{
            id
          },
          select:{
            id:true
          }
        })
        if(!ok){
          return { ok:false, error:"User not found" }
        }
        const result = await client.user.update({
          where:{
            id
          },
          data:{
            follower:{
              connect:{
                id:loggedInUser?.id
              }
            }
          },
          select:{
            id:true
          }
        })
        if(result) {
          return {ok:true}
        } else {
          return {ok:false,error:"Unknown error"}
        }
      } catch (e) {
        console.log(e)
        return {ok:false,error:"Server error"}
      }
    })
  }
}
export default resolver;