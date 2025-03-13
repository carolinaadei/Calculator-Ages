'use strict';

let currentInput = "";
let operator = "";
let firstOperand = "";
let secondOperand = "";
let shouldResetScreen = false;

function updateDisplay() {
    document.getElementById("display").value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    operator = "";
    firstOperand = "";
    secondOperand = "";
    shouldResetScreen = false;
    updateDisplay();
}

function appendNumber(number) {
    if (shouldResetScreen) {
        currentInput = "";
        shouldResetScreen = false;
    }
    currentInput += number;
    updateDisplay();
}

function setOperator(op) {
    if (currentInput === "") return;
    if (firstOperand !== "") calculate();
    firstOperand = currentInput;
    operator = op;
    shouldResetScreen = true;
}

function calculate() {
    if (firstOperand === "" || operator === "" || currentInput === "") return;
    secondOperand = currentInput;
    let result;

    switch (operator) {
        case "+":
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case "-":
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case "*":
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case "/":
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = "";
    firstOperand = "";
    secondOperand = "";
    shouldResetScreen = true;
    updateDisplay();
}

function changeSignal() {
    if (currentInput !== "") {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay();
    }
}

function percentage() {
    if (currentInput !== "") {
        currentInput = (parseFloat(currentInput) / 100).toString();
        updateDisplay();
    }
}

function comma() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay();
    }
}

function zero() { appendNumber("0"); }
function one() { appendNumber("1"); }
function two() { appendNumber("2"); }
function three() { appendNumber("3"); }
function four() { appendNumber("4"); }
function five() { appendNumber("5"); }
function six() { appendNumber("6"); }
function seven() { appendNumber("7"); }
function eight() { appendNumber("8"); }
function nine() { appendNumber("9"); }

function add() { setOperator("+"); }
function subtract() { setOperator("-"); }
function multiplication() { setOperator("*"); }
function division() { setOperator("/"); }
function equal() { calculate(); }