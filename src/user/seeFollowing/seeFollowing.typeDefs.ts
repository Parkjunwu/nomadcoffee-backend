import { gql } from "apollo-server-express";

export default gql`
  type Query {
    seeFollowing(
      id:Int!
    ): [User]
  }
`;