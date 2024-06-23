function calcularArea(largura, altura) {
    let area = largura * altura;
    return area.toFixed(2);
}

console.log(calcularArea(10, 15))


function AreaPerimetro(raio) {
    
    let pi = 3.14;
    let area = 3 * pi * (raio**2)
    let perimetro = 2 * pi * raio

    console.log(`A área do circulo é ${area} e o perimetro é ${perimetro}`)
}

AreaPerimetro(1)