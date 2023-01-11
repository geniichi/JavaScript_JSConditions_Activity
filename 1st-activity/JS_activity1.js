let result = document.getElementById('result');

start();

function start(){
    alert("Let's compare two numbers to see which one is greater");
    let firstNum = parseInt(prompt("Enter first Number: "));
    const container = document.getElementById('first');
    container.innerHTML = firstNum;
    let secondNum = parseInt(prompt("Enter second Number: "));
    const container2 = document.getElementById('second');
    container2.innerHTML = secondNum;

    if (firstNum > secondNum){
        result.textContent = firstNum + ' is greater than ' + secondNum;
    } else if (secondNum > firstNum){
        result.textContent = secondNum + ' is greater than ' + firstNum;
    } else {
        result.textContent = "only put a numerical value";
    }
}
