import { ApolloServer } from "apollo-server-express";
import "dotenv/config" 
import { typeDefs,resolvers } from "./schema";
import * as jwt from "jsonwebtoken"
import client from "./client";
import * as express from "express"
import * as http from "http"

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context:async(context)=>{
    try {
      const token = context.req.headers.token
      const secretKey = process.env.SECRET_KEY
      if(typeof token === "string" && secretKey){
        const decoded:any = jwt.verify(token, secretKey)
        console.log(decoded)
        const username = decoded.username
        const loggedInUser = await client.user.findUnique({
          where:{
            username
          },
        })
        // console.log(loggedInUser)
        return {loggedInUser, client}
      }
    } catch (e) {
      console.log("error : " + e)
      return {loggedInUser:null, client};
    }
  },
});

const PORT = process.env.PORT;

const app = express();
app.use("/static",express.static("uploads"));
server.applyMiddleware({ app });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);
// app.listen({ port: PORT }, () => {
//   console.log(`🚀Server is running on http://localhost:${PORT} ✅`);
// });
httpServer.listen(PORT, () => {
  console.log(`🚀Server is running on http://localhost:${PORT} ✅`);
});
