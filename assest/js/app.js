
// la llamada se realiza al hacer click en la imagen
$('.personaje').click(function(){
// se obtiene el atributo value del botón, el cual contiene el ID del personaje
  const img = $(this).val();
// se realiza la llamada
$.ajax({
  // la url incluye el ID del personaje
  url: `https://swapi.co/api/people/${img}`
}).done(handleResponse).fail(errorResponse);
// si la respuesta es exitosa, se porcede a crear el modal con la información del personaje
  function handleResponse(data) {
    $('.modal-title, .modal-body').empty(); 
    $('.modal-title').append('<h2>' + data.name + '</h2>');
    $('.modal-body').append('<div><h4>Born in ' + data.birth_year + '</h4><p>Gender: ' + data.gender + '</p><p>Height: ' + data.height + '</p><p>Eyes color: ' + data.eye_color + '</p><p>Hair color : ' + data.hair_color + '</p><p>Skin color: ' + data.skin_color + '</p>');
  };
// en caso de que ocurra un error, se desplegará un mensaje en la consola
  function errorResponse() {
    console.log('Chewbacca dice: acooscwoohoorcanwa acaoaoakc cohraakah oaoo!!! (traducción: ocurrió un error :-( )');
  }

});
