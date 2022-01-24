import { gql } from "apollo-server";

const seeUserProfile = gql`
  type Query {
    seeUserProfile(id:Int!): User
  }
`;

export default seeUserProfile;