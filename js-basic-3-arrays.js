
// 1. Escribe una función que tome un array de números como argumento y devuelva la suma de todos sus elementos.
function addElements(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
};

let myArray = [4, 7, 9];
let res = addElements(myArray);
console.log(res);

// 2. Escribe una función que tome un array de números como argumento y devuelva el promedio de todos sus elementos.
function average($numbers) {
    let sum = 0;

    for (let i = 0; i < $numbers.length; i++) {
        sum += $numbers[i];
    } return sum / $numbers.length;
}
let $myArray = [10, 7, 8];
let $result = average($myArray);
console.log($result);

// 3. Escribe una función que tome un array de números como argumento y devuelva el array ordenado de forma ascendente.
function ascOrder(_num) {
    return _num.slice().sort((a, b) => a - b);
} console.log(ascOrder([24, 17, 2, 10]));




// 4. Escribe una función que tome un array de números y un número como argumentos, y devuelva un nuevo array con los elementos mayores al número dado.

function largestN(arr, numb) {
    return arr.filter(element => element > numb);
} console.log(largestN([3, 10, 6, 1, 20], 5));



// 5. Escribe una función que tome dos arrays como argumentos y devuelva un nuevo array con todos los elementos de ambos arrays.

function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);
} console.log(joinArrays([1, 2, 3], [4, 5, 5, 6]));



// 6. Escribe una función que tome un array de números como argumento y devuelva el número máximo dentro del array.

function maxNum(arr) {
    return Math.max(...arr);
} console.log(maxNum([1, 6, 15]));

// 7. Escribe una función que tome un array de números como argumento y devuelva el número mínimo dentro del array.

function minNum(arr) {
    return Math.min(...arr);
} console.log(minNum([1, 6, 15]));

// 8. Escribe una función que tome un array y un elemento como argumentos, y devuelva la cantidad de veces que el elemento aparece en el array.

function countAppear(arr, element) {
    return arr.filter(x => x === element).length;
} console.log(countAppear(["wise", "rot", "blau", "gelb"], "rot"));

// 9. Escribe una función que tome un array como argumento y devuelva un nuevo array sin elementos duplicados.

function deleteDup(arr) {
    return [...new Set(arr)];
} console.log(deleteDup(["wise", "rot", "blau", "gelb", "rot"]));

// 10. Escribe una función que tome un array como argumento y devuelva un nuevo array con los elementos en orden inverso.
function reverseArray(arr) {
    return arr.slice().reverse();
} console.log(reverseArray(["wise", "rot", "blau", "gelb"]));
