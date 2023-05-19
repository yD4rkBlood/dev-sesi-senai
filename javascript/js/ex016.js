function Generate() {
    var number = parseInt(document.getElementById('number').value);

    document.getElementById("result").innerHTML = `Multiples of ${number}:`;

    document.getElementById("result").innerHTML = "";
    document.getElementById("result2").innerHTML = "";

    var mult = 1;

    for (mult = 1; mult <= 10; mult++) {
        document.getElementById("result2").innerHTML += `<br>${number}x${mult} = ${number * mult}`;
    }
}

function Clear() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("result2").innerHTML = "";
}