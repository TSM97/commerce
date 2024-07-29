import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig"; // Adjust the path to your firebaseConfig file

import ArticleType from "../../../types/articleType";

const fetchArticles = async (
  setArticles: React.Dispatch<React.SetStateAction<ArticleType[]>>
) => {
  try {
    const querySnapshot = await getDocs(collection(db, "articles"));
    const articlesList: ArticleType[] = [];
    querySnapshot.forEach((doc) => {
      articlesList.push({
        id: doc.id,
        ...(doc.data() as Omit<ArticleType, "id">),
      });
    });
    setArticles(articlesList);
  } catch (error) {
    console.error("Error fetching articles: ", error);
  }
};

export default fetchArticles;
