import { gql } from "apollo-server-express";

export default gql`
  type SeeUserResult {
    ok:Boolean!
    error:String
    wantFollowers:Boolean
    user:User
    cursor:Int
    followers:[User]
    following:[User]
  }
  type Query {
    seeUser(
      id:Int!,
      wantFollowers:Boolean!,
      cursor:Int
    ):SeeUserResult!
  }
  # type Query {
  #   seeUser(
  #     id:Int!,
  #     wantFollowers:Boolean!,
  #     cursor:Int
  #   ):User
  # }
`;