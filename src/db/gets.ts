import { db } from "./firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
export async function getMessages() {
    try {
        const q = query(collection(db, "messages"));
        const querySnapshot = await getDocs(q);
        const messages = querySnapshot.docs.map((doc) => doc.data());
        return messages;
    } catch (e) {
        console.error("Error getting documents: ", e);
        return null;
    }
}