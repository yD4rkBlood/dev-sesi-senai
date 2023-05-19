function Generate() {

    document.getElementById("result").innerHTML = ``;

    for (var i = 1; i <= 6; i++) {
        var result = parseInt(Math.random() * 60) + 1
        document.getElementById("result").innerHTML += `${result} `;
    }
}