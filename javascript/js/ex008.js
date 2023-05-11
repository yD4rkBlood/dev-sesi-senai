function CalculateAverage() {
    const name = document.getElementById('name').value;

    const grade1 = parseInt(document.getElementById('grade1').value);
    const grade2 = parseInt(document.getElementById('grade2').value);
    const average = (grade1 + grade2) / 2;

    if (grade1 > 10) {
      alert ("Grade 1 can't be higher than 10")
      return
    }

    if (grade2 > 10) {
      alert ("Grade 2 can't be higher than 10")
      return
    }

    let result = document.getElementById('result');
    result.innerHTML = `${name}'s average grade is ${average}`;

    if (average >= 7) {
        result.innerHTML += "<br><strong>Congratulations, you are approved!</strong>";
      } else {
        result.innerHTML += "<br><strong>Sorry, you did not pass.</strong>";
      }
}