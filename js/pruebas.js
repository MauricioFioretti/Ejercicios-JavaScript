// Usa forEach para imprimir cada elemento de un array de números.
let array1 = [-1, -5, -3, 3, 0, 1, 1.5, 1.9999, 2, 3, 7, 89, 50, 51, 45, 6]
let array2 = ["Hola", "Hola todo bien como estas", "Hola", "Hola", "Hola"]
let array3 = ["C", "b", "H", "k", "l", "f", "fal", "fal", "find", "fer", "Q", "a", "A", "L"]
let temperaturas = [-20, -10, 1, 10, 30, 50, 100]

array1.forEach(i => console.log(i))

console.clear()
// Utiliza find para encontrar el primer número mayor que 50 en un array de números.
console.log(array1.find(i => i > 50))

console.clear()
// Emplea filter para obtener todos los números pares de un array de números.
let pares = array1.filter(i => i % 2 == 0)
console.log(pares)

console.clear()
// Utiliza some para verificar si un array de palabras contiene al menos una palabra de más de 10 caracteres.
if (array2.some(i => i.length > 9)) { console.log(`Si hay una palabra de mas de 10 caracteres`) }

// Usa map para duplicar cada elemento de un array de números.
let duplicados = array1.map(i => i * 2)
console.log(duplicados)

console.clear()
// Emplea reduce para obtener la suma de todos los elementos de un array de números.
let resultado = duplicados.reduce((acumulador, i) => acumulador += i, 0)
console.log(resultado)

console.clear()
// Utiliza sort para ordenar un array de palabras alfabéticamente.
console.log(array3.sort((a, b) => (a > b) ? 1 : (a < b) ? -1 : 0))

console.clear()
// Utiliza map para convertir un array de temperaturas en grados Celsius a grados Fahrenheit.
let temperaturasFahrenheit = temperaturas.map(i => i > -273.16 && (i * (9 / 5)) + 32)
console.log(temperaturasFahrenheit)

console.clear()
// Emplea filter para obtener todos los objetos de un array de productos que tengan un precio mayor a $50.
const productos = [
    { nombre: "Camiseta", precio: 20.99, descuento: 15 },
    { nombre: "Pantalón", precio: 39.99, descuento: 30 },
    { nombre: "Zapatos", precio: 59.99, descuento: 45 },
    { nombre: "Bolso", precio: 29.99, descuento: 20 },
    { nombre: "Gafas de sol", precio: 14.99, descuento: 12 },
    { nombre: "Reloj", precio: 79.99, descuento: 60 },
    { nombre: "Teléfono móvil", precio: 399.99, descuento: 350 },
    { nombre: "Portátil", precio: 799.99, descuento: 699 },
    { nombre: "Auriculares", precio: 49.99, descuento: 40 },
    { nombre: "Tableta", precio: 299.99, descuento: 200 }
]

let productosMay50 = productos.filter(i => i.precio > 50)
console.log(productosMay50)

console.clear()
// Usa forEach para imprimir la tabla de multiplicar de un número específico (por ejemplo, 5).
let arrayNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arrayNum.forEach(i => console.log(i * 5)))

console.clear()
// Utiliza find para encontrar el primer objeto producto con un descuento mayor al 30% en un array de productos.
console.log(productos.find(i => i.descuento <= i.precio * 0.7))

console.clear()
// Emplea some para verificar si hay al menos un alumno con edad menor a 18 años en un array de objetos Alumno.
class Estudiante {
    constructor(nombre, edad, cursos) {
        this.nombre = nombre,
        this.edad = edad,
        this.cursos = cursos
    }
}
const nombres = ["Laura", "Carlos", "Ana", "David", "Sofia", "Diego", "Valeria", "Luis", "Camila", "Javier"];
const materias = [
    ["Historia", "Geografía", "Literatura", "Arte", "Sociales"],
    ["Biología", "Química", "Física", "Matemáticas", "Ciencias Naturales"],
    ["Inglés", "Francés", "Alemán", "Italiano", "Español"],
    ["Programación", "Algoritmos", "Bases de Datos", "Inteligencia Artificial", "Sistemas Operativos"],
    ["Economía", "Administración", "Contabilidad", "Marketing", "Finanzas"]
];

