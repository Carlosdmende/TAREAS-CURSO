function contarvocales(texto) {
    let totalvocales = 0;
    
    let textominusculas = texto.toLowerCase();

    for (let i = 0; i < textominusculas.length; i++) {
        let caracter = textominusculas[i];

        if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
            totalvocales++; 
        }
    }

    return totalvocales;
}

const mitexto = "jalabolaaaaaaaaaaaaaaas";
const cantidad = contarvocales(mitexto);

console.log("Total de vocales:", cantidad);