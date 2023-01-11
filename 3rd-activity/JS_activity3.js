
solve();

function solve() {
    alert("Let's solve two numbers together!");
    let firstNum = parseInt(prompt("Enter first Number: "));
    const container = document.getElementById('first');
    container.textContent = firstNum;
    let secondNum = parseInt(prompt("Enter second Number: "));
    const container2 = document.getElementById('second');
    container2.textContent = secondNum;

    let sum = firstNum + secondNum;
    const Sum = document.getElementById('addition');
    Sum.textContent = sum;
    const preview = document.getElementById('add-preview');
    preview.textContent = " " + " " + firstNum + " " + "+" + " " + secondNum;

    let difference = firstNum - secondNum;
    const Difference = document.getElementById('subtraction');
    Difference.textContent = difference;
    const preview2 = document.getElementById('subtrct-preview');
    preview2.textContent = " " + " " + firstNum + " " + "-" + " " + secondNum;

    let product = firstNum * secondNum;
    const Product = document.getElementById('multiplication');
    Product.textContent = product;
    const preview3 = document.getElementById('multi-preview');
    preview3.textContent = " " + " " + firstNum + " " + "x" + " " + secondNum;

    let quotient = firstNum / secondNum;
    const Quotient = document.getElementById('division');
    Quotient.textContent = quotient;
    const preview4 = document.getElementById('div-preview');
    preview4.textContent = " " + " " + firstNum + " " + "÷" + " " + secondNum;
}
