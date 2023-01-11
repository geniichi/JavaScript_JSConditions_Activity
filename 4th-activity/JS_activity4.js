
const result = document.getElementById('result-box');

render();

function render() {
    let mathGrade = parseInt(prompt("What is your grade in math? "));
    let englishGrade = parseInt(prompt("What is your grade in english? "));
    let scienceGrade = parseInt(prompt("What is your grade in science? "));

    const container1 = document.getElementById('math');
    container1.textContent = mathGrade;
    const container2 = document.getElementById('english');
    container2.textContent = englishGrade;
    const container3 = document.getElementById('science');
    container3.textContent = scienceGrade;

    let average = (mathGrade + englishGrade + scienceGrade) / 3;

    if (average >= 90 && average < 100){
        result.textContent = "S grade";
    } else if (average >= 80 && average < 89){
        result.textContent = "A grade";
    } else if (average >= 70 && average < 79){
        result.textContent = "B grade";
    } else if (average >= 60 && average < 69){
        result.textContent = "C grade";
    } else if (average >= 50 && average < 59){
        result.textContent = "D grade";
    } else if (average >= 40 && average < 49){
        result.textContent = "E grade";
    } else if (average >= 0 && average < 39){
        result.textContent = "student has failed";
    } else {
        result.textContent = "Invalid marks, please put proper scores";
    }
}
