//arrays

const arrayUno = [ "Hola", "Como", "estan", "?" ] 
const arrayDos = [ 1, 2, 3, 4, 5, 6, 6, 122, 5, 12, 7, 99, 12, 22, 5656 ]
const arrayTres = [ "Hola", 3, false, true, "Que tal" ]
const arrayCuatro = arrayUno.concat(arrayDos)
const arrayCinco = arrayCuatro.slice(5,12)

arrayUno.push("Mauricio")
arrayUno.unshift("Primero") // Es muy peligroso el unshift, porque cambia todos los indices
arrayUno.unshift("Apagar la luz")
arrayUno.splice(1,3) // Esto elimina varios elementos consecutivos del Array
arrayCinco.reverse() // Extremadamente Peligroso


// Array con Objetos
const objeto1 = {
    id: 1,
    producto: "Manteca"
}

const objeto2 = {
    id: 2,
    producto: "Chocolate"
}

const arraySeis = [ objeto1, objeto2, { id: 3, producto: "Sal" } ]
arraySeis.push( { id: 4, producto: "Azucar" }, { id: 5, producto: "Huevos" } )

// Uso de Clases

class Producto {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre.toUpperCase()
        this.precio = parseFloat(precio)
        this.stock = true
    }

    cambiarStock(){     //Agregamos el metodo para cambiar el stock del producto
        if(!this.stock){
            this.stock = true
            console.log(`El stock ha sido actualizado y ahora el producto ${this.nombre} tiene stock.`)
        }
        else{
            this.stock = false
            console.log(`El stock ha sido actualizado y ahora el producto ${this.nombre} NO tiene stock.`)
        }
    }

    obtenerPrecio() {
        console.log("El precio sin IVA del producto: " + this.nombre + " es: $" + this.precio + " ARS")
    }

    obtenerStock() {
        if(this.stock === true) {
            console.log("Hay Stock de: " + this.nombre)
        } else {
            console.log("No hay Stock de: " + this.nombre)
        }
    }

    obtenerPrecioConIVA() {     //Cambiamos el como estaba definido el precio con IVA
        console.log( `El precio con IVA del producto: ${this.nombre} es: ` + this.precio * 1.21)
    }
}

const productos = []

productos.push(
    new Producto(
        1,
        "Azucar",
        425.50,
    )
)
productos.push(
    new Producto(
        2,
        "Leche",
        525.50,
    )
)
productos.push(
    new Producto(
        3,
        "Maiz",
        125.50,
    )
)

// console.log(productos)

function separador(){       //Agregamos la funcion separador
    console.log(`=============================================================`)
}


for ( const prod of productos ) {
    prod.obtenerPrecio()
}

separador()

for ( const prod of productos ) {
    prod.obtenerStock()
}

separador()

for ( const prod of productos ) {
    prod.obtenerPrecioConIVA() 
}

separador()

productos[1].cambiarStock()  //Agregamos el modificar stock de un producto

separador()

for ( const prod of productos ) {
    prod.obtenerPrecio()
}

separador()

for ( const prod of productos ) {
    prod.obtenerStock()
}