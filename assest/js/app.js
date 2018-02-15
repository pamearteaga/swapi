
$('.personaje').click(function(){

  const img = $(this).val();
$.ajax({
  url: `https://swapi.co/api/people/${img}`
}).done(handleResponse).fail(errorResponse);

  function handleResponse(data) {
    $('main').append('<div><h2>' + data.name + '</h2><h3>Born in ' + data.birth_year + '</h3><p>Gender: ' + data.gender + '</p><p>Height: ' + data.height + '</p><p>Eyes color: ' + data.eye_color + '</p><p>Hair color : ' + data.hair_color + '</p><p>Skin color: ' + data.skin_color + '</p>');
  };

  function errorResponse() {
    console.log('Chewbacca dice: acooscwoohoorcanwa acaoaoakc cohraakah oaoo!!! (traducción: ocurrió un error :-( )');
  }

});




/*
name
birth_year
eye_color
gender
hair_color
height
skin_color
//llamadas
homeworld/planets/name
species/name
starships/name
vehicles/name
*/
