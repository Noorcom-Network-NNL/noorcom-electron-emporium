
// Firebase core and feature SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported as analyticsSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByjEN0Asl7FU4bTGVUlOove6x3NUuGkwk",
  authDomain: "noorcom-electronics.firebaseapp.com",
  projectId: "noorcom-electronics",
  storageBucket: "noorcom-electronics.appspot.com",
  messagingSenderId: "674528595426",
  appId: "1:674528595426:web:1eab0551e5b097776bbdbb",
  measurementId: "G-M7XW3XSVPV"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Analytics init (check for browser support)
let analytics: ReturnType<typeof getAnalytics> | undefined;
if (typeof window !== "undefined") {
  analyticsSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
