let expression = "0";
var safe = true;
var signed = false;
var prevRes = "";
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
        if(expression === "")
            expression = prevRes;
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
    prevRes = eval(expression);
    document.getElementById("display").innerHTML = prevRes;
    expression = "";
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