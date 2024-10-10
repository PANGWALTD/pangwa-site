import { db } from "./firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
export async function getMessages() {
    try {
        const q = query(collection(db, "messages"));
        const querySnapshot = await getDocs(q);
        const messages = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        return messages;
    } catch (e) {
        console.error("Error getting documents: ", e);
        return null;
    }
}
export async function auth()
{
    try {
        const q = query(collection(db, "admin"));
        const querySnapshot = await getDocs(q);
        const admin = querySnapshot.docs.map((doc) => doc.data());
        return admin;
    } catch (e) {
        console.error("Error getting documents: ", e);
        return null;
    }
}
export async function getBlogs() {
    try {
        const q = query(collection(db, "blogs"));
        const querySnapshot = await getDocs(q);
        const blogs = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        return blogs;
    } catch (e) {
        console.error("Error getting documents: ", e);
        return null;
    }
}