/* 
    Existe una escalera con N escalones, y puedes subir de 1 o 2 escalones a la vez.
    Dado N, escribe una funcion que devuelva el numero de formas unicas que puedes subir la escalera.
    El orden importa.
*/

const stairway = (n: number):any => {
    if (n === 1) {
        return 1;
    } else if (n < 0) {
        return "No se permiten numeros negativos";
    };

    let result:number = 0;
    let previousNumber:number = 1;
    let previousNumber2:number = 1;

    for (let i = 2; i <= n; i++) {
        result = previousNumber + previousNumber2;
        previousNumber2 = previousNumber;
        previousNumber = result;
    };

    return result;
};

console.log('Ejercicio 1 - Primera parte');
console.log(stairway(4));

/*
    ¿Que pasaria si, en lugar de poder subir 1 o 2 escalones a la vez, pudieras subir cualquier numero de escalones de una lista?
    de un conjunto de enteros positivos X? Por ejemplo, si X = [1, 3, 5], podrias subir 1, 3 o 5 escalones a la vez.
*/