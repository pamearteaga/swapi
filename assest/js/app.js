
$('.personaje').click(function(){

  const img = $(this).val();
  console.log(img);
$.ajax({
  url: `https://swapi.co/api/people/${img}`
}).done(handleResponse).fail(errorResponse);

function handleResponse(data) {
  const name = data.name;
  const birth = data.birth_year;
  const gender = data.gender;
  const height = data.height;
  const eyes = data.eye_color;
  const hair = data.hair_color;
  const skin = data.skin_color;

  /*

  $('#dialog').dialog({
    autoOpen: false,
    show: 'blind',
    hide: 'explode'
});
*/

  $('main').append('<div><h2>' + name + '</h2><h3>Born in ' + birth + '</h3><p>Gender: ' + gender + '</p><p>Height: ' + height + '</p><p>Eyes color: ' + eyes + '</p><p>Hair color : ' + hair + '</p><p>Skin color: ' + skin + '</p>');
  console.log('listo!');

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
