function clasificar_inventario(productos) {
    let catalogo = {
        agotados: [],
        premium: [],
        estandar: []
    };

    for (let i = 0; i < productos.length; i++) {
        let articulo = productos[i];

        
        if (articulo.stock === 0) {
            
            catalogo.agotados.push(articulo);
        } else if (articulo.stock > 0 && articulo.precio > 1000) {
            
            catalogo.premium.push(articulo);
        } else {
            
            catalogo.estandar.push(articulo);
        }
    }

    return catalogo;
}

const lista_productos = [
    { nombre: "monitor 4k", precio: 1200, stock: 5 },    
    { nombre: "teclado mecanico", precio: 150, stock: 0 }, 
    { nombre: "mouse gamer", precio: 80, stock: 15 },     
    { nombre: "laptop core i9", precio: 2500, stock: 3 },  
    { nombre: "cable hdmi", precio: 15, stock: 50 }       
];

const resultado_clasificacion = clasificar_inventario(lista_productos);

console.log("inventario clasificado:", resultado_clasificacion);