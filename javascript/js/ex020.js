function Add() {
    var addmovie = document.getElementById('addmovie').value;

    var movies = [];

    movies.push(addmovie)

    for (var i = 0; i < movies.length; i++) {
        document.getElementById('result').innerHTML += `${movies[i]} <br>`;
    }

    document.getElementById("addmovie").value = "";
}

function Clear() {
    document.getElementById('result').innerHTML = ""
}