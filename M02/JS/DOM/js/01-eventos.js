//DOMContentLoaded
// Escriu un hola mundo al carregar la plana 
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('hola mundo');         
}); 
//mouseenter, mouseout 
//a) Al entrar al menú de navegació, canviarem el seu estil de backgroundColor= White
const nav=document.querySelector(".navegacion");
nav.addEventListener("mousedown", clicRaton); 


function clicRaton() {
    document.querySelector(".navegacion").style.backgroundColor="red";
}


//b) Al sortir del menú de navegació, tornarem a deixar l'estil inicial (backgroundColor= transparent ) 