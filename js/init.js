(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.dropdown-button').dropdown({
          inDuration: 300,
          outDuration: 225,
          constrain_width: false,
          hover: true, // Activate on hover
          gutter: 0, // Spacing from edge
          belowOrigin: true, // Displays dropdown below the button
          alignment: 'left' // Displays dropdown with edge aligned to the left of button
        }
    );
    $('select').material_select();
    $('.slider').slider({full_width: true});

  }); // end of document ready
})(jQuery); // end of jQuery name space


var options = [
  {selector: '#index-banner', offset: 250, callback: function(el) {
    Materialize.fadeInImage($(el));
  } },
  {selector: '#icon-section', offset: 250, callback: function(el) {
    Materialize.fadeInImage($(el));
  } }
];

Materialize.scrollFire(options);

function initMap() {
  var uluru = {lat: 61.169246, lng: -149.870772};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
