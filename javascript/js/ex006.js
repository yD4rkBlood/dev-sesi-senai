function CalculateButton() {
    var number = parseInt(document.getElementById("number").value);

    var number2 = parseInt(document.getElementById("number2").value);

    var sum = number + number2;

    var difference = number - number2;

    var product = number * number2;

    var quotient= number / number2;

    var remainder = number % number2;

    var exponentiation = number ** number2;

    document.getElementById("NumberResult").innerHTML =
    number + " + " + number2 + " = " + sum + "<br>" +
    number + " - " + number2 + " = " + difference + "<br>" +
    number + " * " + number2 + " = " + product + "<br>" +
    number + " / " + number2 + " = " + quotient + "<br>" +
    number + " % " + number2 + " = " + remainder + "<br>" +
    number + " ^ " + number2 + " = " + exponentiation;
}


