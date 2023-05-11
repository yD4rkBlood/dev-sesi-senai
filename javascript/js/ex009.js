function CheckAge() {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);

    let result = document.getElementById('result');
    result.innerHTML = ``;

    if (age >= 18) {
        result.innerHTML += "<br><p class=txt1>Congratulations, You can get your Driver License</p> <img src=img/cnhaprov.jpg>";
    } else {
        result.innerHTML += "<br><p class=txt2>Sorry, You can't get your Driver License.</p> <img src=img/cnhreje.jpg>";
    }
}