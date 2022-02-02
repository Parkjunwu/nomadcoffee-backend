import { protectResolver } from "../../shared";
import { Resolver } from "../../type";

const resolver:Resolver = {
  Query: {
    searchUser:(_,{keyword,cursor},{client}) => {
      return client.user.findMany({
      where:{
        username:{
          contains:keyword
        }
      },
      take:10,
      ...(cursor && {skip:1,cursor:{id:cursor}})
    })}
  }
}
export default resolver;