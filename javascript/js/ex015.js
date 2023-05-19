function Generate() {
    var number = parseInt(document.getElementById('number').value);

    document.getElementById("result").innerHTML = `Multiples of ${number}:`;

    var mult = 1;

    while (mult <= 10) {
        document.getElementById("result2").innerHTML += `<br>${number}x${mult} = ${number * mult}`;
        mult++;
    }
}

function Clear() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("result2").innerHTML = "";
}