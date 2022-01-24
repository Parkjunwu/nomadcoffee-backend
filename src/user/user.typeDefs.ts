import { gql } from "apollo-server";

const User = gql`
  type User {
    id:Int!
    username:String!
    email:String!
    createdAt:String!
    updatedAt:String!
    birthday:Int
    avatar:String
  }
`;

export default User;