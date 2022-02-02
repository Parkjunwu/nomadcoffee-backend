import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    createCoffeeShop(
      name:String,
      latitude:String,
      longitude:String,
      # photoUrlArr:[Photo],
      photoUrlArr:[String],
      categories:String
    ):MutationResult!
  }
`;