import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig'; // Assuming you have a firebase configuration file
import { deleteObject, ref } from 'firebase/storage';
import { storage } from '../../firebaseConfig';

const deleteProductFromFirestore = async (
  productId: string,
  imgUrl: string
) => {
  try {
    const imageRef = ref(storage, imgUrl);
    await deleteObject(imageRef);
    const productRef = doc(db, 'products', productId);
    await deleteDoc(productRef);
    console.log(`Product with ID: ${productId} deleted successfully.`);
    window.location.reload();
  } catch (error) {
    console.error('Error deleting product: ', error);
    throw error;
  }
};

export default deleteProductFromFirestore;
