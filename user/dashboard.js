import { db, collection, doc, onSnapshot, setDoc, getDocs, updateDoc } from "/firebase.js"

const logOut = _ => {
    window.location.replace("../index.html")
};

const getSubject = async _ => {

    try {
        gif.style.display = "block"
        const get = document.querySelector("#get")
        const querySnapshot = await getDocs(collection(db, "Questions"));
        querySnapshot.forEach((doc) => {
            if (doc.data().subject[0].vision === true)
                get.innerHTML +=
                    `<button id="get" onclick="sub(this)">${doc.id}</button>`
        });
    } catch (error) {
        console.log(error.massage);
        alert(error.code)
    }
    gif.style.display = "none"
};

const sub = ele => {
   localStorage.setItem("Subject",ele.innerHTML)
    console.log(localStorage.getItem("Subject"));
    
    window.location.assign("./test.html")
    
}

window.logOut = logOut
window.getSubject = getSubject
window.sub = sub