import { collection, FirestoreError, getDocs, Query } from "firebase/firestore";
import { db } from "../firebaseConfig";

const fetchFromFirebase = async (
  collectionName: string,
  customQuery?: Query
) => {
  console.log("fetsara!");
  try {
    let querySnapshot;

    if (customQuery) {
      querySnapshot = await getDocs(customQuery);
    } else {
      const collectionRef = collection(db, collectionName);
      querySnapshot = await getDocs(collectionRef);
    }

    const dataList: any[] = [];

    querySnapshot.forEach((doc) => {
      dataList.push({ id: doc.id, ...doc.data() });
    });

    // Return the fetched data with no error
    return { data: dataList, error: null };
  } catch (error) {
    // Catch any Firestore errors and return the error message
    const errorMessage =
      (error as FirestoreError).message || "Unknown error occurred";
    return { data: [], error: errorMessage };
  }
};

export default fetchFromFirebase;
