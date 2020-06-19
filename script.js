
var map;
var markersArray = [];

var blueIcon = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
var yellowIcon = 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
var pinkIcon = 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png';
var purpleIcon = 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png';
var greenIcon = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';

function iniciarMap(){
    var coord = {lat:-34.5997778 ,lng: -58.4195921};
    var coord2 = {lat:-34.5997768 ,lng: -58.4195941};

    map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });

    addMarker(coord2, yellowIcon);
    addMarker(coord, greenIcon);
}


function addMarker(latLng, icono) {
  var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    animation: google.maps.Animation.DROP,
    title:'punto',
    icon: icono
  });

  markersArray.push(marker);
}


var geocoder;
      var map;
      var address = "direccion - Buenos Aires";
      function iniciarMap(){
        var coord = {lat:-34.5997778 ,lng: -58.4195921};
        var coord2 = {lat:-34.5997779 ,lng: -58.4195911};
    
        map = new google.maps.Map(document.getElementById('map'),{
          zoom: 10,
          center: coord
        });
        geocoder = new google.maps.Geocoder();
        codeAddress(geocoder, map);
      }

      function codeAddress(geocoder, map) {
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
            });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }
