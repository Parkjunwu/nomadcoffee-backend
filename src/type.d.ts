import { PrismaClient, User } from "@prisma/client";

interface Context {
  loggedInUser: User | null;
  client: PrismaClient;
}
export interface ResolverFn {
  (root: any, args: any, context: Context, info: any): any
}

export interface Resolver  {
  [key:string]: {
    [key:string]: ResolverFn
  }
}