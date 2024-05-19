let ca;



function calculate() {
let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")

let result = getElementById('result')

switch(ca) {
    case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
}

}

document.getElementById("result").innerHTML = result;

