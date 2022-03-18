// Crear un nou link en el menú de Navegació principal 
//Amb appendChild crearem una nova opció de navegació en el menú principal 
var el1= document.getElementsByClassName("navegacion");
console.log(el1);
var nuevoA = document.createElement('a'); 
nuevoA.textContent="alquilar"; 
nuevoA.href="/ alquilar";
const el5 = document.querySelector("nav");
el5.appendChild(nuevoA);
console.log(el5);
console.log(nuevoA);
console.log(el1);