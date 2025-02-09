import { db, auth, signInWithEmailAndPassword, doc, getDoc} from "./firebase.js";

var id;
let gif = document.querySelector("#gif")



const login = async () => {

    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    if (!email || !password) {
        alert("All fields must be field")
        return
    };

    gif.style.display = "block"

    try {
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                let user = userCredential.user;
                id = user.uid

                findUser()
            })
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(error.code)
    }

    gif.style.display = "none"
};

const findUser = async () => {
    try {
        const docRef = doc(db, "Registerd Users List", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.data().admin === true) {
            window.location.replace("./admin/dashboard.html")
            console.log(docSnap.data().admin);
            
        };

        if (docSnap.data().admin === false) {
            window.location.replace("./user/dashboard.html")
            console.log(docSnap.data().admin);

        };

    } catch (error) {
        console.log(error.message);
    }

};

window.login = login
window.findUser = findUser