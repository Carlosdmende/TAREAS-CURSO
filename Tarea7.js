function encontrar_palabra_mas_larga(oracion) {
    let palabras = oracion.split(" ");
    
    let palabra_ganadora = "";

    for (let i = 0; i < palabras.length; i++) {
        let palabra_actual = palabras[i];

        if (palabra_actual.length > palabra_ganadora.length) {
            palabra_ganadora = palabra_actual; 
        }
    }

    return palabra_ganadora;
}

const texto = "soy horrible programando dios mio";
const resultado = encontrar_palabra_mas_larga(texto);

console.log("la palabra mas pajua digo larga es:", resultado); 