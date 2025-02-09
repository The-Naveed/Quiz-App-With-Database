var name = localStorage.getItem("Subject",)
// var name = [{
//     vision: false,
// },
// {
//     ques: "What is the speed of light in a vacuum?",
//     opt1: "300,000 km/s",
//     opt2: "150,000 km/s",
//     opt3: "299,792,458 m/s",
//     opt4: "3,000 km/s",
//     correct: "299,792,458 m/s"
// },
// {
//     ques: "What is the chemical symbol for gold?",
//     opt1: "Go",
//     opt2: "Ag",
//     opt3: "Au",
//     opt4: "Pt",
//     correct: "Au"
// },
// {
//     ques: "What is the powerhouse of the cell?",
//     opt1: "Nucleus",
//     opt2: "Mitochondria",
//     opt3: "Ribosome",
//     opt4: "Golgi Apparatus",
//     correct: "Mitochondria"
// },
// {
//     ques: "Which planet is known as the 'Red Planet'?",
//     opt1: "Venus",
//     opt2: "Mars",
//     opt3: "Jupiter",
//     opt4: "Mercury",
//     correct: "Mars"
// },
// {
//     ques: "How many bones are there in an adult human body?",
//     opt1: "206",
//     opt2: "210",
//     opt3: "205",
//     opt4: "200",
//     correct: "206"
// },
// {
//     ques: "What gas do plants absorb during photosynthesis?",
//     opt1: "Oxygen",
//     opt2: "Nitrogen",
//     opt3: "Carbon dioxide",
//     opt4: "Hydrogen",
//     correct: "Carbon dioxide"
// },
// {
//     ques: "Who invented the light bulb?",
//     opt1: "Nikola Tesla",
//     opt2: "Thomas Edison",
//     opt3: "Alexander Graham Bell",
//     opt4: "James Watt",
//     correct: "Thomas Edison"
// },
// {
//     ques: "What type of energy is stored in a stretched rubber band?",
//     opt1: "Kinetic Energy",
//     opt2: "Potential Energy",
//     opt3: "Thermal Energy",
//     opt4: "Chemical Energy",
//     correct: "Potential Energy"
// },
// {
//     ques: "What is the boiling point of water at sea level in Celsius?",
//     opt1: "90°C",
//     opt2: "100°C",
//     opt3: "110°C",
//     opt4: "120°C",
//     correct: "100°C"
// },
// {
//     ques: "What is the largest planet in our solar system?",
//     opt1: "Earth",
//     opt2: "Mars",
//     opt3: "Jupiter",
//     opt4: "Saturn",
//     correct: "Jupiter"
// }
// ];

import { db, doc, setDoc } from "/firebase.js"

var subject = [{ vision: true }]

const submit = async _ => {

    gif.style.display = "block"
    try {
        await setDoc(doc(db, "Questions", name), {
            subject
        });
        alert("Operation Successful");
    } catch (error) {
        console.log("Error message:", error.message);
        console.log("Error code:", error.code);
        alert(error.code)
    }

    gif.style.display = "none"

};
// submit()

const add = _ => {

    let ques = document.querySelector("#ques").value
    let opt1 = document.querySelector("#opt1").value
    let opt2 = document.querySelector("#opt2").value
    let opt3 = document.querySelector("#opt3").value
    let opt4 = document.querySelector("#opt4").value
    let correct = document.querySelector("#correct").value

    if (!ques || !opt1 || !opt2 || !opt3 || !opt4 || !correct) {
        alert("All fields must be filled")
        return
    }

    let collection = {
        ques,
        opt1,
        opt2,
        opt3,
        opt4,
        correct
    }
    subject.push(collection)
    console.log(subject);
    alert(`You add ${subject.length - 1} questions`)

};

window.add = add
window.submit = submit