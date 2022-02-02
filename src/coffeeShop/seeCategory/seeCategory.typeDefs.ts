import { gql } from "apollo-server-express";

export default gql`
  type Query {
    seeCategory(
      categoryId:Int!,
      cursor:Int
    ):[CoffeeShop]
  }
`;