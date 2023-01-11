let result = document.getElementById('output')

start();

function start(){
    let month = parseInt(prompt("Month? "));
    let year = prompt("Year? ");

    if (month === 2 && ((year%4 == 0)&&(year%100 != 0))||(year%400 == 0)){
        result.textContent = "The month has 29 days";
    } else if (month === 2 && !((year%4 == 0)&&(year%100 != 0))||(year%400 == 0)){
        result.textContent = "The month has 28 days";
    } else if (month === 4 || month === 6 || month === 9 || month === 11){
        result.textContent = "The month has 30 days";
    } else if (month > 12 || month < 0){
        result.textContent = "Invalid month";
    } else {
        result.textContent = "The month has 31 days";
    }

    const input = document.getElementById('input');
    input.textContent = month + " " + "," + " " + year;

}
