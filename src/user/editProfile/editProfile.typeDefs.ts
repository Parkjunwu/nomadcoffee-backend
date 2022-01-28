import { gql } from "apollo-server";

export default gql`
  
  type Mutation {
    editProfile(
      id:Int!
      name:String
      password:String
      location:String
      avatarURL:Upload
      githubUsername:String
    ):MutationResult!
  }
`;