import { Context, ResolverFn } from "./type";
import * as bcrypt from "bcrypt"

export const protectResolver = (resolver:ResolverFn) => (root: any, args: any, context: Context, info: any) => {
  if(!context.loggedInUser) {
    return {ok:false,error:"This service is for login user. Please sign up."}
  } else {
    return resolver(root, args, context, info);
  }
}

export const async_makeHashPassword = async(password:string) => bcrypt.hash(password,10)