import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const projectCollection = collection(db, "files");

export const getAllProjects = async () => {
  const data = await getDocs(projectCollection);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};
