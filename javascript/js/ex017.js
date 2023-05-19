function Generate() {
    document.getElementById("result2").innerHTML = "";
    document.getElementById("result").innerHTML = "Relation betweens odd numbers:";

    var number1 = parseInt(document.getElementById('number1').value);
    var number2 = parseInt(document.getElementById('number2').value);

    if (number1 % 2 === 0) {
        number1++; 
    }

    while (number1 <= number2) {
        document.getElementById("result2").innerHTML += `<br>${number1}`;
        number1 += 2; 
    }
}