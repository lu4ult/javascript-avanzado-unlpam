/*  Instrucciones:
*   cd tp1
*   nodemon index.js
*/


const arregloBaseEnteros = [4, 9, 8, 1, 8, 3, 7, 9, 6, 2, 4, 4];

// 1.Suma de elementos en un arreglo:
// Escribe una función que use reduce() para sumar todos los elementos de un arreglo de
// números.

const sumatoria = arregloBaseEnteros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(`Sumatoria: ${sumatoria}`);

// 2.Multiplicación de elementos en un arreglo:
const producto = arregloBaseEnteros.reduce((acumulador, valorActual) => acumulador * valorActual, 1);
console.log(`Multiplicación: ${producto}`);


// 3.Concatenación de cadenas:
const concatenado = arregloBaseEnteros.reduce((acc, curr) => acc += JSON.stringify(curr), '');
console.log(`Arreglo Concatenado: ${concatenado}`);


// 4.Calcular el promedio:
const promedio = (arreglo) => {
    const sumatoria = arreglo.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    const largo = arreglo.length;

    return sumatoria / largo;
}

console.log(`Promedio: ${promedio(arregloBaseEnteros)}`);


// 5.Encontrar el valor máximo:

console.log(`Valor esperado: ${Math.max(...arregloBaseEnteros)}`);
const maximo = arregloBaseEnteros.reduce((acc, current) => current > acc ? current : acc, 0);
console.log(`Maximo: ${maximo}`);


// 6.Contar ocurrencias:
// Escribe una función que cuente cuántas veces aparece un elemento específico

const contarOcurrencias = (arreglo, buscado) => {
    const contador = arreglo.reduce((contador, valorActual) => {
        if (valorActual === buscado) {
            contador++;
        }
        return contador;
    }, 0);

    return contador;
}

const valorAContar = 4;
console.log(`Veces que aparece ${valorAContar}: ${contarOcurrencias(arregloBaseEnteros, valorAContar)}`);

// 7. Ordenar palabras por longitud:
// Crea una función que ordene un arreglo de palabras por su longitud, es decir, la cantidad de caracteres.

const arregloBasePalabras = ['manzana', 'pera', 'banana', 'tomate', 'zapallito'];
arregloBasePalabras.sort((a, b) => a.length - b.length);
console.log("Arreglo ordenado:")
console.log(arregloBasePalabras);


// 8. Búsqueda de un elemento en un arreglo:
// Escribe una función que busque un elemento específico en un arreglo y devuelva true si se
// encuentra o false si no se encuentra.

const palabraBuscada = 'banana';

function estaPalabraEnArreglo(arreglo, palabraBuscada) {
    let estaEnArreglo = false;
    arreglo.forEach(palabra => {
        if (palabra === palabraBuscada) {
            estaEnArreglo = true;
        }
    });
    return estaEnArreglo;
}

console.log(`Valor esperado: ${arregloBasePalabras.some(palabra => palabra === palabraBuscada)}`)
console.log(`${palabraBuscada} se encuentra en el arreglo?: ${estaPalabraEnArreglo(arregloBasePalabras, palabraBuscada)}`);


// 9. Búsqueda de la primera coincidencia:
// Implementa una función que busque la primera instancia de un elemento en un arreglo y
// devuelva su índice. Si el elemento no está en el arreglo, devuelve -1.

const numeroBuscado = 4;
function indiceDe(arreglo, buscado) {
    let resultado = -1;
    for (let i = 0; i < arreglo.length && resultado === -1; i++) {              //Recorremos el array excepto si ya encontró un resultado.
        if (arreglo[i] === buscado)
            resultado = i;
    }

    return resultado;
}

console.log(`Indice esperado: ${arregloBaseEnteros.indexOf(numeroBuscado)}`)
console.log(`Indice de ${numeroBuscado}: ${indiceDe(arregloBaseEnteros, numeroBuscado)}`);


// 10. Búsqueda de la última coincidencia:
// Crea una función que busque la última instancia de un elemento en un arreglo y devuelva
// su índice. Si el elemento no está en el arreglo, devuelve -1.


//Nota: igual al anterior pero quitamos validación al recorre el array.
function ultimoIndiceDe(arreglo, buscado) {
    let resultado = -1;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === buscado)
            resultado = i;
    }

    return resultado;
}

console.log(`Último índice de ${numeroBuscado}: ${ultimoIndiceDe(arregloBaseEnteros, numeroBuscado)}`)