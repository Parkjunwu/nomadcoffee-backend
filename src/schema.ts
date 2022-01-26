import { loadFilesSync } from "@graphql-tools/load-files"
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge"
// import { makeExecutableSchema } from "apollo-server"
import { makeExecutableSchema } from "@graphql-tools/schema"

const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.*`);
const loadResolver = loadFilesSync(`${__dirname}/**/*.{queries,mutations}.*`);

export const typeDefs = mergeTypeDefs(loadedTypes);
export const resolvers:any = mergeResolvers(loadResolver);
export const schema = makeExecutableSchema({ typeDefs, resolvers });