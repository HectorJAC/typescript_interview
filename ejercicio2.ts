/*
    Dada una cadena s y un caracter c, encuentre la distancia entre todos los caracteres de la cadena
    y el caracter s. Puede suponer que el caracter c aparece al menos una vez en la cadena.
*/

const distanceBetweenCharacters = (s: string, c: string): number[] => {
    let result: number[] = [];
    let previousPosition: number = 0;
    let nextPosition:number = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) { 
            result.push(0);
            previousPosition = i;
        } else if (previousPosition !== 0) { 
            let resta = i - previousPosition;
            result.push(resta);
        } else {
            result.push(-1);
        }
    }

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === c) {
            nextPosition = i;
        } else if (nextPosition !== 0) {
            let resta = nextPosition - i;
            if (result[i] === -1 || resta < result[i]) {
                result[i] = resta;
            }
        }
    }

    return result;
}

console.log('Ejercicio 2');
console.log('Cadena de caracteres: helloworld');
console.log(distanceBetweenCharacters('helloworld', 'l'));
