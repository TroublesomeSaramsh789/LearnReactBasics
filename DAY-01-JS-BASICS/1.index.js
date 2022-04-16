// Object Destructuring 
const person = {
    name: "Nripesh",
    girlfriend: "Barsah",
    age: 23,
    address: {
        province: "Two",
        district: "Bara",
        location: "Simra"
    }
}

const { address, name } = person

const {location} = address

console.log(`${name} house is in ${location}`)
