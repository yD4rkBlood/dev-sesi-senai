function calculateMarry() {

    var months = parseInt(Math.random() * 13) + 1;

    var name = document.getElementById('name').value;

    switch (months) {
      case 1:
        document.getElementById("marryResult").innerHTML = `You are going to marry in January, ${name} <br> <img src=/img/angolano.jpg>`;
        break;
      case 2:
        document.getElementById("marryResult").innerHTML = `You are going to marry in February, ${name} <br> <img src=/img/angolano.jpg>`;
        break;
      case 3:
        document.getElementById("marryResult").innerHTML = `You are going to marry in March, ${name} <br> <img src=/img/angolano.jpg>`;
        break;
      case 4:
        document.getElementById("marryResult").innerHTML = `You are going to marry in April, ${name} <br> <img src=/img/angolano.jpg>`;
        break;
      case 5:
        document.getElementById("marryResult").innerHTML = `You are going to marry in May, ${name} <br> <img src=/img/angolano.jpg>`;
        break;
      case 6:
        document.getElementById("marryResult").innerHTML = `You are going to marry in June, ${name} <br> <img src=/img/angolano.jpg>`;
        break;
      case 7:
        document.getElementById("marryResult").innerHTML = `You are going to marry in July, ${name} <br> <img src=/img/angolano.jpg>`;
        break;
      case 8:
        document.getElementById("marryResult").innerHTML = `You are going to marry in August, ${name} <br> <img src=/img/angolano.jpg>`;
        break;
      case 9:
        document.getElementById("marryResult").innerHTML = `You are going to marry in September, ${name} <br> <img src=/img/angolano.jpg>`;
        break;
      case 10:
        document.getElementById("marryResult").innerHTML = `You are going to marry in October, ${name} <br> <img src=/img/angolano.jpg>`;
        break;
      case 11:
        document.getElementById("marryResult").innerHTML = `You are going to marry in November, ${name} <br> <img src=/img/angolano.jpg>`;
        break;
      case 12:
        document.getElementById("marryResult").innerHTML = `You are going to marry in December, ${name} <br> <img src=/img/angolano.jpg>`;
        break;
      case 13:
        document.getElementById("marryResult").innerHTML = `You are never going to marry, ${name} <br> <img src=/img/obscuro.jpg>`;
        break;
    }

    var name = document.getElementById('name').value;
  }