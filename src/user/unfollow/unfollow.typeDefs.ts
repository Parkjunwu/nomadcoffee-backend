import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    unfollow(
      id:Int!
    ):MutationResult!
  }
`;