import { Resolver } from "../../type";

const resolver: Resolver = {
  Mutation: {
    editCoffeeShop: async(_,{id,name,latitude,longitude,deletePhotoIdArr,addPhotoUrlArr,prevCategories,categories},{client,loggedInUser})=>{
      const ok = await client.user.findFirst({
        where:{
          id:loggedInUser?.id,
          coffeeShop:{
            some:{
              id
            }
          }
        },
        select:{
          id:true
        }
      });
      if(!ok) {
        return {ok:false, error:"Cannot change another user's coffee shop"}
      }
      let newCategoryArr:Array<string>|undefined;
      let deletedCategoryArr:Array<string>|undefined;
      if(categories && JSON.stringify(prevCategories) !== JSON.stringify(categories)) {
        const hashtag = categories.split(" ")
          ?.filter(
            (word:string) => /#[\w|ㄱ-ㅎ|가-힣|ㅏ-ㅣ]+/g.test(word)
          )?.map(
            (word:string) => word.substr(1)
          )
        newCategoryArr = hashtag?.filter(
          (eachHash:string) => (!prevCategories.includes(eachHash))
        ).map(
          (newStr:string) => ({
            where: {
              name: newStr
            },
            create: {
              name: newStr,
            }
          })
        );
        deletedCategoryArr = prevCategories?.filter(
          (eachHash:string) => (!hashtag.includes(eachHash))
        ).map(
          (deleteStr:string) => ({name: deleteStr})
        );
        console.log(newCategoryArr);
        console.log(deletedCategoryArr);
      }
      const result = await client.coffeeShop.update({
        where:{
          id
        },
        data:{
          ...(name && { name }),
          ...(latitude && { latitude }),
          ...(longitude && { longitude }),
          ...(deletePhotoIdArr && {
            photos: {
              delete: deletePhotoIdArr.map((id:number)=>({id}))
            }
          }),
          ...(addPhotoUrlArr && {
            photos: {
              create: addPhotoUrlArr.map((url:string)=>({url}))
            }
          }),
          ...(newCategoryArr && {
            categories: {
              connectOrCreate: newCategoryArr
            }
          }),
          ...(deletedCategoryArr && {
            categories: {
              delete: deletedCategoryArr
            }
          })
        },
        select:{
          id:true
        }
      })
      if(result) {
        return { ok:true }
      } else {
        return { ok:false, error:"Server Unknown error" }
      }
    }
  }
}

export default resolver;