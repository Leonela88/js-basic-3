// 1. Escribe una función que tome un objeto literal con una propiedad "nombre" y devuelva el valor de esa propiedad.
function getName(obj) {
    return obj.name;
}
const person = { name: "Hans", edad: 25 };

console.log(getName(person));

// 2. Escribe una función que tome un objeto literal con una propiedad "edad" y un número como argumentos, y actualice el valor de la propiedad "edad" con el número dado.

function update(obj, number) {
    obj.edad = number;
    return obj;
}
let persona = {
    nombre: "Mara",
    edad: 29,
    ciudad: "Madrid"
};
const personaActualizada = update(persona, 31);
console.log(personaActualizada);

//  3. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y agregue una nueva propiedad al objeto con la cadena de texto como nombre y un valor inicial de null.
function agregarPropiedad(obj, nombreProp) {
  obj[nombreProp] = null;
  return obj; 
} 

const $persona = { nombre: "Ana" };

agregarPropiedad($persona, "edad");

console.log($persona);

// 4. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y elimine la propiedad del objeto con el nombre dado.
function eliminarPropiedad(obj, nombreProp) {
  delete obj[nombreProp];
  return obj;
}
const _persona = { nombre: "Ana", edad: 25 };

eliminarPropiedad(_persona, "edad");

console.log(_persona);

// 5. Escribe una función que tome un objeto literal como argumento y devuelva la cantidad de propiedades que tiene.

function cantidadDePropiedades (obj){
    return Object.keys(obj).length;
}
 const fruta = {nombre :"naranja", sabor:"dulce", caracter: "cítrico"};
 console.log(cantidadDePropiedades(fruta));


// 6. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y devuelva true si el objeto tiene una propiedad con ese nombre, o false si no la tiene.






// 7. Escribe una función que tome un objeto literal como argumento y devuelva un array con todos los valores de sus propiedades.
// 8. Escribe una función que tome dos objetos literales como argumentos y devuelva true si tienen las mismas propiedades y los mismos valores en esas propiedades, o false si son diferentes.
// 9. Escribe una función que tome un objeto literal como argumento y devuelva una copia exacta de ese objeto.
// 10. Escribe una función que tome dos objetos literales como argumentos y devuelva un nuevo objeto con todas las propiedades de ambos objetos. Si hay propiedades con el mismo nombre, el valor del segundo objeto deberá prevalecer.
