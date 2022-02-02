import { gql } from "apollo-server-express";

export default gql`
  type Query {
    seeCategories(
      categoryId:Int
      cursor:Int
    ):[Category]
  }
`;