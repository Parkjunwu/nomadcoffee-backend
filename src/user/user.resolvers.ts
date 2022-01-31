import { Resolver } from "../type";

const resolvers:Resolver = {
  User: {
    totalFollowers:(root,_,{client})=>client.user.count({
      where:{
        following:{
          some:{
            id:root.id
          }
        }
      }
    }),
    totalFollowing:(root,_,{client})=>client.user.count({
      where:{
        follower:{
          some:{
            id:root.id
          }
        }
      }
    }),
    isMe:(root,_,{loggedInUser})=> {
      // if(!loggedInUser) { return false }
      return root.id === loggedInUser?.id;
    },
    isFollowing:async(root,_,{loggedInUser,client})=>{
      if(!loggedInUser) { return null };
      const isfollow = await client.user.count({
        where:{
          id:root.id,
          follower:{
            some:{
              id:loggedInUser.id
            }
          }
        }
      });
      return Boolean(isfollow)
    }
  }
}
export default resolvers;