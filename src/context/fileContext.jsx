import { createContext, useContext } from "react";
import { imageRename } from "../util/Functions";
import { storage } from "../config/firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const context = createContext();

export const useFileContext = () => useContext(context);

export const FileProvider = ({ children }) => {
  const uploadImage = async (image) => {
    try {
      const file = imageRename(image.name);
      const imageRef = ref(storage, file);
      await uploadBytes(imageRef, image);
      const url = await getDownloadURL(imageRef);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <context.Provider value={{ uploadImage }}>{children}</context.Provider>
  );
};
