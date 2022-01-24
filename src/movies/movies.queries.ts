import client from "../client";
import { resolver } from "../type";

const resolvers:resolver = {
  Query: {
    movie:(_,{id}) => client.movie.findUnique({
      where:{
        id
      }
    }),
    movies:() => client.movie.findMany()
  }
}
export default resolvers;