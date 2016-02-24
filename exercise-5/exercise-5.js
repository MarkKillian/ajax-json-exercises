$(document).ready(function(){
  $('form').on('submit', function(event){
    event.preventDefault();
    var zipCode = $('form input').val();
    if(zipCode.length === 5 && Number(zipCode)){
      // We know the zip code is valid
      // Make our GET request
      $.get('http://maps.googleapis.com/maps/api/geocode/json', {address: zipCode}, function(responseData){
        var lat = responseData.results[0].geometry.location.lat;
        var lng = responseData.results[0].geometry.location.lng;
        console.log(lat, lng)
      });
    } else {
      // We know the zip code isn't valid
      alert('You didn\'t enter a zip code!');
    }
  });
});
