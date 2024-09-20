import { db } from "../firebaseConfig";
import { doc, setDoc, Timestamp } from "firebase/firestore";

interface UpdateProductParams {
  collectionName: string;
  documentId: string; // Document ID is required for updates
  imageUrl?: string;
  product: { [key: string]: any };
}

const updateProductInFirestore = async ({
  collectionName,
  documentId,
  imageUrl,
  product,
}: UpdateProductParams) => {
  const data: any = {
    ...product,
    updatedAt: Timestamp.now(), // for tracking purposes only
  };

  if (imageUrl) {
    data.imageUrl = imageUrl;
  }

  // Update existing document
  await setDoc(doc(db, collectionName, documentId), data, { merge: true });
};

export default updateProductInFirestore;
