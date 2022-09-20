let expression = "0";
var safe = true;
var signed = false;
let clearDisp = () => {
    document.getElementById("display").innerHTML = 0;
    expression = "0";
    safe = true;
};

let getInput = (element) => {
    if(element === ".")
        if(!safe)
            return;
        else
            safe = false;
    if(element === "-" || element === "+" || 
       element === "*" || element === "/") {
        safe = true;
        if(element != "-" && signed) {
            removeOperators();
        }
        signed = true;
    } else if(element >= 0 && element <= 9) signed = false;
    expression += element;
    while (expression[0] === "0" && expression.length > 1) {
        expression = expression.substring(1);
    }
    document.getElementById("display").innerHTML = expression;
};

let compute = () => {
    document.getElementById("display").innerHTML = eval(expression);
    expression = "0";
    safe = true;
}

let removeOperators = () => {
    while(expression[expression.length - 1] === "+" ||
         expression[expression.length - 1] === "-" ||
         expression[expression.length - 1] === "*" ||
         expression[expression.length - 1] === "/") {
        expression = expression.substring(0, expression.length - 1);
    }        
}