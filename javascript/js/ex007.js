//LEFT SCOREBOARD

//Left Point

function AddPoint() {
    var result = document.getElementById("result").innerHTML
    result++
    document.getElementById("result").innerHTML = result
}

//Right Point

function AddPoint2() {
    var result2 = document.getElementById("result2").innerHTML
    result2++
    document.getElementById("result2").innerHTML = result2
}

//RIGHT SCOREBOARD

//Left Point

function AddPoint_1() {
    var result3 = document.getElementById("result3").innerHTML
    result3++
    document.getElementById("result3").innerHTML = result3
}

function AddPoint_2() {
    var result3 = document.getElementById("result3").innerHTML
    result3++
    result3++
    document.getElementById("result3").innerHTML = result3
}

function AddPoint_3() {
    var result3 = document.getElementById("result3").innerHTML
    result3++
    result3++
    result3++
    document.getElementById("result3").innerHTML = result3
}

//Right Point

function AddPoint_4() {
    var result4 = document.getElementById("result4").innerHTML
    result4++
    document.getElementById("result4").innerHTML = result4
}

function AddPoint_5() {
    var result4 = document.getElementById("result4").innerHTML
    result4++
    result4++
    document.getElementById("result4").innerHTML = result4
}

function AddPoint_6() {
    var result4 = document.getElementById("result4").innerHTML
    result4++
    result4++
    result4++
    document.getElementById("result4").innerHTML = result4
}

//CLEAR POINTS

//Clear Left ScoreBoard Points

function ClearPoints() {
    document.getElementById("result").innerHTML = "0"
    document.getElementById("result2").innerHTML = "0"
}

//Clear Right ScoreBoard Point

function ClearPoints2() {
    document.getElementById("result3").innerHTML = "0"
    document.getElementById("result4").innerHTML = "0"
}



