// Generar un número aleatorio entre 1 y 100.

// Redondear el número 4.89 al entero más cercano.

// Calcular la raíz cuadrada de 25.

// Obtener el valor absoluto de -15.

// Obtener el valor máximo entre 4, 18 y 10.

// Obtener el valor mínimo entre 5, 13 y 7.

// Generar un número decimal aleatorio entre 0 y 1.

// Redondear hacia abajo el número 6.7.

// Redondear hacia arriba el número 3.2.

// Obtener la fecha actual.

// Obtener el día del mes actual.

// Obtener el mes actual (como número, donde enero es 0 y diciembre es 11).

// Obtener el año actual.

// Obtener la hora actual.

// Obtener los minutos actuales.

// Obtener el último día del mes actual.

// Obtener el número de días que faltan para Navidad (25 de diciembre).

// Obtener la fecha de mañana.

// Obtener el nombre del día de la semana actual.

// Obtener el número de segundos que han pasado desde el inicio del año.

// Crea una función llamada generadorNumero que no tome ningún parámetro. Esta función debe devolver un número entero aleatorio entre 0 y 100.

// Crea una función llamada variosNumeros que tome dos parámetros: generador y cantidad. La función variosNumeros debe mostrar en la consola cantidad números generados utilizando la función generador.

// Ejecuta la función variosNumeros con el generador generadorNumero y la cantidad de X números.


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