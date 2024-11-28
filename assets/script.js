const temperatura = document.querySelector('#tempe');
const inp1 = document.querySelector('.inp1');
const inp2 = document.querySelector('.inp2');
const button = document.querySelector('button');
const result = document.querySelector('.result');

function converter() {
    if (inp1.value == inp2.value) {
        result.innerHTML = "INVÁLIDO!!!"
    } else if (inp1.value == 'Fahrenheit' && inp2.value == 'Celsius') {
        var resultado = (temperatura.value - 32) / 1.8;
        result.innerHTML = `${resultado.toFixed(2)} °C`;
    } else {
        resultado = (temperatura.value * 1.8) + 32;
        result.innerHTML = `${resultado.toFixed(2)} °F`;
    }
}