const n1 = document.getElementById("num1");
const n2 = document.getElementById("num2");
/*
function add() {
    document.getElementById("result").innerHTML = `Result: ${+n1.value + +n2.value}`;
    setter();
}
function subtract() {
    let subtract = Math.abs(+n1.value - +n2.value);
    document.getElementById("result").innerHTML = `Result: ${subtract}`;
    setter();
}
function multiply() {
    document.getElementById("result").innerHTML = `Result: ${+n1.value * +n2.value}`;
    setter();
}
function divide() {
    document.getElementById("result").innerHTML = `Result: ${+n1.value / +n2.value}`;
    setter();
}
*/
function setter() {
    num1.value = "";
    num2.value = "";
}
const res = document.getElementById("result");
function cal(arg) {
    let x = +n1.value;
    let y = +n2.value;
    switch (true) {
        case arg === "+":
            res.innerHTML = `Result: ${x + y}`;
            setter();
            break;
        case arg === "-":
            res.innerHTML = `Result: ${Math.abs(x - y)}`;
            setter();
            break;
        case arg === "*":
            res.innerHTML = `Result: ${x * y}`;
            setter();
            break;
        case arg === "/":
            res.innerHTML = `Result: ${x / y}`;
            setter();
            break;
    }
}