function CheckAge() {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);

    let result = document.getElementById('result');
    result.innerHTML = ``;

    if (age < 18 ) {
        result.innerHTML += `<br><p class=txt2>${name}, You're not obligated to vote</p>`;
    } else if (age >= 18 && age <= 65) {
        result.innerHTML += `<br><p class=txt1>${name}, You're obligated to vote</p>`;
    } else {
        result.innerHTML += `<br><p class=txt2>${name}, You're not obligated to vote</p>`;
    }
}