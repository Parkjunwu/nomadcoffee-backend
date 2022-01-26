import client from "../../client";
import { resolver } from "../../type";
import * as bcrypt from "bcrypt"

const resolvers: resolver = {
  Mutation: {
    createUser: async(_,{username,password,email,name,location,avatarURL,githubUsername}) => {
      // try{
        if(!username || !email) {
          return {ok:false, error:"username and email is required. Please check and write that."}
        }
        if( !password || !name || !location) {
          return {ok:false, error:"Something required is not written. Please check and write that."}
        }
        const isSameUser = await client.user.findFirst({
          where:{
            OR:[
              {username},
              {email},
            ]
          },
          select:{
            id:true
          }
        })
        console.log(isSameUser)
        if(isSameUser){
          return {ok:false, error:"There is already same user. Please rename."}
        }
        const saltRounds = 10;
        const storeInDBPassword = await bcrypt.hash(password, saltRounds)
        // bcrypt.compare(password, storeInDBPassword)
        if(!storeInDBPassword) {
          return {ok:false, error:"Cannot create account. Server error."}
        }
        const ok = await client.user.create({
          data:{
            username,
            password:storeInDBPassword,
            email,
            name,
            location,
            avatarURL,
            githubUsername
          },
          select:{
            id:true
          }
        })
        // console.log(ok);
        if(ok){
          return {ok:true}
        } else {
          return {ok:false, error:"Cannot create account. Server Database error."}
        }
      // } catch (e) {
      //   console.log(e);
      //   return {ok:false, error:"Cannot create account. Unknown error."}
      // }
    }
  }
};

export default resolvers;