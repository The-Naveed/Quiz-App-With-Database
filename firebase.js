import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore, doc, setDoc, collection, getDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyD8hT_bHtrhD0-ASHNFD37HjKpb7xyWS70",
    authDomain: "quiz-app-with-database-7c441.firebaseapp.com",
    projectId: "quiz-app-with-database-7c441",
    storageBucket: "quiz-app-with-database-7c441.firebasestorage.app",
    messagingSenderId: "946522578245",
    appId: "1:946522578245:web:a1ab23d1c2b5662c1d322c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    app,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    db,
    doc,
    setDoc,
    collection,
    getDoc
}