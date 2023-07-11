import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const uploadContactData = async (Documents: any) => {
  try {
    const editDayDocRef = doc(
      db,
      `${Math.floor(Math.random() * (10000 - 0 + 1)) + 0}`,
      "contactData"
    );
    console.log(Documents);
    await setDoc(editDayDocRef, Documents);
  } catch (e) {
    console.log("error", e);
  }
};

const useFirestore = () => {
  return { uploadContactData };
};

export default useFirestore;
