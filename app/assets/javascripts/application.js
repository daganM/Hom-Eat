// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require_tree .
var $window = $(window);
var $logoSmall = "40px"
var $logoBig = "100px"
// Change nav bg color function of scroll
$(document).ready(function() {
if (document.getElementById('logo') !== 'undefined') {
  var logo_width = document.getElementById('logo').style.width = $logoBig
}
var logoAnimate = function(oldwidth, newwidth, newmargin){
  document.getElementById('logo').style.width = oldwidth;
    $( "#logo" ).animate({
      width: newwidth
   }, 300, function() {
     console.log("Small");
   });
   $( "#navbar-home" ).animate({
     margin: newmargin
  }, 300, function() {
    // Animation complete.
    console.log("Big");

  });
   // document.getElementById('logo').style.width = "40px";
   logo_width = newwidth;
};
console.log(logo_width)
  $(window).scroll(function(){

       if ($window.scrollTop() >= 100){
         document.getElementById('navbarbg').style.backgroundColor = "rgba(51,41,30,0.6)";
         if(logo_width === $logoBig){
           logoAnimate($logoBig, $logoSmall, '0 0 0 0');
           document.getElementById('logo').style.width = $logoBig;
             $( "#logo" ).animate({
               width: $logoSmall
            }, 300, function() {
              console.log("Small");
            });
            $( "#navbar-home" ).animate({
              margin: '0 0 0 0'
           }, 300, function() {
             // Animation complete.
             console.log("Big");

           });
            // document.getElementById('logo').style.width = "40px";
            logo_width = $logoSmall;

        }
       } else {
         document.getElementById('navbarbg').style.backgroundColor = "rgba(0,0,0,0)";
         if(logo_width === $logoSmall){
          logoAnimate($logoSmall, $logoBig, '30px 0 0 0');
        }
       }
      parralax = $window.scrollTop();
      parralax = parralax/3;
      $('#headline').css('background-position', "center calc(50% + "+parralax+'px)');
  });
});
// Prevent Enter key on form (for GMaps api to fill forms)
$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode === 13) {
      event.preventDefault();
      return false;
    }
  });
});
function display(id, type){
  document.getElementById(id).style.display = type;
  return false;
}
function displayNoneClass(e){
  var elements = document.getElementsByClassName("inside");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
}
}
// Google Maps Autocomplete API JS

function initializeAutocomplete(id) {
  var element = document.getElementById(id);
  if (element) {
    var autocomplete = new google.maps.places.Autocomplete(element, { types: ['geocode'] });
    google.maps.event.addListener(autocomplete, 'place_changed', onPlaceChanged);
  }
}
google.maps.event.addDomListener(window, 'load', function() {
  initializeAutocomplete('user_input_autocomplete_address');
});
$(document).on('page:receive', initializeAutocomplete('user_input_autocomplete_address'));
$(document).on('turbolinks:receive', initializeAutocomplete('user_input_autocomplete_address'));

function onPlaceChanged() {
  var place = this.getPlace();

   console.log(place);  // Uncomment this line to view the full object returned by Google API.
   console.log("lat : " + place.geometry.location.lat());
   console.log("lng : " + place.geometry.location.lng());

  for (var i in place.address_components) {
    var component = place.address_components[i];
    for (var j in component.types) {  // Some types are ["country", "political"]
      var type_element = document.getElementById(component.types[j]);
      if (type_element) {
        type_element.value = component.long_name;
      }
    }
  }
  document.getElementById('lat').value = place.geometry.location.lat();
  document.getElementById('lng').value = place.geometry.location.lng();
}
// End of Google Maps JS Autocomplete API
// Beginning of Google Maps JS DistanceMatrix API
function distance(origin_lat, origin_lng, lat, lng, id){
  var UnitSystem = google.maps.UnitSystem.METRIC;
  var origin = new google.maps.LatLng(origin_lat,origin_lng);
  var destination = new google.maps.LatLng(lat, lng);
  var service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix(
    {
      origins: [origin],
      destinations: [destination],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: UnitSystem,
      avoidHighways: true,
      avoidTolls: true
    }, callback);

    function callback(response, status) {
      console.log("in callback");
      if (status === google.maps.DistanceMatrixStatus.OK) {
        console.log("status ok");
        var origins = response.originAddresses;
        var destinations = response.destinationAddresses;

        for (var i = 0; i < origins.length; i++) {
          var results = response.rows[i].elements;
          for (var j = 0; j < results.length; j++) {
            var element = results[j];
            var distance = element.distance.text;
            var duration = element.duration.text;
            var from = origins[i];
            var to = destinations[j];
            console.log(distance);
            document.getElementById("meal" + id).innerHTML = distance;
          }
        }
      }
    }
}
// End of Google Maps JS DistanceMatrix API
