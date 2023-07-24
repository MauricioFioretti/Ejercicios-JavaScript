// Crear un objeto "persona" con propiedades como nombre, edad y profesión.
const persona = {
    nombre: "Mauri",
    edad: 26,
    profesion: "Programador"
}

// Crear un objeto "perro" con métodos para ladrar y comer.
const perro = {
    ladrar: function ladrar() {
        console.log("El perro esta ladrando")
    },

    comer: function comer() {
        console.log("El perro esta comiendo")
    }
}

let doberman = Object.create(perro)

doberman.ladrar()
doberman.comer()

console.clear()
// Crear una clase "rectángulo" con propiedades de ancho y alto, y un método para calcular su área.
class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho
        this.alto = alto
    }

    calcularArea() {
        let area = this.ancho * this.alto
        console.log(`El area del rectangulo con dimensiones ${this.ancho}x${this.alto} es: ${area}`)
    }
}

let rectangulo1 = new Rectangulo(15, 20)
rectangulo1.calcularArea()

console.clear()
// Crear una clase "círculo" con una propiedad de radio y métodos para calcular su circunferencia y área.
class Circulo {
    constructor(radio) {
        this.radio = radio
    }
    calcularCircunferencia(){
        let perimetro = (Math.PI*2*this.radio).toFixed(2)
        console.log(`El perimetro de la circunferencia de radio ${this.radio} es: ${perimetro}`)
    }

    calcularArea(){
        let area = (Math.PI*(this.radio**2)).toFixed(2)
        console.log(`El area de la circunferencia de radio ${this.radio} es: ${area}`)
    }
}

let circulo1 = new Circulo(13)
circulo1.calcularArea()
circulo1.calcularCircunferencia()

console.clear()
// Crear una clase "libro" con propiedades como título, autor y año de publicación.
class Libro {
    constructor(titulo, autor, year) {
        this.titulo = titulo
        this.autor = autor
        this.year = year
    }
}

console.clear()
// Crear una clase "cuenta bancaria" con propiedades como saldo y número de cuenta, y métodos para depositar y retirar dinero.
class CuentaBancaria {
    constructor(numCuenta, saldo) {
        this.numCuenta = numCuenta
        this.saldo = saldo
    }

    depositarDinero(numCuenta, cantidad){
        if(numCuenta === this.numCuenta){
            if(cantidad > 0){
                this.saldo += cantidad
                console.log(`Su saldo actualizado es: ${this.saldo}`)
            }
            else{
                console.log(`Ingreso una cantidad incorrecta.`)
            }
        }
        else{
            console.log(`Ingreso un dato incorrecto.`)
        }
    }

    retirarDinero(numCuenta, cantidad){
        if(numCuenta === this.numCuenta){
            if(cantidad > 0 && this.saldo > cantidad){
                this.saldo -= cantidad
                console.log(`Su saldo actualizado es: ${this.saldo}`)
            }
            else{
                console.log(`Ingreso una cantidad incorrecta o su saldo no es suficiente.`)
            }
        }
        else{
            console.log(`Ingreso un dato incorrecto.`)
        }
    }
}

let cuentaMauri = new CuentaBancaria(40109266, 0)
cuentaMauri.retirarDinero(40109266, 5000)
cuentaMauri.depositarDinero(40109266, 150000)
cuentaMauri.retirarDinero(40109266, 5000)

console.clear()
// Crear una clase "coche" con propiedades como marca, modelo y año, y un método para mostrar la información del coche.
class Coche {
    constructor(marca, modelo, year) {
        this.marca = marca
        this.modelo = modelo
        this.year = year
    }

    mostrarInfo() {
        console.log(`La marca del coche es: ${this.marca}`)
        console.log(`El modelo del coche es: ${this.modelo}`)
        console.log(`El año de fabricación del coche es: ${this.year}`)
    }
}

let coche1 = new Coche("Fiat", "Cronos", "2020")

coche1.mostrarInfo()

console.clear()
// Crear una clase "tienda" con una propiedad de productos y métodos para agregar y mostrar productos.
class Tienda {
    constructor(arrayProductos) {
        this.productos = arrayProductos
    }

    buscarProducto(busqueda) {
        let resultado = this.productos.filter( producto =>  producto.nombre.includes(busqueda) )
        console.log(resultado)
    }

    agregarProductos(producto, precio){
        productos.push({ nombre: producto, precio: precio })
    }
}

const productos = [
    { nombre: "Camiseta", precio: 20.99 },
    { nombre: "Pantalón", precio: 39.99 },
    { nombre: "Zapatos", precio: 59.99 },
    { nombre: "Bolso", precio: 29.99 },
    { nombre: "Gafas de sol", precio: 14.99 },
    { nombre: "Reloj", precio: 79.99 },
    { nombre: "Teléfono móvil", precio: 399.99 },
    { nombre: "Portátil", precio: 799.99 },
    { nombre: "Auriculares", precio: 49.99 },
    { nombre: "Tableta", precio: 299.99 }
]

let tienda1 = new Tienda(productos)

tienda1.buscarProducto("Panta")
tienda1.agregarProductos("Short", 6500)

console.log(productos)

console.clear()
// Crear una clase "calculadora" con métodos para sumar, restar, multiplicar y dividir dos números.
class Calculadora{
    sumar(a, b){
        return console.log(a + b)
    }
    restar(a, b){
        return console.log(a - b)
    }
    multiplicar(a, b){
        return console.log(a * b)
    }
    dividir(a, b){
        if(b != 0){ return console.log(a / b) }
        else{return console.log("Syntax error") }
    }
}

let calculadora1 = new Calculadora
calculadora1.sumar(5, 8)
calculadora1.restar(5, 8)
calculadora1.multiplicar(5, 8)
calculadora1.dividir(5, 1)

// function operacion(op){
//     if(op === "sumar"){
//         return (a, b) => a + b
//     }
//     else if(op === "restar"){
//         return (a, b) => a - b
//     }
//     else if(op === "multiplicar"){
//         return (a, b) => a * b
//     }
//     else if(op === "dividir"){
//         return (a, b) => { if(b != 0){ return a / b } else{ return "Syntax error"} 
//     }
//     else{
//         console.log(`Usted no ingresó una operación válida.`)
//     }
// }