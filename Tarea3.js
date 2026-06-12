function sumarPositivos(lista) {
    let acumulador = 0;

    for (let i = 0; i < lista.length; i++) {
        let numero = lista[i];

        if (numero > 0) {
            acumulador += numero; 
        }
    }

    return acumulador;
}

const numerosmixtos = [-5, 10, 3, -2, 0, 7, -1];
const resultado = sumarPositivos(numerosmixtos);

console.log("Suma de positivos:", resultado);