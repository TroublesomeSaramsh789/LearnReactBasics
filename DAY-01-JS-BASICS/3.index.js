// Spread operator
const BokaKataHaru = {
    names: ["ram", "shyam", "hari"],
    type:"A1 Boka"
}


const nameT = { ...BokaKataHaru }

const newCopy = BokaKataHaru



console.log(BokaKataHaru)

console.log(nameT);

console.log(newCopy);

console.log("After Change")
BokaKataHaru.type = "6";

console.log(BokaKataHaru);

console.log(nameT);

console.log(newCopy);