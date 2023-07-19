"use strict"
// 1. Crea una función que reciba un array de números y devuelva la suma de todos los elementos.
function suma(array) {
    let total = 0
    for (let i of array) {
        total += i
    }
    return total
}

let array = [0, 0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

console.log(suma(array))


// 2. Escribe una función que tome un array de palabras y devuelva un nuevo array con la longitud de cada palabra.
function determinarLongitudPalabras(array) {
    let arrayLongitud = []
    for (let palabra of array) {
        arrayLongitud.push(palabra.length)
    }
    return arrayLongitud
}

array = ["Hola", "Hola como andas?", "No se que poner", "Ya no voy a poner mas nada"]
console.log(determinarLongitudPalabras(array))

// 3. Implementa una función que tome un array de números y devuelva un nuevo array con solo los números pares.
function devolverPares(array) {
    let pares = []
    for (let num of array) {
        if (num % 2 == 0) {
            pares.push(num)
        }
    }
    return pares
}

array = [0, 0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(devolverPares(array))


// 4. Crea una función que reciba un array de nombres y devuelva un nuevo array con solo los nombres que comiencen con una letra específica.
function buscarNombre(array, letra) {
    let nombres = []
    for (let nombre of array) {
        if (nombre.toLowerCase()[0] == letra.toLowerCase()) {
            nombres.push(nombre)
        }
    }
    return nombres
}

array = ["Maria", "Teresa", "Mariana", "Jose", "Pedro", "Juan"]
let letra = "m"
console.log(buscarNombre(array, letra))

// 5. Escribe una función que tome un array de números y devuelva el número más grande.
function determinarMayor(array) {
    return Math.max(...array)
}

array = [0, 0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(determinarMayor(array))

// 6. Implementa una función que tome un array de objetos con propiedades "nombre" y "edad", y devuelva un nuevo array con solo los objetos que tengan una edad mayor a 18.
function determinarMayores(objeto) {
    let mayores = []
    for (let persona of objeto) {
        if (persona.edad >= 18) {
            mayores.push(persona)
        }
    }
    return mayores
}

const personas = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 17 },
    { nombre: "Pedro", edad: 25 },
    { nombre: "Ana", edad: 16 },
    { nombre: "Carlos", edad: 22 },
    { nombre: "Laura", edad: 19 }
]

console.log(determinarMayores(personas))

// 7. Crea una función que tome un array de números y devuelva la suma de todos los números negativos.
function sumarNegativos(array) {
    let total = 0
    for (let i of array) {
        if (i < 0) {
            total += i
        }
    }
    return total
}

array = [0, 0, -1, 1, -2, -3, 5, -8, 13, -21, 34]

console.log(sumarNegativos(array))

// 8. Escribe una función que tome un array de strings y devuelva un nuevo array con solo los strings que tengan más de 5 caracteres.
function determinarLongitud5(array) {
    let arrayLongitud = []
    for (let palabra of array) {
        if (palabra.length > 5) {
            arrayLongitud.push(palabra)
        }
    }
    return arrayLongitud
}

array = ["Hola", "Hola como andas?", "No   5", "No  5", "Ya no voy a poner mas nada"]
console.log(determinarLongitud5(array))

// 9. Implementa una función que tome un array de objetos con propiedades "nombre" y "apellido", y devuelva un nuevo array con solo los objetos que tengan el mismo apellido.

const PERSONAS = [
    { nombre: "Juan", apellido: "Pérez" },
    { nombre: "María", apellido: "García" },
    { nombre: "Pedro", apellido: "López" },
    { nombre: "Ana", apellido: "Fernández" },
    { nombre: "Carlos", apellido: "González" },
    { nombre: "Luis", apellido: "Martínez" },
    { nombre: "Laura", apellido: "Rodríguez" },
    { nombre: "Andrés", apellido: "Hernández" },
    { nombre: "Sofía", apellido: "Gómez" },
    { nombre: "Diego", apellido: "Vargas" },
    { nombre: "Valeria", apellido: "Morales" },
    { nombre: "Ricardo", apellido: "Silva" },
    { nombre: "Fernanda", apellido: "Navarro" },
    { nombre: "Javier", apellido: "Mendoza" },
    { nombre: "Carolina", apellido: "Vega" },
    { nombre: "Jorge", apellido: "Torres" },
    { nombre: "Alejandra", apellido: "Soto" },
    { nombre: "Daniel", apellido: "Herrera" },
    { nombre: "Isabela", apellido: "Romero" },
    { nombre: "Miguel", apellido: "Flores" },
    { nombre: "Lucía", apellido: "Paredes" },
    { nombre: "Gabriel", apellido: "Guzmán" },
    { nombre: "Natalia", apellido: "Mendoza" },
    { nombre: "Óscar", apellido: "Moreno" },
    { nombre: "Camila", apellido: "Morales" },
    { nombre: "Gustavo", apellido: "Rojas" },
    { nombre: "Juliana", apellido: "García" },
    { nombre: "Eduardo", apellido: "Hernández" },
    { nombre: "Paula", apellido: "Fuentes" },
    { nombre: "Rafael", apellido: "Soto" },
    { nombre: "Marcela", apellido: "Díaz" },
    { nombre: "Sebastián", apellido: "Velasco" },
    { nombre: "Melissa", apellido: "Silva" },
    { nombre: "Simón", apellido: "Hernández" },
    { nombre: "Carla", apellido: "González" },
    { nombre: "Héctor", apellido: "Muñoz" },
    { nombre: "Victoria", apellido: "Vargas" },
    { nombre: "Roberto", apellido: "Sánchez" },
    { nombre: "Lorena", apellido: "Romero" },
    { nombre: "Juan Pablo", apellido: "Gómez" },
    { nombre: "Renata", apellido: "Pérez" },
    { nombre: "Andrea", apellido: "Rojas" },
    { nombre: "Cristian", apellido: "Sánchez" },
    { nombre: "Valentina", apellido: "Moreno" },
    { nombre: "José", apellido: "Morales" },
    { nombre: "Paola", apellido: "López" },
    { nombre: "Ignacio", apellido: "García" },
    { nombre: "Marina", apellido: "Hernández" },
    { nombre: "Hugo", apellido: "Fernández" },
    { nombre: "Antonella", apellido: "Soto" },
    { nombre: "Santiago", apellido: "González" },
    { nombre: "Daniela", apellido: "Guzmán" }
]

//Recibo un array ordenado de apellidos y devuelvo apellidos que aparezcan mas de 1 vez
function buscarApellidosRepetidos(array) {
    let apellidosRepetidos = []

    for (let apellido of array) {
        //indexOf devuelve el indice donde se encuentra el elemento por el que preguntamos
        //lastIndexOf devuelve el ultimo inidice donde se encuentra el elemento por el que preguntamos
        if (array.indexOf(apellido) != array.lastIndexOf(apellido) && !(apellidosRepetidos.includes(apellido))) {
            apellidosRepetidos.push(apellido)
        }
    }
    return apellidosRepetidos
}

//Ordeno el array PERSONAS y lo guardo en sortedPersonas
let sortedPersonas = PERSONAS.sort((p1, p2) => (p1.apellido > p2.apellido) ? 1 : (p1.apellido < p2.apellido) ? -1 : 0);

//Extraigo todos los apellidos del objeto PERSONAS y ya quedan ordenados
function extraerApellidos(objeto) {
    let apellidos = []
    for (let persona of objeto) {
        apellidos.push(persona.apellido)
    }
    return apellidos
}

let apellidos = extraerApellidos(sortedPersonas)

//llamo a la funcion con el parametro del array ordenado
let apellidosRepetidos = buscarApellidosRepetidos(apellidos)

function agregarPersonas(arrayRepetidos, arrayObjeto) {
    let arrayDefinitivo = []
    for (let persona of arrayObjeto) {
        //Pregunto si el apellido de la persona que esta en el objeto, esta en la lista de apellidos repetidos
        if (arrayRepetidos.includes(persona.apellido)) {
            arrayDefinitivo.push(persona)
        }
    }
    return arrayDefinitivo
}

console.log(agregarPersonas(apellidosRepetidos, PERSONAS))

// 10. Crea una función que tome un array de números y devuelva un nuevo array con solo los números impares multiplicados por 2.
function devolverImparesPorDos(array) {
    let impares = []
    for (let num of array) {
        if (num % 2 == 1) {
            impares.push(num * 2)
        }
    }
    return impares
}

array = [0, 0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(devolverImparesPorDos(array))

// 11. Escribe una función que tome un array de objetos con propiedades "nombre" y "edad", y devuelva la edad promedio de todos los objetos.
function determinarPromedioEdades(objeto) {
    let promedio = 0
    for (let persona of objeto) {
        promedio += persona.edad
    }

    promedio = parseFloat((promedio / objeto.length).toFixed(2))
    return promedio
}

console.log(determinarPromedioEdades(personas))

// 12. Implementa una función que tome un array de strings y devuelva un nuevo array con solo los strings que contengan una letra específica.
function buscarNombre(array, letra) {
    let nombres = []
    for (let nombre of array) {
        if (nombre.toLowerCase().includes(letra.toLowerCase())) {
            nombres.push(nombre)
        }
    }
    return nombres
}

array = ["Maria", "Teresa", "Mariana", "Jose", "Pedro", "Juan"]
letra = "e"
console.log(buscarNombre(array, letra))

// 13. Crea una función que tome dos arrays y devuelva un nuevo array con los elementos comunes a ambos.
function buscarNombre(array1, array2) {
    let comun = []
    for (let elemento of array1) {
        if (array2.includes(elemento)) {
            comun.push(elemento)
        }
    }
    return comun
}

let array1 = ["manzana", "naranja", "pera", "plátano", "uva", "mango", "sandía", "papaya", "kiwi", "durazno"]
let array2 = ["uva", "pera", "mango", "fresa", "kiwi", "manzana", "piña", "melon", "sandía", "cereza"]
console.log(buscarNombre(array1, array2))

// 14. Escribe una función que tome un array de objetos con propiedades "nombre" y "puntuación", y devuelva el objeto con la puntuación más alta.
function determinarMayorPuntuacion(objeto) {
    let puntuacionMayor = -Infinity
    for (let persona of objeto) {
        if (persona.puntuacion >= puntuacionMayor) {
            puntuacionMayor = persona.puntuacion
        }
    }

    let mayores = []
    for (let persona of objeto) {
        if (persona.puntuacion == puntuacionMayor) {
            mayores.push(persona)
        }
    }
    return mayores
}

const puntuacion = [
    { nombre: "Juan", puntuacion: 20.9 },
    { nombre: "María", puntuacion: 17 },
    { nombre: "Pedro", puntuacion: 25.5 },
    { nombre: "Ana", puntuacion: 19.55 },
    { nombre: "Carlos", puntuacion: 25.5 },
    { nombre: "Laura", puntuacion: 19.5 }
];

console.log(determinarMayorPuntuacion(puntuacion))

// 15. Implementa una función que tome un array de números y devuelva un nuevo array con solo los números distintos (eliminando los duplicados).
array = [0, 0, -1, -1, -1, 1, -2, -3, 5, -8, 13, -21, 34] 

let sinRepetidos = array.filter( (elemento, index) => { return  ( array.indexOf(elemento) === index  ) } )

console.log(sinRepetidos)

// 16. Crea una función que tome un array de strings y devuelva un nuevo array con las palabras en orden alfabético.
array = ["manzana", "naranja", "pera", "plátano", "uva", "mango", "sandía", "papaya", "kiwi", "durazno"]

const ordenarArray = (array) => { 
    return array.sort( (a, b) =>{
        return (a > b) ? 1: (a < b) ? -1: 0 
    })
}

console.log(ordenarArray(array))

// 17. Escribe una función que tome un array de objetos con propiedades "nombre" y "edad", y devuelva un nuevo array con solo los nombres ordenados alfabéticamente.
// const personas = [
//     { nombre: "Juan", edad: 20 },
//     { nombre: "María", edad: 17 },
//     { nombre: "Pedro", edad: 25 },
//     { nombre: "Ana", edad: 16 },
//     { nombre: "Carlos", edad: 22 },
//     { nombre: "Laura", edad: 19 }
// ]

function devolverArrayOrdenado(objeto){
    sortedPersonas = objeto.sort( (nombre1, nombre2) => (nombre1.nombre > nombre2.nombre) ? 1: (nombre1.nombre < nombre2.nombre) ? -1: 0 )

    let nombresOrdenados = []

    let prueba = sortedPersonas.filter(persona => {return persona.nombre})

    console.log(prueba)

    let prueba2 = Object.values(sortedPersonas)

    console.log(prueba2)

    for (let personas of sortedPersonas){
        nombresOrdenados.push(personas.nombre)
    }
    return nombresOrdenados
}

console.log(devolverArrayOrdenado(personas))

// 18. Implementa una clase "Estudiante" que tenga las propiedades "nombre", "edad" y "cursos" (un array de strings). Crea varios objetos "Estudiante" y realiza operaciones con ellos (agregar cursos, obtener la cantidad de cursos, etc.).

// 19. Crea una clase "Calculadora" que tenga un array de números como propiedad. La clase debe tener métodos para sumar todos los números, restar todos los números y devolver el promedio de todos los números.
class Calculadora {
    sumarArray (array){
        let suma = 0
        for(let i of array){
            suma += parseFloat(i) 
        }
        return suma
    }

    restarArray(array){
        let resta = 0
        for(let i of array){
            resta -= parseFloat(i) 
        }
        return resta
    }

    sacarPromedio(array){
        let promedio = 0
        promedio = this.sumarArray(array) / array.length
        return promedio
    }
}

array = [0, 0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

let calculo1 = new Calculadora

console.log(calculo1.sumarArray(array))
console.log(calculo1.restarArray(array))
console.log(calculo1.sacarPromedio(array))


// 20. Implementa una clase "Tienda" que tenga una propiedad "productos" (un array de objetos) y métodos para agregar productos, eliminar productos y buscar productos por nombre.









