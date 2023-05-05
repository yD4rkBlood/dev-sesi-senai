function CalculateButton() {
    var number = document.getElementById("number").value
    document.getElementById("NumberResult").innerHTML +=
    `<br> The double of ${number} is <strong>${number * 2}</strong> and the half is <strong>${number / 2}</strong>`
}

function clearResults() {
    document.getElementById("NumberResult").innerHTML = ""
    var num = document.getElementById("number").value = ""
}

