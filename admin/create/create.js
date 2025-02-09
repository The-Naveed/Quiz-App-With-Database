import { createUserWithEmailAndPassword, auth, db, doc, setDoc } from "../../firebase.js"

var gif = document.querySelector("#gif")

const signUp = async () => {

    const firstName = document.querySelector("#firstName").value
    const lastName = document.querySelector("#lastName").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    if (!firstName || !lastName || !email || !password) {
        alert("All field must be filled !")
        return
    };

    gif.style.display = "block"

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const id = user.uid;
        await setDoc(doc(db, "Registerd Users List", id), {
            id: user.uid,
            admin: false,
            firstName,
            lastName,
            email
        });

        alert("Operation Successful");
        window.location.replace("../dashboard.html");
    } catch (error) {
        console.log("Error message:", error.message);
        console.log("Error code:", error.code);
        alert(error.code)
    }

    gif.style.display = "none"

};

const home = _ => {
    window.location.replace("../dashboard.html")
}

window.home = home
window.signUp = signUp