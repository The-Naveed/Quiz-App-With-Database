import { createUserWithEmailAndPassword, auth, db, doc, setDoc } from "./firebase.js"

const signup = async () => {

    const firstName = document.querySelector("#firstName").value
    const lastName = document.querySelector("#lastName").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    if (!firstName || !lastName || !email || !password) {
        alert("All field must be filled !")
        return
    };
    try {
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                var id = user.uid

                setDoc(doc(db, "Registerd Users List", id), {
                    id: user.uid,
                    admin: true,
                    firstName,
                    lastName,
                    email
                });
                alert("ok")
            });
    } catch (error) {
        console.log(error.message);
        console.log(error.code);
    };

};

window.signup = signup