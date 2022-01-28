import * as AWS from "aws-sdk"

AWS.config.update({
  credentials:{
    accessKeyId:process.env.AWS_ACCESS_KEY ?? "",
    secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY ?? "",
  }
})

type uploadPhotoType = (file: Promise<{ filename: string; createReadStream: Function; }>, userId: number) => Promise<string>

export const async_uploadPhoto:uploadPhotoType = async(file, userId) => {
  const { filename, createReadStream } = await file;
  const readStream = createReadStream();
  const objectName = `${userId}-${Date.now()}-${filename}`;
  const {Location} = await new AWS.S3().upload({
    Bucket:"nomad-coffee-good",
    Key:objectName,
    ACL:"public-read",
    Body:readStream,
  }).promise();
  return Location;
}