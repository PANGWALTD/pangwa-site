import { db } from "./firebase";
import { collection, addDoc, setDoc, doc, updateDoc } from "firebase/firestore";
export async function addMessage(fullName: string, email: string, businessName: string, inquiryType: string, message: string, fileUrl?: string){
    try {
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
    } catch (e) {
        console.error("Error adding document: ", e);
        return null;
    }
}
export async function updateStatus(id: string){
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
