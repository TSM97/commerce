import { useState } from 'react';
import { storage } from '../firebaseConfig';
import Resizer from 'react-image-file-resizer';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';

const UseImageUpload = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  //Image resize method
  const resizeImage = (
    file: File,
    quality: 70 | 80 | 90 | 100
  ): Promise<string> => {
    return new Promise((resolve, reject) => {
      Resizer.imageFileResizer(
        file, // Input
        1000, // Max
        800,
        'WEBP',
        quality,
        0, // rotation
        (uri) => {
          if (typeof uri === 'string') {
            resolve(uri);
          } else {
            reject(new Error('Failed to resize image'));
          }
        },
        'base64',
        500, // Min
        500 // Min
      );
    });
  };

  const uploadImageToFirebase = async (
    base64Image: string,
    fileName: string
  ): Promise<string> => {
    const storageRef = ref(storage, `images/${Date.now()}_${fileName}`); // Create file path
    const uploadTask = await uploadString(storageRef, base64Image, 'data_url');
    return await getDownloadURL(uploadTask.ref);
  };

  const uploadImage = async (
    file: File,
    quality: 70 | 80 | 90 | 100 = 70
  ): Promise<string> => {
    setLoading(true);
    setError(null);

    try {
      // Step 1: Resize the image
      const resizedImage = await resizeImage(file, quality);

      // Step 2: Upload the resized image to Firebase
      const downloadURL = await uploadImageToFirebase(resizedImage, file.name);

      return downloadURL; // Return the download URL
    } catch (err) {
      setError('Failed to upload image.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { uploadImage, loading, error };
};

export default UseImageUpload;
