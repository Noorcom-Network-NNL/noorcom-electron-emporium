
import { app } from "./firebase";
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";

const db = getFirestore(app);

export interface ContactMessage {
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt?: Date;
}

export const saveContactMessage = async (msg: ContactMessage) => {
  await addDoc(collection(db, "contactMessages"), {
    ...msg,
    createdAt: Timestamp.now(),
  });
};
