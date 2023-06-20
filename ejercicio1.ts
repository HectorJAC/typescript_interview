/* 
    Existe una escalera con N escalones, y puedes subir de 1 o 2 escalones a la vez.
    Dado N, escribe una funcion que devuelva el numero de formas unicas que puedes subir la escalera.
    El orden importa.
*/

const escalera = (n: number):any => {
    if (n === 1 || n === 0) {
        return 1;
    }
    
    let result:number = 0;
    let previous:number = 1;
    let previous2:number = 1;

    if (n > 0) {
    for (let i = 2; i <= n; i++) {
        result = previous + previous2;
        previous2 = previous;
        previous = result;
    }
    } else {
        return "No se aceptan numeros negativos"
    }
    
    return result;
};

console.log('Ejercicio 1 - Primera parte');
console.log(escalera(4));

/*
    ¿Que pasaria si, en lugar de poder subir 1 o 2 escalones a la vez, pudieras subir cualquier numero de escalones de una lista?
    de un conjunto de enteros positivos X? Por ejemplo, si X = [1, 3, 5], podrias subir 1, 3 o 5 escalones a la vez.
*/


