function procesarnotas(estudiantes) {
    for (let i = 0; i < estudiantes.length; i++) {
        let estudiante = estudiantes[i];

        if (estudiante.nota >= 60) {
            estudiante.estado = 'Aprobado';
        } 
        else {
            estudiante.estado = 'Reprobado';
        }
    }

    return estudiantes;
}

const listadoestudiantes = [
    { nombre: "Yonkleyverson", nota: 85 },
    { nombre: "Yuvirixayda", nota: 45 },
    { nombre: "Alejandria", nota: 20 },
    { nombre: "josemanuela", nota: 59 }
];

const resultado = procesarnotas(listadoestudiantes);
console.log(resultado);
