import client from "../client";
import { resolver } from "../type";

const resolvers:resolver = {
  Mutation:{
    createMovie:(_,{title,year,genre})=>client.movie.create({
      data:{
        title,year,genre
      }
    }),
    deleteMovie: (_,{id})=>client.movie.delete({where:{id}}),
    updateMovie:(_,{id,title,year,genre})=>client.movie.update({
      where:{
        id
      },
      data:{
        title,year,genre
      }
    })
  }
}
export default resolvers;