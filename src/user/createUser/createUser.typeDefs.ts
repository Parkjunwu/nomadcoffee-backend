import { gql } from "apollo-server";

const createUser = gql`
  type Mutation {
    createUser(
      username:String!
      password:String!
      email:String!
      birthday:String
      avatar:String
    ):MutationResult!
  }
`;
export default createUser;