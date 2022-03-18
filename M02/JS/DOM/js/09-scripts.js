//Crear una Nova card 
/*<div class="card">    
   <img src="img/hacer2.jpg">   
         <div class="info">    
                  <p class="categoria concierto">concierto</p>    
                           <p class="titulo">Concierto de Rock</p>       
                           <p class="precio">$800 por persona</p>  </div>   
                            </div>  */
const primeraP = document.createElement('p');
const txtPrim= document.createTextNode("concierto") 
primeraP.className = "categoria concierto"
primeraP.appendChild(txtPrim);

// console.log(primeraP);

const segundaP = document.createElement('p');
segundaP.className="titulo";
const txtSecun= document.createTextNode("Concierto de Rock")
segundaP.appendChild(txtSecun);



// console.log(segundaP);
const terceraP = document.createElement('p');
terceraP.className="precio";
const txtTerce= document.createTextNode("$800 por persona")
terceraP.appendChild(txtTerce);

// console.log(terceraP);
const primerDiv = document.createElement('div');
primerDiv.className="info";
primerDiv.appendChild(primeraP);
primerDiv.appendChild(segundaP);
primerDiv.appendChild(terceraP);

const imagen = document.createElement('img');
imagen.setAttribute("src", "img/hacer2.jpg");
const segundoDiv = document.createElement('div');
segundoDiv
.className="card";
segundoDiv.appendChild(imagen);
segundoDiv.appendChild(primerDiv);
console.log(segundoDiv);
const catalogo= document.getElementsByClassName('contenedor-cards')[0];
console.log(catalogo);
catalogo.appendChild(segundoDiv);
// contenedor-cards
