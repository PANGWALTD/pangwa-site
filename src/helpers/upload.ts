import { v2 as cloudinary } from 'cloudinary'
import * as dotenv from 'dotenv';
dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY_CLOUDINARY,
    api_secret: process.env.CLOUDINARY_SECRET
});
export async function uploadFile(file: File) {
    try {
        const base64 = await toBase64(file);
        const { secure_url } = await cloudinary.uploader.upload(base64);
        return secure_url;
    } catch (e) {
        console.error("Error uploading file: ", e);
        return null;
    }
}

function toBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
    });
}