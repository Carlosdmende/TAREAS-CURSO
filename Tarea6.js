function limpiardatos(arrayMixto) {
    let arrayLimpio = [];

    for (let i = 0; i < arrayMixto.length; i++) {
        let elemento = arrayMixto[i];

        if (typeof elemento === 'string' || typeof elemento === 'number') {
            arrayLimpio.push(elemento); 
        }
    }

    return arrayLimpio;
}

const datossucios = [42, "Hola", true, null, undefined, "Mundo", { id: 1 }, 3.14, [1, 2]];
const datossanitizados = limpiardatos(datossucios);

console.log(datossanitizados); 