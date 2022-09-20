let expression = "0";
let clearDisp = () => {    
    document.getElementById("display").innerHTML = 0;
    expression = "0";
}

let getInput = (number) => {
    expression += number;
    while(expression[0] === "0" && expression.length > 1) {
        expression = expression.substring(1);
    }
    document.getElementById("display").innerHTML = expression;
}