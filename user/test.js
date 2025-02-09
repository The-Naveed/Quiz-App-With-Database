
import { db, collection, doc, onSnapshot, setDoc, getDoc, updateDoc } from "/firebase.js"


// var inc = _ => {
//     inc++
// } 

var inc = 1

console.log(inc);


const show = async _ => {
    try {
        let sub = localStorage.getItem("Subject")
        const docRef = doc(db, "Questions", sub);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            let ques = document.getElementById("ques")
            let opt1 = document.getElementById("opt1")
            let opt2 = document.getElementById("opt2")
            let opt3 = document.getElementById("opt3")
            let opt4 = document.getElementById("opt4")

            console.log(docSnap.data().subject[inc].ques);
            
            ques.innerHTML = docSnap.data().subject[inc].ques
            opt1.innerHTML = docSnap.data().subject[inc].opt1
            opt2.innerHTML = docSnap.data().subject[inc].opt2
            opt3.innerHTML = docSnap.data().subject[inc].opt3
            opt4.innerHTML = docSnap.data().subject[inc].opt4
inc++
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.log(error.code);
    }
}

const get = async ele => {
    try {
        let sub = localStorage.getItem("Subject")
        const docRef = doc(db, "Questions", sub);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            let ques = document.getElementById("ques")
            let opt1 = document.getElementById("opt1")
            let opt2 = document.getElementById("opt2")
            let opt3 = document.getElementById("opt3")
            let opt4 = document.getElementById("opt4")
            
            inc++
            console.log(docSnap.data().subject[inc].ques);
            
            ques.innerHTML = docSnap.data().subject[inc].ques
            opt1.innerHTML = docSnap.data().subject[inc].opt1
            opt2.innerHTML = docSnap.data().subject[inc].opt2
            opt3.innerHTML = docSnap.data().subject[inc].opt3
            opt4.innerHTML = docSnap.data().subject[inc].opt4
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.log(error.code);
    }
    console.log(ele.innerHTML);
    
    console.log(inc);
    
}

window.show = show
window.get = get
// window.inc = inc