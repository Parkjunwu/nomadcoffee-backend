import { Resolver } from "../../type";

const resolver:Resolver = {
  Query: {
    seeFollowing:(_,{id},{client}) => client.user.findMany({
      where:{
        follower:{
          some:{
            id
          }
        }
      },
      select:{
        id:true,
        username:true,
        avatarURL:true,
      },
      take:5,
      skip:1,
      cursor:{
        id
      }
    })
  }
}
export default resolver;