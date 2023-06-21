/*
    Dada una matriz de numeros positivos y un numero positivo S, encuentre la longitud del subarreglo
    contiguo mas pequeño cuya suma sea mayor o igual a S. Retorna 0, si no existe tal subarreglo.
*/

const minLenSubArray = (array: number[], num: number): any => { // Funcion que recibe un arreglo de numeros y un numero y devuelve any
    let minLong:number = 999999; // Variable que se inicializa con un numero muy grande para que se acumule el valor minimo que se esta buscando
    let sum:number = 0
    let inicialPosition:number = 0 
    let finalPosition:number = 0 

    if (array.every((x) => x >= 0) && num >= 0) {
        // every devuelve true si todos los elementos del arreglo cumplen con la condicion que se le pasa en el callback
        while (inicialPosition < array.length) {
            if (sum < num && finalPosition < array.length) {
                sum += array[finalPosition]; // Se acumula la suma de los numeros del arreglo
                finalPosition++; // Se mueve una posocion del arreglo la variable fin
            } else if (sum >= num) {
                minLong = Math.min(minLong, finalPosition - inicialPosition); // Se compara el valor minimo con la resta de la variable fin menos la variable inicio
                sum -= array[inicialPosition]; // Se resta el numero de la posicion inicio al acumulado
                inicialPosition++; // Se mueve una posicion del arreglo la variable inicio
            } else {
                break;
            }
        }
        if (minLong == 999999) {
            // Si no se encontro un subarreglo que cumpla con la condicion se imprime 0
            return 0; 
        } else {
            // Se imprime la longitud minima del subarreglo que sea mayor o igual al numero dado
            return minLong; 
        }
    } else {
        return 'Solo se permiten numeros positivos';
    };
};

const listOfNumbers:number[] = [2, 1, 5, 2, 8];
const num:number = 7;

console.log('Ejericio 3');
console.log(`Arreglo: [${listOfNumbers}] || Numero: ${num}`);
console.log(minLenSubArray(listOfNumbers, num));