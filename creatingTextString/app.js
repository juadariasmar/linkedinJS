'use strict'

//*************************
//*** Creating Text String

let country = 'Mexico';

let food = new String('Ceviche');

console.log("The text string have: " + country.length + " letters");

console.log("The text string have: " + food.length + " letters");

//*************************
//*** Search Methods | Part 1


let message = "I am Learning Javascript and i am learning a lot";

let result;

// indexOf //**busca desde el inicio de la cadena la coincidencia, retornando la posicion de esta*/
//result = message.indexOf("learning");

// lasIndexOf //**busca desde el final de la cadena la coincidencia, retornando la posicion de esta */
//result = message.lastIndexOf("learning");
//result = message.lastIndexOf("l");

// search //**busca y devuelve la posicion de la primer coincidencia, muy silimar a indexOf */
//result = message.search("learning");

// search | Regular Expression //**busca coincidencias de la combinacion en expresion regular, agregando que ignore el uso de mayusculas o minusculas */
//result = message.search(/ja/i);

//console.log(result);


//**********************
//*** Search Methods | Part 2

// match: //** uso el metodo match con la expresion regular para buscar la palabra learning, junto con los operadores g e i; g para acceder de manera global y encontrar todas las coincidencias y el operador i para pasarle de que ignore el uso de mayusculas o minusculas */
//result = message.match(/learning/gi);

// substr: //** el metodo substr recibe como parametros la posicion del intervalo donde va a buscar, el segundo parametro indica el numero de espacios que tomara el intervalo; devolviendo entonces los caracteres que componen dicho intervalo */
//result = message.substr(5, 8);

// substring: //** el metodo substring recibe como parametros la posicion del intervalo donde va a buscar, el segundo parametro indica la posicion hasta donde llegara el intervalo; devolviendo entonces los caracteres que componen dicho intervalo */
//result = message.substring(5, 13);

// charAt: //** devuelve el caracter en la posicion que se pasa como parametro */
result = message.charAt(5);

console.log(result);