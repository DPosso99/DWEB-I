let saludar = "hola a todos";
var contador = 5;
const david = "perro hp";

if (contador > 4) {
  saludar = "hola a todos desde el if";
  console.log(saludar);

}
console.log(saludar);
console.log(saludar[5]);
console.log(saludar.length);
console.log(saludar.toUpperCase());
console.log(saludar.toLowerCase());
console.log(saludar.indexOf("a"));
console.log(saludar.includes("tod"));

//inmutabilidad vs mutabilidad
console.log(saludar.slice(0, 10)); //inmutable
console.log(saludar.substring(0, 10)); //inmutable casi no se usa

//operador ternario
let mensaje = contador > 4 ? "contador mayor a 4" : "jaja manco";
console.log(mensaje);

//falsy values
//false
//0
//""
//null
//undefined
//NaN

for (let i = 0; i < 10; i++) {
  console.log(i);
}

while (contador > 0) {
  console.log("contador", contador);
  contador--;
}

//arrays
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    }


//push, pop, shift, unshift, concat, slice, splice, join, indexOf, includes
const frutas = ["manzana", "banana", "naranja"];
const verduras = ["lechuga", "tomate", "pepino"];

//push es mutable
frutas.push("kiwi");
console.log(frutas);
frutas.pop();
console.log(frutas);

console.log(frutas.concat(verduras)); //une arreglos
console.log(frutas.slice(0, 2)); //corta el arreglo

//join une los elementos de un arreglo en un string
console.log(frutas.join(", "));
//split separa un string en un arreglo
const cadenaFrutas = frutas.join(", ");
console.log(cadenaFrutas);
//reverse invierte el arreglo
console.log(frutas.reverse()); //inmutable

//ultimo elemento
console.log(frutas[frutas.length - 1]); //ultimo elemento
//primer elemento
console.log(frutas[0]); //primer elemento
//splice elimina elementos de un arreglo
console.log(frutas.splice(1, 2)); //elimina 2 elementos desde la posicion 1 mutable
console.log("-----------------------------");
// sort ordena el arreglo mutable
console.log(frutas.sort()); //ordena el arreglo

//agregar a frutas banano
frutas.push("banano");

console.log("-----------------------------");
//esperado manzana, pera, sandia, uva
const frutas2 = ["manzana", "pera", "naranja", "uva"];
console.log(frutas2);

//modificar frutas2 a manzana, pera, sandia, uva con splice
frutas2.splice(2, 0, "sandia");
console.log(frutas2);

console.log("-----------------------------");
//modificar frutas2 a manzana, pera, sandia, uva con slice
const frutas3 = frutas2.slice(0, 2).concat("sandia", frutas2.slice(2));
console.log(frutas3);

//objetos
const michi = {
nombre: "michi",
edad: 5,
raza: "persa",
color: "blanco",
ladrar() {
  console.log("guau guau");
    }
};

for (let key in michi) {
  console.log(key, michi[key]);
}
console.log(michi.nombre);
console.log(michi["nombre"]);

for (let values of frutas) {    
    console.log(values);
}

