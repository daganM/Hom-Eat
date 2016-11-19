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
//= require jquery_ujs
//= require turbolinks
//= require_tree .
function displayBlock(id){
  document.getElementById(id).style.display = "block";
  return false;
}
function displayFlex(id){
  var div = document.getElementById(id);
  document.getElementById(id).style.display = "flex";
  return false;
}
function displayNone(id){
  var div = document.getElementById(id);
  document.getElementById(id).style.display = "none";
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
// End of Google Maps Autocomplete API JS
