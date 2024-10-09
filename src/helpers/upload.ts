import {Storage} from '@google-cloud/storage';
import * as dotenv from 'dotenv';
dotenv.config();

export async function uploadFile(file: File) {
    const storage = new Storage({
        keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
        projectId: process.env.GOOGLE_CLOUD_PROJECT_ID
    })
    try {
        
        const bucketName = process.env.GOOGLE_CLOUD_BUCKET_NAME!;
        const bucket = storage.bucket(bucketName);
        const blob = bucket.file(file.name);
        const blobStream = blob.createWriteStream({
            resumable: false,
        });

        return new Promise((resolve, reject) => {
            blobStream.on('error', (err) => {
            reject(err);
            });

            blobStream.on('finish', () => {
            const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
            resolve(publicUrl);
            });

            blobStream.end(file.buffer);
        });
    } catch (e) {
        console.error("Error uploading file: ", e);
        return null;
    }
}
