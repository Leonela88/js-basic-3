// 1. Escribe una función que tome dos cadenas de texto como argumentos y devuelva su concatenación.
function stringText (string1, string2){ 
    let bind = string1 + string2;
    return bind;
}
console.log(stringText("Fake", " Happy"));

// 2. Escribe una función que tome una cadena de texto como argumento y devuelva su longitud.
function stringLong (fake_happy){ 


    return fake_happy.length; 

}console.log(stringLong("Paramore")); 

// 3. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas.

function stringUpperC (fake_happy){ 


    return fake_happy.toUpperCase(); 

}console.log(stringUpperC("Paramore")); 
// 4. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas.
function stringLowC (fake_happy){ 


    return fake_happy.toLowerCase(); 

}console.log(stringLowC("RAMONES")); 

// 5. Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición.
function getIndex (text, position){
return text[position];

}console.log("Imre"[2]);

// 6. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena invertida.

function reversed(text){

let arrayText = text.split('');
let reversedArray = arrayText.reverse();
return reversedArray.join(' ');

} console.log(reversed("Hallo"));
// 7. Escribe una función que tome una cadena de texto y un carácter como argumentos, y devuelva la cantidad de veces que el carácter aparece en la cadena.

function countChar(text, char) {
    let count = 0; 
    
    for (let i = 0; i < text.length; i++) {
        
        if (text[i] === char) {
            count++; 
        }
    }

    return count; 
}console.log(countChar("Leonela", "e"));

// 8. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena sin espacios en blanco.
function removeWhitespace(text) {
  
  return text.replace(/\s/g, '');
}

console.log(removeWhitespace("What you get is what you see"));



// 9. Escribe una función que tome una cadena de texto como argumento y devuelva true si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), o false si no lo es.
function isPalindrome(text) {
 
  const normalizedText = text.replace(/\s/g, '').toLowerCase();
  const reversedText = normalizedText.split('').reverse().join('');
  return normalizedText === reversedText;
}

console.log(isPalindrome("Neuquen")); 
console.log(isPalindrome("Roma"));       

// 10. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.

function capitalizeWords(text) {
  
  const words = text.split(' ');
  const capitalizedWords = words.map(word => {
    if (word.length === 0) {
      return '';
    }
    
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  
  return capitalizedWords.join(' ');
}


console.log(capitalizeWords("What you get is what you see")); 
