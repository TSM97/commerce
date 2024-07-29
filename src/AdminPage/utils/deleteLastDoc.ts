import { deleteDoc } from "firebase/firestore";
import { fetchLastArticle } from "./fetchLastDoc";

export const deleteLastArticle = async () => {
  const article = await fetchLastArticle();
  if (article) {
    await deleteDoc(article.ref);
    console.log("Article deleted successfully");
  } else {
    console.log("No article to delete");
    alert("No article to delete");
  }
};
