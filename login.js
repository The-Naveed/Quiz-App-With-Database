localStorage.setItem("id","jcbvyuxnew098egyct76")
var id = localStorage.getItem("id",)

if (!id) {
    window.location.replace("./index.html")
}


import { db, auth, signInWithEmailAndPassword, doc, setDoc, collection, getDoc } from "./firebase.js";

const login = async () => {

    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    if (!email || !password) {
        alert("All fields must be field")
    };

    try {
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                localStorage.setItem("id", user.uid)

                findUser()
            })
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    }
};

const findUser = async () => {

    try {
        const docRef = doc(db, "Registerd Users List", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());

            if (docSnap.data().admin === true) {
                window.location.replace("./admin/admin.html")
            } else {
                window.location.replace("./user/user.html")
            };

        } else {
            console.log("No such document!");
        };
    } catch (error) {
        console.log(error.message);
    }

};


window.login = login
window.findUser = findUser