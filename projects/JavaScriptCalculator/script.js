let expression = "0";
var safe = true;
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
       element === "*" || element === "/")
        safe = true;
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