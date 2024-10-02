import { deleteDoc, doc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import { db, storage } from '../../firebaseConfig';
import { useArticlesStore } from '../../stores/useArticlesStore';

export const deleteLastArticle = async () => {
  const articles = useArticlesStore.getState().articles;
  if (articles) {
    const lastArticle = articles[0];
    const imgUrl = lastArticle.imageUrl;

    if (imgUrl) {
      const imageRef = ref(storage, imgUrl);
      await deleteObject(imageRef);
    }
    const lastArticleRef = doc(db, 'articles', lastArticle?.id);
    await deleteDoc(lastArticleRef);
    window.location.reload();
    console.log('Article deleted successfully');
    alert('Article deleted successfully');
  } else {
    console.log('No article to delete');
    alert('No article to delete');
  }
};
