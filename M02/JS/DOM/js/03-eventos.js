// Exercici 3, Event al formulari: input
const busqueda = document.querySelector('.busqueda');
// a) Afegeix un event perque ens mostri un alert cada vegada que escribim una lletra al formulari buscar.

// busqueda.addEventListener('input', () => {
//     alert('Estas escribiendo...');
// }) 
// b) Afegeix un event perque ens mostri un alert cada vegada que escribim la lletra a (arrow function)
// busqueda.addEventListener('input', leerInput);
// function leerInput(e) {
//     if (e.target.value == 'a') {
//         alert('Has escrito una a...');
//     }

// }
// c) El mateix que l'exercici b, però ara fes servir una funció normal
busqueda.addEventListener('input', leerInput);

function leerInput(e) {
    if (e.target.value == 'a') {
        alert('Has escrito una a...');
    }

}