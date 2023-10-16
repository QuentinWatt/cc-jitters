import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_ENV_FIREABSE_API_KEY,
  authDomain: import.meta.env.VITE_ENV_FIREABSE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_ENV_FIREABSE_DATABASE_URL,
  projectId: import.meta.env.VITE_ENV_FIREABSE_PROJECT_URL,
  storageBucket: import.meta.env.VITE_ENV_FIREABSE_STORAGE_URL,
  messagingSenderId: import.meta.env.VITE_ENV_FIREABSE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_ENV_FIREABSE_APP_ID,
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
