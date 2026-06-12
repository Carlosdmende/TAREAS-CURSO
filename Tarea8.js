function cifrar_palabra(palabra) {
    let alfabeto = "abcdefghijklmnopqrstuvwxyz";
    let palabra_minusculas = palabra.toLowerCase();
    let mensaje_cifrado = "";

    for (let i = 0; i < palabra_minusculas.length; i++) {
        let letra_actual = palabra_minusculas[i];
        
        let indice_alfabeto = alfabeto.indexOf(letra_actual);

        if (indice_alfabeto === -1) {
            mensaje_cifrado += letra_actual;
        } 
        else {
            
            if (letra_actual === 'z') {
                mensaje_cifrado += 'a';
            } 
            else {
                
                let siguiente_letra = alfabeto[indice_alfabeto + 1];
                mensaje_cifrado += siguiente_letra;
            }
        }
    }
    return mensaje_cifrado;
}

const palabra_secreta = "pujuera";
const resultado = cifrar_palabra(palabra_secreta);

console.log("mensaje cifrado:", resultado); 

console.log("cifrando 'tiburon':", cifrar_palabra("tiburon")); 