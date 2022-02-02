import { gql } from "apollo-server";

const User = gql`
  type User {
    id:Int!
    username:String!
    email:String!
    name:String!
    location:String!
    avatarURL:String
    githubUsername:String

    # follower:[User]
    # following:[User]
    totalFollowers:Int!
    totalFollowing:Int!

    isMe:Boolean!
    isFollowing:Boolean

    coffeeShop:CoffeeShop
    createdAt:String!
    updatedAt:String!
  }
`;

export default User;