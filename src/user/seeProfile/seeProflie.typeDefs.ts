import { gql } from "apollo-server";

const seeProfile = gql`
  type Query {
    seeProfile(id:Int!): User
  }
`;

export default seeProfile;