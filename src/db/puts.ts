import { db } from "./firebase";
import { collection, addDoc, setDoc, doc, updateDoc } from "firebase/firestore";
export async function addMessage(fullName: string, email: string, businessName: string, inquiryType: string, message: string, fileUrl?: string) {
    try {
        if (fileUrl) {
            const docRef = await addDoc(collection(db, "messages"), {
                fullName,
                email,
                businessName,
                inquiryType,
                message,
                fileUrl,
                status: "PENDING",
                timestamp: new Date(),
            });
            console.log("Document written with ID: ", docRef.id);
            return docRef.id;
        }

        const docRef = await addDoc(collection(db, "messages"), {
            fullName,
            email,
            businessName,
            inquiryType,
            message,
            status: "PENDING",
            timestamp: new Date(),
        });
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
        return null;
    }
}
export async function updateStatus(id: string) {
    try {
        const docRef = doc(db, "messages", id);
        await updateDoc(docRef, {
            status: "DONE",
        });
        console.log("Document updated with ID: ", id);
        return id;
    } catch (e) {
        console.error("Error updating document: ", e);
        return null;
    }
}
export async function addBlog(type: string, title: string, content?: string, imageUrl?: string, videoUrl?: string) {
    try {
        const docRef = await addDoc(collection(db, "blogs"), {
            type,
            title,
            content,
            imageUrl,
            videoUrl,
            timestamp: new Date(),
        });
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
        return null;
    }
}
export async function deleteBlog(id: string) {
    try {
        await setDoc(doc(db, "blogs", id), {
            deleted: true,
        });
        console.log("Document deleted with ID: ", id);
        return id;
    } catch (e) {
        console.error("Error deleting document: ", e);
        return null;
    }
}
