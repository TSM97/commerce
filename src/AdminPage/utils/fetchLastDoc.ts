import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const fetchLastArticle = async () => {
  const articlesRef = collection(db, "articles");
  const articlesQuery = query(
    articlesRef,
    orderBy("createdAt", "desc"),
    limit(1)
  );

  const snapshot = await getDocs(articlesQuery);
  snapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });

  if (snapshot.empty) {
    console.log("Snapshot:", snapshot);
    console.log("Snapshot size:", snapshot.size);
    console.log("No matching documents.");
    return null;
  }

  return snapshot.docs[0];
};
