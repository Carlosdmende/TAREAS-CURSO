function filtrarpares(array) {
    let pares = []; 

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            pares.push(array[i]); 
        }
    }

    return pares; 
}

const numeros = [1, 2, 3, 4, 5, 6];
const resultado = filtrarpares(numeros);

console.log(resultado); 