//Delegation
/*Com hem vist, la següent variable recull información de la primera card
const cardDiv = document.querySelector('.card');
Dins de la card tenim:
*/
const cardDiv = document.querySelectorAll(".card")[1];
cardDiv.addEventListener("click", (event) => {
//   console.log(event);
  let elemento = event.target.className;
  switch (elemento) {
    case "categoria concierto":
      console.log("categoria concierto ");
      event.stopPropagation();

      break;
    case "titulo":
      console.log("titulo");
      event.stopPropagation();

      break;
    case "precio":
      console.log("precio");
      event.stopPropagation();

      break;

    default:
      console.log("card");
      break;
  }
});
