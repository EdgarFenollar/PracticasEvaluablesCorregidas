var tiradasTotales = 3;
var tiradas1 = tiradasTotales;
var tiradas2 = tiradasTotales;
var punt1 = 0;
var punt2 = 0;
var dadosRestantes1 = 12;
var dadosRestantes2 = 12;
var sinDados = 'Este jugador no tiene más dados restantes';
var sinTiradas = 'Este jugador no tiene más tiradas restantes';
var sinDadosb1 = true;
var sinTiradasb1 = true;
var sinDadosb2 = true;
var sinTiradasb2 = true;
var resultado = document.getElementById('resultado');

function dadoRandom(num) {
    var dados1 = 0;
    var dados2 = 0;
    var dado1 = document.getElementById('dado1');
    var dado2 = document.getElementById('dado2');
    var p1 = document.getElementById('p1');
    var p2 = document.getElementById('p2');
    var select1 = document.getElementById('player1');
    var select2 = document.getElementById('player2');
    var imagenesDados = [
        '../img/d1.png',
        '../img/d2.png',
        '../img/d3.png',
        '../img/d4.png',
        '../img/d5.png',
        '../img/d6.png'
    ];

    if (tiradas1 <= 0 && tiradas2 <= 0) {
        if (punt1 > punt2) {
            resultado.innerHTML = 'El ganador es: Jugador 1';
        } else if (punt1 < punt2) {
            resultado.innerHTML = 'El ganador es: Jugador 2';
        } else {
            resultado.innerHTML = 'Es un empate';
        }
        return;
    }

    if (dadosRestantes1 <= 0 && dadosRestantes2 <= 0) {
        if (punt1 > punt2) {
            resultado.innerHTML = 'El ganador es: Jugador 1';
        } else if (punt1 < punt2) {
            resultado.innerHTML = 'El ganador es: Jugador 2';
        } else {
            resultado.innerHTML = 'Es un empate';
        }
        return;
    }

    dados1 = parseInt(select1.value);
    dados2 = parseInt(select2.value);

    if ((num === 1 && tiradas1 <= 0) || (num === 2 && tiradas2 <= 0)) {
        alert('El jugador ya ha alcanzado el máximo de tiradas');
        return;
    }

    if (num === 1) {
        tiradas1--;
        for (let index = 0; index < dados1; index++) {
            var random = Math.floor(Math.random() * 6);
            var imagenDado = document.createElement('img');
            imagenDado.src = imagenesDados[random];
            dado1.appendChild(imagenDado).style.width = '85px';
            punt1 += random + 1;
        }
        dadosRestantes1 -= dados1;
        updateDiceOptions(select1, dadosRestantes1);
    }

    if (num === 2) {
        tiradas2--;
        for (let index = 0; index < dados2; index++) {
            var random = Math.floor(Math.random() * 6);
            var imagenDado = document.createElement('img');
            imagenDado.src = imagenesDados[random];
            dado2.appendChild(imagenDado).style.width = '85px';
            punt2 += random + 1;
        }
        dadosRestantes2 -= dados2;
        updateDiceOptions(select2, dadosRestantes2);
    }

    p1.innerHTML = 'Puntuación: ' + punt1;
    p2.innerHTML = 'Puntuación: ' + punt2;

    if (tiradas1 <= 0 && tiradas2 <= 0) {
        if (punt1 > punt2) {
            resultado.innerHTML = 'El ganador es: Jugador 1';
        } else if (punt1 < punt2) {
            resultado.innerHTML = 'El ganador es: Jugador 2';
        } else {
            resultado.innerHTML = 'Es un empate';
        }
    }

    if (dadosRestantes1 <= 0 && dadosRestantes2 <= 0) {
        if (punt1 > punt2) {
            resultado.innerHTML = 'El ganador es: Jugador 1';
        } else if (punt1 < punt2) {
            resultado.innerHTML = 'El ganador es: Jugador 2';
        } else {
            resultado.innerHTML = 'Es un empate';
        }
    }
}

function updateDiceOptions(select, dadosRestantes) {
    select.innerHTML = '';

    for (let i = 1; i <= dadosRestantes; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i === 1 ? i + ' dado' : i + ' dados';
        select.appendChild(option);
    }
}
