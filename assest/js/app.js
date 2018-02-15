
$('.personaje').click(function(){

  const img = $(this).val();

$.ajax({
  url: `https://swapi.co/api/people/${img}`
}).done(handleResponse).fail(errorResponse);

  function handleResponse(data) {
    $('.modal-title, .modal-body').empty();
    $('.modal-title').append('<h2>' + data.name + '</h2>');
    $('.modal-body').append('<div><h4>Born in ' + data.birth_year + '</h4><p>Gender: ' + data.gender + '</p><p>Height: ' + data.height + '</p><p>Eyes color: ' + data.eye_color + '</p><p>Hair color : ' + data.hair_color + '</p><p>Skin color: ' + data.skin_color + '</p>');
  };

  function errorResponse() {
    console.log('Chewbacca dice: acooscwoohoorcanwa acaoaoakc cohraakah oaoo!!! (traducción: ocurrió un error :-( )');
  }

});
