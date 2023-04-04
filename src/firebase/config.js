
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBmJckCoFoe5nezWGp60TjuQKV9Jsxdtkc",
  authDomain: "rj-39585-18930.firebaseapp.com",
  projectId: "rj-39585-18930",
  storageBucket: "rj-39585-18930.appspot.com",
  messagingSenderId: "543763796360",
  appId: "1:543763796360:web:9b24a95e7e0beeb057ea3d"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)