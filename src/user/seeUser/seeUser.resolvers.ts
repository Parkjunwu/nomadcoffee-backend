
import { Resolver } from "../../type";

const resolvers:Resolver = {
  Query: {
    seeUser: async(_,{id,wantFollowers,cursor},{client}) => {
      try {
        const ok = await client.user.findUnique({
          where:{
            id
          },
          select:{
            id:true
          }
        });
        if(!ok) {
          return {
            ok:false, error:"User not found"
          }
        } else {
          return {
            ok:true, user:ok, wantFollowers, cursor
          }
        }
      } catch(e) {
        console.log(e);
        return {
          ok:false, error:"Server error"
        };
      }
    }
  },
  SeeUserResult:{
    followers:async({ok,user,wantFollowers,cursor},_,{client})=>{
      console.log(user)
      if(!ok || !wantFollowers) {
        return null
      };
      return await client.user.findUnique({
        where:{
          id:user.id
        },
        select:{follower:true}
      }).follower({
        take:2,
        ...( cursor && {skip:1, cursor:{id:cursor}} ),
      })
    },
    following:async({ok,user,wantFollowers,cursor},_,{client})=>{
      if(!ok || wantFollowers) {
        return null
      };
      return await client.user.findUnique({
        where:{
          id:user.id
        },
        select:{following:true}
      }).following({
        take:2,
        ...( cursor && {skip:1, cursor:{id:cursor}} ),
      })
    },
  }
}
export default resolvers;