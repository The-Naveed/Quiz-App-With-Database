import { db, collection, doc, onSnapshot, setDoc, getDocs, updateDoc } from "/firebase.js"

const show = async _ => {

    gif.style.display = "block"
    try {
        const ques = document.querySelector("#ques")
        const querySnapshot = await getDocs(collection(db, "Questions"));
        querySnapshot.forEach((doc) => {
            console.log(doc.data().subject[0].vision);
            if (doc.data().subject[0].vision === true) {
                console.log(doc.data().subject[0].vision = "Active");
            }
            ques.innerHTML +=
                `<h6>${doc.id}</h6><span id="status">${doc.data().subject[0].vision}</span>
<div style="display : flex">
<button onclick="change(this)">Publish</button><br>
<button onclick="unChange(this)">Un Publish</button><br>
<button onclick="unChange(this)">Delete</button><br>
</div>`
        });
    } catch (error) {
        console.log(error.massage);
        alert(error.code)
    }
    gif.style.display = "none"
}

const home = _ => {
    window.location.assign("../admin/dashboard.html")
}

const change = async ele => {
    let key = ele.parentElement.previousElementSibling.previousElementSibling.innerHTML;
    const washingtonRef = doc(db, "Questions", key.subject[0]);
    await updateDoc(washingtonRef, {
        vision: true
    });
    const ques = document.querySelector("#ques")
    ques.innerHTML = ``

    show()

}

const unChange = async ele => {
    let key = ele.parentElement.previousElementSibling.previousElementSibling.innerHTML;
    const washingtonRef = doc(db, "Questions", key);
    await updateDoc(washingtonRef, {
        vision: false
    });
    const ques = document.querySelector("#ques")
    ques.innerHTML = ``
    show()
}

window.home = home
window.show = show
window.change = change
window.unChange = unChange
