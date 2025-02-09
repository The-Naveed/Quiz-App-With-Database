import { db, collection, doc, onSnapshot, setDoc, getDocs} from "/firebase.js"

const home = _ => {
    window.location.replace("../dashboard.html")
}

let gif = document.querySelector("#gif")

const showStudents = async _ => {

    try {
        gif.style.display = "block"
        const querySnapshot = await getDocs(collection(db, "Registerd Users List"));
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
                    tbody.innerHTML +=
                        `
                        <tr>
                        <td>${doc.data().firstName}</td>
                        <td>${doc.data().lastName}</td>
                        <td>${doc.data().email}</td>
                        <td>${doc.data().admin}</td>
                      </tr>`
        });
    } catch (error) {
        console.log(error.massage);
        alert(error.code)
    }
    gif.style.display = "none"
}

window.home = home
window.showStudents = showStudents