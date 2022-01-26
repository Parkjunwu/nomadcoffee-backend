import { gql } from "apollo-server";

const createUser = gql`
  type Mutation {
    createUser(
      username:String!
      password:String!
      email:String!
      name:String!
      location:String!
      avatarURL:String
      githubUsername:String
    ):MutationResult!
  }
`;
export default createUser;