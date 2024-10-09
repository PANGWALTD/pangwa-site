// import { Storage } from '@google-cloud/storage';
// import * as dotenv from 'dotenv';
// dotenv.config();
// import { Readable } from 'stream';



// export async function uploadFile(file: File): Promise<string> {
//     const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
//     const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
//     const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
//     const AWS_BUCKET_REGION = process.env.AWS_BUCKET_REGION;
//     const AWS_ENDPOINT = process.env.AWS_ENDPOINT;

//     try {
//         const s3 = new AWS.S3({
//             accessKeyId: AWS_ACCESS_KEY_ID,
//             secretAccessKey: AWS_SECRET_ACCESS_KEY,
//             region: AWS_BUCKET_REGION,
//             endpoint: AWS_ENDPOINT,
//             s3ForcePathStyle: true
//         });
//         console.log(AWS_BUCKET_NAME);
//         if (!AWS_BUCKET_NAME) {
//             throw new Error("AWS_BUCKET_NAME is not defined");
//         }

//         const params = {
//             Bucket: AWS_BUCKET_NAME,
//             Key: `${Date.now()}-${file.name}`,
//             Body: Buffer.from(await file.arrayBuffer()),
//             ACL: 'public-read',
//         };

//         const uploadResult = await s3.upload(params).promise();

//         return uploadResult.Location;

//     }
//     catch (error) {
//         console.log(error);
//         throw new Error("Error uploading file");
//     }

// }
