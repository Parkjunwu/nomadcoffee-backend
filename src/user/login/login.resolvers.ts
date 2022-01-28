import client from "../../client";
import { Resolver } from "../../type";
import * as bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"

const resolvers: Resolver = {
  Mutation:{
    login: async(_, {username, password:currentUserInputPassword}) => {
      try {
        if(!username || !currentUserInputPassword) {
          return {ok:false,error:"Invalid approach"}
        }
        const userOnDatabase = await client.user.findUnique({
          where:{
            username
          },
          select:{
            password:true
          }
        })
        if(!userOnDatabase) {
          return {ok:false,error:"There is no user."}
        }
        const isPasswordRight = await bcrypt.compare(currentUserInputPassword, userOnDatabase.password);
        if(!isPasswordRight) {
          return {ok:false,error:"Wrong password"};
        } else {
          ////
          const secretKey = process.env.SECRET_KEY
          //// 이렇게 써도 되나? secretKey 가 보일라나?
          if(secretKey) {
            const token = jwt.sign({ username }, secretKey);
            console.log(token);
            return {ok:true,token};
          }
          return {ok:false,error:"Server Error"}
        }
      } catch (e) {
        console.log(e);
        return {ok:false, error:"Unknown Error"}
      }
    }
  }
}
export default resolvers;