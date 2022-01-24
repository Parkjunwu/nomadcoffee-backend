import { gql } from "apollo-server";

export default gql`
  type Movie {
    id: Int!
    title: String!
    year: Int!
    genre: String
    createdAt: String!
    updatedAt: String!
  }
  type Mutation {
    createMovie(
      title: String!
      year: Int!
      genre: String
    ): Movie
    deleteMovie(id: Int!):Movie
    updateMovie(
      id: Int!
      title: String
      year: Int
      genre: String
    ):Movie
  }
  type Query {
    movie(id:Int!): Movie
    movies: [Movie]
  }
`;
export const mutations = gql`
  type Mutation {
    createMovie(
      title: String!
      year: Int!
      genre: String
    ): Movie
    deleteMovie(id: Int!):Movie
    updateMovie(
      id: Int!
      title: String
      year: Int
      genre: String
    ):Movie
  }
`;
export const queries = gql`
  type Query {
    movie(id:Int!): Movie
    movies: [Movie]
  }
`;
