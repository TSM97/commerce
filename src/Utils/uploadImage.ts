import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function uploadImage(id: string) {
  const fileInput = document.getElementById(id);

  fileInput &&
    fileInput.addEventListener("change", (event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file) {
        const storage = getStorage();
        const storageRef = ref(storage, "images/" + file.name);

        uploadBytes(storageRef, file)
          .then((snapshot) => {
            console.log("Uploaded a file!");
            getDownloadURL(snapshot.ref).then((downloadURL) => {
              console.log("File available at", downloadURL);
              // Here you could save the downloadURL to Firestore if needed
            });
          })
          .catch((error) => {
            console.error("Upload failed", error);
          });
      }
    });
}
