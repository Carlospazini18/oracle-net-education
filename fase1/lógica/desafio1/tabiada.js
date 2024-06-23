function tabuada(numero) {

    for (let i = 1; i <= 10; i++) {
        let multiplicacao = numero * i;
        console.log(` ${i} x ${numero} = ${multiplicacao}`);
    }

}

tabuada(5);