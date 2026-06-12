function generartablaSegura(numero) {
    if (numero < 1 || numero > 20) {
        return "el número debe estar entre 1 y 20.";
    }

    let tabla = [];

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        
        tabla.push(`${numero} * ${i} = ${resultado}`);
    }

    return tabla;
}

console.log("--- Tablita del 5 ---");
const tablaDelCinco = generartablaSegura(5);
console.log(tablaDelCinco); 

console.log("\n--- Prueba con numero alto ---");
const tablaInvalida = generartablaSegura(25);
console.log(tablaInvalida); 