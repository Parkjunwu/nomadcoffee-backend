import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    editCoffeeShop(
      id:Int!,
      name:String,
      latitude:String,
      longitude:String,
      deletePhotoIdArr:[Int],
      addPhotoUrl:Upload,
      prevCategories:[String],
      categories:String
    ):MutationResult!
  }
`;