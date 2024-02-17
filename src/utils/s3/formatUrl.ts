const formatUrl = (key: string) => {
  const path = key
    .split('/')
    .map((part) => part.replaceAll('+', '%2B').replaceAll(' ', '+'))
    .join('/');
  return `https://${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/${path}`;
};

export default formatUrl;
