function temperatureStatus(temperature = 20) {
    if (temperature < -10) {
        return "very cold";
    } else if (temperature >= -10 && temperature <= 0) {
        return "cold";
    } else if (temperature >= 0 && temperature <= 20) {
        return "normal";
    } else if (temperature >= 20 && temperature <= 30) {
        return "warm";
    } else {
        return "hot";
    }
}

function calculator(num1, num2, operator) {
    switch(operator) {
    case "+":
        return num1 + num2;
        break;
    case "-":
        return num1 - num2;
        break;
    case "*":
        return num1 * num2;
        break;
    case "/":
        return num1 / num2;
        break;
    default:
        return "wrong operator";
        break;
    }
}





