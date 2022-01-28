import client from "../../client";
import { Resolver } from "../../type";

const resolvers:Resolver = {
  Query: {
    seeProfile: (_,{id}) => {
      try {
        return client.user.findUnique({
          where:{
            id
          }
        });
      } catch(e) {
        console.log(e);
        return null;
      }
    }
  }
}
export default resolvers;