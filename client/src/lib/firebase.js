import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from "firebase/firestore";

import {
  getStorage,
} from "firebase/storage";

const firebaseConfig = {
  apiKey:
    "AIzaSyD_XYugN9rsYdNuqEvQ-3OkrJoLQzErhkk",

  authDomain:
    "kharchology.firebaseapp.com",

  projectId:
    "kharchology",

  storageBucket:
    "kharchology.firebasestorage.app",

  messagingSenderId:
    "1092098793445",

  appId:
    "1:1092098793445:web:826e65b33a4c1fc014190c",
};

// INITIALIZE APP
const app =
  initializeApp(
    firebaseConfig
  );

// AUTH
export const auth =
  getAuth(app);

// FIRESTORE
export const db =
  initializeFirestore(
    app,
    {

      localCache:
        persistentLocalCache({

          tabManager:
            persistentMultipleTabManager(),
        }),
    }
  );

// STORAGE
export const storage =
  getStorage(app);

export default app;