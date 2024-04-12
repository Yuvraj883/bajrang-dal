// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_7pAZgR7jEy-ntDbrU5bxi6iOweEXqyc",
  authDomain: "placementcellmsit-610dc.firebaseapp.com",
  projectId: "placementcellmsit-610dc",
  storageBucket: "placementcellmsit-610dc.appspot.com",
  messagingSenderId: "797045401262",
  appId: "1:797045401262:web:d8de0ca5f63d5a43d16f3f",
  measurementId: "G-9NV9TKND78",
  databaseURL: "https://placementcellmsit-610dc-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
