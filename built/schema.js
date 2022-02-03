"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
var load_files_1 = require("@graphql-tools/load-files");
var merge_1 = require("@graphql-tools/merge");
// import { makeExecutableSchema } from "apollo-server"
// import { makeExecutableSchema } from "@graphql-tools/schema"
var loadedTypes = (0, load_files_1.loadFilesSync)("".concat(__dirname, "/**/*.typeDefs.*"));
var loadResolver = (0, load_files_1.loadFilesSync)("".concat(__dirname, "/**/*.resolvers.*"));
exports.typeDefs = (0, merge_1.mergeTypeDefs)(loadedTypes);
exports.resolvers = (0, merge_1.mergeResolvers)(loadResolver);
// export const schema = makeExecutableSchema({ typeDefs, resolvers });
