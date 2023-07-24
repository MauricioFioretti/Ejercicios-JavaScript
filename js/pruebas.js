// Crear un objeto "perro" con métodos para ladrar y comer.

//Respuesta

// const perro = {
//     ladrar : function(){
//         console.log('El perro esta ladrando')
//     },
//     comer : function comer(){
//         console.log('El perro esta comiendo')
//     }

// }

// console.log(perro["comer"])

// console.log(perro.ladrar())

// const prototipoCarrito = {
//     productos: [],
//     agregarProducto: function (producto) {
//         this.productos.push(producto);
//     },
//     obtenerPrecioTotal: function () {
//         return this.productos.reduce((total, p) => total + p.precio, 0);
//     }
// }

// const carrito1 = Object.create(prototipoCarrito);
// carrito1.agregarProducto({ nombre: 'naranja', precio: 1.25 });
// carrito1.agregarProducto({ nombre: 'limon', precio: 1.75 });
// console.log(carrito1.obtenerPrecioTotal()); //3

// const carrito2 = Object.create(prototipoCarrito);
// console.log(carrito2.obtenerPrecioTotal()); //3


// const perro = {
//     ladrar : function(){
//         console.log('El perro esta ladrando')
//     },
//     comer : function comer(){
//         console.log('El perro esta comiendo')
//     }

// }

// const perro1 = Object.create(perro)
// perro1.ladrar()
// perro1.comer()

function generadorNumero(){
    let num = Math.floor( Math.random() * 101)
    return console.log(num)
}

function variosNumeros(generador, cantidad){
    for(let i = 0; i < cantidad; i++){
        generador()
    }
    console.log(`La cantidad de numeros generados es ${cantidad}`)
}

variosNumeros(generadorNumero, 200)

