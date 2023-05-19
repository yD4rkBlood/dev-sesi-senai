var movies = [];
var images = [];

function Add() {
    var addname = document.getElementById('addname').value;
    var addimage = document.getElementById('addimage').value;

    movies.push(addname);
    images.push(addimage);

    var result = document.getElementById('result');
    result.innerHTML = "";

    for (var i = 0; i < movies.length; i++) {
        result.innerHTML += `<div class="tags"><img src="${images[i]}"> <p>${movies[i]}</p> </div>`;
    }

    document.getElementById("addname").value = "";
    document.getElementById("addimage").value = "";
}

function Indicate() {
    var randomIndex = parseInt(Math.random() * movies.length);

    var randomMovie = movies[randomIndex];
    var randomImage = images[randomIndex];

    var result2 = document.getElementById("result2");
    result2.innerHTML = `<div class="tags"><img src="${randomImage}"> <p>${randomMovie}</p></div>`;
}

