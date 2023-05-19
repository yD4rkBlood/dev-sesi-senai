function Generate() {
    var movies = ['Interstellar', 'The Wolf of Wall Street', 'Django Unchained', 'Evil Dead- Rise', 'Inglorius Basterds']

    for (var i = 0; i < movies.length; i++) {
        document.getElementById('result').innerHTML += `Vector Position ${i} - Movie: ${movies[i]} <br>`
    }
} 