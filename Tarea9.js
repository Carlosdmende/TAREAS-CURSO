function procesar_operaciones_bancarias(saldo_inicial, operaciones) {
    let saldo_actual = saldo_inicial;
    let intentos_sobregiro = 0;

    for (let i = 0; i < operaciones.length; i++) {
        let movimiento = operaciones[i];
        let tipo = movimiento.tipo;
        let monto = movimiento.monto;

        if (tipo === "deposito") {
            
            saldo_actual += monto;
        } else if (tipo === "retiro") {
            
            if (monto <= saldo_actual) {
                
                saldo_actual -= monto;
            } else {
                
                intentos_sobregiro++;
            }
        }
    }

    return {
        saldo_final: saldo_actual,
        errores: intentos_sobregiro
    };
}

const cuenta_usuario = 100;
const historial_movimientos = [
    { tipo: "deposito", monto: 50 },  
    { tipo: "retiro", monto: 40 },   
    { tipo: "retiro", monto: 200 },   
    { tipo: "deposito", monto: 10 },  
    { tipo: "retiro", monto: 130 }    
];

const estado_cuenta = procesar_operaciones_bancarias(cuenta_usuario, historial_movimientos);

console.log("resultado del proceso:", estado_cuenta);