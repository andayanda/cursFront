//Eliminar elements, removeChild 
//a) Eliminem el primer Link que troba ... en aquest cas la opció de menú Vender
const el1 = document.querySelector("nav");
console.log(el1);
var el2= document.getElementsByClassName("navegacion");
console.log(el2);

var elBorrado =el1.removeChild(el1.firstChild);
var elBorrado2 =el1.removeChild(el1.children[0]);

console.log(elBorrado);
console.log(elBorrado2);

console.log(el1);

//b) Accedir a la class="navegacion" y eliminem la opció de menú Registro´. Eliminem a partir del pare. 
// console.log(barraNav[0].children);
// barraNav[0].removeChild(barraNav[0].children[2])
