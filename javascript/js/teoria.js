// Alert("Hello World!")

console.log("Hello World, Im using the console")

console.error("This is the Error message")
console.warn("This is the Alert Message")
console.info("This is the info message")



function Button1() {
    alert("You Clicked On The Button")
}

function ColorButton() {
    document.body.style.backgroundColor = "#00ff00"
}

function NameButton() {
    var name2 = prompt("What's your name ?")
    confirm("Hello, " + name2 + ", Wassup my dawg ?")
}

// Phrase in console 

var name = "Caio"
var lastname = "Rocha"

var age = 16

var aproved = true

console.log(typeof name)

console.log(name + " " + lastname)

// Calculator in console

var n1 = 10
var n2 = 15

console.log(n1 + n2)

var n3 = "10"
var n4 = "15"

console.log(n3 + n4)

n1 = n2
console.log("n1 = " + n1 + ' and n2 = ' + n2)

// Salary and Age in console

var salary = 5000

salary = salary + 200
console.log(salary)

console.log('Hello, ' + name + ' you are ' + age + ' years old')
console.log(`Hello, ${name} you are ${age} years old`)

// Calculator in alert

function AddButton() {
    var nr1 = prompt("Type a number:")
    var nr2 = prompt("Type another number:")

    nr1 = Number(nr1)

    nr2 = Number(nr2)

    var adding = nr1 + nr2

    console.log(typeof nr1)

    //alert(adding)

    document.getElementById("result").innerHTML +=
        `<br>The result of ${nr1} + ${nr2} = ${adding}`
}

//Input City

function CityButton() {
    var city = document.getElementById("city").value
    document.getElementById("CityResult").innerHTML +=
        `<br> City Name: ${city}`
}

//Math

var opSoma = 5 + 2
console.log(opSoma)

var opSubtracao = 5 - 2
console.log(opSubtracao)

var opMultiplicacao = 5 * 2
console.log(opMultiplicacao)

var opDivisao = 5 / 2
console.log(opDivisao)

var opExponenciacao = 5 ** 2
console.log(opExponenciacao)

var opResto = 5 % 2
console.log(opResto)

var ordemPrecedencia = 5 + 3 / 2
console.log(ordemPrecedencia)

var ordemPrecedencia2 = (5 + 3) / 2
console.log(ordemPrecedencia2)

const pi = 3.14

//True or False

var n1 = 5

var n2 = 6

console.log(n1 < n2) //Bigger then
console.log(n1 > n2) //Shorter then
console.log(n1 >= n2) //Bigger or equal
console.log(n1 <= n2) //Shorter or equal
console.log(n1 == n2) //Equal
console.log(n1 != n2) //Not Equal

//If and Else

if (n1 > n2) {

    console.log("n1 is bigger than")

} else {

    console.log("n1 is shorter than n2")
}

var myAge = 18
if (myAge >= 16) {
    console.log("You can vote")
}

//Condicional Structures

avg = 10

if (avg >= 7) {
    console.log("approved")
} else if (avg >= 5) {
    console.log("recuperation")
} else {
    console.log("reproved")
}

//Random Number

var nrGiveway = parseInt(Math.random() * 100)
console.log(nrGiveway)

//Swtich Case

var DaysOfTheWeek = 3

switch (DaysOfTheWeek) {
    case 1:
        console.log("Today is: Sunday")
        break //Stop the switch
    case 2:
        console.log("Today is: Monday")
        break
    case 3:
        console.log("Today is: Tuesday")
        break
    case 4:
        console.log("Today is: Wednesday")
        break
    case 5:
        console.log("Today is: Thursday")
        break
    case 6:
        console.log("Today is: Friday")
        break
    case 7:
        console.log("Today is: Saturday")
        break
    default:
        console.log("Invalid Day")
        break
}

// For

for (var i = 1; i <= 10; i++) {
    alert(i)
}

//Rest of odds and pairs

var counter = 1
while (counter <= 10) {
    if (counter % 2 == 0) {
        console.log(`${counter} is pair`)
    } else {
        console.log(`${counter} is odd`)
    }
}
counter++

