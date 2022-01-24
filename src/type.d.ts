export interface resolver  {
  [key:string]: {
    [key:string]: (root: any,
      args: any,
      context: any,
      info: any) => any
  }
}