import { deleteDoc, doc, Timestamp } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { lastDocType } from "../types/types";

export default async function deleteLastDoc(
  lastDoc: lastDocType,
  setLastDoc: React.Dispatch<React.SetStateAction<lastDocType>>
) {
  if (!lastDoc?.id) {
    alert("No document to delete!");
    return;
  }

  if (Timestamp.now().seconds - lastDoc.date.seconds > 3600) {
    alert("No document uploaded the last Hour!");
    return;
  } else {
    try {
      await deleteDoc(doc(db, "articles", lastDoc.id));
      console.log("Document deleted with ID: ", lastDoc.id);
      setLastDoc(null); // Reset the last document ID
      alert("Last article deleted successfully!");
    } catch (error) {
      console.error("Error deleting document: ", error);
      alert("Error deleting article. Please try again.");
    }
  }
}