function generarEdadAleatoria(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const estudiante1 = new Estudiante(nombres[0], generarEdadAleatoria(17, 25), materias[0]);
const estudiante2 = new Estudiante(nombres[1], generarEdadAleatoria(17, 25), materias[1]);
const estudiante3 = new Estudiante(nombres[2], generarEdadAleatoria(17, 25), materias[2]);
const estudiante4 = new Estudiante(nombres[3], generarEdadAleatoria(17, 25), materias[3]);
const estudiante5 = new Estudiante(nombres[4], generarEdadAleatoria(17, 25), materias[4]);
const estudiante6 = new Estudiante(nombres[5], generarEdadAleatoria(17, 25), materias[0]);
const estudiante7 = new Estudiante(nombres[6], generarEdadAleatoria(17, 25), materias[1]);
const estudiante8 = new Estudiante(nombres[7], generarEdadAleatoria(17, 25), materias[2]);
const estudiante9 = new Estudiante(nombres[8], generarEdadAleatoria(17, 25), materias[3]);
const estudiante10 = new Estudiante(nombres[9], generarEdadAleatoria(17, 25), materias[4]);

let estudiantes = []
for (let i = 1; i <= 10; i++) {
    const estudiante = eval(`estudiante${i}`)
    estudiantes.push(estudiante)
}
// console.log(estudiantes.find( i => i.edad < 18 ))

if (estudiantes.some( i => i.edad < 18 )){ console.log(`Al menos un estudiante tiene menos de 18`) }

console.clear()
// Usa reduce para obtener el producto de todos los elementos de un array de números.
console.log(temperaturas.reduce( (acumulador, i) => acumulador * i, 0 ))

console.clear()
// Emplea map para obtener un array de objetos con las edades de los alumnos en años-luz (dividiendo la edad en años por 9.46 trillones, que es la cantidad de kilómetros que recorre la luz en un año).
let alumnos = estudiantes.map( i => {
    return { nombre: i.nombre, edad: i.edad / (9.46*1000000000000), cursos: i.cursos  }
} )
console.log(alumnos)

console.clear()
// Utiliza filter para obtener todos los números primos de un array de números.
function primo(x){
    x = Math.sign(x)*x
    
    for(let i = 2; i <= Math.sqrt(x); i++){
        if(x %i === 0 ){
            return false
        }
    }

    if(x-Math.floor(x) > 0 || x === 0 || x === 1){
        return false
    }
    
    return true
}

let primos = array1.filter( i => primo(i))
console.log(primos)

console.clear()
// Emplea reduce para obtener el promedio de las edades de un array de objetos Alumno.
let resultados = estudiantes.reduce( (acumulador, estudiante) => acumulador + estudiante.edad, 0 )
console.log( resultados )

console.clear()
// Usa forEach para imprimir todos los días de la semana en inglés.
let dias = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
dias.forEach( i => console.log(i) )

console.clear()
// Utiliza sort para ordenar un array de objetos producto por precio de forma ascendente.
// const productos = [
//     { nombre: "Camiseta", precio: 20.99, descuento: 15 },
//     { nombre: "Pantalón", precio: 39.99, descuento: 30 },
//     { nombre: "Zapatos", precio: 59.99, descuento: 45 },
//     { nombre: "Bolso", precio: 29.99, descuento: 20 },
//     { nombre: "Gafas de sol", precio: 14.99, descuento: 12 },
//     { nombre: "Reloj", precio: 79.99, descuento: 60 },
//     { nombre: "Teléfono móvil", precio: 399.99, descuento: 350 },
//     { nombre: "Portátil", precio: 799.99, descuento: 699 },
//     { nombre: "Auriculares", precio: 49.99, descuento: 40 },
//     { nombre: "Tableta", precio: 299.99, descuento: 200 }
// ]

productos.sort( (a, b) => (a.precio > b.precio) ? 1: (a.precio < b.precio) ? -1: 0 )
console.log(productos)

console.clear()
// Expresar el siguiente script en una sola linea de codigo:

// let total = 0
// for (let i = 1; i <= 10; i++) {
//     total += i
// }
// console.log(total)

function sumatoria(a, b){ return ( (a + b) * b ) / 2 } console.log( sumatoria(2, 10) )

//Creamos un array con Array.from donde el primer parametro es la cantidad de elementos que va a tener y luego una funcion flecha para determinar que cada elemento va a ser del 1 al 10
let sumatorias = Array.from( {length: 10}, (_,i) => i + 1  )
console.log(sumatorias)

//Finalmente al array aplicamos reduce() para sumar cada elemento del array
sumatorias = sumatorias.reduce( (acumulador, elemento) => acumulador + elemento, 0 )
console.log(sumatorias)

//En una sola linea quedaria
let x = 10
console.log(Array.from({length: x} ,(_,i) => i+1).reduce((acumulador, elemento) => acumulador + elemento, 0))

// Utiliza sort para ordenar un array de fechas en orden ascendente.
let arrayFechas = [new Date('2023-05-15'), new Date('2023-07-15'), new Date('2023-07-05')]
arrayFechas.sort( (a, b) => (a > b) ? 1: (a < b) ? -1: 0 )
console.log(arrayFechas)

console.clear()
// Crea una clase Alumno con las propiedades "nombre", "edad" y "notas" (un array de números). Crea varios objetos Alumno y realiza operaciones con ellos (calcular promedio de notas, encontrar el alumno con la mejor nota, etc.) utilizando funciones de orden superior.
class Alumno {
    constructor(nombre, edad, notas) {
        this.nombre = nombre
        this.edad = edad
        this.notas = notas
    }

    promedio(){
        let sumaNotas = this.notas.reduce( (acumulador, i) => acumulador + i, 0)
        let promedio = parseFloat((sumaNotas / this.notas.length).toFixed(2))
        console.log(promedio)
    }
}

const alumno1 = new Alumno('Juan', 20, [80, 85, 90])
const alumno2 = new Alumno('María', 22, [102, 88, 91])
const alumno3 = new Alumno('Pablo', 25, [75, 100, 91])

alumnos = [alumno1, alumno2, alumno3]

let mejorNota = {}
let mayor = 0

alumnos.forEach( alumno => {
    let may = Math.max(...alumno.notas)
    if (may > mayor){
        mejorNota = alumno
        mayor = may
    }
})

console.log(mejorNota)

alumno1.promedio()
alumno2.promedio()
alumno3.promedio()

console.clear()