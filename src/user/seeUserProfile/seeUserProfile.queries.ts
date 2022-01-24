import client from "../../client";
import { resolver } from "../../type";

const resolvers:resolver = {
  Query: {
    seeUserProfile: (_,{id}) => client.user.findUnique({
      where:{
        id
      }
    })
  }
}
export default resolvers;