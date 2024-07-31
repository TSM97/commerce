import { deleteDoc } from "firebase/firestore";
import { fetchLastArticle } from "./fetchLastDoc";
import { deleteObject, ref } from "firebase/storage";
import { storage } from "../../firebaseConfig";

export const deleteLastArticle = async () => {
  const article = await fetchLastArticle();
  if (article) {
    const imageUrl = article.data().imageUrl;

    if (imageUrl) {
      const imageRef = ref(storage, imageUrl);
      await deleteObject(imageRef);
      console.log("Image deleted successfully");
    }

    await deleteDoc(article.ref);
    console.log("Article deleted successfully");
  } else {
    console.log("No article to delete");
    alert("No article to delete");
  }
};
