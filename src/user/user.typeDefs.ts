import { gql } from "apollo-server";

const User = gql`
  type User {
    id:Int!
    username:String!
    email:String!
    name:String!
    location:String!
    avatarURL:String
    githubUsername:String
    createdAt:String!
    updatedAt:String!
  }
`;

export default User;