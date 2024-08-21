import { useState } from 'react';
import { storage } from '../firebaseConfig';
import Resizer from 'react-image-file-resizer';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';

const UseImageUpload = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadImage = async (file: File): Promise<string> => {
    setLoading(true);
    setError(null);

    try {
      const resizedImage = await new Promise<string>((resolve, reject) => {
        Resizer.imageFileResizer(
          file,
          1000, // maxWidth
          800, // maxHeight
          'WEBP',
          80, // quality
          0, // rotation
          async (uri: string | File | Blob | ProgressEvent<FileReader>) => {
            if (typeof uri === 'string') {
              try {
                const storageRef = ref(
                  storage,
                  `images/${Date.now()}_${file.name}`
                );
                const uploadTask = await uploadString(
                  storageRef,
                  uri,
                  'data_url'
                );
                const downloadURL = await getDownloadURL(uploadTask.ref);
                resolve(downloadURL);
              } catch (uploadError) {
                reject(uploadError);
              }
            }
          },
          'base64',
          500, // minWidth
          500 // minHeight
        );
      });

      return resizedImage;
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
