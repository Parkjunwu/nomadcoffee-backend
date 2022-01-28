import { async_makeHashPassword, protectResolver } from "../../shared";
import { Resolver } from "../../type";
import { async_uploadPhoto } from "../../aws";

const resolver:Resolver = {
  Mutation:{
    editProfile:protectResolver(
      async(_,{id,name,password,location,avatarURL,githubUsername},{client,loggedInUser}) => {
        try{
          if(!name&&!location&&!avatarURL&&!password&&!githubUsername) {
            return {ok:false, error:"Nothing to change"};
          }
          if(id !== loggedInUser?.id){
            return {ok:false,error:"Cannot change another user's profile."};
          }
          const ok = await client.user.update({
            where:{
              id
            },
            data:{
              ...( name && {name}),
              ...( password && {password: await async_makeHashPassword(password)}),
              ...( location && {location}),
              ...( avatarURL && {avatarURL: await async_uploadPhoto(avatarURL,id)}),
              ...( githubUsername && {githubUsername}),
            },
            select:{
              id:true
            }
          })
          if(ok) {
            return {ok:true};
          } else {
            return {ok:false, error:"Database Error"};
          }
        } catch (e){
          console.log(e);
          return {ok:false, error:"Unknown Error"};
        }
      }
    )
  }
}
export default resolver;