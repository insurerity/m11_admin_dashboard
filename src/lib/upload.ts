import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
import { storage } from "./firebase";

export function uploadToFirebase(files: File[] | File) {
  const promises = Array.isArray(files)
    ? files.map((file) => uploadFile(file))
    : [uploadFile(files)];

  return Promise.all(promises);
}

async function uploadFile(file: File) {
  const storageRef = ref(storage, `images/${file.name}`);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
}
