import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCP8nfy4bFqWx7Mq1Dl0Kp0ZFY0urS5Yhc",
    authDomain: "reactcoder-df958.firebaseapp.com",
    projectId: "reactcoder-df958",
    storageBucket: "reactcoder-df958.appspot.com",
    messagingSenderId: "327643625540",
    appId: "1:327643625540:web:38cb873724a0f75b3de411"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export function getFirestore() {
      return firebase.firestore(app)
  }