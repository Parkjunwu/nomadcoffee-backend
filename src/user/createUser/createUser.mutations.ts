import client from "../../client";
import { resolver } from "../../type";

const resolvers: resolver = {
  Mutation: {
    createUser: async(_,{username,password,email,birthday,avatar}) => {
      const ok = await client.user.create({
        data:{
          username,
          password,
          email,
          birthday,
          avatar
        }
      })
      if(ok){
        return {ok:true}
      } else {
        return {ok:false,error:"Can't create account"}
      }
    }
  }
};

export default resolvers;