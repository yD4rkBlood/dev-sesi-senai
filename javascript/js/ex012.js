function Generate() {
    var number = prompt("Guess a Number!")

    let result = document.getElementById("result");
    result.innerHTML = `Your number is <strong>${number}</strong>, The number that I thougt is`

    if (number == number2) {
        result.innerHTML = `<p class=txt1>Congratulations! You guessed the correct number: ${number2}, You Tried ${numTries} Times</p>`;
    } else if (number > number2) {
        result.innerHTML = `Your number is <strong>${number}</strong>, but the number I thought of is <strong>less than</strong> that.`;
    } else {
        result.innerHTML = `Your number is <strong>${number}</strong>, but the number I thought of is <strong>greater than</strong> that.`;
    }

    numTries++
}

var numTries = 0

var number2 = parseInt(Math.random() * 100) + 1;
console.log(number2)

function resetGame() {
    location.reload()
}
