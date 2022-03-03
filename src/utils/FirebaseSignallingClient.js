import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";


export default class FirebaseSignallingClient {
  constructor() {
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_AUTH_DOMAIN,
      databaseURL: import.meta.env.VITE_DATABASE_URL,
      projectId: import.meta.env.VITE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_MESSAGEING_SENDER_ID,
      appId: import.meta.env.VITE_APP_ID,
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    this.database = getDatabase(app);
    this.localPeerName = "";
    this.remotePeerName = "";
  }

  setPeerNames(localPeerName, remotePeerName) {
    this.localPeerName = localPeerName;
    this.remotePeerName = remotePeerName;
  };

  get targetRef() {
    return ref(this.database, this.remotePeerName);
  }

  async sendOffer(sessionDescription) {
    await set(this.targetRef, {
      type: "offer",
      sender: this.localPeerName,
      sessionDescription
    });
  }

  async sendAnswer(sessionDescription) {
    await set(this.targetRef, {
      type: "answer",
      sender: this.localPeerName,
      sessionDescription
    });
  }

  async sendCandidate(candidate) {
    await set(this.targetRef, {
      type: "candidate",
      sender: this.localPeerName,
      candidate
    })
  }

  async remove(path) {
    await set(ref(this.database, path), null);
  }
}