function calcularIMC(altura, peso) {
    let IMC = peso / Math.pow(altura, 2);
    return IMC;
}

console.log(calcularIMC(1.76, 66));

let multiplicador = 1;
let contador = 1;

while (contador <= numero) {
    multiplicador = multiplicador * contador;
    contador ++;
}