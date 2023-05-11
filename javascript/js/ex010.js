function CheckLogin() {
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    let result = document.getElementById('result');
    result.innerHTML = ``;

    if (user == "adm" && password == "123") {
        result.innerHTML += "<br><p class=txt1>You Logged Succesfully</p>"
    } else {
        result.innerHTML += "<br><p class=txt2>Wrong Password Or User</p>"
    }
}