for (var i = 1; i <= 100; i++) {
    if (((i % 3) == 0) && ((i % 5) == 0)) {
        console.log('FizzBuzz');
        document.getElementById('stampa').innerHTML = document.getElementById('stampa').innerHTML  + '<li>FizzBuzz</li>';
    } else if ((i % 5) == 0) {
        console.log('Buzz');
        document.getElementById('stampa').innerHTML = document.getElementById('stampa').innerHTML  + '<li>Buzz</li>';
    } else if ((i % 3) == 0) {
        console.log('Fizz');
        document.getElementById('stampa').innerHTML = document.getElementById('stampa').innerHTML  + '<li>Fizz</li>';
    } else {
        console.log(i);
        document.getElementById('stampa').innerHTML = document.getElementById('stampa').innerHTML  + '<li>' + i + '</li>';
    }
}
