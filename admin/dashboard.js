import { db, collection, doc, onSnapshot, setDoc, getDocs } from "../firebase.js";

let gif = document.querySelector("#gif")


const manageStudents = async _ => {
    window.location.replace("./students/students.html")
};

const mainScreen = _ => {

}
// mainScreen()

const ques = _ => {
    let subjectName = prompt("Enter Subject Name", )
    localStorage.setItem("Subject", subjectName)
    window.location.assign("./questions/questions.html")
}

const result = _ => {
    mainData.innerHTML = ``

}

const createNewStudent = _ => {
    window.location.replace("./create/create.html")
};


const logOut = _ => {
    window.location.replace("../index.html")
};

const manage = _ => {
    window.location.assign("../admin/manageques.html")
}

window.logOut = logOut
window.createNewStudent = createNewStudent
window.manageStudents = manageStudents
window.result = result
window.mainScreen = mainScreen
window.ques = ques
window.manage = manage