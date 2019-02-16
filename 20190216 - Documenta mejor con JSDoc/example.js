// One App Center
// Documenta mejor con JSDoc

/** Suma el valor de a y de b.
 * @param {Number} a * @param {Number} b 
 * @returns {Number}*/ 
function sumar(a, b){
    return a + b;
}

/** Une una cadena y un número.
 * @param {String} s * @param {Number} n 
 * @returns {String}*/
function concatenar(s, n){
    return s + " " + n;
}

let x = concatenar("Gato", 26);
let y = sumar(2,3);
