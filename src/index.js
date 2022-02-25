// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVT_H7H0yIn9Ol7b9wuxdoZv6LZrr30e8",
  authDomain: "nightapp-42fc7.firebaseapp.com",
  projectId: "nightapp-42fc7",
  storageBucket: "nightapp-42fc7.appspot.com",
  messagingSenderId: "643440196727",
  appId: "1:643440196727:web:92dd20380a607697815a72",
  measurementId: "G-LD5VCJBSXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);