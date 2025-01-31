import aws from 'aws-sdk';
import dotenv from 'dotenv';
import crypto from 'crypto';
import { promisify } from 'util';

dotenv.config();

const randomBytes = promisify(crypto.randomBytes);


const region = process.env.AWS_REGION;
const bucketName = process.env.AWS_BUCKETNAME;
const accessKeyId = process.env.AWS_ACCESSKEYID;
const secretAccessKey = process.env.AWS_SECRETACCESSKEY;

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: "v4"

})

const generateSignedUrl=async()=>{

    const bytes = await randomBytes(16);
    const imageName = bytes.toString('hex');

    const s3Params =( {
        Bucket: bucketName,
        Key: imageName,
        Expires: 60

    }
)

 const signedUrl = await s3.getSignedUrlPromise('putObject',s3Params);
//  console.log(signedUrl);
 return signedUrl;
}

export default generateSignedUrl;