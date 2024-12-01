import { _Object, ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.S3_AWS_REGION,
});

export const sort = (
  gallery: { photo: _Object[]; video: _Object[] },
  item: _Object
) => {
  if (!item?.Key) return false;

  return !gallery;
};

const getGallery = async () => {
  try {
    const bucketName = process.env.S3_BUCKET_NAME;
    const command = new ListObjectsV2Command({
      Bucket: bucketName,
    });

    const data = await s3Client.send(command);

    if (data.Contents) {
      return data.Contents;
    }

    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getGallery;
