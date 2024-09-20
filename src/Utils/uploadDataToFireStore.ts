import { db } from "../firebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";

interface UploadDataParams {
  collectionName: string;
  imageUrl?: string;
  fields: { [key: string]: any };
}

const uploadDataToFirestore = async ({
  collectionName,
  imageUrl,
  fields,
}: UploadDataParams) => {
  const data: any = {
    ...fields,
    createdAt: Timestamp.now(),
  };

  if (imageUrl) {
    data.imageUrl = imageUrl;
  }

  await addDoc(collection(db, collectionName), data);
};

export default uploadDataToFirestore;
