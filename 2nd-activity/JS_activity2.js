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
    let thirdNum = parseInt(prompt("Enter third Number: "));
    const container3 = document.getElementById('third');
    container3.innerHTML = secondNum;

    let greatestNum = Math.max(firstNum, secondNum, thirdNum);
    result.textContent = "The greatest number among three numbers is the " + greatestNum;
}
