
let age = prompt("Enter your Age: ")
let isAdult = age >= 18 ? true : false;
console.log(isAdult)



let username = prompt("Enter your username:");
let password = prompt("Enter your password:");

if (password.length < 4) {
    console.log("Password is too short");
} else {
    console.log(`Welcome ${username}`);
}


let weather = prompt("Enter current weather: ");

switch(weather){
    case 'sunny':
        console.log('l can play football');
        break;
    case 'rainy':
        console.log('l can take umbrella');
        break;
    default:
        console.log('l can stay home');
        break;
}