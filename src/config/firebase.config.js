import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSaZnEpPTHLkWISpkzm6vfIT5uTlZJeBg",
  authDomain: "image-uploader-12ca6.firebaseapp.com",
  projectId: "image-uploader-12ca6",
  storageBucket: "image-uploader-12ca6.appspot.com",
  messagingSenderId: "760066863043",
  appId: "1:760066863043:web:2e1f988098bc22d389d776",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
