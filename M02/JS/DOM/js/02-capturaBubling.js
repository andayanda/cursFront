//Event Bubbling: stopPropagation
/*Les següents variables recullen información de la primera card 
const cardDiv = document.querySelector('.card'); 
const infoDiv = document.querySelector('.info'); 
const titulo = document.querySelector('.titulo');
Afegeix un eventListener, per tal de que capturi el click en cada un d’ells. 
Escriu en consola un missatge corresponent a cada event.*/
const cardDiv = document.querySelectorAll(".card")[0];
cardDiv.addEventListener("click", (event) => {
  console.log(event);
  let elemento = event.target.className;
  array.forEach(element => {
      console.log("esto es el: "+elemento);
      
  });