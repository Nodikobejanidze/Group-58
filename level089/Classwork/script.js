const NameAge = (name, age) => {
    return age >= 18 ? `${name} you can enter building!` : `${name} you cant enter building!`
}

const name = prompt("Enter your name: ")
const age = prompt("Enter your age: ")

console.log(NameAge(name, age))