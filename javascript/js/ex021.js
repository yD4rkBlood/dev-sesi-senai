function Add() {
    var addname = document.getElementById('addname').value;
    var addimage = document.getElementById('addimage').value;

    var movies = [];
    var images = [];

    movies.push(addname)
    images.push(addimage)

    for (var i = 0; i < movies.length; i++) {
        document.getElementById('result').innerHTML += `<div class="tags"><img src="${images[i]}"> <p>${movies[i]}</p> </div>`;
    }

    document.getElementById("addname").value = "";
    document.getElementById("addimage").value = "";
}

function Clear() {
    document.getElementById('result').innerHTML = ""
}