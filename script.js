function calcularVelocidad() {
    var distancia = document.getElementById('distancia').value;
    var tiempo = document.getElementById('tiempo').value;
    var velocidad = (distancia * 1000) / (tiempo * 60); //Cálculo
    document.getElementById('resultadoVelocidad').innerHTML = 'La velocidad es: ' + velocidad.toFixed(2) + ' m/s';
}
function determinarTipoTriangulo() {
    var lado1 = parseFloat(document.getElementById('lado1').value);
    var lado2 = parseFloat(document.getElementById('lado2').value);
    var lado3 = parseFloat(document.getElementById('lado3').value);

    if (lado1 === lado2 && lado2 === lado3) {
        document.getElementById('resultadoTriangulo').innerHTML = 'Triángulo Equilátero';
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        document.getElementById('resultadoTriangulo').innerHTML = 'Triángulo Isósceles';
    } else {
        document.getElementById('resultadoTriangulo').innerHTML = 'Triángulo Escaleno';
    }
}

function realizarOperacion(operador) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    var resultado;
    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
    }
    document.getElementById('resultadoCalculadora').innerHTML = 'El resultado es: ' + resultado.toFixed(2);
}

function esPrimo() {
    var numero = parseInt(document.getElementById('numeroPrimo').value);
    var esPrimo = true;
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
    document.getElementById('resultadoPrimo').innerHTML = esPrimo ? 'El número es primo' : 'El número es primo';
}