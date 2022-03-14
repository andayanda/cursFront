//mostrar per pantalla a l'usuari/ària només els directors de les pel·lícules.
//Per obtenir l'array de directors/es, has de crear la funció getAllDirectors()
//usar el map para extraer el campo directo del array
function getAllDirectors() {
  const nuevoArray = movies.map(function (pelis) {
    return pelis.director;
  });

  console.table(nuevoArray);
}
// mostrar les pel·lícules per a un determinat director/ora.
//crear una funció getPelisFromDirector().Aquesta funció ha de rebre com a paràmetre el/la director/ora per al qual es volen buscar les seves pel·lícules, i retorna l'array de pel·lícules que ha dirigit.
//usar el mètode .filter()
function getPelisFromDirector(nombre) {
  const directorArray = movies.filter(function (film) {
    return film.director === nombre;
  });
  console.table(directorArray);
  return directorArray;

 
}
