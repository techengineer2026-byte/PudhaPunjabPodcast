// js/firebase-init.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDwNNFvz_N4rNE-kmEerVo7_6xJmc40QnM",
  authDomain: "puadh-punjabi-podcast.firebaseapp.com",
  projectId: "puadh-punjabi-podcast",
  storageBucket: "puadh-punjabi-podcast.firebasestorage.app",
  messagingSenderId: "967744982725",
  appId: "1:967744982725:web:3d4ebcf6d68d561428eaac",
  measurementId: "G-H25YC2D09Y"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);