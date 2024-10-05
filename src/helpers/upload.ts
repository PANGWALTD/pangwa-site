import { v2 as cloudinary } from 'cloudinary'
export async function uploadFile(file: File) {
    try {
        const base64 = await toBase64(file);
        const { secure_url } = await cloudinary.uploader.upload(base64, {
            upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
        });
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